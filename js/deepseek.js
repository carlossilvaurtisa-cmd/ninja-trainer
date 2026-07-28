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
  // API PÚBLICA
  // ==========================================================

  return {
    generarPreguntas: generarPreguntas,
    generarRetroalimentacion: generarRetroalimentacion,
    generarDataset: generarDataset,
    obtenerDatasetsLocales: obtenerDatasetsLocales
  };

})();

/* FIN BLOQUE 8 */
