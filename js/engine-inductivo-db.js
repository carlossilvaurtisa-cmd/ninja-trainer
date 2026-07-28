/* ============================================================
   MOTOR INDUCTIVO - BASADO EN DB DE 500 TANDAS
   ============================================================ */

const EngineInductivoDB = (function() {
  'use strict';

  let tandaActual = null;
  let tandasDisponibles = [];

  function init() {
    if (typeof PatronesDB !== 'undefined' && PatronesDB.length > 0) {
      tandasDisponibles = [...PatronesDB];
    }
  }

  /**
   * Genera una sesión completa (12 ejercicios) desde una tanda aleatoria.
   */
  function generarSesion(total) {
    if (tandasDisponibles.length === 0) {
      console.warn('PatronesDB no disponible, usando motor algorítmico');
      return EngineInductivo.generarSesion(total);
    }

    // Elegir 3 tandas aleatorias para tener 36 ejercicios
    const shuffled = [...tandasDisponibles].sort(() => Math.random() - 0.5);
    const t1 = shuffled[0];
    const t2 = shuffled.length > 1 ? shuffled[1] : shuffled[0];
    const t3 = shuffled.length > 2 ? shuffled[2] : shuffled[0];
    
    const todos = [
      ...t1.ejercicios.map((ej, i) => formatearEjercicio(ej, i)),
      ...t2.ejercicios.map((ej, i) => formatearEjercicio(ej, i + 12)),
      ...t3.ejercicios.map((ej, i) => formatearEjercicio(ej, i + 24))
    ];
    
    // Barajar preguntas para variedad
    return todos.sort(() => Math.random() - 0.5).slice(0, total);
  }

  function formatearEjercicio(ej, idx) {
    return {
      id: idx + 1,
      ref1: ej.ref1,
      ref2: ej.ref2,
      referencia: [ej.ref1, ej.ref2],
      opciones: ej.opciones,
      correctas: ej.correctas,
      size: 3,
      eje: ej.eje || '',
      patron: ej.patron || '',
      simboloDom: ej.simbolo_dom || '',
      colores: ej.colores || {},
      esDB: true
    };
  }

  /**
   * Evalúa respuesta del usuario.
   * @param {Array} seleccion - Índices [0-3] seleccionados (2 opciones)
   * @param {Array} correctas - Índices correctos
   */
  function evaluarRespuesta(seleccion, correctas) {
    if (!seleccion || seleccion.length !== 2) {
      return {
        esCorrecta: false,
        mensaje: 'Debes seleccionar exactamente 2 opciones.',
        tipoError: 'Selección incompleta'
      };
    }

    const setSel = new Set(seleccion);
    const setCorr = new Set(correctas);
    const aciertos = seleccion.filter(i => setCorr.has(i)).length;

    if (aciertos === 2) {
      return {
        esCorrecta: true,
        mensaje: '¡Correcto! Identificaste el patrón.',
        tipoError: 'Correcto'
      };
    } else if (aciertos === 1) {
      return {
        esCorrecta: false,
        mensaje: 'Una opción es correcta, la otra no. Revisa las posiciones espejo con más atención.',
        tipoError: 'Parcial (1 de 2)'
      };
    } else {
      return {
        esCorrecta: false,
        mensaje: 'Ninguna selección correcta. Observa la relación de posiciones entre Ref 1 y Ref 2.',
        tipoError: 'Patrón no identificado'
      };
    }
  }

  return {
    init: init,
    generarSesion: generarSesion,
    evaluarRespuesta: evaluarRespuesta
  };

})();
