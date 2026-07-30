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
          max_tokens: 4000,
          response_format: { type: "json_object" }
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
          max_tokens: 1500,
          response_format: { type: "json_object" }
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
    if (match) return repararJSON(match[1].trim());

    // Intentar encontrar { } más externo
    const inicio = texto.indexOf('{');
    const fin = texto.lastIndexOf('}');
    if (inicio >= 0 && fin > inicio) {
      return repararJSON(texto.substring(inicio, fin + 1));
    }

    return repararJSON(texto);
  }

  /**
   * Repara errores comunes del JSON generado por DeepSeek:
   * - Comas finales sobrantes (trailing commas)
   * - Comas faltantes entre elementos de array
   * - Saltos de línea sin escapar dentro de strings
   * - Comillas sin escapar dentro de strings
   */
  function repararJSON(jsonStr) {
    try {
      // Verificar si ya es válido
      JSON.parse(jsonStr);
      return jsonStr;
    } catch (e) {
      // Continuar con reparaciones
    }

    var fijo = jsonStr;

    // 1. Quitar comas antes de } o ] (trailing commas)
    fijo = fijo.replace(/,(\s*[}\]])/g, '$1');

    // 2. Quitar comentarios de línea (// ...)
    fijo = fijo.replace(/\/\/.*$/gm, '');

    // 3. Arreglar comillas tipográficas (curly quotes) que a veces mete DeepSeek
    fijo = fijo.replace(/[\u201C\u201D]/g, '"');

    // 4. Intentar parsear. Si todavía falla, intentar reparación agresiva
    try {
      JSON.parse(fijo);
      return fijo;
    } catch (e2) {
      // Extraer el mensaje de error para diagnóstico
      var errMsg = e2.message;
      var posMatch = errMsg.match(/position\s+(\d+)/);
      
      if (posMatch) {
        var pos = parseInt(posMatch[1]);
        var contexto = fijo.substring(Math.max(0, pos - 40), Math.min(fijo.length, pos + 40));
        console.warn('JSON error en posición ' + pos + ': ...' + contexto + '...');
        
        // 5. Intentar reparar comillas dentro de strings (el error más común de DeepSeek)
        // Buscar patrones como: "texto "citado" dentro"
        var reparado = fijo;
        // Reemplazar comillas internas en valores de string por comillas simples
        reparado = reparado.replace(/"([^"]*?)"([^"]*?)"/g, function(m, antes, despues) {
          return '"' + antes + "'" + despues + '"';
        });
        
        try {
          JSON.parse(reparado);
          console.warn('JSON reparado con sustitución de comillas internas');
          return reparado;
        } catch (e3) {
          // No se pudo reparar, devolver el mejor intento
        }
      }

      // Último intento: extraer solo el array de preguntas con regex tolerante
      var preguntasMatch = fijo.match(/"preguntas"\s*:\s*(\[[\s\S]*\])/);
      if (preguntasMatch) {
        try {
          var arr = JSON.parse(preguntasMatch[1]);
          return JSON.stringify({ preguntas: arr });
        } catch (e4) {
          // No se pudo
        }
      }

      throw e2; // Re-lanzar el error original
    }
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
          max_tokens: 3000,
          response_format: { type: "json_object" }
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

  const SYSTEM_PROMPT_REFUERZO = `Eres un fiscal especializado de la Fiscalía Supraterritorial de Chile, con 15 años de experiencia en Protección de Víctimas y Testigos. Tu función es generar preguntas de evaluación de ALTA PRECISIÓN para profesionales que necesitan reforzar conocimientos en áreas específicas donde cometieron errores.

═══════════════════════════════════════
FORMATO DE RESPUESTA (JSON ESTRICTO)
═══════════════════════════════════════

Responde EXCLUSIVAMENTE con este JSON. Nada de markdown, ni texto fuera del JSON:
{
  "preguntas": [
    {
      "tema": "Nombre exacto del subtema (ver lista abajo)",
      "unidad": 1,
      "dificultad": "facil",
      "tipo": "VFD",
      "enunciado": "texto completo",
      "opciones": [],
      "respuesta": "V",
      "explicacion": "texto detallado con ley, artículo y análisis"
    },
    {
      "tema": "Nombre exacto del subtema",
      "unidad": 3,
      "dificultad": "medio",
      "tipo": "MC",
      "enunciado": "¿texto completo de la pregunta?",
      "opciones": ["A) ...", "B) ...", "C) ...", "D) ..."],
      "respuesta": 0,
      "explicacion": "texto detallado explicando por qué la correcta es correcta y cada distractora es incorrecta"
    }
  ]
}

═══════════════════════════════════════
FORMATO VFD (Verdadero/Falso/Desconocido)
═══════════════════════════════════════

- "tipo": "VFD"
- "enunciado": Debe ser una AFIRMACIÓN DECLARATIVA, no una pregunta. La persona debe juzgar si es Verdadera (V), Falsa (F) o Desconocida (D).
- "opciones": [] (array vacío, sin opciones)
- "respuesta": "V" o "F" o "D" (string de 1 carácter, mayúscula)
- "D" SOLO cuando la información NO existe en ninguna ley, doctrina o fuente oficial chilena. No usar "D" por desconocimiento propio.

Ejemplo CORRECTO de VFD:
✓ "enunciado": "El artículo 109 del Código Procesal Penal permite a la víctima solicitar medidas de protección sin necesidad de abogado patrocinante."
  → respuesta: "V" (Art. 109 inc. 2° CPP)

Ejemplo INCORRECTO de VFD:
✗ "enunciado": "¿El artículo 109 permite solicitar medidas de protección?" → es pregunta, no afirmación
✗ "enunciado": "La víctima tiene derechos." → demasiado vago, no evaluable

═══════════════════════════════════════
FORMATO MC (Selección Múltiple)
═══════════════════════════════════════

- "tipo": "MC"
- "enunciado": Debe terminar con signo de interrogación (?). Debe ser una pregunta CLARA y ESPECÍFICA.
- "opciones": Array de 4 strings EXACTAMENTE. Cada uno con formato "A) texto", "B) texto", etc.
- "respuesta": número entero (0=A, 1=B, 2=C, 3=D). Solo UNA correcta.
- Las 3 opciones incorrectas deben ser VEROSÍMILES (plausibles para quien no domina el tema) pero INEQUÍVOCAMENTE FALSAS según la ley.

Ejemplo CORRECTO de MC:
✓ "enunciado": "¿Cuál de los siguientes NO es un derecho de la víctima según el artículo 78 del Código Procesal Penal?"
  "opciones": [
    "A) Solicitar medidas de protección frente a amenazas",
    "B) Recibir atención médica y psicológica de urgencia",
    "C) Decidir la calificación jurídica del delito",
    "D) Ser oída por el fiscal antes del archivo provisional"
  ]
  → respuesta: 2 (la C es incorrecta: la calificación jurídica es facultad exclusiva del MP, Art. 83 Constitución)

═══════════════════════════════════════
NIVELES DE DIFICULTAD (calibración exacta)
═══════════════════════════════════════

"facil": La respuesta está EXPLÍCITAMENTE en el texto de una ley o manual. El profesional que leyó el material DEBE saberlo.
  Ej: "El art. 78 CPP enumera los derechos de la víctima. ¿V o F?"

"medio": Requiere CONECTAR dos o más conceptos de distintas fuentes (ley + doctrina, o dos artículos). Evalúa comprensión, no memoria.
  Ej: "Según el art. 109 CPP y la doctrina victimológica, ¿la revictimización secundaria puede ser causada por el sistema judicial? ¿V o F?"

"dificil": Presenta un CASO PRÁCTICO o una AFIRMACIÓN SUTILMENTE INCORRECTA que requiere análisis crítico. El error no es obvio.
  Ej: "Un testigo protegido con reserva total de identidad (art. 307 CPP) no podrá ser contrainterrogado por la defensa bajo ninguna circunstancia. ¿V o F?" → FALSO (el TC en Rol 2030-11-INA permite preguntas por escrito canalizadas por el juez)

Distribución obligatoria: ~30% facil, ~40% medio, ~30% dificil.

═══════════════════════════════════════
ESTRUCTURA DE LA EXPLICACIÓN (OBLIGATORIO)
═══════════════════════════════════════

Cada "explicacion" debe tener MÍNIMO 250 caracteres y seguir esta estructura:

1. RESPUESTA: "[Verdadero/Falso/Desconocido/Opción X]. [Una frase que resume por qué]."
2. FUNDAMENTO LEGAL: "Según [Ley N°XX.XXX], Artículo [N°], [cita textual o paráfrasis precisa de la norma]."
3. DOCTRINA/MANUAL: "El [Manual/Protocolo X] (año, página) señala que [cita doctrinal cuando aplique]."
4. ANÁLISIS DE DISTRACTORES (solo para MC): "A) Incorrecta porque... B) Incorrecta porque... C) Correcta porque... D) Incorrecta porque..."
5. APLICACIÓN PRÁCTICA: "En la práctica de la URAVIT/FST, esto implica que [consecuencia concreta para el profesional]."

Ejemplo de explicacion CORRECTA:
"Verdadero. El artículo 109 inciso 2° del Código Procesal Penal (Ley 19.696) establece expresamente: 'La solicitud de protección no requerirá de formalidad alguna y podrá ser presentada por la propia víctima, sin necesidad de abogado patrocinante'. El Manual de Capacitación en Temas Victimológicos RAV (2009, pág. 55) refuerza que 'las instituciones de la Red deben facilitar que las víctimas accedan a medidas de protección sin barreras burocráticas'. En la práctica URAVIT, la víctima puede solicitar protección verbalmente en cualquier oficina del Ministerio Público, y el fiscal tiene el deber de acoger y tramitar la solicitud de inmediato."

Ejemplo de explicacion INCORRECTA:
✗ "Correcto. Art. 109 CPP." → demasiado breve, sin análisis

═══════════════════════════════════════
TEMARIO OFICIAL FST (31 subtemas)
═══════════════════════════════════════

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
- Ley 21.057 (Entrevista videograbada NNA)
- Ley 21.675 (Violencia integral contra mujeres, 2024)
- Ley 21.430 (Garantías de la niñez, 2022)

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

═══════════════════════════════════════
MARCO LEGAL (SOLO USAR ESTAS FUENTES)
═══════════════════════════════════════

NUNCA inventes leyes, artículos ni referencias. Solo usa:
- Constitución Política de Chile: Art. 83 (MP)
- CPP (Ley 19.696): Arts. 6, 78, 83, 109, 109 bis, 131, 140, 155, 167, 170, 182, 186, 229, 247, 258, 295, 307, 308, 310, 312, 314, 329
- LOC MP (Ley 19.640): Arts. 1, 3, 14, 16, 17, 20, 34
- Ley 20.000 (Drogas): Arts. 1, 3, 22, 25, 25 bis, 26, 28, 30, 37
- Código Penal: Arts. 11, 12, 141, 142, 161-C, 250, 251 bis, 292, 391, 411 bis, 411 quáter, 432, 433, 436, 438, 439, 440, 446, 456 bis A, 468, 487
- Ley 19.913 (UAF/Lavado): Arts. 2, 3, 8, 27
- Ley 20.393 (Resp. Penal Personas Jurídicas): Art. 3
- Ley 17.798 (Control de Armas): Arts. 3, 9, 10, 13, 17 bis
- Ley 21.057 (Entrevista Videograbada): Arts. 1, 3, 5, 6, 8, 10, 11, 12, 13, 14, 15, 15 bis, 16
- Ley 21.675 (Violencia Integral Mujeres, 2024): Arts. 4, 29
- Ley 21.430 (Garantías Niñez, 2022): Arts. 2, 7, 23, 36
- Ley 21.560 (Fortalecimiento Persecución Penal, 2023)
- Convención de Palermo (2000, ratif. D.S. 342/2004): Arts. 2, 3, 5, 6, 8, 16, 18, 19, 23, 24
- Manual Victimológico RAV (Ministerio del Interior, 2009): Caps. III, IV, V, VIII
- Manual ABCDE para PAP (2018): págs. 7-34
- Protocolo Intersectorial Atención Víctimas de Trata (2015)
- DSM-5 (APA, 2013): Criterios TEPT (309.81/F43.10), págs. 271-280
- Hobfoll et al. (2007): Five Essential Elements
- Campbell et al. (2003): Risk Factors for Femicide
- STC Rol 2030-11-INA (TC, 2012), STC Rol 3001-16-INA (TC, 2017)

═══════════════════════════════════════
PROHIBICIONES (LO QUE NUNCA DEBES HACER)
═══════════════════════════════════════

❌ NO hagas preguntas sobre opiniones o juicios de valor ("¿es buena la Ley 21.057?").
❌ NO uses "Desconocido" como respuesta fácil o comodín. Solo cuando realmente no exista el dato.
❌ NO generes preguntas obvias o triviales (ej: "¿2+2=4? V o F").
❌ NO pongas opciones absurdas en MC (ej: "D) Comer helado").
❌ NO inventes leyes, números de artículo ni referencias.
❌ NO repitas preguntas que YA falló el usuario (vienen listadas en el prompt del usuario).
❌ NO uses lenguaje coloquial, emoticonos ni expresiones informales.
❌ NO generes preguntas de memoria pura ("¿En qué año se publicó la ley X?"). Evalúa COMPRENSIÓN y APLICACIÓN.

═══════════════════════════════════════
EJEMPLO COMPLETO DE PREGUNTA BIEN CONSTRUIDA (MC)
═══════════════════════════════════════

{
  "tema": "Medidas de protección judiciales",
  "unidad": 3,
  "dificultad": "medio",
  "tipo": "MC",
  "enunciado": "Un testigo clave en un caso de narcotráfico recibe amenazas de muerte de la organización criminal investigada. El fiscal solicita al tribunal reserva total de identidad. ¿Cuál de las siguientes afirmaciones sobre esta medida es CORRECTA según la legislación chilena?",
  "opciones": [
    "A) La reserva total de identidad impide absolutamente que la defensa pueda formular preguntas al testigo, vulnerando el debido proceso",
    "B) La reserva total procede solo cuando existan antecedentes calificados de riesgo grave para la vida o integridad física, es temporal, y la defensa puede presentar preguntas por escrito al juez",
    "C) La reserva total de identidad puede ser decretada directamente por la URAVIT sin necesidad de autorización judicial",
    "D) La reserva total de identidad es permanente e irrevocable una vez concedida por el tribunal"
  ],
  "respuesta": 1,
  "explicacion": "Opción B es correcta. El artículo 307 inciso 4° del Código Procesal Penal (Ley 19.696) establece que la reserva total de identidad procede solo con 'antecedentes calificados de que existe riesgo grave para la vida o integridad física del testigo o su familia', y solo 'por el tiempo indispensable'. El Tribunal Constitucional (STC Rol 2030-11-INA, 2012) declaró que esta medida es constitucional siempre que se garantice un estándar mínimo de contradicción, permitiendo a la defensa presentar preguntas por escrito al juez, quien las formulará al testigo. Análisis de distractores: A) Falsa: la defensa sí puede formular preguntas (por escrito, canalizadas por el juez). C) Falsa: la reserva total es medida JUDICIAL, requiere autorización del tribunal (no es autónoma de la URAVIT). D) Falsa: es temporal, no permanente (Art. 307 inc. 4°: 'por el tiempo indispensable'). En la práctica URAVIT, la reserva total se revisa periódicamente y puede cesar cuando el riesgo desaparece."
}`;

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

    const userPrompt = `⚠️ REFUERZO DE ERRORES — Genera EXACTAMENTE ${cantidad} preguntas NUEVAS (no repetir las de abajo).

TEMAS DÉBILES (enfócate SOLO en estos): ${temasUnicos}

PREGUNTAS QUE YA FALLÓ (NO las repitas — genera preguntas DIFERENTES sobre estos mismos temas):
${ejemplosFallos || 'No disponible'}

CRITERIOS DE CALIDAD:
1. Cada pregunta debe evaluar COMPRENSIÓN y APLICACIÓN, no memorización.
2. Para VFD: afirmaciones declarativas precisas, no preguntas ni vaguedades.
3. Para MC: 4 opciones verosímiles, con distractores que reflejen errores conceptuales comunes.
4. Explicaciones de MÍNIMO 250 caracteres con: ley + artículo + doctrina + análisis de distractores.
5. Dificultad: ~30% facil (respuesta explícita en la ley), ~40% medio (conectar conceptos), ~30% dificil (caso práctico o error sutil).
6. NO uses "Desconocido" como comodín. Solo cuando el dato realmente no exista en la legislación chilena.`;

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
          max_tokens: 6000,
          response_format: { type: "json_object" }
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
  // FUNCIÓN: GENERACIÓN BACKGROUND POR ERROR (NO BLOQUEANTE)
  // Acumula errores y dispara la API en lotes durante el test
  // ==========================================================

  // Cola de errores pendientes de procesar
  let _errorQueue = [];
  let _batchTimer = null;
  let _batchInProgress = false;
  const BATCH_DELAY = 8000;  // 8 seg después del primer error
  const BATCH_SIZE = 3;      // disparar tras 3 errores acumulados

  /**
   * Encola un error para generación background.
   * Se llama DESPUÉS de cada respuesta incorrecta durante el test.
   * @param {string} apiKey
   * @param {string} area - El área/tema donde falló
   * @param {object} preguntaFallada - {enunciado, respuestaUsuario, respuestaCorrecta, explicacion}
   * @param {string} userPrefix - Prefijo para localStorage (userKey)
   */
  function encolarErrorRefuerzo(apiKey, area, preguntaFallada, userPrefix) {
    if (!apiKey || !area) return;

    // Agregar a la cola
    _errorQueue.push({ area, pregunta: preguntaFallada, userPrefix });

    // Si ya hay un batch en progreso o timer, solo acumulamos
    if (_batchInProgress) return;

    // Disparar inmediatamente si llegamos al tamaño del lote
    if (_errorQueue.length >= BATCH_SIZE) {
      if (_batchTimer) { clearTimeout(_batchTimer); _batchTimer = null; }
      _procesarLoteBackground(apiKey, userPrefix);
      return;
    }

    // Si es el primer error, programar batch para dentro de BATCH_DELAY
    if (!_batchTimer && _errorQueue.length === 1) {
      _batchTimer = setTimeout(() => {
        _batchTimer = null;
        _procesarLoteBackground(apiKey, userPrefix);
      }, BATCH_DELAY);
    }
  }

  /**
   * Procesa la cola de errores: envía 1 llamada a la API por todas las áreas acumuladas.
   */
  async function _procesarLoteBackground(apiKey, userPrefix) {
    if (_errorQueue.length === 0 || _batchInProgress) return;
    _batchInProgress = true;

    const lote = [..._errorQueue];
    _errorQueue = []; // vaciar cola

    if (_batchTimer) { clearTimeout(_batchTimer); _batchTimer = null; }

    const areasUnicas = [...new Set(lote.map(e => e.area))];
    const preguntasFalladas = lote.map(e => e.pregunta).filter(Boolean);

    // Prompt para batch: 2-3 preguntas por área, no repetir falladas
    const userPrompt = `Genera ${areasUnicas.length * 2} preguntas sobre estos temas donde el usuario cometió errores: ${areasUnicas.join('; ')}.

⚠️ NO repitas estas preguntas que ya falló (genera preguntas DIFERENTES sobre los mismos temas):
${preguntasFalladas.slice(0,3).map(function(p){ return '- "' + (p.enunciado ? p.enunciado.substring(0,100) : 'N/A') + '"'; }).join('\n')}

Mantén alta calidad: explicaciones con ley+artículo, opciones verosímiles en MC, afirmaciones precisas en VFD.`;

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
          max_tokens: 3000,
          response_format: { type: "json_object" }
        })
      });

      if (!response.ok) {
        console.warn('Background batch API error:', response.status);
        _batchInProgress = false;
        return;
      }

      const data = await response.json();
      const contenido = data.choices[0].message.content;
      const jsonStr = extraerJSON(contenido);
      const resultado = JSON.parse(jsonStr);

      if (!resultado.preguntas || !Array.isArray(resultado.preguntas)) {
        _batchInProgress = false;
        return;
      }

      // Normalizar
      const nuevasPreguntas = resultado.preguntas.map(p => ({
        tipo: p.tipo || 'VFD',
        area: p.tema || p.area || 'Refuerzo FST',
        nivel: (p.dificultad || 'Medio').toLowerCase() === 'fácil' ? 'facil' :
               (p.dificultad || 'Medio').toLowerCase() === 'difícil' ? 'dificil' : 'intermedio',
        enunciado: p.enunciado || p.pregunta || '',
        opciones: p.opciones || [],
        respuesta: p.tipo === 'MC' ? (typeof p.respuesta === 'number' ? p.respuesta : parseInt(p.respuesta) || 0) : String(p.respuesta || '').charAt(0).toUpperCase(),
        explicacion: p.explicacion || '',
        _generada: true,
        _fecha: new Date().toISOString()
      }));

      // Guardar en pool localStorage
      const poolKey = (userPrefix || 'ninja_') + 'refuerzo_pool';
      let pool = [];
      try {
        pool = JSON.parse(localStorage.getItem(poolKey) || '[]');
      } catch(e) { pool = []; }

      // Evitar duplicados exactos (mismo enunciado)
      const enunciadosExistentes = new Set(pool.map(p => p.enunciado?.substring(0,60)));
      const preguntasUnicas = nuevasPreguntas.filter(p => !enunciadosExistentes.has(p.enunciado?.substring(0,60)));

      pool = [...pool, ...preguntasUnicas];
      // Limitar a 60 preguntas en pool para no saturar localStorage
      if (pool.length > 60) pool = pool.slice(pool.length - 60);
      localStorage.setItem(poolKey, JSON.stringify(pool));

      console.log(`✅ Background: ${preguntasUnicas.length} preguntas generadas para pool (${pool.length} total)`);

    } catch (error) {
      console.warn('Background batch failed:', error.message);
    }
    _batchInProgress = false;
  }

  /**
   * Obtiene el pool de preguntas de refuerzo generadas en background.
   * @param {string} userPrefix 
   * @returns {Array}
   */
  function obtenerPoolRefuerzo(userPrefix) {
    const poolKey = (userPrefix || 'ninja_') + 'refuerzo_pool';
    try {
      return JSON.parse(localStorage.getItem(poolKey) || '[]');
    } catch(e) { return []; }
  }

  /**
   * Extrae preguntas del pool para temas específicos y las consume (elimina del pool).
   * @param {string} userPrefix
   * @param {Array} temas - Áreas a extraer
   * @param {number} cantidad - Máximo a extraer
   * @returns {Array}
   */
  function consumirDelPool(userPrefix, temas, cantidad) {
    const poolKey = (userPrefix || 'ninja_') + 'refuerzo_pool';
    let pool = [];
    try { pool = JSON.parse(localStorage.getItem(poolKey) || '[]'); } catch(e) { pool = []; }

    const extraidas = [];
    const restantes = [];

    for (const p of pool) {
      if (extraidas.length >= cantidad) {
        restantes.push(p);
      } else if (temas.some(t => (p.area || '').toLowerCase().includes(t.toLowerCase()) || t.toLowerCase().includes((p.area || '').toLowerCase()))) {
        extraidas.push(p);
      } else {
        restantes.push(p);
      }
    }

    localStorage.setItem(poolKey, JSON.stringify(restantes));
    return extraidas;
  }

  return {
    generarPreguntas: generarPreguntas,
    generarRetroalimentacion: generarRetroalimentacion,
    generarDataset: generarDataset,
    obtenerDatasetsLocales: obtenerDatasetsLocales,
    generarPreguntasRefuerzo: generarPreguntasRefuerzo,
    encolarErrorRefuerzo: encolarErrorRefuerzo,
    obtenerPoolRefuerzo: obtenerPoolRefuerzo,
    consumirDelPool: consumirDelPool
  };

})();

/* FIN BLOQUE 8 */
