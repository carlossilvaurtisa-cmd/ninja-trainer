/* ============================================================
   BLOQUE 3: BANCOS DE DATOS - PLATAFORMA 5 TEST
   ============================================================ */

const DataBank = {

  // ==========================================================
  // MÓDULO 2: BANCO NUMÉRICO
  // ==========================================================

  numerico: {
    titulo: 'Razonamiento Numérico',
    tiempo: 12 * 60,
    totalPreguntas: 40,
    instrucciones: `
	      <p>Esta prueba mide tu capacidad para <strong>comprender información numérica</strong> presentada en tablas y gráficos.</p>
	      <p><strong>Duración:</strong> 12 minutos | <strong>Preguntas:</strong> 40</p>
      <p>Deberás analizar los datos en las pestañas y evaluar cada afirmación como:</p>
      <ul>
        <li><strong>VERDADERO (V):</strong> La afirmación es correcta según los datos.</li>
        <li><strong>FALSO (F):</strong> La afirmación es incorrecta según los datos.</li>
        <li><strong>DESCONOCIDO (D):</strong> Los datos no permiten afirmar ni rechazar. <em>Nunca infieras ni supongas.</em></li>
      </ul>
    `,
    tabs: [
      { id: 'empleados', titulo: 'Total de Empleados (Evergreen Ltda.)', tipo: 'barras', descripcion: 'Gráfico de barras apiladas. Eje X: Años (AF3, AF5, AF7). Series: Planta, Becarios, Contrato.', categorias: ['AF3','AF5','AF7'], series: ['Planta','Becarios','Contrato'], datos: { AF3:{Planta:45,Becarios:15,Contrato:8}, AF5:{Planta:50,Becarios:12,Contrato:12}, AF7:{Planta:35,Becarios:20,Contrato:14} } },
      { id: 'ventas', titulo: 'Ventas Regionales (miles de unidades)', tipo: 'lineas', descripcion: 'Gráfico de líneas. Eje X: Meses (Ene-Jun). Eje Y: Unidades (0-100). Series: Norteamérica, Europa, Asia.', categorias: ['Ene','Feb','Mar','Abr','May','Jun'], series: ['Norteamérica','Europa','Asia'], datos: { Ene:{Norteamérica:80,Europa:50,Asia:60}, Feb:{Norteamérica:85,Europa:45,Asia:65}, Mar:{Norteamérica:90,Europa:55,Asia:70}, Abr:{Norteamérica:70,Europa:40,Asia:55}, May:{Norteamérica:75,Europa:45,Asia:60}, Jun:{Norteamérica:95,Europa:60,Asia:50} } },
      { id: 'mercado', titulo: 'Cuota de Mercado - Cosméticos (%)', tipo: 'torta', descripcion: 'Gráfico de torta. Porcentaje de participación de cada empresa.', categorias: ['Participación'], series: ['Ripley','Paris','Falabella'], datos: { Participación:{Ripley:93,Paris:7,Falabella:0} } },
      { id: 'retorno', titulo: 'Retorno sobre Capital - Ripley (%)', tipo: 'lineas', descripcion: 'Gráfico de líneas. Eje X: Años Fiscales (AF1-AF6). Eje Y: Porcentaje.', categorias: ['AF1','AF2','AF3','AF4','AF5','AF6'], series: ['Retorno'], datos: { AF1:{Retorno:1.6}, AF2:{Retorno:1.2}, AF3:{Retorno:1.72}, AF4:{Retorno:2.3}, AF5:{Retorno:1.1}, AF6:{Retorno:2.3} } },
      { id: 'produccion', titulo: 'Producción por Planta (unidades)', tipo: 'tabla', descripcion: 'Tabla comparativa de producción entre dos plantas.', categorias: ['Planta Norte','Planta Sur'], series: ['Turno A','Turno B','Turno C'], datos: { 'Planta Norte':{'Turno A':320,'Turno B':280,'Turno C':195}, 'Planta Sur':{'Turno A':410,'Turno B':365,'Turno C':220} } },
      { id: 'stock', titulo: 'Stock en Bodega (unidades)', tipo: 'tabla', descripcion: 'Inventario de productos al cierre del semestre.', categorias: ['Producto X','Producto Y','Producto Z'], series: ['Stock Inicial','Stock Final'], datos: { 'Producto X':{'Stock Inicial':150,'Stock Final':95}, 'Producto Y':{'Stock Inicial':200,'Stock Final':240}, 'Producto Z':{'Stock Inicial':80,'Stock Final':60} } }
    ],
    datasets: {
      ds_001: {
        nombre: 'Exportación de Frutas (Miles Ton)',
        tabs: [
          {
            id: 'ds_001_lineas', titulo: 'Exportación de Frutas (Miles Ton) (Líneas)', tipo: 'lineas',
            descripcion: 'Trimestres 2023. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Uva', 'Manzana', 'Cereza', 'Arándano', 'Kiwi'],
            datos: {
              T1: { 'Uva': 450, 'Manzana': 390, 'Cereza': 120, 'Arándano': 210, 'Kiwi': 180 },
              T2: { 'Uva': 470, 'Manzana': 410, 'Cereza': 180, 'Arándano': 250, 'Kiwi': 190 },
              T3: { 'Uva': 420, 'Manzana': 405, 'Cereza': 420, 'Arándano': 275, 'Kiwi': 210 },
              T4: { 'Uva': 510, 'Manzana': 430, 'Cereza': 510, 'Arándano': 320, 'Kiwi': 240 }
            }
          },
          {
            id: 'ds_001_barras', titulo: 'Exportación de Frutas (Miles Ton) (Barras)', tipo: 'barras',
            descripcion: 'Trimestres 2023. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Uva', 'Manzana', 'Cereza', 'Arándano', 'Kiwi'],
            datos: {
              T1: { 'Uva': 450, 'Manzana': 390, 'Cereza': 120, 'Arándano': 210, 'Kiwi': 180 },
              T2: { 'Uva': 470, 'Manzana': 410, 'Cereza': 180, 'Arándano': 250, 'Kiwi': 190 },
              T3: { 'Uva': 420, 'Manzana': 405, 'Cereza': 420, 'Arándano': 275, 'Kiwi': 210 },
              T4: { 'Uva': 510, 'Manzana': 430, 'Cereza': 510, 'Arándano': 320, 'Kiwi': 240 }
            }
          },
          {
            id: 'ds_001_torta', titulo: 'Exportación de Frutas (Miles Ton) (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Uva', 'Manzana', 'Cereza', 'Arándano', 'Kiwi'],
            datos: {
              T4: { 'Uva': 510, 'Manzana': 430, 'Cereza': 510, 'Arándano': 320, 'Kiwi': 240 }
            }
          }
        ]
      },
      ds_002: {
        nombre: 'Producción de Energía (GWh)',
        tabs: [
          {
            id: 'ds_002_lineas', titulo: 'Producción de Energía (GWh) (Líneas)', tipo: 'lineas',
            descripcion: 'Años 2020-2023. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Solar', 'Eólica', 'Hidroeléctrica', 'Carbón', 'Gas Natural'],
            datos: {
              T1: { 'Solar': 1800, 'Eólica': 2400, 'Hidroeléctrica': 6200, 'Carbón': 5100, 'Gas Natural': 3400 },
              T2: { 'Solar': 2100, 'Eólica': 2600, 'Hidroeléctrica': 6050, 'Carbón': 4700, 'Gas Natural': 3500 },
              T3: { 'Solar': 2600, 'Eólica': 2950, 'Hidroeléctrica': 6400, 'Carbón': 4200, 'Gas Natural': 3450 },
              T4: { 'Solar': 3200, 'Eólica': 3300, 'Hidroeléctrica': 6550, 'Carbón': 3800, 'Gas Natural': 3300 }
            }
          },
          {
            id: 'ds_002_barras', titulo: 'Producción de Energía (GWh) (Barras)', tipo: 'barras',
            descripcion: 'Años 2020-2023. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Solar', 'Eólica', 'Hidroeléctrica', 'Carbón', 'Gas Natural'],
            datos: {
              T1: { 'Solar': 1800, 'Eólica': 2400, 'Hidroeléctrica': 6200, 'Carbón': 5100, 'Gas Natural': 3400 },
              T2: { 'Solar': 2100, 'Eólica': 2600, 'Hidroeléctrica': 6050, 'Carbón': 4700, 'Gas Natural': 3500 },
              T3: { 'Solar': 2600, 'Eólica': 2950, 'Hidroeléctrica': 6400, 'Carbón': 4200, 'Gas Natural': 3450 },
              T4: { 'Solar': 3200, 'Eólica': 3300, 'Hidroeléctrica': 6550, 'Carbón': 3800, 'Gas Natural': 3300 }
            }
          },
          {
            id: 'ds_002_torta', titulo: 'Producción de Energía (GWh) (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Solar', 'Eólica', 'Hidroeléctrica', 'Carbón', 'Gas Natural'],
            datos: {
              T4: { 'Solar': 3200, 'Eólica': 3300, 'Hidroeléctrica': 6550, 'Carbón': 3800, 'Gas Natural': 3300 }
            }
          }
        ]
      },
      ds_003: {
        nombre: 'Ventas de Smartphones (Miles Unid)',
        tabs: [
          {
            id: 'ds_003_lineas', titulo: 'Ventas de Smartphones (Miles Unid) (Líneas)', tipo: 'lineas',
            descripcion: 'Trimestres 2024. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Samsung', 'Apple', 'Xiaomi', 'Motorola', 'Honor'],
            datos: {
              T1: { 'Samsung': 780, 'Apple': 640, 'Xiaomi': 520, 'Motorola': 210, 'Honor': 120 },
              T2: { 'Samsung': 810, 'Apple': 700, 'Xiaomi': 560, 'Motorola': 230, 'Honor': 150 },
              T3: { 'Samsung': 790, 'Apple': 690, 'Xiaomi': 580, 'Motorola': 245, 'Honor': 170 },
              T4: { 'Samsung': 850, 'Apple': 820, 'Xiaomi': 610, 'Motorola': 260, 'Honor': 195 }
            }
          },
          {
            id: 'ds_003_barras', titulo: 'Ventas de Smartphones (Miles Unid) (Barras)', tipo: 'barras',
            descripcion: 'Trimestres 2024. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Samsung', 'Apple', 'Xiaomi', 'Motorola', 'Honor'],
            datos: {
              T1: { 'Samsung': 780, 'Apple': 640, 'Xiaomi': 520, 'Motorola': 210, 'Honor': 120 },
              T2: { 'Samsung': 810, 'Apple': 700, 'Xiaomi': 560, 'Motorola': 230, 'Honor': 150 },
              T3: { 'Samsung': 790, 'Apple': 690, 'Xiaomi': 580, 'Motorola': 245, 'Honor': 170 },
              T4: { 'Samsung': 850, 'Apple': 820, 'Xiaomi': 610, 'Motorola': 260, 'Honor': 195 }
            }
          },
          {
            id: 'ds_003_torta', titulo: 'Ventas de Smartphones (Miles Unid) (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Samsung', 'Apple', 'Xiaomi', 'Motorola', 'Honor'],
            datos: {
              T4: { 'Samsung': 850, 'Apple': 820, 'Xiaomi': 610, 'Motorola': 260, 'Honor': 195 }
            }
          }
        ]
      },
      ds_004: {
        nombre: 'Producción Audiovisual (Proyectos)',
        tabs: [
          {
            id: 'ds_004_lineas', titulo: 'Producción Audiovisual (Proyectos) (Líneas)', tipo: 'lineas',
            descripcion: 'Años 2021-2024. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Publicidad', 'Documentales', 'Videoclips', 'Series', 'Cortometrajes'],
            datos: {
              T1: { 'Publicidad': 180, 'Documentales': 45, 'Videoclips': 75, 'Series': 12, 'Cortometrajes': 30 },
              T2: { 'Publicidad': 205, 'Documentales': 52, 'Videoclips': 82, 'Series': 15, 'Cortometrajes': 34 },
              T3: { 'Publicidad': 240, 'Documentales': 58, 'Videoclips': 90, 'Series': 18, 'Cortometrajes': 38 },
              T4: { 'Publicidad': 265, 'Documentales': 66, 'Videoclips': 104, 'Series': 20, 'Cortometrajes': 43 }
            }
          },
          {
            id: 'ds_004_barras', titulo: 'Producción Audiovisual (Proyectos) (Barras)', tipo: 'barras',
            descripcion: 'Años 2021-2024. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Publicidad', 'Documentales', 'Videoclips', 'Series', 'Cortometrajes'],
            datos: {
              T1: { 'Publicidad': 180, 'Documentales': 45, 'Videoclips': 75, 'Series': 12, 'Cortometrajes': 30 },
              T2: { 'Publicidad': 205, 'Documentales': 52, 'Videoclips': 82, 'Series': 15, 'Cortometrajes': 34 },
              T3: { 'Publicidad': 240, 'Documentales': 58, 'Videoclips': 90, 'Series': 18, 'Cortometrajes': 38 },
              T4: { 'Publicidad': 265, 'Documentales': 66, 'Videoclips': 104, 'Series': 20, 'Cortometrajes': 43 }
            }
          },
          {
            id: 'ds_004_torta', titulo: 'Producción Audiovisual (Proyectos) (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Publicidad', 'Documentales', 'Videoclips', 'Series', 'Cortometrajes'],
            datos: {
              T4: { 'Publicidad': 265, 'Documentales': 66, 'Videoclips': 104, 'Series': 20, 'Cortometrajes': 43 }
            }
          }
        ]
      },
      ds_005: {
        nombre: 'Temperatura Promedio (°C)',
        tabs: [
          {
            id: 'ds_005_lineas', titulo: 'Temperatura Promedio (°C) (Líneas)', tipo: 'lineas',
            descripcion: 'Estaciones 2024. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Norte', 'Centro', 'Sur', 'Patagonia', 'Altiplano'],
            datos: {
              T1: { 'Norte': 28, 'Centro': 24, 'Sur': 20, 'Patagonia': 15, 'Altiplano': 19 },
              T2: { 'Norte': 21, 'Centro': 16, 'Sur': 13, 'Patagonia': 8, 'Altiplano': 14 },
              T3: { 'Norte': 18, 'Centro': 12, 'Sur': 8, 'Patagonia': 3, 'Altiplano': 10 },
              T4: { 'Norte': 26, 'Centro': 22, 'Sur': 17, 'Patagonia': 12, 'Altiplano': 18 }
            }
          },
          {
            id: 'ds_005_barras', titulo: 'Temperatura Promedio (°C) (Barras)', tipo: 'barras',
            descripcion: 'Estaciones 2024. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Norte', 'Centro', 'Sur', 'Patagonia', 'Altiplano'],
            datos: {
              T1: { 'Norte': 28, 'Centro': 24, 'Sur': 20, 'Patagonia': 15, 'Altiplano': 19 },
              T2: { 'Norte': 21, 'Centro': 16, 'Sur': 13, 'Patagonia': 8, 'Altiplano': 14 },
              T3: { 'Norte': 18, 'Centro': 12, 'Sur': 8, 'Patagonia': 3, 'Altiplano': 10 },
              T4: { 'Norte': 26, 'Centro': 22, 'Sur': 17, 'Patagonia': 12, 'Altiplano': 18 }
            }
          },
          {
            id: 'ds_005_torta', titulo: 'Temperatura Promedio (°C) (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Norte', 'Centro', 'Sur', 'Patagonia', 'Altiplano'],
            datos: {
              T4: { 'Norte': 26, 'Centro': 22, 'Sur': 17, 'Patagonia': 12, 'Altiplano': 18 }
            }
          }
        ]
      },
      ds_006: {
        nombre: 'Población Urbana (Millones)',
        tabs: [
          {
            id: 'ds_006_lineas', titulo: 'Población Urbana (Millones) (Líneas)', tipo: 'lineas',
            descripcion: 'Años 2020-2023. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Santiago', 'Concepción', 'Valparaíso', 'La Serena', 'Temuco'],
            datos: {
              T1: { 'Santiago': 6.8, 'Concepción': 1.05, 'Valparaíso': 0.98, 'La Serena': 0.41, 'Temuco': 0.36 },
              T2: { 'Santiago': 6.9, 'Concepción': 1.07, 'Valparaíso': 0.99, 'La Serena': 0.42, 'Temuco': 0.37 },
              T3: { 'Santiago': 7.0, 'Concepción': 1.08, 'Valparaíso': 1.00, 'La Serena': 0.44, 'Temuco': 0.38 },
              T4: { 'Santiago': 7.1, 'Concepción': 1.10, 'Valparaíso': 1.01, 'La Serena': 0.45, 'Temuco': 0.39 }
            }
          },
          {
            id: 'ds_006_barras', titulo: 'Población Urbana (Millones) (Barras)', tipo: 'barras',
            descripcion: 'Años 2020-2023. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Santiago', 'Concepción', 'Valparaíso', 'La Serena', 'Temuco'],
            datos: {
              T1: { 'Santiago': 6.8, 'Concepción': 1.05, 'Valparaíso': 0.98, 'La Serena': 0.41, 'Temuco': 0.36 },
              T2: { 'Santiago': 6.9, 'Concepción': 1.07, 'Valparaíso': 0.99, 'La Serena': 0.42, 'Temuco': 0.37 },
              T3: { 'Santiago': 7.0, 'Concepción': 1.08, 'Valparaíso': 1.00, 'La Serena': 0.44, 'Temuco': 0.38 },
              T4: { 'Santiago': 7.1, 'Concepción': 1.10, 'Valparaíso': 1.01, 'La Serena': 0.45, 'Temuco': 0.39 }
            }
          },
          {
            id: 'ds_006_torta', titulo: 'Población Urbana (Millones) (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Santiago', 'Concepción', 'Valparaíso', 'La Serena', 'Temuco'],
            datos: {
              T4: { 'Santiago': 7.1, 'Concepción': 1.10, 'Valparaíso': 1.01, 'La Serena': 0.45, 'Temuco': 0.39 }
            }
          }
        ]
      },
      ds_007: {
        nombre: 'Matrículas Universitarias',
        tabs: [
          {
            id: 'ds_007_lineas', titulo: 'Matrículas Universitarias (Líneas)', tipo: 'lineas',
            descripcion: 'Años 2021-2024. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Ingeniería', 'Medicina', 'Derecho', 'Arquitectura', 'Periodismo'],
            datos: {
              T1: { 'Ingeniería': 12400, 'Medicina': 5400, 'Derecho': 4300, 'Arquitectura': 2100, 'Periodismo': 1450 },
              T2: { 'Ingeniería': 12750, 'Medicina': 5560, 'Derecho': 4250, 'Arquitectura': 2200, 'Periodismo': 1420 },
              T3: { 'Ingeniería': 13100, 'Medicina': 5690, 'Derecho': 4380, 'Arquitectura': 2280, 'Periodismo': 1400 },
              T4: { 'Ingeniería': 13520, 'Medicina': 5800, 'Derecho': 4460, 'Arquitectura': 2360, 'Periodismo': 1380 }
            }
          },
          {
            id: 'ds_007_barras', titulo: 'Matrículas Universitarias (Barras)', tipo: 'barras',
            descripcion: 'Años 2021-2024. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Ingeniería', 'Medicina', 'Derecho', 'Arquitectura', 'Periodismo'],
            datos: {
              T1: { 'Ingeniería': 12400, 'Medicina': 5400, 'Derecho': 4300, 'Arquitectura': 2100, 'Periodismo': 1450 },
              T2: { 'Ingeniería': 12750, 'Medicina': 5560, 'Derecho': 4250, 'Arquitectura': 2200, 'Periodismo': 1420 },
              T3: { 'Ingeniería': 13100, 'Medicina': 5690, 'Derecho': 4380, 'Arquitectura': 2280, 'Periodismo': 1400 },
              T4: { 'Ingeniería': 13520, 'Medicina': 5800, 'Derecho': 4460, 'Arquitectura': 2360, 'Periodismo': 1380 }
            }
          },
          {
            id: 'ds_007_torta', titulo: 'Matrículas Universitarias (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Ingeniería', 'Medicina', 'Derecho', 'Arquitectura', 'Periodismo'],
            datos: {
              T4: { 'Ingeniería': 13520, 'Medicina': 5800, 'Derecho': 4460, 'Arquitectura': 2360, 'Periodismo': 1380 }
            }
          }
        ]
      },
      ds_008: {
        nombre: 'Turismo Internacional (Miles)',
        tabs: [
          {
            id: 'ds_008_lineas', titulo: 'Turismo Internacional (Miles) (Líneas)', tipo: 'lineas',
            descripcion: 'Trimestres 2024. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Argentina', 'Brasil', 'EE.UU.', 'Perú', 'Europa'],
            datos: {
              T1: { 'Argentina': 420, 'Brasil': 180, 'EE.UU.': 95, 'Perú': 160, 'Europa': 130 },
              T2: { 'Argentina': 480, 'Brasil': 210, 'EE.UU.': 110, 'Perú': 175, 'Europa': 145 },
              T3: { 'Argentina': 510, 'Brasil': 235, 'EE.UU.': 125, 'Perú': 182, 'Europa': 160 },
              T4: { 'Argentina': 560, 'Brasil': 260, 'EE.UU.': 140, 'Perú': 190, 'Europa': 175 }
            }
          },
          {
            id: 'ds_008_barras', titulo: 'Turismo Internacional (Miles) (Barras)', tipo: 'barras',
            descripcion: 'Trimestres 2024. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Argentina', 'Brasil', 'EE.UU.', 'Perú', 'Europa'],
            datos: {
              T1: { 'Argentina': 420, 'Brasil': 180, 'EE.UU.': 95, 'Perú': 160, 'Europa': 130 },
              T2: { 'Argentina': 480, 'Brasil': 210, 'EE.UU.': 110, 'Perú': 175, 'Europa': 145 },
              T3: { 'Argentina': 510, 'Brasil': 235, 'EE.UU.': 125, 'Perú': 182, 'Europa': 160 },
              T4: { 'Argentina': 560, 'Brasil': 260, 'EE.UU.': 140, 'Perú': 190, 'Europa': 175 }
            }
          },
          {
            id: 'ds_008_torta', titulo: 'Turismo Internacional (Miles) (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Argentina', 'Brasil', 'EE.UU.', 'Perú', 'Europa'],
            datos: {
              T4: { 'Argentina': 560, 'Brasil': 260, 'EE.UU.': 140, 'Perú': 190, 'Europa': 175 }
            }
          }
        ]
      },
      ds_009: {
        nombre: 'Consumo de Agua (Hm3)',
        tabs: [
          {
            id: 'ds_009_lineas', titulo: 'Consumo de Agua (Hm3) (Líneas)', tipo: 'lineas',
            descripcion: 'Años 2020-2023. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Agricultura', 'Industria', 'Minería', 'Hogares', 'Servicios'],
            datos: {
              T1: { 'Agricultura': 720, 'Industria': 240, 'Minería': 310, 'Hogares': 180, 'Servicios': 95 },
              T2: { 'Agricultura': 705, 'Industria': 245, 'Minería': 315, 'Hogares': 184, 'Servicios': 98 },
              T3: { 'Agricultura': 690, 'Industria': 248, 'Minería': 320, 'Hogares': 188, 'Servicios': 101 },
              T4: { 'Agricultura': 675, 'Industria': 252, 'Minería': 328, 'Hogares': 192, 'Servicios': 104 }
            }
          },
          {
            id: 'ds_009_barras', titulo: 'Consumo de Agua (Hm3) (Barras)', tipo: 'barras',
            descripcion: 'Años 2020-2023. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Agricultura', 'Industria', 'Minería', 'Hogares', 'Servicios'],
            datos: {
              T1: { 'Agricultura': 720, 'Industria': 240, 'Minería': 310, 'Hogares': 180, 'Servicios': 95 },
              T2: { 'Agricultura': 705, 'Industria': 245, 'Minería': 315, 'Hogares': 184, 'Servicios': 98 },
              T3: { 'Agricultura': 690, 'Industria': 248, 'Minería': 320, 'Hogares': 188, 'Servicios': 101 },
              T4: { 'Agricultura': 675, 'Industria': 252, 'Minería': 328, 'Hogares': 192, 'Servicios': 104 }
            }
          },
          {
            id: 'ds_009_torta', titulo: 'Consumo de Agua (Hm3) (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Agricultura', 'Industria', 'Minería', 'Hogares', 'Servicios'],
            datos: {
              T4: { 'Agricultura': 675, 'Industria': 252, 'Minería': 328, 'Hogares': 192, 'Servicios': 104 }
            }
          }
        ]
      },
      ds_010: {
        nombre: 'Índice Bursátil',
        tabs: [
          {
            id: 'ds_010_lineas', titulo: 'Índice Bursátil (Líneas)', tipo: 'lineas',
            descripcion: 'Meses 2024. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            datos: {
              T1: { 'Enero': 4850, 'Febrero': 4925, 'Marzo': 5010, 'Abril': 5075, 'Mayo': 5140 },
              T2: { 'Enero': 4920, 'Febrero': 5010, 'Marzo': 5095, 'Abril': 5155, 'Mayo': 5220 },
              T3: { 'Enero': 5005, 'Febrero': 5075, 'Marzo': 5170, 'Abril': 5210, 'Mayo': 5305 },
              T4: { 'Enero': 5090, 'Febrero': 5160, 'Marzo': 5230, 'Abril': 5290, 'Mayo': 5380 }
            }
          },
          {
            id: 'ds_010_barras', titulo: 'Índice Bursátil (Barras)', tipo: 'barras',
            descripcion: 'Meses 2024. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            datos: {
              T1: { 'Enero': 4850, 'Febrero': 4925, 'Marzo': 5010, 'Abril': 5075, 'Mayo': 5140 },
              T2: { 'Enero': 4920, 'Febrero': 5010, 'Marzo': 5095, 'Abril': 5155, 'Mayo': 5220 },
              T3: { 'Enero': 5005, 'Febrero': 5075, 'Marzo': 5170, 'Abril': 5210, 'Mayo': 5305 },
              T4: { 'Enero': 5090, 'Febrero': 5160, 'Marzo': 5230, 'Abril': 5290, 'Mayo': 5380 }
            }
          },
          {
            id: 'ds_010_torta', titulo: 'Índice Bursátil (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            datos: {
              T4: { 'Enero': 5090, 'Febrero': 5160, 'Marzo': 5230, 'Abril': 5290, 'Mayo': 5380 }
            }
          }
        ]
      },
      ds_011: {
        nombre: 'Producción de Litio (Ton)',
        tabs: [
          {
            id: 'ds_011_lineas', titulo: 'Producción de Litio (Ton) (Líneas)', tipo: 'lineas',
            descripcion: 'Años 2020-2023. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Salar A', 'Salar B', 'Salar C', 'Salar D', 'Salar E'],
            datos: {
              T1: { 'Salar A': 82000, 'Salar B': 41500, 'Salar C': 18300, 'Salar D': 9800, 'Salar E': 5200 },
              T2: { 'Salar A': 87000, 'Salar B': 43800, 'Salar C': 19500, 'Salar D': 10400, 'Salar E': 5800 },
              T3: { 'Salar A': 91500, 'Salar B': 45200, 'Salar C': 20800, 'Salar D': 11100, 'Salar E': 6300 },
              T4: { 'Salar A': 94800, 'Salar B': 47000, 'Salar C': 22100, 'Salar D': 11800, 'Salar E': 6900 }
            }
          },
          {
            id: 'ds_011_barras', titulo: 'Producción de Litio (Ton) (Barras)', tipo: 'barras',
            descripcion: 'Años 2020-2023. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Salar A', 'Salar B', 'Salar C', 'Salar D', 'Salar E'],
            datos: {
              T1: { 'Salar A': 82000, 'Salar B': 41500, 'Salar C': 18300, 'Salar D': 9800, 'Salar E': 5200 },
              T2: { 'Salar A': 87000, 'Salar B': 43800, 'Salar C': 19500, 'Salar D': 10400, 'Salar E': 5800 },
              T3: { 'Salar A': 91500, 'Salar B': 45200, 'Salar C': 20800, 'Salar D': 11100, 'Salar E': 6300 },
              T4: { 'Salar A': 94800, 'Salar B': 47000, 'Salar C': 22100, 'Salar D': 11800, 'Salar E': 6900 }
            }
          },
          {
            id: 'ds_011_torta', titulo: 'Producción de Litio (Ton) (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Salar A', 'Salar B', 'Salar C', 'Salar D', 'Salar E'],
            datos: {
              T4: { 'Salar A': 94800, 'Salar B': 47000, 'Salar C': 22100, 'Salar D': 11800, 'Salar E': 6900 }
            }
          }
        ]
      },
      ds_012: {
        nombre: 'Velocidad Internet (Mbps)',
        tabs: [
          {
            id: 'ds_012_lineas', titulo: 'Velocidad Internet (Mbps) (Líneas)', tipo: 'lineas',
            descripcion: 'Años 2021-2024. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Fibra', 'Cable', '4G', '5G', 'Satelital'],
            datos: {
              T1: { 'Fibra': 180, 'Cable': 120, '4G': 32, '5G': 110, 'Satelital': 45 },
              T2: { 'Fibra': 240, 'Cable': 135, '4G': 35, '5G': 240, 'Satelital': 60 },
              T3: { 'Fibra': 320, 'Cable': 150, '4G': 39, '5G': 390, 'Satelital': 78 },
              T4: { 'Fibra': 450, 'Cable': 170, '4G': 42, '5G': 520, 'Satelital': 95 }
            }
          },
          {
            id: 'ds_012_barras', titulo: 'Velocidad Internet (Mbps) (Barras)', tipo: 'barras',
            descripcion: 'Años 2021-2024. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Fibra', 'Cable', '4G', '5G', 'Satelital'],
            datos: {
              T1: { 'Fibra': 180, 'Cable': 120, '4G': 32, '5G': 110, 'Satelital': 45 },
              T2: { 'Fibra': 240, 'Cable': 135, '4G': 35, '5G': 240, 'Satelital': 60 },
              T3: { 'Fibra': 320, 'Cable': 150, '4G': 39, '5G': 390, 'Satelital': 78 },
              T4: { 'Fibra': 450, 'Cable': 170, '4G': 42, '5G': 520, 'Satelital': 95 }
            }
          },
          {
            id: 'ds_012_torta', titulo: 'Velocidad Internet (Mbps) (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Fibra', 'Cable', '4G', '5G', 'Satelital'],
            datos: {
              T4: { 'Fibra': 450, 'Cable': 170, '4G': 42, '5G': 520, 'Satelital': 95 }
            }
          }
        ]
      },
      ds_013: {
        nombre: 'Asistencia al Cine (Miles)',
        tabs: [
          {
            id: 'ds_013_lineas', titulo: 'Asistencia al Cine (Miles) (Líneas)', tipo: 'lineas',
            descripcion: 'Trimestres 2024. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Acción', 'Comedia', 'Drama', 'Animación', 'Terror'],
            datos: {
              T1: { 'Acción': 420, 'Comedia': 310, 'Drama': 180, 'Animación': 260, 'Terror': 145 },
              T2: { 'Acción': 480, 'Comedia': 335, 'Drama': 190, 'Animación': 320, 'Terror': 175 },
              T3: { 'Acción': 510, 'Comedia': 360, 'Drama': 205, 'Animación': 410, 'Terror': 220 },
              T4: { 'Acción': 560, 'Comedia': 390, 'Drama': 215, 'Animación': 520, 'Terror': 260 }
            }
          },
          {
            id: 'ds_013_barras', titulo: 'Asistencia al Cine (Miles) (Barras)', tipo: 'barras',
            descripcion: 'Trimestres 2024. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Acción', 'Comedia', 'Drama', 'Animación', 'Terror'],
            datos: {
              T1: { 'Acción': 420, 'Comedia': 310, 'Drama': 180, 'Animación': 260, 'Terror': 145 },
              T2: { 'Acción': 480, 'Comedia': 335, 'Drama': 190, 'Animación': 320, 'Terror': 175 },
              T3: { 'Acción': 510, 'Comedia': 360, 'Drama': 205, 'Animación': 410, 'Terror': 220 },
              T4: { 'Acción': 560, 'Comedia': 390, 'Drama': 215, 'Animación': 520, 'Terror': 260 }
            }
          },
          {
            id: 'ds_013_torta', titulo: 'Asistencia al Cine (Miles) (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Acción', 'Comedia', 'Drama', 'Animación', 'Terror'],
            datos: {
              T4: { 'Acción': 560, 'Comedia': 390, 'Drama': 215, 'Animación': 520, 'Terror': 260 }
            }
          }
        ]
      },
      ds_014: {
        nombre: 'Ventas de Vehículos',
        tabs: [
          {
            id: 'ds_014_lineas', titulo: 'Ventas de Vehículos (Líneas)', tipo: 'lineas',
            descripcion: 'Trimestres 2024. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['SUV', 'Sedán', 'Pickup', 'Eléctrico', 'Híbrido'],
            datos: {
              T1: { 'SUV': 9200, 'Sedán': 5100, 'Pickup': 3400, 'Eléctrico': 820, 'Híbrido': 1260 },
              T2: { 'SUV': 9800, 'Sedán': 5250, 'Pickup': 3600, 'Eléctrico': 1150, 'Híbrido': 1520 },
              T3: { 'SUV': 10300, 'Sedán': 5400, 'Pickup': 3820, 'Eléctrico': 1480, 'Híbrido': 1780 },
              T4: { 'SUV': 10900, 'Sedán': 5600, 'Pickup': 4010, 'Eléctrico': 1890, 'Híbrido': 2050 }
            }
          },
          {
            id: 'ds_014_barras', titulo: 'Ventas de Vehículos (Barras)', tipo: 'barras',
            descripcion: 'Trimestres 2024. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['SUV', 'Sedán', 'Pickup', 'Eléctrico', 'Híbrido'],
            datos: {
              T1: { 'SUV': 9200, 'Sedán': 5100, 'Pickup': 3400, 'Eléctrico': 820, 'Híbrido': 1260 },
              T2: { 'SUV': 9800, 'Sedán': 5250, 'Pickup': 3600, 'Eléctrico': 1150, 'Híbrido': 1520 },
              T3: { 'SUV': 10300, 'Sedán': 5400, 'Pickup': 3820, 'Eléctrico': 1480, 'Híbrido': 1780 },
              T4: { 'SUV': 10900, 'Sedán': 5600, 'Pickup': 4010, 'Eléctrico': 1890, 'Híbrido': 2050 }
            }
          },
          {
            id: 'ds_014_torta', titulo: 'Ventas de Vehículos (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['SUV', 'Sedán', 'Pickup', 'Eléctrico', 'Híbrido'],
            datos: {
              T4: { 'SUV': 10900, 'Sedán': 5600, 'Pickup': 4010, 'Eléctrico': 1890, 'Híbrido': 2050 }
            }
          }
        ]
      },
      ds_015: {
        nombre: 'Producción Agrícola (Ton)',
        tabs: [
          {
            id: 'ds_015_lineas', titulo: 'Producción Agrícola (Ton) (Líneas)', tipo: 'lineas',
            descripcion: 'Años 2020-2023. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Trigo', 'Maíz', 'Papa', 'Avena', 'Quinoa'],
            datos: {
              T1: { 'Trigo': 120000, 'Maíz': 98000, 'Papa': 86000, 'Avena': 54000, 'Quinoa': 4800 },
              T2: { 'Trigo': 123000, 'Maíz': 100500, 'Papa': 87200, 'Avena': 55100, 'Quinoa': 5200 },
              T3: { 'Trigo': 126500, 'Maíz': 102300, 'Papa': 88500, 'Avena': 56000, 'Quinoa': 5600 },
              T4: { 'Trigo': 129000, 'Maíz': 104800, 'Papa': 90100, 'Avena': 57200, 'Quinoa': 6100 }
            }
          },
          {
            id: 'ds_015_barras', titulo: 'Producción Agrícola (Ton) (Barras)', tipo: 'barras',
            descripcion: 'Años 2020-2023. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Trigo', 'Maíz', 'Papa', 'Avena', 'Quinoa'],
            datos: {
              T1: { 'Trigo': 120000, 'Maíz': 98000, 'Papa': 86000, 'Avena': 54000, 'Quinoa': 4800 },
              T2: { 'Trigo': 123000, 'Maíz': 100500, 'Papa': 87200, 'Avena': 55100, 'Quinoa': 5200 },
              T3: { 'Trigo': 126500, 'Maíz': 102300, 'Papa': 88500, 'Avena': 56000, 'Quinoa': 5600 },
              T4: { 'Trigo': 129000, 'Maíz': 104800, 'Papa': 90100, 'Avena': 57200, 'Quinoa': 6100 }
            }
          },
          {
            id: 'ds_015_torta', titulo: 'Producción Agrícola (Ton) (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Trigo', 'Maíz', 'Papa', 'Avena', 'Quinoa'],
            datos: {
              T4: { 'Trigo': 129000, 'Maíz': 104800, 'Papa': 90100, 'Avena': 57200, 'Quinoa': 6100 }
            }
          }
        ]
      },
      ds_016: {
        nombre: 'Ventas de Libros',
        tabs: [
          {
            id: 'ds_016_lineas', titulo: 'Ventas de Libros (Líneas)', tipo: 'lineas',
            descripcion: 'Años 2021-2024. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Novela', 'Historia', 'Ciencia', 'Infantil', 'Tecnología'],
            datos: {
              T1: { 'Novela': 18000, 'Historia': 8200, 'Ciencia': 5600, 'Infantil': 9100, 'Tecnología': 4100 },
              T2: { 'Novela': 19200, 'Historia': 8500, 'Ciencia': 5900, 'Infantil': 9600, 'Tecnología': 4550 },
              T3: { 'Novela': 20500, 'Historia': 8700, 'Ciencia': 6200, 'Infantil': 10300, 'Tecnología': 4900 },
              T4: { 'Novela': 21400, 'Historia': 8950, 'Ciencia': 6550, 'Infantil': 11000, 'Tecnología': 5400 }
            }
          },
          {
            id: 'ds_016_barras', titulo: 'Ventas de Libros (Barras)', tipo: 'barras',
            descripcion: 'Años 2021-2024. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Novela', 'Historia', 'Ciencia', 'Infantil', 'Tecnología'],
            datos: {
              T1: { 'Novela': 18000, 'Historia': 8200, 'Ciencia': 5600, 'Infantil': 9100, 'Tecnología': 4100 },
              T2: { 'Novela': 19200, 'Historia': 8500, 'Ciencia': 5900, 'Infantil': 9600, 'Tecnología': 4550 },
              T3: { 'Novela': 20500, 'Historia': 8700, 'Ciencia': 6200, 'Infantil': 10300, 'Tecnología': 4900 },
              T4: { 'Novela': 21400, 'Historia': 8950, 'Ciencia': 6550, 'Infantil': 11000, 'Tecnología': 5400 }
            }
          },
          {
            id: 'ds_016_torta', titulo: 'Ventas de Libros (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Novela', 'Historia', 'Ciencia', 'Infantil', 'Tecnología'],
            datos: {
              T4: { 'Novela': 21400, 'Historia': 8950, 'Ciencia': 6550, 'Infantil': 11000, 'Tecnología': 5400 }
            }
          }
        ]
      },
      ds_017: {
        nombre: 'Consumo Eléctrico (GWh)',
        tabs: [
          {
            id: 'ds_017_lineas', titulo: 'Consumo Eléctrico (GWh) (Líneas)', tipo: 'lineas',
            descripcion: 'Meses Invierno. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Residencial', 'Industrial', 'Comercial', 'Minería', 'Público'],
            datos: {
              T1: { 'Residencial': 880, 'Industrial': 1220, 'Comercial': 640, 'Minería': 1450, 'Público': 215 },
              T2: { 'Residencial': 910, 'Industrial': 1240, 'Comercial': 655, 'Minería': 1465, 'Público': 220 },
              T3: { 'Residencial': 940, 'Industrial': 1265, 'Comercial': 670, 'Minería': 1480, 'Público': 228 },
              T4: { 'Residencial': 970, 'Industrial': 1280, 'Comercial': 690, 'Minería': 1500, 'Público': 235 }
            }
          },
          {
            id: 'ds_017_barras', titulo: 'Consumo Eléctrico (GWh) (Barras)', tipo: 'barras',
            descripcion: 'Meses Invierno. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Residencial', 'Industrial', 'Comercial', 'Minería', 'Público'],
            datos: {
              T1: { 'Residencial': 880, 'Industrial': 1220, 'Comercial': 640, 'Minería': 1450, 'Público': 215 },
              T2: { 'Residencial': 910, 'Industrial': 1240, 'Comercial': 655, 'Minería': 1465, 'Público': 220 },
              T3: { 'Residencial': 940, 'Industrial': 1265, 'Comercial': 670, 'Minería': 1480, 'Público': 228 },
              T4: { 'Residencial': 970, 'Industrial': 1280, 'Comercial': 690, 'Minería': 1500, 'Público': 235 }
            }
          },
          {
            id: 'ds_017_torta', titulo: 'Consumo Eléctrico (GWh) (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Residencial', 'Industrial', 'Comercial', 'Minería', 'Público'],
            datos: {
              T4: { 'Residencial': 970, 'Industrial': 1280, 'Comercial': 690, 'Minería': 1500, 'Público': 235 }
            }
          }
        ]
      },
      ds_018: {
        nombre: 'Producción Pesquera (Ton)',
        tabs: [
          {
            id: 'ds_018_lineas', titulo: 'Producción Pesquera (Ton) (Líneas)', tipo: 'lineas',
            descripcion: 'Años 2020-2023. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Salmón', 'Jurel', 'Merluza', 'Sardina', 'Anchoveta'],
            datos: {
              T1: { 'Salmón': 520000, 'Jurel': 182000, 'Merluza': 76000, 'Sardina': 98000, 'Anchoveta': 64000 },
              T2: { 'Salmón': 535000, 'Jurel': 176000, 'Merluza': 74200, 'Sardina': 101000, 'Anchoveta': 65800 },
              T3: { 'Salmón': 548000, 'Jurel': 188000, 'Merluza': 73500, 'Sardina': 104500, 'Anchoveta': 67100 },
              T4: { 'Salmón': 561000, 'Jurel': 194000, 'Merluza': 72800, 'Sardina': 108000, 'Anchoveta': 69000 }
            }
          },
          {
            id: 'ds_018_barras', titulo: 'Producción Pesquera (Ton) (Barras)', tipo: 'barras',
            descripcion: 'Años 2020-2023. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Salmón', 'Jurel', 'Merluza', 'Sardina', 'Anchoveta'],
            datos: {
              T1: { 'Salmón': 520000, 'Jurel': 182000, 'Merluza': 76000, 'Sardina': 98000, 'Anchoveta': 64000 },
              T2: { 'Salmón': 535000, 'Jurel': 176000, 'Merluza': 74200, 'Sardina': 101000, 'Anchoveta': 65800 },
              T3: { 'Salmón': 548000, 'Jurel': 188000, 'Merluza': 73500, 'Sardina': 104500, 'Anchoveta': 67100 },
              T4: { 'Salmón': 561000, 'Jurel': 194000, 'Merluza': 72800, 'Sardina': 108000, 'Anchoveta': 69000 }
            }
          },
          {
            id: 'ds_018_torta', titulo: 'Producción Pesquera (Ton) (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Salmón', 'Jurel', 'Merluza', 'Sardina', 'Anchoveta'],
            datos: {
              T4: { 'Salmón': 561000, 'Jurel': 194000, 'Merluza': 72800, 'Sardina': 108000, 'Anchoveta': 69000 }
            }
          }
        ]
      },
      ds_019: {
        nombre: 'Casos de Influenza',
        tabs: [
          {
            id: 'ds_019_lineas', titulo: 'Casos de Influenza (Líneas)', tipo: 'lineas',
            descripcion: 'Semanas 1-4. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Niños', 'Adultos', 'Adultos Mayores', 'Embarazadas', 'Personal Salud'],
            datos: {
              T1: { 'Niños': 210, 'Adultos': 180, 'Adultos Mayores': 145, 'Embarazadas': 24, 'Personal Salud': 18 },
              T2: { 'Niños': 260, 'Adultos': 225, 'Adultos Mayores': 180, 'Embarazadas': 31, 'Personal Salud': 20 },
              T3: { 'Niños': 320, 'Adultos': 280, 'Adultos Mayores': 240, 'Embarazadas': 36, 'Personal Salud': 26 },
              T4: { 'Niños': 350, 'Adultos': 310, 'Adultos Mayores': 275, 'Embarazadas': 41, 'Personal Salud': 29 }
            }
          },
          {
            id: 'ds_019_barras', titulo: 'Casos de Influenza (Barras)', tipo: 'barras',
            descripcion: 'Semanas 1-4. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Niños', 'Adultos', 'Adultos Mayores', 'Embarazadas', 'Personal Salud'],
            datos: {
              T1: { 'Niños': 210, 'Adultos': 180, 'Adultos Mayores': 145, 'Embarazadas': 24, 'Personal Salud': 18 },
              T2: { 'Niños': 260, 'Adultos': 225, 'Adultos Mayores': 180, 'Embarazadas': 31, 'Personal Salud': 20 },
              T3: { 'Niños': 320, 'Adultos': 280, 'Adultos Mayores': 240, 'Embarazadas': 36, 'Personal Salud': 26 },
              T4: { 'Niños': 350, 'Adultos': 310, 'Adultos Mayores': 275, 'Embarazadas': 41, 'Personal Salud': 29 }
            }
          },
          {
            id: 'ds_019_torta', titulo: 'Casos de Influenza (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Niños', 'Adultos', 'Adultos Mayores', 'Embarazadas', 'Personal Salud'],
            datos: {
              T4: { 'Niños': 350, 'Adultos': 310, 'Adultos Mayores': 275, 'Embarazadas': 41, 'Personal Salud': 29 }
            }
          }
        ]
      },
      ds_020: {
        nombre: 'Medallas Deportivas',
        tabs: [
          {
            id: 'ds_020_lineas', titulo: 'Medallas Deportivas (Líneas)', tipo: 'lineas',
            descripcion: 'Años 2021-2024. Tendencia en el tiempo.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Atletismo', 'Natación', 'Ciclismo', 'Remo', 'Tenis'],
            datos: {
              T1: { 'Atletismo': 12, 'Natación': 8, 'Ciclismo': 5, 'Remo': 9, 'Tenis': 6 },
              T2: { 'Atletismo': 15, 'Natación': 10, 'Ciclismo': 7, 'Remo': 11, 'Tenis': 8 },
              T3: { 'Atletismo': 18, 'Natación': 12, 'Ciclismo': 8, 'Remo': 14, 'Tenis': 9 },
              T4: { 'Atletismo': 20, 'Natación': 15, 'Ciclismo': 10, 'Remo': 16, 'Tenis': 11 }
            }
          },
          {
            id: 'ds_020_barras', titulo: 'Medallas Deportivas (Barras)', tipo: 'barras',
            descripcion: 'Años 2021-2024. Comparativa por período.',
            categorias: ['T1', 'T2', 'T3', 'T4'],
            series: ['Atletismo', 'Natación', 'Ciclismo', 'Remo', 'Tenis'],
            datos: {
              T1: { 'Atletismo': 12, 'Natación': 8, 'Ciclismo': 5, 'Remo': 9, 'Tenis': 6 },
              T2: { 'Atletismo': 15, 'Natación': 10, 'Ciclismo': 7, 'Remo': 11, 'Tenis': 8 },
              T3: { 'Atletismo': 18, 'Natación': 12, 'Ciclismo': 8, 'Remo': 14, 'Tenis': 9 },
              T4: { 'Atletismo': 20, 'Natación': 15, 'Ciclismo': 10, 'Remo': 16, 'Tenis': 11 }
            }
          },
          {
            id: 'ds_020_torta', titulo: 'Medallas Deportivas (Distribución T4)', tipo: 'torta',
            descripcion: 'Proporción de cada categoría en el último período (T4).',
            categorias: ['T4'],
            series: ['Atletismo', 'Natación', 'Ciclismo', 'Remo', 'Tenis'],
            datos: {
              T4: { 'Atletismo': 20, 'Natación': 15, 'Ciclismo': 10, 'Remo': 16, 'Tenis': 11 }
            }
          }
        ]
      },
    }
  },

  // ==========================================================
  // BANCO VERBAL
  // ==========================================================

  verbal: {
    titulo: 'Razonamiento Verbal',
    tiempo: 12 * 60,
    totalPreguntas: 50,
    instrucciones: `
	      <p>Esta prueba mide tu capacidad para <strong>comprender información escrita</strong> y sacar conclusiones lógicas.</p>
	      <p><strong>Duración:</strong> 12 minutos | <strong>Preguntas:</strong> 50</p>
      <p>Deberás leer los textos en las pestañas y evaluar cada afirmación como:</p>
      <ul>
        <li><strong>VERDADERO (V):</strong> El texto confirma explícitamente la afirmación.</li>
        <li><strong>FALSO (F):</strong> El texto contradice la afirmación.</li>
        <li><strong>DESCONOCIDO (D):</strong> El texto no contiene información para decidir.</li>
      </ul>
    `,
    tabs: [
      { id: 'accionistas', titulo: 'Reunión de Accionistas', contenido: 'El día 15 de marzo de 2025 se celebró la reunión anual de accionistas de Inversiones del Sur S.A. En la reunión estuvieron presentes 42 de los 50 accionistas con derecho a voto, alcanzando el quórum necesario del 80%. Se aprobó por mayoría simple (38 votos a favor, 4 en contra) el plan de expansión hacia la Región de la Araucanía, el cual contempla una inversión inicial de 2.400 millones de pesos. El proyecto comenzará su ejecución en julio de 2025 y se espera que esté operativo para diciembre de 2026. La directora financiera, Sra. María Elena Fuentes, señaló que la empresa cuenta con reservas líquidas por 5.800 millones, por lo que no será necesario recurrir a financiamiento externo. Sin embargo, el auditor externo advirtió que los márgenes operacionales han disminuido un 3,2% respecto al año anterior, principalmente por el alza en costos logísticos.' },
      { id: 'grupos', titulo: 'Grupos Objetivo', contenido: 'El estudio de mercado encargado por la compañía identificó tres segmentos prioritarios para la nueva línea de productos. El Grupo Alpha está compuesto por profesionales entre 25 y 35 años, residentes en zonas urbanas, con ingreso mensual superior a $1.200.000. Representan el 18% del mercado potencial. El Grupo Beta corresponde a familias con hijos en edad escolar, con ingresos entre $800.000 y $1.500.000, que representan el 42% del mercado. El Grupo Gamma abarca a adultos mayores de 60 años con ingresos sobre $600.000, representando el 22% del mercado. El 18% restante corresponde a otros segmentos no priorizados. La estrategia comercial aprobada se enfocará en los Grupos Alpha y Beta durante los primeros 18 meses, postergando acciones hacia el Grupo Gamma para una segunda etapa.' },
      { id: 'prensa', titulo: 'Cobertura de Prensa', contenido: 'Distintos medios de comunicación han cubierto el proceso de expansión de Inversiones del Sur S.A. El Diario Financiero publicó el 20 de marzo una nota titulada "Inversiones del Sur apuesta por La Araucanía con millonario plan". El Mercurio, en su edición del 21 de marzo, destacó la creación de aproximadamente 180 nuevos puestos de trabajo directos y 300 indirectos que generaría el proyecto. La Tercera publicó una columna de opinión el 22 de marzo donde se cuestiona la viabilidad del proyecto dada la disminución de márgenes operacionales. Radio Bio-Bio entrevistó a la directora financiera el 23 de marzo, quien reiteró la solidez financiera de la empresa. Hasta la fecha, ningún medio ha reportado problemas regulatorios o ambientales que pudieran frenar la iniciativa.' },
      { id: 'informe', titulo: 'Informe Anual 2024', contenido: 'El informe anual correspondiente al ejercicio 2024 muestra los siguientes resultados: Los ingresos operacionales alcanzaron los 18.300 millones de pesos, un 7,2% más que en 2023. Los costos operacionales sumaron 12.600 millones, lo que representa un aumento del 9,8% respecto al período anterior. La utilidad neta fue de 2.100 millones, cifra inferior a los 2.450 millones obtenidos en 2023. La empresa cuenta con 740 colaboradores distribuidos en 6 sucursales. La tasa de rotación de personal fue del 8,5%, por debajo del promedio de la industria (12%). Se invirtieron 890 millones en capacitación y desarrollo durante 2024, alcanzando a 520 trabajadores. Para 2025, el presupuesto de capacitación aprobado asciende a 950 millones.' },
      // ─── NUEVOS TEXTOS (12) para mayor variedad ───
      { id: 'fusion', titulo: 'Fusión Empresarial', contenido: 'El 10 de enero de 2025, las empresas Tecnología Avanzada S.A. y Soluciones Digitales Ltda. anunciaron su fusión, creando el holding TechSolutions Group. La operación fue valorada en 8.500 millones de dólares. Tecnología Avanzada aportó 3.200 empleados y 12 oficinas en 5 países, mientras que Soluciones Digitales contribuyó con 1.800 empleados y 8 oficinas en 3 países. La fusión fue aprobada por el 94% de los accionistas de ambas empresas. Se estima que generará ahorros anuales de 450 millones de dólares por sinergias operativas a partir de 2027. Sin embargo, 320 empleados serán reubicados y 150 puestos serán eliminados por duplicidad de funciones. El nuevo CEO será el Sr. Roberto Mendoza, quien actualmente dirige Tecnología Avanzada, mientras que la Sra. Carla Jiménez, fundadora de Soluciones Digitales, asumirá como presidenta del directorio. La fusión deberá ser aprobada por la Comisión Antimonopolio antes del 30 de junio de 2025.' },
      { id: 'ambiental', titulo: 'Informe Ambiental 2024', contenido: 'El Ministerio de Medio Ambiente publicó su informe anual de sostenibilidad correspondiente a 2024. Las emisiones de CO2 del sector industrial se redujeron un 5,4%, pasando de 42,8 a 40,5 millones de toneladas. El sector transporte sigue siendo el mayor emisor con 58,2 millones de toneladas, un 2,1% más que en 2023. La superficie de bosque nativo protegido aumentó de 14,3 a 15,7 millones de hectáreas gracias a tres nuevos parques nacionales creados en la Patagonia. El consumo de agua industrial disminuyó de 890 a 845 millones de metros cúbicos. Sin embargo, los niveles de material particulado fino (MP 2.5) en Santiago superaron la norma de la OMS en 67 días durante 2024, frente a 52 días en 2023. El gobierno anunció un plan de inversión de 1.200 millones de dólares para energías renovables, con meta de 40% de matriz energética limpia para 2030.' },
      { id: 'ciberseguridad', titulo: 'Incidente de Ciberseguridad', contenido: 'El 5 de febrero de 2025, la empresa DataSecure SpA detectó un ataque de ransomware que comprometió 3 de sus 7 servidores principales. El ataque ocurrió a las 03:47 AM y fue detectado por el sistema de monitoreo automatizado a las 04:12 AM. Se estima que 1,2 terabytes de datos fueron encriptados, afectando a aproximadamente 45.000 clientes. El equipo de respuesta a incidentes, liderado por el Ing. Felipe Rojas, logró contener el ataque en menos de 3 horas. La empresa pagó un rescate de 350.000 dólares en Bitcoin para recuperar los datos, aunque posteriormente logró descifrar el 92% de la información sin usar las claves del atacante. La Superintendencia de Ciberseguridad inició una investigación y determinó que el ataque se originó desde servidores ubicados en Europa del Este. DataSecure implementó autenticación de doble factor para sus 2.800 empleados e invirtió 4,2 millones de dólares en nuevos firewalls y sistemas de detección de intrusiones.' },
      { id: 'salud_laboral', titulo: 'Informe de Salud Laboral', contenido: 'La Asociación Chilena de Seguridad (ACHS) presentó su informe anual de salud laboral 2024. La tasa de accidentabilidad laboral fue del 3,2%, la más baja en 10 años, comparada con el 3,7% de 2023. Se registraron 28.400 accidentes laborales en total, de los cuales el 62% ocurrió en el sector construcción y manufactura. Las licencias médicas por salud mental aumentaron un 18%, pasando de 34.000 a 40.120 casos, siendo ansiedad y depresión los diagnósticos más frecuentes. Las empresas con programas de bienestar activos reportaron un 30% menos de licencias que aquellas sin programas. Se fiscalizaron 12.500 empresas durante el año, aplicándose 3.200 multas por incumplimiento de normas de seguridad. El 85% de las empresas del sector minero cumple con la norma ISO 45001, versus solo el 41% del sector retail. La inversión total en prevención de riesgos alcanzó los 680 millones de dólares.' },
      { id: 'educacion_corp', titulo: 'Programa de Educación Corporativa', contenido: 'La Corporación Nacional de Capacitación publicó los resultados de su programa "Talento Chile 2025". Durante 2024, se capacitaron 125.000 trabajadores en 480 cursos distintos, un 15% más que en 2023. El 72% de los participantes obtuvo una certificación reconocida internacionalmente. Las áreas más demandadas fueron: Tecnologías de la Información (38%), Habilidades de Liderazgo (24%), Idiomas (18%) y Oficios Técnicos (20%). El programa otorgó 5.200 becas completas a trabajadores de regiones, con una inversión de 18.500 millones de pesos. La tasa de inserción laboral post-capacitación fue del 78%, aumentando al 84% en el sector TI. El salario promedio de los egresados aumentó un 23% respecto a su ingreso previo. Las empresas que participaron en el programa reportaron un aumento de productividad del 12,5% en promedio. Para 2025, el presupuesto aumentará a 22.000 millones de pesos.' },
      { id: 'comercio_int', titulo: 'Comercio Internacional', contenido: 'El Banco Central publicó su reporte de comercio exterior correspondiente al primer trimestre de 2025. Las exportaciones totales alcanzaron los 23.400 millones de dólares, un 8,3% más que el mismo período de 2024. El cobre representó el 48% de las exportaciones con 11.230 millones de dólares, seguido por el litio con 4.800 millones (20,5%), frutas con 2.900 millones (12,4%) y salmón con 1.600 millones (6,8%). Los principales destinos fueron: China (38%), Estados Unidos (18%), Unión Europea (14%), Japón (9%) y Corea del Sur (6%). Las importaciones sumaron 20.100 millones de dólares, un 5,2% más que en 2024, destacando la compra de maquinaria industrial (+12%) y vehículos (+8%). La balanza comercial registró un superávit de 3.300 millones de dólares. El tipo de cambio promedio fue de 920 pesos por dólar. Se firmaron 3 nuevos tratados de libre comercio con países del sudeste asiático.' },
      { id: 'clima_laboral', titulo: 'Encuesta de Clima Laboral', contenido: 'La consultora Great Place to Work presentó su encuesta anual de clima laboral 2025, aplicada a 85.000 trabajadores de 420 empresas en Chile. El índice de satisfacción laboral global fue del 68%, tres puntos menos que en 2024 (71%). El 74% de los encuestados valora positivamente la flexibilidad horaria, mientras que solo el 41% está conforme con su remuneración. El trabajo remoto se estabilizó: un 38% trabaja en modalidad híbrida (3 días presencial, 2 remoto), un 12% completamente remoto y un 50% presencial. El 62% de los trabajadores entre 25 y 35 años considera cambiar de empleo en los próximos 12 meses, versus solo el 28% de los mayores de 45 años. Las empresas con puntuación más alta en clima laboral reportaron un 22% menos de rotación voluntaria. El 55% de las empresas ofrece seguro complementario de salud y el 48% cuenta con programas de apoyo psicológico. La desconexión digital fuera del horario laboral es respetada en el 63% de las organizaciones.' },
      { id: 'innovacion', titulo: 'Innovación y Patentes', contenido: 'El Instituto Nacional de Propiedad Industrial (INAPI) publicó su informe anual de innovación 2024. Se registraron 3.850 solicitudes de patentes, un 11% más que en 2023. De estas, el 42% correspondió a inventores nacionales y el 58% a empresas extranjeras, principalmente de Estados Unidos (22%), Alemania (15%) y China (10%). Los sectores con más patentes fueron: Biotecnología (28%), Tecnologías de la Información (24%), Energías Renovables (18%) y Minería (14%). Las universidades chilenas registraron 680 patentes, lideradas por la Universidad de Chile (180), la Pontificia Universidad Católica (155) y la Universidad de Concepción (120). La inversión total en Investigación y Desarrollo (I+D) alcanzó el 0,38% del PIB, equivalente a 1.140 millones de dólares, lejos del promedio OCDE (2,7%). El gobierno anunció un fondo de 200 millones de dólares para financiar 50 startups tecnológicas durante 2025. Destacó la patente chilena de un sistema de desalinización solar portátil que ganó el premio mundial de innovación WIPO 2024.' },
      { id: 'logistica', titulo: 'Informe de Logística y Distribución', contenido: 'La Cámara Nacional de Comercio publicó su informe de logística y distribución 2024. El comercio electrónico creció un 24%, moviendo 380 millones de paquetes durante el año, con un peak de 5,2 millones de envíos diarios en diciembre. Las 5 principales empresas de courier (Chilexpress, Correos de Chile, Starken, FedEx y DHL) concentran el 82% del mercado. El tiempo promedio de entrega en Santiago fue de 1,8 días, mientras que en regiones extremas como Arica o Punta Arenas alcanzó los 5,4 días. El costo logístico representó en promedio el 11,2% del valor del producto, versus el 9,5% en países OCDE. Se inauguraron 6 nuevos centros de distribución en 2024, sumando 350.000 m² de bodegas, con inversión de 420 millones de dólares. La implementación de inteligencia artificial en ruteo redujo un 15% los kilómetros recorridos y un 12% el consumo de combustible. La tasa de entregas exitosas al primer intento subió del 82% al 87%. Se espera que el uso de drones de reparto comience en zonas rurales durante 2026.' },
      { id: 'marketing', titulo: 'Campaña de Marketing Digital', contenido: 'La agencia DigitalPlus Analytics publicó los resultados de la campaña "Conecta 2025" realizada para la empresa de telecomunicaciones FibraMax. La campaña se ejecutó entre el 1 de marzo y el 30 de abril de 2025, con un presupuesto total de 850.000 dólares distribuidos en: redes sociales (45%), Google Ads (30%), email marketing (15%) y marketing de influencers (10%). Se alcanzaron 28 millones de impresiones, generando 1,4 millones de clics (CTR del 5,2%). La tasa de conversión fue del 3,8%, resultando en 53.200 nuevos clientes. El costo por adquisición (CPA) promedio fue de 16 dólares, un 22% menos que la campaña anterior. Instagram generó el 38% del tráfico, seguido por TikTok (26%), Google (22%) y Facebook (14%). Los 12 influencers contratados (con entre 50.000 y 2 millones de seguidores) generaron 4,5 millones de visualizaciones. El retorno de inversión (ROI) fue del 340%, con ingresos estimados de 2,89 millones de dólares atribuibles a la campaña. La retención a 30 días de los nuevos clientes fue del 72%.' },
      { id: 'rrhh', titulo: 'Informe de Recursos Humanos', contenido: 'La Dirección de Recursos Humanos de Corporación Nexus presentó su informe de gestión 2024. La empresa cuenta con 4.200 empleados distribuidos en 14 sucursales a lo largo del país. Durante 2024, se contrataron 680 nuevos colaboradores y se registraron 490 renuncias voluntarias, resultando en una tasa de rotación del 11,7%, inferior al 14,2% de 2023. El tiempo promedio de contratación se redujo de 45 a 32 días gracias al nuevo sistema de reclutamiento con IA. El 58% de los nuevos contratados fueron mujeres, avanzando hacia la meta de paridad de género (50%) para 2026. Se promovió internamente a 215 empleados, un 40% más que en 2023. El salario promedio aumentó un 6,8%, alcanzando los 1.150.000 pesos mensuales. Se implementó un programa de mentoría con 180 mentores voluntarios que acompañaron a 340 nuevos ingresos. La empresa invirtió 320 millones de pesos en beneficios como gimnasio corporativo, sala de lactancia y subsidio de transporte. El 92% de los empleados participó en al menos una actividad de bienestar durante el año.' },
      { id: 'rse', titulo: 'Responsabilidad Social Empresarial', contenido: 'La Fundación Comunidad Sostenible presentó su informe de RSE correspondiente a 2024. Las 50 empresas miembro del pacto global invirtieron un total de 95 millones de dólares en programas sociales, un 12% más que en 2023. Se ejecutaron 320 proyectos comunitarios beneficiando directamente a 180.000 personas en 120 comunas del país. Los focos principales fueron: educación (35%), salud (28%), vivienda (20%) y medio ambiente (17%). El programa de voluntariado corporativo movilizó a 12.500 trabajadores que donaron 95.000 horas de trabajo. Las empresas reportaron una reducción del 18% en el uso de plásticos de un solo uso y un aumento del 25% en el uso de energías renovables. Se reciclaron 48.000 toneladas de residuos industriales, un 15% más que en 2023. La inversión en proveedores locales alcanzó los 340 millones de dólares, beneficiando a 2.800 pequeñas y medianas empresas. El 80% de las empresas publicó reportes de sostenibilidad auditados externamente. La iniciativa "Primer Empleo Verde" capacitó a 850 jóvenes en oficios relacionados con energías limpias y economía circular.' }
    ],
    datosEstructurados: { reunionFecha:'15 de marzo de 2025', accionistasPresentes:42, accionistasTotales:50, votosFavor:38, votosContra:4, inversionInicial:2400, inicioEjecucion:'julio 2025', fechaOperativo:'diciembre 2026', reservasLiquidas:5800, bajaMargenes:3.2, grupoAlphaPorcentaje:18, grupoBetaPorcentaje:42, grupoGammaPorcentaje:22, otrosPorcentaje:18, ingresos2024:18300, utilidadNeta2024:2100, utilidadNeta2023:2450, colaboradores:740, sucursales:6, rotacion:8.5, rotacionIndustria:12, inversionCapacitacion2024:890, trabajadoresCapacitados:520, presupuestoCapacitacion2025:950, empleosDirectos:180, empleosIndirectos:300, fusionValor:8500, fusionEmpleadosA:3200, fusionEmpleadosB:1800, fusionTotalEmpleados:5000, fusionOficinasA:12, fusionOficinasB:8, fusionTotalOficinas:20, fusionPaisesA:5, fusionPaisesB:3, fusionAprobacion:94, fusionAhorros:450, fusionAhorrosInicio:2027, fusionReubicados:320, fusionEliminados:150, fusionCEO:'Roberto Mendoza', fusionPresidenta:'Carla Jiménez', fusionHolding:'TechSolutions Group', fusionPlazoAntimonopolio:'30 de junio de 2025', emisionesCO2_2024:40.5, emisionesCO2_2023:42.8, reduccionCO2:5.4, transporteEmisiones:58.2, bosqueHectareas2024:15.7, bosqueHectareas2023:14.3, aguaIndustrial2024:845, aguaIndustrial2023:890, diasMP25_2024:67, diasMP25_2023:52, inversionRenovables:1200, metaRenovable2030:40, servidoresTotal:7, servidoresComprometidos:3, datosEncriptados:1.2, clientesAfectados:45000, rescatePagado:350, datosRecuperados:92, empleadosDataSecure:2800, inversionFirewalls:4.2, ataqueHora:'03:47 AM', deteccionHora:'04:12 AM', contencionHoras:3, tasaAccidentabilidad2024:3.2, tasaAccidentabilidad2023:3.7, totalAccidentes:28400, accConstrManufact:62, licenciasSaludMental2024:40120, licenciasSaludMental2023:34000, aumentoLicencias:18, empresasFiscalizadas:12500, multasAplicadas:3200, cumplimientoISO_Mineria:85, cumplimientoISO_Retail:41, inversionPrevencion:680, trabajadoresCapacitados2024:125000, cursosOfrecidos:480, aumentoCapacitacion:15, certificacionPorcentaje:72, becasOtorgadas:5200, inversionBecas:18500, insercionLaboral:78, insercionTI:84, aumentoSalarial:23, presupuesto2025_educ:22000, exportacionesTotales:23400, aumentoExportaciones:8.3, exportCobre:11230, exportLitio:4800, exportFrutas:2900, exportSalmon:1600, importacionesTotales:20100, aumentoImportaciones:5.2, superavitComercial:3300, tipoCambio:920, satisfaccionLaboral2025:68, satisfaccionLaboral2024:71, encuestadosClima:85000, empresasEncuestadas:420, conformidadRemuneracion:41, trabajoHibrido:38, trabajoRemoto:12, trabajoPresencial:50, rotacionVoluntaria:22, segurosSalud:55, apoyoPsicologico:48, desconexionDigital:63, totalPatentes:3850, aumentoPatentes:11, patentesNacionales:42, patentesExtranjeras:58, patentesUChile:180, patentesPUC:155, patentesUdeC:120, inversionID_Porcentaje:0.38, inversionID_Millones:1140, promedioOCDE:2.7, fondoStartups:200, startupsFinanciadas:50, crecimientoEcommerce:24, paquetesMovidos:380, peakDiario:5.2, tiempoEntregaStgo:1.8, tiempoEntregaExtremo:5.4, costoLogisticoChile:11.2, costoLogisticoOCDE:9.5, nuevosCD:6, metrosCD:350000, inversionCD:420, reduccionKm:15, reduccionCombustible:12, efectividadPrimerIntento2024:87, efectividadPrimerIntento2023:82, presupuestoMarketing:850, impresionesCampana:28, clicsCampana:1.4, ctrCampana:5.2, conversionCampana:3.8, nuevosClientes:53200, cpaCampana:16, reduccionCPA:22, roiCampana:340, ingresosCampana:2.89, influencersContratados:12, retencion30dias:72, totalEmpleadosNexus:4200, sucursalesNexus:14, contratados2024:680, renuncias2024:490, rotacionNexus2024:11.7, rotacionNexus2023:14.2, tiempoContratacion2024:32, tiempoContratacion2023:45, contratacionMujeres:58, promovidosInternos:215, aumentoPromovidos:40, salarioPromedioNexus:1150000, aumentoSalarialNexus:6.8, mentores:180, nuevosAcompanados:340, inversionBeneficios:320, participacionBienestar:92, inversionRSE:95, aumentoRSE:12, proyectosComunitarios:320, beneficiariosRSE:180000, voluntariosRSE:12500, horasVoluntariado:95000, reduccionPlasticos:18, aumentoEnergiaRenovable:25, residuosReciclados:48000, aumentoReciclaje:15, inversionProveedoresLocales:340, pymesBeneficiadas:2800, reportesSostenibilidad:80, jovenesCapacitadosVerde:850 }
  },

  // ==========================================================
  // MÓDULO 4: BANCO INDUCTIVO
  // ==========================================================

  inductivo: {
    titulo: 'Razonamiento Inductivo',
    tiempo: 6 * 60,
    totalPreguntas: 30,
    instrucciones: '<p>Esta prueba mide tu capacidad para <strong>reconocer patrones</strong> entre un grupo de elementos.</p><p><strong>Duración:</strong> 6 minutos | <strong>Ejercicios:</strong> 30</p><p>Observa las <strong>dos tablas de referencia</strong>. Ellas comparten:</p><ul><li>La <strong>misma frecuencia</strong> de cada símbolo.</li><li>Las <strong>mismas posiciones</strong> del símbolo predominante, pero una es el <strong>espejo</strong> de la otra.</li></ul><p>Selecciona <strong>2 de las 4 opciones</strong> que siguen el mismo patrón.</p><p><span style="color:#FF6600;cursor:pointer;text-decoration:underline;" onclick="UI.mostrarPantalla(\'screen-estrategia\')">📖 Ver estrategia de resolución</span></p>',
    iconos: ['♦','♥','♠','♣','★','●','▲','■','◆','⬟'],
    reglas: [
      { id:'espejo_h', nombre:'Espejo Horizontal', descripcion:'Los íconos se invierten de izquierda a derecha en cada fila.', aplicar:function(grid){return grid.map(row=>[...row].reverse());} },
      { id:'espejo_v', nombre:'Espejo Vertical', descripcion:'Los íconos se invierten de arriba hacia abajo.', aplicar:function(grid){return [...grid].reverse();} },
      { id:'rotacion_90', nombre:'Rotación 90°', descripcion:'El grid rota 90 grados en sentido horario.', aplicar:function(grid){const n=grid.length,m=grid[0].length,result=[];for(let j=0;j<m;j++){result[j]=[];for(let i=n-1;i>=0;i--)result[j].push(grid[i][j]);}return result;} },
      { id:'traslacion', nombre:'Traslación Circular', descripcion:'Cada ícono se desplaza una posición a la derecha.', aplicar:function(grid){const flat=grid.flat(),last=flat.pop();flat.unshift(last);const cols=grid[0].length,result=[];for(let i=0;i<grid.length;i++)result.push(flat.slice(i*cols,(i+1)*cols));return result;} },
      { id:'incremento', nombre:'Incremento de Íconos', descripcion:'Cada celda duplica su ícono.', aplicar:function(grid){return grid.map(row=>row.map(icon=>icon+icon));} },
      { id:'cambio_par', nombre:'Cambio por Pares', descripcion:'♦↔♥ y ♠↔♣ se intercambian.', aplicar:function(grid){const mapa={'♦':'♥','♥':'♦','♠':'♣','♣':'♠'};return grid.map(row=>row.map(icon=>mapa[icon]||icon));} },
      { id:'reemplazo_pos', nombre:'Reemplazo por Posición', descripcion:'Esquinas se convierten en ★.', aplicar:function(grid){const n=grid.length,m=grid[0].length;return grid.map((row,i)=>row.map((icon,j)=>{(i===0&&(j===0||j===m-1))||(i===n-1&&(j===0||j===m-1))?1:0;return(i===0&&(j===0||j===m-1))||(i===n-1&&(j===0||j===m-1))?'★':icon;}));} },
      { id:'vacio_centro', nombre:'Vaciar Centro', descripcion:'La celda del centro se vacía.', aplicar:function(grid){const n=grid.length,m=grid[0].length;return grid.map((row,i)=>row.map((icon,j)=>{if(n===3&&m===3&&i===1&&j===1)return '·';return icon;}));} }
    ],
    gridsBase: {
      size2: [[['♦','♥'],['♠','♣']],[['★','●'],['▲','■']],[['♦','♠'],['♥','♣']],[['●','★'],['■','▲']],[['♣','♦'],['♥','♠']],[['▲','●'],['★','■']],[['♥','♠'],['♦','♣']],[['■','▲'],['●','★']]],
      size3: [[['♦','♥','♠'],['♣','★','●'],['▲','■','◆']],[['★','●','▲'],['■','◆','♦'],['♥','♠','♣']],[['●','♦','■'],['★','♣','▲'],['♥','◆','♠']],[['♠','★','♥'],['◆','●','♦'],['♣','▲','■']]]
    }
  },

  // ==========================================================
  // MÓDULO 5: INDUCTIVO FRECUENCIA/POSICIÓN
  // ==========================================================

  inductivo_freq: {
    titulo: 'Razonamiento Inductivo II',
    tiempo: 6 * 60,
    totalPreguntas: 12,
    instrucciones: `
      <p>Esta prueba mide tu capacidad para <strong>reconocer patrones de frecuencia y posición</strong> en cuadrículas de símbolos.</p>
      <p><strong>Duración:</strong> 6 minutos | <strong>Ejercicios:</strong> 12</p>
      <p>Observa las <strong>dos tablas de referencia</strong> (izquierda). Ellas comparten:</p>
      <ul>
        <li>La <strong>misma frecuencia</strong> de cada símbolo (cuántas veces aparece cada figura).</li>
        <li>Las <strong>mismas posiciones</strong> del símbolo predominante, pero una es el <strong>espejo</strong> de la otra (horizontal, vertical o 180°).</li>
      </ul>
      <p>Entre las <strong>cuatro opciones</strong>, <strong>selecciona las 2</strong> que también cumplen con el mismo patrón de frecuencia y posición.</p>
      <p><em>Consejo:</em> Primero cuenta cuántas veces se repite cada símbolo, luego observa dónde está ubicado el que más se repite.</p>
    `,
    iconos: ['♦', '♥', '♠', '♣', '★', '●', '▲', '■', '◆']
  },

  // ==========================================================
  // CUESTIONARIO TRABAJO
  // ==========================================================

  trabajo: {
    titulo: 'Comportamientos Relacionados con el Trabajo',
    tiempo: 7 * 60,
    totalPreguntas: 25,
    instrucciones: '<p>Este cuestionario mide tu <strong>comportamiento típico en el lugar de trabajo</strong>.</p><p><strong>Duración:</strong> 7 minutos | <strong>Preguntas:</strong> 25</p><p>Se mostrarán <strong>pares de afirmaciones</strong>. En cada par, elige con cuál estás <strong>más de acuerdo</strong>. No existen respuestas correctas o incorrectas.</p>',
    pares: [
            { a:'Prefiero trabajar en proyectos que requieran atención al detalle.', b:'Prefiero trabajar en proyectos que requieran visión global.' },
      { a:'Disfruto más cuando mi trabajo sigue un procedimiento establecido.', b:'Disfruto más cuando mi trabajo requiere adaptarse a cambios constantes.' },
      { a:'Me siento más cómodo/a tomando decisiones basadas en datos concretos.', b:'Me siento más cómodo/a tomando decisiones basadas en la intuición.' },
      { a:'Prefiero tener múltiples tareas simultáneamente.', b:'Prefiero enfocarme en una tarea a la vez y terminarla.' },
      { a:'Me motiva más alcanzar metas individuales.', b:'Me motiva más alcanzar metas de equipo.' },
      { a:'Soy más efectivo/a cuando tengo instrucciones claras.', b:'Soy más efectivo/a cuando tengo libertad para decidir cómo hacer mi trabajo.' },
      { a:'Prefiero roles donde pueda especializarme en un área.', b:'Prefiero roles donde pueda desempeñar múltiples funciones.' },
      { a:'Me siento más energizado/a al inicio del día.', b:'Me siento más energizado/a al final del día.' },
      { a:'Prefiero trabajar en entornos estructurados.', b:'Prefiero trabajar en entornos flexibles.' },
      { a:'Disfruto más cuando mi trabajo tiene un impacto inmediato.', b:'Disfruto más cuando mi trabajo tiene un impacto a largo plazo.' },
      { a:'Tiendo a ser más cauteloso/a al tomar decisiones.', b:'Tiendo a ser más arriesgado/a al tomar decisiones.' },
      { a:'Prefiero recibir retroalimentación frecuente sobre mi desempeño.', b:'Prefiero recibir retroalimentación solo en evaluaciones formales.' },
      { a:'Me siento más productivo/a trabajando solo/a.', b:'Me siento más productivo/a trabajando en equipo.' },
      { a:'Prefiero planificar mi trabajo con anticipación.', b:'Prefiero adaptar mi trabajo según surgen las necesidades.' },
      { a:'Disfruto más las tareas que requieren creatividad.', b:'Disfruto más las tareas que requieren precisión.' },
      { a:'Me siento más motivado/a cuando tengo plazos ajustados.', b:'Me siento más motivado/a cuando tengo plazos flexibles.' },
      { a:'Prefiero comunicarme de forma escrita.', b:'Prefiero comunicarme de forma verbal.' },
      { a:'Me siento más cómodo/a liderando proyectos.', b:'Me siento más cómodo/a siendo parte de un equipo.' },
      { a:'Disfruto más cuando mi trabajo es predecible.', b:'Disfruto más cuando mi trabajo es impredecible.' },
      { a:'Prefiero enfocarme en los detalles de un proyecto.', b:'Prefiero enfocarme en el panorama general de un proyecto.' },
      { a:'Soy más productivo/a en un ambiente tranquilo.', b:'Soy más productivo/a en un ambiente dinámico.' },
      { a:'Prefiero tomar decisiones de forma individual.', b:'Prefiero tomar decisiones de forma colaborativa.' },
      { a:'Disfruto más las tareas rutinarias.', b:'Disfruto más las tareas que presentan nuevos desafíos.' },
      { a:'Me siento más motivado/a por el reconocimiento externo.', b:'Me siento más motivado/a por mi satisfacción personal.' },
      { a:'Prefiero horarios de trabajo fijos.', b:'Prefiero horarios de trabajo flexibles.' },
      { a:'Soy más efectivo/a cuando tengo supervisión directa.', b:'Soy más efectivo/a cuando tengo autonomía.' },
      { a:'Prefiero resolver problemas de forma lógica.', b:'Prefiero resolver problemas de forma creativa.' },
      { a:'Disfruto más cuando ayudo a otros a desarrollar sus habilidades.', b:'Disfruto más cuando desarrollo mis propias habilidades.' },
      { a:'Me siento más cómodo/a con el cambio gradual.', b:'Me siento más cómodo/a con el cambio repentino.' },
      { a:'Prefiero trabajos que requieran movimiento físico.', b:'Prefiero trabajos que requieran estar sentado/a.' },
      { a:'Tiendo a ser más optimista sobre los resultados.', b:'Tiendo a ser más realista sobre los resultados.' },
      { a:'Prefiero tener una rutina diaria establecida.', b:'Prefiero tener una rutina diaria variable.' },
      { a:'Disfruto más cuando compito con otros.', b:'Disfruto más cuando colaboro con otros.' },
      { a:'Me siento más productivo/a en las mañanas.', b:'Me siento más productivo/a en las tardes o noches.' },
      { a:'Prefiero trabajos que requieran pensar estratégicamente.', b:'Prefiero trabajos que requieran pensar tácticamente.' },
      { a:'Me siento más cómodo/a con responsabilidades definidas.', b:'Me siento más cómodo/a con responsabilidades flexibles.' },
      { a:'Disfruto más cuando mi trabajo es teórico.', b:'Disfruto más cuando mi trabajo es práctico.' },
      { a:'Prefiero tener metas a corto plazo.', b:'Prefiero tener metas a largo plazo.' },
      { a:'Soy más efectivo/a bajo presión.', b:'Soy más efectivo/a en situaciones relajadas.' },
      { a:'Prefiero trabajar en organizaciones grandes.', b:'Prefiero trabajar en organizaciones pequeñas.' },
      { a:'Disfruto más cuando mi trabajo implica viajes.', b:'Disfruto más cuando mi trabajo es en una ubicación fija.' },
      { a:'Me siento más motivado/a por el dinero.', b:'Me siento más motivado/a por el propósito.' },
      { a:'Prefiero roles donde pueda tomar decisiones rápidas.', b:'Prefiero roles donde pueda analizar antes de decidir.' },
      { a:'Disfruto más las tareas que requieren habilidad técnica.', b:'Disfruto más las tareas que requieren habilidad interpersonal.' },
      { a:'Prefiero trabajar en áreas especializadas.', b:'Prefiero trabajar en áreas generales.' },
      { a:'Me siento más cómodo/a con la incertidumbre.', b:'Me siento más cómodo/a con la certeza.' },
      { a:'Disfruto más cuando tengo un horario flexible.', b:'Disfruto más cuando tengo un horario estructurado.' },
      { a:'Prefiero aprender haciendo.', b:'Prefiero aprender estudiando primero.' },
      { a:'Me siento más motivado/a por los desafíos.', b:'Me siento más motivado/a por la estabilidad.' },
      { a:'Prefiero tener un rol especializado.', b:'Prefiero tener un rol generalista.' },
      { a:'Prefiero resolver conflictos directamente.', b:'Prefiero evitar conflictos cuando sea posible.' },
      { a:'Disfruto más cuando doy instrucciones a otros.', b:'Disfruto más cuando recibo instrucciones de otros.' },
      { a:'Me siento más cómodo/a expresando desacuerdo.', b:'Me siento más cómodo/a manteniendo la armonía.' },
      { a:'Prefiero trabajar con personas que piensan como yo.', b:'Prefiero trabajar con personas que piensan diferente a mí.' },
      { a:'Disfruto más las conversaciones formales.', b:'Disfruto más las conversaciones informales.' },
      { a:'Soy más efectivo/a cuando recibo reconocimiento público.', b:'Soy más efectivo/a cuando recibo reconocimiento privado.' },
      { a:'Prefiero supervisar equipos pequeños.', b:'Prefiero supervisar equipos grandes.' },
      { a:'Me siento más cómodo/a delegando tareas.', b:'Me siento más cómodo/a haciendo las tareas yo mismo/a.' },
      { a:'Disfruto más el trabajo en equipo colaborativo.', b:'Disfruto más el trabajo en equipo competitivo.' },
      { a:'Prefiero que mis superiores sean directos.', b:'Prefiero que mis superiores sean diplomáticos.' },
      { a:'Soy más productivo/a cuando socializo con colegas.', b:'Soy más productivo/a cuando me mantengo enfocado/a en mi trabajo.' },
      { a:'Disfruto más cuando ayudo a resolver problemas de otros.', b:'Disfruto más cuando resuelvo mis propios problemas.' },
      { a:'Prefiero trabajar con personas mayores que yo.', b:'Prefiero trabajar con personas más jóvenes que yo.' },
      { a:'Me siento más cómodo/a en reuniones grandes.', b:'Me siento más cómodo/a en reuniones pequeñas.' },
      { a:'Prefiero líderes que tomen decisiones rápidas.', b:'Prefiero líderes que consulten al equipo antes de decidir.' },
      { a:'Disfruto más cuando tengo compañeros de trabajo cercanos.', b:'Disfruto más cuando mantengo distancia profesional.' },
      { a:'Soy más efectivo/a cuando recibo críticas constructivas.', b:'Soy más efectivo/a cuando recibo elogios.' },
      { a:'Prefiero trabajar con personas estructuradas.', b:'Prefiero trabajar con personas flexibles.' },
      { a:'Me siento más motivado/a por el trabajo en equipo.', b:'Me siento más motivado/a por el trabajo individual.' },
      { a:'Disfruto más cuando enseño a otros.', b:'Disfruto más cuando aprendo de otros.' },
      { a:'Prefiero que mis supervisores sean exigentes.', b:'Prefiero que mis supervisores sean comprensivos.' },
      { a:'Soy más efectivo/a cuando hay competencia sana.', b:'Soy más efectivo/a cuando hay cooperación total.' },
      { a:'Me siento más cómodo/a estableciendo límites.', b:'Me siento más cómodo/a siendo flexible con los límites.' },
      { a:'Prefiero tratar con personas extrovertidas.', b:'Prefiero tratar con personas introvertidas.' },
      { a:'Disfruto más cuando resuelvo disputas entre colegas.', b:'Disfruto más cuando evito involucrarme en disputas.' },
      { a:'Prefiero que mi trabajo sea evaluado por resultados.', b:'Prefiero que mi trabajo sea evaluado por el esfuerzo.' },
      { a:'Soy más productivo/a cuando tengo compañeros proactivos.', b:'Soy más productivo/a cuando tengo compañeros que siguen instrucciones.' },
      { a:'Me siento más cómodo/a en una jerarquía clara.', b:'Me siento más cómodo/a en una estructura plana.' },
      { a:'Disfruto más cuando represento a mi equipo.', b:'Disfruto más cuando apoyo desde atrás.' },
      { a:'Prefiero trabajar con personas de mi mismo género.', b:'Prefiero trabajar con personas de diferentes géneros.' },
      { a:'Soy más efectivo/a cuando recibo instrucciones escritas.', b:'Soy más efectivo/a cuando recibo instrucciones verbales.' },
      { a:'Me siento más motivado/a cuando mi supervisor confía en mí.', b:'Me siento más motivado/a cuando mi supervisor me supervisa de cerca.' },
      { a:'Prefiero trabajar con personas que toman riesgos calculados.', b:'Prefiero trabajar con personas que evitan riesgos.' },
      { a:'Disfruto más cuando trabajo con personas diversas.', b:'Disfruto más cuando trabajo con personas similares.' },
      { a:'Prefiero reuniones con agenda clara.', b:'Prefiero reuniones abiertas a la discusión.' },
      { a:'Soy más productivo/a cuando hay un buen clima laboral.', b:'Soy más productivo/a cuando hay resultados, sin importar el clima.' },
      { a:'Me siento más cómodo/a diciendo "no" a solicitudes.', b:'Me siento más cómodo/a diciendo "sí" a solicitudes.' },
      { a:'Prefiero trabajar con personas que tienen mi misma experiencia.', b:'Prefiero trabajar con personas de diferentes niveles de experiencia.' },
      { a:'Disfruto más cuando participo en actividades sociales del trabajo.', b:'Disfruto más cuando no participo en actividades sociales del trabajo.' },
      { a:'Soy más efectivo/a cuando hay procesos claros.', b:'Soy más efectivo/a cuando puedo crear mis propios procesos.' },
      { a:'Me siento más motivado/a por el reconocimiento de mis pares.', b:'Me siento más motivado/a por el reconocimiento de mis superiores.' },
      { a:'Prefiero trabajar con personas que son puntuales.', b:'Prefiero trabajar con personas que son flexibles con el tiempo.' },
      { a:'Disfruto más cuando tengo un mentor o guía.', b:'Disfruto más cuando soy autodidacta.' },
      { a:'Soy más productivo/a cuando hay expectativas claras.', b:'Soy más productivo/a cuando hay espacio para la innovación.' },
      { a:'Me siento más cómodo/a en culturas laborales formales.', b:'Me siento más cómodo/a en culturas laborales informales.' },
      { a:'Prefiero trabajar con personas que son muy detallistas.', b:'Prefiero trabajar con personas que son visionarias.' },
      { a:'Disfruto más cuando ayudo a otros a crecer profesionalmente.', b:'Disfruto más cuando me enfoco en mi propio crecimiento.' },
      { a:'Prefiero que las decisiones se tomen por consenso.', b:'Prefiero que las decisiones se tomen por autoridad.' },
      { a:'Soy más efectivo/a cuando hay reglas claras.', b:'Soy más efectivo/a cuando hay libertad para interpretar reglas.' },
      { a:'Me siento más motivado/a cuando veo el impacto de mi trabajo en otros.', b:'Me siento más motivado/a cuando veo el impacto de mi trabajo en los resultados.' },
      { a:'Soy una persona muy organizada en mi trabajo.', b:'Soy una persona flexible en mi organización del trabajo.' },
      { a:'Prefiero mantener mi espacio de trabajo ordenado.', b:'No me molesta tener un espacio de trabajo desordenado.' },
      { a:'Planifico mis tareas con mucha anticipación.', b:'Planifico mis tareas a medida que surgen.' },
      { a:'Soy más efectivo/a cuando sigo un horario estricto.', b:'Soy más efectivo/a cuando tengo un horario flexible.' },
      { a:'Me concentro mejor en silencio.', b:'Me concentro mejor con música o ruido ambiental.' },
      { a:'Prefiero trabajar con múltiples pestañas abiertas.', b:'Prefiero trabajar con una sola pantalla a la vez.' },
      { a:'Termino las tareas antes de los plazos.', b:'Termino las tareas justo en los plazos.' },
      { a:'Soy más productivo/a cuando tengo una lista de tareas.', b:'Soy más productivo/a cuando improviso mis tareas.' },
      { a:'Me siento más cómodo/a con la ambigüedad.', b:'Me siento más cómodo/a con la claridad.' },
      { a:'Prefiero trabajar en periodos cortos de alta intensidad.', b:'Prefiero trabajar en periodos largos de esfuerzo constante.' },
      { a:'Soy más efectivo/a cuando tomo descansos frecuentes.', b:'Soy más efectivo/a cuando trabajo de forma continua.' },
      { a:'Me siento más motivado/a por tareas que requieren atención sostenida.', b:'Me siento más motivado/a por tareas que requieren atención intermitente.' },
      { a:'Prefiero priorizar tareas urgentes.', b:'Prefiero priorizar tareas importantes.' },
      { a:'Soy más productivo/a cuando tengo un propósito claro.', b:'Soy más productivo/a cuando tengo un procedimiento claro.' },
      { a:'Me siento más cómodo/a con la repetición.', b:'Me siento más cómodo/a con la variedad.' },
      { a:'Prefiero tener un método de trabajo establecido.', b:'Prefiero experimentar con diferentes métodos de trabajo.' },
      { a:'Soy más efectivo/a cuando me enfoco en una cosa a la vez.', b:'Soy más efectivo/a cuando realizo varias tareas simultáneamente.' },
      { a:'Me siento más motivado/a por el progreso gradual.', b:'Me siento más motivado/a por los logros repentinos.' },
      { a:'Prefiero tareas que requieran análisis profundo.', b:'Prefiero tareas que requieran respuestas rápidas.' },
      { a:'Soy más productivo/a cuando tengo límites claros.', b:'Soy más productivo/a cuando tengo libertad total.' },
      { a:'Me siento más cómodo/a con herramientas tradicionales.', b:'Me siento más cómodo/a con nuevas tecnologías.' },
      { a:'Prefiero trabajar con procesos lineales.', b:'Prefiero trabajar con procesos iterativos.' },
      { a:'Soy más efectivo/a cuando trabajo con datos concretos.', b:'Soy más efectivo/a cuando trabajo con conceptos abstractos.' },
      { a:'Me siento más motivado/a por tareas que puedo completar rápido.', b:'Me siento más motivado/a por tareas que requieren tiempo prolongado.' },
      { a:'Prefiero tener un flujo de trabajo constante.', b:'Prefiero tener un flujo de trabajo variable.' },
      { a:'Soy más productivo/a cuando tengo equipo actualizado.', b:'Soy más productivo/a cuando tengo equipo conocido.' },
      { a:'Me siento más cómodo/a con la rutina.', b:'Me siento más cómodo/a con la novedad.' },
      { a:'Prefiero organizar mi trabajo por proyectos.', b:'Prefiero organizar mi trabajo por tareas diarias.' },
      { a:'Soy más efectivo/a cuando planifico en detalle.', b:'Soy más efectivo/a cuando planifico en líneas generales.' },
      { a:'Me siento más motivado/a cuando veo resultados inmediatos.', b:'Me siento más motivado/a cuando veo resultados a largo plazo.' },
      { a:'Prefiero trabajar con herramientas digitales.', b:'Prefiero trabajar con herramientas físicas.' },
      { a:'Soy más productivo/a cuando estoy en movimiento.', b:'Soy más productivo/a cuando estoy sentado/a.' },
      { a:'Me siento más cómodo/a con el trabajo independiente.', b:'Me siento más cómodo/a con el trabajo interdependiente.' },
      { a:'Prefiero tener objetivos semanales.', b:'Prefiero tener objetivos mensuales.' },
      { a:'Soy más efectivo/a cuando hay presión externa.', b:'Soy más efectivo/a cuando hay automotivación.' },
      { a:'Me siento más motivado/a por la estabilidad laboral.', b:'Me siento más motivado/a por el crecimiento profesional.' },
      { a:'Prefiero trabajar en el mismo lugar todos los días.', b:'Prefiero trabajar en diferentes ubicaciones.' },
      { a:'Soy más productivo/a cuando tengo todas las herramientas necesarias.', b:'Soy más productivo/a cuando tengo recursos limitados.' },
      { a:'Me siento más cómodo/a con la previsibilidad.', b:'Me siento más cómodo/a con la espontaneidad.' },
      { a:'Prefiero tener un horario fijo de inicio y fin.', b:'Prefiero tener horarios flexibles según las tareas.' },
      { a:'Soy más efectivo/a cuando reviso mi trabajo varias veces.', b:'Soy más efectivo/a cuando confío en mi primera versión.' },
      { a:'Me siento más motivado/a por tareas creativas.', b:'Me siento más motivado/a por tareas técnicas.' },
      { a:'Prefiero resolver problemas con lógica.', b:'Prefiero resolver problemas con intuición.' },
      { a:'Soy más productivo/a cuando hay estructura.', b:'Soy más productivo/a cuando hay flexibilidad.' },
      { a:'Me siento más cómodo/a en trabajos con horario fijo.', b:'Me siento más cómodo/a en trabajos por objetivos.' },
      { a:'Prefiero tareas que requieran concentración profunda.', b:'Prefiero tareas que requieran atención dispersa.' },
      { a:'Soy más efectivo/a cuando tengo un modelo a seguir.', b:'Soy más efectivo/a cuando creo mi propio camino.' },
      { a:'Me siento más motivado/a por el aprendizaje continuo.', b:'Me siento más motivado/a por la aplicación práctica.' },
      { a:'Prefiero trabajar en equipo con roles claros.', b:'Prefiero trabajar en equipo con roles flexibles.' },
      { a:'Soy más productivo/a cuando hay incentivos externos.', b:'Soy más productivo/a cuando hay satisfacción interna.' },
      { a:'Me mantengo calmado/a ante situaciones de crisis.', b:'Me siento ansioso/a ante situaciones de crisis.' },
      { a:'Prefiero enfrentar los problemas de inmediato.', b:'Prefiero tomarme un tiempo para pensar antes de actuar.' },
      { a:'Soy más efectivo/a cuando hay presión de tiempo.', b:'Soy más efectivo/a cuando no hay presión de tiempo.' },
      { a:'Aprendo más de mis errores.', b:'Aprendo más de mis éxitos.' },
      { a:'Me siento más motivado/a por los desafíos.', b:'Me siento más motivado/a por la comodidad.' },
      { a:'Prefiero situaciones predecibles.', b:'Prefiero situaciones impredecibles.' },
      { a:'Soy más efectivo/a cuando hay reglas claras.', b:'Soy más efectivo/a cuando puedo improvisar.' },
      { a:'Me recupero rápido de los fracasos.', b:'Me toma tiempo recuperarme de los fracasos.' },
      { a:'Prefiero pedir ayuda cuando la necesito.', b:'Prefiero resolver los problemas solo/a.' },
      { a:'Soy más efectivo/a con fechas límite.', b:'Soy más efectivo/a sin fechas límite.' },
      { a:'Me siento más motivado/a cuando todo está bajo control.', b:'Me siento más motivado/a cuando hay elementos fuera de control.' },
      { a:'Prefiero enfrentar críticas constructivas.', b:'Prefiero evitar situaciones de crítica.' },
      { a:'Soy más productivo/a bajo presión positiva.', b:'Soy más productivo/a bajo presión negativa.' },
      { a:'Me siento más cómodo/a con la incertidumbre.', b:'Me siento más cómodo/a con la certeza.' },
      { a:'Prefiero abordar problemas grandes primero.', b:'Prefiero abordar problemas pequeños primero.' },
      { a:'Soy más efectivo/a cuando hay mucho trabajo.', b:'Soy más efectivo/a cuando hay carga de trabajo moderada.' },
      { a:'Aprendo mejor de la experiencia directa.', b:'Aprendo mejor de la teoría previa.' },
      { a:'Me siento más motivado/a por metas ambiciosas.', b:'Me siento más motivado/a por metas alcanzables.' },
      { a:'Prefiero ser el/la que toma decisiones difíciles.', b:'Prefiero que otros tomen decisiones difíciles.' },
      { a:'Soy más productivo/a en entornos colaborativos.', b:'Soy más productivo/a en entornos competitivos.' },
      { a:'Me siento más cómodo/a con el cambio lento.', b:'Me siento más cómodo/a con el cambio rápido.' },
      { a:'Prefiero prevenir problemas.', b:'Prefiero resolver problemas cuando surgen.' },
      { a:'Soy más efectivo/a cuando hay mucho apoyo.', b:'Soy más efectivo/a cuando trabajo independiente.' },
      { a:'Me siento más motivado/a por la estabilidad.', b:'Me siento más motivado/a por el riesgo calculado.' },
      { a:'Prefiero trabajar en proyectos de corta duración.', b:'Prefiero trabajar en proyectos de larga duración.' },
      { a:'Soy más productivo/a cuando hay feedback constante.', b:'Soy más productivo/a cuando hay feedback ocasional.' },
      { a:'Me siento más cómodo/a expresando emociones.', b:'Me siento más cómodo/a controlando emociones.' },
      { a:'Prefiero analizar todas las opciones antes de decidir.', b:'Prefiero decidir rápido y ajustar después.' },
      { a:'Soy más efectivo/a en situaciones de alto estrés.', b:'Soy más efectivo/a en situaciones de bajo estrés.' },
      { a:'Me siento más motivado/a por el trabajo significativo.', b:'Me siento más motivado/a por el trabajo bien pagado.' },
      { a:'Prefiero la estabilidad laboral.', b:'Prefiero la innovación laboral.' },
      { a:'Soy más productivo/a cuando confío en mis habilidades.', b:'Soy más productivo/a cuando busco validación externa.' },
      { a:'Me siento más cómodo/a en la rutina.', b:'Me siento más cómodo/a en el caos controlado.' },
      { a:'Prefiero solucionar problemas técnicos.', b:'Prefiero solucionar problemas interpersonales.' },
      { a:'Soy más efectivo/a cuando tengo pocas distracciones.', b:'Soy más efectivo/a cuando hay dinamismo constante.' },
      { a:'Me siento más motivado/a por el progreso diario.', b:'Me siento más motivado/a por los grandes logros.' },
      { a:'Prefiero tomar decisiones basadas en hechos.', b:'Prefiero tomar decisiones basadas en emociones.' },
      { a:'Soy más productivo/a cuando tengo libertad creativa.', b:'Soy más productivo/a cuando tengo directrices claras.' },
      { a:'Me siento más cómodo/a con la responsabilidad individual.', b:'Me siento más cómodo/a con la responsabilidad compartida.' },
      { a:'Prefiero el trabajo que requiere precisión.', b:'Prefiero el trabajo que requiere velocidad.' },
      { a:'Soy más efectivo/a en entornos estructurados.', b:'Soy más efectivo/a en entornos flexibles.' },
      { a:'Me siento más motivado/a por el poder.', b:'Me siento más motivado/a por la influencia.' },
      { a:'Prefiero trabajar en proyectos individuales.', b:'Prefiero trabajar en proyectos grupales.' },
      { a:'Soy más productivo/a cuando tengo recursos abundantes.', b:'Soy más productivo/a cuando tengo recursos limitados.' },
      { a:'Me siento más cómodo/a con la autoridad.', b:'Me siento más cómodo/a con la horizontalidad.' },
      { a:'Prefiero resolver conflictos de forma directa.', b:'Prefiero resolver conflictos de forma indirecta.' },
      { a:'Soy más efectivo/a cuando tengo apoyo técnico.', b:'Soy más efectivo/a cuando tengo apoyo humano.' },
      { a:'Me siento más motivado/a por la excelencia.', b:'Me siento más motivado/a por la eficiencia.' },
      { a:'Prefiero tomar riesgos calculados.', b:'Prefiero evitar riesgos innecesarios.' },
      { a:'Soy más productivo/a cuando tengo un propósito claro.', b:'Soy más productivo/a cuando tengo tareas definidas.' },
      { a:'Valoro más la seguridad laboral.', b:'Valoro más el crecimiento profesional.' },
      { a:'Me motiva más hacer un impacto positivo.', b:'Me motiva más alcanzar la excelencia profesional.' },
      { a:'Valoro más el equilibrio trabajo-vida personal.', b:'Valoro más el éxito profesional.' },
      { a:'Me siento más realizado/a cuando contribuyo al equipo.', b:'Me siento más realizado/a cuando destaco individualmente.' },
      { a:'Valoro más la honestidad en el trabajo.', b:'Valoro más la eficiencia en el trabajo.' },
      { a:'Me motiva más el reconocimiento de mi trabajo.', b:'Me motiva más la satisfacción personal de mi trabajo.' },
      { a:'Valoro más tener autonomía.', b:'Valoro más tener dirección clara.' },
      { a:'Me siento más motivado/a por la responsabilidad.', b:'Me siento más motivado/a por la libertad.' },
      { a:'Valoro más la innovación.', b:'Valoro más la tradición.' },
      { a:'Me motiva más resolver problemas complejos.', b:'Me motiva más realizar tareas conocidas.' },
      { a:'Valoro más el desarrollo profesional continuo.', b:'Valoro más la estabilidad profesional.' },
      { a:'Me siento más motivado/a por la colaboración.', b:'Me siento más motivado/a por la competencia.' },
      { a:'Valoro más la transparencia.', b:'Valoro más la discreción.' },
      { a:'Me motiva más el trabajo en equipo.', b:'Me motiva más el logro individual.' },
      { a:'Valoro más los resultados.', b:'Valoro más los procesos.' },
      { a:'Me siento más motivado/a por la creatividad.', b:'Me siento más motivado/a por la lógica.' },
      { a:'Valoro más la justicia.', b:'Valoro más la eficiencia.' },
      { a:'Me motiva más el aprendizaje.', b:'Me motiva más la aplicación práctica.' },
      { a:'Valoro más la independencia.', b:'Valoro más la interdependencia.' },
      { a:'Me siento más motivado/a por el servicio a otros.', b:'Me siento más motivado/a por el éxito personal.' },
      { a:'Valoro más la precisión.', b:'Valoro más la velocidad.' },
      { a:'Me motiva más la ambición.', b:'Me motiva más la satisfacción.' },
      { a:'Valoro más la innovación.', b:'Valoro más la mejora continua.' },
      { a:'Me siento más motivado/a por la oportunidad de liderar.', b:'Me siento más motivado/a por la oportunidad de contribuir.' },
      { a:'Valoro más la equidad.', b:'Valoro más el mérito.' },
      { a:'Me motiva más la variedad.', b:'Me motiva más la estabilidad.' },
      { a:'Valoro más la comunicación abierta.', b:'Valoro más la comunicación formal.' },
      { a:'Me siento más motivado/a por la oportunidad de crecer.', b:'Me siento más motivado/a por la oportunidad de estabilizarme.' },
      { a:'Valoro más la adaptabilidad.', b:'Valoro más la consistencia.' },
      { a:'Me motiva más el desafío intelectual.', b:'Me motiva más el desafío práctico.' },
      { a:'Valoro más la transparencia en la toma de decisiones.', b:'Valoro más la rapidez en la toma de decisiones.' },
      { a:'Me siento más motivado/a por la autonomía.', b:'Me siento más motivado/a por la seguridad.' },
      { a:'Valoro más la colaboración.', b:'Valoro más la independencia.' },
      { a:'Me motiva más el reconocimiento público.', b:'Me motiva más la satisfacción personal.' },
      { a:'Valoro más la flexibilidad.', b:'Valoro más la estructura.' },
      { a:'Me siento más motivado/a por la oportunidad de viajar.', b:'Me siento más motivado/a por la oportunidad de establecerme.' },
      { a:'Valoro más el trabajo en equipo.', b:'Valoro más el trabajo individual.' },
      { a:'Me motiva más el impacto social de mi trabajo.', b:'Me motiva más el impacto económico de mi trabajo.' },
      { a:'Valoro más la creatividad.', b:'Valoro más el orden.' },
      { a:'Me siento más motivado/a cuando hay diversidad de tareas.', b:'Me siento más motivado/a cuando hay especialización de tareas.' },
      { a:'Valoro más la independencia de criterio.', b:'Valoro más la alineación con la organización.' },
      { a:'Me motiva más el aprendizaje continuo.', b:'Me motiva más la aplicación de lo aprendido.' },
      { a:'Valoro más la transparencia financiera.', b:'Valoro más la estabilidad financiera.' },
      { a:'Me siento más motivado/a cuando lidero equipos.', b:'Me siento más motivado/a cuando formo parte de equipos.' },
      { a:'Valoro más la excelencia.', b:'Valoro más la accesibilidad.' },
      { a:'Me motiva más la oportunidad de especializarme.', b:'Me motiva más la oportunidad de diversificarme.' },
      { a:'Valoro más la confianza en el equipo.', b:'Valoro más la competencia en el equipo.' },
      { a:'Me siento más motivado/a cuando veo resultados.', b:'Me siento más motivado/a cuando veo progreso.' },
      { a:'Valoro más la autenticidad.', b:'Valoro más la profesionalidad.' },
      { a:'Me siento más motivado/a cuando tengo un impacto significativo.', b:'Me siento más motivado/a cuando tengo estabilidad laboral.' }
    ]
  },

  // ==========================================================
  // CUESTIONARIO SITUACIONAL
  // ==========================================================

  situacional: {
    titulo: 'Comportamiento Situacional',
    tiempo: 7 * 60,
    totalPreguntas: 25,
    instrucciones: '<p>Este cuestionario mide tu <strong>comportamiento en situaciones cotidianas</strong>.</p><p><strong>Duración:</strong> 7 minutos | <strong>Preguntas:</strong> 25</p><p>Para cada afirmación, indica <strong>en qué medida te describe</strong> en comparación con otras personas.</p><ul><li><strong>Menos que los demás:</strong> La afirmación te describe menos que al promedio.</li><li><strong>Igual que los demás:</strong> La afirmación te describe de forma similar al promedio.</li><li><strong>Más que los demás:</strong> La afirmación te describe más que al promedio.</li></ul>',
    afirmaciones: [
            'He tomado objetos de la oficina para uso personal sin pedir permiso.',
      'He justificado ausencias laborales con razones falsas.',
      'He manipulado reportes para mostrar mejores resultados de los reales.',
      'He ocultado errores para evitar consecuencias negativas.',
      'He utilizado tiempo de trabajo para asuntos personales sin autorización.',
      'He compartido información confidencial con personas no autorizadas.',
      'He falsificado firmas en documentos administrativos.',
      'He utilizado recursos de la empresa para fines personales.',
      'He mentido sobre mi carga de trabajo para evitar responsabilidades.',
      'He participado en acciones que violan políticas internas de la organización.',
      'He aceptado regalos o favores que podrían comprometer mi objetividad.',
      'He tomado crédito por el trabajo de otros compañeros.',
      'He manipulado registros de asistencia.',
      'He revelado información privilegiada para beneficio personal.',
      'He creado gastos ficticios en reportes de viáticos.',
      'He utilizado el nombre de la empresa para fines personales.',
      'He ocultado información relevante en auditorías.',
      'He participado en prácticas de competencia desleal.',
      'He modificado resultados de evaluaciones.',
      'He utilizado software no autorizado en equipos de la empresa.',
      'He compartido contraseñas con personas no autorizadas.',
      'He descargado contenido inapropiado en equipos de trabajo.',
      'He evitado reportar incumplimientos de compañeros.',
      'He aceptado sobornos o incentivos inapropiados.',
      'He creado documentos falsos para justificar gastos.',
      'He manipulado sistemas de control de inventario.',
      'He ocultado conflictos de interés en decisiones laborales.',
      'He utilizado información de clientes para beneficio propio.',
      'He alterado fechas en documentos oficiales.',
      'He realizado compras no autorizadas con fondos de la empresa.',
      'He omitido información en reportes de cumplimiento.',
      'He utilizado vehículos de la empresa para fines personales sin autorización.',
      'He manipulado evaluaciones de desempeño.',
      'He creado cuentas falsas en sistemas corporativos.',
      'He ocultado infracciones menores a mis superiores.',
      'He utilizado tarjetas de crédito corporativas para gastos personales.',
      'He alterado registros de horas trabajadas.',
      'He participado en acuerdos que benefician a terceros a costa de la empresa.',
      'He eliminado evidencia de errores cometidos.',
      'He proporcionado información falsa en procesos de selección.',
      'He utilizado contactos de trabajo para beneficios externos.',
      'He compartido estrategias de la empresa con competidores.',
      'He creado copias no autorizadas de documentos confidenciales.',
      'He evitado declarar ingresos adicionales relacionados con el trabajo.',
      'He participado en actividades que generan conflicto de interés.',
      'He utilizado tiempo de trabajo para actividades políticas o religiosas.',
      'He ocultado enfermedades o condiciones que afectan mi desempeño.',
      'He aceptado comisiones por recomendaciones de productos.',
      'He manipulado sistemas de acceso para favorecer a otros.',
      'He omitido reportar incidentes de seguridad.',
      'He hecho comentarios ofensivos sobre compañeros de trabajo.',
      'He participado en chismes o rumores sobre colegas.',
      'He ignorado las opiniones de otros en reuniones de equipo.',
      'He tratado a colegas de manera descortés.',
      'He hecho bromas inapropiadas en el lugar de trabajo.',
      'He cuestionado la competencia de mis compañeros públicamente.',
      'He excluido a colegas de actividades importantes.',
      'He hecho comentarios sobre la apariencia física de otros.',
      'He minimizado las contribuciones de mis compañeros.',
      'He creado un ambiente hostil para ciertos compañeros.',
      'He interrumpido frecuentemente a otros en reuniones.',
      'He ignorado solicitudes de ayuda de compañeros.',
      'He hecho comentarios discriminatorios en el trabajo.',
      'He evitado colaborar con ciertos compañeros intencionalmente.',
      'He divulgado información personal de colegas sin su consentimiento.',
      'He atribuido intenciones negativas a acciones de otros.',
      'He creado facciones o grupos excluyentes en el equipo.',
      'He hecho comentarios sarcásticos sobre el trabajo de otros.',
      'He negado asistencia a colegas que la necesitaban.',
      'He hecho comentarios sobre antecedentes personales de compañeros.',
      'He utilizado lenguaje inapropiado en el lugar de trabajo.',
      'He tomado decisiones que afectan a otros sin consultarles.',
      'He invalidado sentimientos o preocupaciones de colegas.',
      'He hecho comparaciones desfavorables entre compañeros.',
      'He ignorado normas de convivencia en el equipo.',
      'He causado conflictos innecesarios en el trabajo.',
      'He hecho comentarios sobre orientación sexual de otros.',
      'He participado en acoso laboral (activo o pasivo).',
      'He creado obstáculos para el trabajo de otros intencionalmente.',
      'He hecho comentarios sobre creencias religiosas de otros.',
      'He utilizado posición jerárquica para intimidar a otros.',
      'He ignorado sugerencias de colegas sin consideración.',
      'He hecho comentarios sobre discapacidades de otros.',
      'He compartido información confidencial de otros sin permiso.',
      'He creado tensiones innecesarias en el equipo.',
      'He hecho comentarios sobre edad de otros en el trabajo.',
      'He cuestionado la autoridad de supervisores públicamente.',
      'He participado en comportamientos pasivo-agresivos.',
      'He hecho comentarios sobre nacionalidad u origen de otros.',
      'He evitado interactuar con ciertos grupos en el trabajo.',
      'He hecho comentarios negativos sobre estatus socioeconómico de otros.',
      'He creado un clima de desconfianza en el equipo.',
      'He hecho comentarios sobre afiliaciones políticas de otros.',
      'He utilizado posición para favorecer a ciertos compañeros.',
      'He generado malentendidos deliberadamente entre colegas.',
      'He hecho comentarios sobre habilidades intelectuales de otros.',
      'He participado en "mobbing" o acoso grupal.',
      'He hecho comentarios sobre el acento o forma de hablar de otros.',
      'He creado un ambiente de competencia destructiva.',
      'He utilizado comunicación agresiva con compañeros.',
      'He violado políticas explícitas de la organización.',
      'He llegado tarde al trabajo sin justificación.',
      'He salido antes del horario sin autorización.',
      'He extendido pausas y descansos más allá de lo permitido.',
      'He incumplido plazos de entrega establecidos.',
      'He evitado seguir procedimientos de seguridad.',
      'He utilizado dispositivos personales durante horas de trabajo.',
      'He incumplido normas de vestimenta o presentación.',
      'He realizado actividades no relacionadas con el trabajo en horario laboral.',
      'He ignorado protocolos de emergencia.',
      'He incumplido normas de higiene y seguridad.',
      'He utilizado sistemas de la empresa sin autorización.',
      'He omitido registros obligatorios de actividades.',
      'He incumplido políticas de uso de internet.',
      'He evitado llenar formularios requeridos.',
      'He incumplido normas de confidencialidad.',
      'He ignorado procedimientos de calidad establecidos.',
      'He utilizado redes sociales durante horas de trabajo.',
      'He incumplido políticas de asistencia.',
      'He evitado participar en capacitaciones obligatorias.',
      'He incumplido normas de manejo de residuos.',
      'He utilizado equipos sin la capacitación requerida.',
      'He incumplido políticas de almacenamiento de datos.',
      'He ignorado procedimientos de control de acceso.',
      'He incumplido normas de etiqueta en comunicaciones.',
      'He evitado el uso de equipos de protección personal.',
      'He incumplido políticas de viajes y viáticos.',
      'He realizado modificaciones no autorizadas a sistemas.',
      'He incumplido normas de manejo de productos químicos.',
      'He ignorado procedimientos de mantenimiento preventivo.',
      'He incumplido políticas de uso de vehículos.',
      'He evitado reportar accidentes o incidentes.',
      'He incumplido normas de primeros auxilios.',
      'He utilizado herramientas sin autorización.',
      'He incumplido políticas de compras.',
      'He ignorado procedimientos de manejo de efectivo.',
      'He incumplido normas de almacenamiento.',
      'He utilizado sistemas de monitoreo sin autorización.',
      'He incumplido políticas de donaciones y patrocinios.',
      'He evitado seguir procedimientos de respaldo de datos.',
      'He incumplido normas de protección de datos personales.',
      'He utilizado sistemas de comunicación sin autorización.',
      'He incumplido políticas de uso de suministros.',
      'He ignorado procedimientos de manejo de documentos.',
      'He incumplido normas de mantenimiento de equipos.',
      'He evitado realizar reportes de desempeño requeridos.',
      'He incumplido políticas de uso de instalaciones.',
      'He utilizado sistemas de vigilancia sin autorización.',
      'He incumplido normas de archivo y almacenamiento.',
      'He evitado seguir procedimientos de auditoría.',
      'He reducido mi ritmo de trabajo intencionalmente.',
      'He evitado tareas difíciles o desafiantes.',
      'He dedicado menos esfuerzo al trabajo del que soy capaz.',
      'He pospuesto tareas importantes innecesariamente.',
      'He entregado trabajo de calidad inferior a la requerida.',
      'He evitado asumir responsabilidades adicionales.',
      'He realizado el mínimo necesario para cumplir.',
      'He descuidado tareas no supervisadas directamente.',
      'He creado excusas para no cumplir objetivos.',
      'He evitado participar en proyectos importantes.',
      'He reducido mi productividad gradualmente.',
      'He cometido errores por falta de atención.',
      'He evitado aprender nuevas habilidades necesarias.',
      'He rechazado asignaciones por considerarlas "no de mi puesto".',
      'He descuidado la calidad del trabajo por velocidad.',
      'He evitado dar retroalimentación útil a colegas.',
      'He minimizado mi contribución a proyectos grupales.',
      'He evitado innovar o mejorar procesos.',
      'He postergado decisiones importantes innecesariamente.',
      'He descuidado el mantenimiento de herramientas de trabajo.',
      'He evitado documentar procedimientos importantes.',
      'He disminuido mi compromiso con los objetivos organizacionales.',
      'He evitado participar en reuniones importantes.',
      'He descuidado la actualización de registros necesarios.',
      'He creado cuellos de botella en procesos.',
      'He evitado colaborar en proyectos interdepartamentales.',
      'He descuidado la organización de mi área de trabajo.',
      'He evitado asumir liderazgo en situaciones necesarias.',
      'He descuidado el seguimiento de tareas asignadas.',
      'He evitado participar en iniciativas de mejora continua.',
      'He creado dependencia innecesaria de otros.',
      'He descuidado la preparación para reuniones importantes.',
      'He evitado tomar iniciativa en proyectos.',
      'He descuidado la actualización de conocimientos necesarios.',
      'He creado obstáculos para la eficiencia del equipo.',
      'He evitado compartir información útil con colegas.',
      'He descuidado la planificación de mi trabajo.',
      'He evitado establecer metas desafiantes.',
      'He descuidado la revisión de mi propio trabajo.',
      'He evitado participar en redes de conocimiento.',
      'He descuidado el cumplimiento de estándares de calidad.',
      'He evitado dar seguimiento a compromisos adquiridos.',
      'He descuidado la comunicación de avances importantes.',
      'He evitado asumir tareas de mayor responsabilidad.',
      'He descuidado la gestión de mi tiempo de trabajo.',
      'He evitado participar en evaluaciones de desempeño.',
      'He descuidado la atención a solicitudes de colegas.',
      'He evitado resolver problemas de forma proactiva.',
      'He descuidado el desarrollo de habilidades necesarias.',
      'He evitado dar lo mejor de mí en el trabajo.',
      'He utilizado materiales de oficina para proyectos personales.',
      'He hecho copias personales en impresoras de la empresa.',
      'He utilizado teléfonos de la empresa para llamadas personales.',
      'He consumido productos de la empresa sin autorización.',
      'He utilizado internet de la empresa para actividades no laborales.',
      'He desperdiciado suministros de la empresa intencionalmente.',
      'He utilizado vehículos de la empresa para asuntos personales.',
      'He tomado tiempo de trabajo para actividades recreativas.',
      'He utilizado energía y servicios de la empresa para fines personales.',
      'He dañado equipos de la empresa por negligencia.',
      'He hecho mal uso de sistemas de comunicación.',
      'He utilizado almacenamiento de la empresa para datos personales.',
      'He consumido café, té o alimentos sin contribuir.',
      'He utilizado impresoras para proyectos no laborales.',
      'He desperdiciado papel y suministros de oficina.',
      'He utilizado sistemas de mensajería para asuntos personales.',
      'He dañado propiedad de la empresa intencionalmente.',
      'He utilizado recursos para beneficio personal.',
      'He tomado tiempo de trabajo para actividades no productivas.',
      'He utilizado software de la empresa sin autorización.',
      'He desperdiciado materiales de embalaje.',
      'He utilizado equipos sin cuidado adecuado.',
      'He consumido excesivamente suministros de oficina.',
      'He utilizado sistemas de la empresa para fines no autorizados.',
      'He dañado herramientas de trabajo.',
      'He utilizado recursos de la empresa para actividades políticas.',
      'He desperdiciado insumos de limpieza.',
      'He utilizado sistemas de la empresa para actividades religiosas.',
      'He hecho mal uso de sistemas de videoconferencia.',
      'He desperdiciado materiales de mantenimiento.',
      'He utilizado recursos para actividades de beneficio personal.',
      'He dañado instalaciones de la empresa.',
      'He utilizado sistemas de la empresa para juegos.',
      'He desperdiciado suministros de primeros auxilios.',
      'He utilizado recursos de la empresa para actividades de venta personal.',
      'He hecho mal uso de sistemas de archivo.',
      'He desperdiciado materiales de capacitación.',
      'He utilizado recursos de la empresa para actividades no relacionadas.',
      'He dañado mobiliario de la empresa.',
      'He utilizado sistemas de la empresa para actividades ilegales.',
      'He desperdiciado materiales de promoción.',
      'He utilizado recursos de la empresa para actividades de consultoría externa.',
      'He hecho mal uso de sistemas de gestión.',
      'He desperdiciado materiales de oficina.',
      'He utilizado recursos de la empresa para actividades de voluntariado no autorizado.',
      'He dañado infraestructura tecnológica.',
      'He utilizado sistemas de la empresa para actividades de entretenimiento.',
      'He desperdiciado recursos de impresión.',
      'He utilizado recursos de la empresa para actividades académicas personales.',
      'He realizado acciones que perjudican los bienes de la organización.'
    ]
  },

  profesional: {
    titulo: 'Prueba de Conocimientos Profesional',
    subtitulo: 'Protección de Víctimas y Testigos FST',
    tiempo: 15 * 60,
    totalPreguntas: 15,
    instrucciones: '<p><strong>Prueba de Conocimientos Profesional</strong> sobre <strong>Protección de Víctimas y Testigos</strong>.</p><p><strong>Duración: 15 minutos | Preguntas: 15</strong></p><p>Formato mixto: V/F/D y Selección Múltiple.</p><p>Áreas: Victimología, Trauma y Duelo, Fenomenología, Sistema de Justicia, Crimen Organizado, Protección Especializada, Medidas de Protección.</p>',
    banco: [
      // ===========================================
      // VICTIMOLOGÍA (6 preguntas)
      // ===========================================
      {
        tipo:'VFD', nivel:'facil', area:'Victimología',
        enunciado:'La victimización primaria es el daño directo que sufre la persona como consecuencia inmediata del delito.',
        respuesta:'V',
        explicacion:'La victimización primaria corresponde al daño directo e inmediato que experimenta la víctima como resultado del hecho delictivo. El Código Procesal Penal chileno (Ley N°19.696), en su Artículo 6, reconoce la protección de la víctima como principio básico del proceso penal, estableciendo que el Ministerio Público debe velar por su protección durante todas las etapas. La doctrina victimológica clásica de Benjamín Mendelsohn (1947) y Hans von Hentig (1948) distingue tres niveles: primaria (daño directo del delito), secundaria (revictimización institucional) y terciaria (afectación al entorno social).'
      },
      {
        tipo:'VFD', nivel:'facil', area:'Victimología',
        enunciado:'La revictimización o victimización secundaria ocurre cuando una persona es víctima de múltiples delitos cometidos por distintos autores en un mismo período.',
        respuesta:'F',
        explicacion:'FALSO. La revictimización o victimización secundaria NO se refiere a sufrir múltiples delitos, sino al daño adicional que experimenta la víctima al interactuar con el sistema de justicia penal (policía, fiscalía, tribunales). Según la Unidad de Atención a Víctimas y Testigos (URAVIT) del Ministerio Público, regulada en la Ley N°19.640 (LOC del MP, Art. 34), la revictimización ocurre cuando el sistema obliga a la víctima a repetir su relato múltiples veces, la expone a careos innecesarios, o la somete a procesos prolongados sin apoyo. La Ley N°21.057 (Entrevistas Videograbadas) fue creada precisamente para prevenir la revictimización de NNA. La polivictimización (múltiples delitos) es un concepto distinto desarrollado por Finkelhor et al. (2007).'
      },
      {
        tipo:'MC', nivel:'facil', area:'Victimología',
        enunciado:'Según la clasificación victimológica de Benjamín Mendelsohn (1947), ¿cómo se denomina a la víctima que provoca o contribuye activamente a su propia victimización mediante un comportamiento imprudente o provocador?',
        opciones:[
          'Víctima completamente inocente',
          'Víctima por ignorancia o imprudencia',
          'Víctima provocadora o culpable',
          'Víctima simuladora o imaginaria'
        ],
        respuesta:2,
        explicacion:'Mendelsohn, considerado el "padre de la victimología", propuso en su obra "Une nouvelle branche de la science bio-psycho-sociale: la victimologie" (1956) una clasificación de víctimas basada en el grado de participación en el delito: (1) Completamente inocente (ej. niños); (2) Por ignorancia o imprudencia menor; (3) Provocadora o tan culpable como el ofensor (ej. quien inicia una pelea); (4) Más culpable que el ofensor (ej. quien tiende una emboscada y es repelido); (5) Única culpable (ej. legítima defensa). Esta clasificación, aunque controvertida, es la base de la victimología moderna y es citada en manuales de la Academia Judicial de Chile para la formación de jueces penales.'
      },
      {
        tipo:'MC', nivel:'intermedio', area:'Victimología',
        enunciado:'El Artículo 109 del Código Procesal Penal chileno establece que la víctima tiene derecho a solicitar medidas de protección frente a hostigamientos, amenazas o atentados. ¿Ante qué autoridad puede solicitar dichas medidas?',
        opciones:[
          'Solo ante el tribunal de garantía',
          'Ante el Ministerio Público o el tribunal de garantía',
          'Exclusivamente ante Carabineros de Chile',
          'Solo mediante abogado patrocinante ante la Corte de Apelaciones'
        ],
        respuesta:1,
        explicacion:'El Artículo 109 del CPP (Ley N°19.696) dispone que "la víctima podrá solicitar al Ministerio Público o al tribunal de garantía las medidas de protección que resulten necesarias" frente a hostigamientos, amenazas o atentados en su contra o de su familia. Las medidas pueden ser solicitadas directamente por la víctima, sin necesidad de abogado patrocinante (Art. 109 inc. 2°). El tribunal de garantía, a solicitud del Ministerio Público o de la víctima, puede ordenar protección policial, prohibición de acercamiento del imputado, u otras medidas cautelares del Art. 155 CPP. La Ley 20.931 (2016, Agenda Corta Antidelincuencia) reforzó estas facultades para facilitar su aplicación oportuna.'
      },
      {
        tipo:'VFD', nivel:'intermedio', area:'Victimología',
        enunciado:'Según Hans von Hentig, en su obra "The Criminal and His Victim" (1948), ciertas características personales de las víctimas —como ser muy joven, muy anciano, inmigrante, o tener discapacidad mental— constituyen factores de riesgo que aumentan la probabilidad de victimización.',
        respuesta:'V',
        explicacion:'VERDADERO. En su obra pionera "The Criminal and His Victim: Studies in the Sociobiology of Crime" (1948, Yale University Press), Hans von Hentig identificó 13 categorías de víctimas con mayor vulnerabilidad: jóvenes, ancianos, mujeres, inmigrantes, minorías, personas con discapacidad mental, deprimidos, codiciosos, solitarios, atormentadores, entre otros. Esta es la primera clasificación victimológica sistemática y fue precursora de los modernos estudios de factores de riesgo victimológico. La Fiscalía de Chile, a través de la URAVIT, utiliza evaluaciones de factores de vulnerabilidad —edad, género, pertenencia a grupos históricamente discriminados, discapacidad— para priorizar la asignación de medidas de protección conforme al Art. 109 CPP.'
      },
      {
        tipo:'MC', nivel:'dificil', area:'Victimología',
        enunciado:'La "victimización terciaria", según la doctrina victimológica contemporánea, se refiere a:',
        opciones:[
          'El daño causado por medios de comunicación al exponer a la víctima',
          'El impacto del delito sobre el entorno social y familiar de la víctima directa',
          'La tercera vez que una persona es víctima del mismo delito',
          'La intervención de terceros en la comisión de un delito'
        ],
        respuesta:1,
        explicacion:'La victimización terciaria se refiere al impacto o daño que el delito produce en el entorno social, familiar y comunitario de la víctima directa. Por ejemplo, los hijos de una mujer víctima de violencia intrafamiliar (Ley 20.066) experimentan victimización terciaria al presenciar los hechos o sufrir las consecuencias del clima de violencia. La doctrina distingue: primaria (daño directo del delito), secundaria (daño del sistema institucional) y terciaria (afectación al círculo social). La Corte Interamericana de Derechos Humanos, en el caso "Campo Algodonero vs. México" (2009), reconoció el concepto de víctimas indirectas o familiares. Este enfoque está incorporado en los protocolos de atención de la URAVIT del Ministerio Público.'
      },

      // ===========================================
      // TRAUMA Y DUELO (5 preguntas)
      // ===========================================
      {
        tipo:'MC', nivel:'facil', area:'Trauma y Duelo',
        enunciado:'Según el DSM-5 (Manual Diagnóstico y Estadístico de los Trastornos Mentales, 5ª edición, APA 2013), el Criterio A para el diagnóstico de Trastorno de Estrés Postraumático (TEPT) requiere:',
        opciones:[
          'Síntomas persistentes de hiperactivación fisiológica por al menos 6 meses',
          'Exposición a un evento traumático: muerte, lesión grave, violencia sexual, ya sea como víctima directa, testigo presencial, o conocimiento de trauma de un familiar cercano',
          'Presencia de al menos 5 síntomas depresivos concomitantes durante 1 mes',
          'Alteraciones del sueño documentadas por polisomnografía durante 3 meses consecutivos'
        ],
        respuesta:1,
        explicacion:'El DSM-5 (APA, 2013) define 8 criterios diagnósticos para el TEPT (309.81 / F43.10). El Criterio A es el criterio de entrada o "gatekeeper": exposición a muerte real o amenaza, lesión grave, o violencia sexual en una o más de estas formas: (A1) experiencia directa; (A2) ser testigo presencial; (A3) conocimiento de que un familiar/amigo cercano sufrió el evento; (A4) exposición repetida o extrema a detalles aversivos. Los demás criterios son: B (síntomas de intrusión/re-experimentación), C (evitación), D (alteraciones cognitivas/ánimo negativas), E (alteración en alerta/reactividad), F (duración > 1 mes), G (malestar clínicamente significativo), H (no atribuible a sustancias/condición médica). Este marco es utilizado por psicólogos y psiquiatras forenses en procesos penales chilenos para acreditar daño psicológico en víctimas (Art. 83 CPP).'
      },
      {
        tipo:'VFD', nivel:'facil', area:'Trauma y Duelo',
        enunciado:'El duelo es un proceso psicológico que puede manifestarse ante cualquier tipo de pérdida significativa —no solo la muerte de un ser querido— incluyendo la pérdida de salud, empleo, relación afectiva, o la experiencia migratoria forzada.',
        respuesta:'V',
        explicacion:'VERDADERO. La psicología contemporánea (Worden, 2009; Neimeyer, 2000) define el duelo como una respuesta natural y adaptativa ante cualquier pérdida significativa, no limitándose a la muerte. La teoría de las "Cuatro Tareas del Duelo" de Worden (aceptar la realidad de la pérdida, procesar el dolor, adaptarse al nuevo entorno, recolocar emocionalmente lo perdido) se aplica a múltiples tipos de pérdida. En el contexto de protección de víctimas, el Art. 78 CPP establece el derecho de la víctima a recibir atención psicológica, reconociendo el impacto emocional del delito que puede manifestarse como un proceso de duelo (pérdida de seguridad, confianza, integridad, proyecto de vida). La Ley 21.675 (2024) sobre violencia integral contra mujeres reconoce explícitamente el daño psicosocial que requiere reparación integral.'
      },
      {
        tipo:'VFD', nivel:'intermedio', area:'Trauma y Duelo',
        enunciado:'El duelo patológico o complicado se diferencia del duelo normal principalmente por la duración: todo duelo que exceda los 12 meses debe ser diagnosticado como Trastorno de Duelo Complejo Persistente según el DSM-5.',
        respuesta:'F',
        explicacion:'FALSO. Si bien el DSM-5 (2013) incluyó el Trastorno de Duelo Complejo Persistente (TDCP, código F43.8) en la sección de "Afecciones que necesitan más estudio", no es solo la duración lo que lo define. Los criterios propuestos incluyen: (A) duelo persistente (>12 meses en adultos, >6 meses en niños) caracterizado por añoranza/anhelo intenso por el fallecido Y (B) al menos 6 de 12 síntomas adicionales: incredulidad, evitación de recordatorios, ira/amargura, dificultad para aceptar la pérdida, confusión de identidad, dificultad para reintegrarse a la vida, embotamiento emocional, sensación de sinsentido, soledad intensa. Además debe causar (C) malestar clínicamente significativo y (D) no ser atribuible a otra condición. Mera duración >12 meses no es criterio suficiente. La URAVIT utiliza estos criterios para derivar a víctimas a atención psicológica especializada.'
      },
      {
        tipo:'MC', nivel:'intermedio', area:'Trauma y Duelo',
        enunciado:'El Artículo 83 del Código Procesal Penal chileno establece que el Ministerio Público debe adoptar medidas para proteger a las víctimas. En relación al daño psicológico de las víctimas, ¿qué principio rige la actuación fiscal?',
        opciones:[
          'Principio de contradicción: la defensa debe poder contrainterrogar al perito psicólogo en todo momento',
          'Principio de mínima intervención: solo se evalúa daño psicológico cuando la pena solicitada supera los 5 años',
          'Principio de protección integral: el fiscal debe adoptar todas las medidas necesarias para proteger la integridad física y psíquica de la víctima durante todo el proceso',
          'Principio de subsidiariedad penal: el daño psicológico solo puede ser evaluado por peritos del Servicio Médico Legal'
        ],
        respuesta:2,
        explicacion:'El Art. 83 CPP (modificado por Ley 20.931 de 2016) impone al Ministerio Público el deber de "adoptar las medidas necesarias para proteger a las víctimas y testigos", lo que incluye la protección de su integridad psíquica. La Ley 19.640 (LOC MP), en su Art. 20, faculta al Fiscal Nacional para crear unidades especializadas, como la URAVIT. Además, el Art. 78 CPP establece el catálogo de derechos de la víctima, incluyendo: letra a) solicitar medidas de protección; letra b) recibir atención médica y psicológica de urgencia; letra c) ser informada del proceso. El Art. 109 permite solicitar medidas específicas frente a amenazas. La Ley 21.675 (2024) refuerza este principio de protección integral con enfoque de género, exigiendo que el Estado garantice atención psicológica, asesoría jurídica y protección policial a mujeres víctimas de violencia.'
      },
      {
        tipo:'VFD', nivel:'dificil', area:'Trauma y Duelo',
        enunciado:'Según el DSM-5, una persona que experimenta síntomas de re-experimentación, evitación, alteraciones cognitivas e hiperactivación fisiológica durante 3 semanas consecutivas después de un accidente de tránsito grave, cumple todos los criterios para ser diagnosticada con Trastorno de Estrés Postraumático (TEPT).',
        respuesta:'F',
        explicacion:'FALSO. El DSM-5 (APA, 2013, págs. 271-280) establece en el Criterio F que la duración de los síntomas debe ser SUPERIOR A 1 MES (más de 30 días) para el diagnóstico de TEPT. Con solo 3 semanas (21 días), el diagnóstico correcto sería Trastorno de Estrés Agudo (TEA, código 308.3 / F43.0), que comparte los mismos criterios A-E pero con duración de 3 días a 1 mes desde el evento traumático. Esta distinción es clínicamente relevante porque: (1) el TEA puede resolverse espontáneamente sin tratamiento; (2) permite intervención temprana para prevenir cronificación a TEPT; (3) tiene implicancias forenses en la evaluación de daño psicológico. Peritos del Servicio Médico Legal y de la URAVIT aplican estos criterios temporales en sus informes psicológicos periciales (Art. 314 CPP).'
      },

      // ===========================================
      // FENOMENOLOGÍA Y CRIMEN ORGANIZADO (5 preguntas)
      // ===========================================
      {
        tipo:'MC', nivel:'facil', area:'Fenomenología',
        enunciado:'Según la Convención de las Naciones Unidas contra la Delincuencia Organizada Transnacional (Convención de Palermo, 2000), ratificada por Chile mediante Decreto Supremo N°342/2004 del Ministerio de Relaciones Exteriores, un "grupo delictivo organizado" se define como:',
        opciones:[
          'Cualquier asociación de 2 o más personas para cometer un delito',
          'Un grupo estructurado de 3 o más personas, existente por cierto tiempo, que actúa concertadamente con el propósito de cometer delitos graves para obtener un beneficio económico u otro beneficio material',
          'Una organización criminal con al menos 5 integrantes y alcance internacional',
          'Una banda con estructura jerárquica vertical, liderazgo único e identificación territorial definida'
        ],
        respuesta:1,
        explicacion:'El Artículo 2(a) de la Convención de Palermo (UNTOC, 2000) define "grupo delictivo organizado" como un grupo estructurado de 3 o más personas, existente durante cierto período de tiempo, que actúa concertadamente con el propósito de cometer uno o más delitos graves tipificados conforme a la Convención, con miras a obtener un beneficio económico u otro de orden material. Chile ratificó esta Convención mediante D.S. N°342/2004 del Ministerio de RR.EE. (publicado en el Diario Oficial el 16 de febrero de 2005). La Ley 20.000 (Ley de Drogas) y la Ley 20.393 (Responsabilidad Penal de Personas Jurídicas) contienen tipos penales que sancionan la participación en organizaciones criminales. El concepto de "delito grave" en la Convención se define como conducta punible con privación de libertad máxima de al menos 4 años.'
      },
      {
        tipo:'VFD', nivel:'facil', area:'Fenomenología',
        enunciado:'Una característica distintiva de las organizaciones criminales, según la doctrina criminológica, es la existencia de un "código de silencio" (omertà) que protege a la organización de la persecución penal mediante la intimidación a testigos y la obstrucción a la justicia.',
        respuesta:'V',
        explicacion:'VERDADERO. La doctrina criminológica (Cressey, 1969; Abadinsky, 2013; Albanese, 2015) identifica características comunes en el crimen organizado: (1) estructura jerárquica, (2) continuidad temporal, (3) uso de violencia o intimidación, (4) búsqueda de beneficio económico, (5) infiltración en economía lícita, y (6) código de silencio o "ley del silencio" como mecanismo de autoprotección. En Chile, el Art. 15 bis de la Ley 18.314 (Ley Antiterrorista) y las modificaciones de la Ley 20.931 (2016) reconocen la necesidad de proteger testigos frente a organizaciones criminales que utilizan la intimidación sistemática. La URAVIT del Ministerio Público tiene protocolos específicos para víctimas de crimen organizado, que incluyen reserva de identidad (Art. 307 CPP) y protección policial permanente (Art. 308 CPP).'
      },
      {
        tipo:'MC', nivel:'intermedio', area:'Fenomenología',
        enunciado:'La Ley 20.000 chilena, que sanciona el tráfico ilícito de estupefacientes y sustancias psicotrópicas, fue publicada el 16 de febrero de 2005 y reemplazó a la antigua Ley 19.366. ¿Cuál de las siguientes conductas NO está sancionada expresamente por el artículo 3° de la Ley 20.000?',
        opciones:[
          'El cultivo de especies vegetales del género cannabis con autorización del SAG para fines de investigación científica',
          'La producción, fabricación o preparación de sustancias estupefacientes o psicotrópicas',
          'El tráfico, transporte o distribución de dichas sustancias',
          'La posesión o tenencia ilegal de dichas sustancias'
        ],
        respuesta:0,
        explicacion:'El Artículo 3° de la Ley 20.000 sanciona: elaboración, producción, fabricación, preparación, transformación, extracción, tráfico, transporte, importación, exportación, distribución o posesión de estupefacientes o sustancias psicotrópicas SIN la debida autorización. El cultivo de cannabis con autorización del SAG (Servicio Agrícola y Ganadero) para fines de investigación científica no está sancionado, pues el Decreto Supremo N°404/1982 del Ministerio de Salud (Reglamento de Estupefacientes) y sus modificaciones permiten el cultivo autorizado para fines médicos y científicos (Art. 6). La Ley 20.000 fue publicada en el Diario Oficial el 16 de febrero de 2005, derogando la Ley 19.366 de 1995 (que a su vez había reemplazado la Ley 18.403 de 1985). Con la entrada en vigencia de la Ley 21.575 (2023), se modificaron aspectos procesales de la Ley 20.000.'
      },
      {
        tipo:'VFD', nivel:'intermedio', area:'Fenomenología',
        enunciado:'Según la Ley 20.393 de Responsabilidad Penal de las Personas Jurídicas (2009), las empresas pueden ser penalmente responsables por delitos de lavado de activos, financiamiento del terrorismo, cohecho a funcionario público y receptación, cuando estos delitos son cometidos por sus dueños, controladores, ejecutivos o empleados en el marco de la actividad empresarial.',
        respuesta:'V',
        explicacion:'VERDADERO. La Ley 20.393, publicada el 2 de diciembre de 2009, estableció por primera vez en Chile la responsabilidad penal de las personas jurídicas (empresas, fundaciones, corporaciones). Originalmente aplicable a lavado de activos (Ley 19.913), financiamiento del terrorismo (Ley 18.314) y cohecho a funcionario público (Art. 250 y 251 bis CP). La Ley 20.931 (2016) amplió el catálogo a receptación (Art. 456 bis CP). Posteriores modificaciones (Leyes 21.121, 21.240, 21.325, 21.412, 21.426, 21.459, 21.488, 21.560, 21.565, 21.577, 21.595, 21.660) han ampliado progresivamente el catálogo de delitos. El Art. 3° establece que la persona jurídica responde cuando el delito es cometido "directa e inmediatamente en su interés o para su provecho, por sus dueños, controladores, responsables, ejecutivos principales, representantes o quienes realicen actividades de administración y supervisión".'
      },
      {
        tipo:'MC', nivel:'dificil', area:'Fenomenología',
        enunciado:'En el contexto del crimen organizado transnacional, el "tráfico ilícito de migrantes" y la "trata de personas" son conceptos distintos regulados por instrumentos internacionales complementarios. ¿Cuál es la diferencia fundamental entre ambos?',
        opciones:[
          'No hay diferencia: ambos términos describen el movimiento ilegal de personas a través de fronteras',
          'La trata de personas implica coacción, engaño o explotación de la víctima, mientras que el tráfico de migrantes requiere consentimiento voluntario (aunque viciado) de la persona migrante para el cruce ilegal de fronteras',
          'El tráfico de migrantes siempre es internacional; la trata solo ocurre dentro del territorio nacional',
          'La diferencia es que la trata es un delito contra la libertad y el tráfico contra la administración de justicia'
        ],
        respuesta:1,
        explicacion:'El Protocolo contra el Tráfico Ilícito de Migrantes (2000) y el Protocolo para Prevenir, Reprimir y Sancionar la Trata de Personas (Protocolo de Palermo, 2000), ambos complementarios de la Convención de Palermo y ratificados por Chile (D.S. N°342/2004), diferencian: (A) TRATA DE PERSONAS (Art. 3 Protocolo TP): captación, transporte, traslado, acogida o recepción de personas, recurriendo a amenaza, fuerza, coacción, fraude, engaño, abuso de poder o situación de vulnerabilidad, con fines de explotación (sexual, laboral, servidumbre, extracción de órganos). El consentimiento de la víctima es irrelevante si se usó cualquier medio ilícito. (B) TRÁFICO ILÍCITO DE MIGRANTES (Art. 3 Protocolo TIM): facilitación de entrada ilegal de una persona en un Estado del cual no sea nacional, con fines de obtener beneficio financiero o material. La persona migrante CONSiente voluntariamente (aunque el consentimiento puede estar viciado por necesidad económica). Chile tipificó la trata de personas en el Art. 411 quáter del Código Penal (Ley 20.507, 2011) y el tráfico ilícito de migrantes en el Art. 411 bis CP.'
      },

      // ===========================================
      // SISTEMA DE JUSTICIA Y MINISTERIO PÚBLICO (5 preguntas)
      // ===========================================
      {
        tipo:'VFD', nivel:'facil', area:'Sistema de Justicia',
        enunciado:'El Código Procesal Penal chileno (Ley N°19.696), vigente desde el año 2000, establece un sistema procesal penal de corte acusatorio y oral, donde las funciones de investigar y juzgar están separadas en órganos distintos: el Ministerio Público investiga y los tribunales de garantía y tribunales orales en lo penal juzgan.',
        respuesta:'V',
        explicacion:'VERDADERO. El CPP, Ley N°19.696, publicada el 12 de octubre de 2000 e implementada gradualmente entre 2000 (Regiones IV y IX) y 2005 (Región Metropolitana), transformó el sistema inquisitivo escrito del Código de Procedimiento Penal de 1906 en un sistema acusatorio, oral y público. El principio de separación de funciones está consagrado en el Art. 1° CPP: "Ninguna persona podrá ser condenada o penada, ni sometida a una medida de seguridad, sino en virtud de sentencia fundada, dictada por un tribunal imparcial". El Art. 3° establece que corresponde al Ministerio Público (Ley 19.640 LOC MP) dirigir en forma exclusiva la investigación penal. Los Juzgados de Garantía (Art. 14 CPP) controlan la investigación y los Tribunales de Juicio Oral en lo Penal (Art. 17 CPP) realizan el juicio y dictan sentencia.'
      },
      {
        tipo:'MC', nivel:'facil', area:'Sistema de Justicia',
        enunciado:'La Ley N°19.640, Ley Orgánica Constitucional del Ministerio Público, fue publicada el 15 de octubre de 1999. Su artículo 34 crea una unidad especializada clave para la protección de víctimas y testigos. ¿Cómo se denomina actualmente esta unidad?',
        opciones:[
          'Unidad de Víctimas y Testigos del Ministerio Público (URAVIT)',
          'Corporación de Asistencia Judicial (CAJ)',
          'Servicio Nacional de Menores (SENAME)',
          'Subsecretaría de Prevención del Delito'
        ],
        respuesta:0,
        explicacion:'El Art. 34 de la Ley 19.640 (LOC MP) faculta al Fiscal Nacional para "crear las unidades administrativas que sean necesarias para el cumplimiento de las funciones del Ministerio Público". En virtud de esta facultad, se creó la Unidad Regional de Atención a Víctimas y Testigos (URAVIT), presente en cada Fiscalía Regional del país. Sus funciones incluyen: (a) evaluar el nivel de riesgo de víctimas y testigos; (b) proporcionar atención psicológica, social y jurídica inmediata; (c) recomendar y coordinar la implementación de medidas de protección (Arts. 109, 307-312 CPP); (d) acompañar a víctimas y testigos durante el proceso penal; (e) derivar a servicios de la red pública. La URAVIT trabaja coordinadamente con el fiscal a cargo del caso, Carabineros de Chile y la PDI para la ejecución de medidas de protección. La Ley 21.057 (2018) fortaleció la URAVIT para casos de NNA víctimas de delitos sexuales.'
      },
      {
        tipo:'VFD', nivel:'intermedio', area:'Sistema de Justicia',
        enunciado:'Según el Artículo 78 del Código Procesal Penal, la víctima tiene derecho a ser oída por el fiscal antes de que este decida archivar provisionalmente la investigación o no perseverar en el procedimiento.',
        respuesta:'V',
        explicacion:'VERDADERO. El Art. 78 inciso 2° CPP establece el catálogo de derechos de la víctima, entre los cuales la letra f) consagra el derecho a "ser oída por el fiscal antes de que este decida archivar provisionalmente la investigación o no perseverar en el procedimiento". El archivo provisional (Art. 167 CPP) procede cuando los antecedentes no permiten desarrollar actividades conducentes al esclarecimiento de los hechos. La decisión de no perseverar (Art. 248 letra c CPP) es una facultad del fiscal que puede ejercer cuando no se han reunido antecedentes suficientes para fundar una acusación, dentro del plazo de investigación (Art. 247 CPP: 2 años máximo, prorrogable). La víctima también tiene derecho a solicitar al juez de garantía que ordene al fiscal la reapertura del procedimiento o forzar la acusación (Art. 258 CPP - forzamiento de la acusación).'
      },
      {
        tipo:'MC', nivel:'intermedio', area:'Sistema de Justicia',
        enunciado:'El Artículo 6° del Código Procesal Penal chileno establece el principio de "protección de la víctima". ¿Cuál de los siguientes enunciados describe correctamente el contenido de este principio?',
        opciones:[
          'La víctima tiene derecho preferente a obtener indemnización del Estado por todo delito sufrido',
          'El Ministerio Público debe adoptar todas las medidas necesarias para proteger a las víctimas y garantizar el ejercicio de sus derechos durante el proceso penal, considerando especialmente su seguridad, dignidad e integridad física y psíquica',
          'La víctima puede sustituir al fiscal en la investigación si este no actúa con la debida diligencia',
          'El juez de garantía debe priorizar la protección de la víctima sobre la presunción de inocencia del imputado'
        ],
        respuesta:1,
        explicacion:'El Artículo 6° CPP, titulado "Protección de la víctima", dispone: "El Ministerio Público estará obligado a velar por la protección de la víctima del delito en todas las etapas del procedimiento penal. En cumplimiento de esta obligación, adoptará las medidas necesarias para garantizar su seguridad, proteger su intimidad y la de su familia, y evitar cualquier perturbación o afectación de su dignidad". Este artículo es concordante con el Art. 83 CPP (deber de protección del fiscal) y con el Art. 34 de la LOC MP (creación de URAVIT). El principio NO implica que la víctima sustituya al fiscal (el querellante puede ejercer la acción penal pero no reemplaza al MP, Art. 111 CPP) ni que prevalezca sobre la presunción de inocencia. La Ley 20.931 (2016) reforzó este principio agregando el Art. 109 bis CPP que permite medidas de protección urgentes incluso antes de la formalización.'
      },
      {
        tipo:'VFD', nivel:'dificil', area:'Sistema de Justicia',
        enunciado:'El Artículo 109 bis del Código Procesal Penal, introducido por la Ley 20.931 (2016, Agenda Corta Antidelincuencia), permite que las medidas de protección a víctimas y testigos sean decretadas por el tribunal de garantía incluso antes de la formalización de la investigación, por un plazo máximo de 30 días prorrogables.',
        respuesta:'V',
        explicacion:'VERDADERO. El Art. 109 bis CPP, introducido por el Art. 9° de la Ley 20.931 (publicada el 5 de julio de 2016, conocida como "Agenda Corta Antidelincuencia"), establece: "En casos urgentes y graves, el tribunal de garantía, a solicitud del Ministerio Público o de la víctima, podrá decretar las medidas de protección que sean necesarias, incluso antes de la formalización de la investigación, por un plazo máximo de treinta días". Este plazo es prorrogable por períodos iguales, previa solicitud fundada. Esta innovación legal responde a la necesidad de proteger víctimas y testigos en las etapas iniciales de la investigación, cuando aún no hay imputado formalizado pero ya existen riesgos de hostigamiento, amenazas o atentados. Las medidas pueden incluir: protección policial, prohibición de acercamiento (Art. 155 CPP), rondas periódicas, reubicación temporal, y otras medidas cautelares personales.'
      },

      // ===========================================
      // PROTECCIÓN ESPECIALIZADA (5 preguntas)
      // ===========================================
      {
        tipo:'MC', nivel:'facil', area:'Protección Especializada',
        enunciado:'La Ley N°21.057, publicada el 20 de enero de 2018, conocida como "Ley de Entrevista Videograbada", regula la forma en que debe tomarse declaración a niños, niñas y adolescentes (NNA) víctimas de delitos sexuales y otros delitos graves. ¿Cuál es el objetivo principal de esta ley?',
        opciones:[
          'Permitir que NNA puedan declarar desde su domicilio por videollamada',
          'Evitar la revictimización de NNA reduciendo el número de entrevistas y garantizando que sean realizadas por profesionales especializados en salas acondicionadas (Gesell) y grabadas en video',
          'Sustituir la declaración judicial por un informe psicológico escrito del profesional entrevistador',
          'Permitir que la entrevista sea realizada por los padres del NNA en un entorno de confianza'
        ],
        respuesta:1,
        explicacion:'La Ley 21.057 (2018), también conocida como "Ley de Entrevista Videograbada", establece un sistema de entrevista única para NNA víctimas de delitos sexuales, secuestro, homicidio, lesiones graves, VIF, trata, entre otros (Art. 1°). Su objetivo central es evitar la victimización secundaria, reduciendo el número de entrevistas que el NNA debe enfrentar a UNA entrevista investigativa realizada por un entrevistador acreditado (perteneciente a una institución acreditada por el Ministerio de Justicia y DDHH), en una sala especialmente acondicionada (sala Gesell), grabada en audio y video. La entrevista puede ser usada como prueba en el juicio oral, evitando que el NNA tenga que declarar nuevamente. El Art. 6° establece que "ningún NNA será sometido a más de una entrevista investigativa", salvo excepciones calificadas. La ley entró en vigencia gradual por regiones entre 2019 y 2021 (con retrasos debido a la pandemia). La Ley 21.426 (2022) modificó aspectos del procedimiento.'
      },
      {
        tipo:'VFD', nivel:'facil', area:'Protección Especializada',
        enunciado:'La Ley 21.057 permite que NNA víctimas de delitos sexuales puedan ser interrogados directamente por el abogado defensor del imputado durante el juicio oral, como garantía del derecho a defensa.',
        respuesta:'F',
        explicacion:'FALSO. Uno de los pilares fundamentales de la Ley 21.057 es precisamente EVITAR que NNA víctimas tengan que enfrentar el interrogatorio directo de la defensa en el juicio oral. El Art. 15° de la ley establece el "Procedimiento de declaración judicial" cuando excepcionalmente se requiere que el NNA declare en juicio, el cual debe realizarse: (a) en sala contigua a la de audiencia conectada por circuito cerrado de televisión; (b) con auxilio de un facilitador o intermediario; (c) LAS PARTES DIRIGEN LAS PREGUNTAS AL JUEZ, QUIEN LAS FORMULA AL NNA adaptándolas a lenguaje comprensible (no interrogatorio directo de la defensa). El Art. 15 bis permite incluso que el tribunal limite o rechace preguntas que puedan afectar la integridad psíquica del NNA. Estas disposiciones fueron declaradas constitucionales por el Tribunal Constitucional en sentencia Rol 3001-16-INA (2017), al considerar que el interés superior del niño (Art. 3° Convención de Derechos del Niño) justifica estas limitaciones al derecho de defensa.'
      },
      {
        tipo:'MC', nivel:'intermedio', area:'Protección Especializada',
        enunciado:'La Ley 21.675, publicada el 14 de junio de 2024, establece medidas para prevenir, sancionar y erradicar la violencia integral contra las mujeres en razón de género. ¿Qué principio rector de esta ley exige que el Estado garantice atención psicológica, asesoría jurídica y protección policial a mujeres víctimas de violencia de género?',
        opciones:[
          'Principio de igualdad formal ante la ley',
          'Principio de protección integral con enfoque de género y debida diligencia',
          'Principio de subsidiariedad penal',
          'Principio de presunción de veracidad del testimonio de la víctima'
        ],
        respuesta:1,
        explicacion:'La Ley 21.675 (2024), titulada "Ley Integral contra la Violencia hacia las Mujeres", establece en su Artículo 4° los principios rectores, entre ellos: protección integral, debida diligencia, enfoque de género, interseccionalidad, no discriminación, y participación. El principio de protección integral con enfoque de género (Art. 4° letra b) impone al Estado la obligación de garantizar a las mujeres víctimas de violencia el acceso a: atención psicológica especializada y gratuita, asesoría jurídica, protección policial oportuna, medidas cautelares efectivas, y reparación integral del daño. La debida diligencia (Art. 4° letra e) exige que el Estado actúe con prontitud y exhaustividad para prevenir, investigar, sancionar y reparar la violencia de género, estándar desarrollado por la Corte IDH (Caso González y otras "Campo Algodonero" vs. México, 2009). La ley modifica diversos cuerpos legales incluyendo el CPP, el Código Penal, y la Ley 20.066 (VIF).'
      },
      {
        tipo:'VFD', nivel:'intermedio', area:'Protección Especializada',
        enunciado:'Las medidas de protección establecidas en el Código Procesal Penal (Art. 109 y siguientes) solo pueden ser solicitadas por el fiscal a cargo de la investigación, no por la víctima directamente.',
        respuesta:'F',
        explicacion:'FALSO. El Art. 109 inciso 1° CPP establece que "la víctima podrá solicitar al Ministerio Público o al tribunal de garantía las medidas de protección" que estime necesarias frente a hostigamientos, amenazas o atentados. La víctima puede hacerlo DIRECTAMENTE, sin necesidad de abogado patrocinante. El Art. 109 inciso 2° establece expresamente: "La solicitud no requerirá de formalidad alguna y podrá ser presentada por la propia víctima". Además, el Art. 78 letra a) CPP reconoce el derecho de la víctima a "solicitar medidas de protección". El Art. 109 bis (Ley 20.931, 2016) extiende esta facultad permitiendo que "el tribunal, a solicitud del Ministerio Público o de la víctima", decrete medidas antes de la formalización. El Ministerio Público (URAVIT) tiene el DEBER de evaluar el riesgo y recomendar medidas, pero la iniciativa puede ser tanto del MP como de la propia víctima.'
      },
      {
        tipo:'MC', nivel:'dificil', area:'Protección Especializada',
        enunciado:'El Artículo 307 del Código Procesal Penal regula la "reserva de identidad" como medida de protección para testigos. Según este artículo, ¿en qué circunstancias el tribunal puede autorizar la reserva total de identidad del testigo, impidiendo incluso que la defensa conozca su nombre y domicilio?',
        opciones:[
          'Siempre que el testigo lo solicite, como expresión del derecho a la protección',
          'Cuando existan antecedentes calificados de riesgo grave para la vida o integridad física del testigo o su familia, y solo por el tiempo indispensable, debiendo el tribunal ponderar el principio de protección con el derecho a defensa',
          'Solo en casos de crimen organizado o terrorismo, previa autorización del Fiscal Nacional',
          'En ningún caso: la reserva total de identidad es inconstitucional porque vulnera el derecho al debido proceso y la defensa'
        ],
        respuesta:1,
        explicacion:'El Art. 307 CPP (modificado por Ley 20.931 de 2016) autoriza al tribunal para disponer la reserva de identidad del testigo en 3 niveles: (1) reserva de domicilio y datos de localización (inc. 2°); (2) reserva total de identidad, nombre y domicilio (inc. 4°), solo cuando existan "antecedentes calificados de que existe riesgo grave para la vida o integridad física del testigo o de su familia", y solo "por el tiempo indispensable" y mediante resolución fundada que pondere los derechos en conflicto; (3) utilización de recursos tecnológicos como biombo, videoconferencia o distorsión de voz (Art. 310 CPP). El Tribunal Constitucional chileno, en sentencia Rol 2030-11-INA (2012), declaró constitucional la reserva de identidad siempre que se garantice un estándar mínimo de contradicción y control de credibilidad. La Ley 21.057 (2018) extiende esta protección a NNA víctimas de delitos sexuales, permitiendo la reserva total de identidad con mayor facilidad. La Corte IDH ha sostenido (Caso Norín Catrimán, 2014) que estas medidas deben ser proporcionales y temporales.'
      },

      // ===========================================
      // MEDIDAS DE PROTECCIÓN (5 preguntas)
      // ===========================================
      {
        tipo:'VFD', nivel:'facil', area:'Medidas de Protección',
        enunciado:'Las medidas de protección a víctimas y testigos tienen como finalidad evitar la revictimización y garantizar la comparecencia efectiva de víctimas y testigos en el proceso penal, resguardando su integridad física y psicológica.',
        respuesta:'V',
        explicacion:'VERDADERO. Las medidas de protección contempladas en los Arts. 109, 109 bis, 307, 308, 310 y 312 del CPP persiguen una doble finalidad: (1) PROTEGER a la víctima o testigo de hostigamientos, amenazas, atentados o cualquier forma de intimidación que pueda afectar su integridad física o psíquica, evitando así la victimización secundaria; y (2) GARANTIZAR la efectividad del proceso penal, asegurando que víctimas y testigos puedan prestar su declaración o testimonio sin temor a represalias, contribuyendo así a la búsqueda de la verdad y la justicia. La URAVIT del Ministerio Público (Art. 34 Ley 19.640) implementa estas medidas mediante: protección policial (rondas, custodia personal, botón de pánico), reserva de identidad y domicilio, uso de biombo o videoconferencia en el juicio oral, reubicación temporal, prohibición de acercamiento del imputado (Art. 155 CPP), y coordinación con la red de apoyo psicosocial.'
      },
      {
        tipo:'MC', nivel:'facil', area:'Medidas de Protección',
        enunciado:'¿Cuál de las siguientes NO es una medida de protección contemplada expresamente en el Código Procesal Penal chileno para víctimas y testigos?',
        opciones:[
          'Protección policial (rondas periódicas o custodia personal)',
          'Reserva de identidad y domicilio del testigo',
          'Uso de biombo o videoconferencia en el juicio oral',
          'Asignación de una vivienda fiscal permanente para la víctima y su familia'
        ],
        respuesta:3,
        explicacion:'La asignación de una vivienda fiscal PERMANENTE NO es una medida de protección contemplada en el CPP. Las medidas expresamente reguladas son: (A) Art. 109 y 109 bis CPP: medidas de protección en general, incluyendo prohibición de acercamiento; (B) Art. 307 CPP: reserva de identidad y domicilio del testigo protegido; (C) Art. 308 CPP: protección policial mediante rondas periódicas, custodia personal, botón de pánico, o patrullajes focalizados; (D) Art. 310 CPP: uso de recursos tecnológicos en el juicio oral como biombo físico que impide ver al testigo, videoconferencia desde lugar remoto, distorsión de voz, o declaración en sala contigua; (E) Art. 312 CPP: cambio de domicilio temporal y entrega de recursos económicos para traslado (medida excepcional, no permanente). Existen programas de apoyo como el Fondo Nacional de Seguridad Pública, pero la asignación permanente de vivienda fiscal no es una medida cautelar procesal penal, sino una política habitacional del MINVU.'
      },
      {
        tipo:'VFD', nivel:'intermedio', area:'Medidas de Protección',
        enunciado:'Las medidas de protección para víctimas y testigos se extinguen automáticamente al dictarse la sentencia definitiva en el juicio oral, sin posibilidad de extensión.',
        respuesta:'F',
        explicacion:'FALSO. El Art. 312 CPP establece que las medidas de protección se mantienen durante todo el proceso penal, pero pueden extenderse más allá de la sentencia definitiva cuando persiste el riesgo para la víctima o testigo. El tribunal, el Ministerio Público o la víctima pueden solicitar la prórroga de las medidas de protección, y el tribunal de garantía decidirá fundadamente. La Ley 20.931 (2016) reforzó la continuidad de las medidas al permitir su aplicación desde antes de la formalización (Art. 109 bis) y su mantención en la etapa de ejecución de la pena. La URAVIT del MP realiza evaluaciones periódicas de riesgo para determinar la necesidad de mantener, modificar o cesar las medidas. En casos de crimen organizado, las medidas pueden mantenerse por años después de la sentencia debido a la naturaleza permanente de la amenaza que representan estas organizaciones criminales (venganza, represalias).'
      },
      {
        tipo:'MC', nivel:'intermedio', area:'Medidas de Protección',
        enunciado:'El Artículo 310 del CPP permite el uso de "recursos tecnológicos" para proteger a testigos durante el juicio oral. ¿Cuál de los siguientes NO está expresamente mencionado en dicho artículo?',
        opciones:[
          'Biombo físico que impide ver al testigo desde la sala de audiencia',
          'Videoconferencia desde un lugar remoto con distorsión de imagen',
          'Distorsión de la voz del testigo mediante procesamiento de audio',
          'Sustitución del testigo por un actor profesional que reproduce su testimonio'
        ],
        respuesta:3,
        explicacion:'El Art. 310 CPP NO contempla la sustitución del testigo por un actor profesional. Las medidas tecnológicas expresamente autorizadas son: (1) "separación física del testigo del imputado o del público, mediante la utilización de tabiques, biombos u otros elementos arquitectónicos o técnicos que impidan la visión del testigo" (sistema de biombo); (2) "declaración del testigo fuera de la sala de audiencia, a través de un sistema de videoconferencia u otro dispositivo técnico que transmita su imagen y voz en tiempo real" (Art. 310 inc. 3°); (3) "distorsión de la voz o de la imagen del testigo" (Art. 310 inc. 4°). La Ley 20.931 (2016) amplió estas opciones agregando la posibilidad de "declaración en sala contigua con circuito cerrado de televisión". La sustitución del testigo por un actor vulneraría el principio de inmediación (Art. 329 CPP) y el derecho a defensa (Art. 93 CPP), por lo que NO está permitida.'
      },
      {
        tipo:'VFD', nivel:'dificil', area:'Medidas de Protección',
        enunciado:'El Artículo 312 del CPP permite al Ministerio Público proporcionar recursos económicos a víctimas y testigos protegidos para facilitar su cambio de domicilio o lugar de trabajo habitual, cuando la gravedad de la amenaza lo justifique.',
        respuesta:'V',
        explicacion:'VERDADERO. El Art. 312 CPP (incorporado por Ley 19.789 de 2002 y modificado por Ley 20.931 de 2016) establece: "El Ministerio Público podrá proporcionar a las víctimas y testigos protegidos los recursos económicos necesarios para facilitar su cambio de domicilio o de lugar de trabajo habitual, cuando la gravedad de la amenaza lo justifique". Esta es la medida más intensa de protección, generalmente reservada para casos de crimen organizado, narcotráfico, terrorismo, o cuando la organización criminal tiene capacidad de ubicar a la persona en cualquier parte del país. Los recursos son administrados por la URAVIT a través del Fondo Nacional de Protección de Víctimas y Testigos. El cambio de domicilio es TEMPORAL (a diferencia de la vivienda permanente que no existe como medida), por períodos renovables según evaluación de riesgo. La Ley 20.000 (Art. 37) también contempla medidas similares para testigos en casos de narcotráfico. La implementación práctica de esta medida enfrenta desafíos de integración laboral, escolar (hijos) y redes de apoyo de la persona protegida.'
      }
    ]
  }
};
