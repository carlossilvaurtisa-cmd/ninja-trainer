/* ============================================================
   BLOQUE 8: CLIENTE API DEEPSEEK - GENERACIÓN DE PREGUNTAS CON IA
   ============================================================ */

const DeepSeek = (function() {
  'use strict';

  const API_URL = 'https://api.deepseek.com/v1/chat/completions';
  const MODEL = 'deepseek-chat';

  // ==========================================================
  // INSTRUCCIÓN ZCODE (system prompt)
  // ==========================================================

  const SYSTEM_PROMPT = `Eres el "Examinador Ninja" para pruebas de razonamiento del Poder Judicial de Chile.

CONTEXTO: Simulación de pruebas de Habilidades y Destrezas. Formato: Verdadero (V), Falso (F), Desconocido (D).
Regla de Oro: "Desconocido" solo si la información NO está en los datos proporcionados. Nunca asumas tendencias futuras ni datos no mostrados.

Tu tarea es generar preguntas de evaluación a partir de los DATOS que te proporcionaré. Debes responder SIEMPRE en formato JSON válido.

FORMATO DE RESPUESTA OBLIGATORIO:
{
  "preguntas": [
    {
      "id": 1,
      "tabId": "nombre de la pestaña de donde sale",
      "tabTitulo": "título de la pestaña",
      "formula": "Comparación Directa | Evolución Temporal | Umbral/Proporción | Operación Cruzada | Desconocido Forzado",
      "enunciado": "texto de la afirmación a evaluar",
      "respuesta": "V | F | D",
      "explicacion": "Explicación clara de por qué la respuesta es V, F o D, mencionando los datos exactos de la pestaña."
    }
  ]
}

TIPOS DE FÓRMULAS PARA GENERAR PREGUNTAS:
1. Comparación Directa: "¿A > B en categoría X?"
2. Evolución Temporal: "¿A aumentó entre X e Y?"
3. Umbral/Proporción: "¿A representa más del X% del total?"
4. Operación Cruzada: "¿A + B > C?"
5. Desconocido Forzado: Preguntar por datos que NO existen en las pestañas → respuesta D

REGLAS:
- Genera exactamente la cantidad de preguntas solicitada.
- Mezcla al menos 25% de preguntas tipo "Desconocido".
- Varía las pestañas usadas.
- Las explicaciones deben citar datos concretos.
- Para Desconocido, explica claramente que el dato no existe.
- Responde SOLO con el JSON, sin texto adicional.`;

  // ==========================================================
  // FUNCIÓN PRINCIPAL
  // ==========================================================

  /**
   * Genera preguntas usando la API de DeepSeek.
   * @param {string} apiKey - Clave API de DeepSeek
   * @param {Array} tabs - Pestañas con datos
   * @param {number} cantidad - Número de preguntas a generar
   * @param {string} tipo - 'numerico' o 'verbal'
   * @returns {Promise<Array>} Array de preguntas generadas
   */
  async function generarPreguntas(apiKey, tabs, cantidad, tipo) {
    // Construir el contexto de datos para enviar a DeepSeek
    const datosContexto = construirContexto(tabs, tipo);

    const userPrompt = tipo === 'numerico'
      ? `Genera ${cantidad} preguntas de Razonamiento Numérico (V/F/D) a partir de estos datos:\n\n${datosContexto}\n\nAsegúrate de incluir al menos ${Math.ceil(cantidad * 0.25)} preguntas tipo "Desconocido Forzado" (datos que no existen).`
      : `Genera ${cantidad} preguntas de Razonamiento Verbal (V/F/D) a partir de estos textos:\n\n${datosContexto}\n\nAsegúrate de incluir al menos ${Math.ceil(cantidad * 0.25)} preguntas tipo "No Mencionado" o "Inferencia Trampa" (respuesta D).`;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: userPrompt }
          ],
          temperature: 0.7,
          max_tokens: 4000
        })
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`API Error ${response.status}: ${error}`);
      }

      const data = await response.json();
      const contenido = data.choices[0].message.content;

      // Extraer JSON de la respuesta (puede venir envuelto en markdown)
      const jsonStr = extraerJSON(contenido);
      const resultado = JSON.parse(jsonStr);

      if (!resultado.preguntas || !Array.isArray(resultado.preguntas)) {
        throw new Error('Formato de respuesta inválido de DeepSeek');
      }

      return resultado.preguntas.slice(0, cantidad);

    } catch (error) {
      console.error('Error en DeepSeek API:', error);
      throw error;
    }
  }

  /**
   * Genera retroalimentación global al finalizar un test.
   */
  async function generarRetroalimentacion(apiKey, resultados, tipo) {
    const userPrompt = `Analiza estos resultados de la prueba de ${tipo}:
- Puntaje: ${resultados.puntaje}%
- Aciertos: ${resultados.aciertos}
- Errores: ${resultados.errores}
- Tiempo usado: ${resultados.tiempoUsado}
- Detalle de errores: ${JSON.stringify(resultados.detalleErrores || [])}

Proporciona:
1. Un análisis de fortalezas y debilidades
2. Patrones de error identificados
3. Recomendaciones concretas para mejorar
4. Un mensaje motivacional estilo "Sensei Ninja"

Responde en formato JSON: { "analisis": "...", "debilidades": "...", "recomendaciones": "...", "mensaje": "..." }`;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: 'system', content: 'Eres un Sensei Ninja experto en análisis de desempeño en pruebas psicotécnicas. Respondes solo en JSON.' },
            { role: 'user', content: userPrompt }
          ],
          temperature: 0.6,
          max_tokens: 1500
        })
      });

      if (!response.ok) throw new Error(`API Error ${response.status}`);

      const data = await response.json();
      const contenido = data.choices[0].message.content;
      const jsonStr = extraerJSON(contenido);
      return JSON.parse(jsonStr);

    } catch (error) {
      console.error('Error en retroalimentación DeepSeek:', error);
      return null;
    }
  }

  // ==========================================================
  // HERRAMIENTAS AUXILIARES
  // ==========================================================

  function construirContexto(tabs, tipo) {
    if (tipo === 'numerico') {
      return tabs.map(tab => {
        let str = `PESTAÑA "${tab.titulo}" (${tab.tipo}):\n`;
        str += `Descripción: ${tab.descripcion || ''}\n`;
        str += `Categorías: ${(tab.categorias || []).join(', ')}\n`;
        str += `Series: ${(tab.series || []).join(', ')}\n`;
        str += `Datos:\n`;
        (tab.categorias || []).forEach(cat => {
          const valores = (tab.series || []).map(s => `${s}=${(tab.datos[cat] || {})[s] || 'N/D'}`).join(', ');
          str += `  ${cat}: ${valores}\n`;
        });
        return str;
      }).join('\n---\n');
    } else {
      return tabs.map(tab => {
        return `PESTAÑA "${tab.titulo}":\n${tab.contenido || ''}\n`;
      }).join('\n---\n');
    }
  }

  function extraerJSON(texto) {
    // Intentar extraer JSON de posible bloque markdown ```json ... ```
    const match = texto.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (match) return match[1].trim();

    // Intentar encontrar { } más externo
    const inicio = texto.indexOf('{');
    const fin = texto.lastIndexOf('}');
    if (inicio >= 0 && fin > inicio) {
      return texto.substring(inicio, fin + 1);
    }

    return texto;
  }

  // ==========================================================
  // GENERADOR DE DATASETS CON IA
  // ==========================================================

  /**
   * Genera un nuevo dataset (conjunto de pestañas) usando DeepSeek.
   * @param {string} apiKey
   * @param {string} tema - Tema sugerido (ej: 'finanzas', 'deportes', etc.)
   * @returns {Promise<Object>} { nombre, tabs } 
   */
  async function generarDataset(apiKey, tema) {
    const prompt = `Genera un conjunto de 3 o 4 pestañas con datos numéricos sobre el tema "${tema}" para una prueba de razonamiento numérico V/F/D.

Cada pestaña debe tener esta estructura exacta:
{
  "id": "identificador_unico",
  "titulo": "Título descriptivo de la pestaña",
  "tipo": "barras|lineas|torta|tabla",
  "descripcion": "Breve descripción de cómo leer el gráfico/tabla",
  "categorias": ["Cat1", "Cat2", ...],
  "series": ["Serie1", "Serie2", ...],
  "datos": { "Cat1": { "Serie1": valor, ... }, ... }
}

Reglas:
- Usa datos inventados pero REALISTAS y coherentes entre sí.
- Incluye al menos 1 pestaña de tipo "torta" y 1 de tipo "lineas".
- Los valores deben ser números enteros o con 1 decimal.
- Entre 3 y 6 categorías, entre 2 y 4 series por pestaña.
- NO incluyas preguntas, solo los datos.

Responde ÚNICAMENTE con este JSON:
{
  "nombre": "Nombre del dataset",
  "tabs": [ ...pestañas según estructura anterior... ]
}`;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: 'system', content: 'Eres un generador de datos estructurados para pruebas psicotécnicas. Respondes SOLO con JSON válido, sin markdown ni texto adicional.' },
            { role: 'user', content: prompt }
          ],
          temperature: 0.8,
          max_tokens: 3000
        })
      });

      if (!response.ok) throw new Error(`API Error ${response.status}`);

      const data = await response.json();
      const contenido = data.choices[0].message.content;
      const jsonStr = extraerJSON(contenido);
      const dataset = JSON.parse(jsonStr);

      // Guardar en localStorage para reutilizar
      const datasetsIA = JSON.parse(localStorage.getItem('ninja_datasets_ia') || '[]');
      dataset._iaGenerado = true;
      dataset._fecha = new Date().toISOString();
      datasetsIA.push(dataset);
      // Mantener últimos 10
      if (datasetsIA.length > 10) datasetsIA.shift();
      localStorage.setItem('ninja_datasets_ia', JSON.stringify(datasetsIA));

      return dataset;

    } catch (error) {
      console.error('Error generando dataset con DeepSeek:', error);
      return null;
    }
  }

  /**
   * Obtiene datasets generados por IA guardados en localStorage.
   */
  function obtenerDatasetsLocales() {
    try {
      return JSON.parse(localStorage.getItem('ninja_datasets_ia') || '[]');
    } catch (e) {
      return [];
    }
  }

  // ==========================================================
  // SYSTEM PROMPT - REFUERZO PROFESIONAL FST (ALTA CALIDAD)
  // ==========================================================

  const SYSTEM_PROMPT_REFUERZO = `Eres el "Examinador Ninja - Especialista FST", un fiscal experto en Protección de Víctimas y Testigos de la Fiscalía Supraterritorial de Chile.

CONTEXTO: Estás generando preguntas de REFUERZO para un profesional que acaba de completar una prueba de conocimientos y necesita fortalecer sus áreas débiles. Las preguntas deben enfocarse EXACTAMENTE en los temas donde tuvo errores.

FORMATO DE RESPUESTA OBLIGATORIO (JSON):
{
  "preguntas": [
    {
      "id": 1,
      "tema": "Nombre exacto del subtema del temario FST",
      "unidad": 1-5,
      "dificultad": "Fácil | Medio | Difícil",
      "tipo": "VFD | MC",
      "enunciado": "texto completo de la pregunta",
      "opciones": ["A) opcion1", "B) opcion2", "C) opcion3", "D) opcion4"],
      "respuesta": "V | F | D | 0 | 1 | 2 | 3",
      "explicacion": "Justificación técnica DETALLADA con referencia a la fuente legal específica (ley, artículo, decreto) y ubicación exacta. Incluir doctrina cuando aplique."
    }
  ]
}

ESTRUCTURA DEL TEMARIO FST (31 subtemas en 5 unidades):

UNIDAD 1 - Fundamentos de Victimología y Trauma:
- Victimología general
- Psicología del trauma y duelo
- Victimización primaria, secundaria y terciaria
- Revictimización y polivictimización

UNIDAD 2 - Fenomenología del Crimen Organizado:
- Crimen organizado
- Tráfico de drogas
- Trata de personas
- Tráfico ilícito de migrantes
- Secuestro
- Extorsión
- Lavado de activos
- Tráfico de armas
- Homicidios en contexto de crimen organizado
- Delitos contra la propiedad

UNIDAD 3 - Marco Jurídico y Procesal:
- Constitución y Ley Orgánica del Ministerio Público
- Código Procesal Penal
- Medidas de protección judiciales
- Medidas de protección autónomas
- Agentes encubiertos, reveladores e informantes
- Ley 21.057 (Entrevista videograbada, NNA)
- Ley 21.675 (Violencia integral contra las mujeres)
- Ley 21.430 (Garantías de la niñez)

UNIDAD 4 - Intervención y Atención a Víctimas:
- Primeros Auxilios Psicológicos (PAP)
- Técnicas de entrevista y escucha activa
- Prevención de victimización secundaria
- Evaluación de riesgo
- Plan de intervención y seguimiento
- Autocuidado del equipo

UNIDAD 5 - Coordinación y Cooperación:
- Redes y protocolos intersectoriales
- Cooperación internacional
- Fiscalía Supraterritorial y SAC

MARCO LEGAL DE REFERENCIA (OBLIGATORIO CITAR):
- Constitución Política de Chile: Art. 83 (Ministerio Público)
- Código Procesal Penal (Ley 19.696): Arts. 6, 78, 83, 109, 109 bis, 170, 247, 307, 308, 310, 312
- Ley 19.640 (LOC MP): Arts. 1, 3, 17, 20, 34
- Ley 20.000 (Drogas): Arts. 1, 3, 25, 25 bis, 26, 28
- Código Penal: Arts. 141 (secuestro), 391 (homicidio), 411 bis/quáter (trata/tráfico), 436/438 (robo/extorsión), 456 bis A (receptación)
- Ley 19.913 (Lavado de Activos/UAF): Arts. 2, 3, 8
- Ley 20.393 (Responsabilidad Penal Personas Jurídicas)
- Ley 17.798 (Control de Armas): Arts. 3, 9, 10, 13, 17 bis
- Ley 21.057 (Entrevista Videograbada NNA): Arts. 3, 6, 10, 12, 15, 16
- Ley 21.675 (Violencia Integral contra Mujeres, 2024): Arts. 4, 29
- Ley 21.430 (Garantías de la Niñez, 2022): Arts. 2, 7, 23, 36
- Convención de Palermo (2000): Arts. 2, 5, 6, 16, 18, 19, 24
- Manual de Capacitación en Temas Victimológicos RAV (Ministerio del Interior, 2009)
- Manual ABCDE para Primeros Auxilios Psicológicos (2018)
- Protocolo Intersectorial de Atención a Víctimas de Trata de Personas
- DSM-5 (APA, 2013): Criterios TEPT

REGLAS ESTRICTAS:
1. Genera EXACTAMENTE la cantidad de preguntas solicitada.
2. Cada pregunta debe enfocarse en UNO de los temas débiles indicados.
3. Para preguntas VFD: la respuesta debe ser V (Verdadero), F (Falso) o D (Desconocido). Usa D solo cuando la información NO existe en la ley/doctrina citada.
4. Para preguntas MC: 4 opciones (A,B,C,D). Solo UNA correcta. Las opciones incorrectas deben ser verosímiles (no absurdas).
5. Las explicaciones DEBEN incluir: (a) justificación técnica, (b) referencia a ley específica con número de artículo, (c) ubicación en el manual o doctrina cuando aplique, (d) análisis de por qué cada alternativa incorrecta es incorrecta.
6. NUNCA inventes leyes o artículos. Solo usa el marco legal de referencia proporcionado.
7. Mezcla preguntas tipo VFD y MC (aproximadamente 50/50).
8. Varía el nivel de dificultad: 30% Fácil, 40% Medio, 30% Difícil.
9. El enunciado debe ser claro, preciso y académico.
10. Responde SOLO con el JSON, sin markdown ni texto adicional.`;

  // ==========================================================
  // FUNCIÓN: GENERAR PREGUNTAS DE REFUERZO POR ERRORES
  // ==========================================================

  /**
   * Genera preguntas enfocadas en los temas donde el usuario tuvo errores.
   * @param {string} apiKey - Clave API de DeepSeek
   * @param {Array} temasDebiles - Array de strings con los temas donde hubo errores
   * @param {Array} preguntasFalladas - Array con enunciados y explicaciones de preguntas falladas
   * @param {number} cantidad - Número de preguntas a generar
   * @returns {Promise<Array>} Array de preguntas generadas
   */
  async function generarPreguntasRefuerzo(apiKey, temasDebiles, preguntasFalladas, cantidad) {
    const temasUnicos = [...new Set(temasDebiles)].join(', ');
    const ejemplosFallos = preguntasFalladas.slice(0, 5).map((p, i) =>
      `${i+1}. Tema: ${p.area || 'General'}\n   Pregunta: "${p.enunciado}"\n   Error del usuario: respondió "${p.respuestaUsuario}" | Correcta: "${p.respuestaCorrecta}"\n   Explicación: ${p.explicacion || 'N/A'}`
    ).join('\n\n');

    const userPrompt = `Genera ${cantidad} preguntas de REFUERZO enfocadas EXCLUSIVAMENTE en los siguientes temas donde el usuario tuvo ERRORES:

TEMAS DÉBILES IDENTIFICADOS: ${temasUnicos}

EJEMPLOS DE PREGUNTAS QUE FALLÓ (para que NO repitas las mismas):
${ejemplosFallos || 'No disponible'}

INSTRUCCIONES:
- Las preguntas deben cubrir los temas débiles identificados.
- NO repitas preguntas iguales a las que ya falló (los ejemplos anteriores).
- Asegura que cada pregunta ponga a prueba comprensión profunda, no memorización.
- Incluye preguntas que combinen múltiples conceptos de los temas débiles.
- Usa el formato VFD y MC mezclado (~50/50).
- Cada explicación debe ser didáctica y ayudar al usuario a entender POR QUÉ se equivocó.`;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT_REFUERZO },
            { role: 'user', content: userPrompt }
          ],
          temperature: 0.6,
          max_tokens: 6000
        })
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`API Error ${response.status}: ${error}`);
      }

      const data = await response.json();
      const contenido = data.choices[0].message.content;
      const jsonStr = extraerJSON(contenido);
      const resultado = JSON.parse(jsonStr);

      if (!resultado.preguntas || !Array.isArray(resultado.preguntas)) {
        throw new Error('Formato de respuesta inválido de DeepSeek');
      }

      // Normalizar preguntas al formato que espera el motor
      return resultado.preguntas.slice(0, cantidad).map(p => ({
        tipo: p.tipo || 'VFD',
        area: p.tema || p.area || 'Refuerzo FST',
        nivel: (p.dificultad || 'Medio').toLowerCase() === 'fácil' ? 'facil' :
               (p.dificultad || 'Medio').toLowerCase() === 'difícil' ? 'dificil' : 'intermedio',
        enunciado: p.enunciado || p.pregunta || '',
        opciones: p.opciones || [],
        respuesta: p.tipo === 'MC' ? (typeof p.respuesta === 'number' ? p.respuesta : parseInt(p.respuesta) || 0) : String(p.respuesta || '').charAt(0).toUpperCase(),
        explicacion: p.explicacion || ''
      }));

    } catch (error) {
      console.error('Error en DeepSeek Refuerzo:', error);
      throw error;
    }
  }

  // ==========================================================
  // API PÚBLICA
  // ==========================================================

  return {
    generarPreguntas: generarPreguntas,
    generarRetroalimentacion: generarRetroalimentacion,
    generarDataset: generarDataset,
    obtenerDatasetsLocales: obtenerDatasetsLocales,
    generarPreguntasRefuerzo: generarPreguntasRefuerzo
  };

})();

/* FIN BLOQUE 8 */
