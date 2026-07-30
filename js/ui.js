/* ============================================================
   BLOQUE 6: UI - RENDERIZADO DE INTERFAZ PARA TODOS LOS MÓDULOS
   ============================================================ */

const UI = (function() {
  'use strict';

  // ==========================================================
  // NAVEGACIÓN ENTRE PANTALLAS
  // ==========================================================

  function mostrarPantalla(idPantalla) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const pantalla = document.getElementById(idPantalla);
    if (pantalla) pantalla.classList.add('active');
  }

  // ==========================================================
  // PANTALLA DE INSTRUCCIONES
  // ==========================================================

  function mostrarInstrucciones(testData) {
    mostrarPantalla('screen-instructions');
    document.getElementById('instructions-title').textContent = testData.titulo;
    document.getElementById('instructions-body').innerHTML = testData.instrucciones;
  }

  // ==========================================================
  // TEST VFD (Numérico + Verbal)
  // ==========================================================

  function iniciarTestVFD(testData, tabsActivos) {
    mostrarPantalla('screen-test-vfd');
    document.getElementById('timer-display').textContent = formatearTiempo(testData.tiempo);
    document.getElementById('progress-text').textContent = `Pregunta 1/${testData.totalPreguntas}`;
    document.getElementById('progress-bar-fill').style.width = '0%';
    document.getElementById('feedback-instant').classList.add('hidden');

    // Si hay QuestionBank con tabs mezcladas
    if (typeof App !== 'undefined' && App.state && App.state.questionBankData) {
      const qb = App.state.questionBankData;
      if (qb.tabsMezcladas && qb.tabsMezcladas.length > 0) {
        renderizarPestañasImagenesMixtas(qb);
        setTimeout(initLupa, 500);
        return;
      }
      if (qb.imgBarras) {
        renderizarPestañasImagenes(qb);
        setTimeout(initLupa, 500);
        return;
      }
    }
    // Fallback: tabs con datos + QuickChart
    const tabs = tabsActivos || testData.tabs;
    renderizarPestañas(tabs);
    setTimeout(initLupa, 500);
  }

  function renderizarPestañasImagenesMixtas(qbData) {
    const nav = document.getElementById('tabs-nav');
    const content = document.getElementById('tabs-content');
    nav.innerHTML = '';
    content.innerHTML = '';
    destruirTodosCharts();

    qbData.tabsMezcladas.forEach((tab, idx) => {
      const btn = document.createElement('button');
      btn.className = 'tab-btn' + (idx === 0 ? ' active' : '');
      btn.textContent = tab.titulo.length > 35 ? tab.titulo.substring(0, 32) + '...' : tab.titulo;
      btn.title = tab.titulo;
      btn.dataset.tabId = tab.id;
      btn.addEventListener('click', () => activarPestañaImagen(tab, btn));
      nav.appendChild(btn);

      const div = document.createElement('div');
      div.className = 'tab-content' + (idx === 0 ? '' : ' hidden');
      div.dataset.tabId = tab.id;
      div.innerHTML = `<div class="chart-img-container" style="background:transparent;">
        <p class="chart-desc">${tab.descripcion || ''}</p>
        <img src="${tab.imagen}" alt="${tab.titulo}" class="chart-img-real"
             onerror="this.src='';this.alt='Imagen no disponible';">
      </div>`;
      content.appendChild(div);
    });
  }

  function renderizarPestañasImagenes(qbData) {
    const nav = document.getElementById('tabs-nav');
    const content = document.getElementById('tabs-content');
    nav.innerHTML = '';
    content.innerHTML = '';
    destruirTodosCharts();

    const imagenes = [
      { key: 'barras', titulo: 'Gráfico de Barras', path: qbData.imgBarras },
      { key: 'lineas', titulo: 'Gráfico de Líneas', path: qbData.imgLineas },
      { key: 'torta', titulo: 'Gráfico de Torta', path: qbData.imgTorta }
    ];

    imagenes.forEach((img, idx) => {
      const btn = document.createElement('button');
      btn.className = 'tab-btn' + (idx === 0 ? ' active' : '');
      btn.textContent = img.titulo;
      btn.dataset.tabId = img.key;
      btn.addEventListener('click', () => activarPestañaImagen(img, btn));
      nav.appendChild(btn);

      const div = document.createElement('div');
      div.className = 'tab-content' + (idx === 0 ? '' : ' hidden');
      div.dataset.tabId = img.key;
      div.innerHTML = `<div class="chart-img-container" style="background:transparent;">
        <img src="${img.path}" alt="${img.titulo}" class="chart-img-real" 
             onerror="this.src='';this.alt='Imagen no disponible';">
      </div>`;
      content.appendChild(div);
    });
  }

  function activarPestañaImagen(tab, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
    var tabId = tab.id || tab.key;
    const contenido = document.querySelector('.tab-content[data-tab-id="' + tabId + '"]');
    if (contenido) { contenido.classList.remove('hidden'); setTimeout(initLupa, 300); }
  }

  function renderizarPestañas(tabs) {
    const nav = document.getElementById('tabs-nav');
    const content = document.getElementById('tabs-content');
    nav.innerHTML = '';
    content.innerHTML = '';
    destruirTodosCharts(); // Limpiar gráficos anteriores

    tabs.forEach((tab, idx) => {
      // Botón de pestaña
      const btn = document.createElement('button');
      btn.className = 'tab-btn' + (idx === 0 ? ' active' : '');
      btn.textContent = tab.titulo;
      btn.dataset.tabId = tab.id;
      btn.addEventListener('click', () => activarPestaña(tab, btn));
      nav.appendChild(btn);

      // Contenido de pestaña
      const div = document.createElement('div');
      div.className = 'tab-content' + (idx === 0 ? '' : ' hidden');
      div.dataset.tabId = tab.id;
      div.innerHTML = renderizarContenidoTab(tab);
      content.appendChild(div);

      // Inicializar Chart.js si esta pestaña es la visible (primera)
      if (idx === 0) {
        inicializarChartsEn(div);
      }
    });
  }

  function renderizarContenidoTab(tab) {
    // Si tiene datos numéricos → elegir visualización según tipo
    if (tab.datos && tab.categorias && tab.series) {
      switch (tab.tipo) {
        case 'barras':   return renderizarGraficoBarras(tab);
        case 'lineas':   return renderizarGraficoLineas(tab);
        case 'torta':    return renderizarGraficoTorta(tab);
        default:         return renderizarTablaDatos(tab);
      }
    }
    // Si tiene contenido textual (verbal)
    if (tab.contenido) {
      return `<div class="tab-text">${tab.contenido.replace(/\n/g, '<br>')}</div>`;
    }
    return '<p>Sin datos disponibles.</p>';
  }

  // --- REGISTRO DE GRÁFICOS CHART.JS ---
  const chartsActivos = {};

  function destruirChart(id) {
    if (chartsActivos[id]) {
      chartsActivos[id].destroy();
      delete chartsActivos[id];
    }
  }

  function destruirTodosCharts() {
    Object.keys(chartsActivos).forEach(id => destruirChart(id));
  }

  /**
   * Inicializa Chart.js en todos los canvas pendientes dentro de un contenedor.
   * Se llama después de insertar HTML con canvas en el DOM.
   */
  function inicializarChartsEn(contenedor) {
    if (!contenedor) return;
    // Inicializar TODOS los canvas con data-chart (incluyendo fallbacks ocultos)
    contenedor.querySelectorAll('canvas[data-chart]').forEach(canvas => {
      const id = canvas.id;
      const tipo = canvas.dataset.chart;
      if (!id || chartsActivos[id]) return;

      try {
        const raw = canvas.dataset.config;
        if (!raw) return;
        const config = JSON.parse(raw);
        const ctx = canvas.getContext('2d');
        chartsActivos[id] = new Chart(ctx, config);
      } catch (e) {
        console.warn('Error inicializando chart', id, e);
      }
    });
  }

  // 6 símbolos con colores primarios y secundarios bien separados
  const COLOR_FIJO = {
    '■': '#FF0000',  // Rojo (primario)
    '♦': '#0066FF',  // Azul (primario)
    '♥': '#FFCC00',  // Amarillo (primario)
    '♠': '#00CC00',  // Verde (secundario)
    '★': '#FF6600',  // Naranja (secundario)
    '●': '#9900CC',  // Púrpura (secundario)
    '♣': '#FF0000',  // fallback
    '▲': '#0066FF',  // fallback
    '◆': '#FFCC00',  // fallback
    '⬟': '#FF6600'   // fallback
  };
  // --- LUPA PARA GRÁFICOS ---
  function initLupa() {
    var lens = document.getElementById('chart-lens');
    if (!lens) {
      lens = document.createElement('div');
      lens.id = 'chart-lens';
      lens.className = 'chart-lens';
      document.body.appendChild(lens);
    }
    document.querySelectorAll('.chart-img-real').forEach(function(img) {
      if (img.dataset.lupa) return;
      img.dataset.lupa = '1';
      img.addEventListener('mousemove', function(e) {
        lens.style.display = 'block';
        var rect = img.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        lens.style.backgroundImage = 'url(' + img.src + ')';
        lens.style.backgroundSize = (rect.width * 2) + 'px ' + (rect.height * 2) + 'px';
        lens.style.backgroundPosition = '-' + (x * 2 - 160) + 'px -' + (y * 2 - 120) + 'px';
      });
      img.addEventListener('mouseleave', function() {
        lens.style.display = 'none';
      });
    });
  }

  function generarQuickChartURL(config, numSeries) {
    // Ajustar ancho según complejidad
    const width = (numSeries && numSeries >= 5) ? 900 : 750;
    const height = (numSeries && numSeries >= 5) ? 400 : 350;
    const json = JSON.stringify(config);
    const encoded = encodeURIComponent(json);
    return `https://quickchart.io/chart?w=${width}&h=${height}&b=%23FFFFFF&c=${encoded}`;
  }

  // --- GRÁFICO DE BARRAS (QuickChart + fallback Chart.js) ---
  function renderizarGraficoBarras(tab) {
    const chartId = 'chart-barras-' + tab.id;
    const colores = ['#0D6EFD', '#198754', '#FD7E14', '#6C757D', '#0DCAF0'];

    const labels = tab.categorias;
    const datasets = tab.series.map((serie, i) => ({
      label: serie,
      data: tab.categorias.map(cat => (tab.datos[cat] && tab.datos[cat][serie] !== undefined) ? tab.datos[cat][serie] : 0),
      backgroundColor: colores[i % colores.length] + 'CC',
      borderColor: colores[i % colores.length],
      borderWidth: 1
    }));

    // Config para QuickChart.io
    const qcConfig = {
      type: 'bar',
      data: { labels, datasets },
      options: {
        plugins: {
          legend: { labels: { color: '#8899aa' } },
          datalabels: {
            anchor: 'end',
            align: 'top',
            color: '#e8edf2',
            font: { size: 13 },
            formatter: function(value) { return value; }
          }
        },
        scales: {
          x: { ticks: { color: '#8899aa' }, grid: { display: false } },
          y: { ticks: { color: '#8899aa' }, grid: { color: '#2a3a4a66' } }
        }
      }
    };

    // Config para Chart.js (fallback)
    const canvasConfig = {
      type: 'bar',
      data: { labels, datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#8899aa', font: { size: 14 }, usePointStyle: true } } },
        scales: {
          x: { ticks: { color: '#8899aa' }, grid: { color: '#2a3a4a33' } },
          y: { ticks: { color: '#8899aa' }, grid: { color: '#2a3a4a33' }, beginAtZero: true }
        }
      }
    };
    const canvasConfigStr = JSON.stringify(canvasConfig).replace(/'/g, "&#39;");

    const qcUrl = generarQuickChartURL(qcConfig, tab.series.length);

    return `
      <p class="chart-title">${tab.titulo}</p>
      <p class="chart-desc">${tab.descripcion || ''}</p>
      <div class="chart-img-container">
        <img src="${qcUrl}" alt="${tab.titulo}" class="chart-img"
             onerror="this.style.display='none';this.nextElementSibling.style.display='block';">
        <div class="chart-canvas-fallback" style="display:none;height:250px;">
          <canvas id="${chartId}" data-chart="bar" data-config='${canvasConfigStr}'></canvas>
        </div>
      </div>`;
  }

  // --- GRÁFICO DE LÍNEAS (QuickChart + fallback Chart.js) ---
  function renderizarGraficoLineas(tab) {
    const chartId = 'chart-lineas-' + tab.id;
    const colores = ['#0D6EFD', '#198754', '#FD7E14', '#6C757D', '#0DCAF0'];

    const labels = tab.categorias;
    const datasets = tab.series.map((serie, i) => ({
      label: serie,
      data: tab.categorias.map(cat => (tab.datos[cat] && tab.datos[cat][serie] !== undefined) ? tab.datos[cat][serie] : null),
      borderColor: colores[i % colores.length],
      backgroundColor: colores[i % colores.length] + '33',
      borderWidth: 2,
      fill: false,
      tension: 0.3
    }));

    const qcConfig = {
      type: 'line',
      data: { labels, datasets },
      options: {
        plugins: {
          legend: { labels: { color: '#8899aa' } },
          datalabels: {
            anchor: 'end',
            align: 'top',
            color: '#e8edf2',
            font: { size: 12 },
            formatter: function(value) { return value; }
          }
        },
        scales: {
          x: { ticks: { color: '#8899aa' }, grid: { display: false } },
          y: { ticks: { color: '#8899aa' }, grid: { color: '#2a3a4a66' } }
        }
      }
    };

    const canvasConfig = {
      type: 'line',
      data: { labels, datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#8899aa', font: { size: 14 }, usePointStyle: true } } },
        scales: {
          x: { ticks: { color: '#8899aa' }, grid: { color: '#2a3a4a33' } },
          y: { ticks: { color: '#8899aa' }, grid: { color: '#2a3a4a33' }, beginAtZero: false }
        }
      }
    };
    const canvasConfigStr = JSON.stringify(canvasConfig).replace(/'/g, "&#39;");

    return `
      <p class="chart-title">${tab.titulo}</p>
      <p class="chart-desc">${tab.descripcion || ''}</p>
      <div class="chart-img-container">
        <img src="${generarQuickChartURL(qcConfig, tab.series.length)}" alt="${tab.titulo}" class="chart-img"
             onerror="this.style.display='none';this.nextElementSibling.style.display='block';">
        <div class="chart-canvas-fallback" style="display:none;height:250px;">
          <canvas id="${chartId}" data-chart="line" data-config='${canvasConfigStr}'></canvas>
        </div>
      </div>`;
  }

  // --- GRÁFICO DE TORTA (QuickChart + fallback Chart.js) ---
  function renderizarGraficoTorta(tab) {
    const chartId = 'chart-torta-' + tab.id;
    const colores = ['#0D6EFD', '#198754', '#FD7E14', '#6C757D', '#0DCAF0'];

    const categoria = tab.categorias[0];
    const labels = tab.series;
    const data = tab.series.map(s => (tab.datos[categoria] && tab.datos[categoria][s] !== undefined) ? tab.datos[categoria][s] : 0);

    const qcConfig = {
      type: 'doughnut',
      data: {
        labels,
        datasets: [{ data, backgroundColor: colores.slice(0, data.length) }]
      },
      options: {
        cutoutPercentage: 55,
        plugins: {
          legend: { labels: { color: '#8899aa' } },
          datalabels: {
            color: '#e8edf2',
            font: { size: 10, weight: 'bold' },
            formatter: function(value, ctx) {
              const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
              const pct = ((value / total) * 100).toFixed(1);
              return value + ' (' + pct + '%)';
            }
          }
        }
      }
    };

    const canvasConfig = {
      type: 'doughnut',
      data: {
        labels,
        datasets: [{ data, backgroundColor: colores.slice(0, data.length), borderColor: '#0d1b2a', borderWidth: 2 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: '55%',
        plugins: { legend: { position: 'bottom', labels: { color: '#8899aa', font: { size: 14 }, usePointStyle: true, padding: 14 } } }
      }
    };
    const canvasConfigStr = JSON.stringify(canvasConfig).replace(/'/g, "&#39;");

    return `
      <p class="chart-title">${tab.titulo}</p>
      <p class="chart-desc">${tab.descripcion || ''}</p>
      <div class="chart-img-container">
        <img src="${generarQuickChartURL(qcConfig, tab.series.length)}" alt="${tab.titulo}" class="chart-img"
             onerror="this.style.display='none';this.nextElementSibling.style.display='block';">
        <div class="chart-canvas-fallback" style="display:none;height:250px;">
          <canvas id="${chartId}" data-chart="doughnut" data-config='${canvasConfigStr}'></canvas>
        </div>
      </div>`;
  }

  // --- TABLA DE DATOS SIMPLE ---
  function renderizarTablaDatos(tab) {
    let html = `<p class="chart-title">${tab.titulo}</p>`;
    html += `<p class="chart-desc">${tab.descripcion || ''}</p>`;
    html += '<table class="data-table"><thead><tr><th></th>';

    tab.series.forEach(s => {
      html += `<th>${s}</th>`;
    });
    html += '</tr></thead><tbody>';

    tab.categorias.forEach(cat => {
      html += `<tr><td><strong>${cat}</strong></td>`;
      tab.series.forEach(s => {
        const val = (tab.datos[cat] && tab.datos[cat][s] !== undefined) ? tab.datos[cat][s] : '-';
        html += `<td>${val}</td>`;
      });
      html += '</tr>';
    });

    html += '</tbody></table>';
    return html;
  }

  function activarPestaña(tab, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
    const contenido = document.querySelector(`.tab-content[data-tab-id="${tab.id}"]`);
    if (contenido) {
      contenido.classList.remove('hidden');
      // Inicializar Chart.js si esta pestaña tiene canvas pendientes
      inicializarChartsEn(contenido);
    }
  }

  function mostrarPreguntaVFD(pregunta, indice, total) {
    // Ocultar siempre el indicador de pestaña (no se debe mostrar de dónde viene)
    const tabIndicator = document.getElementById('question-tab-indicator');
    if (tabIndicator) tabIndicator.classList.add('hidden');

    // SIEMPRE activar la primera pestaña (distractor - el usuario debe buscar la correcta)
    const firstTab = document.querySelector('.tab-btn');
    if (firstTab) firstTab.click();

    document.getElementById('question-statement').textContent = pregunta.enunciado || pregunta.pregunta || '';
    document.getElementById('progress-text').textContent = `Pregunta ${indice + 1}/${total}`;
    document.getElementById('progress-bar-fill').style.width = `${((indice) / total) * 100}%`;

    // Limpiar selección previa
    document.querySelectorAll('.btn-answer').forEach(b => b.classList.remove('selected'));
    document.getElementById('feedback-instant').classList.add('hidden');
  }

  function mostrarFeedbackInmediato(correcta, explicacion) {
    const feedback = document.getElementById('feedback-instant');
    feedback.classList.remove('hidden', 'correct', 'incorrect');
    feedback.classList.add(correcta ? 'correct' : 'incorrect');
    feedback.innerHTML = `
      <strong>${correcta ? '✅ ¡CORRECTO!' : '❌ INCORRECTO'}</strong><br>
      ${explicacion}
    `;
  }

  // ==========================================================
  // TEST INDUCTIVO
  // ==========================================================

  function iniciarTestInductivo(testData) {
    mostrarPantalla('screen-test-inductivo');
    const timerEl = document.getElementById('timer-display-inductivo');
    const progressEl = document.getElementById('progress-text-inductivo');
    const barEl = document.getElementById('progress-bar-fill-inductivo');
    const confirmBtn = document.getElementById('btn-inductivo-confirm');

    if (timerEl) timerEl.textContent = formatearTiempo(testData.tiempo);
    if (progressEl) progressEl.textContent = `Ejercicio 1/${testData.totalPreguntas}`;
    if (barEl) barEl.style.width = '0%';
    if (confirmBtn) confirmBtn.disabled = true;

    // Limpiar cualquier selección previa
    document.querySelectorAll('#inductivo-opt-tables .icon-grid').forEach(g => g.classList.remove('selected'));
  }

  function mostrarEjercicioInductivo(ejercicio, indice, total) {
    if (!ejercicio) {
      console.error('mostrarEjercicioInductivo: ejercicio es null/undefined');
      return;
    }

    const progressEl = document.getElementById('progress-text-inductivo');
    const barEl = document.getElementById('progress-bar-fill-inductivo');
    if (progressEl) progressEl.textContent = `Ejercicio ${indice + 1}/${total}`;
    if (barEl) barEl.style.width = `${(indice / total) * 100}%`;

    // Resetear estado
    const confirmBtn = document.getElementById('btn-inductivo-confirm');
    if (confirmBtn) confirmBtn.disabled = true;

    // Renderizar tablas de referencia
    const refContainer = document.getElementById('inductivo-ref-tables');
    if (refContainer) {
      refContainer.innerHTML = '';
      if (ejercicio.referencia && Array.isArray(ejercicio.referencia)) {
        ejercicio.referencia.forEach(grid => {
          const gridEl = crearGridIconos(grid, ejercicio.size || 2, false, ejercicio.colores);
          if (gridEl) refContainer.appendChild(gridEl);
        });
      }

      // Si es ejercicio DB, no mostrar pistas (el usuario debe descubrir el patrón)
      // La metadata (eje, patron, simboloDom) se usa para evaluación interna
    }

    // Renderizar opciones
    const optContainer = document.getElementById('inductivo-opt-tables');
    if (optContainer) {
      optContainer.innerHTML = '';
      if (ejercicio.opciones && Array.isArray(ejercicio.opciones)) {
        ejercicio.opciones.forEach((grid, idx) => {
          const gridEl = crearGridIconos(grid, ejercicio.size || 2, true, ejercicio.colores);
          if (gridEl) {
            gridEl.dataset.index = idx;
            gridEl.addEventListener('click', function() {
              toggleSeleccionInductivo(this);
            });
            optContainer.appendChild(gridEl);
          }
        });
      }
    }

    // Limpiar selección previa
    document.querySelectorAll('#inductivo-opt-tables .icon-grid').forEach(g => g.classList.remove('selected'));
  }

  function crearGridIconos(grid, size, seleccionable, colores) {
    if (!grid || !Array.isArray(grid)) {
      console.error('crearGridIconos: grid inválido', grid);
      return document.createElement('div');
    }

    const container = document.createElement('div');
    container.className = `icon-grid size-${size || 2}`;
    if (seleccionable) container.classList.add('selectable');

    try {
      grid.forEach(row => {
        if (!row || !Array.isArray(row)) return;
        row.forEach(icon => {
          const cell = document.createElement('span');
          cell.className = 'icon-cell';
          cell.textContent = icon || '?';
          // Aplicar color del mapa de colores
          if (colores && colores[icon]) {
            // Color FIJO por símbolo (ignora colores del JSON)
          cell.style.color = COLOR_FIJO[icon] || '#000000';
          }
          container.appendChild(cell);
        });
      });
    } catch (e) {
      console.error('Error creando grid de íconos:', e);
    }

    return container;
  }

  function toggleSeleccionInductivo(gridEl) {
    if (gridEl.classList.contains('selected')) {
      gridEl.classList.remove('selected');
    } else {
      // Máximo 2 seleccionados
      const seleccionados = document.querySelectorAll('#inductivo-opt-tables .icon-grid.selected');
      if (seleccionados.length >= 2) {
        seleccionados[0].classList.remove('selected');
      }
      gridEl.classList.add('selected');
    }

    // Habilitar botón confirmar si hay 2 seleccionados
    const count = document.querySelectorAll('#inductivo-opt-tables .icon-grid.selected').length;
    document.getElementById('btn-inductivo-confirm').disabled = count !== 2;
  }

  function obtenerSeleccionInductivo() {
    const seleccionados = document.querySelectorAll('#inductivo-opt-tables .icon-grid.selected');
    return Array.from(seleccionados).map(el => parseInt(el.dataset.index));
  }

  // ==========================================================
  // TEST INDUCTIVO FRECUENCIA/POSICIÓN (Módulo 5)
  // Reutiliza la pantalla screen-test-inductivo pero con
  // labels y estructura adaptada al patrón frecuencia+espejo.
  // ==========================================================

  function iniciarTestInductivoFreq(testData) {
    mostrarPantalla('screen-test-inductivo');
    const timerEl = document.getElementById('timer-display-inductivo');
    const progressEl = document.getElementById('progress-text-inductivo');
    const barEl = document.getElementById('progress-bar-fill-inductivo');
    const confirmBtn = document.getElementById('btn-inductivo-confirm');

    if (timerEl) timerEl.textContent = formatearTiempo(testData.tiempo);
    if (progressEl) progressEl.textContent = `Ejercicio 1/${testData.totalPreguntas}`;
    if (barEl) barEl.style.width = '0%';
    if (confirmBtn) confirmBtn.disabled = true;

    // Limpiar selección previa
    document.querySelectorAll('#inductivo-opt-tables .icon-grid').forEach(g => g.classList.remove('selected'));
  }

  function mostrarEjercicioInductivoFreq(ejercicio, indice, total) {
    if (!ejercicio) {
      console.error('mostrarEjercicioInductivoFreq: ejercicio es null/undefined');
      return;
    }

    const progressEl = document.getElementById('progress-text-inductivo');
    const barEl = document.getElementById('progress-bar-fill-inductivo');
    if (progressEl) progressEl.textContent = `Ejercicio ${indice + 1}/${total}`;
    if (barEl) barEl.style.width = `${(indice / total) * 100}%`;

    // Resetear estado
    const confirmBtn = document.getElementById('btn-inductivo-confirm');
    if (confirmBtn) confirmBtn.disabled = true;

    // --- Renderizar tablas de referencia (Ref 1 y Ref 2 con labels) ---
    const refContainer = document.getElementById('inductivo-ref-tables');
    if (refContainer) {
      refContainer.innerHTML = '';

      // Actualizar hint
      const hintEl = document.querySelector('.inductivo-hint');
      if (hintEl) {
        hintEl.textContent = 'Descubre la regla: compara frecuencias y posiciones entre Ref 1 y Ref 2.';
      }

      // Crear wrapper para Ref 1
      const wrapper1 = document.createElement('div');
      wrapper1.className = 'inductivo-ref-wrapper';
      const label1 = document.createElement('span');
      label1.className = 'inductivo-ref-label';
      label1.textContent = 'Ref 1';
      wrapper1.appendChild(label1);
      const grid1 = crearGridIconos(ejercicio.ref1, 3, false);
      if (grid1) wrapper1.appendChild(grid1);
      refContainer.appendChild(wrapper1);

      // Flecha visual entre referencias
      const flecha = document.createElement('div');
      flecha.className = 'inductivo-ref-flecha';
      flecha.textContent = '⟷';
      refContainer.appendChild(flecha);

      // Crear wrapper para Ref 2
      const wrapper2 = document.createElement('div');
      wrapper2.className = 'inductivo-ref-wrapper';
      const label2 = document.createElement('span');
      label2.className = 'inductivo-ref-label';
      label2.textContent = 'Ref 2 (' + (ejercicio.eje || 'Espejo') + ')';
      wrapper2.appendChild(label2);
      const grid2 = crearGridIconos(ejercicio.ref2, 3, false);
      if (grid2) wrapper2.appendChild(grid2);
      refContainer.appendChild(wrapper2);
    }

    // --- Renderizar opciones (igual que el inductivo original) ---
    const optContainer = document.getElementById('inductivo-opt-tables');
    if (optContainer) {
      optContainer.innerHTML = '';
      if (ejercicio.opciones && Array.isArray(ejercicio.opciones)) {
        // Actualizar label de opciones
        const optLabel = document.querySelector('.inductivo-opciones .inductivo-label');
        if (optLabel) {
          optLabel.textContent = 'SELECCIONA LAS 2 OPCIONES QUE SIGUEN EL MISMO PATRÓN';
        }

        ejercicio.opciones.forEach((grid, idx) => {
          const gridEl = crearGridIconos(grid, 3, true);
          if (gridEl) {
            gridEl.dataset.index = idx;
            gridEl.addEventListener('click', function() {
              toggleSeleccionInductivo(this);
            });
            optContainer.appendChild(gridEl);
          }
        });
      }
    }

    // Limpiar selección previa
    document.querySelectorAll('#inductivo-opt-tables .icon-grid').forEach(g => g.classList.remove('selected'));
  }

  // ==========================================================
  // TEST CUESTIONARIOS (Trabajo + Situacional)
  // ==========================================================

  function iniciarTestCuestionario(testData) {
    if (window.debugLog) debugLog('UI.iniciarTestCuestionario - pares:' + (testData.pares?.length||0) + ' afirm:' + (testData.afirmaciones?.length||0));
    
    // Para test de Trabajo: barajar y seleccionar subset aleatorio
    if (testData.pares && testData.pares.length > testData.totalPreguntas) {
      const shuffled = [...testData.pares].sort(() => Math.random() - 0.5);
      testData._paresActivos = shuffled.slice(0, testData.totalPreguntas);
      if (window.debugLog) debugLog('Pares barajados: ' + testData._paresActivos.length + ' seleccionados de ' + testData.pares.length);
    } else {
      testData._paresActivos = testData.pares;
    }

    // Para test Situacional: barajar y seleccionar subset aleatorio
    if (testData.afirmaciones && testData.afirmaciones.length > testData.totalPreguntas) {
      const shuffled = [...testData.afirmaciones].sort(() => Math.random() - 0.5);
      testData._afirmacionesActivas = shuffled.slice(0, testData.totalPreguntas);
      if (window.debugLog) debugLog('Afirmaciones barajadas: ' + testData._afirmacionesActivas.length + ' seleccionadas de ' + testData.afirmaciones.length);
    } else {
      testData._afirmacionesActivas = testData.afirmaciones;
    }
    
    mostrarPantalla('screen-test-cuestionario');

    const tiempoStr = testData.tiempo ? formatearTiempo(testData.tiempo) : '--:--';
    document.getElementById('timer-display-cuest').textContent = tiempoStr;
    document.getElementById('progress-text-cuest').textContent = `Pregunta 1/${testData.totalPreguntas}`;
    document.getElementById('progress-bar-fill-cuest').style.width = '0%';

    document.getElementById('btn-cuest-prev').disabled = true;
    document.getElementById('btn-cuest-next').disabled = false;
  }

  function mostrarPreguntaCuestionario(testData, indice, total, respuestasPrevias) {
    if (window.debugLog) debugLog('mostrarPreguntaCuestionario idx=' + indice + '/' + total);
    const progressEl = document.getElementById('progress-text-cuest');
    const barEl = document.getElementById('progress-bar-fill-cuest');
    if (progressEl) progressEl.textContent = `Pregunta ${indice + 1}/${total}`;
    if (barEl) barEl.style.width = `${(indice / total) * 100}%`;

    const content = document.getElementById('cuestionario-content');
    if (!content) return;

    // Tipo: pares (Trabajo)
    const paresActivos = testData._paresActivos || testData.pares;
    if (paresActivos && indice < paresActivos.length) {
      const par = paresActivos[indice];
      const respuestaPrevia = (respuestasPrevias && respuestasPrevias[indice]) ? respuestasPrevias[indice] : null;

      content.innerHTML = `
        <div class="pair-container">
          <div class="pair-statement" style="border-left:3px solid var(--azul-polvo);">
            <strong style="color:var(--azul-polvo);">Opción A</strong><br><br>
            "${par.a}"
          </div>
          <div class="pair-statement" style="border-left:3px solid var(--naranja);">
            <strong style="color:var(--naranja);">Opción B</strong><br><br>
            "${par.b}"
          </div>
        </div>
        <div class="pair-scale" id="pair-scale">
          ${generarEscalaPares(respuestaPrevia)}
        </div>
        <p style="text-align:center;font-size:0.65rem;color:var(--texto-muted);margin-top:8px;">
          ← Más de acuerdo con A &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Más de acuerdo con B →
        </p>
      `;

      // Event listeners para los dots (usar setTimeout para asegurar DOM listo)
      setTimeout(() => {
        document.querySelectorAll('.pair-dot').forEach(dot => {
          dot.addEventListener('click', function() {
            document.querySelectorAll('.pair-dot').forEach(d => d.classList.remove('selected'));
            this.classList.add('selected');
          });
        });
      }, 50);
    }

    // Tipo: situacional (afirmaciones individuales)
    const afirmacionesActivas = testData._afirmacionesActivas || testData.afirmaciones;
    if (afirmacionesActivas && indice < afirmacionesActivas.length) {
      const afirmacion = afirmacionesActivas[indice];
      const respuestaPrevia = (respuestasPrevias && respuestasPrevias[indice] !== undefined && respuestasPrevias[indice] !== null) ? respuestasPrevias[indice] : null;

      content.innerHTML = `
        <div class="situacional-item">
          <p class="situacional-statement">"${afirmacion}"</p>
          <div class="situacional-scale" id="situacional-scale">
            <button class="situacional-option${respuestaPrevia === 0 ? ' selected' : ''}" data-value="0">
              Menos que<br>los demás
            </button>
            <button class="situacional-option${respuestaPrevia === 1 ? ' selected' : ''}" data-value="1">
              Igual que<br>los demás
            </button>
            <button class="situacional-option${respuestaPrevia === 2 ? ' selected' : ''}" data-value="2">
              Más que<br>los demás
            </button>
          </div>
        </div>
      `;

      setTimeout(() => {
        document.querySelectorAll('.situacional-option').forEach(btn => {
          btn.addEventListener('click', function() {
            document.querySelectorAll('.situacional-option').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
          });
        });
      }, 50);
    }
  }

  function generarEscalaPares(respuestaPrevia) {
    let html = '';
    for (let i = 1; i <= 6; i++) {
      const lado = i <= 3 ? 'left-side' : 'right-side';
      const seleccionado = respuestaPrevia === i ? ' selected' : '';
      html += `<span class="pair-dot ${lado}${seleccionado}" data-value="${i}"></span>`;
    }
    return html;
  }

  function obtenerRespuestaCuestionario(testData) {
    // Pares (Trabajo): buscar dot seleccionado
    const dotSeleccionado = document.querySelector('.pair-dot.selected');
    if (dotSeleccionado) {
      const val = parseInt(dotSeleccionado.dataset.value);
      if (window.debugLog) debugLog('Respuesta par: ' + val);
      return val;
    }

    // Situacional: buscar botón seleccionado
    const btnSeleccionado = document.querySelector('.situacional-option.selected');
    if (btnSeleccionado) {
      const val = parseInt(btnSeleccionado.dataset.value);
      if (window.debugLog) debugLog('Respuesta situacional: ' + val);
      return val;
    }

    if (window.debugLog) debugLog('Sin respuesta seleccionada', 'warn');
    return null;
  }

  // ==========================================================
  // PREGUNTA PROFESIONAL (V/F/D + Selección Múltiple)
  // ==========================================================

  function mostrarPreguntaProfesional(pregunta, indice, total) {
    if (window.debugLog) debugLog('mostrarPreguntaProfesional idx=' + indice + '/' + total);
    
    // Ocultar feedback anterior
    var fbCuest = document.getElementById('feedback-cuest');
    if (fbCuest) fbCuest.classList.add('hidden');
    
    var progressEl = document.getElementById('progress-text-cuest');
    var barEl = document.getElementById('progress-bar-fill-cuest');
    if (progressEl) progressEl.textContent = 'Pregunta ' + (indice + 1) + '/' + total;
    if (barEl) barEl.style.width = ((indice / total) * 100) + '%';

    var content = document.getElementById('cuestionario-content');
    if (!content) return;

    var nivelEmoji = pregunta.nivel === 'facil' ? '🟢' : pregunta.nivel === 'intermedio' ? '🟡' : '🔴';
    var html = '<div style="margin-bottom:8px;">';
    html += '<span style="font-size:0.75rem;color:var(--texto-muted);background:var(--bg-alt);padding:4px 10px;border-radius:4px;">' + nivelEmoji + ' ' + pregunta.area + '</span>';
    html += '</div>';
    html += '<p style="font-size:1.05rem;font-weight:600;line-height:1.6;margin-bottom:16px;">' + pregunta.enunciado + '</p>';

    if (pregunta.tipo === 'VFD') {
      html += '<div class="question-buttons">';
      html += '<button class="btn-answer btn-verdadero" data-answer="V" onclick="responderProfesional(\'V\')"><span class="answer-letter">V</span><span class="answer-label">VERDADERO</span></button>';
      html += '<button class="btn-answer btn-falso" data-answer="F" onclick="responderProfesional(\'F\')"><span class="answer-letter">F</span><span class="answer-label">FALSO</span></button>';
      html += '<button class="btn-answer btn-desconocido" data-answer="D" onclick="responderProfesional(\'D\')"><span class="answer-letter">D</span><span class="answer-label">DESCONOCIDO</span></button>';
      html += '</div>';
    } else if (pregunta.tipo === 'MC') {
      html += '<div class="mc-opciones" style="display:flex;flex-direction:column;gap:8px;">';
      var letras = ['A', 'B', 'C', 'D'];
      pregunta.opciones.forEach(function(op, i) {
        html += '<button class="btn-mc" data-index="' + i + '" onclick="responderProfesionalMC(' + i + ')" style="text-align:left;font-family:var(--fuente);font-size:0.95rem;padding:14px 16px;border:2px solid var(--borde);border-radius:8px;background:#fff;cursor:pointer;transition:all 0.15s;">' + letras[i] + '. ' + op + '</button>';
      });
      html += '</div>';
    }

    content.innerHTML = html;
    window._profesionalRespuesta = null;
    window._profesionalConfirmado = false;
  }

  // ==========================================================
  // ACTUALIZAR TIMER
  // ==========================================================

  function actualizarTimer(segundosRestantes, idDisplay, tiempoTotal) {
    const display = document.getElementById(idDisplay);
    if (!display) return;

    display.textContent = formatearTiempo(segundosRestantes);
    display.classList.remove('warning', 'critical');

    if (segundosRestantes <= 30) {
      display.classList.add('critical');
    } else if (segundosRestantes <= 60) {
      display.classList.add('warning');
    }

    return segundosRestantes <= 0;
  }

  // ==========================================================
  // PANTALLA DE RESULTADOS
  // ==========================================================

  function mostrarResultados(resultados, testData) {
    mostrarPantalla('screen-results');
    
    // Reproducir video de celebración (con audio)
    const video = document.getElementById('video-celebracion');
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
    
    document.getElementById('results-title').textContent = `RESULTADOS: ${testData.titulo}`;

    document.getElementById('result-score').textContent = resultados.puntaje + '%';
    document.getElementById('result-correct').textContent = resultados.aciertos;
    document.getElementById('result-wrong').textContent = resultados.errores;
    document.getElementById('result-time').textContent = resultados.tiempoUsado;

    // Mostrar/ocultar secciones según tipo de test
    const errorsDiv = document.getElementById('results-errors');
    const profileDiv = document.getElementById('results-profile');
    const reforzarBtn = document.getElementById('btn-reforzar');
    const dashboardDiv = document.getElementById('results-dashboard');

    // Ocultar dashboard de refuerzo por defecto
    if (dashboardDiv) dashboardDiv.classList.add('hidden');

    if (testData.pares || testData.afirmaciones) {
      // Cuestionario: mostrar perfil cualitativo
      errorsDiv.classList.add('hidden');
      profileDiv.classList.remove('hidden');
      document.getElementById('profile-content').innerHTML = generarPerfilCuestionario(testData, resultados);
      if (reforzarBtn) reforzarBtn.classList.add('hidden');
    } else if (resultados.detalleErrores && resultados.detalleErrores.length > 0) {
      // Test VFD o Inductivo: mostrar errores
      errorsDiv.classList.remove('hidden');
      profileDiv.classList.add('hidden');
      document.getElementById('errors-list').innerHTML = renderizarListaErrores(resultados.detalleErrores);
      // Mostrar botón de refuerzo para tests de conocimiento (profesional, numérico, verbal)
      if (reforzarBtn) {
        reforzarBtn.classList.remove('hidden');
        reforzarBtn.textContent = '🎯 REFORZAR ERRORES';
        reforzarBtn.disabled = false;
      }
    } else {
      errorsDiv.classList.add('hidden');
      profileDiv.classList.add('hidden');
      if (reforzarBtn) reforzarBtn.classList.add('hidden');
    }
  }

  function renderizarListaErrores(errores) {
    if (errores.length === 0) {
      return '<p style="color:var(--verde);text-align:center;">🎉 ¡Sin errores! Perfecto.</p>';
    }

    return errores.map((err, i) => `
      <div class="error-item">
        <div class="error-question">Pregunta ${err.numero}: ${err.enunciado || ''}</div>
        <div class="error-detail">
          Tu respuesta: <span class="error-answer user">${err.respuestaUsuario || 'Sin responder'}</span>
          Correcta: <span class="error-answer correct">${err.respuestaCorrecta}</span>
          <br>${err.explicacion || ''}
        </div>
      </div>
    `).join('');
  }

  function generarPerfilCuestionario(testData, resultados) {
    if (testData.pares) {
      // Perfil de comportamientos laborales
      const totalA = resultados.preferenciasA || 0;
      const totalB = resultados.preferenciasB || 0;
      let interpretacion = '';

      if (totalA > totalB + 5) {
        interpretacion = 'Tiendes a preferir estabilidad, estructura y enfoque individual en el trabajo.';
      } else if (totalB > totalA + 5) {
        interpretacion = 'Tiendes a preferir dinamismo, colaboración y nuevos desafíos en el trabajo.';
      } else {
        interpretacion = 'Tienes un perfil equilibrado entre estructura y flexibilidad laboral.';
      }

      return `
        <p style="margin-bottom:12px;">Preferencias hacia Opción A: <strong style="color:var(--azul-polvo);">${totalA}</strong></p>
        <p style="margin-bottom:12px;">Preferencias hacia Opción B: <strong style="color:var(--naranja);">${totalB}</strong></p>
        <p style="color:var(--texto-muted);">${interpretacion}</p>
        <p style="font-size:0.65rem;color:var(--texto-muted);margin-top:12px;">Este perfil es cualitativo y no asigna puntaje. Se utiliza como referencia para evaluaciones posteriores.</p>
      `;
    }

    if (testData.afirmaciones) {
      const promedio = resultados.promedioRespuestas || 0;
      let interpretacion = '';
      if (promedio > 1.5) {
        interpretacion = 'Tus respuestas sugieren que estos comportamientos te describen más que al promedio.';
      } else if (promedio < 0.5) {
        interpretacion = 'Tus respuestas sugieren que estos comportamientos te describen menos que al promedio.';
      } else {
        interpretacion = 'Tus respuestas sugieren un perfil similar al promedio en estos comportamientos.';
      }

      return `
        <p style="margin-bottom:12px;">Promedio de respuestas: <strong style="color:var(--naranja);">${promedio.toFixed(1)} / 2.0</strong></p>
        <p style="color:var(--texto-muted);">${interpretacion}</p>
        <p style="font-size:0.65rem;color:var(--texto-muted);margin-top:12px;">Este perfil es cualitativo y no asigna puntaje. Se utiliza como referencia para evaluaciones posteriores.</p>
      `;
    }

    return '<p>Perfil no disponible.</p>';
  }

  // ==========================================================
  // RESULTADOS GLOBALES
  // ==========================================================

  function mostrarResultadosGlobales(historial) {
    mostrarPantalla('screen-global-results');

    const container = document.getElementById('global-scores');
    const testNames = {
      numerico: 'Razonamiento Numérico',
      verbal: 'Razonamiento Verbal',
      inductivo: 'Razonamiento Inductivo'
    };

    let html = '';
    let puntajes = [];

    Object.keys(testNames).forEach(key => {
      const data = historial[key];
      if (data) {
        html += `
          <div class="global-score-row">
            <span class="test-name">★ ${testNames[key]}</span>
            <span class="test-score">${data.puntaje}%</span>
            <span class="test-status completed">Completado</span>
          </div>
        `;
        puntajes.push(data.puntaje);
      } else {
        html += `
          <div class="global-score-row">
            <span class="test-name">★ ${testNames[key]}</span>
            <span class="test-score">--</span>
            <span class="test-status pending">Pendiente</span>
          </div>
        `;
      }
    });

    container.innerHTML = html;

    // Puntaje combinado (promedio de los 3 test cognitivos)
    if (puntajes.length > 0) {
      const combinado = Math.round(puntajes.reduce((a, b) => a + b, 0) / puntajes.length);
      document.getElementById('global-combined-score').textContent = combinado + '%';
    } else {
      document.getElementById('global-combined-score').textContent = '--';
    }
  }

  // ==========================================================
  // DASHBOARD DE ESTADÍSTICAS (Chart.js)
  // ==========================================================

  /**
   * Renderiza el dashboard con los 4 gráficos de rendimiento.
   * @param {Object} stats - Datos de estadísticas
   */
  function renderizarDashboard(stats) {
    destruirTodosCharts();

    // 1. Dona: Aciertos vs Errores
    if (stats.aciertosErrores) {
      const ctx1 = document.getElementById('chart-dona-global');
      if (ctx1) {
        chartsActivos['dona-global'] = new Chart(ctx1, {
          type: 'doughnut',
          data: {
            labels: ['Aciertos', 'Errores'],
            datasets: [{
              data: [stats.aciertosErrores.aciertos, stats.aciertosErrores.errores],
              backgroundColor: ['#7ecb7e99', '#e0555599'],
              borderColor: ['#7ecb7e', '#e05555'],
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
              legend: {
                position: 'bottom',
                labels: { color: '#8899aa', font: { size: 11, family: 'Montserrat' }, padding: 16, usePointStyle: true }
              }
            }
          }
        });
      }
    }

    // 2. Barras: Puntajes por Test
    if (stats.puntajesTest) {
      const ctx2 = document.getElementById('chart-test-scores-global');
      if (ctx2) {
        const colores = ['#F9B872', '#B6E1E7', '#FAE7A5'];
        chartsActivos['test-scores-global'] = new Chart(ctx2, {
          type: 'bar',
          data: {
            labels: ['Numérico', 'Verbal', 'Inductivo'],
            datasets: [{
              label: 'Puntaje %',
              data: [
                stats.puntajesTest.numerico || 0,
                stats.puntajesTest.verbal || 0,
                stats.puntajesTest.inductivo || 0
              ],
              backgroundColor: colores.map(c => c + 'CC'),
              borderColor: colores,
              borderWidth: 1,
              borderRadius: 6
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'x',
            plugins: {
              legend: { display: false }
            },
            scales: {
              x: { ticks: { color: '#8899aa', font: { size: 14 } }, grid: { display: false } },
              y: { ticks: { color: '#8899aa', font: { size: 14 }, callback: v => v + '%' }, grid: { color: '#2a3a4a33' }, beginAtZero: true, max: 100 }
            }
          }
        });
      }
    }

    // 3. Líneas: Evolución Histórica
    if (stats.historico && stats.historico.length > 0) {
      const ctx3 = document.getElementById('chart-history-global');
      if (ctx3) {
        const labels = stats.historico.map((s, i) => `Sesión ${i + 1}`);
        chartsActivos['history-global'] = new Chart(ctx3, {
          type: 'line',
          data: {
            labels,
            datasets: [
              {
                label: 'Numérico',
                data: stats.historico.map(s => s.numerico || null),
                borderColor: '#F9B872', backgroundColor: '#F9B87233',
                borderWidth: 2, pointRadius: 5, tension: 0.3
              },
              {
                label: 'Verbal',
                data: stats.historico.map(s => s.verbal || null),
                borderColor: '#B6E1E7', backgroundColor: '#B6E1E733',
                borderWidth: 2, pointRadius: 5, tension: 0.3
              },
              {
                label: 'Inductivo',
                data: stats.historico.map(s => s.inductivo || null),
                borderColor: '#FAE7A5', backgroundColor: '#FAE7A533',
                borderWidth: 2, pointRadius: 5, tension: 0.3
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: { color: '#8899aa', font: { size: 10, family: 'Montserrat' }, usePointStyle: true }
              }
            },
            scales: {
              x: { ticks: { color: '#8899aa', font: { size: 14 } }, grid: { color: '#2a3a4a33' } },
              y: { ticks: { color: '#8899aa', font: { size: 14 }, callback: v => v + '%' }, grid: { color: '#2a3a4a33' }, beginAtZero: true, max: 100 }
            }
          }
        });
      }
    }

    // 4. Barras Horizontales: Tipos de Error
    if (stats.tiposError && stats.tiposError.length > 0) {
      const ctx4 = document.getElementById('chart-errores-global');
      if (ctx4) {
        chartsActivos['errores-global'] = new Chart(ctx4, {
          type: 'bar',
          data: {
            labels: stats.tiposError.map(e => e.tipo),
            datasets: [{
              label: 'Cantidad',
              data: stats.tiposError.map(e => e.cantidad),
              backgroundColor: '#e0555599',
              borderColor: '#e05555',
              borderWidth: 1,
              borderRadius: 4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
              legend: { display: false }
            },
            scales: {
              x: { ticks: { color: '#8899aa', font: { size: 14 }, stepSize: 1 }, grid: { color: '#2a3a4a33' }, beginAtZero: true },
              y: { ticks: { color: '#8899aa', font: { size: 14 } }, grid: { display: false } }
            }
          }
        });
      }
    }
  }

  function mostrarDashboard(stats) {
    mostrarPantalla('screen-dashboard');
    renderizarDashboard(stats);
  }

  // ==========================================================
  // HERRAMIENTAS AUXILIARES
  // ==========================================================

  function formatearTiempo(segundosTotales) {
    const min = Math.floor(segundosTotales / 60);
    const sec = segundosTotales % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  }

  // ==========================================================
  // API PÚBLICA
  // ==========================================================

  return {
    mostrarPantalla: mostrarPantalla,
    mostrarInstrucciones: mostrarInstrucciones,

    // VFD
    iniciarTestVFD: iniciarTestVFD,
    mostrarPreguntaVFD: mostrarPreguntaVFD,
    mostrarFeedbackInmediato: mostrarFeedbackInmediato,

    // Inductivo
    iniciarTestInductivo: iniciarTestInductivo,
    mostrarEjercicioInductivo: mostrarEjercicioInductivo,
    obtenerSeleccionInductivo: obtenerSeleccionInductivo,

    // Cuestionarios
    iniciarTestCuestionario: iniciarTestCuestionario,
    mostrarPreguntaCuestionario: mostrarPreguntaCuestionario,
    obtenerRespuestaCuestionario: obtenerRespuestaCuestionario,

    // Profesional
    mostrarPreguntaProfesional: mostrarPreguntaProfesional,

    // Timer
    actualizarTimer: actualizarTimer,

    // Resultados
    mostrarResultados: mostrarResultados,
    mostrarResultadosGlobales: mostrarResultadosGlobales,

    // Dashboard
    mostrarDashboard: mostrarDashboard,
    renderizarDashboard: renderizarDashboard,
    destruirTodosCharts: destruirTodosCharts,

    // Utilidades
    formatearTiempo: formatearTiempo
  };

})();

/* FIN BLOQUE 6 */
