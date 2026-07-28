/* ============================================================
   BLOQUE 5: MOTOR INDUCTIVO - GENERADOR DE PATRONES VISUALES
   ============================================================ */

const EngineInductivo = (function() {
  'use strict';

  // Caché local de la data inductiva
  let dataInductivo = null;

  function init(data) {
    dataInductivo = data;
  }

  // ==========================================================
  // GENERADOR DE EJERCICIO COMPLETO
  // ==========================================================

  /**
   * Genera un ejercicio completo de razonamiento inductivo.
   * @returns {Object} Ejercicio con tablas de referencia, 4 opciones, y cuáles son correctas
   */
  function generarEjercicio() {
    if (!dataInductivo) throw new Error('EngineInductivo no inicializado. Llama a init(data).');

    // 1. Elegir regla base
    const regla = elegirAlAzar(dataInductivo.reglas);

    // 2. Elegir tamaño de grid (preferentemente 2x2, ocasionalmente 3x3)
    const usar3x3 = Math.random() < 0.2;
    const size = usar3x3 ? 'size3' : 'size2';

    // 3. Elegir grid base
    const gridsBase = dataInductivo.gridsBase[size];
    const gridBase = elegirAlAzar(gridsBase);

    // 4. Aplicar regla → grid transformado (par de referencia)
    const gridTransformado = regla.aplicar(gridBase);

    // 5. Generar 4 opciones
    const opciones = generarOpciones(gridBase, regla, dataInductivo.reglas, dataInductivo.gridsBase, size);

    return {
      reglaId: regla.id,
      reglaNombre: regla.nombre,
      reglaDescripcion: regla.descripcion,
      size: usar3x3 ? 3 : 2,
      referencia: [gridBase, gridTransformado],
      opciones: opciones.grids,
      correctas: opciones.correctas, // índices [0-3] de las 2 correctas
    };
  }

  // ==========================================================
  // GENERADOR DE SESIÓN COMPLETA
  // ==========================================================

  function generarSesion(total) {
    if (!dataInductivo) {
      console.error('EngineInductivo no inicializado');
      return [];
    }
    const ejercicios = [];
    const reglasUsadas = new Set();

    for (let i = 0; i < total; i++) {
      try {
        const ejercicio = generarEjercicio();
        if (!ejercicio) continue;

        if (reglasUsadas.has(ejercicio.reglaId) && reglasUsadas.size < dataInductivo.reglas.length) {
          let intentos = 0;
          let nuevoEjercicio;
          do {
            nuevoEjercicio = generarEjercicio();
            intentos++;
          } while (nuevoEjercicio && reglasUsadas.has(nuevoEjercicio.reglaId) && intentos < 20);
          if (nuevoEjercicio) {
            reglasUsadas.add(nuevoEjercicio.reglaId);
            ejercicios.push(nuevoEjercicio);
          }
        } else if (ejercicio) {
          reglasUsadas.add(ejercicio.reglaId);
          ejercicios.push(ejercicio);
        }
      } catch (e) {
        console.warn('Error generando ejercicio inductivo:', e.message);
      }
    }

    return ejercicios;
  }

  // ==========================================================
  // GENERADOR DE OPCIONES
  // ==========================================================

  function generarOpciones(gridBase, reglaCorrecta, todasLasReglas, gridsBase, size) {
    const grids = [];
    const correctas = [];

    // Elegir 2 grids base diferentes para las opciones correctas
    const gridsDisponibles = gridsBase.filter(g => !sonIguales(g, gridBase));
    const [baseOk1, baseOk2] = elegirDosAlAzar(gridsDisponibles.length >= 2 ? gridsDisponibles : gridsBase);

    // Opciones correctas: otras bases transformadas con la MISMA regla
    const opcionCorrecta1 = reglaCorrecta.aplicar(baseOk1);
    const opcionCorrecta2 = reglaCorrecta.aplicar(baseOk2);

    // Opciones distractoras: bases transformadas con reglas DIFERENTES
    const otrasReglas = todasLasReglas.filter(r => r.id !== reglaCorrecta.id);
    const [reglaDist1, reglaDist2] = elegirDosAlAzar(otrasReglas.length >= 2 ? otrasReglas : todasLasReglas);

    const baseDist1 = elegirAlAzar(gridsBase);
    const baseDist2 = elegirAlAzar(gridsBase.filter(g => !sonIguales(g, baseDist1)));

    const opcionDist1 = reglaDist1.aplicar(baseDist1);
    const opcionDist2 = reglaDist2.aplicar(baseDist2);

    // Armar array de 4 opciones
    const todas = [
      { grid: opcionCorrecta1, esCorrecta: true },
      { grid: opcionCorrecta2, esCorrecta: true },
      { grid: opcionDist1, esCorrecta: false },
      { grid: opcionDist2, esCorrecta: false }
    ];

    // Barajar posiciones
    barajar(todas);

    // Registrar índices correctos
    const indicesCorrectos = [];
    todas.forEach((op, idx) => {
      if (op.esCorrecta) indicesCorrectos.push(idx);
    });

    return {
      grids: todas.map(op => op.grid),
      correctas: indicesCorrectos
    };
  }

  // ==========================================================
  // EVALUADOR DE RESPUESTA DEL USUARIO
  // ==========================================================

  /**
   * Evalúa si la selección del usuario es correcta.
   * @param {Array} seleccionUsuario - Índices [0-3] seleccionados (deben ser exactamente 2)
   * @param {Array} correctas - Índices correctos
   * @returns {Object} Resultado de la evaluación
   */
  function evaluarRespuesta(seleccionUsuario, correctas) {
    if (seleccionUsuario.length !== 2) {
      return {
        esCorrecta: false,
        mensaje: 'Debes seleccionar exactamente 2 tablas.',
        tipoError: 'Selección incompleta'
      };
    }

    const setUsuario = new Set(seleccionUsuario);
    const setCorrectas = new Set(correctas);

    const aciertos = seleccionUsuario.filter(i => setCorrectas.has(i)).length;

    if (aciertos === 2) {
      return {
        esCorrecta: true,
        mensaje: '¡Correcto! Ambas tablas siguen la misma regla.',
        tipoError: 'Correcto'
      };
    } else if (aciertos === 1) {
      return {
        esCorrecta: false,
        mensaje: 'Una de tus selecciones es correcta, la otra no. Revisa la regla con más atención.',
        tipoError: 'Parcial (1 de 2)'
      };
    } else {
      return {
        esCorrecta: false,
        mensaje: 'Ninguna de tus selecciones sigue la regla correcta. Observa bien la relación entre las tablas de referencia.',
        tipoError: 'Regla no identificada'
      };
    }
  }

  // ==========================================================
  // HERRAMIENTAS AUXILIARES
  // ==========================================================

  function elegirAlAzar(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function elegirDosAlAzar(arr) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return [shuffled[0], shuffled[shuffled.length > 1 ? 1 : 0]];
  }

  function barajar(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function sonIguales(gridA, gridB) {
    if (!gridA || !gridB) return false;
    if (gridA.length !== gridB.length) return false;
    for (let i = 0; i < gridA.length; i++) {
      if (!gridA[i] || gridA[i].length !== gridB[i].length) return false;
      for (let j = 0; j < gridA[i].length; j++) {
        if (gridA[i][j] !== gridB[i][j]) return false;
      }
    }
    return true;
  }

  // ==========================================================
  // API PÚBLICA
  // ==========================================================

  return {
    init: init,
    generarSesion: generarSesion,
    generarEjercicio: generarEjercicio,
    evaluarRespuesta: evaluarRespuesta
  };

})();

/* FIN BLOQUE 5 */
