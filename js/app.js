/* ============================================================
   BLOQUE 7: APP - CONTROLADOR PRINCIPAL
   Orquesta timer, estado, navegación y los 5 módulos
   ============================================================ */

const App = (function() {
  'use strict';

  // ==========================================================
  // ESTADO GLOBAL
  // ==========================================================

  const state = {
    testActual: null,         // 'numerico' | 'verbal' | 'inductivo' | 'trabajo' | 'situacional'
    testData: null,           // Datos del test activo desde DataBank
    preguntas: [],            // Preguntas/ejercicios generados
    respuestas: [],           // Respuestas del usuario
    indiceActual: 0,          // Índice de pregunta actual
    timerInterval: null,      // ID del setInterval del timer
    segundosRestantes: 0,     // Tiempo restante en segundos
    tiempoInicio: null,       // Timestamp de inicio
    finalizado: false         // Si el test ya terminó
  };

  // ==========================================================
  // INICIALIZACIÓN
  // ==========================================================

  function init() {
    // Inicializar motor inductivo con sus datos
    EngineInductivo.init(DataBank.inductivo);
    EngineInductivoDB.init();

    // Actualizar estado visual de la API key
    actualizarEstadoAPI();

    // Configurar event listeners del menú
    document.querySelectorAll('.btn-menu[data-test]').forEach(btn => {
      btn.addEventListener('click', function() {
        const testKey = this.dataset.test;
        seleccionarTest(testKey);
      });
    });

    // Botón resultados globales
    document.getElementById('btn-global-results').addEventListener('click', mostrarResultadosGlobales);

    // Botón dashboard
    document.getElementById('btn-dashboard').addEventListener('click', abrirDashboard);

    // --- Modal API Key ---
    document.getElementById('btn-config-api').addEventListener('click', abrirModalAPI);
    document.getElementById('btn-api-save').addEventListener('click', guardarApiKey);
    document.getElementById('btn-api-cancel').addEventListener('click', cerrarModalAPI);
    document.getElementById('btn-api-delete').addEventListener('click', eliminarApiKey);

    // Botones de instrucciones
    document.getElementById('btn-back-menu').addEventListener('click', () => UI.mostrarPantalla('screen-menu'));
    document.getElementById('btn-start-test').addEventListener('click', iniciarTest);

    // Botones de respuesta VFD
    document.querySelectorAll('.btn-answer').forEach(btn => {
      btn.addEventListener('click', function() {
        if (state.finalizado) return;
        const respuesta = this.dataset.answer;
        responderVFD(respuesta);
      });
    });

    // Botón confirmar inductivo
    document.getElementById('btn-inductivo-confirm').addEventListener('click', confirmarInductivo);

    // Botón avanzar pregunta (manual) - ambos
    document.getElementById('btn-next-question').addEventListener('click', avanzarPregunta);
    const btnNextInd = document.getElementById('btn-next-inductivo');
    if (btnNextInd) btnNextInd.addEventListener('click', avanzarPregunta);

    // Navegación cuestionario
    document.getElementById('btn-cuest-prev').addEventListener('click', preguntaAnteriorCuestionario);
    document.getElementById('btn-cuest-next').addEventListener('click', preguntaSiguienteCuestionario);

    // Botones de resultados
    document.getElementById('btn-retry').addEventListener('click', reiniciarTest);
    document.getElementById('btn-menu-from-results').addEventListener('click', () => UI.mostrarPantalla('screen-menu'));
    document.getElementById('btn-menu-from-global').addEventListener('click', () => UI.mostrarPantalla('screen-menu'));
    document.getElementById('btn-menu-from-dashboard').addEventListener('click', () => UI.mostrarPantalla('screen-menu'));

    // Mostrar menú inicial
    UI.mostrarPantalla('screen-menu');
  }

  // ==========================================================
  // SELECCIÓN DE TEST
  // ==========================================================

  function seleccionarTest(testKey) {
    state.testActual = testKey;
    state.testData = DataBank[testKey];
    state.finalizado = false;

    if (!state.testData) {
      console.error('Test no encontrado:', testKey);
      return;
    }

    UI.mostrarInstrucciones(state.testData);
    
    // Mostrar selector de datasets solo para test numérico
    configurarSelectorDatasets(testKey);
  }

  // ==========================================================
  // SELECTOR DE DATASETS
  // ==========================================================

  function configurarSelectorDatasets(testKey) {
    const selectorDiv = document.getElementById('dataset-selector');
    if (!selectorDiv) return;

    if (testKey !== 'numerico') {
      selectorDiv.classList.add('hidden');
      return;
    }

    // Seleccionar dataset ALEATORIO
    const todasLasKeys = ['__default__'];
    const datasets = state.testData.datasets || {};
    Object.keys(datasets).forEach(k => todasLasKeys.push(k));

    // Agregar datasets IA guardados
    const datasetsIA = DeepSeek.obtenerDatasetsLocales();
    datasetsIA.forEach((ds, idx) => todasLasKeys.push('__ia_' + idx));

    // Si hay API key, posibilidad de generar dataset IA
    if (obtenerApiKey()) {
      todasLasKeys.push('__generar_ia__');
    }

    // Elegir al azar (excepto __generar_ia__ que requiere acción)
    const opcionesReales = todasLasKeys.filter(k => k !== '__generar_ia__');
    const keyElegida = opcionesReales[Math.floor(Math.random() * opcionesReales.length)];

    // Guardar la elección en el estado
    state.datasetElegido = keyElegida;

    // Determinar nombre para mostrar
    let nombreDataset = 'Finanzas Corporativas';
    if (datasets[keyElegida]) {
      nombreDataset = datasets[keyElegida].nombre;
    } else if (keyElegida.startsWith('__ia_')) {
      const idx = parseInt(keyElegida.replace('__ia_', ''));
      nombreDataset = '🤖 ' + (datasetsIA[idx]?.nombre || 'Dataset IA');
    }

    // Si tocó __generar_ia__, generar ahora
    if (keyElegida === '__generar_ia__') {
      generarDatasetAleatorioIA();
      nombreDataset = '🤖 Generando dataset con IA...';
    }

    // Mostrar badge con el dataset seleccionado
    selectorDiv.classList.remove('hidden');
    const badge = document.getElementById('dataset-ia-badge');
    if (badge) {
      badge.textContent = '🎲 ' + nombreDataset;
      badge.classList.remove('hidden');
    }
  }

  async function generarDatasetAleatorioIA() {
    const apiKey = obtenerApiKey();
    if (!apiKey) return;

    try {
      const dataset = await DeepSeek.generarDataset(apiKey, 'estadisticas');
      if (dataset) {
        const datasetsIA = DeepSeek.obtenerDatasetsLocales();
        const idx = datasetsIA.length - 1;
        state.datasetElegido = '__ia_' + idx;
        const badge = document.getElementById('dataset-ia-badge');
        if (badge) badge.textContent = '🎲 🤖 ' + dataset.nombre;
      }
    } catch (e) {
      console.warn('No se pudo generar dataset IA, usando default:', e);
      state.datasetElegido = '__default__';
    }
  }

  /**
   * Obtiene los tabs activos según la selección en el combo.
   */
  function obtenerTabsActivos() {
    if (state.testActual !== 'numerico') return state.testData.tabs;

    const val = state.datasetElegido || '__default__';
    const datasets = state.testData.datasets || {};

    // Dataset local
    if (datasets[val]) return datasets[val].tabs;

    // Dataset generado por IA
    if (val.startsWith('__ia_')) {
      const idx = parseInt(val.replace('__ia_', ''));
      const datasetsIA = DeepSeek.obtenerDatasetsLocales();
      if (datasetsIA[idx]) return datasetsIA[idx].tabs;
    }

    // Por defecto
    return state.testData.tabs;
  }

  // ==========================================================
  // INICIAR TEST
  // ==========================================================

  async function iniciarTest() {
    const testKey = state.testActual;
    const testData = state.testData;

    // Para test numérico: QuestionBank tiene prioridad (imágenes reales + V/F/D)
    if (testKey === 'numerico') {
      state.questionBankData = cargarQuestionBank();
      if (state.questionBankData) {
        state.preguntas = state.questionBankData.preguntas;
        state.usandoIA = false;
        UI.iniciarTestVFD(testData, []);
        state.indiceActual = 0;
        state.respuestas = new Array(state.questionBankData.preguntas.length).fill(null);
        state.segundosRestantes = testData.tiempo || 9999;
        state.tiempoInicio = Date.now();
        state.finalizado = false;
        iniciarTimer();
        mostrarPreguntaActual();
        return;
      }
    }

    // Obtener API Key guardada
    const apiKey = obtenerApiKey();

    // Para Numérico y Verbal con API Key: usar DeepSeek
    if (apiKey && (testKey === 'numerico' || testKey === 'verbal')) {
      try {
        const btnStart = document.getElementById('btn-start-test');
        btnStart.textContent = '⏳ GENERANDO CON IA...';
        btnStart.disabled = true;

        const tipo = testKey === 'numerico' ? 'numerico' : 'verbal';
        const tabsActivos = testKey === 'numerico' ? obtenerTabsActivos() : testData.tabs;
        state.preguntas = await DeepSeek.generarPreguntas(apiKey, tabsActivos, testData.totalPreguntas, tipo);
        state.usandoIA = true;

        btnStart.textContent = 'INICIAR PRUEBA ►';
        btnStart.disabled = false;
      } catch (error) {
        console.warn('Error con DeepSeek, usando motor local:', error.message);
        state.usandoIA = false;
        generarPreguntasLocales(testKey, testData);
      }
    } else {
      state.usandoIA = false;
      generarPreguntasLocales(testKey, testData);
    }

    // Inicializar UI según tipo de test
    switch (testKey) {
      case 'numerico':
      case 'verbal':
        UI.iniciarTestVFD(testData, obtenerTabsActivos());
        break;
      case 'inductivo':
        UI.iniciarTestInductivo(testData);
        testData._totalReal = state.preguntas.length; // Guardar total real para UI
        break;
      case 'trabajo':
      case 'situacional':
        if (window.debugLog) debugLog('iniciarTest → cuestionario: ' + testKey + ' total=' + testData.totalPreguntas);
        UI.iniciarTestCuestionario(testData);
        break;
    }

    // Inicializar contadores
    state.indiceActual = 0;
    state.respuestas = new Array(testData.totalPreguntas).fill(null);
    state.segundosRestantes = testData.tiempo || 9999;
    state.tiempoInicio = Date.now();
    state.finalizado = false;

    // Iniciar timer
    iniciarTimer();

    // Mostrar primera pregunta
    mostrarPreguntaActual();
  }

  // ==========================================================
  // HELPERS: API KEY + PREGUNTAS LOCALES + DASHBOARD
  // ==========================================================

  function generarPreguntasLocales(testKey, testData) {
    switch (testKey) {
      case 'numerico':
        // Fallback: motor algorítmico (QuestionBank ya se intentó en iniciarTest)
        state.preguntas = EngineVFD.generarSesionNumerico(obtenerTabsActivos(), testData.totalPreguntas);
        break;
      case 'verbal':
        state.preguntas = EngineVFD.generarSesionVerbal(testData.tabs, testData.datosEstructurados, testData.totalPreguntas);
        break;
      case 'inductivo':
        try {
          // Intentar DB de patrones primero
          state.preguntas = EngineInductivoDB.generarSesion(testData.totalPreguntas);
        } catch (e) {
          console.error('Error generando ejercicios inductivos:', e);
          state.preguntas = [];
        }
        break;
      default:
        state.preguntas = [];
    }
  }

  function cargarQuestionBank() {
    if (state.testActual !== 'numerico') return null;
    if (typeof QuestionBank === 'undefined') return null;
    
    // Intentar con el dataset elegido, o buscar cualquier ds_ disponible
    let dsId = '';
    const val = state.datasetElegido || '';
    if (val.startsWith('ds_')) {
      dsId = val.replace('ds_', '');
    } else {
      // Buscar cualquier key ds_ en los datasets
      const datasets = state.testData?.datasets || {};
      const dsKey = Object.keys(datasets).find(k => k.startsWith('ds_'));
      if (dsKey) dsId = dsKey.replace('ds_', '');
    }
    
    if (!dsId) return null;
    const qb = QuestionBank[dsId];
    if (!qb) return null;
    
    // Mezclar preguntas de los 3 tipos de gráfico
    const todas = [
      ...qb.preguntas.barras.map(q => ({...q, grafico: 'barras', imgPath: qb.imgBarras})),
      ...qb.preguntas.lineas.map(q => ({...q, grafico: 'lineas', imgPath: qb.imgLineas})),
      ...qb.preguntas.torta.map(q => ({...q, grafico: 'torta', imgPath: qb.imgTorta}))
    ];
    
    const total = Math.min(state.testData.totalPreguntas, todas.length);
    const shuffled = todas.sort(() => Math.random() - 0.5);
    const dsName = state.testData?.datasets?.['ds_' + dsId]?.nombre || qb.nombre;
    
    return {
      datasetNombre: dsName,
      periodos: qb.periodos,
      preguntas: shuffled.slice(0, total),
      imgBarras: qb.imgBarras,
      imgLineas: qb.imgLineas,
      imgTorta: qb.imgTorta
    };
  }

  function obtenerApiKey() {
    return localStorage.getItem('ninja_deepseek_key') || '';
  }

  // --- Modal API Key ---
  function abrirModalAPI() {
    const keyActual = obtenerApiKey();
    document.getElementById('modal-api-input').value = keyActual;
    document.getElementById('modal-api').classList.remove('hidden');
    document.getElementById('modal-api-input').focus();
  }

  function cerrarModalAPI() {
    document.getElementById('modal-api').classList.add('hidden');
  }

  function guardarApiKey() {
    const key = document.getElementById('modal-api-input').value.trim();
    if (key) {
      localStorage.setItem('ninja_deepseek_key', key);
    }
    cerrarModalAPI();
    actualizarEstadoAPI();
  }

  function eliminarApiKey() {
    localStorage.removeItem('ninja_deepseek_key');
    document.getElementById('modal-api-input').value = '';
    cerrarModalAPI();
    actualizarEstadoAPI();
  }

  function actualizarEstadoAPI() {
    const key = obtenerApiKey();
    const bar = document.querySelector('.api-status-bar');
    const icon = document.getElementById('api-status-icon');
    const text = document.getElementById('api-status-text');

    if (key) {
      bar.classList.add('configured');
      icon.textContent = '✅';
      text.textContent = 'API DeepSeek: Configurada';
    } else {
      bar.classList.remove('configured');
      icon.textContent = '🔑';
      text.textContent = 'API DeepSeek: No configurada';
    }
  }

  function abrirDashboard() {
    const stats = calcularEstadisticasDashboard();
    UI.mostrarDashboard(stats);
  }

  function calcularEstadisticasDashboard() {
    const stats = {
      aciertosErrores: { aciertos: 0, errores: 0 },
      puntajesTest: { numerico: null, verbal: null, inductivo: null },
      historico: [],
      tiposError: []
    };

    // Obtener última sesión de cada test
    ['numerico', 'verbal', 'inductivo'].forEach(key => {
      const raw = localStorage.getItem(`ninja_${key}`);
      if (raw) {
        try {
          const data = JSON.parse(raw);
          stats.puntajesTest[key] = data.puntaje || 0;
          stats.aciertosErrores.aciertos += data.aciertos || 0;
          stats.aciertosErrores.errores += data.errores || 0;
        } catch (e) { /* ignorar */ }
      }
    });

    // Histórico de sesiones
    const historialRaw = localStorage.getItem('ninja_historial');
    if (historialRaw) {
      try {
        stats.historico = JSON.parse(historialRaw);
      } catch (e) { stats.historico = []; }
    }

    // Tipos de error (de la última sesión VFD)
    const ultimaSesion = localStorage.getItem('ninja_ultima_sesion');
    if (ultimaSesion) {
      try {
        const sesion = JSON.parse(ultimaSesion);
        const conteoErrores = {};
        (sesion.detalleErrores || []).forEach(err => {
          const tipo = err.tipoError || 'Otro';
          conteoErrores[tipo] = (conteoErrores[tipo] || 0) + 1;
        });
        stats.tiposError = Object.entries(conteoErrores).map(([tipo, cantidad]) => ({ tipo, cantidad }));
      } catch (e) { /* ignorar */ }
    }

    return stats;
  }

  // ==========================================================
  // TIMER
  // ==========================================================

  function iniciarTimer() {
    detenerTimer();

    const testData = state.testData;
    if (!testData.tiempo) {
      // Sin límite de tiempo (cuestionario de Trabajo)
      return;
    }

    state.timerInterval = setInterval(() => {
      state.segundosRestantes--;

      // Actualizar display según el tipo de test
      let timerId;
      switch (state.testActual) {
        case 'inductivo': timerId = 'timer-display-inductivo'; break;
        case 'trabajo':
        case 'situacional': timerId = 'timer-display-cuest'; break;
        default: timerId = 'timer-display';
      }

      const tiempoAgotado = UI.actualizarTimer(state.segundosRestantes, timerId, testData.tiempo);

      if (tiempoAgotado || state.segundosRestantes <= 0) {
        finalizarTest();
      }
    }, 1000);
  }

  function detenerTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
  }

  // ==========================================================
  // MOSTRAR PREGUNTA ACTUAL
  // ==========================================================

  function mostrarPreguntaActual() {
    const idx = state.indiceActual;
    const testData = state.testData;

    if (window.debugLog) debugLog('mostrarPreguntaActual: test=' + state.testActual + ' idx=' + idx + ' preguntas=' + state.preguntas.length + ' esCuestionario=' + (state.testActual==='trabajo'||state.testActual==='situacional'));
    
    // Verificar que hay preguntas (excepto cuestionarios que usan testData)
    const esCuestionario = (state.testActual === 'trabajo' || state.testActual === 'situacional');
    if (!esCuestionario && (!state.preguntas || state.preguntas.length === 0)) {
      console.error('No hay preguntas generadas para', state.testActual);
      return;
    }
    if (!esCuestionario && idx >= state.preguntas.length) {
      finalizarTest();
      return;
    }
    if (esCuestionario && idx >= testData.totalPreguntas) {
      finalizarTest();
      return;
    }

    switch (state.testActual) {
      case 'numerico':
      case 'verbal':
        UI.mostrarPreguntaVFD(state.preguntas[idx], idx, testData.totalPreguntas);
        break;

      case 'inductivo':
        UI.mostrarEjercicioInductivo(state.preguntas[idx], idx, state.preguntas.length);
        break;

      case 'trabajo':
      case 'situacional':
        UI.mostrarPreguntaCuestionario(testData, idx, testData.totalPreguntas, state.respuestas);
        actualizarNavCuestionario();
        break;
    }
  }

  // ==========================================================
  // RESPUESTAS VFD (Numérico y Verbal)
  // ==========================================================

  function responderVFD(respuesta) {
    if (state.finalizado) return;

    const idx = state.indiceActual;
    const pregunta = state.preguntas[idx];

    // Marcar botón seleccionado y deshabilitar todos
    document.querySelectorAll('.btn-answer').forEach(b => {
      b.classList.remove('selected');
      b.disabled = true;
    });
    document.querySelector(`.btn-answer[data-answer="${respuesta}"]`).classList.add('selected');

    // Evaluar según tipo de pregunta
    let evaluacion;
    if (pregunta.grafico) {
      // Pregunta pre-escrita: comparar con respuesta correcta
      evaluacion = evaluarPreguntaPreEscrita(pregunta, respuesta);
    } else {
      // Pregunta algorítmica V/F/D
      evaluacion = EngineVFD.evaluarRespuesta(pregunta, respuesta);
    }

    // Guardar respuesta
    state.respuestas[idx] = {
      respuesta: respuesta,
      correcta: evaluacion.esCorrecta,
      tipoError: evaluacion.tipoError
    };

    // Mostrar feedback
    UI.mostrarFeedbackInmediato(evaluacion.esCorrecta, evaluacion.explicacion);

    // Mostrar botón para avanzar manualmente
    const btnNext = document.getElementById('btn-next-question');
    if (btnNext) {
      btnNext.classList.remove('hidden');
      btnNext.textContent = (state.indiceActual < state.testData.totalPreguntas - 1) 
        ? 'SIGUIENTE PREGUNTA ►' 
        : 'VER RESULTADOS ►';
      btnNext.focus();
    }
  }

  function evaluarPreguntaPreEscrita(pregunta, respuestaUsuario) {
    // Las preguntas pre-escritas ya tienen formato V/F/D
    const respuestaCorrecta = pregunta.respuesta || '';
    const esCorrecta = respuestaCorrecta === respuestaUsuario;
    
    const mapa = { V: 'Verdadero', F: 'Falso', D: 'Desconocido' };
    const tipoError = esCorrecta ? 'Correcto' :
      respuestaUsuario === 'D' ? 'Marcó Desconocido cuando el gráfico contenía la información' :
      respuestaCorrecta === 'D' ? `Marcó ${mapa[respuestaUsuario]} cuando era Desconocido (el gráfico no da esa información)` :
      `Confundió ${mapa[respuestaUsuario]} con ${mapa[respuestaCorrecta]}`;

    return {
      esCorrecta,
      tipoError,
      explicacion: pregunta.explicacion || `${mapa[respuestaCorrecta]}. ${esCorrecta ? '✅' : '❌ Revisa el gráfico.'}`
    };
  }

  function avanzarPregunta() {
    if (state.finalizado) return;

    // Ocultar botones de avance
    const btnNext = document.getElementById('btn-next-question');
    if (btnNext) btnNext.classList.add('hidden');
    const btnNextInd = document.getElementById('btn-next-inductivo');
    if (btnNextInd) btnNextInd.classList.add('hidden');

    // Re-habilitar según tipo de test
    if (state.testActual === 'numerico' || state.testActual === 'verbal') {
      document.querySelectorAll('.btn-answer').forEach(b => b.disabled = false);
    }
    if (state.testActual === 'inductivo') {
      document.getElementById('btn-inductivo-confirm').disabled = true;
      document.querySelectorAll('#inductivo-opt-tables .icon-grid').forEach(g => {
        g.classList.remove('selected');
        g.style.borderColor = '';
        g.style.boxShadow = '';
      });
    }

    if (state.indiceActual < state.preguntas.length - 1) {
      state.indiceActual++;
      mostrarPreguntaActual();
    } else {
      finalizarTest();
    }
  }

  // ==========================================================
  // RESPUESTAS INDUCTIVO
  // ==========================================================

  function confirmarInductivo() {
    if (state.finalizado) return;

    const idx = state.indiceActual;
    const ejercicio = state.preguntas[idx];
    const seleccion = UI.obtenerSeleccionInductivo();

    if (seleccion.length !== 2) return;

    // Evaluar con el motor que corresponda
    const evaluacion = ejercicio.esDB
      ? EngineInductivoDB.evaluarRespuesta(seleccion, ejercicio.correctas)
      : EngineInductivo.evaluarRespuesta(seleccion, ejercicio.correctas);

    state.respuestas[idx] = {
      seleccion: seleccion,
      correcta: evaluacion.esCorrecta,
      tipoError: evaluacion.tipoError
    };

    // Deshabilitar confirmación
    document.getElementById('btn-inductivo-confirm').disabled = true;

    // Feedback visual en las opciones
    const opciones = document.querySelectorAll('#inductivo-opt-tables .icon-grid');
    opciones.forEach((grid, i) => {
      if (ejercicio.correctas.includes(i)) {
        grid.style.borderColor = '#7ecb7e';
        grid.style.boxShadow = '0 0 12px rgba(126,203,126,0.3)';
      }
    });

    // Mostrar botón de avance manual (usar el del inductivo)
    const btnNext = document.getElementById('btn-next-inductivo') || document.getElementById('btn-next-question');
    if (btnNext) {
      btnNext.classList.remove('hidden');
      btnNext.textContent = (state.indiceActual < state.preguntas.length - 1)
        ? 'SIGUIENTE EJERCICIO ►'
        : 'VER RESULTADOS ►';
      btnNext.focus();
    }
  }

  // ==========================================================
  // NAVEGACIÓN CUESTIONARIOS
  // ==========================================================

  function preguntaSiguienteCuestionario() {
    if (window.debugLog) debugLog('preguntaSiguienteCuestionario idx=' + state.indiceActual + ' test=' + state.testActual);
    guardarRespuestaCuestionario();

    const total = state.testData.totalPreguntas;
    if (state.indiceActual < total - 1) {
      state.indiceActual++;
      mostrarPreguntaActual();
    } else {
      finalizarTest();
    }
  }

  function preguntaAnteriorCuestionario() {
    guardarRespuestaCuestionario();

    if (state.indiceActual > 0) {
      state.indiceActual--;
      mostrarPreguntaActual();
    }
  }

  function guardarRespuestaCuestionario() {
    const respuesta = UI.obtenerRespuestaCuestionario(state.testData);
    if (respuesta !== null) {
      state.respuestas[state.indiceActual] = respuesta;
    }
  }

  function actualizarNavCuestionario() {
    document.getElementById('btn-cuest-prev').disabled = state.indiceActual === 0;
    const esUltima = state.indiceActual >= state.testData.totalPreguntas - 1;
    document.getElementById('btn-cuest-next').textContent = esUltima ? 'FINALIZAR ►' : 'SIGUIENTE ►';
  }

  // ==========================================================
  // FINALIZAR TEST
  // ==========================================================

  function finalizarTest() {
    if (state.finalizado) return;
    state.finalizado = true;
    detenerTimer();

    // Guardar última respuesta pendiente (cuestionario)
    if (state.testActual === 'trabajo' || state.testActual === 'situacional') {
      guardarRespuestaCuestionario();
    }

    // Calcular resultados
    const resultados = calcularResultados();
    UI.mostrarResultados(resultados, state.testData);

    // Guardar en historial
    guardarEnHistorial(resultados);
  }

  function calcularResultados() {
    const testData = state.testData;
    const respuestas = state.respuestas;
    const tiempoUsado = testData.tiempo
      ? testData.tiempo - state.segundosRestantes
      : Math.floor((Date.now() - state.tiempoInicio) / 1000);

    // Para cuestionarios
    if (testData.pares) {
      // Comportamientos Trabajo: contar preferencias
      let prefA = 0, prefB = 0;
      respuestas.forEach(r => {
        if (r !== null && r !== undefined) {
          if (r <= 3) prefA++;
          else prefB++;
        }
      });

      return {
        puntaje: 0,
        aciertos: 0,
        errores: 0,
        tiempoUsado: UI.formatearTiempo(tiempoUsado),
        preferenciasA: prefA,
        preferenciasB: prefB,
        detalleErrores: []
      };
    }

    if (testData.afirmaciones) {
      // Comportamiento Situacional
      const respuestasValidas = respuestas.filter(r => r !== null && r !== undefined);
      const promedio = respuestasValidas.length > 0
        ? respuestasValidas.reduce((a, b) => a + b, 0) / respuestasValidas.length
        : 0;

      return {
        puntaje: 0,
        aciertos: 0,
        errores: 0,
        tiempoUsado: UI.formatearTiempo(tiempoUsado),
        promedioRespuestas: promedio,
        detalleErrores: []
      };
    }

    // Para test VFD e Inductivo
    let aciertos = 0;
    const detalleErrores = [];

    respuestas.forEach((r, i) => {
      if (r && r.correcta) {
        aciertos++;
      } else if (r && !r.correcta) {
        const pregunta = state.preguntas[i] || {};
        detalleErrores.push({
          numero: i + 1,
          enunciado: pregunta.enunciado || '',
          respuestaUsuario: r.respuesta || r.seleccion?.join(',') || 'Sin responder',
          respuestaCorrecta: pregunta.respuesta || pregunta.correctas?.join(',') || '',
          explicacion: pregunta.explicacion || r.tipoError || ''
        });
      } else {
        // No respondida
        detalleErrores.push({
          numero: i + 1,
          enunciado: state.preguntas[i]?.enunciado || '',
          respuestaUsuario: 'Sin responder',
          respuestaCorrecta: state.preguntas[i]?.respuesta || '',
          explicacion: 'No se respondió esta pregunta.'
        });
      }
    });

    const totalRespondidas = respuestas.filter(r => r !== null && r !== undefined).length;
    const puntaje = totalRespondidas > 0 ? Math.round((aciertos / totalRespondidas) * 100) : 0;

    return {
      puntaje: puntaje,
      aciertos: aciertos,
      errores: totalRespondidas - aciertos,
      tiempoUsado: UI.formatearTiempo(tiempoUsado),
      detalleErrores: detalleErrores
    };
  }

  // ==========================================================
  // REINICIAR TEST
  // ==========================================================

  function reiniciarTest() {
    detenerTimer();
    state.finalizado = false;
    iniciarTest();
  }

  // ==========================================================
  // HISTORIAL (localStorage)
  // ==========================================================

  function guardarEnHistorial(resultados) {
    const key = `ninja_${state.testActual}`;
    const data = {
      puntaje: resultados.puntaje,
      aciertos: resultados.aciertos,
      errores: resultados.errores,
      tiempoUsado: resultados.tiempoUsado,
      fecha: new Date().toISOString()
    };
    localStorage.setItem(key, JSON.stringify(data));

    // Guardar última sesión para dashboard (incluye detalle de errores)
    if (resultados.detalleErrores) {
      localStorage.setItem('ninja_ultima_sesion', JSON.stringify({
        tipo: state.testActual,
        puntaje: resultados.puntaje,
        detalleErrores: resultados.detalleErrores,
        fecha: new Date().toISOString()
      }));
    }

    // Actualizar historial para gráfico de evolución
    if (state.testActual === 'numerico' || state.testActual === 'verbal' || state.testActual === 'inductivo') {
      const historialRaw = localStorage.getItem('ninja_historial');
      let historial = [];
      if (historialRaw) {
        try { historial = JSON.parse(historialRaw); } catch (e) { historial = []; }
      }
      // Agregar entrada con puntajes actualizados
      const ultimaEntrada = historial.length > 0 ? historial[historial.length - 1] : null;
      const fechaHoy = new Date().toLocaleDateString('es-CL');

      if (ultimaEntrada && ultimaEntrada.fecha === fechaHoy) {
        // Actualizar entrada del mismo día
        ultimaEntrada[state.testActual] = resultados.puntaje;
      } else {
        // Nueva entrada de sesión
        const nueva = { fecha: fechaHoy, numerico: null, verbal: null, inductivo: null };
        nueva[state.testActual] = resultados.puntaje;
        historial.push(nueva);
      }

      // Mantener últimas 20 sesiones
      if (historial.length > 20) historial = historial.slice(-20);
      localStorage.setItem('ninja_historial', JSON.stringify(historial));
    }
  }

  function obtenerHistorial() {
    const historial = {};
    ['numerico', 'verbal', 'inductivo'].forEach(key => {
      const raw = localStorage.getItem(`ninja_${key}`);
      if (raw) {
        try {
          historial[key] = JSON.parse(raw);
        } catch (e) {
          // ignorar datos corruptos
        }
      }
    });
    return historial;
  }

  function mostrarResultadosGlobales() {
    const historial = obtenerHistorial();
    UI.mostrarResultadosGlobales(historial);
  }

  // ==========================================================
  // INICIAR
  // ==========================================================

  // Arrancar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // API pública (para debug)
  return {
    state: state,
    init: init,
    seleccionarTest: seleccionarTest
  };

})();

/* FIN BLOQUE 7 */
