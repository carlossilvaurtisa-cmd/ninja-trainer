/* ============================================================
   BLOQUE 4: MOTOR V/F/D - RAZONAMIENTO NUMÉRICO Y VERBAL
   ============================================================ */

const EngineVFD = (function() {
  'use strict';

  // ==========================================================
  // PARTE A: GENERADOR DE PREGUNTAS NUMÉRICAS
  // ==========================================================

  /**
   * Genera una pregunta de tipo numérico usando una de 5 fórmulas.
   * @param {Array} tabs - Pestañas de datos del banco numérico
   * @returns {Object} Pregunta generada con enunciado, contexto, respuesta y explicación
   */
  function generarPreguntaNumerica(tabs) {
    // Barajar: 60% fórmula aleatoria, 40% aseguramos variedad de "Desconocido"
    const usarDesconocido = Math.random() < 0.25; // 25% de preguntas son tipo D
    let formula;

    if (usarDesconocido) {
      formula = 5;
    } else {
      formula = Math.floor(Math.random() * 4) + 1; // 1-4
    }

    switch (formula) {
      case 1: return generarComparacionDirecta(tabs);
      case 2: return generarEvolucionTemporal(tabs);
      case 3: return generarUmbralProporcion(tabs);
      case 4: return generarOperacionCruzada(tabs);
      case 5: return generarDesconocidoForzado(tabs);
      default: return generarComparacionDirecta(tabs);
    }
  }

  // --- Fórmula 1: Comparación Directa ---
  function generarComparacionDirecta(tabs) {
    const tab = elegirTabConSeries(tabs);
    if (!tab) return generarDesconocidoForzado(tabs);

    const categoria = elegirAlAzar(tab.categorias);
    const [serieA, serieB] = elegirDosAlAzar(tab.series);
    const valA = tab.datos[categoria][serieA];
    const valB = tab.datos[categoria][serieB];

    if (valA === undefined || valB === undefined) return generarComparacionDirecta(tabs);

    const afirmarVerdad = Math.random() > 0.5;
    let enunciado, respuesta;

    if (valA === valB) {
      enunciado = `En ${categoria}, ${serieA} igualó a ${serieB}.`;
      respuesta = 'V';
    } else if ((afirmarVerdad && valA > valB) || (!afirmarVerdad && valA < valB)) {
      enunciado = `En ${categoria}, ${serieA} superó a ${serieB}.`;
      respuesta = afirmarVerdad ? 'V' : 'F';
    } else {
      enunciado = `En ${categoria}, ${serieB} superó a ${serieA}.`;
      respuesta = (valB > valA) ? 'V' : 'F';
    }

    return {
      tabId: tab.id,
      tabTitulo: tab.titulo,
      formula: 'Comparación Directa',
      enunciado: enunciado,
      respuesta: respuesta,
      explicacion: generarExplicacionNumerica(tab, categoria, respuesta, enunciado)
    };
  }

  // --- Fórmula 2: Evolución Temporal ---
  function generarEvolucionTemporal(tabs) {
    const tab = elegirTabConMultiplesCategorias(tabs);
    if (!tab || tab.categorias.length < 2) return generarComparacionDirecta(tabs);

    const [cat1, cat2] = elegirDosAlAzar(tab.categorias);
    const serie = elegirAlAzar(tab.series);
    const val1 = tab.datos[cat1][serie];
    const val2 = tab.datos[cat2][serie];

    if (val1 === undefined || val2 === undefined) return generarEvolucionTemporal(tabs);

    let enunciado, respuesta;
    if (val2 > val1) {
      const afirmar = Math.random() > 0.5;
      enunciado = afirmar
        ? `${serie} aumentó entre ${cat1} y ${cat2}.`
        : `${serie} disminuyó entre ${cat1} y ${cat2}.`;
      respuesta = afirmar ? 'V' : 'F';
    } else if (val2 < val1) {
      const afirmar = Math.random() > 0.5;
      enunciado = afirmar
        ? `${serie} disminuyó entre ${cat1} y ${cat2}.`
        : `${serie} aumentó entre ${cat1} y ${cat2}.`;
      respuesta = afirmar ? 'V' : 'F';
    } else {
      enunciado = `${serie} se mantuvo igual entre ${cat1} y ${cat2}.`;
      respuesta = 'V';
    }

    return {
      tabId: tab.id,
      tabTitulo: tab.titulo,
      formula: 'Evolución Temporal',
      enunciado: enunciado,
      respuesta: respuesta,
      explicacion: generarExplicacionNumerica(tab, `${cat1} a ${cat2}`, respuesta, enunciado)
    };
  }

  // --- Fórmula 3: Umbral / Proporción ---
  function generarUmbralProporcion(tabs) {
    const tab = elegirTabConSeries(tabs);
    if (!tab) return generarComparacionDirecta(tabs);

    const categoria = elegirAlAzar(tab.categorias);
    const serie = elegirAlAzar(tab.series);
    const valorItem = tab.datos[categoria][serie];

    // Calcular total de la categoría
    let total = 0;
    tab.series.forEach(s => { total += (tab.datos[categoria][s] || 0); });

    if (total === 0 || valorItem === undefined) return generarUmbralProporcion(tabs);

    const porcentaje = (valorItem / total) * 100;
    // Elegir un umbral cercano al porcentaje real para que sea creíble
    const umbrales = [25, 30, 40, 50, 60, 70, 75, 80, 90];
    const umbral = elegirAlAzar(umbrales);

    const supera = porcentaje >= umbral;
    const afirmar = Math.random() > 0.5;
    let enunciado, respuesta;

    if (afirmar) {
      enunciado = `En ${categoria}, ${serie} representa más del ${umbral}% del total.`;
      respuesta = supera ? 'V' : 'F';
    } else {
      enunciado = `En ${categoria}, ${serie} representa menos del ${umbral}% del total.`;
      respuesta = !supera ? 'V' : 'F';
    }

    return {
      tabId: tab.id,
      tabTitulo: tab.titulo,
      formula: 'Umbral / Proporción',
      enunciado: enunciado,
      respuesta: respuesta,
      explicacion: `${serie} = ${valorItem}. Total = ${total}. ${serie} representa el ${porcentaje.toFixed(1)}% del total. ` +
        (respuesta === 'V' ? 'La afirmación es correcta.' : 'La afirmación es falsa.')
    };
  }

  // --- Fórmula 4: Operación Cruzada ---
  function generarOperacionCruzada(tabs) {
    const tab = elegirTabConSeries(tabs);
    if (!tab || tab.series.length < 3) return generarComparacionDirecta(tabs);

    const categoria = elegirAlAzar(tab.categorias);
    const [sA, sB, sC] = elegirTresAlAzar(tab.series);
    const vA = tab.datos[categoria][sA] || 0;
    const vB = tab.datos[categoria][sB] || 0;
    const vC = tab.datos[categoria][sC] || 0;

    const suma = vA + vB;
    let enunciado, respuesta;

    if (suma > vC) {
      const afirmar = Math.random() > 0.5;
      enunciado = afirmar
        ? `En ${categoria}, la suma de ${sA} y ${sB} supera a ${sC}.`
        : `En ${categoria}, la suma de ${sA} y ${sB} es menor que ${sC}.`;
      respuesta = afirmar ? 'V' : 'F';
    } else if (suma < vC) {
      const afirmar = Math.random() > 0.5;
      enunciado = afirmar
        ? `En ${categoria}, la suma de ${sA} y ${sB} es menor que ${sC}.`
        : `En ${categoria}, la suma de ${sA} y ${sB} supera a ${sC}.`;
      respuesta = afirmar ? 'V' : 'F';
    } else {
      enunciado = `En ${categoria}, la suma de ${sA} y ${sB} es igual a ${sC}.`;
      respuesta = 'V';
    }

    return {
      tabId: tab.id,
      tabTitulo: tab.titulo,
      formula: 'Operación Cruzada',
      enunciado: enunciado,
      respuesta: respuesta,
      explicacion: `${sA}=${vA}, ${sB}=${vB}, ${sC}=${vC}. Suma=${suma}. ` +
        (respuesta === 'V' ? 'La afirmación coincide con los datos.' : 'Los datos contradicen la afirmación.')
    };
  }

  // --- Fórmula 5: Desconocido Forzado ---
  function generarDesconocidoForzado(tabs) {
    const tab = elegirAlAzar(tabs);
    // Preguntar por datos que NO existen: un año/categoría inventado
    const categoriasReales = tab.categorias || [];
    const seriesReales = tab.series || [];

    const catFalsa = generarCategoriaFalsa(categoriasReales);
    const serieReal = elegirAlAzar(seriesReales) || 'X';

    const enunciadosPosibles = [
      `En ${catFalsa}, ${serieReal} superó los valores de años anteriores.`,
      `Según los datos, en ${catFalsa} se registró el valor más alto de ${serieReal}.`,
      `${serieReal} alcanzó su punto máximo en ${catFalsa}.`
    ];

    const enunciado = elegirAlAzar(enunciadosPosibles);

    return {
      tabId: tab.id,
      tabTitulo: tab.titulo,
      formula: 'Desconocido Forzado',
      enunciado: enunciado,
      respuesta: 'D',
      explicacion: `La información sobre "${catFalsa}" no está disponible en la pestaña "${tab.titulo}". No hay datos que permitan afirmar ni rechazar el enunciado. Recuerda: "Desconocido" se usa cuando el dato NO existe.`
    };
  }

  // ==========================================================
  // PARTE B: GENERADOR DE PREGUNTAS VERBALES
  // ==========================================================

  function generarPreguntaVerbal(tabs, datosEstructurados) {
    const formula = Math.floor(Math.random() * 5) + 1;

    switch (formula) {
      case 1: return generarHechoExplicito(tabs, datosEstructurados);
      case 2: return generarContradiccion(tabs, datosEstructurados);
      case 3: return generarNoMencionado(tabs, datosEstructurados);
      case 4: return generarInferenciaTrampa(tabs, datosEstructurados);
      case 5: return generarCruzamientoPestañas(tabs, datosEstructurados);
      default: return generarHechoExplicito(tabs, datosEstructurados);
    }
  }

  // --- Verbal F1: Hecho Explícito (V o F directo) ---
  function generarHechoExplicito(tabs, datos) {
    const afirmaciones = [
      // Verdaderas (según los datos) — cada una con su pestaña de origen
      { e: 'La reunión de accionistas se celebró el 15 de marzo de 2025.', r: 'V', exp: 'El texto de "Reunión de Accionistas" indica explícitamente esta fecha.', tabId: 'accionistas', tabTitulo: 'Reunión de Accionistas' },
      { e: 'El plan de expansión fue aprobado por mayoría simple con 38 votos a favor.', r: 'V', exp: 'El acta de la reunión registra 38 votos a favor y 4 en contra.', tabId: 'accionistas', tabTitulo: 'Reunión de Accionistas' },
      { e: 'La inversión inicial para el proyecto de expansión es de 2.400 millones de pesos.', r: 'V', exp: 'El texto lo señala explícitamente en la sección de la reunión de accionistas.', tabId: 'accionistas', tabTitulo: 'Reunión de Accionistas' },
      { e: 'El Grupo Beta representa el 42% del mercado potencial.', r: 'V', exp: 'El estudio de mercado indica que el Grupo Beta corresponde al 42%.', tabId: 'grupos', tabTitulo: 'Grupos Objetivo' },
      { e: 'La empresa cuenta con 740 colaboradores distribuidos en 6 sucursales.', r: 'V', exp: 'El Informe Anual 2024 indica estas cifras exactas.', tabId: 'informe', tabTitulo: 'Informe Anual 2024' },
      { e: 'La utilidad neta de 2024 fue inferior a la de 2023.', r: 'V', exp: 'El informe señala $2.100 millones en 2024 vs. $2.450 millones en 2023.', tabId: 'informe', tabTitulo: 'Informe Anual 2024' },
      { e: 'La tasa de rotación de personal (8,5%) está por debajo del promedio de la industria (12%).', r: 'V', exp: 'Ambas cifras aparecen en el Informe Anual 2024.', tabId: 'informe', tabTitulo: 'Informe Anual 2024' },
      // Falsas
      { e: 'La reunión de accionistas se realizó el 20 de marzo de 2025.', r: 'F', exp: 'El texto indica que fue el 15 de marzo, no el 20.', tabId: 'accionistas', tabTitulo: 'Reunión de Accionistas' },
      { e: 'El plan de expansión fue rechazado por los accionistas.', r: 'F', exp: 'El texto dice que fue aprobado con 38 votos a favor.', tabId: 'accionistas', tabTitulo: 'Reunión de Accionistas' },
      { e: 'La empresa necesitará financiamiento externo para el proyecto.', r: 'F', exp: 'La directora financiera indicó que cuentan con reservas de $5.800 millones, suficientes para cubrir la inversión.', tabId: 'accionistas', tabTitulo: 'Reunión de Accionistas' },
      { e: 'El Grupo Gamma es el segmento prioritario para los primeros 18 meses.', r: 'F', exp: 'La estrategia prioriza los Grupos Alpha y Beta. Gamma se posterga para una segunda etapa.', tabId: 'grupos', tabTitulo: 'Grupos Objetivo' },
      { e: 'Los ingresos operacionales de 2024 disminuyeron respecto a 2023.', r: 'F', exp: 'El informe indica un aumento del 7,2%, no una disminución.', tabId: 'informe', tabTitulo: 'Informe Anual 2024' }
    ];
    const elegida = elegirAlAzar(afirmaciones);
    return {
      tabId: elegida.tabId,
      tabTitulo: elegida.tabTitulo,
      formula: 'Hecho Explícito',
      enunciado: elegida.e,
      respuesta: elegida.r,
      explicacion: elegida.exp
    };
  }

  // --- Verbal F2: Contradicción ---
  function generarContradiccion(tabs, datos) {
    const afirmaciones = [
      { e: 'Todos los accionistas con derecho a voto asistieron a la reunión.', r: 'F', exp: 'Asistieron 42 de 50 accionistas. No todos estuvieron presentes.', tabId: 'accionistas', tabTitulo: 'Reunión de Accionistas' },
      { e: 'El proyecto estará operativo en enero de 2026.', r: 'F', exp: 'El texto indica diciembre de 2026 como fecha estimada de operación.', tabId: 'accionistas', tabTitulo: 'Reunión de Accionistas' },
      { e: 'Los márgenes operacionales mejoraron respecto al año anterior.', r: 'F', exp: 'El auditor advirtió una disminución de 3,2% en los márgenes operacionales.', tabId: 'accionistas', tabTitulo: 'Reunión de Accionistas' },
      { e: 'El Diario Financiero publicó la noticia el 21 de marzo.', r: 'F', exp: 'El Diario Financiero publicó el 20 de marzo. El Mercurio lo hizo el 21.', tabId: 'prensa', tabTitulo: 'Cobertura de Prensa' },
      { e: 'Los tres segmentos (Alpha, Beta y Gamma) suman el 100% del mercado.', r: 'F', exp: 'Alpha(18%) + Beta(42%) + Gamma(22%) = 82%. Hay un 18% de otros segmentos.', tabId: 'grupos', tabTitulo: 'Grupos Objetivo' },
      { e: 'El presupuesto de capacitación para 2025 es menor que lo invertido en 2024.', r: 'F', exp: '2025 tiene $950 millones vs. $890 millones en 2024. Es mayor, no menor.', tabId: 'informe', tabTitulo: 'Informe Anual 2024' }
    ];
    const elegida = elegirAlAzar(afirmaciones);
    return {
      tabId: elegida.tabId, tabTitulo: elegida.tabTitulo,
      formula: 'Contradicción',
      enunciado: elegida.e,
      respuesta: elegida.r,
      explicacion: elegida.exp
    };
  }

  // --- Verbal F3: No Mencionado ---
  function generarNoMencionado(tabs, datos) {
    const afirmaciones = [
      { e: 'La Sra. María Elena Fuentes asumió como directora financiera en 2022.', r: 'D', exp: 'Los textos mencionan su cargo actual pero no indican desde cuándo lo ocupa.', tabId: 'accionistas', tabTitulo: 'Reunión de Accionistas' },
      { e: 'El proyecto de expansión incluye la construcción de 3 nuevas sucursales.', r: 'D', exp: 'Se habla de expansión a La Araucanía pero no se especifica el número de sucursales.', tabId: 'accionistas', tabTitulo: 'Reunión de Accionistas' },
      { e: 'Radio Bio-Bio fue el primer medio en entrevistar a la directora financiera.', r: 'D', exp: 'Sabemos que la entrevistó el 23 de marzo, pero no se indica si fue la primera entrevista.', tabId: 'prensa', tabTitulo: 'Cobertura de Prensa' },
      { e: 'La disminución de márgenes se debe exclusivamente al alza del petróleo.', r: 'D', exp: 'El texto menciona "alza en costos logísticos" como causa, pero no especifica el petróleo ni dice que sea la única causa.', tabId: 'accionistas', tabTitulo: 'Reunión de Accionistas' },
      { e: 'Los accionistas que votaron en contra representan a inversionistas extranjeros.', r: 'D', exp: 'No hay información sobre la procedencia de los accionistas que votaron en contra.', tabId: 'accionistas', tabTitulo: 'Reunión de Accionistas' },
      { e: 'La empresa planea abrir operaciones en Argentina durante 2027.', r: 'D', exp: 'No hay ninguna mención sobre operaciones en Argentina o planes para 2027.', tabId: 'informe', tabTitulo: 'Informe Anual 2024' }
    ];
    const elegida = elegirAlAzar(afirmaciones);
    return {
      tabId: elegida.tabId, tabTitulo: elegida.tabTitulo,
      formula: 'No Mencionado',
      enunciado: elegida.e,
      respuesta: elegida.r,
      explicacion: elegida.exp
    };
  }

  // --- Verbal F4: Inferencia Trampa ---
  function generarInferenciaTrampa(tabs, datos) {
    const afirmaciones = [
      { e: 'Como la utilidad neta bajó en 2024, la empresa tendrá pérdidas en 2025.', r: 'D', exp: 'Una disminución de utilidad no implica necesariamente pérdidas futuras. El texto no contiene proyecciones de pérdidas para 2025.', tabId: 'informe', tabTitulo: 'Informe Anual 2024' },
      { e: 'Los 180 puestos de trabajo directos serán ocupados exclusivamente por residentes de La Araucanía.', r: 'D', exp: 'Aunque el proyecto es en La Araucanía, el texto no especifica requisitos de residencia para la contratación.', tabId: 'prensa', tabTitulo: 'Cobertura de Prensa' },
      { e: 'Dado que los márgenes operacionales bajaron, la empresa no ejecutará el proyecto.', r: 'D', exp: 'El texto indica que el proyecto fue aprobado y comenzará en julio 2025. No hay información sobre una cancelación.', tabId: 'accionistas', tabTitulo: 'Reunión de Accionistas' },
      { e: 'El 22% del mercado corresponde a adultos mayores, por lo tanto la mayoría de los clientes tiene más de 60 años.', r: 'F', exp: 'El 22% no es mayoría. Además, el Grupo Beta (familias) representa el 42%, siendo el segmento más grande.', tabId: 'grupos', tabTitulo: 'Grupos Objetivo' }
    ];
    const elegida = elegirAlAzar(afirmaciones);
    return {
      tabId: elegida.tabId, tabTitulo: elegida.tabTitulo,
      formula: 'Inferencia Trampa',
      enunciado: elegida.e,
      respuesta: elegida.r,
      explicacion: elegida.exp
    };
  }

  // --- Verbal F5: Cruzamiento de Pestañas ---
  function generarCruzamientoPestañas(tabs, datos) {
    const afirmaciones = [
      { e: 'El Diario Financiero y El Mercurio publicaron sobre el proyecto en la misma fecha.', r: 'F', exp: 'El Diario Financiero publicó el 20 de marzo y El Mercurio el 21 de marzo. Fechas distintas.', tabId: 'prensa', tabTitulo: 'Cobertura de Prensa' },
      { e: 'Según el informe anual, la empresa invirtió en capacitación a 520 trabajadores, lo que coincide con lo reportado en la reunión de accionistas.', r: 'V', exp: 'El Informe Anual confirma 520 trabajadores capacitados con $890 millones. La reunión menciona la solidez financiera, lo cual es coherente.', tabId: 'informe', tabTitulo: 'Informe Anual 2024 + Reunión de Accionistas' },
      { e: 'La cobertura de prensa indica que el proyecto creará más empleos indirectos (300) que directos (180).', r: 'V', exp: 'El Mercurio reportó 180 empleos directos y 300 indirectos, siendo mayor la cifra de indirectos.', tabId: 'prensa', tabTitulo: 'Cobertura de Prensa' },
      { e: 'La estrategia comercial de enfocarse en Alpha y Beta durante 18 meses fue anunciada en la reunión de accionistas.', r: 'D', exp: 'La reunión de accionistas habla de la aprobación del plan de expansión, pero la estrategia de segmentos aparece en el estudio de mercado (pestaña Grupos Objetivo). No se indica que fuera anunciada en la reunión.', tabId: 'grupos', tabTitulo: 'Grupos Objetivo + Reunión de Accionistas' }
    ];
    const elegida = elegirAlAzar(afirmaciones);
    return {
      tabId: elegida.tabId, tabTitulo: elegida.tabTitulo,
      formula: 'Cruzamiento de Pestañas',
      enunciado: elegida.e,
      respuesta: elegida.r,
      explicacion: elegida.exp
    };
  }

  // ==========================================================
  // PARTE C: EVALUADOR DE RESPUESTAS
  // ==========================================================

  function evaluarRespuesta(pregunta, respuestaUsuario) {
    const esCorrecta = pregunta.respuesta === respuestaUsuario;
    let tipoError = 'Correcto';

    if (!esCorrecta) {
      if (respuestaUsuario === 'D' && pregunta.respuesta !== 'D') {
        tipoError = 'Confundió con Desconocido (marcó D cuando el dato sí existía)';
      } else if (respuestaUsuario !== 'D' && pregunta.respuesta === 'D') {
        tipoError = `Marcó ${respuestaUsuario} cuando era Desconocido (el dato no existía)`;
      } else if (respuestaUsuario === 'V' && pregunta.respuesta === 'F') {
        tipoError = 'Confundió Verdadero con Falso (error de interpretación)';
      } else if (respuestaUsuario === 'F' && pregunta.respuesta === 'V') {
        tipoError = 'Confundió Falso con Verdadero (error de interpretación)';
      } else {
        tipoError = 'Error de razonamiento';
      }
    }

    return {
      esCorrecta: esCorrecta,
      tipoError: tipoError,
      respuestaUsuario: respuestaUsuario,
      respuestaCorrecta: pregunta.respuesta,
      explicacion: pregunta.explicacion
    };
  }

  // ==========================================================
  // PARTE D: GENERADOR DE SESIÓN COMPLETA
  // ==========================================================

  function generarSesionNumerico(tabs, total) {
    const preguntas = [];
    for (let i = 0; i < total; i++) {
      preguntas.push(generarPreguntaNumerica(tabs));
    }
    return preguntas;
  }

  function generarSesionVerbal(tabs, datosEstructurados, total) {
    const preguntas = [];
    // Para evitar repetición, hacemos un pool y barajamos
    const pool = [];
    // Generamos más preguntas de las necesarias y tomamos las primeras N
    for (let i = 0; i < total * 5; i++) {
      pool.push(generarPreguntaVerbal(tabs, datosEstructurados));
    }
    // Eliminar duplicados por enunciado
    const unicas = [];
    const vistos = new Set();
    for (const p of pool) {
      if (!vistos.has(p.enunciado)) {
        vistos.add(p.enunciado);
        unicas.push(p);
      }
    }
    // Si no hay suficientes únicas, rellenar con duplicados barajados
    while (unicas.length < total) {
      const dup = {...pool[Math.floor(Math.random() * pool.length)]};
      dup.enunciado = dup.enunciado + ' (alternativa)';
      unicas.push(dup);
    }
    return unicas.slice(0, total);
  }

  // ==========================================================
  // HERRAMIENTAS AUXILIARES
  // ==========================================================

  function elegirAlAzar(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function elegirDosAlAzar(arr) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return [shuffled[0], shuffled[1]];
  }

  function elegirTresAlAzar(arr) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return [shuffled[0], shuffled[1], shuffled[2]];
  }

  function elegirTabConSeries(tabs) {
    const conSeries = tabs.filter(t => t.series && t.series.length >= 2);
    return conSeries.length > 0 ? elegirAlAzar(conSeries) : null;
  }

  function elegirTabConMultiplesCategorias(tabs) {
    const conMultiples = tabs.filter(t => t.categorias && t.categorias.length >= 2);
    return conMultiples.length > 0 ? elegirAlAzar(conMultiples) : null;
  }

  function generarCategoriaFalsa(categoriasReales) {
    // Genera un nombre creíble pero que no existe
    const prefijos = ['AF', 'Q', 'Semestre ', 'Periodo '];
    const prefijo = elegirAlAzar(prefijos);
    let intentos = 0;
    let candidato;
    do {
      const num = Math.floor(Math.random() * 15) + 1;
      candidato = prefijo === 'AF' ? `AF${num}` : `${prefijo}${num}`;
      intentos++;
    } while (categoriasReales.includes(candidato) && intentos < 50);
    return candidato;
  }

  function generarExplicacionNumerica(tab, categoria, respuesta, enunciado) {
    const datosStr = JSON.stringify(tab.datos[categoria] || {});
    return `Pestaña "${tab.titulo}". Datos en ${categoria}: ${datosStr}. ` +
      `Respuesta correcta: ${respuesta === 'V' ? 'Verdadero' : respuesta === 'F' ? 'Falso' : 'Desconocido'}.`;
  }

  // ==========================================================
  // API PÚBLICA
  // ==========================================================

  return {
    generarSesionNumerico: generarSesionNumerico,
    generarSesionVerbal: generarSesionVerbal,
    evaluarRespuesta: evaluarRespuesta
  };

})();

/* FIN BLOQUE 4 */
