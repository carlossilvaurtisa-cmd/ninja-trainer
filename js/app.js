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
    finalizado: false,        // Si el test ya terminó
    usuario: ''               // Usuario activo
  };

  // ==========================================================
  // SISTEMA DE USUARIO
  // ==========================================================

  function loginUsuario() {
    const input = document.getElementById('input-username');
    const nombre = input.value.trim();
    if (!nombre) return;
    
    state.usuario = nombre;
    localStorage.setItem('ninja_current_user', nombre);
    input.value = '';
    mostrarMenuTests(nombre);
  }

  function mostrarMenuTests(nombre) {
    document.getElementById('menu-tests').classList.remove('hidden');
    document.getElementById('welcome-msg').classList.remove('hidden');
    document.getElementById('welcome-msg').innerHTML = '🥷 Bienvenido, <strong>' + nombre + '</strong>';
    document.querySelector('.user-bar').classList.add('hidden');
  }

  function userKey(suffix) {
    return state.usuario ? 'ninja_' + state.usuario + '_' + suffix : 'ninja_' + suffix;
  }

  // ==========================================================
  // INICIALIZACIÓN
  // ==========================================================

  function init() {
    // Verificar si hay usuario guardado (auto-login)
    const savedUser = localStorage.getItem(userKey('current_user'));
    if (savedUser) {
      state.usuario = savedUser;
      mostrarMenuTests(savedUser);
    }

    // Inicializar motor inductivo con sus datos
    EngineInductivo.init(DataBank.inductivo);
    EngineInductivoDB.init();

    // Actualizar estado visual de la API key
    actualizarEstadoAPI();

    // Login
    document.getElementById('btn-enter').addEventListener('click', loginUsuario);
    document.getElementById('input-username').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') loginUsuario();
    });

    // Zoom de texto
    let zoomLevel = 100;
    document.querySelectorAll('.btn-zoom').forEach(btn => {
      btn.addEventListener('click', function() {
        const delta = parseInt(this.dataset.zoom);
        zoomLevel = Math.max(60, Math.min(200, zoomLevel + delta * 10));
        document.getElementById('zoom-value').textContent = zoomLevel + '%';
        document.querySelectorAll('.tab-content, .tab-text, .question-statement').forEach(el => {
          el.style.fontSize = (zoomLevel / 100) + 'em';
        });
      });
    });

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

    // Botón curso - manejado inline en index.html
    document.getElementById('btn-curso').addEventListener('click', function() {
      UI.mostrarPantalla('screen-curso');
    });

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
    document.getElementById('btn-reforzar').addEventListener('click', reforzarErrores);
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
        UI.iniciarTestVFD(testData, testData.tabs);
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
        let tabsActivos = testData.tabs;
        // Para verbal: seleccionar 4 tabs aleatorios por sesión
        if (testKey === 'verbal') {
          tabsActivos = seleccionarTabsAleatorios(testData.tabs, 4);
          state.verbalActiveTabs = tabsActivos;
        }
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
        UI.iniciarTestVFD(testData, state.verbalActiveTabs || testData.tabs);
        break;
      case 'inductivo':
        UI.iniciarTestInductivo(testData);
        testData._totalReal = state.preguntas.length; // Guardar total real para UI
        break;
      case 'trabajo':
      case 'situacional':
      case 'profesional':
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

  function seleccionarTabsAleatorios(tabs, cantidad) {
    if (!tabs || tabs.length <= cantidad) return tabs || [];
    // Barajar y tomar los primeros N
    const shuffled = [...tabs].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, cantidad);
  }

  // ==========================================================
  // HELPERS: API KEY + PREGUNTAS LOCALES + DASHBOARD
  // ==========================================================

  function generarPreguntasLocales(testKey, testData) {
    switch (testKey) {
      case 'numerico':
        // Siempre usar tabs por defecto (6 pestañas con temas diferentes)
        state.preguntas = EngineVFD.generarSesionNumerico(testData.tabs, testData.totalPreguntas);
        break;
      case 'verbal':
        // Seleccionar 4 tabs aleatorios para esta sesión (varían cada vez)
        const tabsAleatorios = seleccionarTabsAleatorios(testData.tabs, 4);
        state.verbalActiveTabs = tabsAleatorios; // Guardar para UI
        const activeTabIds = tabsAleatorios.map(t => t.id);
        state.preguntas = EngineVFD.generarSesionVerbal(tabsAleatorios, testData.datosEstructurados, testData.totalPreguntas, activeTabIds);
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
      case 'profesional':
        // Mezclar banco y tomar N preguntas
        var banco = testData.banco || [];
        var mezclado = banco.sort(function() { return Math.random() - 0.5; });
        state.preguntas = mezclado.slice(0, Math.min(testData.totalPreguntas, mezclado.length));
        break;
      default:
        state.preguntas = [];
    }
  }

  function cargarQuestionBank() {
    if (state.testActual !== 'numerico') return null;
    if (typeof QuestionBank === 'undefined') return null;

    // Seleccionar 6 datasets diferentes al azar para mezclar pestañas
    const allIds = Object.keys(QuestionBank);
    if (allIds.length < 6) return null;
    
    const shuffled = [...allIds].sort(() => Math.random() - 0.5);
    const seleccionados = shuffled.slice(0, 6);
    
    // Crear tabs mezcladas: cada una de un dataset diferente
    const tipos = ['barras', 'lineas', 'torta', 'barras', 'lineas', 'torta'];
    const tabsMezcladas = [];
    const todasPreguntas = [];
    
    seleccionados.forEach((dsId, i) => {
      const qb = QuestionBank[dsId];
      const tipo = tipos[i];
      const preguntasDS = qb.preguntas[tipo] || [];
      
      // Crear tab virtual con la imagen real
      tabsMezcladas.push({
        id: 'mix_' + dsId + '_' + tipo,
        titulo: qb.nombre + ' (' + (tipo === 'barras' ? 'Barras' : tipo === 'lineas' ? 'Líneas' : 'Torta') + ')',
        tipo: tipo,
        descripcion: qb.periodos || '',
        imagen: tipo === 'barras' ? qb.imgBarras : tipo === 'lineas' ? qb.imgLineas : qb.imgTorta,
        categorias: [],
        series: [],
        datos: {}
      });
      
      // Agregar preguntas de este dataset (max 7 por tab)
      const preguntasTab = preguntasDS
        .sort(() => Math.random() - 0.5)
        .slice(0, 7)
        .map(q => ({
          ...q,
          grafico: tipo,
          imgPath: tabsMezcladas[i].imagen,
          tabId: tabsMezcladas[i].id,
          tabTitulo: tabsMezcladas[i].titulo
        }));
      
      todasPreguntas.push(...preguntasTab);
    });
    
    // Barajar todas las preguntas y tomar 40
    const preguntasFinal = todasPreguntas.sort(() => Math.random() - 0.5).slice(0, 40);
    
    return {
      datasetNombre: 'Temáticas combinadas',
      periodos: 'Datos de 6 fuentes diferentes',
      preguntas: preguntasFinal,
      tabsMezcladas: tabsMezcladas,
      imgBarras: tabsMezcladas[0]?.imagen || '',
      imgLineas: tabsMezcladas[1]?.imagen || '',
      imgTorta: tabsMezcladas[2]?.imagen || ''
    };
  }

  function obtenerApiKey() {
    return localStorage.getItem(userKey('deepseek_key')) || '';
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
      localStorage.setItem(userKey('deepseek_key'), key);
    }
    cerrarModalAPI();
    actualizarEstadoAPI();
  }

  function eliminarApiKey() {
    localStorage.removeItem(userKey('deepseek_key'));
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
      const raw = localStorage.getItem(userKey(key));
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
    const historialRaw = localStorage.getItem(userKey('historial'));
    if (historialRaw) {
      try {
        stats.historico = JSON.parse(historialRaw);
      } catch (e) { stats.historico = []; }
    }

    // Tipos de error (de la última sesión VFD)
    const ultimaSesion = localStorage.getItem(userKey('ultima_sesion'));
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
        case 'situacional':
        case 'profesional': timerId = 'timer-display-cuest'; break;
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
      case 'profesional':
        UI.mostrarPreguntaProfesional(state.preguntas[idx], idx, state.preguntas.length);
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

    // Mostrar feedback (usa el elemento correcto según test)
    if (state.testActual === 'profesional') {
      var fb2 = document.getElementById('feedback-cuest');
      if (fb2) {
        fb2.classList.remove('hidden', 'correct', 'incorrect');
        fb2.classList.add(evaluacion.esCorrecta ? 'correct' : 'incorrect');
        fb2.innerHTML = '<strong>' + (evaluacion.esCorrecta ? '✅ ¡CORRECTO!' : '❌ INCORRECTO') + '</strong><br>' + evaluacion.explicacion;
      }
    } else {
      UI.mostrarFeedbackInmediato(evaluacion.esCorrecta, evaluacion.explicacion);
    }

    // Mostrar botón para avanzar manualmente (solo si no es profesional, que usa btn-cuest-next)
    if (state.testActual !== 'profesional') {
      const btnNext = document.getElementById('btn-next-question');
      if (btnNext) {
        btnNext.classList.remove('hidden');
        btnNext.textContent = (state.indiceActual < state.testData.totalPreguntas - 1) 
          ? 'SIGUIENTE PREGUNTA ►' 
          : 'VER RESULTADOS ►';
        btnNext.focus();
      }
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

  function responderProfesionalMC(indice) {
    if (state.finalizado || state.testActual !== 'profesional') return;
    var idx = state.indiceActual;
    var pregunta = state.preguntas[idx];
    if (!pregunta || pregunta.tipo !== 'MC') return;

    var esCorrecta = pregunta.respuesta === indice;
    state.respuestas[idx] = {
      respuesta: indice,
      correcta: esCorrecta,
      tipoError: esCorrecta ? 'Correcto' : 'Respuesta incorrecta'
    };

    // Feedback visual
    document.querySelectorAll('.btn-mc').forEach(function(btn, i) {
      btn.style.borderColor = i === pregunta.respuesta ? '#198754' : '#DEE2E6';
      btn.style.background = i === pregunta.respuesta ? '#D1E7DD' : '#fff';
      if (i === indice && i !== pregunta.respuesta) {
        btn.style.borderColor = '#DC3545';
        btn.style.background = '#F8D7DA';
      }
    });

    // Mostrar feedback en el elemento del cuestionario
    var fb = document.getElementById('feedback-cuest');
    if (fb) {
      fb.classList.remove('hidden');
      fb.className = 'feedback-instant ' + (esCorrecta ? 'correct' : 'incorrect');
      fb.innerHTML = (esCorrecta ? '✅ ¡Correcto!' : '❌ Incorrecto') + '<br>' + pregunta.explicacion;
    }
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
      var fb = document.getElementById('inductivo-feedback');
      if (fb) fb.classList.add('hidden');
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
      grid.style.borderColor = '';
      grid.style.boxShadow = '';
      if (ejercicio.correctas.includes(i)) {
        grid.style.borderColor = '#198754';
        grid.style.boxShadow = '0 0 0 3px #198754';
      }
      if (seleccion.includes(i) && !ejercicio.correctas.includes(i)) {
        grid.style.borderColor = '#DC3545';
        grid.style.boxShadow = '0 0 0 3px #DC3545';
      }
    });

    // Mostrar feedback con explicación
    var feedback = document.getElementById('inductivo-feedback');
    if (feedback) {
      feedback.classList.remove('hidden');
      var esCorrecto = evaluacion.esCorrecta;
      feedback.className = 'feedback-instant ' + (esCorrecto ? 'correct' : 'incorrect');
      var msg = '<strong>' + (esCorrecto ? '✅ ¡CORRECTO!' : '❌ INCORRECTO') + '</strong><br>';
      msg += evaluacion.mensaje + '<br>';
      if (ejercicio.esDB) {
        var p = ejercicio.patron || '';
        var dif = '🟢 Fácil';
        var expl = 'El símbolo dominante aparece claramente más veces que los demás.';
        if (p.match(/^[23]-[23]-[23]|2-3-3|3-3/)) {
          dif = '🔴 Difícil';
          expl = '¡Hay empate o el dominante NO es el más frecuente! Debes fijarte en las posiciones, no solo en contar.';
        } else if (p.match(/^4-[23]|^[23]-4/)) {
          dif = '🟡 Intermedio';
          expl = 'El dominante gana por poco margen. Hay que verificar bien las posiciones.';
        }
        msg += '<br><small style="opacity:0.8;">' + dif + ' | ' + expl + '<br>Patrón: ' + (ejercicio.patron || 'N/A') + ' | Eje: ' + (ejercicio.eje || 'N/A') + '</small>';
      }
      feedback.innerHTML = msg;
    }

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
    if (state.testActual === 'trabajo' || state.testActual === 'situacional' || state.testActual === 'profesional') {
      guardarRespuestaCuestionario();
    }

    // Calcular resultados
    const resultados = calcularResultados();
    state._ultimosResultados = resultados; // Guardar para posible refuerzo
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
          area: pregunta.area || testData.subtitulo || '',
          enunciado: pregunta.enunciado || '',
          respuestaUsuario: r.respuesta || r.seleccion?.join(',') || 'Sin responder',
          respuestaCorrecta: pregunta.respuesta || pregunta.correctas?.join(',') || '',
          explicacion: pregunta.explicacion || r.tipoError || ''
        });
      } else {
        // No respondida
        const pregunta = state.preguntas[i] || {};
        detalleErrores.push({
          numero: i + 1,
          area: pregunta.area || '',
          enunciado: pregunta.enunciado || '',
          respuestaUsuario: 'Sin responder',
          respuestaCorrecta: pregunta.respuesta || '',
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
  // REFORZAR ERRORES (DeepSeek genera preguntas sobre temas débiles)
  // ==========================================================

  async function reforzarErrores() {
    const apiKey = obtenerApiKey();
    if (!apiKey) {
      alert('⚠️ Necesitas configurar tu API Key de DeepSeek para usar esta función.\n\nVe a "Configurar API" en el menú principal.');
      return;
    }

    // Obtener errores de la última sesión
    const ultimaSesion = state._ultimosResultados;
    if (!ultimaSesion || !ultimaSesion.detalleErrores || ultimaSesion.detalleErrores.length === 0) {
      alert('🎉 ¡No hay errores que reforzar! Excelente trabajo.');
      return;
    }

    const errores = ultimaSesion.detalleErrores.filter(e => e.area);

    // Identificar temas débiles únicos
    const temasDebiles = [...new Set(errores.map(e => e.area))];

    // Mostrar estado de carga
    const btnReforzar = document.getElementById('btn-reforzar');
    const statusDiv = document.getElementById('results-dashboard');
    if (btnReforzar) {
      btnReforzar.textContent = '⏳ GENERANDO PREGUNTAS...';
      btnReforzar.disabled = true;
    }
    if (statusDiv) {
      statusDiv.classList.remove('hidden');
      statusDiv.innerHTML = '<div style="text-align:center;padding:16px;"><h3>⏳ Analizando tus errores...</h3><p style="font-size:0.9rem;color:var(--texto-muted);">DeepSeek está generando preguntas personalizadas sobre:<br><strong>' + temasDebiles.slice(0,5).join(', ') + (temasDebiles.length > 5 ? '...' : '') + '</strong></p><p style="font-size:0.75rem;color:var(--texto-muted);">Esto puede tomar 10-20 segundos...</p></div>';
    }

    try {
      const cantidad = Math.min(errores.length + 5, 20); // Entre 5 y 20 preguntas de refuerzo
      const preguntasRefuerzo = await DeepSeek.generarPreguntasRefuerzo(
        apiKey,
        temasDebiles,
        errores,
        cantidad
      );

      if (!preguntasRefuerzo || preguntasRefuerzo.length === 0) {
        throw new Error('No se generaron preguntas');
      }

      // Configurar nueva sesión de refuerzo
      detenerTimer();
      state.testActual = state.testActual; // mantener el tipo de test
      state.preguntas = preguntasRefuerzo;
      state.respuestas = new Array(preguntasRefuerzo.length).fill(null);
      state.indiceActual = 0;
      state.segundosRestantes = Math.max(preguntasRefuerzo.length * 75, 600); // ~75 seg por pregunta, min 10 min
      state.tiempoInicio = Date.now();
      state.finalizado = false;
      state._modoRefuerzo = true;

      // Mostrar UI de refuerzo
      UI.iniciarTestCuestionario({
        titulo: '🎯 REFUERZO: ' + state.testData.titulo,
        subtitulo: 'Preguntas generadas por IA sobre tus temas débiles',
        tiempo: state.segundosRestantes,
        totalPreguntas: preguntasRefuerzo.length
      });

      // Actualizar información de refuerzo
      if (statusDiv) {
        statusDiv.classList.remove('hidden');
        statusDiv.innerHTML = '<div style="text-align:center;padding:16px;background:#D1E7DD;border-radius:8px;"><h3 style="color:#0F5132;">✅ ' + preguntasRefuerzo.length + ' preguntas generadas</h3><p style="font-size:0.8rem;color:#0F5132;">Temas: ' + temasDebiles.slice(0,5).join(', ') + (temasDebiles.length > 5 ? ' y ' + (temasDebiles.length - 5) + ' más' : '') + '</p></div>';
        setTimeout(() => { if (statusDiv) statusDiv.classList.add('hidden'); }, 3000);
      }

      // Iniciar timer y mostrar primera pregunta
      iniciarTimer();
      mostrarPreguntaActual();

    } catch (error) {
      console.error('Error en refuerzo:', error);
      if (statusDiv) {
        statusDiv.classList.remove('hidden');
        statusDiv.innerHTML = '<div style="text-align:center;padding:16px;background:#F8D7DA;border-radius:8px;"><h3 style="color:#842029;">❌ Error al generar preguntas</h3><p style="font-size:0.8rem;color:#842029;">' + error.message + '</p><p style="font-size:0.8rem;">Verifica tu conexión y API Key. Luego intenta de nuevo.</p></div>';
      }
      if (btnReforzar) {
        btnReforzar.textContent = '🎯 REFORZAR ERRORES';
        btnReforzar.disabled = false;
      }
    }
  }

  // ==========================================================
  // HISTORIAL (localStorage)
  // ==========================================================

  function guardarEnHistorial(resultados) {
    const ukey = userKey(state.testActual);
    const data = {
      puntaje: resultados.puntaje,
      aciertos: resultados.aciertos,
      errores: resultados.errores,
      tiempoUsado: resultados.tiempoUsado,
      fecha: new Date().toISOString()
    };
    localStorage.setItem(ukey, JSON.stringify(data));

    // Guardar última sesión para dashboard
    if (resultados.detalleErrores) {
      localStorage.setItem(userKey('ultima_sesion'), JSON.stringify({
        tipo: state.testActual,
        puntaje: resultados.puntaje,
        detalleErrores: resultados.detalleErrores,
        fecha: new Date().toISOString()
      }));
    }

    // Actualizar historial para gráfico de evolución
    if (state.testActual === 'numerico' || state.testActual === 'verbal' || state.testActual === 'inductivo') {
      const historialRaw = localStorage.getItem(userKey('historial'));
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
      localStorage.setItem(userKey('historial'), JSON.stringify(historial));
    }
  }

  function obtenerHistorial() {
    const historial = {};
    ['numerico', 'verbal', 'inductivo'].forEach(key => {
      const raw = localStorage.getItem(userKey(key));
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
    seleccionarTest: seleccionarTest,
    responderVFD: responderVFD,
    responderProfesionalMC: responderProfesionalMC
  };

})();

/* FIN BLOQUE 7 */
