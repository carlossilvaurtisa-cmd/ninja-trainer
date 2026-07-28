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
      { id: 'informe', titulo: 'Informe Anual 2024', contenido: 'El informe anual correspondiente al ejercicio 2024 muestra los siguientes resultados: Los ingresos operacionales alcanzaron los 18.300 millones de pesos, un 7,2% más que en 2023. Los costos operacionales sumaron 12.600 millones, lo que representa un aumento del 9,8% respecto al período anterior. La utilidad neta fue de 2.100 millones, cifra inferior a los 2.450 millones obtenidos en 2023. La empresa cuenta con 740 colaboradores distribuidos en 6 sucursales. La tasa de rotación de personal fue del 8,5%, por debajo del promedio de la industria (12%). Se invirtieron 890 millones en capacitación y desarrollo durante 2024, alcanzando a 520 trabajadores. Para 2025, el presupuesto de capacitación aprobado asciende a 950 millones.' }
    ],
    datosEstructurados: { reunionFecha:'15 de marzo de 2025', accionistasPresentes:42, accionistasTotales:50, votosFavor:38, votosContra:4, inversionInicial:2400, inicioEjecucion:'julio 2025', fechaOperativo:'diciembre 2026', reservasLiquidas:5800, bajaMargenes:3.2, grupoAlphaPorcentaje:18, grupoBetaPorcentaje:42, grupoGammaPorcentaje:22, otrosPorcentaje:18, ingresos2024:18300, utilidadNeta2024:2100, utilidadNeta2023:2450, colaboradores:740, sucursales:6, rotacion:8.5, rotacionIndustria:12, inversionCapacitacion2024:890, trabajadoresCapacitados:520, presupuestoCapacitacion2025:950, empleosDirectos:180, empleosIndirectos:300 }
  },

  // ==========================================================
  // MÓDULO 4: BANCO INDUCTIVO
  // ==========================================================

  inductivo: {
    titulo: 'Razonamiento Inductivo',
    tiempo: 6 * 60,
    totalPreguntas: 30,
    instrucciones: '<p>Esta prueba mide tu capacidad para <strong>reconocer patrones</strong> entre un grupo de elementos.</p><p><strong>Duración:</strong> 6 minutos | <strong>Ejercicios:</strong> 30</p><p>Observa las <strong>dos tablas de referencia</strong> (izquierda). Ellas comparten una <strong>regla</strong> en común.</p><p>Luego, entre las <strong>cuatro tablas de opción</strong> (derecha), <strong>selecciona las 2</strong> que también siguen esa misma regla.</p>',
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
  }
};
