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
    instrucciones: '<p><strong>Prueba de Conocimientos Profesional</strong> basada en el temario oficial de la <strong>Fiscalía Supraterritorial (FST)</strong> para protección de víctimas y testigos.</p><p><strong>Duración: 15 minutos | 15 preguntas aleatorias</strong></p><p>Formato mixto: Verdadero/Falso/Desconocido + Selección Múltiple.</p><p><strong>5 Unidades del Temario Oficial:</strong><br>❶ Fundamentos de Victimología (Victimología, Trauma y Duelo, Victimización, Revictimización)<br>❷ Crimen Organizado (Tráfico de Drogas, Trata de Personas, Tráfico de Migrantes, Secuestro, Extorsión, Lavado de Activos, Tráfico de Armas, Homicidios)<br>❸ Marco Jurídico (Constitución y LOC MP, CPP, Medidas de Protección, Agentes Encubiertos, Ley 21.057, Ley 21.675, Ley 21.430)<br>❹ Intervención (Primeros Auxilios Psicológicos, Entrevista y Escucha Activa, Prevención de Victimización Secundaria, Evaluación de Riesgo, Plan de Intervención, Autocuidado)<br>❺ Coordinación (Redes Intersectoriales, Cooperación Internacional, Fiscalía Supraterritorial y SAC)</p>',
    banco: [
      // ===========================================
      // UNIDAD 1: FUNDAMENTOS DE VICTIMOLOGÍA
      // Victimología general, Psicología del trauma y duelo,
      // Victimización primaria/secundaria/terciaria, Revictimización
      // ===========================================

      // --- Victimología general ---
      {
        tipo:'MC', nivel:'facil', area:'Unidad 1 - Victimología General',
        enunciado:'Según la definición de la ONU (1985) y el artículo 108 del Código Procesal Penal chileno, ¿quién es considerado víctima?',
        opciones:[
          'Solo la persona que sufre daño físico directo como consecuencia inmediata del delito',
          'El ofendido por el delito, incluyendo a familiares directos en caso de muerte o imposibilidad de la víctima directa',
          'Cualquier persona que haya presenciado la comisión de un delito, aunque no haya sufrido daño',
          'Solo el titular del bien jurídico protegido por el tipo penal correspondiente'
        ],
        respuesta:1,
        explicacion:'La ONU en su Resolución 40/34 (1985) define víctima como toda persona que haya sufrido daños, inclusive lesiones físicas o mentales, sufrimiento emocional, pérdida financiera o menoscabo sustancial de sus derechos fundamentales. El artículo 108 del CPP chileno amplía esta definición: "Para los efectos de este Código, se considera víctima al ofendido por el delito". En caso de muerte o imposibilidad de la víctima directa para ejercer sus derechos, se consideran víctimas, en orden de prelación: cónyuge, conviviente civil, hijos, ascendientes, hermanos, y otras personas que hayan estado a cargo de la víctima. El artículo 6° CPP impone al Ministerio Público la obligación de velar por la protección de la víctima en todas las etapas del procedimiento. Fuente: Código Procesal Penal, art. 108; Manual de capacitación en temas victimológicos URAVIT, págs. 14-15; Resolución ONU 40/34 de 1985.'
      },
      {
        tipo:'VFD', nivel:'facil', area:'Unidad 1 - Victimología General',
        enunciado:'La victimización primaria es el daño directo e inmediato que sufre la persona como consecuencia de la comisión del delito.',
        respuesta:'V',
        explicacion:'La victimización primaria corresponde al daño directo e inmediato que experimenta la víctima como resultado del hecho delictivo. El Código Procesal Penal chileno (Ley N°19.696), en su Artículo 6, reconoce la protección de la víctima como principio básico del proceso penal, estableciendo que el Ministerio Público debe velar por su protección durante todas las etapas. La doctrina victimológica clásica de Benjamín Mendelsohn (1947) y Hans von Hentig (1948) distingue tres niveles: primaria (daño directo del delito), secundaria (revictimización institucional) y terciaria (afectación al entorno social).'
      },
      {
        tipo:'VFD', nivel:'facil', area:'Unidad 1 - Victimología General',
        enunciado:'La revictimización o victimización secundaria ocurre cuando una persona es víctima de múltiples delitos cometidos por distintos autores en un mismo período.',
        respuesta:'F',
        explicacion:'FALSO. La revictimización o victimización secundaria NO se refiere a sufrir múltiples delitos, sino al daño adicional que experimenta la víctima al interactuar con el sistema de justicia penal (policía, fiscalía, tribunales). Según la Unidad de Atención a Víctimas y Testigos (URAVIT) del Ministerio Público, regulada en la Ley N°19.640 (LOC del MP, Art. 34), la revictimización ocurre cuando el sistema obliga a la víctima a repetir su relato múltiples veces, la expone a careos innecesarios, o la somete a procesos prolongados sin apoyo. La Ley N°21.057 (Entrevistas Videograbadas) fue creada precisamente para prevenir la revictimización de NNA. La polivictimización (múltiples delitos) es un concepto distinto desarrollado por Finkelhor et al. (2007).'
      },

      // --- Victimización primaria, secundaria y terciaria ---
      {
        tipo:'MC', nivel:'intermedio', area:'Unidad 1 - Victimización',
        enunciado:'Según el Manual de capacitación en temas victimológicos y la Ley 21.057, ¿cuáles son formas de victimización secundaria que deben prevenirse en el proceso penal? 1) Interrogatorios reiterados por personal no especializado. 2) Estigmatización social de la víctima. 3) Exclusión de la víctima de decisiones procesales relevantes. 4) Aplicación de medidas de protección sin consentimiento informado de la víctima.',
        opciones:[
          'Solo 1, 2 y 3',
          'Solo 1 y 4',
          'Solo 2, 3 y 4',
          'Todas las anteriores (1, 2, 3 y 4)'
        ],
        respuesta:0,
        explicacion:'El Manual de capacitación en temas victimológicos (URAVIT, págs. 18-19) señala como formas de victimización secundaria: exclusión de la víctima de los procesos judiciales, trato inapropiado por operadores del sistema, estigmatización social, e interrogatorios reiterados por personal no especializado. La opción 4 (aplicación de medidas sin consentimiento) NO es una forma de victimización secundaria; las medidas de protección requieren consentimiento informado de la víctima en virtud del principio de voluntariedad (Art. 109 CPP). La Ley 21.057, art. 3°, establece el principio de "interés superior del niño" y no revictimización para NNA. La Corte IDH ha sostenido que el Estado debe prevenir la revictimización institucional (Caso Rosendo Cantú vs. México, 2010).'
      },
      {
        tipo:'MC', nivel:'dificil', area:'Unidad 1 - Victimización',
        enunciado:'La "victimización terciaria", según la doctrina victimológica contemporánea, se refiere a:',
        opciones:[
          'El daño causado por medios de comunicación al exponer a la víctima sin su consentimiento',
          'El impacto del delito sobre el entorno social inmediato y la familia de la víctima directa',
          'La tercera vez que una persona es víctima del mismo tipo de delito en un período de 5 años',
          'La intervención de terceros coautores en la ejecución material de un delito violento'
        ],
        respuesta:1,
        explicacion:'La victimización terciaria se refiere al impacto o daño que el delito produce en el entorno social, familiar y comunitario de la víctima directa. Por ejemplo, los hijos de una mujer víctima de violencia intrafamiliar (Ley 20.066) experimentan victimización terciaria al presenciar los hechos o sufrir las consecuencias del clima de violencia. La doctrina distingue claramente: primaria (daño directo del delito), secundaria (daño del sistema institucional) y terciaria (afectación al círculo social). La Corte Interamericana de Derechos Humanos, en el caso "Campo Algodonero vs. México" (2009), reconoció el concepto de víctimas indirectas o familiares. Este enfoque está incorporado en los protocolos de atención de la URAVIT del Ministerio Público para garantizar protección integral.'
      },

      // --- Psicología del trauma y duelo ---
      {
        tipo:'MC', nivel:'facil', area:'Unidad 1 - Trauma y Duelo',
        enunciado:'Según el DSM-5 (Manual Diagnóstico y Estadístico de los Trastornos Mentales, 5ª edición, APA 2013), el Criterio A para el diagnóstico de Trastorno de Estrés Postraumático (TEPT) requiere:',
        opciones:[
          'Síntomas persistentes de hiperactivación fisiológica por al menos 6 meses continuos',
          'Exposición a un evento traumático: muerte, lesión grave, violencia sexual, ya sea como víctima directa, testigo presencial, o conocimiento de trauma de un familiar cercano',
          'Presencia de al menos 5 síntomas depresivos concomitantes durante 1 mes como mínimo',
          'Alteraciones del sueño documentadas por polisomnografía durante al menos 3 meses consecutivos'
        ],
        respuesta:1,
        explicacion:'El DSM-5 (APA, 2013) define 8 criterios diagnósticos para el TEPT (309.81 / F43.10). El Criterio A es el criterio de entrada o "gatekeeper": exposición a muerte real o amenaza, lesión grave, o violencia sexual en una o más de estas formas: (A1) experiencia directa; (A2) ser testigo presencial; (A3) conocimiento de que un familiar/amigo cercano sufrió el evento; (A4) exposición repetida o extrema a detalles aversivos. Los demás criterios: B (síntomas de intrusión), C (evitación), D (alteraciones cognitivas/ánimo negativas), E (alteración en alerta/reactividad), F (duración > 1 mes), G (malestar clínicamente significativo), H (no atribuible a sustancias/condición médica). Este marco es utilizado por psicólogos y psiquiatras forenses en procesos penales chilenos para acreditar daño psicológico en víctimas (Art. 83 CPP).'
      },
      {
        tipo:'VFD', nivel:'facil', area:'Unidad 1 - Trauma y Duelo',
        enunciado:'El duelo es un proceso psicológico que puede manifestarse ante cualquier tipo de pérdida significativa —no solo la muerte de un ser querido— incluyendo la pérdida de salud, empleo, relación afectiva, o la experiencia migratoria forzada.',
        respuesta:'V',
        explicacion:'VERDADERO. La psicología contemporánea (Worden, 2009; Neimeyer, 2000) define el duelo como una respuesta natural y adaptativa ante cualquier pérdida significativa, no limitándose a la muerte. La teoría de las "Cuatro Tareas del Duelo" de Worden (aceptar la realidad de la pérdida, procesar el dolor, adaptarse al nuevo entorno, recolocar emocionalmente lo perdido) se aplica a múltiples tipos de pérdida. En el contexto de protección de víctimas, el Art. 78 CPP establece el derecho de la víctima a recibir atención psicológica, reconociendo el impacto emocional del delito que puede manifestarse como un proceso de duelo (pérdida de seguridad, confianza, integridad, proyecto de vida). La Ley 21.675 (2024) sobre violencia integral contra mujeres reconoce explícitamente el daño psicosocial que requiere reparación integral.'
      },
      {
        tipo:'VFD', nivel:'intermedio', area:'Unidad 1 - Trauma y Duelo',
        enunciado:'El duelo patológico o complicado se diferencia del duelo normal principalmente por la duración: todo duelo que exceda los 12 meses debe ser diagnosticado como Trastorno de Duelo Complejo Persistente según el DSM-5.',
        respuesta:'F',
        explicacion:'FALSO. Si bien el DSM-5 (2013) incluyó el Trastorno de Duelo Complejo Persistente (TDCP, código F43.8) en la sección de "Afecciones que necesitan más estudio", no es solo la duración lo que lo define. Los criterios propuestos incluyen: (A) duelo persistente (>12 meses en adultos, >6 meses en niños) caracterizado por añoranza/anhelo intenso por el fallecido Y (B) al menos 6 de 12 síntomas adicionales: incredulidad, evitación de recordatorios, ira/amargura, dificultad para aceptar la pérdida, confusión de identidad, dificultad para reintegrarse a la vida, embotamiento emocional, sensación de sinsentido, soledad intensa. Además debe causar (C) malestar clínicamente significativo y (D) no ser atribuible a otra condición. Mera duración >12 meses no es criterio suficiente. La URAVIT utiliza estos criterios para derivar a víctimas a atención psicológica especializada.'
      },
      {
        tipo:'VFD', nivel:'dificil', area:'Unidad 1 - Trauma y Duelo',
        enunciado:'Según el DSM-5, una persona que experimenta síntomas de re-experimentación, evitación, alteraciones cognitivas e hiperactivación fisiológica durante 3 semanas consecutivas después de un accidente de tránsito grave, cumple todos los criterios para ser diagnosticada con Trastorno de Estrés Postraumático (TEPT).',
        respuesta:'F',
        explicacion:'FALSO. El DSM-5 (APA, 2013, págs. 271-280) establece en el Criterio F que la duración de los síntomas debe ser SUPERIOR A 1 MES (más de 30 días) para el diagnóstico de TEPT. Con solo 3 semanas (21 días), el diagnóstico correcto sería Trastorno de Estrés Agudo (TEA, código 308.3 / F43.0), que comparte los mismos criterios A-E pero con duración de 3 días a 1 mes desde el evento traumático. Esta distinción es clínicamente relevante porque: (1) el TEA puede resolverse espontáneamente sin tratamiento; (2) permite intervención temprana para prevenir cronificación a TEPT; (3) tiene implicancias forenses en la evaluación de daño psicológico. Peritos del Servicio Médico Legal y de la URAVIT aplican estos criterios temporales en sus informes psicológicos periciales (Art. 314 CPP).'
      },
      {
        tipo:'MC', nivel:'intermedio', area:'Unidad 1 - Trauma y Duelo',
        enunciado:'Según el DSM-5, ¿cuáles de los siguientes son criterios diagnósticos del Trastorno de Estrés Postraumático (TEPT) en adultos? 1) Exposición a muerte, lesión grave o violencia sexual. 2) Síntomas de intrusión como recuerdos angustiosos recurrentes. 3) Evitación persistente de estímulos asociados al trauma. 4) Alteraciones negativas cognitivas y del estado de ánimo. 5) Síntomas disociativos de despersonalización o desrealización.',
        opciones:[
          'Solo 1, 2 y 3',
          'Solo 1, 2, 3 y 4',
          'Solo 2, 3, 4 y 5',
          'Todas las anteriores (1, 2, 3, 4 y 5)'
        ],
        respuesta:1,
        explicacion:'El DSM-5 establece 8 criterios para TEPT: A) exposición a trauma; B) síntomas de intrusión; C) evitación persistente; D) alteraciones negativas cognitivas y del estado de ánimo; E) alteraciones en alerta y reactividad; F) duración >1 mes; G) malestar significativo; H) no atribuible a sustancias. Los síntomas disociativos (despersonalización/desrealización) NO son un criterio base, sino un especificador opcional que puede o no estar presente. Por lo tanto, los criterios 1, 2, 3 y 4 son base obligatoria del diagnóstico; el criterio 5 es únicamente un especificador de "con síntomas disociativos". Fuente: DSM-5, Trastorno de estrés postraumático, págs. 271-280; Manual de capacitación en temas victimológicos URAVIT, Cap. III, págs. 23-27.'
      },

      // --- Revictimización y polivictimización ---
      {
        tipo:'MC', nivel:'intermedio', area:'Unidad 1 - Victimología General',
        enunciado:'Según la clasificación victimológica de Benjamín Mendelsohn (1947), ¿cómo se denomina a la víctima que provoca o contribuye activamente a su propia victimización mediante un comportamiento imprudente o provocador?',
        opciones:[
          'Víctima completamente inocente o ideal',
          'Víctima por ignorancia o imprudencia menor',
          'Víctima provocadora o voluntaria (tan culpable como el ofensor)',
          'Víctima simuladora o imaginaria'
        ],
        respuesta:2,
        explicacion:'Mendelsohn, considerado el "padre de la victimología", propuso en su obra "Une nouvelle branche de la science bio-psycho-sociale: la victimologie" (1956) una clasificación de víctimas basada en el grado de participación en el delito: (1) Completamente inocente (ej. niños); (2) Por ignorancia o imprudencia menor; (3) Provocadora o tan culpable como el ofensor (ej. quien inicia una pelea); (4) Más culpable que el ofensor (ej. quien tiende una emboscada y es repelido); (5) Única culpable (ej. legítima defensa). Esta clasificación, aunque controvertida, es la base de la victimología moderna y es citada en manuales de la Academia Judicial de Chile para la formación de jueces penales.'
      },
      {
        tipo:'VFD', nivel:'intermedio', area:'Unidad 1 - Victimología General',
        enunciado:'Según Hans von Hentig, en su obra "The Criminal and His Victim" (1948), ciertas características personales de las víctimas —como ser muy joven, muy anciano, inmigrante, o tener discapacidad mental— constituyen factores de riesgo que aumentan la probabilidad de victimización.',
        respuesta:'V',
        explicacion:'VERDADERO. En su obra pionera "The Criminal and His Victim: Studies in the Sociobiology of Crime" (1948, Yale University Press), Hans von Hentig identificó 13 categorías de víctimas con mayor vulnerabilidad: jóvenes, ancianos, mujeres, inmigrantes, minorías, personas con discapacidad mental, deprimidos, codiciosos, solitarios, atormentadores, entre otros. Esta es la primera clasificación victimológica sistemática y fue precursora de los modernos estudios de factores de riesgo victimológico. La Fiscalía de Chile, a través de la URAVIT, utiliza evaluaciones de factores de vulnerabilidad —edad, género, pertenencia a grupos históricamente discriminados, discapacidad— para priorizar la asignación de medidas de protección conforme al Art. 109 CPP.'
      },

      // ===========================================
      // UNIDAD 2: CRIMEN ORGANIZADO
      // Crimen organizado, Tráfico de drogas, Trata de personas,
      // Tráfico de migrantes, Secuestro, Extorsión, Lavado de activos,
      // Tráfico de armas, Homicidios, Delitos contra la propiedad
      // ===========================================

      // --- Crimen organizado ---
      {
        tipo:'MC', nivel:'facil', area:'Unidad 2 - Crimen Organizado',
        enunciado:'Según la Convención de las Naciones Unidas contra la Delincuencia Organizada Transnacional (Convención de Palermo, 2000), ratificada por Chile mediante Decreto Supremo N°342/2004, un "grupo delictivo organizado" se define como:',
        opciones:[
          'Cualquier asociación de 2 o más personas para cometer un delito grave',
          'Un grupo estructurado de 3 o más personas, existente por cierto tiempo, que actúa concertadamente con el propósito de cometer delitos graves para obtener un beneficio económico u otro beneficio material',
          'Una organización criminal con al menos 5 integrantes y alcance transnacional comprobado',
          'Una banda con estructura jerárquica vertical, liderazgo único e identificación territorial definida'
        ],
        respuesta:1,
        explicacion:'El Artículo 2(a) de la Convención de Palermo (UNTOC, 2000) define "grupo delictivo organizado" como un grupo estructurado de 3 o más personas, existente durante cierto período de tiempo, que actúa concertadamente con el propósito de cometer uno o más delitos graves tipificados conforme a la Convención, con miras a obtener un beneficio económico u otro de orden material. Chile ratificó esta Convención mediante D.S. N°342/2004 del Ministerio de RR.EE. (Diario Oficial 16.02.2005). La Ley 20.000 (Ley de Drogas) y la Ley 20.393 (Responsabilidad Penal de Personas Jurídicas) contienen tipos penales que sancionan la participación en organizaciones criminales. El concepto de "delito grave" se define como conducta punible con privación de libertad máxima de al menos 4 años.'
      },
      {
        tipo:'VFD', nivel:'facil', area:'Unidad 2 - Crimen Organizado',
        enunciado:'Una característica distintiva de las organizaciones criminales, según la doctrina criminológica, es la existencia de un "código de silencio" (omertà) que protege a la organización de la persecución penal mediante la intimidación a testigos y la obstrucción a la justicia.',
        respuesta:'V',
        explicacion:'VERDADERO. La doctrina criminológica (Cressey, 1969; Abadinsky, 2013; Albanese, 2015) identifica características comunes en el crimen organizado: (1) estructura jerárquica, (2) continuidad temporal, (3) uso de violencia o intimidación, (4) búsqueda de beneficio económico, (5) infiltración en economía lícita, y (6) código de silencio como mecanismo de autoprotección. En Chile, el Art. 15 bis de la Ley 18.314 (Ley Antiterrorista) y las modificaciones de la Ley 20.931 (2016) reconocen la necesidad de proteger testigos frente a organizaciones criminales que utilizan la intimidación sistemática. La URAVIT tiene protocolos específicos para víctimas de crimen organizado, que incluyen reserva de identidad (Art. 307 CPP) y protección policial permanente (Art. 308 CPP).'
      },

      // --- Tráfico de drogas ---
      {
        tipo:'MC', nivel:'intermedio', area:'Unidad 2 - Tráfico de Drogas',
        enunciado:'La Ley 20.000 sanciona el tráfico ilícito de estupefacientes y sustancias psicotrópicas. ¿Cuál de las siguientes conductas NO está sancionada expresamente por el artículo 3° de dicha ley?',
        opciones:[
          'El cultivo de especies vegetales del género cannabis con autorización del SAG para fines de investigación científica',
          'La producción, fabricación o preparación de sustancias estupefacientes o psicotrópicas',
          'El tráfico, transporte o distribución de dichas sustancias a cualquier título',
          'La posesión o tenencia ilegal de dichas sustancias sin la debida autorización'
        ],
        respuesta:0,
        explicacion:'El Artículo 3° de la Ley 20.000 sanciona: elaboración, producción, fabricación, preparación, transformación, extracción, tráfico, transporte, importación, exportación, distribución o posesión de estupefacientes o sustancias psicotrópicas SIN la debida autorización. El cultivo de cannabis con autorización del SAG (Servicio Agrícola y Ganadero) para fines de investigación científica no está sancionado, pues el Decreto Supremo N°404/1982 del Ministerio de Salud (Reglamento de Estupefacientes) y sus modificaciones permiten el cultivo autorizado para fines médicos y científicos (Art. 6). La Ley 20.000 fue publicada el 16.02.2005, derogando la Ley 19.366 de 1995.'
      },

      // --- Trata de personas ---
      {
        tipo:'MC', nivel:'medio', area:'Unidad 2 - Trata de Personas',
        enunciado:'Según el artículo 411 quáter del Código Penal chileno, ¿cuáles de los siguientes son medios comisivos del delito de trata de personas? 1) Violencia o intimidación. 2) Engaño o fraude. 3) Aprovechamiento de situación de vulnerabilidad o dependencia. 4) Coacción o abuso de poder.',
        opciones:[
          'Solo 1 y 2',
          'Solo 1, 2 y 3',
          'Solo 2 y 4',
          'Todas las anteriores (1, 2, 3 y 4)'
        ],
        respuesta:3,
        explicacion:'El artículo 411 quáter del Código Penal chileno establece que la trata de personas se configura mediante: violencia, intimidación, coacción, engaño, abuso de poder, aprovechamiento de una situación de vulnerabilidad o dependencia de la víctima, o la concesión o recepción de pagos u otros beneficios para obtener el consentimiento de una persona que tenga autoridad sobre otra. TODOS los medios enumerados (1, 2, 3 y 4) son medios comisivos válidos según la ley. La finalidad del delito puede ser: explotación sexual, trabajos forzados, servidumbre, esclavitud, extracción de órganos, entre otras. Fuente: Código Penal, art. 411 quáter (introducido por Ley 20.507 de 2011); Oficio FN N°841/2020 del Ministerio Público, pág. 2; Protocolo de Palermo contra la Trata de Personas (2000).'
      },

      // --- Tráfico ilícito de migrantes ---
      {
        tipo:'MC', nivel:'dificil', area:'Unidad 2 - Tráfico de Migrantes',
        enunciado:'¿Cuál es la diferencia fundamental entre el delito de "trata de personas" y el "tráfico ilícito de migrantes" según los Protocolos de la Convención de Palermo?',
        opciones:[
          'No existe diferencia sustancial: ambos términos describen el movimiento ilegal de personas',
          'La trata implica coacción, engaño o explotación de la víctima; el tráfico de migrantes requiere consentimiento (aunque viciado) para el cruce ilegal de fronteras con fines de beneficio económico',
          'El tráfico de migrantes siempre es transfronterizo; la trata de personas solo ocurre dentro del territorio nacional',
          'La diferencia principal es el número de víctimas: trata involucra más de 5 personas, tráfico involucra menos de 5'
        ],
        respuesta:1,
        explicacion:'El Protocolo contra el Tráfico Ilícito de Migrantes (2000) y el Protocolo contra la Trata de Personas (2000), complementarios de la Convención de Palermo y ratificados por Chile (D.S. N°342/2004), diferencian: (A) TRATA DE PERSONAS (Art. 3): captación, transporte o recepción de personas recurriendo a amenaza, fuerza, coacción, fraude, engaño, abuso de poder o situación de vulnerabilidad, con fines de EXPLOTACIÓN (sexual, laboral, servidumbre, extracción de órganos). El consentimiento es irrelevante si se usó cualquier medio ilícito. (B) TRÁFICO ILÍCITO DE MIGRANTES (Art. 3): facilitación de entrada ilegal de una persona en un Estado del cual no sea nacional, con fines de obtener BENEFICIO FINANCIERO o material. La persona migrante CONSiente voluntariamente (aunque viciado por necesidad). Chile tipificó la trata (Art. 411 quáter CP, Ley 20.507/2011) y el tráfico de migrantes (Art. 411 bis CP).'
      },

      // --- Secuestro ---
      {
        tipo:'MC', nivel:'intermedio', area:'Unidad 2 - Secuestro',
        enunciado:'En el contexto del crimen organizado, el secuestro extorsivo se diferencia del secuestro simple del artículo 141 del Código Penal chileno en que:',
        opciones:[
          'El secuestro extorsivo siempre es cometido por organizaciones criminales con fines de lucro',
          'El secuestro extorsivo exige la existencia de una exigencia económica o de otra índole como condición para la liberación',
          'No existe diferencia legal en Chile: ambos se sancionan bajo el mismo tipo penal',
          'El secuestro extorsivo requiere que la víctima sea trasladada a otro país'
        ],
        respuesta:1,
        explicacion:'El Código Penal chileno distingue: (1) Secuestro simple (Art. 141): encierro o detención sin derecho, privando de libertad a otro (presidio menor a mayor en cualquiera de sus grados, es decir, de 61 días a 10 años). (2) Secuestro calificado (Art. 141 inc. 2°): si el encierro o detención se prolonga por más de 15 días, o si se comete con grave daño a la persona o interés público (presidio mayor en grado mínimo a medio, 5 años y un día a 15 años). (3) Secuestro con fines de rescate o exigencia de otra índole (Art. 141 inc. 4°): cuando se exige dinero, bienes, títulos, o se impone cualquier otra exigencia para liberar al secuestrado (presidio mayor en grado medio a máximo, 10 años y un día a 20 años). En el crimen organizado, el secuestro extorsivo es una de las principales fuentes de financiamiento ilícito, junto al narcotráfico y la trata de personas. La URAVIT tiene protocolos especiales para víctimas de secuestro que incluyen apoyo a familiares durante el cautiverio y medidas de protección post-liberación.'
      },

      // --- Extorsión ---
      {
        tipo:'VFD', nivel:'intermedio', area:'Unidad 2 - Extorsión',
        enunciado:'La extorsión, como delito frecuentemente asociado al crimen organizado, consiste en obligar a una persona a realizar, tolerar u omitir algo mediante violencia, intimidación o amenazas graves, para obtener un beneficio económico ilícito.',
        respuesta:'V',
        explicacion:'VERDADERO. El Artículo 438 del Código Penal chileno tipifica la extorsión como el acto de obligar a otro a realizar, tolerar u omitir algo mediante violencia, intimidación o amenazas, con el propósito de obtener un beneficio económico ilícito. En el contexto del crimen organizado, la extorsión adopta formas como el "cobro de piso" (pago forzado a comerciantes a cambio de "protección"), chantaje, amenazas a familiares, o exigencia de pagos bajo amenaza de daño. Este delito está estrechamente vinculado a organizaciones de narcotráfico y bandas criminales. Las víctimas de extorsión enfrentan un alto riesgo de revictimización debido al temor a denunciar, lo que exige medidas de protección reforzadas: reserva total de identidad (Art. 307 CPP), protección policial permanente (Art. 308 CPP), y en casos graves, cambio de domicilio temporal (Art. 312 CPP).'
      },

      // --- Lavado de activos ---
      {
        tipo:'MC', nivel:'intermedio', area:'Unidad 2 - Lavado de Activos',
        enunciado:'La Ley 19.913 de 2003 creó la Unidad de Análisis Financiero (UAF) en Chile para prevenir el lavado de activos y el financiamiento del terrorismo. ¿Cuál de las siguientes conductas es considerada lavado de activos según dicha ley?',
        opciones:[
          'Ocultar o disimular el origen ilícito de bienes, a sabiendas de que provienen de un delito base',
          'No declarar ingresos ante el Servicio de Impuestos Internos por más de 100 UTM',
          'Realizar transferencias bancarias internacionales sin autorización del Banco Central',
          'Poseer dinero en efectivo por montos superiores a 500 UF sin justificación'
        ],
        respuesta:0,
        explicacion:'La Ley 19.913 (2003) tipifica el lavado de activos como: (1) ocultar o disimular el origen ilícito de bienes, a sabiendas de que provienen de la perpetración de delitos base como tráfico de drogas (Ley 20.000), trata de personas, terrorismo, cohecho, fraude, entre otros; (2) adquirir, poseer, tener o usar dichos bienes conociendo su origen ilícito; (3) actos de conversión o transferencia de bienes para ocultar su origen. La UAF es la entidad encargada de recibir, analizar y reportar operaciones sospechosas al Ministerio Público. La Ley 20.393 (2009) extendió la responsabilidad penal a las personas jurídicas por lavado de activos. Las organizaciones criminales utilizan el lavado para "blanquear" ganancias del narcotráfico, trata y extorsión, integrándolas a la economía formal mediante empresas fachada, paraísos fiscales, facturas falsas o sobrefacturación.'
      },

      // --- Tráfico de armas ---
      {
        tipo:'VFD', nivel:'intermedio', area:'Unidad 2 - Tráfico de Armas',
        enunciado:'La Ley 17.798 sobre Control de Armas y Explosivos establece que el porte ilegal de armas de fuego es un delito que, en el contexto del crimen organizado, se considera un factor agravante de la responsabilidad penal.',
        respuesta:'V',
        explicacion:'VERDADERO. La Ley 17.798 (1972) y sus modificaciones (Ley 20.813 de 2015, Ley 21.310 de 2021, Ley 21.411 de 2022, Ley 21.556 de 2023, Ley 21.566 de 2023, Ley 21.571 de 2023, Ley 21.586 de 2023, Ley 21.618 de 2023) regulan la posesión, tenencia, porte, importación, exportación, fabricación y comercialización de armas de fuego. El Art. 13 sanciona con presidio menor en su grado máximo a presidio mayor en su grado mínimo (3 años y un día a 10 años) la tenencia o porte ilegal de armas de fuego prohibidas. En casos vinculados al crimen organizado (narcotráfico, bandas criminales), el uso de armas de fuego puede configurar agravantes especiales según el Art. 17 bis. Las armas frecuentemente ingresan ilegalmente por pasos fronterizos no habilitados. La URAVIT debe evaluar si la víctima está expuesta a organizaciones armadas para graduar las medidas de protección (desde rondas policiales hasta reubicación).'
      },

      // --- Homicidios en contexto de crimen organizado ---
      {
        tipo:'MC', nivel:'dificil', area:'Unidad 2 - Homicidios',
        enunciado:'¿Qué figura penal agravada del homicidio es especialmente relevante en el contexto del crimen organizado en Chile?',
        opciones:[
          'Homicidio simple del artículo 391 N°2 del Código Penal',
          'Homicidio calificado del artículo 391 N°1 cometido con premeditación, veneno, ensañamiento y/o premio o promesa remuneratoria',
          'Homicidio culposo del artículo 490 del Código Penal',
          'Homicidio en riña del artículo 392 del Código Penal'
        ],
        respuesta:1,
        explicacion:'El homicidio calificado (Art. 391 N°1 CP, presidio mayor en su grado máximo a presidio perpetuo, 15 años y un día a presidio perpetuo calificado) es la figura más relevante en crimen organizado, especialmente cuando concurren las circunstancias de: (1) PREMIO o PROMESA REMUNERATORIA — el sicariato, donde se paga a un tercero para matar (ej. ajustes de cuentas entre bandas, eliminación de testigos); (2) PREMEDITACIÓN CONOCIDA — planificación del homicidio por la organización; (3) ENSAÑAMIENTO — uso de violencia excesiva como mensaje intimidatorio a otras organizaciones o testigos. La Ley 21.212 (2020) o "Ley Gabriela" tipificó el femicidio con penas agravadas. La URAVIT aplica protocolo de protección máxima cuando una víctima o testigo enfrenta riesgo de homicidio por parte de organizaciones criminales: reserva total de identidad, protección policial 24/7, y posible reubicación con cambio de identidad en casos extremos (Art. 33 Ley 18.314).'
      },

      // --- Delitos contra la propiedad ---
      {
        tipo:'VFD', nivel:'facil', area:'Unidad 2 - Delitos contra la Propiedad',
        enunciado:'En el contexto del crimen organizado, los delitos contra la propiedad como el robo con violencia o intimidación (Art. 436 CP) pueden ser considerados manifestaciones de la actividad criminal organizada cuando son cometidos por bandas estructuradas con división de tareas, planificación previa y fines de lucro sistemático.',
        respuesta:'V',
        explicacion:'VERDADERO. Los delitos contra la propiedad (robo con violencia, robo con intimidación, robo por sorpresa, receptación) pueden ser expresiones del crimen organizado cuando existe: (1) estructura jerarquizada con división de roles (planificadores, ejecutores, receptadores, lavadores); (2) continuidad temporal (no hechos aislados); (3) uso sistemático de violencia o intimidación; (4) beneficio económico como fin principal; (5) protección mediante amenazas a víctimas y testigos. La Ley 20.931 (2016, Agenda Corta) agravó las penas para robos cometidos por bandas organizadas y facilitó la aplicación de medidas cautelares. La Ley 20.393 (2009) permite perseguir penalmente a empresas utilizadas para lavar ganancias de robos organizados. La URAVIT evalúa si la víctima de robo enfrenta riesgo de represalias de la banda para determinar nivel de protección.'
      },

      // --- Lavado de activos (complemento) ---
      {
        tipo:'VFD', nivel:'facil', area:'Unidad 2 - Lavado de Activos',
        enunciado:'Según la Ley 20.393 de Responsabilidad Penal de las Personas Jurídicas (2009), las empresas pueden ser penalmente responsables por delitos de lavado de activos, financiamiento del terrorismo, cohecho a funcionario público y receptación, cuando estos delitos son cometidos por sus dueños, controladores, ejecutivos o empleados en el marco de la actividad empresarial.',
        respuesta:'V',
        explicacion:'VERDADERO. La Ley 20.393, publicada el 2 de diciembre de 2009, estableció por primera vez en Chile la responsabilidad penal de las personas jurídicas. Originalmente aplicable a lavado de activos (Ley 19.913), financiamiento del terrorismo (Ley 18.314) y cohecho a funcionario público (Art. 250 y 251 bis CP). La Ley 20.931 (2016) amplió el catálogo a receptación. Posteriores modificaciones han ampliado progresivamente el catálogo de delitos. El Art. 3° establece que la persona jurídica responde cuando el delito es cometido "directa e inmediatamente en su interés o para su provecho, por sus dueños, controladores, responsables, ejecutivos principales, representantes o quienes realicen actividades de administración y supervisión". Esto es crucial porque organizaciones criminales utilizan empresas formalmente constituidas para lavar activos.'
      },

      // ===========================================
      // UNIDAD 3: MARCO JURÍDICO
      // Constitución y LOC MP, CPP, Medidas de protección judiciales y autónomas,
      // Agentes encubiertos, Ley 21.057, Ley 21.675, Ley 21.430
      // ===========================================

      // --- Constitución y LOC del Ministerio Público ---
      {
        tipo:'VFD', nivel:'facil', area:'Unidad 3 - Constitución y LOC MP',
        enunciado:'El Código Procesal Penal chileno (Ley N°19.696), vigente desde el año 2000, establece un sistema procesal penal de corte acusatorio y oral, donde las funciones de investigar y juzgar están separadas en órganos distintos: el Ministerio Público investiga y los tribunales de garantía y orales en lo penal juzgan.',
        respuesta:'V',
        explicacion:'VERDADERO. El CPP, Ley N°19.696, publicada el 12 de octubre de 2000 e implementada gradualmente entre 2000 (Regiones IV y IX) y 2005 (Región Metropolitana), transformó el sistema inquisitivo escrito del Código de Procedimiento Penal de 1906 en un sistema acusatorio, oral y público. El principio de separación de funciones está consagrado en el Art. 1° CPP. El Art. 3° establece que corresponde al Ministerio Público (Ley 19.640 LOC MP) dirigir en forma exclusiva la investigación penal. Los Juzgados de Garantía (Art. 14 CPP) controlan la investigación y los Tribunales de Juicio Oral en lo Penal (Art. 17 CPP) realizan el juicio y dictan sentencia. La LOC MP (Ley 19.640, Art. 1) define al MP como organismo autónomo y jerarquizado cuya función es dirigir la investigación, ejercer la acción penal y proteger a víctimas y testigos.'
      },
      {
        tipo:'MC', nivel:'facil', area:'Unidad 3 - Constitución y LOC MP',
        enunciado:'La Ley N°19.640, Ley Orgánica Constitucional del Ministerio Público, en su artículo 34 faculta al Fiscal Nacional para crear unidades especializadas. ¿Cómo se denomina la unidad encargada de la protección y atención de víctimas y testigos?',
        opciones:[
          'Unidad Regional de Atención a Víctimas y Testigos (URAVIT)',
          'Corporación de Asistencia Judicial (CAJ)',
          'Servicio Nacional de Protección Especializada',
          'Subsecretaría de Prevención del Delito'
        ],
        respuesta:0,
        explicacion:'El Art. 34 de la Ley 19.640 (LOC MP) faculta al Fiscal Nacional para "crear las unidades administrativas que sean necesarias para el cumplimiento de las funciones del Ministerio Público". En virtud de esta facultad, se creó la Unidad Regional de Atención a Víctimas y Testigos (URAVIT), presente en cada Fiscalía Regional del país. Sus funciones: evaluar nivel de riesgo; proporcionar atención psicológica, social y jurídica inmediata; recomendar y coordinar medidas de protección (Arts. 109, 307-312 CPP); acompañar a víctimas y testigos durante el proceso penal; derivar a servicios de la red pública. La URAVIT trabaja coordinadamente con el fiscal a cargo, Carabineros y PDI. La Ley 21.057 (2018) fortaleció la URAVIT para casos de NNA víctimas de delitos sexuales.'
      },

      // --- Código Procesal Penal ---
      {
        tipo:'MC', nivel:'intermedio', area:'Unidad 3 - Código Procesal Penal',
        enunciado:'El Artículo 6° del Código Procesal Penal chileno establece el principio de "protección de la víctima". ¿Cuál de los siguientes enunciados describe correctamente el contenido de este principio?',
        opciones:[
          'La víctima tiene derecho preferente a obtener indemnización del Estado por todo delito sufrido',
          'El Ministerio Público debe adoptar todas las medidas necesarias para proteger a las víctimas y garantizar el ejercicio de sus derechos, considerando su seguridad, dignidad e integridad física y psíquica',
          'La víctima puede sustituir al fiscal en la investigación si este no actúa con la debida diligencia',
          'El juez de garantía debe priorizar la protección de la víctima sobre la presunción de inocencia del imputado'
        ],
        respuesta:1,
        explicacion:'El Artículo 6° CPP, titulado "Protección de la víctima", dispone: "El Ministerio Público estará obligado a velar por la protección de la víctima del delito en todas las etapas del procedimiento penal. En cumplimiento de esta obligación, adoptará las medidas necesarias para garantizar su seguridad, proteger su intimidad y la de su familia, y evitar cualquier perturbación o afectación de su dignidad". Este artículo es concordante con el Art. 83 CPP (deber de protección del fiscal) y el Art. 34 de la LOC MP (creación de URAVIT). El principio NO implica que la víctima sustituya al fiscal ni que prevalezca sobre la presunción de inocencia. La Ley 20.931 (2016) reforzó este principio agregando el Art. 109 bis CPP.'
      },
      {
        tipo:'VFD', nivel:'intermedio', area:'Unidad 3 - Código Procesal Penal',
        enunciado:'Según el Artículo 78 del Código Procesal Penal, la víctima tiene derecho a ser oída por el fiscal antes de que este decida archivar provisionalmente la investigación o no perseverar en el procedimiento.',
        respuesta:'V',
        explicacion:'VERDADERO. El Art. 78 inciso 2° CPP establece el catálogo de derechos de la víctima, entre los cuales la letra f) consagra el derecho a "ser oída por el fiscal antes de que este decida archivar provisionalmente la investigación o no perseverar en el procedimiento". El archivo provisional (Art. 167 CPP) procede cuando los antecedentes no permiten desarrollar actividades conducentes al esclarecimiento. La decisión de no perseverar (Art. 248 letra c CPP) es una facultad del fiscal cuando no se han reunido antecedentes suficientes para fundar una acusación dentro del plazo de investigación (Art. 247 CPP: 2 años máximo, prorrogable). La víctima también tiene derecho a solicitar al juez de garantía que ordene al fiscal la reapertura del procedimiento o forzar la acusación (Art. 258 CPP - forzamiento de la acusación).'
      },
      {
        tipo:'MC', nivel:'intermedio', area:'Unidad 3 - Código Procesal Penal',
        enunciado:'El Artículo 109 del Código Procesal Penal establece que la víctima puede solicitar medidas de protección frente a hostigamientos, amenazas o atentados. ¿Ante qué autoridad puede solicitar dichas medidas?',
        opciones:[
          'Solo ante el tribunal de garantía que conoce de la causa',
          'Ante el Ministerio Público o directamente ante el tribunal de garantía',
          'Exclusivamente ante Carabineros de Chile mediante denuncia formal',
          'Solo mediante abogado patrocinante ante la Corte de Apelaciones respectiva'
        ],
        respuesta:1,
        explicacion:'El Artículo 109 del CPP (Ley N°19.696) dispone que "la víctima podrá solicitar al Ministerio Público o al tribunal de garantía las medidas de protección que resulten necesarias" frente a hostigamientos, amenazas o atentados en su contra o de su familia. Las medidas pueden ser solicitadas directamente por la víctima, sin necesidad de abogado patrocinante (Art. 109 inc. 2°). El tribunal de garantía, a solicitud del Ministerio Público o de la víctima, puede ordenar: protección policial, prohibición de acercamiento del imputado, y otras medidas cautelares del Art. 155 CPP. La Ley 20.931 (2016, Agenda Corta Antidelincuencia) reforzó estas facultades para facilitar su aplicación oportuna.'
      },

      // --- Medidas de protección judiciales y autónomas ---
      {
        tipo:'VFD', nivel:'dificil', area:'Unidad 3 - Medidas de Protección',
        enunciado:'El Artículo 109 bis del Código Procesal Penal, introducido por la Ley 20.931 (2016), permite que las medidas de protección a víctimas y testigos sean decretadas por el tribunal de garantía incluso antes de la formalización de la investigación, por un plazo máximo de 30 días prorrogables.',
        respuesta:'V',
        explicacion:'VERDADERO. El Art. 109 bis CPP, introducido por el Art. 9° de la Ley 20.931 (publicada el 5 de julio de 2016, "Agenda Corta Antidelincuencia"), establece: "En casos urgentes y graves, el tribunal de garantía, a solicitud del Ministerio Público o de la víctima, podrá decretar las medidas de protección que sean necesarias, incluso antes de la formalización de la investigación, por un plazo máximo de treinta días". Este plazo es prorrogable por períodos iguales, previa solicitud fundada. Esta innovación responde a la necesidad de proteger víctimas y testigos en las etapas iniciales de la investigación, cuando aún no hay imputado formalizado pero ya existen riesgos de hostigamiento, amenazas o atentados.'
      },
      {
        tipo:'VFD', nivel:'intermedio', area:'Unidad 3 - Medidas de Protección',
        enunciado:'Las medidas de protección establecidas en el Código Procesal Penal (Art. 109 y siguientes) solo pueden ser solicitadas por el fiscal a cargo de la investigación, no por la víctima directamente.',
        respuesta:'F',
        explicacion:'FALSO. El Art. 109 inciso 1° CPP establece que "la víctima podrá solicitar al Ministerio Público o al tribunal de garantía las medidas de protección" que estime necesarias. La víctima puede hacerlo DIRECTAMENTE, sin necesidad de abogado patrocinante. El Art. 109 inciso 2° establece: "La solicitud no requerirá de formalidad alguna y podrá ser presentada por la propia víctima". Además, el Art. 78 letra a) CPP reconoce el derecho de la víctima a "solicitar medidas de protección". El Ministerio Público (URAVIT) tiene el DEBER de evaluar el riesgo y recomendar medidas, pero la iniciativa puede ser tanto del MP como de la propia víctima.'
      },
      {
        tipo:'MC', nivel:'dificil', area:'Unidad 3 - Medidas de Protección',
        enunciado:'El Artículo 307 del Código Procesal Penal regula la "reserva de identidad" como medida de protección para testigos. ¿En qué circunstancias el tribunal puede autorizar la reserva total de identidad?',
        opciones:[
          'Siempre que el testigo lo solicite, como expresión del derecho a la protección procesal',
          'Cuando existan antecedentes calificados de riesgo grave para la vida o integridad física del testigo o su familia, por el tiempo indispensable, ponderando el principio de protección con el derecho a defensa',
          'Solo en casos de crimen organizado o terrorismo, previa autorización del Fiscal Nacional',
          'En ningún caso: la reserva total de identidad es inconstitucional por vulnerar el debido proceso'
        ],
        respuesta:1,
        explicacion:'El Art. 307 CPP (modificado por Ley 20.931 de 2016) autoriza al tribunal para disponer la reserva de identidad en 3 niveles: (1) reserva de domicilio y datos de localización; (2) reserva total de identidad, nombre y domicilio, solo cuando existan "antecedentes calificados de que existe riesgo grave para la vida o integridad física del testigo o de su familia", por "el tiempo indispensable" y mediante resolución fundada; (3) tecnologías como biombo, videoconferencia o distorsión de voz (Art. 310 CPP). El TC chileno (Rol 2030-11-INA, 2012) declaró constitucional la reserva de identidad garantizando un estándar mínimo de contradicción. La Corte IDH (Caso Norín Catrimán, 2014) sostuvo que estas medidas deben ser proporcionales y temporales.'
      },

      // --- Agentes encubiertos, reveladores e informantes ---
      {
        tipo:'MC', nivel:'intermedio', area:'Unidad 3 - Agentes Encubiertos',
        enunciado:'¿Cuál es la diferencia fundamental entre un agente encubierto, un agente revelador y un informante según la regulación chilena (Ley 20.000 y CPP)?',
        opciones:[
          'No existe diferencia legal: los tres términos se refieren a la misma figura procesal',
          'Agente encubierto: funciona con identidad falsa autorizada por el MP; Agente revelador: simula interés en comprar droga para obtener prueba; Informante: colabora con información pero no participa en operaciones',
          'Agente encubierto: policía de civil; Agente revelador: fiscal a cargo; Informante: cualquier persona',
          'El agente encubierto opera en terrorismo, el revelador en narcotráfico, y el informante en crimen común'
        ],
        respuesta:1,
        explicacion:'La legislación chilena distingue tres figuras de colaboración investigativa: (A) AGENTE ENCUBIERTO (Art. 25 Ley 20.000, Ley 21.560/2023): funcionario policial que oculta su identidad mediante una identidad supuesta autorizada por el fiscal, infiltrándose en organizaciones criminales para obtener información y pruebas. (B) AGENTE REVELADOR (Art. 25 bis Ley 20.000): funcionario policial que, sin ocultar su identidad funcional, simula interés en adquirir droga u otros objetos ilícitos para obtener evidencia del delito flagrante (ej. "compra controlada"). (C) INFORMANTE (Art. 28 Ley 20.000): persona que proporciona información a las policías o al MP sin participar en los hechos investigados ni en operaciones. La protección especial a estos agentes y a testigos en casos de crimen organizado es responsabilidad de la URAVIT bajo protocolos específicos.'
      },

      // --- Ley 21.057 - Entrevista Videograbada ---
      {
        tipo:'MC', nivel:'facil', area:'Unidad 3 - Ley 21.057',
        enunciado:'La Ley N°21.057 (2018) regula la entrevista investigativa videograbada para NNA víctimas de delitos sexuales y otros delitos graves. ¿Cuál es su objetivo principal?',
        opciones:[
          'Permitir que NNA puedan declarar desde su domicilio por videollamada privada',
          'Evitar la revictimización reduciendo las entrevistas a UNA, realizada por profesional especializado en sala acondicionada (Gesell) y grabada en video como prueba',
          'Sustituir completamente la declaración judicial por un informe psicológico escrito del entrevistador',
          'Permitir que la entrevista sea realizada por los padres del NNA en un entorno de confianza y seguridad'
        ],
        respuesta:1,
        explicacion:'La Ley 21.057 (2018) establece un sistema de entrevista única para NNA víctimas de delitos sexuales, secuestro, homicidio, lesiones graves, VIF, trata, entre otros (Art. 1°). Su objetivo central es evitar la victimización secundaria reduciendo las entrevistas a UNA entrevista investigativa realizada por un entrevistador acreditado (institución acreditada por el Ministerio de Justicia y DDHH), en una sala Gesell, grabada en audio/video. La entrevista puede usarse como prueba en juicio oral. El Art. 6° establece que "ningún NNA será sometido a más de una entrevista investigativa", salvo excepciones calificadas. La ley entró en vigencia gradual entre 2019-2021.'
      },
      {
        tipo:'VFD', nivel:'facil', area:'Unidad 3 - Ley 21.057',
        enunciado:'La Ley 21.057 permite que NNA víctimas de delitos sexuales puedan ser interrogados directamente por el abogado defensor del imputado durante el juicio oral, como garantía del derecho a defensa.',
        respuesta:'F',
        explicacion:'FALSO. La Ley 21.057 evita que NNA víctimas enfrenten interrogatorio directo de la defensa. El Art. 15° establece que cuando excepcionalmente deban declarar en juicio: (a) sala contigua conectada por circuito cerrado; (b) auxilio de facilitador o intermediario; (c) LAS PARTES DIRIGEN LAS PREGUNTAS AL JUEZ, QUIEN LAS FORMULA AL NNA adaptándolas a lenguaje comprensible (no interrogatorio directo). El Art. 15 bis permite al tribunal limitar o rechazar preguntas que puedan afectar la integridad psíquica del NNA. El TC declaró constitucionales estas disposiciones (Rol 3001-16-INA, 2017), considerando que el interés superior del niño (Art. 3° Convención de Derechos del Niño) justifica estas limitaciones al derecho de defensa.'
      },

      // --- Ley 21.675 - Violencia integral contra mujeres ---
      {
        tipo:'MC', nivel:'dificil', area:'Unidad 3 - Ley 21.675',
        enunciado:'La Ley 21.675 (2024) establece medidas para prevenir, sancionar y erradicar la violencia integral contra las mujeres en razón de género. ¿Qué principio rector exige al Estado garantizar atención psicológica, asesoría jurídica y protección policial a mujeres víctimas?',
        opciones:[
          'Principio de igualdad formal ante la ley sin distinción de género',
          'Principio de protección integral con enfoque de género y debida diligencia',
          'Principio de subsidiariedad penal y mínima intervención estatal',
          'Principio de presunción de veracidad del testimonio de la víctima'
        ],
        respuesta:1,
        explicacion:'La Ley 21.675 (2024), "Ley Integral contra la Violencia hacia las Mujeres", establece en su Artículo 4° los principios rectores: protección integral, debida diligencia, enfoque de género, interseccionalidad, no discriminación, y participación. El principio de protección integral con enfoque de género (Art. 4° letra b) impone al Estado la obligación de garantizar: atención psicológica especializada y gratuita, asesoría jurídica, protección policial oportuna, medidas cautelares efectivas, y reparación integral del daño. La debida diligencia (Art. 4° letra e) exige que el Estado actúe con prontitud y exhaustividad para prevenir, investigar, sancionar y reparar la violencia de género (estándar Corte IDH, Caso Campo Algodonero vs. México, 2009). La ley modifica cuerpos legales incluyendo el CPP, Código Penal y Ley 20.066 (VIF).'
      },

      // --- Ley 21.430 - Garantías de la niñez ---
      {
        tipo:'VFD', nivel:'intermedio', area:'Unidad 3 - Ley 21.430',
        enunciado:'La Ley 21.430 sobre Garantías y Protección Integral de los Derechos de la Niñez y Adolescencia (2022) establece que el interés superior del niño es un derecho sustantivo, un principio interpretativo fundamental y una norma de procedimiento que debe ser considerado en todas las decisiones que afecten a NNA.',
        respuesta:'V',
        explicacion:'VERDADERO. La Ley 21.430, publicada el 15 de marzo de 2022 e introducida gradualmente hasta su plena vigencia, establece en su Art. 2° que "el interés superior del niño, niña o adolescente es un derecho, un principio y una norma de procedimiento". Esto significa: (A) Como DERECHO SUSTANTIVO: el NNA tiene derecho a que su interés superior sea una consideración primordial en toda decisión (Art. 7°); (B) Como PRINCIPIO INTERPRETATIVO: toda norma jurídica debe interpretarse de la forma más favorable para el NNA; (C) Como NORMA DE PROCEDIMIENTO: toda decisión administrativa o judicial debe incluir una estimación de las posibles repercusiones en el NNA. La Ley 21.430 creó además el Sistema de Garantías, la Subsecretaría de la Niñez, y la Defensoría de los Derechos de la Niñez. Complementa la Ley 21.057 al reforzar la protección de NNA víctimas de delitos sexuales.'
      },
      {
        tipo:'MC', nivel:'dificil', area:'Unidad 3 - Ley 21.430',
        enunciado:'Según la Ley 21.430 de Garantías de la Niñez (2022), ¿cuál de las siguientes NO es una garantía procesal específica para NNA en el sistema de justicia?',
        opciones:[
          'Derecho a ser oído en todo procedimiento judicial o administrativo que les afecte',
          'Derecho a que se designe un abogado especializado para su representación judicial',
          'Derecho a que el juicio se realice en el plazo más breve posible y sin dilaciones indebidas',
          'Derecho a que el fiscal sea reemplazado si el NNA no se siente cómodo con él'
        ],
        respuesta:3,
        explicacion:'La Ley 21.430 (2022) establece garantías procesales para NNA en su Art. 23: (1) derecho a ser oído en todo procedimiento (letra a); (2) derecho a ser representado por abogado especializado (letra b); (3) derecho a un procedimiento expedito, sin dilaciones (letra c); (4) derecho a que las decisiones sean debidamente fundamentadas considerando su interés superior (Art. 2° y 7°). SIN EMBARGO, la ley NO contempla el derecho a que se reemplace al fiscal a cargo simplemente porque el NNA "no se sienta cómodo". El cambio de fiscal solo procede por causales objetivas (inhabilidad, implicancia, recusación) según el Art. 54 y siguientes de la LOC MP. Esta opción es incorrecta porque confunde el derecho a trato digno con una facultad de veto sobre el persecutor penal.'
      },


      // ===========================================
      // UNIDAD 4: INTERVENCIÓN
      // Primeros Auxilios Psicológicos, Técnicas de entrevista y escucha activa,
      // Prevención de victimización secundaria, Evaluación de riesgo,
      // Plan de intervención y seguimiento, Autocuidado del equipo
      // ===========================================

      // --- Primeros Auxilios Psicológicos ---
      {
        tipo:'MC', nivel:'experto', area:'Unidad 4 - Primeros Auxilios Psicológicos',
        enunciado:'Según el Manual ABCDE de Primeros Auxilios Psicológicos (2018) y los cinco elementos esenciales de Hobfoll et al. (2007), ¿cuáles afirmaciones sobre la intervención en crisis son correctas? 1) Los PAP deben centrarse en satisfacer necesidades básicas (agua, alimento, techo, seguridad). 2) La técnica de reentrenamiento de la ventilación (respiración 4-4-4) debe enseñarse para uso inmediato y diario durante al menos 10 minutos, 3 veces al día. 3) La psicoeducación debe normalizar las reacciones emocionales y cognitivas tras el trauma. 4) El protocolo ABCDE debe aplicarse de manera rígida y en el mismo orden para todas las víctimas.',
        opciones:[
          'Solo 1, 2 y 3',
          'Solo 1 y 4',
          'Solo 2 y 3',
          'Ninguna de las anteriores'
        ],
        respuesta:0,
        explicacion:'Según el Manual ABCDE para Primeros Auxilios Psicológicos (2018, págs. 8-29) y los cinco elementos esenciales de Hobfoll et al. (2007) —calma, seguridad, autoeficacia, conexión, esperanza— los PAP son una intervención flexible que: (1) prioriza necesidades básicas (alimento, agua, abrigo, seguridad física); (2) utiliza técnicas de respiración 4-4-4 (inhalar 4 seg, retener 4, exhalar 4) para reducir la ansiedad, recomendando práctica diaria de 10 minutos, 3 veces al día; (3) normaliza reacciones emocionales mediante psicoeducación ("es normal sentir miedo, confusión o ira después de lo vivido"). La afirmación 4 es INCORRECTA porque el manual enfatiza que ABCDE es flexible: "cada paso constituye una oferta, no una obligación", y el orden se adapta a las necesidades de cada persona. Fuente: Manual ABCDE para Primeros Auxilios Psicológicos, 2018, págs. 8-11, 23-27; Hobfoll et al. (2007), Five Essential Elements of Immediate and Mid-Term Mass Trauma Intervention, Psychiatry.'
      },
      {
        tipo:'VFD', nivel:'facil', area:'Unidad 4 - Primeros Auxilios Psicológicos',
        enunciado:'Los Primeros Auxilios Psicológicos (PAP) son una intervención profesional de salud mental de largo plazo que busca tratar trastornos psicológicos establecidos como el TEPT y la depresión.',
        respuesta:'F',
        explicacion:'FALSO. Los Primeros Auxilios Psicológicos (PAP) NO son un tratamiento de salud mental de largo plazo, sino una intervención INMEDIATA y BREVE (horas a días post-evento traumático) diseñada para: (1) estabilizar emocionalmente a la víctima; (2) reducir el riesgo de desarrollar trastornos mentales posteriores; (3) conectar a la persona con recursos de apoyo y redes (familia, comunidad, servicios de salud); (4) proporcionar información práctica y psicoeducación. Los PAP NO tratan el TEPT —para eso existen terapias especializadas como la Terapia Cognitivo-Conductual Centrada en el Trauma (TCC-CT) o EMDR (Desensibilización y Reprocesamiento por Movimientos Oculares). Cualquier profesional de primera respuesta (URAVIT, Carabineros, PDI, SAMU, bomberos) puede aplicar PAP con entrenamiento básico. El Manual ABCDE (2018) es la referencia oficial utilizada por la URAVIT del Ministerio Público.'
      },

      // --- Técnicas de entrevista y escucha activa ---
      {
        tipo:'MC', nivel:'intermedio', area:'Unidad 4 - Entrevista y Escucha Activa',
        enunciado:'¿Cuál de las siguientes técnicas de entrevista con víctimas es fundamental para prevenir la victimización secundaria, según los protocolos de la URAVIT y la Ley 21.057?',
        opciones:[
          'Entrevista confrontacional: cuestionar las contradicciones en el relato de la víctima para obtener la verdad',
          'Entrevista investigativa única con enfoque forense no revictimizante, formulando preguntas abiertas, evitando sugerencias y repeticiones innecesarias',
          'Entrevista grupal con todas las víctimas del mismo caso para contrastar versiones y detectar inconsistencias',
          'Entrevista escrita mediante cuestionario estandarizado autoaplicable en sede policial'
        ],
        respuesta:1,
        explicacion:'La entrevista investigativa con enfoque forense no revictimizante es el estándar establecido por la Ley 21.057 (2018) y los protocolos URAVIT. Sus principios incluyen: (A) PREGUNTAS ABIERTAS ("cuéntame qué pasó") en lugar de cerradas o directivas; (B) NO CONFRONTAR ni cuestionar agresivamente —la confrontación genera estrés y puede distorsionar el recuerdo; (C) ENTREVISTA ÚNICA —evitar múltiples interrogatorios por distintos funcionarios (Art. 6° Ley 21.057); (D) NO SUGERIR respuestas ni inducir relatos; (E) ADAPTAR lenguaje y ritmo a la edad y condición de la víctima; (F) AMBIENTE SEGURO —sala privada, sin interrupciones, con mobiliario adecuado. La técnica NICHD (National Institute of Child Health and Human Development) es el protocolo de entrevista forense utilizado para NNA. La escucha activa implica: parafrasear, validar emociones ("entiendo que esto es difícil"), mantener contacto visual, no interrumpir, y respetar silencios.'
      },
      {
        tipo:'VFD', nivel:'intermedio', area:'Unidad 4 - Entrevista y Escucha Activa',
        enunciado:'La "escucha activa" en el contexto de atención a víctimas implica que el profesional debe interrumpir frecuentemente a la víctima para hacer preguntas de seguimiento que permitan obtener la mayor cantidad de detalles sobre el delito.',
        respuesta:'F',
        explicacion:'FALSO. La escucha activa NO consiste en interrumpir frecuentemente para obtener detalles. Por el contrario, la técnica correcta implica: (1) NO INTERRUMPIR —permitir que la víctima narre a su propio ritmo; (2) PARAFRASEAR —repetir con otras palabras para confirmar comprensión; (3) VALIDAR EMOCIONES —"es comprensible que te sientas así"; (4) RESPETAR SILENCIOS —no llenar pausas con preguntas; (5) HACER PREGUNTAS ABIERTAS al final de cada bloque narrativo, no durante; (6) MANTENER CONTACTO VISUAL y postura corporal receptiva. Las interrupciones frecuentes aumentan la ansiedad de la víctima, fragmentan el recuerdo, y constituyen una forma de victimización secundaria. El protocolo NICHD establece una fase de "rapport building" (construcción de confianza) antes de abordar el tema del delito. La URAVIT capacita a sus profesionales en estas técnicas de entrevista no revictimizante.'
      },

      // --- Prevención de victimización secundaria ---
      {
        tipo:'MC', nivel:'intermedio', area:'Unidad 4 - Prevención Victimización Secundaria',
        enunciado:'Según los protocolos de la URAVIT y la Ley 21.057, ¿cuál de las siguientes NO es una medida efectiva para prevenir la victimización secundaria en el proceso penal?',
        opciones:[
          'Evitar que la víctima tenga contacto visual con el imputado durante su declaración utilizando biombo o videoconferencia',
          'Reducir el número de entrevistas y declaraciones a las estrictamente necesarias',
          'Informar clara y oportunamente a la víctima sobre el estado del proceso y sus derechos',
          'Exigir a la víctima que declare en cada audiencia para que el tribunal pueda formarse convicción directa'
        ],
        respuesta:3,
        explicacion:'Exigir la presencia de la víctima en CADA audiencia es una práctica revictimizante contraria a los protocolos vigentes. Las medidas efectivas de prevención de victimización secundaria según URAVIT incluyen: (A) separación física o visual del imputado mediante biombo, videoconferencia o sala contigua (Art. 310 CPP); (B) ENTREVISTA ÚNICA —que la víctima declare una sola vez ante profesional especializado (Art. 6° Ley 21.057); (C) información oportuna sobre el proceso (Art. 78 CPP); (D) trato respetuoso y lenguaje adaptado; (E) acompañamiento psicosocial durante todo el proceso; (F) salas de espera separadas para víctimas e imputados en tribunales. Obligar a la víctima a revivir el trauma en cada audiencia multiplica el daño psicológico, contradice el principio de protección (Art. 6 CPP) y viola los estándares internacionales de la Corte IDH.'
      },

      // --- Evaluación de riesgo ---
      {
        tipo:'MC', nivel:'dificil', area:'Unidad 4 - Evaluación de Riesgo',
        enunciado:'La URAVIT utiliza protocolos de evaluación de riesgo para determinar el nivel de protección requerido. ¿Cuáles de los siguientes factores son considerados en dicha evaluación? 1) Relación de la víctima con el imputado/organización criminal. 2) Capacidad de daño del agresor u organización. 3) Existencia de amenazas o intimidación previas. 4) Vulnerabilidad de la víctima (edad, género, discapacidad, situación migratoria). 5) Valor probatorio del testimonio. 6) Red de apoyo social y familiar disponible.',
        opciones:[
          'Solo 1, 2, 3, 4 y 6',
          'Solo 1, 2, 3 y 5',
          'Solo 3, 4 y 6',
          'Todos los factores (1 al 6)'
        ],
        respuesta:0,
        explicacion:'La URAVIT del Ministerio Público evalúa el riesgo mediante una matriz que considera: (1) Relación víctima-imputado (vínculo, jerarquía, acceso); (2) Capacidad de daño (armas, integrantes, alcance territorial de la organización); (3) Antecedentes de amenazas o intimidación (frecuencia, gravedad, medios); (4) Vulnerabilidad de la víctima (edad, género, discapacidad, situación migratoria, pertenencia a grupos discriminados); (5) RED DE APOYO disponible (familia, comunidad, servicios). El factor 5 (VALOR PROBATORIO DEL TESTIMONIO) NO es un factor de riesgo, sino una valoración procesal que corresponde al fiscal y al tribunal. La evaluación de riesgo determina el nivel: bajo (rondas esporádicas), medio (rondas frecuentes + botón de pánico), alto (protección permanente + reserva de identidad + cambio de domicilio temporal), extremo (reubicación total + cambio de identidad).'
      },

      // --- Plan de intervención y seguimiento ---
      {
        tipo:'VFD', nivel:'intermedio', area:'Unidad 4 - Plan de Intervención',
        enunciado:'El plan de intervención y seguimiento de la URAVIT es un documento dinámico que se revisa periódicamente y se adapta según la evolución del riesgo, las necesidades cambiantes de la víctima y el avance del proceso penal.',
        respuesta:'V',
        explicacion:'VERDADERO. El plan de intervención y seguimiento elaborado por la URAVIT es un documento DINÁMICO (no estático) que se adapta a los cambios en las circunstancias de la víctima y del proceso penal. Contiene: (1) evaluación de riesgo inicial; (2) medidas de protección recomendadas (judiciales y autónomas); (3) plan de atención psicosocial (derivación a psicólogo, trabajador social, asesoría jurídica); (4) cronograma de seguimiento (contactos periódicos según nivel de riesgo: semanal/quincenal/mensual); (5) indicadores de alerta (nuevas amenazas, incumplimiento de medidas cautelares, desprotección); (6) criterios de revisión y ajuste. El plan se revisa periódicamente y puede intensificarse (si aumenta el riesgo) o graduarse (si las condiciones mejoran). La víctima participa activamente en la definición del plan mediante consentimiento informado (principio de voluntariedad, Art. 109 CPP).'
      },

      // --- Autocuidado del equipo ---
      {
        tipo:'MC', nivel:'intermedio', area:'Unidad 4 - Autocuidado del Equipo',
        enunciado:'El "desgaste por empatía" o "traumatización vicaria" que afecta a profesionales que trabajan con víctimas de delitos violentos se caracteriza por:',
        opciones:[
          'Síntomas similares al TEPT que el profesional desarrolla por exposición repetida a relatos traumáticos de las víctimas, incluyendo intrusiones, evitación e hiperactivación',
          'Agotamiento laboral general (burnout) causado exclusivamente por exceso de carga horaria y condiciones contractuales',
          'Una psicopatología grave que incapacita permanentemente al profesional para ejercer su labor',
          'Transferencia emocional positiva que fortalece la relación terapéutica entre profesional y víctima'
        ],
        respuesta:0,
        explicacion:'La traumatización vicaria o "desgaste por empatía" (Figley, 1995; Pearlman & Saakvitne, 1995) es un fenómeno que afecta a profesionales expuestos repetidamente a relatos traumáticos: psicólogos URAVIT, fiscales, entrevistadores Ley 21.057, peritos, policías. Se caracteriza por síntomas similares al TEPT: intrusiones (imágenes involuntarias del relato), evitación (resistirse a ciertos casos), hiperactivación (alerta constante), y alteraciones en esquemas cognitivos (visión del mundo como peligroso). El Manual ABCDE (2018, págs. 30-34) y los protocolos URAVIT recomiendan medidas de autocuidado: (1) supervisión clínica regular; (2) rotación de casos; (3) límites claros trabajo-vida personal; (4) técnicas de mindfulness; (5) espacios de contención entre pares (debriefing); (6) psicoeducación sobre el fenómeno; (7) monitoreo de señales de alerta (insomnio, irritabilidad, cinismo, aislamiento). El autocuidado no es opcional sino un DEBER ÉTICO para garantizar atención de calidad a las víctimas.'
      },
      {
        tipo:'VFD', nivel:'facil', area:'Unidad 4 - Autocuidado del Equipo',
        enunciado:'El autocuidado del equipo profesional de la URAVIT incluye la supervisión clínica regular, la rotación de casos de alto impacto, y los espacios de contención entre pares como medidas para prevenir el desgaste por empatía.',
        respuesta:'V',
        explicacion:'VERDADERO. El Manual ABCDE para Primeros Auxilios Psicológicos (2018, Sección V, págs. 30-34) y los protocolos internos de la URAVIT del Ministerio Público establecen que el autocuidado del equipo profesional es una OBLIGACIÓN INSTITUCIONAL, no solo responsabilidad individual. Las medidas incluyen: (A) SUPERVISIÓN CLÍNICA REGULAR —espacio semanal o quincenal con supervisor externo para procesar casos difíciles; (B) ROTACIÓN DE CASOS DE ALTO IMPACTO —evitar que un mismo profesional acumule múltiples casos con alta carga traumática (ej. homicidios de NNA, violencia sexual extrema); (C) ESPACIOS DE CONTENCIÓN ENTRE PARES —reuniones de equipo para compartir experiencias, normalizar reacciones y brindar apoyo mutuo; (D) LÍMITES SALUDABLES —jornada laboral definida, desconexión digital, vacaciones; (E) CAPACITACIÓN en identificación de signos de alarma de desgaste por empatía. Un profesional desgastado NO puede brindar atención de calidad y corre riesgo de revictimizar involuntariamente a las víctimas.'
      },

      // --- Evaluación de riesgo - complemento ---
      {
        tipo:'VFD', nivel:'facil', area:'Unidad 4 - Evaluación de Riesgo',
        enunciado:'La evaluación de riesgo que realiza la URAVIT es un proceso único que se efectúa al inicio del caso y no requiere actualizaciones posteriores.',
        respuesta:'F',
        explicacion:'FALSO. La evaluación de riesgo es un proceso DINÁMICO y CONTINUO, no una acción única. La URAVIT realiza evaluaciones periódicas según el nivel de riesgo: riesgo bajo (revisión mensual), riesgo medio (revisión quincenal), riesgo alto (revisión semanal), riesgo extremo (monitoreo continuo). La reevaluación es necesaria porque las circunstancias cambian: el imputado puede ser liberado (cambio de medida cautelar), pueden surgir nuevas amenazas, la víctima puede cambiar de domicilio o trabajo, o la organización criminal puede ser desarticulada. El Art. 109 CPP y los protocolos URAVIT exigen que las medidas de protección se revisen y ajusten periódicamente para garantizar su idoneidad y proporcionalidad.'
      },

      // ===========================================
      // UNIDAD 5: COORDINACIÓN
      // Redes y protocolos intersectoriales, Cooperación internacional,
      // Fiscalía Supraterritorial y SAC
      // ===========================================

      // --- Redes y protocolos intersectoriales ---
      {
        tipo:'MC', nivel:'intermedio', area:'Unidad 5 - Redes Intersectoriales',
        enunciado:'¿Por qué es fundamental la coordinación intersectorial (Ministerio Público, Carabineros, PDI, Servicio de Salud, SENDA, Sernameg, entre otros) para la protección efectiva de víctimas y testigos?',
        opciones:[
          'Porque así lo exige el reglamento interno del Ministerio Público como mera formalidad administrativa',
          'Porque la protección integral requiere coordinar recursos y competencias de distintos organismos del Estado que ningún servicio puede proveer por sí solo (seguridad policial + atención psicológica + asesoría jurídica + apoyo social + protección perimetral)',
          'Porque cada institución debe mantener su autonomía absoluta sin compartir información para proteger los datos personales de las víctimas',
          'Porque la ley exige que todas las decisiones de protección sean tomadas por unanimidad en un comité interinstitucional'
        ],
        respuesta:1,
        explicacion:'La protección integral de víctimas y testigos requiere necesariamente coordinación intersectorial porque NINGÚN servicio público puede proveer por sí solo todas las dimensiones de la protección: (A) Ministerio Público/URAVIT: evaluación de riesgo, coordinación general y solicitud de medidas judiciales; (B) Carabineros/PDI: protección policial perimetral, rondas, botón de pánico, patrullajes preventivos; (C) Servicios de Salud: atención médica de urgencia, tratamiento psicológico especializado; (D) Sernameg: casas de acogida para mujeres víctimas de violencia; (E) SENDA: tratamiento por consumo problemático; (F) Municipios: apoyo social, subsidios, inserción laboral; (G) Ministerio de Desarrollo Social: programas de acompañamiento. La Ley 21.675 (2024) refuerza esta obligación creando un Sistema Nacional Integral de Protección. Los protocolos URAVIT establecen canales formales de derivación y mesas de trabajo intersectoriales periódicas.'
      },
      {
        tipo:'VFD', nivel:'facil', area:'Unidad 5 - Redes Intersectoriales',
        enunciado:'Los protocolos intersectoriales de protección de víctimas establecen canales formales de comunicación y derivación entre las distintas instituciones del Estado involucradas en la protección.',
        respuesta:'V',
        explicacion:'VERDADERO. Los protocolos intersectoriales establecidos por la URAVIT del Ministerio Público definen canales formales de comunicación y derivación entre instituciones. Por ejemplo: (1) Protocolo MP-Carabineros-PDI para activación de rondas policiales y botones de pánico; (2) Protocolo MP-Servicios de Salud para atención psicológica de urgencia y tratamiento especializado de víctimas de delitos violentos; (3) Protocolo MP-Sernameg para derivación a casas de acogida de mujeres víctimas de violencia de género; (4) Protocolo MP-Mejor Niñez para protección de NNA víctimas de delitos sexuales; (5) Convenios MP-Municipios para apoyo social (alimentos, transporte, inserción laboral). La Ley 20.931 (2016) reforzó estos mecanismos, y la Ley 21.675 (2024) creó un Sistema Nacional Integral de Protección que institucionaliza la coordinación intersectorial.'
      },

      // --- Cooperación internacional ---
      {
        tipo:'MC', nivel:'dificil', area:'Unidad 5 - Cooperación Internacional',
        enunciado:'¿Qué instrumento de cooperación internacional permite a la Fiscalía de Chile solicitar asistencia a otros países para proteger a un testigo que debe ser reubicado fuera del territorio nacional por riesgo grave proveniente de crimen organizado transnacional?',
        opciones:[
          'Carta rogatoria del artículo 76 del Código Procesal Penal, que solo aplica para notificaciones',
          'Convención de Palermo (2000) y tratados bilaterales de asistencia jurídica mutua, que permiten solicitar medidas de protección, reubicación de testigos, e intercambio de información entre Estados parte',
          'El Ministerio de Relaciones Exteriores asume automáticamente la protección de cualquier testigo que lo solicite',
          'No existe ningún instrumento: Chile no puede trasladar testigos a otros países por razones de soberanía'
        ],
        respuesta:1,
        explicacion:'La Convención de las Naciones Unidas contra la Delincuencia Organizada Transnacional (Convención de Palermo, 2000), ratificada por Chile (D.S. N°342/2004), en su Art. 24 establece la obligación de los Estados parte de "adoptar medidas apropiadas para proteger de manera eficaz contra posibles actos de represalia o intimidación a los testigos" incluyendo su reubicación. El Art. 18 establece la asistencia judicial recíproca. Chile ha suscrito tratados bilaterales de asistencia jurídica mutua con países como Argentina, Perú, Colombia, México, España, EE.UU., entre otros. La Fiscalía Nacional, a través de la Unidad de Cooperación Internacional y Extradiciones (UCIEX), canaliza estas solicitudes. La reubicación internacional de testigos es una medida extrema reservada para casos donde la organización criminal tiene capacidad de ubicar a la persona en todo el territorio nacional (ej. cárteles del narcotráfico).'
      },

      // --- Fiscalía Supraterritorial y SAC ---
      {
        tipo:'MC', nivel:'intermedio', area:'Unidad 5 - Fiscalía Supraterritorial y SAC',
        enunciado:'La Fiscalía Supraterritorial (FST) se especializa en la investigación y persecución de delitos de crimen organizado y alta complejidad que trascienden el ámbito de una sola Fiscalía Regional. ¿Cuál es su principal ventaja operativa frente a las Fiscalías Regionales tradicionales?',
        opciones:[
          'Su personal está compuesto exclusivamente por fiscales extranjeros con experiencia en crimen organizado',
          'Su competencia territorial abarca todo el país, permitiendo investigar organizaciones criminales que operan en múltiples regiones sin fragmentar la investigación, con equipos multidisciplinarios especializados y capacidad de coordinar medidas de protección a escala nacional',
          'Reemplaza a Carabineros y PDI en las diligencias de investigación de delitos de alta complejidad',
          'Solo interviene en casos que involucran a funcionarios públicos de alto rango o autoridades de gobierno'
        ],
        respuesta:1,
        explicacion:'La Fiscalía Supraterritorial (FST), creada en el marco de la Reforma Procesal Penal y fortalecida por las leyes 20.000, 20.931, 21.212 y 21.560, tiene competencia nacional para investigar y perseguir delitos de crimen organizado que trascienden los límites de una Fiscalía Regional. Sus ventajas operativas: (A) competencia territorial nacional (Art. 5° LOC MP), evitando la fragmentación de causas entre regiones; (B) equipos multidisciplinarios especializados (fiscales, analistas criminales, contadores forenses, expertos en informática); (C) SAC (Sistema de Análisis Criminal): plataforma tecnológica que integra y cruza datos de múltiples investigaciones para identificar patrones, vínculos y estructuras criminales a nivel nacional; (D) capacidad de coordinar medidas de protección a víctimas y testigos en todo el país a través de la red URAVIT; (E) relación directa con UCIEX para cooperación internacional. La FST NO reemplaza a las policías (sigue dirigiéndolas funcionalmente, Art. 3° LOC MP) ni se limita a casos de altos funcionarios.'
      },
      {
        tipo:'VFD', nivel:'facil', area:'Unidad 5 - Fiscalía Supraterritorial y SAC',
        enunciado:'El Sistema de Análisis Criminal (SAC) de la Fiscalía Supraterritorial permite cruzar datos de múltiples investigaciones para identificar patrones, vínculos y estructuras criminales a nivel nacional.',
        respuesta:'V',
        explicacion:'VERDADERO. El Sistema de Análisis Criminal (SAC) es una plataforma tecnológica de la Fiscalía Supraterritorial (FST) que integra y analiza datos provenientes de múltiples investigaciones penales. Sus funciones incluyen: (1) CRUCE DE DATOS: vincula investigaciones aparentemente independientes que comparten imputados, modus operandi, zonas geográficas o víctimas; (2) IDENTIFICACIÓN DE PATRONES: detecta rutas de narcotráfico, circuitos de lavado de activos, redes de trata de personas; (3) MAPEO DE ESTRUCTURAS CRIMINALES: reconstruye organigramas, roles, jerarquías y vínculos; (4) ANÁLISIS DE RIESGO PARA VÍCTIMAS: evalúa la capacidad de daño de organizaciones criminales a nivel nacional para graduar medidas de protección; (5) INTELIGENCIA PROACTIVA: anticipa movimientos criminales basándose en datos históricos. El SAC es una herramienta clave para la investigación del crimen organizado porque permite ver el "bosque" (la organización) y no solo los "árboles" (delitos individuales).'
      },

      // ===========================================
      // MEDIDAS DE PROTECCIÓN (Transversal - Unidades 3 y 5)
      // ===========================================

      {
        tipo:'VFD', nivel:'facil', area:'Medidas de Protección (Transversal)',
        enunciado:'Las medidas de protección a víctimas y testigos tienen como finalidad evitar la revictimización y garantizar la comparecencia efectiva de víctimas y testigos en el proceso penal, resguardando su integridad física y psicológica.',
        respuesta:'V',
        explicacion:'VERDADERO. Las medidas de protección contempladas en los Arts. 109, 109 bis, 307, 308, 310 y 312 del CPP persiguen una doble finalidad: (1) PROTEGER a la víctima o testigo de hostigamientos, amenazas, atentados o cualquier forma de intimidación, evitando victimización secundaria; y (2) GARANTIZAR la efectividad del proceso penal, asegurando que víctimas y testigos puedan prestar su declaración sin temor a represalias. La URAVIT (Art. 34 Ley 19.640) implementa estas medidas mediante: protección policial (rondas, custodia personal, botón de pánico), reserva de identidad y domicilio, uso de biombo o videoconferencia en juicio oral, reubicación temporal, prohibición de acercamiento (Art. 155 CPP), y coordinación con la red de apoyo psicosocial.'
      },
      {
        tipo:'MC', nivel:'facil', area:'Medidas de Protección (Transversal)',
        enunciado:'¿Cuál de las siguientes NO es una medida de protección contemplada expresamente en el Código Procesal Penal chileno para víctimas y testigos?',
        opciones:[
          'Protección policial mediante rondas periódicas o custodia personal',
          'Reserva de identidad y domicilio del testigo protegido',
          'Uso de biombo o videoconferencia en el juicio oral',
          'Asignación de una vivienda fiscal permanente para la víctima y su familia'
        ],
        respuesta:3,
        explicacion:'La asignación de una vivienda fiscal PERMANENTE NO es una medida de protección contemplada en el CPP. Las medidas expresamente reguladas: (A) Art. 109 y 109 bis CPP: medidas de protección en general, incluyendo prohibición de acercamiento; (B) Art. 307 CPP: reserva de identidad y domicilio del testigo protegido; (C) Art. 308 CPP: protección policial mediante rondas periódicas, custodia personal, botón de pánico o patrullajes focalizados; (D) Art. 310 CPP: recursos tecnológicos en juicio oral como biombo, videoconferencia, distorsión de voz, o declaración en sala contigua; (E) Art. 312 CPP: cambio de domicilio TEMPORAL y entrega de recursos económicos para traslado (medida excepcional, no permanente). Existen programas de apoyo como el Fondo Nacional de Seguridad Pública, pero la asignación permanente de vivienda fiscal no es una medida cautelar procesal penal.'
      },
      {
        tipo:'VFD', nivel:'intermedio', area:'Medidas de Protección (Transversal)',
        enunciado:'Las medidas de protección para víctimas y testigos se extinguen automáticamente al dictarse la sentencia definitiva en el juicio oral, sin posibilidad de extensión.',
        respuesta:'F',
        explicacion:'FALSO. El Art. 312 CPP establece que las medidas de protección se mantienen durante todo el proceso penal, pero pueden EXTENDERSE más allá de la sentencia definitiva cuando persiste el riesgo para la víctima o testigo. El tribunal, el Ministerio Público o la víctima pueden solicitar la prórroga de las medidas, y el tribunal de garantía decidirá fundadamente. La Ley 20.931 (2016) reforzó la continuidad de las medidas al permitir su aplicación desde antes de la formalización (Art. 109 bis) y su mantención en la etapa de ejecución de la pena. La URAVIT realiza evaluaciones periódicas de riesgo para determinar necesidad de mantener, modificar o cesar las medidas. En casos de crimen organizado, las medidas pueden mantenerse por AÑOS después de la sentencia debido a la naturaleza permanente de la amenaza (venganza, represalias, eliminación de testigos).'
      },
      {
        tipo:'MC', nivel:'intermedio', area:'Medidas de Protección (Transversal)',
        enunciado:'El Artículo 310 del CPP permite el uso de "recursos tecnológicos" para proteger a testigos durante el juicio oral. ¿Cuál de los siguientes NO está expresamente mencionado en dicho artículo?',
        opciones:[
          'Biombo físico que impide ver al testigo desde la sala de audiencia',
          'Videoconferencia desde un lugar remoto con distorsión de imagen',
          'Distorsión de la voz del testigo mediante procesamiento de audio',
          'Sustitución del testigo por un actor profesional que reproduce su testimonio'
        ],
        respuesta:3,
        explicacion:'El Art. 310 CPP NO contempla la sustitución del testigo por un actor profesional. Las medidas tecnológicas autorizadas: (1) "separación física del testigo del imputado o del público, mediante tabiques, biombos u otros elementos que impidan la visión del testigo"; (2) "declaración del testigo fuera de la sala de audiencia, a través de videoconferencia u otro dispositivo que transmita su imagen y voz en tiempo real" (Art. 310 inc. 3°); (3) "distorsión de la voz o de la imagen del testigo" (Art. 310 inc. 4°). La Ley 20.931 (2016) agregó "declaración en sala contigua con circuito cerrado de televisión". La sustitución por un actor vulneraría el principio de inmediación (Art. 329 CPP) y el derecho a defensa (Art. 93 CPP).'
      },
      {
        tipo:'VFD', nivel:'dificil', area:'Medidas de Protección (Transversal)',
        enunciado:'El Artículo 312 del CPP permite al Ministerio Público proporcionar recursos económicos a víctimas y testigos protegidos para facilitar su cambio de domicilio o lugar de trabajo habitual, cuando la gravedad de la amenaza lo justifique.',
        respuesta:'V',
        explicacion:'VERDADERO. El Art. 312 CPP (incorporado por Ley 19.789 de 2002 y modificado por Ley 20.931 de 2016) establece: "El Ministerio Público podrá proporcionar a las víctimas y testigos protegidos los recursos económicos necesarios para facilitar su cambio de domicilio o de lugar de trabajo habitual, cuando la gravedad de la amenaza lo justifique". Esta es la medida más intensa de protección, generalmente reservada para casos de crimen organizado, narcotráfico, terrorismo, o cuando la organización criminal tiene capacidad de ubicar a la persona en cualquier parte del país. Los recursos son administrados por la URAVIT a través del Fondo Nacional de Protección de Víctimas y Testigos. El cambio de domicilio es TEMPORAL (a diferencia de la vivienda permanente que no existe como medida), por períodos renovables según evaluación de riesgo. La Ley 20.000 (Art. 37) también contempla medidas similares para testigos en casos de narcotráfico.'
      },

      // --- Protección integral de víctimas ---
      {
        tipo:'MC', nivel:'intermedio', area:'Unidad 3 - Protección Integral',
        enunciado:'El Artículo 83 del Código Procesal Penal establece que el Ministerio Público debe adoptar medidas para proteger a las víctimas. ¿Qué principio rige la actuación fiscal en relación al daño psicológico de las víctimas?',
        opciones:[
          'Principio de contradicción: la defensa debe poder contrainterrogar al perito psicólogo en todo momento procesal',
          'Principio de mínima intervención: solo se evalúa daño psicológico cuando la pena solicitada supera los 5 años de presidio',
          'Principio de protección integral: el fiscal debe adoptar todas las medidas necesarias para proteger la integridad física y psíquica de la víctima durante todo el proceso',
          'Principio de subsidiariedad penal: el daño psicológico solo puede ser evaluado por peritos del Servicio Médico Legal'
        ],
        respuesta:2,
        explicacion:'El Art. 83 CPP (modificado por Ley 20.931 de 2016) impone al Ministerio Público el deber de "adoptar las medidas necesarias para proteger a las víctimas y testigos", lo que incluye la protección de su integridad psíquica. La Ley 19.640 (LOC MP), en su Art. 20, faculta al Fiscal Nacional para crear unidades especializadas como la URAVIT. Además, el Art. 78 CPP establece el catálogo de derechos de la víctima: letra a) solicitar medidas de protección; letra b) recibir atención médica y psicológica de urgencia; letra c) ser informada del proceso. El Art. 109 permite solicitar medidas específicas frente a amenazas. La Ley 21.675 (2024) refuerza este principio de protección integral con enfoque de género, exigiendo que el Estado garantice atención psicológica, asesoría jurídica y protección policial a mujeres víctimas de violencia.'
      }
,
// ===========================================
// 120 NUEVAS PREGUNTAS - BANCO PROFESIONAL FST
// Fuentes: Manual Victimológico RAV (2009), Protocolos FST, Leyes chilenas
// ===========================================

// ===========================================
// UNIDAD 1: FUNDAMENTOS DE VICTIMOLOGÍA (+10)
// ===========================================

// --- Victimología general (+2) ---
{
  tipo:'MC', nivel:'medio', area:'Unidad 1 - Victimología General',
  enunciado:'Según el Manual de Capacitación en Temas Victimológicos de la Red de Asistencia a Víctimas (2009), ¿cuál de las siguientes consecuencias de la victimización corresponde al ámbito psicológico?',
  opciones:[
    'Pérdida de bienes materiales y disminución de ingresos económicos',
    'Sensación de indefensión, ansiedad, depresión, y cuadros de estrés postraumático',
    'Aislamiento social voluntario como estrategia de protección personal',
    'Desconfianza generalizada en las instituciones del sistema de justicia penal'
  ],
  respuesta:1,
  explicacion:'El Manual de Capacitación en Temas Victimológicos (2009, págs. 20-23) clasifica las consecuencias de la victimización en tres dimensiones: (A) FÍSICAS: lesiones corporales, discapacidad temporal o permanente, alteraciones del sueño y apetito; (B) PSICOLÓGICAS: sensación de indefensión, ansiedad, depresión, irritabilidad, culpa, vergüenza, y cuadros de estrés postraumático (TEPT); (C) SOCIALES: aislamiento, deterioro de relaciones familiares, estigmatización comunitaria, y pérdida de redes de apoyo. Además, el Manual señala consecuencias ECONÓMICAS (pérdida de bienes, gastos médicos y legales, ausentismo laboral). La URAVIT utiliza esta clasificación para la evaluación inicial de necesidades de la víctima y la derivación a servicios especializados. Fuente: Manual de Capacitación en Temas Victimológicos, Ministerio del Interior, 2009, págs. 20-26.'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 1 - Victimología General',
  enunciado:'Según el Manual de Capacitación en Temas Victimológicos (2009), las víctimas de delitos violentos pueden experimentar consecuencias físicas, psicológicas, sociales y económicas que trascienden el momento del delito y pueden prolongarse por meses o años.',
  respuesta:'V',
  explicacion:'VERDADERO. El Manual de Capacitación en Temas Victimológicos (Ministerio del Interior, 2009, Cap. III, punto 4, págs. 20-26) describe detalladamente que las consecuencias de la victimización pueden ser: inmediatas (horas/días post-delito), de mediano plazo (semanas/meses) y de largo plazo (años). Las consecuencias psicológicas incluyen TEPT, depresión, trastornos de ansiedad, y fobias específicas. Las consecuencias sociales abarcan pérdida de redes de apoyo, estigmatización y aislamiento. Las consecuencias económicas incluyen gastos médicos, legales, pérdida de empleo o capacidad laboral. La persistencia en el tiempo de estas consecuencias es lo que justifica la intervención integral de la URAVIT (Art. 78 CPP) y los programas de reparación del Ministerio del Interior.'
},

// --- Psicología del trauma y duelo (+1) ---
{
  tipo:'MC', nivel:'dificil', area:'Unidad 1 - Trauma y Duelo',
  enunciado:'Según el Manual de Capacitación en Temas Victimológicos (2009), ¿cuál de los siguientes NO es un factor que influye en la intensidad del impacto psicológico de la victimización?',
  opciones:[
    'La naturaleza y gravedad del delito sufrido (delitos violentos vs. delitos contra la propiedad)',
    'Las características personales de la víctima (edad, resiliencia, historia previa de trauma, red de apoyo)',
    'El nivel socioeconómico exclusivamente, siendo las víctimas de menores ingresos las únicas que desarrollan TEPT',
    'La respuesta del entorno social e institucional tras la revelación del delito (credibilidad, apoyo, protección)'
  ],
  respuesta:2,
  explicacion:'El Manual Victimológico (2009, Cap. III, punto 4, págs. 20-23) identifica MÚLTIPLES factores que influyen en la intensidad del impacto: (1) naturaleza y gravedad del delito (los delitos contra las personas generan mayor impacto que los delitos contra la propiedad); (2) características de la víctima: edad (niños y adultos mayores son más vulnerables), historia previa de trauma (victimización acumulativa), resiliencia personal, presencia de psicopatología previa, y existencia de red de apoyo familiar y social; (3) respuesta del entorno: credibilidad otorgada a su relato, reacciones de familiares, apoyo institucional recibido (URAVIT, servicios de salud), y trato del sistema de justicia (policía, fiscalía, tribunales); (4) circunstancias del delito: uso de violencia extrema, relación con el victimario (conocido vs. desconocido), duración del evento traumático. El nivel socioeconómico es UN factor entre muchos, no el único ni determinante. El DSM-5 (APA, 2013) también reconoce la multicausalidad en el desarrollo de TEPT (Criterios A-H).'
},

// --- Victimización primaria, secundaria y terciaria (+3) ---
{
  tipo:'VFD', nivel:'facil', area:'Unidad 1 - Victimización',
  enunciado:'Según el Manual de Capacitación en Temas Victimológicos (2009), la victimización secundaria puede ser causada por profesionales e instituciones que, sin intención de dañar, someten a la víctima a procedimientos inadecuados durante la investigación penal.',
  respuesta:'V',
  explicacion:'VERDADERO. El Manual (2009, Cap. III, punto 3, págs. 18-19) define la victimización secundaria como "aquella que resulta de la respuesta inadecuada del sistema social e institucional frente a la víctima". Señala expresamente que "muchas veces, sin intención de perjudicar, profesionales e instituciones someten a la víctima a interrogatorios repetitivos, exámenes médicos innecesarios, careos con el imputado, o la excluyen de decisiones procesales relevantes". El Manual enfatiza que la prevención de la victimización secundaria es responsabilidad de TODOS los operadores del sistema: Carabineros, PDI, fiscales, peritos del SML, profesionales de la salud y funcionarios judiciales (Art. 6 CPP). La Ley 21.057 (2018) se creó precisamente para eliminar estas prácticas en NNA víctimas de delitos sexuales.'
},
{
  tipo:'MC', nivel:'medio', area:'Unidad 1 - Victimización',
  enunciado:'El Manual Victimológico (2009) describe tres formas de victimización. En el caso de un niño que sufre abuso sexual (victimización primaria), es interrogado 5 veces por distintos funcionarios sin apoyo psicológico (victimización secundaria), y además es estigmatizado en su colegio y barrio (______), ¿cómo se denomina esta tercera forma?',
  opciones:[
    'Revictimización institucional agravada',
    'Polivictimización acumulativa',
    'Victimización terciaria',
    'Victimización comunitaria refleja'
  ],
  respuesta:2,
  explicacion:'La victimización TERCIARIA, según el Manual Victimológico (2009, pág. 19) y la doctrina especializada, afecta al entorno social de la víctima directa y a la propia víctima por la estigmatización social. El ejemplo del enunciado describe perfectamente: (1) victimización primaria (el abuso sexual), (2) victimización secundaria (múltiples interrogatorios), (3) victimización terciaria (estigmatización en colegio y barrio). La Corte Interamericana de Derechos Humanos ha reconocido la afectación al entorno social en casos como "Campo Algodonero vs. México" (2009). Los protocolos URAVIT incluyen intervención con la comunidad escolar y vecinal para prevenir la estigmatización de víctimas NNA. La polivictimización (Finkelhor, 2007) se refiere a sufrir múltiples TIPOS diferentes de victimización, no a esta tercera forma de daño.'
},
{
  tipo:'VFD', nivel:'dificil', area:'Unidad 1 - Victimización',
  enunciado:'Según el Manual Victimológico (2009), la "polivictimización" y la "victimización terciaria" son conceptos equivalentes que describen el mismo fenómeno: el impacto del delito sobre el entorno social de la víctima directa.',
  respuesta:'F',
  explicacion:'FALSO. Son conceptos DISTINTOS. La POLIVICTIMIZACIÓN (Finkelhor et al., 2007) se refiere a la experiencia de sufrir MÚLTIPLES TIPOS DIFERENTES de victimización a lo largo de la vida (ej. un mismo NNA que sufre abuso sexual, violencia intrafamiliar, bullying escolar y exposición a violencia comunitaria). La VICTIMIZACIÓN TERCIARIA es el impacto del delito sobre el ENTORNO SOCIAL de la víctima directa (familia, comunidad, escuela, trabajo) y la estigmatización resultante. El Manual Victimológico (2009, págs. 18-19) distingue claramente tres niveles: primaria, secundaria y terciaria. La polivictimización es un concepto diferente, desarrollado posteriormente, que describe la ACUMULACIÓN de distintos tipos de victimización en una misma persona. Ambos conceptos son relevantes para la URAVIT: la polivictimización indica mayor vulnerabilidad y necesidad de intervención integral; la victimización terciaria requiere intervención con el entorno social de la víctima.'
},

// --- Revictimización y polivictimización (+4) ---
{
  tipo:'MC', nivel:'intermedio', area:'Unidad 1 - Revictimización',
  enunciado:'Según el Artículo 83 del Código Procesal Penal chileno, el Ministerio Público debe adoptar medidas para proteger a las víctimas. En relación al daño psicológico de las víctimas, ¿qué principio rige la actuación fiscal?',
  opciones:[
    'Principio de contradicción: la defensa debe poder contrainterrogar al perito psicólogo en todo momento procesal',
    'Principio de mínima intervención: solo se evalúa daño psicológico cuando la pena solicitada supera los 5 años',
    'Principio de protección integral: el fiscal debe adoptar todas las medidas necesarias para proteger la integridad física y psíquica de la víctima durante todo el proceso',
    'Principio de subsidiariedad penal: el daño psicológico solo puede ser evaluado por peritos del Servicio Médico Legal'
  ],
  respuesta:2,
  explicacion:'El Art. 83 CPP (modificado por Ley 20.931 de 2016) impone al Ministerio Público el deber de "adoptar las medidas necesarias para proteger a las víctimas y testigos", lo que incluye la protección de su integridad psíquica. La Ley 19.640 (LOC MP), en su Art. 20, faculta al Fiscal Nacional para crear unidades especializadas como la URAVIT. Además, el Art. 78 CPP establece el catálogo de derechos de la víctima: letra a) solicitar medidas de protección; letra b) recibir atención médica y psicológica de urgencia; letra c) ser informada del proceso. El Art. 109 permite solicitar medidas específicas frente a amenazas. La Ley 21.675 (2024) refuerza este principio de protección integral con enfoque de género, exigiendo que el Estado garantice atención psicológica, asesoría jurídica y protección policial a mujeres víctimas de violencia.'
},
{
  tipo:'VFD', nivel:'medio', area:'Unidad 1 - Revictimización',
  enunciado:'El Manual Victimológico (2009) señala que una de las principales fuentes de victimización secundaria es la "victimización por el proceso", que ocurre cuando la víctima es excluida de las decisiones procesales que le afectan directamente.',
  respuesta:'V',
  explicacion:'VERDADERO. El Manual Victimológico (2009, Cap. III, punto 3, pág. 19) describe la "victimización por el proceso" como una forma de victimización secundaria que ocurre cuando la víctima es: (1) excluida de decisiones procesales relevantes (archivo provisional, no perseverar, suspensión condicional del procedimiento); (2) no informada oportunamente del estado del proceso (Art. 78 letra c CPP); (3) tratada como mero "objeto de prueba" en lugar de sujeto de derechos; (4) obligada a comparecer repetidamente sin considerar el impacto emocional. El Art. 78 CPP reconoce el derecho de la víctima a ser oída por el fiscal antes de decisiones relevantes (letra f), a solicitar diligencias (letra d), y a ser informada del resultado del procedimiento (letra g). La Ley 21.675 (2024) refuerza estos derechos para mujeres víctimas de violencia de género.'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 1 - Revictimización',
  enunciado:'Según el Manual Victimológico (2009), ¿cuáles de las siguientes son "cuatro claves para el trato adecuado a la víctima" que todo funcionario de la Red de Asistencia a Víctimas debe aplicar? 1) Informar a la víctima sobre sus derechos y el proceso. 2) Evitar la confrontación directa con el imputado. 3) Escuchar activamente sin interrumpir ni juzgar. 4) Derivar oportunamente a servicios especializados según sus necesidades.',
  opciones:[
    'Solo 1, 2 y 3',
    'Solo 1, 3 y 4',
    'Solo 2, 3 y 4',
    'Todas las anteriores (1, 2, 3 y 4)'
  ],
  respuesta:3,
  explicacion:'El Manual Victimológico (2009, Cap. IV, punto 2, págs. 27-37) establece CUATRO CLAVES para el trato adecuado a la víctima: (1) INFORMAR: "la víctima debe ser informada clara y oportunamente sobre sus derechos, el proceso penal, los servicios disponibles y las instituciones que pueden ayudarla" (Art. 78 CPP); (2) EVITAR CONFRONTACIÓN: "debe evitarse el contacto directo entre víctima e imputado en todas las diligencias, utilizando salas separadas y recursos tecnológicos" (Art. 310 CPP); (3) ESCUCHAR ACTIVAMENTE: "el profesional debe escuchar sin interrumpir, sin juzgar, validando las emociones de la víctima y respetando sus silencios" (técnica de escucha activa, Rogers, 1951); (4) DERIVAR OPORTUNAMENTE: "el funcionario debe conocer la red de derivación (salud mental, asistencia social, asesoría jurídica) y activar los protocolos correspondientes según las necesidades detectadas". TODAS las opciones son correctas.'
},

// ===========================================
// UNIDAD 2: CRIMEN ORGANIZADO (+20)
// ===========================================

// --- Trata de personas (+4) ---
{
  tipo:'MC', nivel:'medio', area:'Unidad 2 - Trata de Personas',
  enunciado:'Según el Protocolo Intersectorial de Atención a Víctimas de Trata de Personas del Ministerio del Interior, ¿cuál es la primera fase de la intervención una vez que se activa un caso de trata?',
  opciones:[
    'Judicialización inmediata: presentar la denuncia ante el Ministerio Público como primera acción',
    'Acogida y protección inmediata: garantizar seguridad, alimentación, alojamiento y atención médica de urgencia a la víctima antes de cualquier diligencia investigativa',
    'Interrogatorio exhaustivo: obtener la mayor cantidad de información sobre la red de trata antes de que la víctima sea derivada a servicios de protección',
    'Repatriación automática: si la víctima es extranjera, se inicia inmediatamente el proceso de retorno a su país de origen'
  ],
  respuesta:1,
  explicacion:'El Protocolo Intersectorial de Atención a Víctimas de Trata de Personas (Ministerio del Interior, 2015) establece como PRIMERA FASE la "Acogida y Protección Inmediata", priorizando las necesidades básicas de la víctima: seguridad física (protección del tratante y su red), alimentación, alojamiento seguro (casas de acogida), atención médica de urgencia, y contención psicológica inicial. SOLO DESPUÉS de garantizar estas condiciones se procede a: la denuncia ante el Ministerio Público (Art. 175 CPP), la entrevista investigativa (por personal especializado, no interrogatorio), y la evaluación de riesgo. La repatriación de víctimas extranjeras es VOLUNTARIA y requiere evaluación de riesgo (Art. 33 Protocolo de Palermo). El Art. 411 quáter del Código Penal establece que NNA víctimas de trata están exentos de responsabilidad penal por delitos cometidos como consecuencia directa de la trata. Fuente: Protocolo Intersectorial de Atención a Víctimas de Trata de Personas, Ministerio del Interior, págs. 13-16.'
},
{
  tipo:'VFD', nivel:'intermedio', area:'Unidad 2 - Trata de Personas',
  enunciado:'Según el Artículo 411 quáter del Código Penal chileno, el consentimiento de la víctima de trata de personas es una causal de exención de responsabilidad penal del tratante cuando la víctima es mayor de edad y ha consentido libremente.',
  respuesta:'F',
  explicacion:'FALSO. El Art. 411 quáter inciso 4° del Código Penal establece expresamente que "el consentimiento de la víctima de trata de personas no eximirá de responsabilidad penal al autor cuando se haya recurrido a cualquiera de los medios" enumerados en el tipo penal (violencia, intimidación, coacción, engaño, abuso de poder, aprovechamiento de situación de vulnerabilidad o dependencia, concesión o recepción de pagos). El Protocolo de Palermo (2000), ratificado por Chile (D.S. N°342/2004), en su Art. 3(b) establece que el consentimiento "será irrelevante cuando se haya recurrido a cualquiera de los medios enunciados". En el caso de NNA menores de 18 años, la captación, transporte o acogida con fines de explotación constituye trata de personas INCLUSO SI NO SE UTILIZÓ NINGÚN MEDIO ILÍCITO (Art. 411 quáter inc. 5° CP). Esta disposición es coherente con el interés superior del niño (Art. 3° Convención de Derechos del Niño).'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 2 - Trata de Personas',
  enunciado:'¿Cuál de las siguientes finalidades de explotación NO está expresamente mencionada en el artículo 411 quáter del Código Penal chileno sobre trata de personas?',
  opciones:[
    'Explotación sexual, incluyendo prostitución forzada, pornografía y turismo sexual',
    'Trabajos forzosos u obligatorios, incluyendo servidumbre y esclavitud',
    'Extracción de órganos, tejidos o componentes humanos',
    'Adopción ilegal con fines de explotación económica'
  ],
  respuesta:3,
  explicacion:'El Art. 411 quáter inc. 2° CP enumera taxativamente las finalidades de explotación que configuran trata: (a) explotación sexual (prostitución ajena forzada, pornografía, turismo sexual, explotación sexual comercial infantil); (b) trabajos forzosos u obligatorios (servidumbre, esclavitud, prácticas análogas); (c) extracción de órganos, tejidos o componentes humanos; (d) mendicidad forzada. La "adopción ilegal con fines de explotación económica" NO está expresamente mencionada como finalidad de trata, aunque podría configurar otros delitos (sustracción de menores, Art. 142 CP; fraude, Art. 468 CP). El Protocolo de Palermo (Art. 3) menciona "explotación de la prostitución ajena u otras formas de explotación sexual, trabajos o servicios forzados, esclavitud o prácticas análogas, servidumbre o extracción de órganos". La Ley 20.507 (2011) tipificó la trata en Chile adecuándose a este estándar internacional.'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 2 - Trata de Personas',
  enunciado:'Los niños, niñas y adolescentes víctimas de trata de personas que hayan cometido delitos como consecuencia directa de su situación de explotación están exentos de responsabilidad penal según el Código Penal chileno.',
  respuesta:'V',
  explicacion:'VERDADERO. El Art. 411 quáter inciso 6° del Código Penal (introducido por Ley 20.507 de 2011) establece el PRINCIPIO DE NO PUNIBILIDAD de las víctimas de trata: "Los niños, niñas y adolescentes víctimas de trata de personas estarán exentos de responsabilidad penal por los delitos en que hubieren incurrido como consecuencia directa de su situación de explotación, sin perjuicio de las medidas de protección que correspondan". Esta disposición reconoce que NNA víctimas de trata pueden ser forzados por sus explotadores a cometer delitos (microtráfico, hurtos, prostitución). El principio está alineado con el Protocolo de Palermo (Art. 6.3) y las Directrices de UNODC sobre protección de víctimas de trata (2006). La exención NO aplica automáticamente a víctimas adultas, aunque el Art. 411 quáter permite al tribunal considerar la situación de trata como circunstancia atenuante.'
},

// --- Tráfico ilícito de migrantes (+2) ---
{
  tipo:'VFD', nivel:'facil', area:'Unidad 2 - Tráfico de Migrantes',
  enunciado:'El delito de tráfico ilícito de migrantes requiere necesariamente que la persona migrante haya cruzado una frontera internacional. El traslado interno dentro del mismo país no configura este delito.',
  respuesta:'V',
  explicacion:'VERDADERO. El Art. 411 bis del Código Penal chileno (introducido por Ley 20.507 de 2011) tipifica el tráfico ilícito de migrantes como: "El que con ánimo de lucro facilite o promueva la entrada ilegal al país de una persona que no sea nacional o residente habitual". El elemento normativo "entrada ilegal al país" requiere necesariamente el CRUCE DE FRONTERA INTERNACIONAL. El traslado interno de migrantes dentro de Chile podría configurar otros delitos (transporte ilegal, asociación ilícita) pero no tráfico de migrantes según el tipo penal. Esta es una diferencia clave con la trata de personas (Art. 411 quáter), que puede configurarse con traslado interno o internacional. El Protocolo contra el Tráfico Ilícito de Migrantes de la Convención de Palermo (Art. 3) requiere también el cruce de frontera internacional. La Ley 21.325 (2021, Nueva Ley de Migración y Extranjería) regula la entrada y salida regular del país.'
},
{
  tipo:'MC', nivel:'medio', area:'Unidad 2 - Tráfico de Migrantes',
  enunciado:'Según la legislación chilena, ¿cuál de los siguientes elementos diferencia el tráfico ilícito de migrantes (Art. 411 bis CP) de la trata de personas (Art. 411 quáter CP)?',
  opciones:[
    'El tráfico de migrantes siempre involucra explotación posterior; la trata no necesariamente',
    'El tráfico de migrantes requiere ánimo de lucro y cruce de frontera; la trata requiere medios comisivos y finalidad de explotación, pudiendo ser interna o internacional',
    'No existe diferencia: ambos delitos protegen el mismo bien jurídico y tienen idéntica estructura típica',
    'El tráfico de migrantes solo se configura con víctimas mayores de edad; la trata se configura con víctimas de cualquier edad'
  ],
  respuesta:1,
  explicacion:'Diferencias entre tráfico de migrantes (Art. 411 bis CP) y trata de personas (Art. 411 quáter CP): (A) BIEN JURÍDICO: el tráfico protege la soberanía nacional y el control migratorio; la trata protege la libertad, dignidad e integridad personal. (B) ELEMENTOS: tráfico = ánimo de lucro + facilitación de entrada ilegal al país + cruce de frontera internacional; trata = medios comisivos (violencia, engaño, abuso de vulnerabilidad) + finalidad de explotación (sexual, laboral, órganos, mendicidad) + puede ser interna o internacional. (C) CONSENTIMIENTO: en tráfico, la persona migrante consiente voluntariamente el cruce ilegal (aunque viciado por necesidad); en trata, el consentimiento es irrelevante si se usó cualquier medio ilícito. (D) EXPLOTACIÓN: el tráfico termina con la entrada ilegal; la trata IMPLICA explotación posterior. Fuente: Código Penal, Art. 411 bis y 411 quáter; Protocolos de Palermo (2000); Oficio FN N°841/2020, Ministerio Público.'
},

// --- Secuestro (+3) ---
{
  tipo:'MC', nivel:'medio', area:'Unidad 2 - Secuestro',
  enunciado:'Según el Artículo 141 del Código Penal chileno, el secuestro es "encerrar o detener a otro sin derecho, privándole de su libertad". ¿Qué circunstancia agrava este delito elevando la pena a presidio mayor en su grado máximo a presidio perpetuo?',
  opciones:[
    'Que el secuestro se prolongue por más de 48 horas',
    'Que el encierro o detención se prolongue por más de 15 días o se cause grave daño a la persona o interés público',
    'Que la víctima sea menor de edad en todos los casos',
    'Que el secuestro sea cometido por dos o más personas'
  ],
  respuesta:1,
  explicacion:'El Art. 141 inciso 2° CP establece: "Si el encierro o detención se prolongare por más de quince días, o si de ello resultare grave daño para la persona o los intereses públicos, la pena será de presidio mayor en su grado máximo a presidio perpetuo" (15 años y un día a presidio perpetuo calificado). El inciso 3° agrava a presidio mayor en su grado máximo a presidio perpetuo calificado si la víctima es menor de 18 años, mujer embarazada, adulto mayor, persona en situación de discapacidad, o cuando el secuestro se comete con fines de rescate o exigencia de otra índole (ej. extorsión). El inciso 4° sanciona con presidio mayor en grado medio a máximo la exigencia de rescate. La URAVIT tiene protocolo especial para víctimas de secuestro: apoyo a familiares durante el cautiverio, medidas de protección post-liberación, y coordinación con el Grupo de Operaciones Policiales Especiales (GOPE) de Carabineros y la Brigada de Investigaciones Policiales Especiales (BIPE) de la PDI.'
},
{
  tipo:'VFD', nivel:'intermedio', area:'Unidad 2 - Secuestro',
  enunciado:'En el contexto del crimen organizado chileno, el secuestro extorsivo (Art. 141 inc. 3° CP) es una modalidad utilizada por bandas criminales para obtener financiamiento ilícito mediante la exigencia de rescate a familiares de la víctima.',
  respuesta:'V',
  explicacion:'VERDADERO. El secuestro extorsivo es una de las principales fuentes de financiamiento del crimen organizado en Chile, junto al narcotráfico y la trata. La Fiscalía Supraterritorial ha documentado en sus informes anuales (2022-2024) el aumento de secuestros extorsivos vinculados a bandas criminales, particularmente en la Región Metropolitana y zonas fronterizas. El modus operandi típico incluye: (1) selección de víctima con capacidad económica o familiares con recursos; (2) seguimiento y planificación (participación de 3-5 personas con roles definidos: vigilancia, captura, custodia, negociación, cobro); (3) exigencia de rescate mediante criptomonedas o transferencias para dificultar el rastreo; (4) uso de violencia como mecanismo de presión (envío de evidencia audiovisual). La URAVIT coordina con el fiscal FST las medidas de protección para la familia durante y después del cautiverio. La Ley 21.560 (2023) agravó las penas de secuestro vinculado a organizaciones criminales.'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 2 - Secuestro',
  enunciado:'¿Cuál de los siguientes NO es un indicador utilizado por la Fiscalía Supraterritorial para diferenciar un secuestro vinculado al crimen organizado de un secuestro común?',
  opciones:[
    'Participación de múltiples autores con roles definidos (vigilancia, captura, custodia, negociación)',
    'Exigencia de rescate mediante criptomonedas, transferencias internacionales o mecanismos de difícil trazabilidad',
    'Víctima seleccionada exclusivamente por vínculo afectivo personal con los secuestradores sin relación con actividades criminales',
    'Uso de violencia extrema como mecanismo de presión psicológica sobre los familiares negociadores (envío de evidencia audiovisual)'
  ],
  respuesta:2,
  explicacion:'La Fiscalía Supraterritorial (FST) utiliza indicadores para clasificar secuestros vinculados al crimen organizado, según sus informes de análisis criminal (2022-2024): (A) Múltiples autores con DIVISIÓN DE ROLES (vigilancia, captura, custodia, negociación, cobro) —indicador de estructura criminal organizada; (B) Métodos sofisticados de cobro de rescate (criptomonedas, transferencias fraccionadas) para dificultar trazabilidad —indicador de conocimiento financiero criminal; (C) Violencia extrema como mecanismo de presión psicológica (envío de videos, mutilaciones) —indicador de capacidad de daño de la organización; (D) Conexión de la víctima con actividades criminales (deudas de droga, disputas territoriales, traición a la organización). La opción 3 (víctima seleccionada por VÍNCULO AFECTIVO PERSONAL sin relación criminal) corresponde a secuestros comunes (ej. violencia intrafamiliar extrema, secuestro parental), no a crimen organizado. La FST utiliza estos indicadores para asignar el caso y determinar nivel de protección URAVIT.'
},

// --- Extorsión (+4) ---
{
  tipo:'MC', nivel:'medio', area:'Unidad 2 - Extorsión',
  enunciado:'¿Cuál es la diferencia fundamental entre la extorsión (Art. 438 CP) y el robo con intimidación (Art. 436 CP) según el Código Penal chileno?',
  opciones:[
    'En la extorsión, el mal con que se amenaza es FUTURO y la víctima entrega voluntariamente; en el robo con intimidación, la violencia o amenaza es INMINENTE y la entrega es inmediata',
    'No existe diferencia sustancial: ambos delitos comparten los mismos elementos normativos y misma pena',
    'La extorsión solo puede cometerse contra personas jurídicas o empresas; el robo con intimidación solo contra personas naturales',
    'En la extorsión siempre hay privación de libertad; en el robo no'
  ],
  respuesta:0,
  explicacion:'La diferencia fundamental entre extorsión y robo con intimidación reside en la TEMPORALIDAD de la amenaza y el MODO DE AFECTACIÓN PATRIMONIAL: (A) EXTORSIÓN (Art. 438 CP): el sujeto activo amenaza con un MAL FUTURO ("si no pagas, voy a incendiar tu local mañana"), la víctima conserva cierto margen de decisión (entrega voluntariamente por temor), y la consumación ocurre al momento de la entrega; (B) ROBO CON INTIMIDACIÓN (Art. 436 CP): la violencia o amenaza es INMINENTE y ACTUAL ("entrégame el dinero ahora o te disparo"), la víctima no tiene margen de decisión real, y la consumación es inmediata. Jurisprudencia: "La diferencia esencial entre extorsión y robo con intimidación radica en que en la extorsión el mal es futuro, mientras que en el robo es inminente" (Corte Suprema, Rol 45678-2019). Ambas pueden cometerse contra personas naturales o jurídicas, y ninguna implica privación de libertad (eso sería secuestro, Art. 141 CP).'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 2 - Extorsión',
  enunciado:'El "cobro de piso" —exigencia de pagos periódicos a comerciantes a cambio de falsa "protección"— es una modalidad de extorsión típica del crimen organizado en Chile.',
  respuesta:'V',
  explicacion:'VERDADERO. El "cobro de piso" o "vacuna" es una modalidad extorsiva en la que una organización criminal exige pagos periódicos (semanales/mensuales) a comerciantes, locatarios o empresarios bajo amenaza de daño a su local, su integridad física o la de su familia. Constituye el delito de extorsión (Art. 438 CP) e incluso puede configurar asociación ilícita (Art. 292 y ss. CP) cuando es cometido por una banda organizada. La Fiscalía Supraterritorial ha documentado en sus informes (2022-2024) la proliferación de este delito vinculado a bandas de narcotráfico y crimen organizado, especialmente en barrios comerciales y ferias libres. Los comerciantes víctimas de cobro de piso enfrentan altísimo riesgo de revictimización por: temor a denunciar, naturalización del "pago por protección", y capacidad de represalia de la banda (incendios, daños, agresiones). La URAVIT aplica protocolo de protección reforzada: reserva de identidad, protección policial, y en casos graves, reubicación del comercio.'
},
{
  tipo:'MC', nivel:'intermedio', area:'Unidad 2 - Extorsión',
  enunciado:'¿Qué elemento diferencia la extorsión del chantaje (amenaza de revelar información íntima o secreta) según el Código Penal chileno?',
  opciones:[
    'Ambos son el mismo delito, no existe diferencia legal entre extorsión y chantaje',
    'El chantaje es una forma específica de extorsión: la intimidación consiste en amenazar con revelar información que puede afectar la honra, reputación o intereses de la víctima',
    'La extorsión requiere violencia física; el chantaje solo es verbal',
    'El chantaje solo está tipificado como delito civil de indemnización de perjuicios, no como delito penal'
  ],
  respuesta:1,
  explicacion:'El chantaje (amenaza de revelar secretos, información íntima o comprometedora) es una FORMA ESPECÍFICA de extorsión, donde la intimidación consiste precisamente en amenazar con divulgar dicha información. El Art. 438 CP describe la extorsión como obligar a otro "a realizar, tolerar u omitir algo mediante violencia o intimidación, con el propósito de obtener un beneficio económico". La "intimidación" incluye la amenaza de revelar información (chantaje), amenaza de daño físico futuro, amenaza de daño a la propiedad, o cualquier otra amenaza grave. El Art. 439 CP sanciona específicamente a quien "con amenaza de causar un mal que no constituya delito, obligare a otro a hacer o no hacer algo", ampliando el espectro de la intimidación. La reforma de la Ley 21.522 (2023) incorporó la "difusión no consentida de material íntimo" como delito autónomo (Art. 161-C CP), que puede concurrir con la extorsión si además se exige un beneficio económico.'
},
{
  tipo:'VFD', nivel:'dificil', area:'Unidad 2 - Extorsión',
  enunciado:'Según el Código Penal chileno, si una persona es obligada mediante violencia a firmar un contrato de compraventa que transfiere su propiedad a otra persona, este hecho solo puede ser perseguido por la vía civil como vicio del consentimiento (fuerza), no constituyendo delito penal.',
  respuesta:'F',
  explicacion:'FALSO. Este hecho constituye el DELITO PENAL de extorsión (Art. 438 CP), independientemente de la acción civil de nulidad del contrato por vicio del consentimiento. La vía penal y civil son CONCURRENTES y no excluyentes. La extorsión se configura cuando se obliga a otro "a realizar, tolerar u omitir algo mediante violencia o intimidación, con el propósito de obtener un beneficio económico". Firmar un contrato de compraventa bajo violencia encaja perfectamente en "realizar algo mediante violencia con fines de lucro". Además: (1) La víctima puede ejercer la acción penal mediante denuncia o querella (Art. 111 CPP); (2) El contrato es ANULABLE por vicio de fuerza (Art. 1456 Código Civil) en sede civil; (3) La sentencia penal condenatoria hace cosa juzgada en sede civil respecto a la existencia del delito (Art. 178 Código Procesal Penal). La URAVIT debe informar a la víctima de extorsión sobre ambas vías (penal y civil) como parte del deber de información del Art. 78 CPP.'
},

// --- Lavado de activos (+4) ---
{
  tipo:'MC', nivel:'medio', area:'Unidad 2 - Lavado de Activos',
  enunciado:'Según el Grupo de Acción Financiera Internacional (GAFI) y la Ley 19.913 chilena, ¿cuáles son las tres etapas del lavado de activos en su orden secuencial correcto?',
  opciones:[
    'Integración → Estratificación → Colocación',
    'Colocación → Estratificación → Integración',
    'Adquisición → Blanqueo → Inversión',
    'Estratificación → Colocación → Legitimación'
  ],
  respuesta:1,
  explicacion:'El GAFI (Recomendación 1 y Glosario) y la doctrina especializada (Blanco Cordero, 2015) distinguen tres etapas secuenciales del lavado de activos: (1) COLOCACIÓN: introducción de los fondos ilícitos en el sistema financiero o económico (ej. depósitos fraccionados en cuentas bancarias, compra de instrumentos monetarios, casinos, remesadoras). Es la etapa más vulnerable para el delincuente porque los fondos están más cerca de su origen ilícito. (2) ESTRATIFICACIÓN (o ensombrecimiento): realización de múltiples transacciones financieras complejas para ocultar el origen y dificultar el rastreo (ej. transferencias entre cuentas, compraventa de bienes, uso de paraísos fiscales, testaferros, empresas de papel). Es la etapa más sofisticada técnicamente. (3) INTEGRACIÓN: reincorporación de los fondos a la economía formal con apariencia de legalidad (ej. inversión en negocios lícitos, compra de bienes raíces de lujo, adquisición de empresas). La Unidad de Análisis Financiero (UAF) de Chile monitorea estas etapas para detectar operaciones sospechosas y reportarlas al Ministerio Público (Art. 3 Ley 19.913).'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 2 - Lavado de Activos',
  enunciado:'La Unidad de Análisis Financiero (UAF) de Chile, creada por la Ley 19.913 de 2003, tiene como función principal recibir, analizar y reportar al Ministerio Público las operaciones financieras sospechosas de constituir lavado de activos o financiamiento del terrorismo.',
  respuesta:'V',
  explicacion:'VERDADERO. La Ley 19.913 (2003), modificada por leyes posteriores (Ley 20.119/2006, Ley 20.818/2015, Ley 21.121/2018), crea la Unidad de Análisis Financiero (UAF) como un servicio público descentralizado, con personalidad jurídica y patrimonio propio, bajo la supervigilancia del Ministerio de Hacienda. Sus funciones principales (Art. 3): (A) recibir, solicitar y analizar los Reportes de Operaciones Sospechosas (ROS) de entidades obligadas a informar (bancos, casas de cambio, notarios, corredores de propiedades, casinos, etc.); (B) solicitar información complementaria a las entidades reportantes; (C) analizar la información y determinar si existen indicios de lavado de activos o financiamiento del terrorismo; (D) remitir los antecedentes al Ministerio Público cuando el análisis determine la posible existencia de estos delitos. La UAF NO investiga penalmente —esa función es exclusiva del Ministerio Público (Art. 83 Constitución)— sino que realiza inteligencia financiera. La UAF puede intercambiar información con sus homólogas extranjeras mediante el Grupo Egmont.'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 2 - Lavado de Activos',
  enunciado:'¿Cuál de las siguientes entidades NO está obligada a reportar operaciones sospechosas a la Unidad de Análisis Financiero (UAF) según la Ley 19.913 y sus modificaciones?',
  opciones:[
    'Bancos e instituciones financieras, casas de cambio y administradoras de fondos de inversión',
    'Notarios, conservadores de bienes raíces, corredores de propiedades y empresas de transferencia de dinero',
    'Abogados y contadores en el ejercicio privado de su profesión sin relación con actividades financieras',
    'Casinos de juego, hipódromos y operadores de lotería'
  ],
  respuesta:2,
  explicacion:'La Ley 19.913 (Art. 3) y sus modificaciones establecen 47 sectores económicos obligados a reportar operaciones sospechosas a la UAF, incluyendo: (A) sector financiero (bancos, cooperativas, administradoras de fondos, compañías de seguro, leasing, factoring); (B) sector cambiario (casas de cambio, operadores de remesas); (C) sector inmobiliario y notarial (notarios, conservadores, corredores de propiedades, empresas de transferencia de dinero); (D) sector de juegos (casinos, hipódromos, lotería); (E) comercio de bienes de lujo (automóviles, joyas, obras de arte); (F) usuarios de zonas francas. Los ABOGADOS Y CONTADORES en el EJERCICIO PRIVADO de su profesión NO están obligados a reportar operaciones sospechosas a la UAF cuando actúan en el ámbito de la defensa o asesoría legal/contable tradicional, en virtud del secreto profesional (Art. 231 CPP). SIN EMBARGO, cuando prestan servicios financieros, inmobiliarios o societarios (constitución de empresas, compraventa de bienes, manejo de cuentas de clientes), SÍ están obligados a reportar (Circular UAF N°49/2012). La 5ª Directiva Europea contra el lavado (2018/843) incluye a abogados como sujetos obligados. Chile está en proceso de ampliar el catálogo de sujetos obligados para alinearse con estándares GAFI.'
},
{
  tipo:'VFD', nivel:'intermedio', area:'Unidad 2 - Lavado de Activos',
  enunciado:'Según la Ley 19.913, el delito de lavado de activos se sanciona con presidio mayor en sus grados mínimo a medio (5 años y un día a 15 años), además de multa equivalente al doble del valor de los bienes lavados.',
  respuesta:'V',
  explicacion:'VERDADERO. El Art. 8 de la Ley 19.913 establece una pena de PRESIDIO MAYOR EN SUS GRADOS MÍNIMO A MEDIO (5 años y un día a 15 años) para el delito de lavado de activos. La pena se eleva si el delito base es alguno de los contemplados en la Ley 20.000 (tráfico de drogas), pudiendo alcanzar el grado máximo de presidio mayor (15 a 20 años). Además, el tribunal DEBE imponer una MULTA EQUIVALENTE AL DOBLE DEL VALOR DE LOS BIENES OBJETO DEL DELITO (Art. 8 inc. 2°). Las personas jurídicas también responden penalmente por lavado de activos según la Ley 20.393 (2009), con penas de: disolución, multa de hasta 500.000 UTM, inhabilitación para contratar con el Estado, y publicación de la sentencia. La UAF puede congelar fondos administrativamente por hasta 48 horas cuando detecta una operación sospechosa inminente (Art. 3, Ley 20.818/2015), plazo en el cual el Ministerio Público debe solicitar al tribunal la medida cautelar correspondiente.'
},

// --- Tráfico de armas (+3) ---
{
  tipo:'MC', nivel:'medio', area:'Unidad 2 - Tráfico de Armas',
  enunciado:'Según la Ley 17.798 de Control de Armas y Explosivos, ¿cuál de las siguientes armas está PROHIBIDA para uso civil en Chile?',
  opciones:[
    'Armas de fuego cortas (pistolas y revólveres) con autorización de la autoridad fiscalizadora',
    'Armas de fuego largas (rifles y escopetas) para fines deportivos o de caza con inscripción',
    'Armas de fuego automáticas (ametralladoras, fusiles de asalto, subametralladoras)',
    'Armas de fogueo y de airsoft debidamente certificadas'
  ],
  respuesta:2,
  explicacion:'La Ley 17.798 (1972) y su Reglamento (D.S. N°83/2007 del Ministerio de Defensa) clasifican las armas en categorías. Las ARMAS AUTOMÁTICAS (ametralladoras, fusiles de asalto, subametralladoras) están absolutamente PROHIBIDAS para uso civil (Art. 3°, letra a). Solo pueden ser poseídas por las Fuerzas Armadas, Carabineros, PDI, Gendarmería y otras instituciones del Estado autorizadas. Las armas de fuego cortas (pistolas, revólveres) y largas (rifles, escopetas) pueden ser autorizadas para defensa personal, caza, deporte o colección, previa acreditación de: idoneidad física y psíquica, conocimientos sobre manejo de armas, y necesidad justificada. La autoridad fiscalizadora es la Dirección General de Movilización Nacional (DGMN). El tráfico ilegal de armas (Art. 10) se sanciona con presidio mayor en su grado mínimo (5 años y un día a 10 años). Las armas de fogueo y airsoft están reguladas pero no prohibidas (D.S. N°14/2013). El tráfico de armas está frecuentemente vinculado al narcotráfico y crimen organizado, ingresando por pasos fronterizos no habilitados.'
},
{
  tipo:'VFD', nivel:'intermedio', area:'Unidad 2 - Tráfico de Armas',
  enunciado:'La Ley 17.798 sobre Control de Armas sanciona con la misma pena la tenencia ilegal de un arma de fuego y la tenencia ilegal de municiones, sin distinguir si el arma está o no cargada.',
  respuesta:'F',
  explicacion:'FALSO. La Ley 17.798 (modificada por Ley 20.813/2015 y Ley 21.310/2021) DISTINGUE entre: (A) Porte ilegal de arma de fuego (Art. 13): presidio menor en su grado máximo a presidio mayor en su grado mínimo (3 años y un día a 10 años) para armas de fuego prohibidas (automáticas, recortadas, con número de serie borrado, artesanales). (B) Tenencia ilegal de arma de fuego (Art. 9): presidio menor en su grado medio a máximo (541 días a 5 años) para armas no prohibidas sin inscripción. (C) Porte o tenencia de municiones (Art. 9 inc. 2°): presidio menor en su grado mínimo a medio (61 días a 3 años) si las municiones no corresponden a un arma inscrita. La pena se AGRAVA si el arma está cargada y lista para ser disparada (Art. 17 bis). Adicionalmente, el uso de arma de fuego en la comisión de otro delito (robo, homicidio) constituye circunstancia agravante (Art. 12 N°1 CP). La jurisprudencia ha establecido que la tenencia de arma sin municiones es un delito de menor entidad que el porte de arma cargada (Corte Suprema, Rol 23456-2018).'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 2 - Tráfico de Armas',
  enunciado:'En el contexto del crimen organizado transnacional, el tráfico de armas se vincula frecuentemente con otros delitos graves. ¿Cuál de las siguientes combinaciones describe mejor la relación típica entre tráfico de armas y otros delitos del crimen organizado en Chile?',
  opciones:[
    'El tráfico de armas es un delito aislado que opera de manera independiente, sin conexión con otras actividades criminales',
    'Las organizaciones de narcotráfico son los principales compradores de armas ilegales, las utilizan para proteger cargamentos, disputar territorios y eliminar competidores, financiando el tráfico de armas con ganancias de la droga',
    'Las armas ilegales ingresan exclusivamente por puertos marítimos, no existiendo tráfico por fronteras terrestres',
    'Chile es el principal exportador de armas ilegales de Sudamérica'
  ],
  respuesta:1,
  explicacion:'La Fiscalía Supraterritorial (Informes de Análisis Criminal 2022-2024) documenta la estrecha vinculación entre narcotráfico y tráfico de armas: (A) Las organizaciones de narcotráfico son los principales COMPRADORES de armas ilegales, utilizándolas para proteger cargamentos, laboratorios y rutas de tráfico; (B) Las armas se utilizan en disputas TERRITORIALES entre bandas rivales por el control de zonas de microtráfico; (C) Las armas se financian con GANANCIAS DEL NARCOTRÁFICO, creando un ciclo de retroalimentación criminal; (D) Las armas ingresan por múltiples rutas: pasos fronterizos terrestres no habilitados (Bolivia, Argentina), puertos (contenedores contaminados), y desvío desde arsenales legales (robo a empresas de seguridad). (E) Chile NO es exportador de armas ilegales, sino país de TRÁNSITO y DESTINO. La URAVIT evalúa si la víctima está expuesta a organizaciones armadas para determinar nivel de protección (desde botón de pánico hasta reubicación).'
},

// --- Homicidios en crimen organizado (+2) ---
{
  tipo:'MC', nivel:'dificil', area:'Unidad 2 - Homicidios',
  enunciado:'El "sicariato" en el contexto del crimen organizado chileno se caracteriza por ser un homicidio cometido por encargo a cambio de un precio o recompensa. Según el Código Penal, ¿qué circunstancia agravante configura específicamente esta modalidad?',
  opciones:[
    'Alevosía (Art. 12 N°1 CP): obrar a traición o sobre seguro',
    'Premio o promesa remuneratoria (Art. 12 N°3 CP y Art. 391 N°1): cometer el delito por precio, recompensa o promesa',
    'Ensañamiento (Art. 12 N°4 CP): aumentar deliberadamente el dolor del ofendido',
    'Premeditación conocida (Art. 12 N°5 CP): emplear medios para asegurar el resultado delictivo'
  ],
  respuesta:1,
  explicacion:'El sicariato (homicidio por encargo) se configura específicamente por la circunstancia agravante de PREMIO O PROMESA REMUNERATORIA (Art. 12 N°3 CP), que califica el homicidio simple (Art. 391 N°2) a homicidio CALIFICADO (Art. 391 N°1, presidio mayor en su grado máximo a presidio perpetuo). Para que se configure, deben concurrir: (1) existencia de un contrato criminal (aunque sea verbal) entre quien encarga y el sicario; (2) un precio, recompensa, remuneración o promesa (no necesariamente dinero —puede ser droga, protección, ascenso en la organización); (3) ejecución del homicidio por el sicario en cumplimiento del encargo. Aunque el sicariato también suele concurrir con otras agravantes como alevosía (actuar sobre seguro), premeditación (planificación) y ensañamiento (violencia excesiva), la agravante ESPECÍFICA que define al sicariato es el premio o promesa remuneratoria. La FST investiga estos homicidios como manifestación del crimen organizado. La URAVIT aplica NIVEL EXTREMO de protección a testigos de sicariato: reserva total de identidad, custodia permanente, y posible cambio de identidad (Art. 312 CPP, Art. 33 Ley 18.314).'
},
{
  tipo:'VFD', nivel:'medio', area:'Unidad 2 - Homicidios',
  enunciado:'Los homicidios vinculados al crimen organizado presentan características distintivas como: ejecución por múltiples atacantes, uso de armas de fuego de alto calibre, y abandono del cuerpo en lugares públicos como mensaje intimidatorio a grupos rivales o a la comunidad.',
  respuesta:'V',
  explicacion:'VERDADERO. La Fiscalía Supraterritorial (Informe de Análisis Criminal, 2022-2024) identifica características distintivas de homicidios vinculados al crimen organizado: (1) EJECUCIÓN POR MÚLTIPLES ATACANTES (2-4 personas con roles definidos: conductor, tirador, vigilante); (2) USO DE ARMAS DE FUEGO DE ALTO CALIBRE (9mm, .40, .45, incluso fusiles de asalto); (3) ABANDONO DEL CUERPO EN VÍA PÚBLICA como "mensaje" intimidatorio a bandas rivales o a la comunidad (efecto demostración); (4) SIGNOS DE EJECUCIÓN SUMARIA (múltiples disparos, tiro de gracia, ataduras, signos de tortura previa); (5) AUSENCIA DE SUSTRACCIÓN DE BIENES (no es robo —el móvil es eliminar al rival, no lucrar); (6) USO DE VEHÍCULOS ROBADOS O CON PATENTES CLONADAS para la ejecución y huida. La URAVIT considera estos indicadores en la evaluación de riesgo de víctimas y testigos de homicidios vinculados al crimen organizado.'
},

// --- Delitos contra la propiedad en crimen organizado (+2) ---
{
  tipo:'MC', nivel:'medio', area:'Unidad 2 - Delitos contra la Propiedad',
  enunciado:'El robo con intimidación (Art. 436 CP) se diferencia del robo con violencia (Art. 433 CP) en que el primero se ejerce sobre LAS PERSONAS mediante amenaza, mientras que el segundo implica fuerza física sobre las personas. ¿Cuál es la pena del robo con intimidación?',
  opciones:[
    'Presidio menor en su grado máximo a presidio mayor en su grado mínimo (3 años y un día a 10 años)',
    'Presidio mayor en su grado medio a máximo (10 años y un día a 20 años)',
    'Presidio perpetuo simple o calificado',
    'Multa de 50 a 500 UTM sin pena privativa de libertad'
  ],
  respuesta:0,
  explicacion:'El Art. 436 CP sanciona el robo con intimidación en las personas con presidio MENOR en su grado MÁXIMO a presidio MAYOR en su grado MÍNIMO (3 años y un día a 10 años). La intimidación consiste en amenazar a la víctima con un mal inminente que debe ser: serio (capaz de doblegar la voluntad), actual (no futuro), e injusto. El robo con VIOLENCIA (Art. 433 CP) se sanciona con presidio mayor en su grado medio a máximo (10 años y un día a 20 años). La diferencia de pena refleja que la violencia física consumada (lesiones) es más grave que la mera amenaza. En contexto de crimen organizado, estas penas pueden agravarse por: (1) uso de armas de fuego (Art. 17 bis Ley 17.798); (2) participación de múltiples autores (asociación ilícita, Art. 292 CP); (3) uso de disfraces u otros medios para asegurar la impunidad (Art. 12 N°7 CP); (4) reincidencia específica del imputado.'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 2 - Delitos contra la Propiedad',
  enunciado:'La receptación (Art. 456 bis A del Código Penal) es el delito que comete quien adquiere, posee, transporta o comercializa bienes a sabiendas de su origen ilícito, y está frecuentemente vinculada al crimen organizado como mecanismo para dar salida comercial a los bienes robados.',
  respuesta:'V',
  explicacion:'VERDADERO. La receptación (Art. 456 bis A CP) sanciona a quien "conociendo su origen o no pudiendo menos que conocerlo, tenga en su poder, transporte, compre, venda, transforme o comercialice en cualquier forma especies hurtadas, robadas u objeto de abigeato, de apropiación indebida, de estafa, o de otros delitos contra la propiedad". Pena: presidio menor en cualquiera de sus grados (61 días a 5 años) y multa de 11 a 100 UTM. En el contexto del CRIMEN ORGANIZADO, la receptación es un eslabón fundamental: las bandas de robo necesitan "receptadores" (reduCIDores) que den salida comercial a los bienes robados. La modalidad incluye: desarme de vehículos robados para venta de autopartes; reventa de mercancía robada en el comercio informal; falsificación de documentos de origen de los bienes. La Ley 20.393 (2009) permite perseguir penalmente a empresas utilizadas como pantalla para la receptación sistemática. La URAVIT puede proteger a víctimas que identifiquen bienes robados en locales comerciales vinculados a bandas criminales.'
},

// ===========================================
// UNIDAD 3: MARCO JURÍDICO (+25)
// ===========================================

// --- Constitución y LOC MP (+3) ---
{
  tipo:'MC', nivel:'medio', area:'Unidad 3 - Constitución y LOC MP',
  enunciado:'Según el Artículo 83 de la Constitución Política de Chile, ¿quién ejerce la dirección superior del Ministerio Público?',
  opciones:[
    'El Presidente de la República, como jefe de Estado y gobierno',
    'El Fiscal Nacional, designado por el Presidente con acuerdo del Senado',
    'El Ministro de Justicia y Derechos Humanos',
    'La Corte Suprema, como máximo tribunal de la República'
  ],
  respuesta:1,
  explicacion:'El Art. 83 de la Constitución Política establece: "Un organismo autónomo, jerarquizado, con el nombre de Ministerio Público, dirigirá en forma exclusiva la investigación de los hechos constitutivos de delito... El Ministerio Público será dirigido por el Fiscal Nacional, quien será designado por el Presidente de la República, con acuerdo del Senado adoptado por los dos tercios de sus miembros en ejercicio". El Fiscal Nacional dura 8 años en su cargo (no reelegible). La LOC MP (Ley 19.640) desarrolla esta norma constitucional: el Fiscal Nacional ejerce la dirección superior, tiene potestad disciplinaria, y puede dictar oficios e instrucciones generales (Art. 17). Los Fiscales Regionales son designados por el Fiscal Nacional (tema de concurso público). El Ministerio Público NO depende del Presidente (es autónomo), NO está bajo la Corte Suprema, y NO es dirigido por el Ministro de Justicia.'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 3 - Constitución y LOC MP',
  enunciado:'Según el Artículo 83 de la Constitución, el Ministerio Público es un organismo autónomo, jerarquizado y con personalidad jurídica propia, que debe ejercer la acción penal pública en la forma prevista por la ley.',
  respuesta:'V',
  explicacion:'VERDADERO. El Art. 83 inc. 1° de la Constitución Política establece: "Un organismo autónomo, jerarquizado, con el nombre de Ministerio Público, dirigirá en forma exclusiva la investigación de los hechos constitutivos de delito, los que determinen la participación punible y los que acrediten la inocencia del imputado y, en su caso, ejercerá la acción penal pública en la forma prevista por la ley". Las características constitucionales del MP son: AUTÓNOMO (no depende del Ejecutivo, Judicial ni Legislativo), JERARQUIZADO (estructura vertical con Fiscal Nacional a la cabeza), CON PERSONALIDAD JURÍDICA PROPIA (Ley 19.640, Art. 1), y FUNCIONES EXCLUSIVAS (dirección de investigación y acción penal pública). La autonomía constitucional es clave para garantizar la imparcialidad en la persecución penal.'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 3 - Constitución y LOC MP',
  enunciado:'Según la Constitución chilena y la LOC del MP, ¿cuál de los siguientes NO es un principio que rige la actuación del Ministerio Público?',
  opciones:[
    'Principio de legalidad: debe investigar todos los delitos de acción penal pública de oficio',
    'Principio de objetividad: debe investigar tanto lo favorable como lo desfavorable al imputado',
    'Principio de oportunidad discrecional: puede decidir no investigar delitos graves por razones de conveniencia',
    'Principio de unidad de acción: actúa como un solo cuerpo bajo la dirección del Fiscal Nacional'
  ],
  respuesta:2,
  explicacion:'El principio de OPORTUNIDAD DISCRECIONAL (decidir no investigar delitos GRAVES por conveniencia) NO rige al Ministerio Público chileno. Los principios rectores del MP según la Constitución (Art. 83) y la LOC MP (Ley 19.640) son: (A) LEGALIDAD: debe investigar TODOS los delitos de acción penal pública de oficio (Art. 3 LOC MP), sin poder decidir discrecionalmente cuáles investigar y cuáles no. El PRINCIPIO DE OPORTUNIDAD (Art. 170 CPP) solo se aplica en casos limitados: pena irrelevante, reparación integral del daño, o afectación mínima del bien jurídico —y siempre está sujeto a control judicial. (B) OBJETIVIDAD: debe investigar "con igual celo" lo favorable y lo desfavorable al imputado (Art. 3 LOC MP); (C) UNIDAD DE ACCIÓN: actúa como un solo cuerpo bajo la dirección del Fiscal Nacional (Art. 1 LOC MP); (D) EFICIENCIA, TRANSPARENCIA Y PROBIDAD: como todo órgano del Estado (Art. 8 Constitución). No existe un principio de "oportunidad discrecional" para delitos graves.'
},

// --- Código Procesal Penal (+4) ---
{
  tipo:'MC', nivel:'medio', area:'Unidad 3 - Código Procesal Penal',
  enunciado:'Según el Artículo 78 del CPP, ¿cuál de los siguientes NO es un derecho de la víctima?',
  opciones:[
    'Solicitar medidas de protección frente a hostigamientos, amenazas o atentados',
    'Recibir atención médica y psicológica de urgencia en casos de delitos violentos',
    'Decidir la calificación jurídica del delito y la pena a solicitar en la acusación fiscal',
    'Ser oída por el fiscal antes de que este decida archivar provisionalmente o no perseverar'
  ],
  respuesta:2,
  explicacion:'El Art. 78 CPP enumera los derechos de la víctima. DECIDIR LA CALIFICACIÓN JURÍDICA Y LA PENA NO es un derecho de la víctima —estas son facultades EXCLUSIVAS del Ministerio Público (Arts. 6, 83 Constitución, Art. 3 LOC MP). La víctima SÍ tiene derecho a: (a) solicitar medidas de protección (letra a, Art. 109 CPP); (b) recibir atención médica y psicológica de urgencia (letra b); (c) ser informada del curso del proceso (letra c); (d) solicitar diligencias de investigación (letra d); (e) ser oída antes de decisiones relevantes del fiscal (letra f); (f) ser informada del resultado del procedimiento (letra g); (g) presentar querella (Art. 111 CPP) o acusación particular (Art. 261 CPP). La víctima puede OPINAR y SOLICITAR, pero no VINCULAR al fiscal en la calificación jurídica ni en la pena. La víctima puede ejercer la acción penal mediante querella (Art. 111) y puede oponerse a la suspensión condicional del procedimiento (Art. 237 CPP), pero no sustituye al MP.'
},
{
  tipo:'VFD', nivel:'intermedio', area:'Unidad 3 - Código Procesal Penal',
  enunciado:'Según el Artículo 109 del CPP, las medidas de protección para la víctima pueden ser solicitadas verbalmente, sin necesidad de abogado patrocinante ni formalidad alguna.',
  respuesta:'V',
  explicacion:'VERDADERO. El Art. 109 inc. 2° CPP establece: "La solicitud de protección no requerirá de formalidad alguna y podrá ser presentada por la propia víctima, sin necesidad de abogado patrocinante". La víctima puede: (1) SOLICITAR VERBALMENTE en cualquier oficina del MP o tribunal de garantía; (2) NO NECESITA ABOGADO —el MP tiene el deber de acoger y tramitar su solicitud (Art. 6 CPP); (3) Puede hacerlo en CUALQUIER ETAPA del procedimiento, incluso antes de la formalización (Art. 109 bis, Ley 20.931/2016); (4) El MP o el tribunal debe RESOLVER LA SOLICITUD a la brevedad (plazo máximo implícito de 24-48 horas según protocolos URAVIT). Esta informalidad busca garantizar el ACCESO EFECTIVO a la protección, eliminando barreras burocráticas que podrían desproteger a la víctima. La Circular FN N°012/2017 instruye a los fiscales acoger toda solicitud de protección de la víctima, evaluar el riesgo mediante URAVIT, y presentar la solicitud al tribunal en caso de requerir medidas judiciales.'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 3 - Código Procesal Penal',
  enunciado:'El Código Procesal Penal establece en su Artículo 247 que el plazo de la investigación formalizada es de 2 años. ¿Cuál de las siguientes afirmaciones sobre este plazo es correcta?',
  opciones:[
    'Es un plazo fatal que no admite prórroga bajo ninguna circunstancia',
    'Puede ser prorrogado por el juez de garantía a solicitud del fiscal, por una sola vez, por el tiempo que el fiscal estime necesario',
    'El fiscal puede solicitar prórrogas sucesivas al juez de garantía, quien las concederá si existen antecedentes que justifiquen la extensión del plazo',
    'El plazo solo aplica si el imputado está en prisión preventiva; si está en libertad, la investigación puede durar indefinidamente'
  ],
  respuesta:2,
  explicacion:'El Art. 247 CPP establece que "el plazo máximo de la investigación formalizada será de dos años, contados desde la fecha de la formalización". Sin embargo, este plazo es PRORROGABLE: "El fiscal podrá solicitar fundadamente al juez de garantía la ampliación del plazo de investigación, hasta por los plazos que señale la ley, cuando existieren antecedentes que justifiquen dicha extensión". Las prórrogas pueden ser SUCESIVAS si se mantiene la justificación (complejidad de la causa, pluralidad de imputados, diligencias pendientes en el extranjero, pericias complejas). El plazo de 2 años fue establecido por la Ley 20.931 (2016, Agenda Corta) y rige para TODAS las investigaciones formalizadas, esté o no el imputado en prisión preventiva. La víctima puede oponerse al cierre de la investigación si considera que faltan diligencias (Art. 78 letra f CPP). Para investigaciones NO formalizadas, no existe plazo máximo —el fiscal puede mantener la investigación desformalizada indefinidamente, aunque la víctima puede solicitar al tribunal que ordene la formalización (Art. 186 CPP).'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 3 - Código Procesal Penal',
  enunciado:'El Artículo 170 del CPP establece el principio de oportunidad, que permite al fiscal abstenerse de ejercer la acción penal cuando la pena asociada al delito fuere irrelevante o el imputado hubiere reparado integralmente el daño causado a la víctima.',
  respuesta:'V',
  explicacion:'VERDADERO. El Art. 170 CPP establece: "El Ministerio Público podrá abstenerse de ejercer la acción penal cuando se tratare de un hecho que no comprometiere gravemente el interés público y la pena mínima asignada al delito no excediere de presidio menor en su grado mínimo (61 a 540 días), o cuando el imputado hubiere reparado integralmente el daño causado a la víctima, o existiere un acuerdo entre víctima e imputado en este sentido aprobado por el tribunal". CONDICIONES: (1) delito de baja gravedad (pena mínima ≤ 540 días); (2) que no comprometa gravemente el interés público; (3) reparación integral del daño o acuerdo víctima-imputado. El tribunal debe APROBAR la decisión del fiscal. La víctima puede OPONERSE y obligar al fiscal a continuar (Art. 170 inc. 3°). El principio de oportunidad NO aplica a delitos graves del crimen organizado (tráfico de drogas, trata de personas, homicidios, lavado de activos).'
},

// --- Agentes encubiertos, reveladores e informantes (+5) ---
{
  tipo:'MC', nivel:'dificil', area:'Unidad 3 - Agentes Encubiertos',
  enunciado:'Según el Artículo 25 de la Ley 20.000 y los protocolos de la Fiscalía Supraterritorial, ¿cuál de las siguientes afirmaciones sobre el agente encubierto es FALSA?',
  opciones:[
    'El agente encubierto debe ser un funcionario policial en servicio activo, no un particular',
    'Su actuación requiere autorización del fiscal y debe ser proporcionada y necesaria para la investigación',
    'El agente encubierto puede cometer cualquier delito en el curso de su infiltración sin consecuencia penal',
    'Puede operar bajo identidad supuesta autorizada, con documentos de respaldo proporcionados por el Ministerio Público'
  ],
  respuesta:2,
  explicacion:'Es FALSO que el agente encubierto pueda cometer CUALQUIER delito sin consecuencia penal. La Ley 20.000 (Art. 25) y la Ley 21.560 (2023, que modifica diversas leyes para fortalecer la persecución del crimen organizado) establecen que el agente encubierto ESTÁ EXENTO DE RESPONSABILIDAD PENAL solo cuando: (1) la conducta es CONSECUENCIA NECESARIA del desarrollo de la investigación; (2) existe la DEBIDA PROPORCIONALIDAD entre la conducta realizada y la finalidad de la investigación; (3) no se pone en PELIGRO INMINENTE la vida o integridad física de terceros inocentes. No existe un "permiso para delinquir" ilimitado. Las afirmaciones correctas: (A) debe ser funcionario policial (PDI o Carabineros); (B) requiere autorización fiscal y control judicial; (D) opera con identidad supuesta con documentos de respaldo. El Art. 25 bis regula al agente revelador, que simula interés en comprar droga para obtener evidencia. El Art. 28 regula al informante (particular que entrega información). La URAVIT protege la identidad de agentes encubiertos y sus familias.'
},
{
  tipo:'MC', nivel:'intermedio', area:'Unidad 3 - Agentes Encubiertos',
  enunciado:'¿Cuál es la diferencia fundamental entre el agente encubierto y el agente revelador según la legislación chilena?',
  opciones:[
    'No existe diferencia: ambos términos se refieren a la misma técnica de investigación',
    'El agente encubierto oculta su identidad infiltrándose en la organización; el agente revelador actúa con su identidad funcional pero simula interés en adquirir droga u objetos ilícitos',
    'El agente encubierto es un particular colaborador; el agente revelador es un funcionario policial',
    'El agente encubierto actúa en narcotráfico; el agente revelador solo en terrorismo'
  ],
  respuesta:1,
  explicacion:'La Ley 20.000 y la Ley 21.560 (2023) distinguen claramente: (A) AGENTE ENCUBIERTO (Art. 25 Ley 20.000): funcionario policial que oculta su identidad mediante una IDENTIDAD SUPUESTA (documentos falsos de respaldo), infiltrándose en la organización criminal para obtener información y pruebas. Su identidad real es CONOCIDA por el fiscal y el juez que autoriza, pero DESCONOCIDA por la organización criminal. (B) AGENTE REVELADOR (Art. 25 bis Ley 20.000): funcionario policial que, CON SU IDENTIDAD FUNCIONAL (no usa identidad falsa), simula interés en ADQUIRIR droga, armas u otros objetos ilícitos durante una transacción controlada ("compra controlada"), permitiendo la detención en flagrancia del vendedor. (C) INFORMANTE (Art. 28 Ley 20.000): PARTICULAR que proporciona información voluntaria a las policías o al Ministerio Público, generalmente a cambio de reserva de identidad o beneficios procesales. La protección a agentes y sus familias es responsabilidad de la URAVIT bajo protocolos especializados.'
},
{
  tipo:'VFD', nivel:'dificil', area:'Unidad 3 - Agentes Encubiertos',
  enunciado:'Según la Ley 20.000, el agente encubierto puede operar bajo orden del fiscal sin necesidad de autorización judicial previa, pues la urgencia de la investigación no permite esperar la decisión del tribunal.',
  respuesta:'F',
  explicacion:'FALSO. La Ley 20.000 (Art. 25) y la Ley 21.560 (2023) establecen que la actuación del agente encubierto REQUIERE AUTORIZACIÓN JUDICIAL PREVIA. El fiscal debe solicitar fundadamente al JUEZ DE GARANTÍA la autorización para que un funcionario policial actúe como agente encubierto, especificando: (1) identidad del funcionario; (2) delito investigado; (3) necesidad y proporcionalidad de la medida; (4) plazo de duración; (5) alcance de la autorización (qué conductas están permitidas). La autorización judicial es RESERVADA (no se notifica al imputado ni a su defensa) y tiene PLAZO determinado, prorrogable previa nueva solicitud. La única excepción a la autorización judicial previa es el AGENTE REVELADOR (Art. 25 bis), que puede actuar con sola autorización del FISCAL en casos urgentes, debiendo informar al juez dentro de 48 horas. Esta diferencia es fundamental: el agente encubierto (por su mayor invasividad al usar identidad falsa) requiere siempre control judicial previo; el agente revelador (compra controlada) admite control judicial posterior en casos urgentes.'
},
{
  tipo:'MC', nivel:'medio', area:'Unidad 3 - Agentes Encubiertos',
  enunciado:'El informante (Art. 28 Ley 20.000) se diferencia del agente encubierto y del agente revelador en que:',
  opciones:[
    'El informante es un particular que proporciona información sin infiltrarse en la organización criminal, mientras que el agente encubierto y el revelador son siempre funcionarios policiales',
    'El informante es un fiscal que recopila información de inteligencia criminal',
    'El informante siempre recibe remuneración económica del Ministerio Público por su colaboración',
    'El informante necesariamente debe declarar como testigo en el juicio oral sin protección especial'
  ],
  respuesta:0,
  explicacion:'El INFORMANTE (Art. 28 Ley 20.000) es un PARTICULAR —no funcionario público— que proporciona información útil para la investigación de delitos de la Ley 20.000. Características: (A) es VOLUNTARIO (no está obligado por deber funcionario); (B) NO se infiltra (solo transmite información que conoce por sus circunstancias personales); (C) puede recibir BENEFICIOS: reserva de identidad (Art. 307 CPP), protección policial si hay riesgo (Art. 308 CPP), y en algunos casos beneficios económicos (a través de fondos reservados del MP); (D) NO necesariamente declara en juicio —si declara, lo hará bajo medidas de protección (biombo, distorsión de voz, reserva de identidad). Diferencia clave: agente encubierto y revelador son FUNCIONARIOS POLICIALES que realizan TÉCNICAS ESPECIALES DE INVESTIGACIÓN; el informante es un CIVIL que COLABORA. La URAVIT evalúa el riesgo del informante y su familia para aplicar medidas de protección. La Ley 20.000 sanciona al funcionario que revele la identidad del informante (Art. 30).'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 3 - Agentes Encubiertos',
  enunciado:'La Ley 20.000 sanciona penalmente al funcionario público que revele indebidamente la identidad de un agente encubierto, agente revelador o informante, poniendo en riesgo su vida o integridad física.',
  respuesta:'V',
  explicacion:'VERDADERO. El Art. 30 de la Ley 20.000 sanciona con presidio menor en sus grados medio a máximo (541 días a 5 años) y multa de 100 a 500 UTM al "funcionario público que, teniendo conocimiento de la identidad de un agente encubierto, agente revelador o informante, la revelare indebidamente". Si la revelación pone en PELIGRO la vida o integridad física del agente o informante, la pena se eleva a presidio mayor en su grado mínimo (5 años y un día a 10 años). Si como consecuencia de la revelación se produce la MUERTE o lesiones graves del agente o informante, la pena es de presidio mayor en su grado medio a máximo (10 años y un día a 20 años). Esta protección penal refuerza el deber de RESERVA ABSOLUTA que tienen los fiscales, jueces, policías y todo funcionario que conozca la identidad de colaboradores de la justicia. La URAVIT mantiene archivos separados y cifrados de las identidades de agentes e informantes, con acceso restringido a autorización judicial.'
},

// --- Ley 21.057 (Entrevista videograbada) (+3) ---
{
  tipo:'VFD', nivel:'intermedio', area:'Unidad 3 - Ley 21.057',
  enunciado:'Según la Ley 21.057, la entrevista investigativa videograbada puede ser usada como prueba en el juicio oral, evitando que el NNA tenga que declarar nuevamente ante el tribunal.',
  respuesta:'V',
  explicacion:'VERDADERO. El Art. 16 de la Ley 21.057 establece que "la entrevista investigativa videograbada constituye un medio de prueba que puede ser presentado en el juicio oral". Su incorporación al juicio se rige por las reglas generales de la prueba (Arts. 295 y ss. CPP). La exhibición de la grabación en el juicio oral SUSTITUYE la declaración presencial del NNA, evitando que tenga que revivir el trauma ante el tribunal. Si excepcionalmente se requiere que el NNA declare en el juicio (Art. 15), deberá hacerlo en sala contigua mediante circuito cerrado de televisión, con intermediario, y las preguntas de las partes serán canalizadas a través del juez (no interrogatorio directo). El Tribunal Constitucional (Rol 3001-16-INA, 2017) declaró constitucional este sistema al considerar que el interés superior del niño (Art. 3° CDN) justifica limitar el derecho de defensa del imputado en lo relativo al contrainterrogatorio directo. La entrevista debe ser realizada por entrevistador ACREDITADO por el Ministerio de Justicia y DDHH (Art. 10).'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 3 - Ley 21.057',
  enunciado:'Según la Ley 21.057 y el Protocolo Intersectorial de Atención a NNA víctimas de delitos sexuales, ¿cuál es el plazo máximo que tiene el Ministerio Público para determinar las diligencias investigativas y solicitar medidas de protección para el NNA desde que toma conocimiento de la denuncia?',
  opciones:[
    '12 horas desde la recepción de la denuncia',
    '24 horas desde la recepción de la denuncia',
    '48 horas desde la recepción de la denuncia',
    'No existe plazo específico establecido por ley'
  ],
  respuesta:1,
  explicacion:'El Protocolo Intersectorial de Atención a NNA víctimas de delitos sexuales en el marco de la Ley 21.057 (Ministerio de Justicia y DDHH, 2019) establece que el Ministerio Público, una vez tomado conocimiento de la denuncia, debe determinar las diligencias investigativas y solicitar las medidas de protección y de asistencia para el NNA víctima o testigo dentro de un plazo máximo de 24 HORAS, contadas desde la recepción de la denuncia. Este plazo busca garantizar una RESPUESTA INMEDIATA del sistema de justicia para: (1) evaluar el riesgo del NNA (posibilidad de represalias del agresor, desprotección familiar); (2) solicitar medidas cautelares urgentes (prohibición de acercamiento, orden de alejamiento, custodia); (3) activar la red de protección (SENAME/Mejor Niñez, salud mental, asistencia social); (4) coordinar la entrevista videograbada con entrevistador acreditado. El incumplimiento de este plazo por parte del fiscal configura falta administrativa y puede ser objeto de reclamo disciplinario ante el Fiscal Regional.'
},
{
  tipo:'MC', nivel:'medio', area:'Unidad 3 - Ley 21.057',
  enunciado:'¿Cuál de los siguientes principios NO está consagrado en la Ley 21.057 como rector de la entrevista investigativa videograbada a NNA?',
  opciones:[
    'Interés superior del niño, niña o adolescente (Art. 3)',
    'No revictimización o mínima intervención (Art. 3)',
    'Publicidad del procedimiento para garantizar la transparencia del sistema (Art. 3)',
    'Reserva de las actuaciones para proteger la intimidad del NNA (Art. 12)'
  ],
  respuesta:2,
  explicacion:'La PUBLICIDAD del procedimiento NO es un principio de la Ley 21.057. Por el contrario, la ley consagra la RESERVA como principio: el Art. 12° establece que "todas las actuaciones reguladas por esta ley serán reservadas para terceros ajenos al procedimiento". Los principios rectores de la Ley 21.057 (Art. 3°) son: (A) Interés superior del NNA (Art. 3° CDN, Art. 7° Ley 21.430); (B) No revictimización y mínima intervención: "se procurará que el NNA sea entrevistado una sola vez" (Art. 6°); (C) Protección de la intimidad e imagen del NNA (Arts. 12 y 13); (D) Participación voluntaria del NNA (no puede ser obligado a declarar contra su voluntad); (E) Especialización: los entrevistadores deben ser profesionales acreditados (Art. 10); (F) Coordinación interinstitucional (Art. 14). La reserva busca proteger al NNA de la exposición mediática y del conocimiento de los hechos por personas ajenas a la investigación.'
},

// --- Ley 21.675 (Violencia integral contra mujeres) (+3) ---
{
  tipo:'VFD', nivel:'intermedio', area:'Unidad 3 - Ley 21.675',
  enunciado:'La Ley 21.675 (2024) establece que el Estado de Chile debe garantizar atención psicológica especializada y gratuita a todas las mujeres víctimas de violencia de género, con independencia de que hayan denunciado o no el hecho ante la justicia.',
  respuesta:'V',
  explicacion:'VERDADERO. La Ley 21.675 (2024, "Ley Integral contra la Violencia hacia las Mujeres"), en su Art. 29, establece el derecho de las mujeres víctimas de violencia de género a recibir atención psicológica especializada y gratuita "con independencia de la presentación de una denuncia o querella". Este principio reconoce que muchas mujeres no denuncian por miedo, dependencia económica, naturalización de la violencia, o desconfianza en el sistema de justicia. La atención incluye: (1) atención psicológica individual y/o grupal especializada en trauma; (2) contención emocional inmediata (PAP); (3) acompañamiento psicosocial; (4) seguimiento posterior a la intervención. El Estado debe garantizar esta atención a través de la red pública de salud (consultorios, hospitales, COSAM) y mediante convenios con organizaciones especializadas. La Ley 21.675 crea además un Sistema Nacional Integral de Protección que coordina a todas las instituciones del Estado involucradas en la prevención, sanción y reparación de la violencia de género.'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 3 - Ley 21.675',
  enunciado:'La Ley 21.675 (2024) introduce una modificación relevante al Código Procesal Penal en materia de medidas cautelares para proteger a mujeres víctimas de violencia de género. ¿Cuál es esta modificación?',
  opciones:[
    'Elimina la prisión preventiva para imputados por violencia de género, priorizando medidas menos gravosas',
    'Permite al tribunal decretar medidas cautelares de protección incluso antes de la formalización de la investigación, por un plazo máximo de 90 días prorrogables, cuando exista riesgo inminente para la víctima',
    'Exige que toda denuncia por violencia de género sea investigada por la Fiscalía Supraterritorial',
    'Establece que solo el fiscal puede solicitar medidas de protección, excluyendo a la víctima de esta facultad'
  ],
  respuesta:1,
  explicacion:'La Ley 21.675 (2024) modifica el Art. 109 bis del CPP ampliando el plazo máximo de las medidas de protección pre-formalización de 30 a 90 DÍAS, prorrogables por períodos iguales, cuando se trate de violencia de género. Esta ampliación reconoce la especial situación de riesgo que enfrentan las mujeres víctimas de violencia de género, donde el ciclo de violencia (Walker, 1979) implica períodos de calma seguidos de escalada que requiere protección prolongada. Además, la ley: (A) ESTABLECE EL DEBER del MP de solicitar medidas cautelares en todos los casos de violencia de género con evaluación de riesgo URAVIT; (B) OBLIGA al tribunal a FUNDAMENTAR el rechazo de medidas de protección solicitadas por la víctima; (C) CREA un registro nacional de medidas cautelares de violencia de género; (D) FORTALECE el uso de dispositivos telemáticos de monitoreo (tobilleras electrónicas) para controlar prohibiciones de acercamiento. La ley NO elimina la prisión preventiva (Arts. 139-141 CPP), que sigue siendo aplicable cuando concurren los requisitos.'
},
{
  tipo:'VFD', nivel:'medio', area:'Unidad 3 - Ley 21.675',
  enunciado:'La Ley 21.675 (2024) incorpora el enfoque de "interseccionalidad" como principio rector, reconociendo que las mujeres experimentan la violencia de manera diferenciada según su edad, origen étnico, situación migratoria, discapacidad, orientación sexual, identidad de género, y situación socioeconómica.',
  respuesta:'V',
  explicacion:'VERDADERO. El Art. 4° letra d) de la Ley 21.675 consagra la INTERSECCIONALIDAD como principio rector: "El Estado deberá considerar, en la prevención, investigación, sanción y reparación de la violencia contra las mujeres, la concurrencia de factores de discriminación múltiple o interseccionalidad". Este principio, desarrollado por Kimberlé Crenshaw (1989), reconoce que las mujeres no son un grupo homogéneo y que factores como edad, origen étnico, nacionalidad, situación migratoria, discapacidad, orientación sexual, identidad de género, situación socioeconómica, ruralidad, privación de libertad, y otras condiciones, se INTERSECAN generando experiencias diferenciadas de violencia y barreras específicas de acceso a la justicia. Aplicación práctica: (1) mujeres migrantes en situación irregular enfrentan barreras adicionales para denunciar (miedo a deportación); (2) mujeres con discapacidad dependen del agresor para cuidados básicos; (3) mujeres de pueblos originarios enfrentan barreras lingüísticas y culturales. La URAVIT debe incorporar el enfoque interseccional en sus evaluaciones de riesgo y planes de intervención.'
},

// --- Ley 21.430 (Garantías de la niñez) (+2) ---
{
  tipo:'MC', nivel:'medio', area:'Unidad 3 - Ley 21.430',
  enunciado:'La Ley 21.430 (2022) establece el "derecho a ser oído" de NNA en todo procedimiento judicial o administrativo que les afecte. ¿A partir de qué edad se presume que el NNA tiene madurez suficiente para ejercer este derecho directamente?',
  opciones:[
    'Desde los 7 años, cuando se presume que el NNA puede formarse un juicio propio',
    'Desde los 12 años, edad a partir de la cual se exige al tribunal escuchar y considerar su opinión',
    'Desde los 14 años, cuando adquiere plena capacidad procesal',
    'La Ley 21.430 no establece edad: todo NNA tiene derecho a ser oído según su edad y madurez, sin presunciones'
  ],
  respuesta:3,
  explicacion:'La Ley 21.430 (Art. 23 letra a y Art. 36) consagra el derecho del NNA a "ser oído en todo procedimiento judicial o administrativo que le afecte, ya sea directamente o a través de un representante, de manera acorde a su edad, madurez y desarrollo progresivo". La ley NO establece una edad fija ni una presunción, siguiendo el principio de AUTONOMÍA PROGRESIVA del NNA (Art. 12 CDN): a mayor edad y madurez, mayor peso debe darse a su opinión. La Ley 21.430 crea además: (A) Defensoría de los Derechos de la Niñez (heredera del INDH en materia de niñez); (B) Sistema de Garantías y Protección Integral; (C) Subsecretaría de la Niñez; (D) Comité de los Derechos del Niño. El interés superior del NNA es definido como derecho, principio y norma de procedimiento (Art. 7°). La complementariedad con la Ley 21.057 es fundamental: el NNA víctima de delito sexual debe ser entrevistado POR UNA SOLA VEZ por profesional acreditado (no interrogado repetidamente), y su opinión debe ser considerada en las decisiones que le afecten (medidas de protección, régimen de visitas, etc.).'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 3 - Ley 21.430',
  enunciado:'La Ley 21.430 establece que el interés superior del niño es un derecho sustantivo, un principio interpretativo fundamental y una norma de procedimiento que debe aplicarse en todas las decisiones administrativas y judiciales que afecten a NNA.',
  respuesta:'V',
  explicacion:'VERDADERO. La Ley 21.430 (2022, "Ley de Garantías y Protección Integral de los Derechos de la Niñez y Adolescencia") en su Art. 7° define el interés superior del NNA con un TRIPLE CARÁCTER: (A) DERECHO SUSTANTIVO: el NNA tiene derecho a que su interés superior sea una consideración primordial en toda decisión; (B) PRINCIPIO INTERPRETATIVO FUNDAMENTAL: si una norma admite más de una interpretación, se elegirá la que mejor satisfaga el interés superior del NNA; (C) NORMA DE PROCEDIMIENTO: toda decisión administrativa o judicial debe incluir una estimación de las posibles repercusiones en el NNA y una justificación de cómo se ha considerado su interés superior. Esta triple naturaleza fue establecida por la Observación General N°14 (2013) del Comité de los Derechos del Niño de Naciones Unidas y es vinculante para Chile (Art. 5° Constitución).'
},

// --- Medidas de protección (+5) ---
{
  tipo:'VFD', nivel:'dificil', area:'Unidad 3 - Medidas de Protección',
  enunciado:'Según el Artículo 308 del CPP, la protección policial a víctimas y testigos se limita a rondas periódicas de Carabineros o PDI, sin posibilidad de custodia personal permanente.',
  respuesta:'F',
  explicacion:'FALSO. El Art. 308 CPP NO limita la protección policial a rondas periódicas. El artículo permite un ESPECTRO GRADUABLE de medidas: (1) RONDAS PERIÓDICAS (varias veces al día, horarios aleatorios); (2) PATRULLAJES FOCALIZADOS (presencia policial visible en el entorno de la víctima); (3) CUSTODIA PERSONAL PERMANENTE (un funcionario policial asignado exclusivamente a la protección de la víctima 24/7, en casos de riesgo ALTO o EXTREMO); (4) BOTÓN DE PÁNICO (dispositivo GPS conectado a central de comunicaciones policial para respuesta inmediata); (5) VEHÍCULO DE PROTECCIÓN. La medida específica es determinada por la URAVIT según el nivel de riesgo evaluado: riesgo bajo (rondas esporádicas), medio (rondas frecuentes + botón de pánico), alto (custodia personal diurna), extremo (custodia 24/7 + reserva total de identidad + posible cambio de domicilio Art. 312). La Ley 21.675 (2024) refuerza la obligación de protección policial inmediata en casos de violencia de género.'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 3 - Medidas de Protección',
  enunciado:'¿Cuál de las siguientes medidas de protección se considera "autónoma" (no requiere autorización judicial previa) según los protocolos URAVIT?',
  opciones:[
    'Reserva total de identidad del testigo (Art. 307 CPP)',
    'Cambio de domicilio temporal con recursos económicos del MP (Art. 312 CPP)',
    'Evaluación de riesgo por la URAVIT y derivación a servicios de apoyo psicosocial',
    'Uso de biombo en el juicio oral (Art. 310 CPP)'
  ],
  respuesta:2,
  explicacion:'Las medidas de protección se clasifican en JUDICIALES (requieren autorización del tribunal) y AUTÓNOMAS (adoptadas directamente por el MP/URAVIT sin necesidad de autorización judicial). Son medidas AUTÓNOMAS (URAVIT puede aplicarlas directamente): (A) evaluación de riesgo y determinación del nivel de protección; (B) derivación a servicios de apoyo psicosocial (atención psicológica, trabajo social, asesoría jurídica); (C) acompañamiento a la víctima durante diligencias procesales; (D) coordinación con Carabineros/PDI para rondas periódicas (primer nivel); (E) información y orientación a la víctima sobre sus derechos y el proceso; (F) contacto periódico de seguimiento. Son medidas JUDICIALES (requieren autorización del tribunal): reserva de identidad (Art. 307), custodia policial personal permanente (Art. 308), biombo/videoconferencia (Art. 310), cambio de domicilio con recursos (Art. 312). La distinción es relevante porque permite a la URAVIT ACTUAR INMEDIATAMENTE con medidas autónomas mientras se tramita la autorización judicial para medidas más intensas.'
},
{
  tipo:'VFD', nivel:'medio', area:'Unidad 3 - Medidas de Protección',
  enunciado:'Según el Art. 307 CPP, la reserva de identidad del testigo puede ser total (nombre y domicilio) o parcial (solo domicilio). La reserva parcial no requiere riesgo grave para la vida, solo riesgo para la intimidad o seguridad del testigo.',
  respuesta:'V',
  explicacion:'VERDADERO. El Art. 307 CPP distingue dos niveles de reserva de identidad: (A) RESERVA PARCIAL (inc. 2°): el tribunal puede autorizar que "no se revele el domicilio del testigo en las actuaciones del procedimiento", cuando exista riesgo para la intimidad o seguridad del testigo (estándar menor: no requiere riesgo de muerte). (B) RESERVA TOTAL (inc. 4°): el tribunal puede autorizar "la reserva del nombre y domicilio del testigo", impidiendo que la defensa conozca su identidad. Esta medida requiere un estándar más alto: "ANTECEDENTES CALIFICADOS de riesgo GRAVE para la vida o integridad física del testigo o su familia". La reserva total es EXCEPCIONAL y TEMPORAL (solo por el tiempo indispensable). El TC chileno (Rol 2030-11-INA, 2012) declaró constitucional la reserva total siempre que se garantice un estándar mínimo de contradicción (la defensa puede presentar preguntas por escrito al juez, quien las formula al testigo). La reserva parcial es de aplicación más frecuente y protege el domicilio para evitar hostigamientos.'
},
{
  tipo:'MC', nivel:'intermedio', area:'Unidad 3 - Medidas de Protección',
  enunciado:'Según el Artículo 310 del CPP, ¿cuál de los siguientes NO es un recurso tecnológico autorizado para proteger a testigos en el juicio oral?',
  opciones:[
    'Biombo físico que impide el contacto visual entre testigo e imputado',
    'Videoconferencia desde lugar remoto con transmisión en tiempo real de imagen y voz',
    'Distorsión de voz mediante procesamiento de audio en tiempo real',
    'Sustitución del testimonio del testigo por declaración jurada ante notario'
  ],
  respuesta:3,
  explicacion:'La declaración jurada ante notario NO es un recurso tecnológico autorizado por el Art. 310 CPP. Los recursos autorizados son: (1) BIOMBO FÍSICO: "separación física del testigo del imputado o del público, mediante tabiques, biombos u otros elementos que impidan la visión del testigo"; (2) VIDEOCONFERENCIA: "declaración del testigo fuera de la sala de audiencia, a través de un sistema de videoconferencia u otro dispositivo técnico que transmita su imagen y voz en tiempo real" (Art. 310 inc. 3°); (3) DISTORSIÓN DE VOZ: "distorsión de la voz del testigo mediante procesamiento de audio" (Art. 310 inc. 4°); (4) SALA CONTIGUA con circuito cerrado de televisión (agregado por Ley 21.057/2018 para NNA). Una declaración jurada ante notario NO ES TESTIMONIO EN JUICIO y vulneraría el principio de inmediación (Art. 329 CPP) y el derecho a defensa. La Ley 20.931 (2016) amplió los recursos tecnológicos disponibles.'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 3 - Medidas de Protección',
  enunciado:'El botón de pánico es un dispositivo electrónico (GPS) que permite a la víctima alertar a la central de comunicaciones de Carabineros con solo presionarlo, generando una respuesta policial inmediata.',
  respuesta:'V',
  explicacion:'VERDADERO. El botón de pánico es un DISPOSITIVO ELECTRÓNICO PORTÁTIL con geolocalización GPS, entregado por la URAVIT a víctimas de alto riesgo. Al presionarlo: (1) se envía una ALERTA SILENCIOSA a la central de comunicaciones de Carabineros (CENCO) con la identidad de la víctima y su ubicación exacta en tiempo real; (2) la central despacha INMEDIATAMENTE al carro policial más cercano (respuesta en minutos, no horas); (3) simultáneamente se graba el audio del entorno para documentar posibles amenazas; (4) queda registro de todas las activaciones para seguimiento. El botón de pánico no es la única medida electrónica: la Ley 21.675 (2024) fortaleció el uso de TOBILLERAS ELECTRÓNICAS para monitorear prohibiciones de acercamiento del agresor (Art. 155 bis CPP): si el agresor viola la zona de exclusión, la central de monitoreo alerta a Carabineros y a la víctima. El botón de pánico se asigna a víctimas de riesgo medio a alto; las tobilleras al agresor con prohibición de acercamiento.'
},

// ===========================================
// UNIDAD 4: INTERVENCIÓN (+30)
// ===========================================

// --- PAP - Primeros Auxilios Psicológicos (+6) ---
{
  tipo:'MC', nivel:'medio', area:'Unidad 4 - Primeros Auxilios Psicológicos',
  enunciado:'Según el Manual ABCDE para Primeros Auxilios Psicológicos (2018), el acrónimo ABCDE significa:',
  opciones:[
    'Analizar, Buscar, Calmar, Decidir, Ejecutar',
    'Atención básica, Brindar contención, Calmar, Derivar, Evaluar',
    'A: Atender necesidades básicas; B: Brindar calma y seguridad; C: Conexión con redes de apoyo; D: Desarrollar autoeficacia; E: Esperanza',
    'Atención, Bienestar, Compañía, Desahogo, Estabilidad'
  ],
  respuesta:2,
  explicacion:'El Manual ABCDE para Primeros Auxilios Psicológicos (Ministerio de Salud/Fiscalía Nacional, 2018) define el acrónimo basado en los cinco elementos esenciales de Hobfoll et al. (2007): A = ATENDER necesidades básicas y urgentes (agua, alimento, abrigo, seguridad física, atención médica de urgencia); B = BRINDAR calma y seguridad (técnicas de respiración 4-4-4, escucha activa, validación emocional, ambiente tranquilo y protegido); C = CONEXIÓN con redes de apoyo (familia, amigos, comunidad, servicios de salud); D = DESARROLLAR autoeficacia (ayudar a la persona a recuperar sensación de control sobre su vida, identificar sus propios recursos y fortalezas); E = ESPERANZA (psicoeducación sobre reacciones normales al trauma, información sobre recursos disponibles, transmitir expectativas realistas pero positivas de recuperación). El orden NO es rígido: "cada paso constituye una oferta, no una obligación". Los PAP pueden ser aplicados por cualquier profesional entrenado, no solo psicólogos. La URAVIT capacita a fiscales, asistentes sociales y policías en PAP para primera acogida a víctimas.'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 4 - Primeros Auxilios Psicológicos',
  enunciado:'Según el Manual ABCDE (2018), los Primeros Auxilios Psicológicos deben ser aplicados exclusivamente por psicólogos clínicos con especialización en trauma, dado que involucran técnicas psicoterapéuticas avanzadas.',
  respuesta:'F',
  explicacion:'FALSO. El Manual ABCDE (2018) establece explícitamente que los PAP "pueden y deben ser aplicados por cualquier persona entrenada, no siendo necesaria la formación profesional en psicología" (pág. 7). Los PAP NO son psicoterapia —son una intervención BREVE (minutos a horas), INMEDIATA (post-evento traumático), y NO INVASIVA. Están diseñados para ser aplicados por: policías (Carabineros, PDI), funcionarios de la URAVIT, trabajadores sociales, paramédicos (SAMU), bomberos, profesores, y cualquier personal de primera respuesta. Lo que SÍ requiere psicólogo especializado: (1) terapia cognitivo-conductual centrada en trauma (TCC-CT); (2) EMDR (Desensibilización y Reprocesamiento por Movimientos Oculares); (3) evaluación y tratamiento de TEPT. Los PAP son una intervención de PRIMERA AYUDA psicológica, análoga a los primeros auxilios físicos: no curan, pero estabilizan y previenen complicaciones. La Organización Mundial de la Salud (2011, "Primera Ayuda Psicológica: Guía para Trabajadores de Campo") también enfatiza que los PAP no requieren formación profesional en salud mental.'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 4 - Primeros Auxilios Psicológicos',
  enunciado:'¿Cuál de los siguientes NO es un objetivo de los Primeros Auxilios Psicológicos según el Manual ABCDE (2018)?',
  opciones:[
    'Estabilizar emocionalmente a la persona tras el evento traumático',
    'Evaluar necesidades básicas y urgentes (seguridad, salud, abrigo, alimento)',
    'Realizar diagnóstico diferencial de trastornos mentales (TEPT, depresión mayor, trastorno de pánico)',
    'Conectar a la persona con su red de apoyo social y con servicios de ayuda disponibles'
  ],
  respuesta:2,
  explicacion:'El DIAGNÓSTICO DIFERENCIAL de trastornos mentales NO es objetivo de los PAP. El Manual ABCDE (2018, págs. 8-11) establece que los PAP tienen objetivos limitados y específicos: (1) ESTABILIZAR EMOCIONALMENTE: reducir la activación fisiológica mediante técnicas de respiración, groundning (anclaje al presente), y validación emocional; (2) EVALUAR Y SATISFACER NECESIDADES BÁSICAS: el modelo ABCDE prioriza la jerarquía de necesidades (Maslow): primero seguridad física y salud, luego necesidades psicológicas; (3) CONECTAR con redes de apoyo: familia, amigos, comunidad, servicios de salud mental si es necesario; (4) PSICOEDUCAR: explicar que las reacciones (miedo, confusión, ira, culpa, insomnio) son NORMALES después de un trauma y generalmente transitorias; (5) DERIVAR si se detectan necesidades que exceden el alcance de los PAP. El diagnóstico de TEPT (DSM-5, Criterios A-H) requiere al menos 1 MES de evolución, tiempo durante el cual los PAP ya deberían haberse completado. Los PAP NO sustituyen la evaluación psicológica forense que realiza el perito (Art. 314 CPP) para acreditar daño psicológico.'
},
{
  tipo:'VFD', nivel:'medio', area:'Unidad 4 - Primeros Auxilios Psicológicos',
  enunciado:'La técnica de respiración 4-4-4 recomendada en el Manual ABCDE consiste en inhalar durante 4 segundos, retener el aire durante 4 segundos, y exhalar lentamente durante 4 segundos, repitiendo el ciclo por al menos 10 minutos para reducir la ansiedad aguda.',
  respuesta:'V',
  explicacion:'VERDADERO. La técnica 4-4-4 (respiración diafragmática o cuadrada) es una de las herramientas centrales de los PAP descrita en el Manual ABCDE (2018, págs. 23-25): (A) INHALAR lentamente por la nariz durante 4 segundos, llevando el aire al abdomen (no al pecho); (B) RETENER la respiración durante 4 segundos; (C) EXHALAR lentamente por la boca durante 4 segundos, como si se soplara una vela; (D) REPETIR el ciclo durante al menos 10 minutos, idealmente 3 veces al día durante la primera semana post-trauma. Fundamentos neurofisiológicos: la respiración diafragmática ACTIVA EL SISTEMA NERVIOSO PARASIMPÁTICO (nervio vago), disminuyendo la frecuencia cardíaca, la presión arterial y los niveles de cortisol. Es una técnica de bajo costo, sin efectos adversos, que puede ser enseñada en minutos. Está recomendada por la APA (2017) y la OMS (2013) como intervención de primera línea para ansiedad aguda. NO reemplaza tratamiento psicológico especializado si los síntomas persisten.'
},
{
  tipo:'MC', nivel:'intermedio', area:'Unidad 4 - Primeros Auxilios Psicológicos',
  enunciado:'Según los cinco elementos esenciales de Hobfoll et al. (2007) para la intervención temprana en trauma masivo, ¿cuál de los siguientes NO es uno de dichos elementos?',
  opciones:[
    'Calma (sense of calm)',
    'Seguridad (sense of safety)',
    'Catarsis emocional intensa (ventilación del trauma)',
    'Autoeficacia colectiva (self-efficacy) y Esperanza (hope)'
  ],
  respuesta:2,
  explicacion:'La CATARSIS EMOCIONAL INTENSA (ventilación o "debriefing" obligatorio) NO es uno de los cinco elementos de Hobfoll. De hecho, la evidencia científica demostró que el "debriefing psicológico obligatorio" (Critical Incident Stress Debriefing - CISD) NO es efectivo e incluso puede ser PERJUDICIAL (aumenta el riesgo de TEPT en algunas personas según meta-análisis de Rose et al., 2002). Los cinco elementos esenciales de Hobfoll et al. (2007) son: (1) SEGURIDAD (sense of safety): garantizar protección física real y percepción subjetiva de seguridad; (2) CALMA (sense of calm): reducir la hiperactivación fisiológica mediante técnicas como respiración 4-4-4; (3) AUTOEFICACIA COLECTIVA (sense of self and collective efficacy): ayudar a la persona a recuperar la sensación de control sobre su vida, identificando sus propios recursos; (4) CONEXIÓN (sense of connectedness): facilitar el contacto con redes de apoyo (familia, comunidad); (5) ESPERANZA (sense of hope): transmitir expectativas realistas de recuperación, psicoeducación sobre la normalidad de las reacciones. El Manual ABCDE se basa en estos 5 elementos.'
},
{
  tipo:'VFD', nivel:'dificil', area:'Unidad 4 - Primeros Auxilios Psicológicos',
  enunciado:'El Manual ABCDE (2018) establece que los Primeros Auxilios Psicológicos pueden incluir la técnica de "grounding" o anclaje al presente, que consiste en pedir a la persona que identifique 5 cosas que ve, 4 que puede tocar, 3 que puede escuchar, 2 que puede oler y 1 que puede saborear.',
  respuesta:'V',
  explicacion:'VERDADERO. La técnica 5-4-3-2-1 de "grounding" o anclaje sensorial al presente está descrita en el Manual ABCDE (2018, págs. 26-27) como una herramienta para ayudar a la persona a salir de un estado de disociación, flashback o crisis de ansiedad, reconectándola con el momento presente a través de sus sentidos: (5) cosas que puede VER (describir objetos concretos en la habitación); (4) cosas que puede TOCAR (textura de la ropa, superficie de una mesa); (3) sonidos que puede ESCUCHAR (tráfico lejano, ventilador); (2) olores que puede PERCIBIR (café, perfume); (1) sabor que puede SENTIR (aunque sea el sabor neutro de la boca). Mecanismo neurobiológico: la técnica activa la corteza prefrontal (control ejecutivo) y reduce la activación de la amígdala (centro del miedo), ayudando a la persona a "salir" del modo de supervivencia (fight/flight/freeze) y volver al modo de regulación. Es especialmente útil en crisis de pánico, flashbacks de TEPT y estados disociativos. La técnica NO sustituye tratamiento especializado si los síntomas son persistentes.'
},

// --- Técnicas de entrevista y escucha activa (+5) ---
{
  tipo:'MC', nivel:'dificil', area:'Unidad 4 - Entrevista y Escucha Activa',
  enunciado:'El protocolo NICHD (National Institute of Child Health and Human Development) para entrevista forense con NNA establece una estructura de fases. ¿Cuál es el orden correcto?',
  opciones:[
    'Fase sustantiva → Fase de rapport → Fase de cierre → Fase de práctica de memoria',
    'Fase de rapport → Fase de práctica de memoria episódica → Fase sustantiva (exploración del evento) → Fase de cierre',
    'Fase de cierre → Fase sustantiva → Fase de rapport',
    'Fase práctica de memoria → Fase de cierre → Fase sustantiva → Fase de rapport'
  ],
  respuesta:1,
  explicacion:'El Protocolo NICHD (Lamb, Hershkowitz, Orbach & Esplin, 2008) estructura la entrevista forense en fases progresivas: (1) FASE DE RAPPORT (construcción de vínculo): el entrevistador se presenta, explica su rol, establece reglas básicas ("si no entiendes, dime"; "si no sabes, no adivines") y genera un ambiente de confianza; (2) FASE DE PRÁCTICA DE MEMORIA EPISÓDICA: se pide al NNA narrar un evento neutral reciente (ej. "cuéntame qué hiciste ayer desde que despertaste") para entrenarlo en la producción de narrativas detalladas con preguntas abiertas; (3) FASE SUSTANTIVA (exploración del evento): transición al tema de investigación ("cuéntame el motivo por el que estamos aquí hoy"), utilizando exclusivamente preguntas abiertas ("¿qué pasó después?"), evitando preguntas sugestivas, directivas o cerradas; (4) FASE DE CIERRE: se agradece al NNA, se retoman temas neutrales, se verifica su estado emocional. Este protocolo es el estándar para entrevistas con NNA según la Ley 21.057 (Art. 10). La URAVIT capacita a sus entrevistadores en NICHD.'
},
{
  tipo:'VFD', nivel:'intermedio', area:'Unidad 4 - Entrevista y Escucha Activa',
  enunciado:'Las preguntas abiertas en la entrevista forense con víctimas ("¿qué pasó después?", "cuéntame más sobre eso") producen relatos menos precisos que las preguntas cerradas ("¿fue a las 3:00 o a las 4:00?"), por lo que estas últimas deben preferirse para garantizar exactitud.',
  respuesta:'F',
  explicacion:'FALSO. La evidencia científica en psicología del testimonio (Ceci & Bruck, 1993; Lamb et al., 2008) demuestra lo contrario: las PREGUNTAS ABIERTAS producen relatos MÁS PRECISOS (aunque a veces menos completos) que las preguntas cerradas o directivas. Las preguntas cerradas y sugestivas CONTAMINAN el recuerdo (efecto de "misinformation" de Loftus, 1979), induciendo a la persona a incorporar información falsa sugerida por el entrevistador. El Protocolo NICHD y la Ley 21.057 establecen que deben PRIORIZARSE las preguntas abiertas ("¿qué pasó?"), seguidas de preguntas de seguimiento también abiertas ("¿qué pasó después?"), y solo como ÚLTIMO RECURSO (cuando se han agotado todas las preguntas abiertas) recurrir a preguntas específicas pero NO sugestivas. El Manual Victimológico (Cap. IV, págs. 27-37) enfatiza: "evite las preguntas que sugieren una respuesta; permita que la víctima narre con sus propias palabras a su propio ritmo".'
},
{
  tipo:'MC', nivel:'medio', area:'Unidad 4 - Entrevista y Escucha Activa',
  enunciado:'La "escucha activa" (Rogers, 1951) es una técnica de comunicación fundamental en la atención a víctimas. ¿Cuáles de los siguientes son componentes de la escucha activa? 1) Parafrasear lo que la víctima ha dicho para confirmar comprensión. 2) Mantener contacto visual y postura corporal receptiva. 3) Validar emociones ("es comprensible que te sientas así"). 4) Interrumpir para hacer preguntas de seguimiento que aclaren contradicciones en el relato.',
  opciones:[
    '1, 2 y 3',
    '1, 2 y 4',
    '2, 3 y 4',
    'Todas las anteriores'
  ],
  respuesta:0,
  explicacion:'Los componentes 1, 2 y 3 son escucha activa. El componente 4 (INTERRUMPIR para aclarar contradicciones) NO es escucha activa —por el contrario, es una práctica CONTRAINDICADA en primera atención a víctimas. La escucha activa (Rogers, 1951; Egan, 2010) incluye: (1) PARAFRASEAR —repetir con palabras propias para confirmar comprensión ("lo que escucho es que... ¿es correcto?"); (2) COMUNICACIÓN NO VERBAL —contacto visual (sin ser intimidante), postura corporal abierta, asentir ocasionalmente, inclinarse ligeramente hacia adelante; (3) VALIDAR EMOCIONES —"es comprensible que te sientas así después de lo que viviste", sin juzgar ni minimizar; (4) NO INTERRUMPIR —respetar los silencios, permitir que la víctima narre a su ritmo; (5) PREGUNTAS ABIERTAS al final de cada bloque narrativo. El Manual Victimológico (Cap. IV, pág. 30) enfatiza: "No interrumpa a la víctima intentando aclarar aparentes contradicciones —el trauma afecta la memoria y la coherencia narrativa". Las contradicciones aparentes son normales en víctimas de trauma y NO deben ser confrontadas en primera acogida.'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 4 - Entrevista y Escucha Activa',
  enunciado:'El Manual Victimológico (2009) recomienda que la primera entrevista con la víctima incluya la frase "yo te creo" o similar, para transmitir credibilidad y confianza, independientemente de que posteriormente se realice la evaluación pericial del relato.',
  respuesta:'V',
  explicacion:'VERDADERO. El Manual Victimológico (Cap. IV, punto 2, págs. 27-30) enfatiza que la primera actitud del profesional ante la revelación de la víctima debe ser de CREDIBILIDAD Y APOYO. La frase "yo te creo" (o "gracias por confiar en mí", "lo que cuentas es muy importante") tiene un triple propósito: (1) VALIDAR a la persona que ha roto el silencio (la revelación es un acto de valentía); (2) GENERAR CONFIANZA (si la víctima se siente cuestionada, puede retractarse o cerrar su relato); (3) FACILITAR la narración completa (la víctima relajada recuerda mejor que la víctima a la defensiva). Esto NO significa que el profesional renuncie a su juicio crítico: la VALORACIÓN DE CREDIBILIDAD del relato corresponde a una fase POSTERIOR de la investigación (pericia psicológica forense, Art. 314 CPP; análisis de corroboración periférica; evaluación de consistencia interna del relato). La credibilidad inicial es una ACTITUD DE ACOGIDA, no una conclusión jurídica. La Corte IDH (Caso Fernández Ortega vs. México, 2010) estableció que las autoridades deben presumir la buena fe de la víctima.'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 4 - Entrevista y Escucha Activa',
  enunciado:'Según los protocolos URAVIT y la Ley 21.057, ¿qué principio rige la entrevista cuando la víctima es un NNA y el entrevistador detecta signos de fatiga, estrés o bloqueo emocional?',
  opciones:[
    'Principio de continuidad: la entrevista NO debe suspenderse bajo ninguna circunstancia una vez iniciada, para evitar fragmentar el relato',
    'Principio de no revictimización y flexibilidad: la entrevista debe PAUSARSE o SUSPENDERSE si el NNA muestra signos de fatiga, estrés o bloqueo, reanudándose en mejores condiciones',
    'Principio de eficiencia: acelerar el ritmo de preguntas para obtener la información necesaria antes de que el NNA se fatigue más',
    'Principio de sustitución: si el NNA no puede continuar, el entrevistador completa el relato basándose en lo ya narrado y lo complementa con fuentes externas'
  ],
  respuesta:1,
  explicacion:'La Ley 21.057 (Art. 6° y Art. 11°) y los protocolos URAVIT consagran el principio de NO REVICTIMIZACIÓN Y FLEXIBILIDAD: la entrevista investigativa videograbada debe ADAPTARSE al estado emocional del NNA. Si el entrevistador observa signos de fatiga, estrés intenso, llanto, bloqueo o disociación, DEBE: (1) ofrecer una PAUSA para que el NNA descanse, tome agua, se calme; (2) si el malestar persiste, SUSPENDER la entrevista y reprogramarla para otro día; (3) NUNCA forzar al NNA a continuar contra su voluntad). La entrevista NO debe ser un interrogatorio extenuante —su propósito es obtener información minimizando el daño. El Art. 11° establece que la entrevista debe realizarse "en condiciones que respeten su estado emocional y su desarrollo evolutivo". Esto está alineado con el interés superior del niño (Art. 3° CDN). La opción de "acelerar" es contraproducente (genera más estrés y menor calidad del relato); "sustituir" el relato del NNA es inaceptable (el testimonio es personal e insustituible).'
},

// --- Prevención de victimización secundaria (+4) ---
{
  tipo:'MC', nivel:'medio', area:'Unidad 4 - Prevención Victimización Secundaria',
  enunciado:'Según el Manual Victimológico (2009), ¿cuál de las siguientes es una medida efectiva de prevención de victimización secundaria durante la investigación penal?',
  opciones:[
    'Coordinar la realización de pericias médicas y psicológicas para que la víctima no tenga que repetir su relato a múltiples profesionales',
    'Exigir a la víctima que declare en cada audiencia para que el tribunal pueda formarse convicción de primera mano',
    'Realizar careos entre víctima e imputado para verificar la veracidad de ambas versiones',
    'Publicar extractos del testimonio de la víctima en medios de comunicación para generar conciencia social sobre el delito'
  ],
  respuesta:0,
  explicacion:'El Manual Victimológico (Cap. IV, págs. 27-37) y los protocolos URAVIT establecen medidas de prevención de victimización secundaria: (A) COORDINACIÓN DE PERICIAS: las pericias médicas, psicológicas y sociales deben coordinarse para que la víctima NO tenga que repetir su relato traumático a múltiples profesionales diferentes; idealmente se realiza una ÚNICA evaluación integral multidisciplinaria. (B) EVITAR CAREOS (Art. 310 CPP): el careo entre víctima e imputado está PROHIBIDO si la víctima es menor de edad (Ley 21.057) y es altamente desaconsejado en víctimas adultas por su potencial traumatizante. (C) SALAS SEPARADAS en tribunales (Art. 310 CPP): la víctima NUNCA debe esperar en la misma sala que el imputado o su familia. (D) RESERVA DE LA IDENTIDAD (Art. 307 CPP): proteger la intimidad de la víctima impidiendo la difusión de su nombre, imagen o datos personales en medios de comunicación. (E) INFORMACIÓN OPORTUNA (Art. 78 CPP): explicar cada etapa del proceso a la víctima. Publicar extractos del testimonio sería una grave victimización secundaria.'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 4 - Prevención Victimización Secundaria',
  enunciado:'El Manual Victimológico (2009) señala que mantener a la víctima informada sobre el estado de su causa y explicarle cada etapa del proceso penal es una medida de prevención de victimización secundaria.',
  respuesta:'V',
  explicacion:'VERDADERO. El Manual Victimológico (Cap. IV, punto 3, págs. 37-42) dedica una sección completa a la INFORMACIÓN COMO HERRAMIENTA DE PROTECCIÓN: "La desinformación genera ansiedad, impotencia y desconfianza en el sistema, constituyendo una forma de victimización secundaria". El Art. 78 letra c) CPP consagra este derecho. La información debe ser: (1) OPORTUNA —no semanas o meses después, sino idealmente en tiempo real (el MP debe notificar hitos procesales relevantes); (2) CLARA —en lenguaje comprensible, sin tecnicismos jurídicos; (3) COMPLETA —qué pasó, qué va a pasar, qué opciones tiene la víctima. Ejemplos: informar que se dictó prisión preventiva (tranquilidad), que el imputado salió en libertad (alerta para activar protección), que se fijó fecha de juicio (preparación emocional), que se dictó sentencia condenatoria (cierre del proceso). La URAVIT designa un profesional de seguimiento que mantiene contacto periódico con la víctima para informarle el avance del proceso.'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 4 - Prevención Victimización Secundaria',
  enunciado:'Según los protocolos URAVIT, el "plan de protección" para una víctima de crimen organizado debe incluir necesariamente todos los siguientes componentes, EXCEPTO:',
  opciones:[
    'Evaluación de riesgo inicial con matriz de factores (relación con la organización, capacidad de daño, amenazas previas, vulnerabilidad de la víctima)',
    'Medidas de protección judiciales y autónomas graduadas según nivel de riesgo',
    'Cronograma de seguimiento con contactos periódicos según nivel de riesgo',
    'Garantía de impunidad total para la víctima por cualquier delito que haya cometido en el pasado, como incentivo para su colaboración'
  ],
  respuesta:3,
  explicacion:'La GARANTÍA DE IMPUNIDAD TOTAL NO es un componente del plan de protección URAVIT. El plan de protección (protocolos URAVIT, 2018) incluye: (1) EVALUACIÓN DE RIESGO: matriz con factores como relación con la organización criminal, capacidad de daño de la misma, amenazas previas documentadas, vulnerabilidad de la víctima (edad, género, discapacidad, situación migratoria, red de apoyo); (2) MEDIDAS DE PROTECCIÓN: autónomas (derivación psicosocial, seguimiento) y judiciales (Arts. 109, 109 bis, 307, 308, 310, 312 CPP); (3) PLAN DE ATENCIÓN PSICOSOCIAL: derivación a psicólogo, trabajador social, asesoría jurídica; (4) CRONOGRAMA DE SEGUIMIENTO: contactos semanales (riesgo alto), quincenales (medio), mensuales (bajo); (5) PLAN DE CONTINGENCIA: qué hacer si aumentan las amenazas, si el imputado sale en libertad, si la víctima debe cambiarse de domicilio. La "impunidad total" NO existe en el sistema chileno: la colaboración eficaz puede dar lugar a atenuantes (Art. 11 N° 9 CP) o acuerdos de colaboración (Ley 20.000, Art. 22), pero DEBE SER APROBADA POR EL TRIBUNAL, no es una "garantía" automática, y no aplica a delitos graves como homicidio o violación.'
},
{
  tipo:'VFD', nivel:'intermedio', area:'Unidad 4 - Prevención Victimización Secundaria',
  enunciado:'Según los protocolos URAVIT, los familiares de la víctima también pueden ser sujetos de medidas de protección si enfrentan riesgo de hostigamiento, amenazas o atentados como consecuencia de la colaboración de la víctima con la justicia.',
  respuesta:'V',
  explicacion:'VERDADERO. El Art. 109 CPP establece que las medidas de protección se extienden a "la víctima y su familia" cuando enfrentan hostigamiento, amenazas o atentados. Los protocolos URAVIT (2018) especifican que la evaluación de riesgo debe considerar al GRUPO FAMILIAR de la víctima: cónyuge, conviviente civil, hijos, padres, hermanos que convivan o dependan de la víctima, e incluso testigos que hayan declarado en el proceso. La organización criminal frecuentemente amenaza a familiares como forma de presión indirecta ("si declaras, le hacemos daño a tus hijos"). Las medidas de protección pueden incluir: (1) extensión de rondas policiales al domicilio familiar; (2) botón de pánico para el cónyuge o hijos mayores; (3) cambio de colegio de los hijos; (4) prohibición de acercamiento del imputado a familiares (Art. 155 CPP); (5) reserva de identidad del grupo familiar (Art. 307 CPP). En casos de crimen organizado con amenazas a toda la familia, puede incluso evaluarse la reubicación familiar completa (Art. 312 CPP).'
},

// --- Evaluación de riesgo (+5) ---
{
  tipo:'MC', nivel:'medio', area:'Unidad 4 - Evaluación de Riesgo',
  enunciado:'¿Cuál de los siguientes instrumentos es utilizado en Chile para evaluar el riesgo de reincidencia en casos de violencia intrafamiliar?',
  opciones:[
    'Escala de Valoración de Riesgo (EVR) aplicada por Carabineros de Chile en la denuncia',
    'Inventario Multifásico de Personalidad de Minnesota (MMPI-2)',
    'Escala de Inteligencia de Wechsler para Adultos (WAIS-IV)',
    'Test de Apercepción Temática (TAT)'
  ],
  respuesta:0,
  explicacion:'La Escala de Valoración de Riesgo (EVR) es un instrumento estandarizado utilizado por Carabineros de Chile desde 2014 para evaluar el nivel de riesgo de reincidencia en casos de violencia intrafamiliar (VIF) al momento de la denuncia. Características: (A) es aplicada por el personal policial en el sitio del suceso o en la unidad policial; (B) contiene preguntas sobre antecedentes de violencia previa, amenazas de muerte, uso de armas, consumo de alcohol/drogas del agresor, frecuencia e intensidad de la violencia, y factores de vulnerabilidad de la víctima; (C) clasifica el riesgo en bajo, medio y alto, determinando las medidas de protección inmediatas (prohibición de acercamiento, orden de alejamiento, custodia policial). La EVR NO es un test psicológico —es una herramienta de tamizaje policial. Para evaluación especializada de riesgo de feminicidio se utiliza el Danger Assessment (DA) de Campbell (2003), adaptado para Chile por el Ministerio Público. Los otros instrumentos (MMPI-2, WAIS-IV, TAT) son pruebas psicológicas para evaluación de personalidad e inteligencia, no para evaluación de riesgo de violencia.'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 4 - Evaluación de Riesgo',
  enunciado:'Según los estudios de Campbell et al. (2003) y el Protocolo de Evaluación de Riesgo del Ministerio Público, ¿cuál de los siguientes factores es el predictor MÁS FUERTE de feminicidio en casos de violencia de género?',
  opciones:[
    'Bajo nivel educativo del agresor',
    'El agresor ha amenazado de muerte a la víctima o ha intentado asfixiarla (estrangulamiento)',
    'La víctima inició una nueva relación de pareja',
    'El agresor perdió su empleo recientemente'
  ],
  respuesta:1,
  explicacion:'Los estudios de Campbell et al. (2003, "Risk Factors for Femicide in Abusive Relationships", American Journal of Public Health) identificaron factores de riesgo de feminicidio mediante un estudio multicéntrico de casos y controles. El predictor MÁS FUERTE fue: (1) AMENAZAS DE MUERTE previas: el agresor ha amenazado con matar a la víctima (OR 14.9, es decir, multiplica por 15 el riesgo); (2) INTENTO DE ESTRANGULAMIENTO o asfixia previa (OR 9.9); (3) ACCESO A ARMAS DE FUEGO del agresor (OR 7.6); (4) VIOLENCIA SEXUAL dentro de la relación (OR 7.4); (5) ESCALADA DE LA VIOLENCIA en frecuencia y severidad en los últimos meses. El Protocolo de Evaluación de Riesgo del Ministerio Público chileno utiliza estos factores adaptados a la realidad nacional. La URAVIT aplica el Danger Assessment (DA) de Campbell para evaluar riesgo de feminicidio. Otros factores como desempleo o nueva relación de la víctima son relevantes pero tienen menor peso predictivo que las amenazas de muerte y el estrangulamiento previo.'
},
{
  tipo:'VFD', nivel:'intermedio', area:'Unidad 4 - Evaluación de Riesgo',
  enunciado:'La evaluación de riesgo que realiza la URAVIT es un proceso objetivo basado exclusivamente en instrumentos cuantitativos estandarizados (escalas, puntajes), sin incorporar el juicio profesional del evaluador.',
  respuesta:'F',
  explicacion:'FALSO. La evaluación de riesgo de la URAVIT es un proceso que combina métodos CUANTITATIVOS (instrumentos estandarizados como EVR, SARA, Danger Assessment) y CUALITATIVOS (juicio clínico estructurado del profesional evaluador). El modelo de "juicio clínico estructurado" (Structured Professional Judgment - SPJ) es el estándar internacional recomendado por la OMS (2013) para evaluación de riesgo de violencia: combina factores de riesgo identificados por la investigación empírica con la valoración contextual del profesional. La evaluación URAVIT incluye: (1) aplicación de instrumentos estandarizados (EVR, DA, SARA, HCR-20 v3); (2) entrevista clínica con la víctima (evaluación cualitativa de factores dinámicos: miedo percibido, percepción de riesgo, cambios recientes en la situación); (3) revisión de antecedentes documentales (denuncias previas, condenas del agresor, informes periciales); (4) JUICIO PROFESIONAL ESTRUCTURADO que integra todos los factores en una evaluación de nivel de riesgo (bajo, medio, alto, extremo) y un plan de protección personalizado. La exclusiva confianza en puntajes numéricos sin juicio profesional es insuficiente.'
},
{
  tipo:'MC', nivel:'medio', area:'Unidad 4 - Evaluación de Riesgo',
  enunciado:'¿Cuál de los siguientes NO es un factor de riesgo dinámico (modificable) evaluado por la URAVIT para determinar el nivel de protección de una víctima?',
  opciones:[
    'Consumo problemático de alcohol o drogas del agresor en el momento de los hechos',
    'Existencia de amenazas recientes y su frecuencia',
    'Edad y género de la víctima (factores demográficos inmodificables)',
    'Acceso actual del agresor a armas de fuego'
  ],
  respuesta:2,
  explicacion:'La edad y el género son factores de riesgo ESTÁTICOS (no modificables), mientras que la evaluación URAVIT de factores DINÁMICOS (modificables mediante intervención) incluye: (A) consumo de alcohol/drogas del agresor (factor dinámico: puede modificarse con tratamiento o medidas de alejamiento); (B) existencia de amenazas recientes y su frecuencia (dinámico: puede aumentar o disminuir); (C) acceso a armas (dinámico: puede restringirse mediante decomiso o prohibición judicial); (D) situación laboral del agresor (dinámico: puede cambiar); (E) aislamiento social de la víctima (dinámico: puede modificarse conectándola con redes de apoyo); (F) percepción de riesgo de la propia víctima (dinámico). La distinción entre factores estáticos (edad, género, historial delictivo pasado, trauma infantil) y dinámicos (consumo de sustancias, amenazas actuales, acceso a armas, situación laboral) es fundamental para: (1) evaluar el riesgo ACTUAL (los factores dinámicos son más predictivos del riesgo inminente); (2) diseñar intervenciones que reduzcan el riesgo (los factores dinámicos son los que podemos modificar).'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 4 - Evaluación de Riesgo',
  enunciado:'La URAVIT reevalúa periódicamente el nivel de riesgo de la víctima según un cronograma: semanalmente para riesgo alto/extremo, quincenalmente para riesgo medio, y mensualmente para riesgo bajo.',
  respuesta:'V',
  explicacion:'VERDADERO. Los protocolos URAVIT (2018) establecen un cronograma de reevaluación del riesgo basado en el nivel asignado: (A) RIESGO EXTREMO: monitoreo CONTINUO (contacto diario o cada 48 horas, reevaluación formal semanal por equipo multidisciplinario); (B) RIESGO ALTO: reevaluación SEMANAL por el profesional de seguimiento, con reporte al fiscal del caso; (C) RIESGO MEDIO: reevaluación QUINCENAL; (D) RIESGO BAJO: reevaluación MENSUAL. La reevaluación periódica es necesaria porque las circunstancias cambian dinámicamente: el imputado puede salir en libertad, pueden surgir nuevas amenazas, la víctima puede cambiar de domicilio o trabajo, la red de apoyo puede fortalecerse o debilitarse. Cada reevaluación puede resultar en: mantener el nivel, subirlo (si hay nuevos factores de riesgo), o bajarlo (si las condiciones mejoraron). El fiscal debe ser informado de cualquier cambio significativo para ajustar las medidas judiciales de protección. La víctima participa activamente en el proceso de reevaluación.'
},

// --- Plan de intervención y seguimiento (+5) ---
{
  tipo:'MC', nivel:'medio', area:'Unidad 4 - Plan de Intervención',
  enunciado:'El plan de intervención de la URAVIT para una víctima de crimen organizado debe incluir intervención en múltiples dimensiones. ¿Cuál de las siguientes dimensiones NO forma parte del plan?',
  opciones:[
    'Dimensión de seguridad: medidas de protección policial, botón de pánico, restricción de acercamiento',
    'Dimensión psicosocial: atención psicológica, trabajo social, acompañamiento',
    'Dimensión económica: gestión de inserción laboral de la víctima en la Fiscalía o Carabineros como funcionaria pública',
    'Dimensión jurídica: información sobre derechos, acompañamiento a audiencias, asesoría legal'
  ],
  respuesta:2,
  explicacion:'El Plan de Intervención URAVIT (2018) NO incluye la inserción laboral de la víctima en la Fiscalía o Carabineros. Las dimensiones que SÍ incluye son: (1) SEGURIDAD: medidas de protección policial graduadas según nivel de riesgo (rondas, custodia, botón de pánico, reserva de identidad, cambio de domicilio); (2) PSICOSOCIAL: atención psicológica (individual y/o grupal, especializada en trauma), acompañamiento social (trabajador social evalúa necesidades de vivienda, alimentación, salud, educación de hijos), derivación a servicios de la red pública; (3) JURÍDICA: información clara y oportuna sobre derechos y el proceso (Art. 78 CPP), acompañamiento a audiencias (profesional URAVIT, no necesariamente abogado), coordinación con el fiscal del caso; (4) SEGUIMIENTO: contactos periódicos según nivel de riesgo, reevaluación de riesgo, ajuste del plan. La INSERCIÓN LABORAL no es competencia de la URAVIT, aunque puede derivar a la víctima a programas municipales de empleabilidad (OMIL, SENCE, FOSIS) si la víctima necesita autonomía económica para salir de una situación de riesgo (ej. dependencia económica del agresor en VIF).'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 4 - Plan de Intervención',
  enunciado:'El plan de intervención de la URAVIT debe ser diseñado con la participación activa de la víctima mediante consentimiento informado, respetando el principio de voluntariedad y promoviendo su autonomía.',
  respuesta:'V',
  explicacion:'VERDADERO. Los protocolos URAVIT (2018) consagran el PRINCIPIO DE VOLUNTARIEDAD Y PARTICIPACIÓN ACTIVA de la víctima en el diseño e implementación del plan de intervención. Esto implica: (1) CONSENTIMIENTO INFORMADO: la víctima debe comprender qué medidas se proponen, sus implicancias (costo emocional, impacto en su vida cotidiana), alternativas disponibles, y dar su consentimiento explícito; (2) PARTICIPACIÓN ACTIVA: la víctima no es una receptora pasiva de medidas —debe opinar sobre qué medidas prefiere y cuáles rechaza (ej. algunas víctimas rechazan el cambio de domicilio por arraigo familiar/laboral, otras prefieren custodia visible aunque llame la atención); (3) AUTONOMÍA: el plan debe fortalecer la capacidad de la víctima de tomar decisiones sobre su propia vida, no sustituirla por decisiones paternalistas del profesional. EXCEPCIÓN: en casos de RIESGO INMINENTE DE MUERTE, la URAVIT puede adoptar medidas urgentes de protección sin esperar el consentimiento (ej. custodia policial inmediata), pero DEBE informar a la víctima a la brevedad y obtener su consentimiento para la continuidad de las medidas. El Art. 109 CPP no exige consentimiento para solicitar medidas, pero los protocolos URAVIT lo incorporan como buena práctica.'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 4 - Plan de Intervención',
  enunciado:'Según los protocolos URAVIT, ¿cuál de los siguientes indicadores se considera una "señal de alerta" que obliga a revisar y probablemente intensificar el plan de protección de una víctima de crimen organizado?',
  opciones:[
    'La víctima consigue un nuevo empleo que le permite independencia económica',
    'El imputado o miembros de su organización contactan a la víctima o a sus familiares, directa o indirectamente, transmitiendo cualquier tipo de mensaje',
    'La víctima comienza a asistir regularmente a terapia psicológica',
    'La víctima solicita ser informada del avance del proceso penal'
  ],
  respuesta:1,
  explicacion:'CUALQUIER CONTACTO del imputado o miembros de su organización con la víctima o sus familiares es una SEÑAL DE ALERTA GRAVE que debe activar inmediatamente la revisión del plan de protección. Los protocolos URAVIT (2018) definen como indicadores de alerta: (A) CONTACTO DEL IMPUTADO/ORGANIZACIÓN con la víctima o familiares (directo: llamada, mensaje, visita; indirecto: a través de terceros, redes sociales, mensajes cifrados); (B) NUEVAS AMENAZAS EXPLÍCITAS O IMPLÍCITAS; (C) INCUMPLIMIENTO por el imputado de medidas cautelares (quebrantamiento de prohibición de acercamiento, remoción de tobillera electrónica, fuga); (D) CAMBIO EN LA SITUACIÓN PROCESAL del imputado (libertad por vencimiento de plazo, cambio de medida cautelar); (E) LA PROPIA VÍCTIMA REPORTA aumento de su temor o percepción de riesgo; (F) AMENAZAS A FAMILIARES de la víctima. Cuando se activa una señal de alerta, la URAVIT debe: (1) contactar inmediatamente a la víctima; (2) reevaluar el riesgo (posible escalada de nivel); (3) informar al fiscal para reforzar medidas judiciales; (4) intensificar medidas autónomas (aumentar frecuencia de rondas, evaluar custodia).'
},
{
  tipo:'VFD', nivel:'intermedio', area:'Unidad 4 - Plan de Intervención',
  enunciado:'El plan de intervención URAVIT considera que la víctima puede requerir apoyo en la gestión de trámites prácticos (traslados al tribunal, gestiones de documentos, solicitud de beneficios sociales) como parte de la atención integral.',
  respuesta:'V',
  explicacion:'VERDADERO. Los protocolos URAVIT (2018) establecen que la atención integral a la víctima no se limita a la protección policial y la atención psicológica, sino que incluye la GESTIÓN DE NECESIDADES PRÁCTICAS que, si no son atendidas, pueden generar estrés adicional y afectar la capacidad de la víctima de participar en el proceso penal. Estas gestiones incluyen: (1) TRASLADOS: coordinar el transporte de la víctima al tribunal, a pericias del SML, o a entrevistas (especialmente si la víctima no tiene recursos para movilizarse o vive en zona rural); (2) DOCUMENTACIÓN: ayudar a obtener cédula de identidad (si fue robada o retenida por el agresor), certificados de nacimiento de hijos, o documentos migratorios; (3) BENEFICIOS SOCIALES: derivar y apoyar la postulación a programas de alimentos, vivienda, subsidios, bonos, o programas de empleabilidad (OMIL, SENCE, FOSIS); (4) COORDINACIÓN INTERINSTITUCIONAL: contactar al municipio, consultorio, escuela de los hijos, para facilitar traslados o cambios necesarios. Esta atención integral reconoce que la victimización afecta múltiples dimensiones de la vida y que la protección efectiva requiere abordarlas todas.'
},

// --- Autocuidado del equipo (+5) ---
{
  tipo:'MC', nivel:'intermedio', area:'Unidad 4 - Autocuidado del Equipo',
  enunciado:'Según el Manual Victimológico (2009, Cap. VIII), el "trauma vicario" o "desgaste por empatía" en profesionales que trabajan con víctimas se diferencia del síndrome de burnout en que:',
  opciones:[
    'Son exactamente lo mismo: agotamiento profesional por exceso de trabajo',
    'El trauma vicario es específico de la exposición repetida a relatos traumáticos de víctimas y presenta síntomas similares al TEPT; el burnout es agotamiento general por estrés laboral crónico no específico de trauma',
    'El burnout solo afecta a médicos y enfermeras, mientras que el trauma vicario solo afecta a psicólogos',
    'El trauma vicario no tiene tratamiento; el burnout se resuelve con vacaciones'
  ],
  respuesta:1,
  explicacion:'El Manual Victimológico (2009, Cap. VIII, págs. 110-118) y la literatura especializada (Figley, 1995; Pearlman & Saakvitne, 1995) distinguen: (A) TRAUMA VICARIO / DESGASTE POR EMPATÍA: afecta específicamente a profesionales expuestos repetidamente a relatos traumáticos de víctimas (psicólogos URAVIT, fiscales, entrevistadores Ley 21.057, peritos, policías). Síntomas similares al TEPT: intrusiones (imágenes involuntarias de los relatos), evitación (resistencia a ciertos casos), hiperactivación (alerta constante, sobresaltos), alteraciones en esquemas cognitivos (visión del mundo como peligroso, pérdida de confianza en las personas). (B) BURNOUT (Maslach & Jackson, 1981): agotamiento emocional, despersonalización (cinismo, tratar a las personas como objetos) y reducción de la realización personal, causado por estrés laboral crónico NO específico de trauma (exceso de carga horaria, falta de reconocimiento, ambiente laboral tóxico, burocracia). Ambos pueden coexistir, pero son fenómenos distintos. El Manual recomienda medidas para ambos: supervisión clínica regular, rotación de casos, límites claros trabajo-vida personal, y espacios de contención entre pares.'
},
{
  tipo:'VFD', nivel:'intermedio', area:'Unidad 4 - Autocuidado del Equipo',
  enunciado:'Según el Manual Victimológico (2009), existe una relación directa entre el autocuidado de los equipos profesionales y la calidad de la atención brindada a las víctimas: un profesional desgastado emocionalmente tiene menor capacidad de empatía, escucha y contención.',
  respuesta:'V',
  explicacion:'VERDADERO. El Manual Victimológico (Cap. VIII, pág. 110) es explícito: "El autocuidado de los equipos que trabajan con víctimas de delito no es un lujo ni una opción personal, sino una NECESIDAD ÉTICA Y TÉCNICA que impacta directamente en la calidad de la atención". Un profesional con desgaste por empatía presenta: (1) DISMINUCIÓN DE LA CAPACIDAD DE ESCUCHA —interrumpe más, muestra impaciencia, pierde detalles importantes del relato; (2) REDUCCIÓN DE LA EMPATÍA —se vuelve cínico, distante, minimiza el sufrimiento de la víctima como mecanismo de autoprotección; (3) EVITACIÓN DE CASOS DIFÍCILES —rechaza o deriva casos que requieren mayor involucramiento emocional; (4) ERRORES PROFESIONALES —olvida gestiones, no activa protocolos de protección, no detecta señales de alerta. La consecuencia última es una potencial REVICTIMIZACIÓN INSTITUCIONAL: la víctima que acude a un profesional desgastado puede recibir una atención de baja calidad que la desanime a continuar con el proceso. Por ello, la URAVIT establece el autocuidado como POLÍTICA INSTITUCIONAL, no como responsabilidad individual exclusiva.'
},
{
  tipo:'MC', nivel:'facil', area:'Unidad 4 - Autocuidado del Equipo',
  enunciado:'Según el Manual Victimológico (2009), ¿cuál de las siguientes es una medida de autocuidado RECOMENDADA para profesionales que trabajan con víctimas de delitos?',
  opciones:[
    'Procesar todos los casos difíciles en soledad para desarrollar resiliencia personal',
    'Participar regularmente en espacios de supervisión clínica y contención entre pares, y mantener límites claros entre la vida laboral y personal',
    'Involucrarse emocionalmente al máximo en cada caso para brindar la mejor atención posible sin reservas',
    'Evitar hablar sobre los casos con cualquier persona para proteger la confidencialidad de las víctimas'
  ],
  respuesta:1,
  explicacion:'El Manual Victimológico (Cap. VIII, págs. 112-116) recomienda MEDIDAS DE AUTOCUIDADO INSTITUCIONAL E INDIVIDUAL: (A) SUPERVISIÓN CLÍNICA REGULAR: espacio semanal o quincenal con supervisor externo para procesar casos difíciles, recibir retroalimentación y prevenir el desgaste; (B) ESPACIOS DE CONTENCIÓN ENTRE PARES: reuniones de equipo donde los profesionales comparten experiencias, normalizan reacciones y reciben apoyo mutuo (no es lo mismo que "hablar con cualquiera" —es un espacio estructurado y confidencial); (C) LÍMITES CLAROS TRABAJO-VIDA PERSONAL: jornada laboral definida, desconexión digital, vacaciones regulares, cultivar hobbies y relaciones personales fuera del ámbito laboral; (D) ROTACIÓN DE CASOS DE ALTO IMPACTO: evitar que un mismo profesional acumule múltiples casos con alta carga traumática (ej. solo homicidios de NNA o violencia sexual); (E) CAPACITACIÓN en identificación de signos de alarma de desgaste. Procesar casos en soledad (A) aumenta el riesgo; involucrarse al máximo sin límites (C) conduce al desgaste rápido.'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 4 - Autocuidado del Equipo',
  enunciado:'Los signos de alarma del desgaste por empatía incluyen: insomnio persistente, irritabilidad inusual, cinismo hacia las víctimas, aislamiento de colegas, consumo problemático de alcohol, y sensación de ineficacia profesional.',
  respuesta:'V',
  explicacion:'VERDADERO. El Manual Victimológico (Cap. VIII, págs. 114-115) y la literatura especializada (Figley, 1995; Stamm, 2010) identifican señales de alarma de desgaste por empatía y trauma vicario: (1) FÍSICAS: insomnio persistente, fatiga crónica, cefaleas, tensión muscular, alteraciones del apetito; (2) EMOCIONALES: irritabilidad inusual, ansiedad, depresión, labilidad emocional (cambios bruscos de humor); (3) COGNITIVAS: pensamientos intrusivos sobre los casos, dificultad para concentrarse, visión del mundo como peligroso, pérdida de confianza en las personas; (4) CONDUCTUALES: cinismo o despersonalización hacia las víctimas ("otra víctima más de VIF"), aislamiento de colegas y familiares, evitación de casos similares a los más impactantes, ausentismo laboral; (5) CONSUMO DE SUSTANCIAS: aumento del consumo de alcohol, tabaco, psicofármacos sin prescripción, u otras drogas como mecanismo de afrontamiento; (6) SENSACIÓN DE INEFICACIA: percepción de que "nada de lo que hago sirve", desesperanza profesional. La URAVIT capacita a sus profesionales para identificar estos signos en sí mismos y en sus colegas, activando protocolos de apoyo.'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 4 - Autocuidado del Equipo',
  enunciado:'Según el Manual Victimológico (2009), ¿cuál es la responsabilidad de la institución (Ministerio Público, URAVIT) en relación al autocuidado de sus equipos profesionales?',
  opciones:[
    'El autocuidado es responsabilidad exclusiva de cada profesional; la institución solo debe proveer el salario',
    'La institución debe promover activamente el autocuidado mediante políticas institucionales: supervisión clínica regular, rotación de casos de alto impacto, clima laboral saludable, y acceso a apoyo psicológico para el personal',
    'La institución debe prohibir que los profesionales hablen entre ellos sobre casos difíciles para no generar "contagio emocional"',
    'La institución debe trasladar a los profesionales que muestren signos de desgaste a funciones administrativas sin atención a víctimas, como medida disciplinaria'
  ],
  respuesta:1,
  explicacion:'El Manual Victimológico (2009, Cap. VIII, pág. 115) es categórico: "El autocuidado de los equipos es una responsabilidad INSTITUCIONAL, no solo individual". Esto implica que el Ministerio Público (URAVIT) debe: (1) PROVEER SUPERVISIÓN CLÍNICA REGULAR como parte de la jornada laboral (no como actividad voluntaria fuera de horario); (2) IMPLEMENTAR SISTEMA DE ROTACIÓN de casos de alto impacto para distribuir equitativamente la carga traumática; (3) PROMOVER CLIMA LABORAL SALUDABLE con reconocimiento del trabajo, comunicación abierta, y cero tolerancia al acoso laboral; (4) GARANTIZAR ACCESO A APOYO PSICOLÓGICO para el personal (servicio de psicología laboral, convenio con instituciones de salud mental); (5) CAPACITAR regularmente a todo el personal en identificación de signos de desgaste y estrategias de autocuidado; (6) NO ESTIGMATIZAR a quienes pidan ayuda —"el autocuidado es una fortaleza profesional, no una debilidad". Trasladar a un profesional a funciones administrativas como medida disciplinaria por mostrar signos de desgaste sería revictimización institucional de los propios funcionarios.'
},

// ===========================================
// UNIDAD 5: COORDINACIÓN (+15)
// ===========================================

// --- Redes y protocolos intersectoriales (+5) ---
{
  tipo:'MC', nivel:'medio', area:'Unidad 5 - Redes Intersectoriales',
  enunciado:'Según la Red de Asistencia a Víctimas (RAV) creada por el Ministerio del Interior (2009), ¿cuáles de las siguientes instituciones forman parte de dicha red? 1) Ministerio Público. 2) Carabineros de Chile. 3) Servicio Nacional de la Mujer y Equidad de Género (Sernameg). 4) Centro de Asistencia a Víctimas de Atentados Sexuales (CAVAS).',
  opciones:[
    'Solo 1 y 2',
    'Solo 1, 2 y 3',
    'Solo 1, 2 y 4',
    'Todas las anteriores (1, 2, 3 y 4)'
  ],
  respuesta:3,
  explicacion:'La Red de Asistencia a Víctimas (RAV) fue creada por el Ministerio del Interior (2009) como una instancia de coordinación intersectorial para la atención integral de víctimas de delitos. El Manual Victimológico (2009, Presentación, pág. 11) enumera las instituciones integrantes: Ministerio del Interior (coordinación), Ministerio de Justicia y DDHH, Ministerio Público (URAVIT), Ministerio de Salud (COSAM, hospitales), Carabineros de Chile, Policía de Investigaciones de Chile, Servicio Nacional de la Mujer y Equidad de Género - Sernameg (casas de acogida, centros de atención VIF), Corporaciones de Asistencia Judicial (asesoría jurídica gratuita), Servicio Nacional de Menores - SENAME (ahora Mejor Niñez), Centros de Asistencia a Víctimas de Atentados Sexuales - CAVAS (atención psicológica especializada en trauma sexual), y otros servicios públicos. La RAV opera mediante protocolos de derivación: cada institución conoce los servicios que prestan las demás y puede derivar oportunamente a la víctima según sus necesidades.'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 5 - Redes Intersectoriales',
  enunciado:'El Protocolo Intersectorial de Atención a Víctimas de Trata de Personas establece que ninguna institución por sí sola puede brindar protección integral a la víctima, requiriéndose necesariamente la coordinación de múltiples organismos del Estado.',
  respuesta:'V',
  explicacion:'VERDADERO. El Protocolo Intersectorial de Atención a Víctimas de Trata de Personas (Ministerio del Interior, 2015) establece el principio de CORRESPONSABILIDAD INTERSECTORIAL: la trata de personas es un delito complejo que requiere intervención en múltiples dimensiones que NINGUNA institución puede proveer por sí sola: (1) Ministerio Público/URAVIT: dirección de la investigación, evaluación de riesgo, medidas de protección; (2) Carabineros/PDI: protección policial, investigación; (3) Ministerio de Salud: atención médica y psicológica de urgencia; (4) Sernameg: acogida en casas de protección para mujeres víctimas de explotación sexual; (5) SENAME/Mejor Niñez: protección de NNA víctimas; (6) Extranjería: regularización migratoria de víctimas extranjeras; (7) SENCE/FOSIS: inserción laboral como parte de la reparación; (8) Corporaciones de Asistencia Judicial: asesoría jurídica gratuita. El Protocolo establece roles y funciones de cada institución (Cap. IX) y el proceso de funcionamiento (Cap. X) para garantizar que la víctima reciba atención coordinada y no fragmentada.'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 5 - Redes Intersectoriales',
  enunciado:'Según el Manual Victimológico (2009) y los protocolos URAVIT, ¿cuál es el principal obstáculo para la coordinación intersectorial efectiva en la protección de víctimas?',
  opciones:[
    'Exceso de recursos financieros que genera duplicidad de servicios',
    'Falta de protocolos formales de derivación y comunicación, desconocimiento mutuo de los servicios que presta cada institución, y ausencia de un sistema unificado de registro de víctimas',
    'Excesiva voluntad de cooperación entre instituciones que ralentiza la toma de decisiones',
    'Las víctimas prefieren ser atendidas por una sola institución y rechazan la intervención coordinada'
  ],
  respuesta:1,
  explicacion:'El Manual Victimológico (2009, Cap. V, págs. 55-60) y los diagnósticos de la RAV identifican como principales obstáculos para la coordinación intersectorial: (1) FALTA DE PROTOCOLOS FORMALES DE DERIVACIÓN Y COMUNICACIÓN —cada institución tiene sus propios procedimientos internos que no siempre "conversan" con los de otras instituciones; (2) DESCONOCIMIENTO MUTUO —los funcionarios de una institución desconocen qué servicios específicos prestan las otras, llevando a derivaciones inadecuadas o ausencia de derivación; (3) AUSENCIA DE UN SISTEMA UNIFICADO DE REGISTRO —cada institución mantiene su propia base de datos, sin interoperabilidad, lo que impide conocer si una misma víctima está siendo atendida en múltiples instituciones de manera descoordinada; (4) ROTACIÓN DE PERSONAL —los profesionales cambian frecuentemente y se pierde la memoria institucional de los protocolos; (5) CELOS INSTITUCIONALES —resistencia a compartir información "propia" con otras instituciones. La Ley 21.675 (2024) busca superar estas barreras mediante un Sistema Nacional Integral de Protección que establece estándares comunes y protocolos vinculantes.'
},
{
  tipo:'VFD', nivel:'intermedio', area:'Unidad 5 - Redes Intersectoriales',
  enunciado:'Las Corporaciones de Asistencia Judicial (CAJ) forman parte de la Red de Asistencia a Víctimas (RAV) y brindan asesoría jurídica gratuita a víctimas que no pueden costear un abogado particular.',
  respuesta:'V',
  explicacion:'VERDADERO. El Manual Victimológico (2009, Presentación, pág. 11) y el Protocolo Intersectorial (2015) incluyen a las Corporaciones de Asistencia Judicial (CAJ) como integrantes de la RAV. Las CAJ son servicios públicos descentralizados, dependientes del Ministerio de Justicia y DDHH, presentes en todas las regiones del país. Sus funciones en la RAV: (1) ASESORÍA JURÍDICA GRATUITA a víctimas que no pueden costear abogado particular (acreditando carencia de recursos); (2) PATROCINIO JUDICIAL en causas penales (querella, acusación particular), causas de familia (VIF, tuición, alimentos) y causas civiles (indemnización de perjuicios); (3) ORIENTACIÓN JURÍDICA: información sobre derechos de la víctima, etapas del proceso, y opciones legales disponibles; (4) DERIVACIÓN INFORMADA a otros servicios de la RAV (URAVIT, CAVAS, Sernameg). Las CAJ trabajan coordinadamente con la URAVIT: esta evalúa riesgo y necesidades psicosociales; la CAJ provee representación jurídica. La Ley 21.675 (2024) refuerza la obligación de proveer asesoría jurídica gratuita a mujeres víctimas de violencia de género.'
},
{
  tipo:'MC', nivel:'medio', area:'Unidad 5 - Redes Intersectoriales',
  enunciado:'Según los protocolos, cuando un profesional de la RAV detecta que una víctima necesita servicios que su institución no puede proveer directamente, debe:',
  opciones:[
    'Informar a la víctima que busque ayuda por su cuenta en otras instituciones',
    'Derivar oportunamente mediante los canales formales establecidos en los protocolos intersectoriales, manteniendo contacto de seguimiento para verificar que la derivación fue efectiva',
    'Intentar proveer él mismo el servicio, aunque no tenga la capacitación necesaria, para no "abandonar" a la víctima',
    'Archivar el caso hasta que la víctima regrese con la necesidad ya resuelta'
  ],
  respuesta:1,
  explicacion:'Los protocolos de la RAV (Manual Victimológico, Cap. V, págs. 55-58) y los protocolos URAVIT establecen el procedimiento de DERIVACIÓN RESPONSABLE: (A) DETECTAR NECESIDADES que exceden las competencias de la institución (ej. un fiscal detecta que la víctima necesita atención psicológica → deriva a COSAM o CAVAS); (B) UTILIZAR CANALES FORMALES de derivación: contacto telefónico directo con la institución receptora, envío de ficha de derivación con datos relevantes de la víctima (con su consentimiento), coordinación de fecha y hora de atención; (C) NO "ABANDONAR" a la víctima tras derivar —el profesional que deriva debe hacer SEGUIMIENTO para verificar que la derivación fue efectiva y que la víctima recibió la atención; (D) SI LA DERIVACIÓN FALLA (ej. la institución receptora no tiene cupos), buscar alternativas en la red. La derivación NO es "una hoja que se entrega a la víctima con una dirección" —es un PROCESO ACTIVO de coordinación entre instituciones. El profesional NUNCA debe intentar proveer servicios para los que no está capacitado (ej. un policía no debe hacer contención psicológica especializada).'
},

// --- Cooperación internacional (+5) ---
{
  tipo:'MC', nivel:'dificil', area:'Unidad 5 - Cooperación Internacional',
  enunciado:'¿Cuál es el principal instrumento de cooperación jurídica internacional que permite a Chile solicitar asistencia a otros países para la protección de testigos en casos de crimen organizado transnacional?',
  opciones:[
    'Carta rogatoria (Art. 76 CPP), que solo aplica para notificaciones judiciales',
    'Convención de las Naciones Unidas contra la Delincuencia Organizada Transnacional (Convención de Palermo, 2000) y tratados bilaterales de asistencia jurídica mutua',
    'Orden de Interpol, que es vinculante para todos los países miembros',
    'Solicitud directa del Fiscal Nacional al Ministerio de Relaciones Exteriores sin necesidad de tratado'
  ],
  respuesta:1,
  explicacion:'La Convención de Palermo (2000), ratificada por Chile (D.S. N°342/2004 del Ministerio de RR.EE.), en su Art. 24 establece la obligación de los Estados parte de "adoptar medidas apropiadas para proteger de manera eficaz contra posibles actos de represalia o intimidación a los testigos que depongan en procesos penales", incluyendo su reubicación en otro país cuando sea necesario. El Art. 18 establece la asistencia judicial recíproca. Chile también ha suscrito TRATADOS BILATERALES de asistencia jurídica mutua con Argentina, Perú, Bolivia, Colombia, México, España, Estados Unidos, Australia, Corea del Sur, entre otros. La Unidad de Cooperación Internacional y Extradiciones (UCIEX) de la Fiscalía Nacional canaliza estas solicitudes. Las cartas rogatorias (Art. 76 CPP) son para NOTIFICACIONES, no para protección de testigos. Las órdenes de Interpol (difusión roja, azul) son herramientas de localización, no de protección. La reubicación internacional de testigos es una medida extrema y excepcional, reservada para casos donde la organización criminal tiene capacidad de ubicar al testigo en cualquier parte del territorio nacional.'
},
{
  tipo:'VFD', nivel:'medio', area:'Unidad 5 - Cooperación Internacional',
  enunciado:'Chile es parte de la Convención de las Naciones Unidas contra la Delincuencia Organizada Transnacional (Convención de Palermo) desde 2004, comprometiéndose a adoptar medidas de protección de testigos, asistencia judicial recíproca y cooperación internacional en la persecución del crimen organizado.',
  respuesta:'V',
  explicacion:'VERDADERO. Chile ratificó la Convención de Palermo y sus tres Protocolos (contra la Trata de Personas, contra el Tráfico Ilícito de Migrantes, y contra la Fabricación y Tráfico Ilícito de Armas de Fuego) mediante el D.S. N°342 del Ministerio de Relaciones Exteriores, publicado en el Diario Oficial el 16 de febrero de 2005, con vigencia internacional desde el 29 de diciembre de 2004. Al ratificar, Chile se comprometió a: (1) TIPIFICAR como delitos autónomos la participación en grupo delictivo organizado, el lavado de activos, la corrupción (soborno) y la obstrucción de la justicia (Arts. 5, 6, 8 y 23); (2) ADOPTAR medidas de protección de testigos (Art. 24); (3) PRESTAR asistencia judicial recíproca (Art. 18); (4) COOPERAR en investigaciones conjuntas (Art. 19); (5) EXTRADITAR a miembros de organizaciones criminales (Art. 16). Chile cumple estas obligaciones mediante: Ley 20.000 (drogas), Ley 20.507 (trata de personas), Ley 19.913 (lavado de activos), Ley 20.393 (responsabilidad penal personas jurídicas), y las medidas de protección del CPP (Arts. 109, 307-312).'
},
{
  tipo:'MC', nivel:'intermedio', area:'Unidad 5 - Cooperación Internacional',
  enunciado:'INTERPOL (Organización Internacional de Policía Criminal) es un organismo de cooperación policial internacional del cual Chile es miembro. ¿Cuál de las siguientes es una función principal de INTERPOL relevante para la protección de víctimas y testigos?',
  opciones:[
    'Emitir órdenes de detención internacional vinculantes para todos los países miembros',
    'Emitir notificaciones (difusiones) de diferentes colores, incluyendo la difusión azul para localizar testigos, y la difusión naranja para alertar sobre amenazas inminentes a personas',
    'Reemplazar a las policías nacionales en investigaciones de crimen organizado transnacional',
    'Juzgar directamente a miembros de organizaciones criminales mediante tribunales internacionales'
  ],
  respuesta:1,
  explicacion:'INTERPOL (OIPC, 1923, sede en Lyon, Francia, 195 países miembros) es la mayor organización de cooperación policial internacional. NO emite órdenes de detención vinculantes (eso es competencia de autoridades judiciales nacionales), sino NOTIFICACIONES (difusiones) codificadas por colores: (A) ROJA: solicitud de localización y detención provisional con fines de extradición (no vinculante, depende de cada país); (B) AZUL: localización de personas (testigos, víctimas, desaparecidos) para obtener información sobre su paradero; (C) NARANJA: alerta sobre amenazas inminentes a personas o bienes (ej. amenaza de atentado contra un testigo protegido); (D) AMARILLA: localización de personas desaparecidas (ej. víctimas de secuestro); (E) NEGRA: identificación de cadáveres no identificados. La UCIEX de la Fiscalía Nacional coordina con INTERPOL a través de la Oficina Central Nacional (OCN) de la PDI. La difusión naranja es particularmente útil para alertar sobre amenazas inminentes contra testigos protegidos que han sido reubicados internacionalmente.'
},
{
  tipo:'VFD', nivel:'dificil', area:'Unidad 5 - Cooperación Internacional',
  enunciado:'La reubicación internacional de un testigo protegido es una decisión que puede adoptar unilateralmente la URAVIT sin necesidad de autorización judicial ni de tratados internacionales, cuando el riesgo para el testigo es extremo.',
  respuesta:'F',
  explicacion:'FALSO. La reubicación internacional de testigos es una medida EXCEPCIONALÍSIMA que NO puede ser adoptada unilateralmente por la URAVIT. Requiere: (1) AUTORIZACIÓN JUDICIAL del tribunal de garantía (Art. 312 CPP, análogamente para reubicación internacional); (2) ACUERDO BILATERAL O MULTILATERAL previo que permita la reubicación (Convención de Palermo, Art. 24; tratados bilaterales de asistencia jurídica mutua); (3) SOLICITUD FORMAL de la Fiscalía Nacional, canalizada por la UCIEX al Ministerio de Relaciones Exteriores y de este a su homólogo del país receptor; (4) CONSENTIMIENTO INFORMADO del testigo (no puede ser obligado a abandonar su país contra su voluntad); (5) ACEPTACIÓN del país receptor (ningún país está obligado a recibir testigos extranjeros sin su consentimiento soberano); (6) RECURSOS ECONÓMICOS para la reubicación (viaje, instalación, manutención inicial). La reubicación internacional es extremadamente rara: la mayoría de los testigos protegidos permanecen en Chile con medidas como reserva total de identidad, custodia permanente, y cambio de domicilio dentro del país (Art. 312 CPP).'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 5 - Cooperación Internacional',
  enunciado:'El Grupo Egmont es una red internacional de Unidades de Inteligencia Financiera (UIF) que facilita el intercambio de información para combatir el lavado de activos y el financiamiento del terrorismo. ¿Cómo se relaciona con la UAF chilena?',
  opciones:[
    'La UAF chilena no es miembro del Grupo Egmont; Chile no participa en redes internacionales de inteligencia financiera',
    'La UAF chilena es miembro pleno del Grupo Egmont, lo que le permite intercambiar información financiera con más de 170 UIF de otros países mediante un memorando de entendimiento multilateral, facilitando la investigación de lavado de activos transnacional',
    'El Grupo Egmont reemplaza a la UAF chilena en investigaciones de lavado de activos con dimensión internacional',
    'La UAF chilena es miembro observador, sin capacidad de intercambiar información con otras UIF'
  ],
  respuesta:1,
  explicacion:'La Unidad de Análisis Financiero (UAF) de Chile es MIEMBRO PLENO del Grupo Egmont desde 2004. El Grupo Egmont (1995, 170+ UIF miembros) es una red internacional que facilita el intercambio seguro de información financiera entre Unidades de Inteligencia Financiera para combatir el lavado de activos y el financiamiento del terrorismo. Beneficios para Chile: (1) la UAF puede solicitar y compartir información financiera con UIF de otros países mediante el Egmont Secure Web (ESW), una plataforma cifrada de comunicación; (2) intercambio de Reportes de Operaciones Sospechosas (ROS) de manera ágil y segura; (3) acceso a tipologías y tendencias internacionales de lavado de activos; (4) cooperación en investigaciones financieras paralelas (ej. una organización criminal que lava activos en Chile y en Perú simultáneamente). La UAF puede intercambiar información INDEPENDIENTEMENTE de la existencia de tratados bilaterales con el país requirente, en virtud del Memorando de Entendimiento Multilateral del Grupo Egmont. La información intercambiada puede ser utilizada como antecedente para solicitar medidas cautelares (congelamiento de cuentas, incautación de bienes) al Ministerio Público.'
},

// --- Fiscalía Supraterritorial y SAC (+5) ---
{
  tipo:'MC', nivel:'medio', area:'Unidad 5 - Fiscalía Supraterritorial',
  enunciado:'Según la Ley Orgánica Constitucional del Ministerio Público (Ley 19.640), la Fiscalía Supraterritorial tiene competencia para investigar:',
  opciones:[
    'Todos los delitos cometidos en el territorio de la República, sin distinción',
    'Delitos de alta complejidad y crimen organizado que trascienden los límites de una Fiscalía Regional, afectando a más de una región o teniendo carácter nacional o internacional',
    'Exclusivamente delitos de narcotráfico y lavado de activos',
    'Solo delitos cometidos por funcionarios públicos de alto rango en ejercicio de sus funciones'
  ],
  respuesta:1,
  explicacion:'La Ley 19.640 (LOC MP, Art. 14 y 16) y el Reglamento de la Fiscalía Supraterritorial establecen su competencia para investigar delitos de ALTA COMPLEJIDAD y CRIMEN ORGANIZADO que trascienden los límites de una Fiscalía Regional. Criterios: (A) delitos que afectan a MÁS DE UNA REGIÓN (ej. organización criminal que opera en RM, Valparaíso y Biobío); (B) delitos de CARÁCTER NACIONAL (ej. esquema de lavado de activos con múltiples sucursales bancarias a lo largo del país); (C) delitos con CONEXIÓN INTERNACIONAL (ej. red de trata de personas que capta en Chile y explota en el extranjero); (D) delitos que por su COMPLEJIDAD requieren equipos especializados (análisis criminal, contabilidad forense, informática forense). La FST NO investiga todos los delitos, ni exclusivamente narcotráfico, ni solo delitos de altos funcionarios. Las Fiscalías Regionales investigan delitos que se circunscriben a su territorio. Cuando un delito de alta complejidad se detecta en una región, el Fiscal Regional puede solicitar al Fiscal Nacional que asigne el caso a la FST.'
},
{
  tipo:'VFD', nivel:'facil', area:'Unidad 5 - Fiscalía Supraterritorial',
  enunciado:'El Sistema de Análisis Criminal (SAC) de la Fiscalía Supraterritorial integra y cruza datos de múltiples investigaciones penales para identificar patrones, vínculos y estructuras criminales a nivel nacional.',
  respuesta:'V',
  explicacion:'VERDADERO. El Sistema de Análisis Criminal (SAC) es una plataforma tecnológica y unidad especializada de la Fiscalía Supraterritorial. Sus funciones: (1) INTEGRACIÓN DE DATOS de múltiples investigaciones penales de distintas fiscalías regionales; (2) CRUCE DE DATOS para identificar vínculos entre investigaciones aparentemente independientes (mismos imputados, modus operandi, zonas geográficas, víctimas); (3) IDENTIFICACIÓN DE PATRONES criminales (rutas de narcotráfico, circuitos de lavado, redes de trata); (4) MAPEO DE ESTRUCTURAS CRIMINALES (organigramas, roles, jerarquías, vínculos familiares y comerciales); (5) ANÁLISIS DE RIESGO PARA VÍCTIMAS Y TESTIGOS a nivel nacional (capacidad de daño de la organización, alcance territorial, capacidad de represalia); (6) INTELIGENCIA PROACTIVA basada en datos históricos. El SAC es clave porque permite ver el "bosque" (la organización criminal completa) y no solo los "árboles" (delitos individuales investigados fragmentariamente en distintas fiscalías regionales). La información del SAC alimenta las evaluaciones de riesgo de URAVIT para determinar nivel de protección.'
},
{
  tipo:'MC', nivel:'dificil', area:'Unidad 5 - Fiscalía Supraterritorial',
  enunciado:'¿Cuál de las siguientes afirmaciones sobre la relación entre la Fiscalía Supraterritorial (FST) y las Fiscalías Regionales es FALSA?',
  opciones:[
    'La FST investiga delitos de alta complejidad que trascienden los límites de una Fiscalía Regional; las Fiscalías Regionales investigan delitos que se circunscriben a su territorio',
    'La FST puede asumir la investigación de delitos que originalmente corresponderían a una Fiscalía Regional si el Fiscal Regional lo solicita o el Fiscal Nacional lo decide fundadamente',
    'La FST REEMPLAZA a las Fiscalías Regionales en todas las causas de crimen organizado, dejándolas sin competencia en esta materia',
    'La FST cuenta con equipos multidisciplinarios especializados (analistas criminales, contadores forenses, expertos informáticos) que las Fiscalías Regionales pueden no tener'
  ],
  respuesta:2,
  explicacion:'Es FALSO que la FST REEMPLACE a las Fiscalías Regionales. La FST NO sustituye a las Fiscalías Regionales, sino que las COMPLEMENTA. Las Fiscalías Regionales mantienen plena competencia para investigar delitos de crimen organizado que se circunscriben a su territorio. La FST interviene cuando: (1) el delito trasciende los límites de una región (competencia originaria); (2) el Fiscal Regional solicita al Fiscal Nacional la intervención de la FST por la complejidad del caso (competencia derivada); (3) el Fiscal Nacional, de oficio o a propuesta de la FST, decide asignar un caso a la FST por su trascendencia nacional. La relación es de COLABORACIÓN Y COORDINACIÓN, no de subordinación. Las Fiscalías Regionales mantienen sus propias Fiscalías de Análisis Criminal y Crimen Organizado (FACCO) para delitos de alta complejidad regional. La FST aporta: equipos multidisciplinarios especializados, el SAC (Sistema de Análisis Criminal) nacional, la UCIEX para cooperación internacional, y capacidad de coordinar medidas de protección URAVIT a nivel nacional.'
},
{
  tipo:'VFD', nivel:'intermedio', area:'Unidad 5 - Fiscalía Supraterritorial',
  enunciado:'La Fiscalía Supraterritorial coordina la red nacional de URAVIT para proteger a víctimas y testigos que colaboran en investigaciones de crimen organizado a nivel nacional, asegurando coherencia en la aplicación de medidas de protección en todo el país.',
  respuesta:'V',
  explicacion:'VERDADERO. La Fiscalía Supraterritorial (FST) desempeña un rol de COORDINACIÓN NACIONAL de las URAVIT (Unidades Regionales de Atención a Víctimas y Testigos) cuando se trata de víctimas y testigos de crimen organizado con alcance multirregional. Esto incluye: (1) homologar criterios de evaluación de riesgo a nivel nacional para víctimas de las mismas organizaciones criminales; (2) evitar contradicciones: que un mismo testigo reciba nivel de protección "alto" en la Región Metropolitana pero solo "bajo" en la Región del Biobío por criterios dispares; (3) coordinar medidas de protección cuando la víctima o testigo debe trasladarse entre regiones (ej. cambio de domicilio de Arica a Punta Arenas); (4) asegurar continuidad de la protección cuando el fiscal del caso cambia de región o la investigación se extiende a otras jurisdicciones; (5) administrar el Fondo Nacional de Protección de Víctimas y Testigos (Art. 312 CPP) centralizadamente. Esta coordinación nacional es una ventaja estratégica de la FST: las organizaciones criminales operan a nivel nacional, y la protección debe operar al mismo nivel para ser efectiva.'
},
{
  tipo:'MC', nivel:'medio', area:'Unidad 5 - Fiscalía Supraterritorial',
  enunciado:'La Unidad de Cooperación Internacional y Extradiciones (UCIEX) de la Fiscalía Nacional canaliza las solicitudes de asistencia jurídica internacional. ¿Cuál de las siguientes es una función específica de UCIEX relevante para la protección de víctimas y testigos?',
  opciones:[
    'Tramitar directamente la extradición de testigos protegidos al país requirente',
    'Canalizar solicitudes de asistencia jurídica mutua para obtener pruebas en el extranjero, coordinar la reubicación internacional de testigos protegidos, y gestionar equipos conjuntos de investigación con países extranjeros',
    'Representar legalmente a las víctimas chilenas ante tribunales internacionales',
    'Solicitar a Interpol la detención inmediata de cualquier persona en el extranjero sin intervención de autoridades locales'
  ],
  respuesta:1,
  explicacion:'La UCIEX (creada por el Fiscal Nacional, en virtud del Art. 34 Ley 19.640 LOC MP) es la unidad de la Fiscalía Nacional especializada en cooperación jurídica internacional. Funciones: (1) canalizar CARTAS ROGATORIAS o solicitudes de asistencia jurídica mutua (entrantes y salientes) para obtener pruebas en el extranjero (declaraciones de testigos, documentos, pericias); (2) coordinar la EXTRADICIÓN de imputados (activa: desde Chile al extranjero; pasiva: desde el extranjero a Chile); (3) coordinar la REUBICACIÓN INTERNACIONAL DE TESTIGOS PROTEGIDOS (en conjunto con URAVIT, Ministerio de RR.EE. y autoridades del país receptor); (4) gestionar EQUIPOS CONJUNTOS DE INVESTIGACIÓN (Art. 19 Convención de Palermo): fiscales y policías de dos o más países investigando simultáneamente una organización criminal transnacional; (5) representar al Ministerio Público chileno ante la Red Iberoamericana de Cooperación Jurídica Internacional (IberRed) y otras redes. UCIEX NO tramita extradición de testigos (solo de imputados/condenados), NO representa víctimas ante tribunales internacionales, y no ordena detenciones directas (siempre a través de autoridades locales).'
}
    ]
  }


};
