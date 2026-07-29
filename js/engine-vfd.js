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
      { e: 'Los ingresos operacionales de 2024 disminuyeron respecto a 2023.', r: 'F', exp: 'El informe indica un aumento del 7,2%, no una disminución.', tabId: 'informe', tabTitulo: 'Informe Anual 2024' },
      // ─── NUEVAS: Fusión Empresarial ───
      { e: 'La fusión entre Tecnología Avanzada y Soluciones Digitales fue valorada en 8.500 millones de dólares.', r: 'V', exp: 'El texto menciona explícitamente que la operación fue valorada en 8.500 millones de dólares.', tabId: 'fusion', tabTitulo: 'Fusión Empresarial' },
      { e: 'El nuevo holding se llamará TechSolutions Group.', r: 'V', exp: 'El texto indica que el holding resultante de la fusión se llamará TechSolutions Group.', tabId: 'fusion', tabTitulo: 'Fusión Empresarial' },
      { e: 'Soluciones Digitales aportó 3.200 empleados a la fusión.', r: 'F', exp: 'Soluciones Digitales aportó 1.800 empleados; Tecnología Avanzada aportó 3.200.', tabId: 'fusion', tabTitulo: 'Fusión Empresarial' },
      // ─── NUEVAS: Informe Ambiental ───
      { e: 'Las emisiones de CO2 del sector industrial se redujeron un 5,4% en 2024.', r: 'V', exp: 'El informe ambiental indica explícitamente esta reducción, pasando de 42,8 a 40,5 millones de toneladas.', tabId: 'ambiental', tabTitulo: 'Informe Ambiental 2024' },
      { e: 'Se crearon tres nuevos parques nacionales en la Patagonia.', r: 'V', exp: 'El texto menciona que la superficie protegida aumentó gracias a tres nuevos parques en la Patagonia.', tabId: 'ambiental', tabTitulo: 'Informe Ambiental 2024' },
      { e: 'El sector transporte redujo sus emisiones en 2024 respecto a 2023.', r: 'F', exp: 'El texto indica que el sector transporte aumentó sus emisiones un 2,1% respecto a 2023.', tabId: 'ambiental', tabTitulo: 'Informe Ambiental 2024' },
      // ─── NUEVAS: Ciberseguridad ───
      { e: 'El ataque de ransomware a DataSecure ocurrió el 5 de febrero de 2025.', r: 'V', exp: 'El texto indica esta fecha exacta para el incidente.', tabId: 'ciberseguridad', tabTitulo: 'Incidente de Ciberseguridad' },
      { e: 'DataSecure implementó autenticación de doble factor para sus 2.800 empleados.', r: 'V', exp: 'El texto señala que se implementó esta medida para los 2.800 empleados tras el incidente.', tabId: 'ciberseguridad', tabTitulo: 'Incidente de Ciberseguridad' },
      { e: 'El ataque comprometió los 7 servidores principales de DataSecure.', r: 'F', exp: 'El texto indica que se comprometieron 3 de los 7 servidores, no todos.', tabId: 'ciberseguridad', tabTitulo: 'Incidente de Ciberseguridad' },
      // ─── NUEVAS: Salud Laboral ───
      { e: 'La tasa de accidentabilidad laboral en 2024 fue del 3,2%, la más baja en 10 años.', r: 'V', exp: 'El informe de la ACHS indica explícitamente esta tasa y que es la más baja en una década.', tabId: 'salud_laboral', tabTitulo: 'Informe de Salud Laboral' },
      { e: 'Las licencias médicas por salud mental disminuyeron en 2024.', r: 'F', exp: 'El texto indica que aumentaron un 18%, pasando de 34.000 a 40.120 casos.', tabId: 'salud_laboral', tabTitulo: 'Informe de Salud Laboral' },
      { e: 'El 62% de los accidentes laborales ocurrió en construcción y manufactura.', r: 'V', exp: 'El informe señala explícitamente este porcentaje.', tabId: 'salud_laboral', tabTitulo: 'Informe de Salud Laboral' },
      // ─── NUEVAS: Educación Corporativa ───
      { e: 'El programa "Talento Chile 2025" capacitó a 125.000 trabajadores en 2024.', r: 'V', exp: 'El texto indica que se capacitaron 125.000 trabajadores durante 2024.', tabId: 'educacion_corp', tabTitulo: 'Programa de Educación Corporativa' },
      { e: 'El presupuesto del programa para 2025 será de 18.500 millones de pesos.', r: 'F', exp: '18.500 millones fue la inversión en becas en 2024. El presupuesto 2025 es de 22.000 millones.', tabId: 'educacion_corp', tabTitulo: 'Programa de Educación Corporativa' },
      // ─── NUEVAS: Comercio Internacional ───
      { e: 'Las exportaciones de cobre representaron el 48% del total en el primer trimestre de 2025.', r: 'V', exp: 'El reporte del Banco Central indica que el cobre fue el 48% de las exportaciones.', tabId: 'comercio_int', tabTitulo: 'Comercio Internacional' },
      { e: 'El superávit comercial del primer trimestre de 2025 fue de 3.300 millones de dólares.', r: 'V', exp: 'El texto indica explícitamente esta cifra de superávit.', tabId: 'comercio_int', tabTitulo: 'Comercio Internacional' },
      // ─── NUEVAS: Clima Laboral ───
      { e: 'El índice de satisfacción laboral en 2025 fue del 68%.', r: 'V', exp: 'La encuesta de Great Place to Work indica un 68% de satisfacción global.', tabId: 'clima_laboral', tabTitulo: 'Encuesta de Clima Laboral' },
      { e: 'El 74% de los encuestados está conforme con su remuneración.', r: 'F', exp: 'El texto indica que solo el 41% está conforme con su remuneración. El 74% valora la flexibilidad horaria.', tabId: 'clima_laboral', tabTitulo: 'Encuesta de Clima Laboral' },
      // ─── NUEVAS: Innovación ───
      { e: 'Se registraron 3.850 solicitudes de patentes en 2024, un 11% más que en 2023.', r: 'V', exp: 'El informe de INAPI indica explícitamente estas cifras.', tabId: 'innovacion', tabTitulo: 'Innovación y Patentes' },
      { e: 'La inversión en I+D en Chile alcanzó el 2,7% del PIB.', r: 'F', exp: '2,7% es el promedio OCDE. Chile invirtió solo el 0,38% del PIB.', tabId: 'innovacion', tabTitulo: 'Innovación y Patentes' },
      // ─── NUEVAS: Logística ───
      { e: 'El comercio electrónico movió 380 millones de paquetes durante 2024.', r: 'V', exp: 'El informe de la Cámara Nacional de Comercio indica esta cifra.', tabId: 'logistica', tabTitulo: 'Informe de Logística' },
      { e: 'Se inauguraron 6 nuevos centros de distribución con una inversión de 420 millones de dólares.', r: 'V', exp: 'El texto menciona explícitamente estos datos.', tabId: 'logistica', tabTitulo: 'Informe de Logística' },
      // ─── NUEVAS: Marketing ───
      { e: 'La campaña "Conecta 2025" tuvo un presupuesto de 850.000 dólares.', r: 'V', exp: 'El texto de la agencia DigitalPlus indica este presupuesto total.', tabId: 'marketing', tabTitulo: 'Campaña de Marketing' },
      { e: 'El ROI de la campaña fue del 520%.', r: 'F', exp: 'El texto indica un ROI del 340%, no 520%.', tabId: 'marketing', tabTitulo: 'Campaña de Marketing' },
      // ─── NUEVAS: RRHH ───
      { e: 'Corporación Nexus cuenta con 4.200 empleados en 14 sucursales.', r: 'V', exp: 'El informe de RRHH indica estas cifras exactas.', tabId: 'rrhh', tabTitulo: 'Informe de Recursos Humanos' },
      { e: 'La tasa de rotación en Nexus fue del 14,2% en 2024.', r: 'F', exp: '14,2% fue la tasa de 2023. En 2024 la rotación fue del 11,7%.', tabId: 'rrhh', tabTitulo: 'Informe de Recursos Humanos' },
      // ─── NUEVAS: RSE ───
      { e: 'Las 50 empresas del pacto global invirtieron 95 millones de dólares en programas sociales en 2024.', r: 'V', exp: 'El informe de RSE indica explícitamente esta cifra de inversión.', tabId: 'rse', tabTitulo: 'Responsabilidad Social' },
      { e: 'El programa de voluntariado movilizó a 12.500 trabajadores que donaron 95.000 horas.', r: 'V', exp: 'El texto menciona estas cifras de voluntariado corporativo.', tabId: 'rse', tabTitulo: 'Responsabilidad Social' }
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
      { e: 'El presupuesto de capacitación para 2025 es menor que lo invertido en 2024.', r: 'F', exp: '2025 tiene $950 millones vs. $890 millones en 2024. Es mayor, no menor.', tabId: 'informe', tabTitulo: 'Informe Anual 2024' },
      // ─── NUEVAS: Fusión ───
      { e: 'La fusión fue aprobada por el 80% de los accionistas.', r: 'F', exp: 'El texto indica una aprobación del 94%, no del 80%.', tabId: 'fusion', tabTitulo: 'Fusión Empresarial' },
      { e: 'Los ahorros por sinergias comenzarán en 2026.', r: 'F', exp: 'El texto señala que los ahorros de 450 millones comenzarán a partir de 2027.', tabId: 'fusion', tabTitulo: 'Fusión Empresarial' },
      // ─── NUEVAS: Ambiental ───
      { e: 'Los días con alta contaminación (MP 2.5) en Santiago disminuyeron en 2024.', r: 'F', exp: 'Aumentaron: 67 días en 2024 vs. 52 días en 2023.', tabId: 'ambiental', tabTitulo: 'Informe Ambiental 2024' },
      // ─── NUEVAS: Ciberseguridad ───
      { e: 'DataSecure logró descifrar el 100% de los datos sin usar las claves del atacante.', r: 'F', exp: 'El texto indica que lograron descifrar el 92%, no el 100%.', tabId: 'ciberseguridad', tabTitulo: 'Incidente de Ciberseguridad' },
      // ─── NUEVAS: Salud Laboral ───
      { e: 'La tasa de accidentabilidad de 2024 (3,2%) fue superior a la de 2023 (3,7%).', r: 'F', exp: '3,2% en 2024 es inferior a 3,7% en 2023. La tasa bajó, no subió.', tabId: 'salud_laboral', tabTitulo: 'Informe de Salud Laboral' },
      // ─── NUEVAS: Educación Corp ───
      { e: 'El programa capacitó a menos trabajadores en 2024 que en 2023.', r: 'F', exp: 'El texto indica un 15% más de capacitados en 2024 respecto a 2023.', tabId: 'educacion_corp', tabTitulo: 'Programa de Educación Corporativa' },
      // ─── NUEVAS: Comercio Int ───
      { e: 'China y Estados Unidos juntos representan más del 60% de las exportaciones.', r: 'F', exp: 'China (38%) + EE.UU. (18%) = 56%, no supera el 60%.', tabId: 'comercio_int', tabTitulo: 'Comercio Internacional' },
      // ─── NUEVAS: Clima Laboral ───
      { e: 'El índice de satisfacción laboral mejoró en 2025 respecto a 2024.', r: 'F', exp: 'Bajó de 71% en 2024 a 68% en 2025. Empeoró, no mejoró.', tabId: 'clima_laboral', tabTitulo: 'Encuesta de Clima Laboral' },
      // ─── NUEVAS: Innovación ───
      { e: 'La inversión en I+D en Chile supera el promedio de los países OCDE.', r: 'F', exp: 'Chile invierte 0,38% del PIB vs. el promedio OCDE de 2,7%. Está muy por debajo.', tabId: 'innovacion', tabTitulo: 'Innovación y Patentes' },
      // ─── NUEVAS: Logística ───
      { e: 'El costo logístico en Chile (11,2%) es inferior al promedio OCDE (9,5%).', r: 'F', exp: '11,2% es superior al 9,5% de la OCDE. En Chile el costo logístico es más alto.', tabId: 'logistica', tabTitulo: 'Informe de Logística' },
      // ─── NUEVAS: RRHH ───
      { e: 'El tiempo promedio de contratación en Nexus aumentó en 2024 respecto a 2023.', r: 'F', exp: 'Se redujo de 45 a 32 días. Disminuyó, no aumentó.', tabId: 'rrhh', tabTitulo: 'Informe de Recursos Humanos' },
      // ─── NUEVAS: RSE ───
      { e: 'La inversión en programas sociales de RSE fue menor en 2024 que en 2023.', r: 'F', exp: 'Aumentó un 12%, pasando a 95 millones de dólares.', tabId: 'rse', tabTitulo: 'Responsabilidad Social' }
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
      { e: 'La empresa planea abrir operaciones en Argentina durante 2027.', r: 'D', exp: 'No hay ninguna mención sobre operaciones en Argentina o planes para 2027.', tabId: 'informe', tabTitulo: 'Informe Anual 2024' },
      // ─── NUEVAS: Fusión ───
      { e: 'La fusión TechSolutions contempla expandir operaciones a Brasil en 2026.', r: 'D', exp: 'El texto no menciona ningún plan de expansión a Brasil.', tabId: 'fusion', tabTitulo: 'Fusión Empresarial' },
      { e: 'El Sr. Roberto Mendoza trabajó anteriormente en una empresa multinacional europea.', r: 'D', exp: 'No hay información sobre la trayectoria laboral previa del Sr. Mendoza.', tabId: 'fusion', tabTitulo: 'Fusión Empresarial' },
      // ─── NUEVAS: Ambiental ───
      { e: 'El plan de energías renovables será financiado principalmente con fondos de la Unión Europea.', r: 'D', exp: 'El texto anuncia un plan de 1.200 millones pero no especifica el origen del financiamiento.', tabId: 'ambiental', tabTitulo: 'Informe Ambiental 2024' },
      { e: 'Los tres nuevos parques nacionales se ubican exclusivamente en la Región de Magallanes.', r: 'D', exp: 'El texto dice que están en la Patagonia pero no especifica las regiones exactas.', tabId: 'ambiental', tabTitulo: 'Informe Ambiental 2024' },
      // ─── NUEVAS: Ciberseguridad ───
      { e: 'El ataque de ransomware fue ejecutado por un grupo hacker llamado "DarkShield".', r: 'D', exp: 'El texto menciona servidores en Europa del Este pero no identifica al grupo atacante.', tabId: 'ciberseguridad', tabTitulo: 'Incidente de Ciberseguridad' },
      // ─── NUEVAS: Salud Laboral ───
      { e: 'Las 3.200 multas aplicadas en 2024 representan un aumento respecto a 2023.', r: 'D', exp: 'El texto indica el número de multas en 2024 pero no las compara con 2023.', tabId: 'salud_laboral', tabTitulo: 'Informe de Salud Laboral' },
      // ─── NUEVAS: Educación Corp ───
      { e: 'El programa "Talento Chile 2025" continuará recibiendo financiamiento del BID hasta 2028.', r: 'D', exp: 'No se menciona al BID ni la duración del financiamiento más allá de 2025.', tabId: 'educacion_corp', tabTitulo: 'Programa de Educación Corporativa' },
      // ─── NUEVAS: Comercio Int ───
      { e: 'Los tres nuevos tratados de libre comercio se firmaron específicamente con Vietnam, Tailandia e Indonesia.', r: 'D', exp: 'El texto menciona tratados con países del sudeste asiático pero no especifica cuáles.', tabId: 'comercio_int', tabTitulo: 'Comercio Internacional' },
      // ─── NUEVAS: Clima Laboral ───
      { e: 'El 62% de los jóvenes que considera cambiar de empleo pertenece al sector de tecnología.', r: 'D', exp: 'El texto indica el porcentaje de jóvenes que considera cambiar de empleo pero no especifica el sector.', tabId: 'clima_laboral', tabTitulo: 'Encuesta de Clima Laboral' },
      // ─── NUEVAS: Innovación ───
      { e: 'El sistema de desalinización solar portátil fue desarrollado por un equipo de 15 investigadores de la Universidad de Chile.', r: 'D', exp: 'El texto menciona la patente y el premio pero no detalla el equipo de investigación.', tabId: 'innovacion', tabTitulo: 'Innovación y Patentes' },
      // ─── NUEVAS: RRHH ───
      { e: 'El nuevo sistema de reclutamiento con IA fue desarrollado internamente por el equipo de TI de Nexus.', r: 'D', exp: 'El texto menciona el sistema con IA pero no indica quién lo desarrolló.', tabId: 'rrhh', tabTitulo: 'Informe de Recursos Humanos' },
      // ─── NUEVAS: RSE ───
      { e: 'La iniciativa "Primer Empleo Verde" será expandida a todos los países de Latinoamérica en 2026.', r: 'D', exp: 'No hay información sobre expansión internacional del programa.', tabId: 'rse', tabTitulo: 'Responsabilidad Social' }
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
      { e: 'El 22% del mercado corresponde a adultos mayores, por lo tanto la mayoría de los clientes tiene más de 60 años.', r: 'F', exp: 'El 22% no es mayoría. Además, el Grupo Beta (familias) representa el 42%, siendo el segmento más grande.', tabId: 'grupos', tabTitulo: 'Grupos Objetivo' },
      // ─── NUEVAS ───
      { e: 'Como se eliminarán 150 puestos por la fusión, TechSolutions Group tendrá pérdidas en 2026.', r: 'D', exp: 'No hay información sobre los resultados financieros de 2026. La eliminación de puestos no implica necesariamente pérdidas.', tabId: 'fusion', tabTitulo: 'Fusión Empresarial' },
      { e: 'Si las emisiones del sector transporte siguen aumentando, el país no cumplirá sus metas climáticas de 2030.', r: 'D', exp: 'No hay información sobre metas climáticas específicas para el sector transporte ni proyecciones a 2030.', tabId: 'ambiental', tabTitulo: 'Informe Ambiental 2024' },
      { e: 'Como DataSecure pagó el rescate, la empresa quedó en quiebra y despidió a la mitad de sus empleados.', r: 'D', exp: 'No hay información sobre el impacto financiero del rescate en la solvencia de la empresa ni sobre despidos.', tabId: 'ciberseguridad', tabTitulo: 'Incidente de Ciberseguridad' },
      { e: 'Dado que aumentaron las licencias por salud mental, las empresas chilenas son las más estresantes del mundo.', r: 'D', exp: 'No hay ninguna comparación internacional en el texto. No se puede inferir un ranking mundial.', tabId: 'salud_laboral', tabTitulo: 'Informe de Salud Laboral' },
      { e: 'Como el 78% de los egresados consiguió empleo, el programa "Talento Chile" erradicó el desempleo juvenil.', r: 'F', exp: 'Una tasa de inserción del 78% no significa haber erradicado el desempleo. El texto no hace esa afirmación.', tabId: 'educacion_corp', tabTitulo: 'Programa de Educación Corporativa' },
      { e: 'Debido al superávit comercial de 3.300 millones, la economía chilena es la más fuerte de Latinoamérica.', r: 'D', exp: 'El texto solo habla de Chile sin comparar con otros países latinoamericanos.', tabId: 'comercio_int', tabTitulo: 'Comercio Internacional' },
      { e: 'Dado que el 62% de los jóvenes quiere cambiar de empleo, la mayoría de las empresas tendrá escasez de personal en 2026.', r: 'D', exp: 'Querer cambiar de empleo no implica que lo harán, ni que habrá escasez. Es una inferencia no soportada.', tabId: 'clima_laboral', tabTitulo: 'Encuesta de Clima Laboral' },
      { e: 'Como Chile solo invierte 0,38% del PIB en I+D, no existe innovación en el país.', r: 'F', exp: 'El texto menciona 3.850 patentes y un premio mundial de innovación, lo que contradice la afirmación de que no existe innovación.', tabId: 'innovacion', tabTitulo: 'Innovación y Patentes' },
      { e: 'Debido al aumento del comercio electrónico, las tiendas físicas desaparecerán en Chile para 2028.', r: 'D', exp: 'El texto no contiene proyecciones sobre la desaparición de tiendas físicas.', tabId: 'logistica', tabTitulo: 'Informe de Logística' },
      { e: 'Como la campaña tuvo un ROI del 340%, FibraMax duplicará su presupuesto de marketing en 2026.', r: 'D', exp: 'El texto no contiene información sobre presupuestos futuros de marketing de FibraMax.', tabId: 'marketing', tabTitulo: 'Campaña de Marketing' },
      { e: 'Dado que la rotación bajó en Nexus, los empleados están completamente satisfechos con la empresa.', r: 'D', exp: 'Menor rotación no implica satisfacción total. El texto no incluye encuestas de satisfacción.', tabId: 'rrhh', tabTitulo: 'Informe de Recursos Humanos' }
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
      { e: 'La estrategia comercial de enfocarse en Alpha y Beta durante 18 meses fue anunciada en la reunión de accionistas.', r: 'D', exp: 'La reunión de accionistas habla de la aprobación del plan de expansión, pero la estrategia de segmentos aparece en el estudio de mercado (pestaña Grupos Objetivo). No se indica que fuera anunciada en la reunión.', tabId: 'grupos', tabTitulo: 'Grupos Objetivo + Reunión de Accionistas' },
      // ─── NUEVAS ───
      { e: 'La inversión de la fusión (8.500 millones USD) supera ampliamente la inversión del plan de expansión de Inversiones del Sur (2.400 millones de pesos).', r: 'V', exp: '8.500 millones de dólares es una cifra mucho mayor que 2.400 millones de pesos chilenos.', tabId: 'fusion', tabTitulo: 'Fusión Empresarial + Reunión de Accionistas' },
      { e: 'El plan de energías renovables (1.200 millones USD) es mayor que las reservas líquidas de Inversiones del Sur (5.800 millones de pesos).', r: 'V', exp: '1.200 millones USD supera los 5.800 millones de pesos chilenos (aproximadamente 6 millones USD).', tabId: 'ambiental', tabTitulo: 'Informe Ambiental + Reunión de Accionistas' },
      { e: 'La inversión en ciberseguridad de DataSecure (4,2 millones USD) es mayor que la inversión en capacitación de Inversiones del Sur (890 millones de pesos).', r: 'V', exp: '4,2 millones USD equivale a aproximadamente 3.864 millones de pesos, superando los 890 millones.', tabId: 'ciberseguridad', tabTitulo: 'Incidente de Ciberseguridad + Informe Anual' },
      { e: 'Los 28.400 accidentes laborales de 2024 equivalen a aproximadamente el 6,7% de los 420.000 empleados del sector construcción y manufactura reportados en RSE.', r: 'D', exp: 'Los datos provienen de fuentes distintas (ACHS vs. Fundación RSE) y no son directamente comparables sin más contexto.', tabId: 'salud_laboral', tabTitulo: 'Salud Laboral + RSE' },
      { e: 'La inversión del programa de educación (18.500 millones de pesos) es menor que las reservas líquidas de Inversiones del Sur (5.800 millones de pesos).', r: 'F', exp: '18.500 millones es mayor que 5.800 millones, no menor.', tabId: 'educacion_corp', tabTitulo: 'Educación Corporativa + Reunión de Accionistas' },
      { e: 'El superávit comercial (3.300 millones USD) es inferior a la inversión en RSE de las 50 empresas del pacto global (95 millones USD).', r: 'F', exp: '3.300 millones USD es mucho mayor que 95 millones USD.', tabId: 'comercio_int', tabTitulo: 'Comercio Internacional + RSE' },
      { e: 'Los 53.200 nuevos clientes de FibraMax equivalen aproximadamente al 62% de los 85.000 encuestados por Great Place to Work.', r: 'V', exp: '53.200 / 85.000 = 62,6%. La afirmación es matemáticamente correcta.', tabId: 'marketing', tabTitulo: 'Marketing + Clima Laboral' },
      { e: 'El costo por adquisición de clientes de FibraMax (16 USD) es inferior al costo logístico promedio en Chile (11,2% del valor del producto).', r: 'D', exp: 'Son métricas de industrias diferentes (marketing vs. logística) y no son directamente comparables.', tabId: 'marketing', tabTitulo: 'Marketing + Logística' },
      { e: 'El total de empleados de Nexus (4.200) es menor que el total combinado de Tecnología Avanzada y Soluciones Digitales (5.000).', r: 'V', exp: '4.200 < 5.000 (3.200 + 1.800). La afirmación es correcta.', tabId: 'rrhh', tabTitulo: 'RRHH + Fusión Empresarial' },
      { e: 'La inversión de Nexus en beneficios (320 millones de pesos) es superior al presupuesto de marketing de FibraMax (850.000 USD).', r: 'F', exp: '850.000 USD equivalen a aproximadamente 782 millones de pesos, superando los 320 millones.', tabId: 'rrhh', tabTitulo: 'RRHH + Marketing' },
      { e: 'Los 12.500 voluntarios de RSE representan aproximadamente el doble de los 5.200 becados del programa de educación corporativa.', r: 'V', exp: '12.500 es aproximadamente 2,4 veces 5.200. La afirmación es razonablemente correcta.', tabId: 'rse', tabTitulo: 'RSE + Educación Corporativa' }
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
