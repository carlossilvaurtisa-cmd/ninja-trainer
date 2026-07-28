/* Banco de preguntas V/F/D con gráficos reales */
var QuestionBank = {
  "001": {
    "id": "001",
    "nombre": "Exportación de Frutas (Miles Ton)",
    "periodos": "Trimestres 2023 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Uva tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Uva=450, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Manzana alcanza un valor de 405.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Manzana=405 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Cereza tiene un valor de 688.",
          "respuesta": "F",
          "explicacion": "El valor real de Cereza en T4 es 510, no 688.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Kiwi supera a Arándano.",
          "respuesta": "F",
          "explicacion": "En T2, Arándano=250 > Kiwi=190.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Uva se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Uva pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Uva y Manzana es de 15.",
          "respuesta": "V",
          "explicacion": "Uva(420) - Manzana(405) = 15.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Uva y Manzana suman 880.",
          "respuesta": "V",
          "explicacion": "470 + 410 = 880.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Cereza y Arándano es de 287.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 190, no 287.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 519.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 402.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Cereza creció un +325% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "Cereza pasó de 120 a 510, un cambio del +325%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Cereza es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Cereza: 390.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Arándano creció un +52%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Arándano es +52%, no +52%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Kiwi es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Uva tiene el mayor valor (510), no Kiwi.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Uva respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Uva alcanza exactamente 420.",
          "respuesta": "V",
          "explicacion": "El punto de Uva en T3 marca 420.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Uva finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Uva=510, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Manzana es 205.",
          "respuesta": "F",
          "explicacion": "Manzana vale 410 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Cereza muestra una tendencia decreciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Cereza aumenta en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Uva representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Cereza aumentó en 390 unidades.",
          "respuesta": "V",
          "explicacion": "De 120 a 510: cambio de 390 (+325%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Cereza (T2→T3).",
          "respuesta": "V",
          "explicacion": "Cambio del +133%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Kiwi supera a Uva en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Uva mantiene valores superiores a Kiwi en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Arándano alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de Arándano está en T4 (320).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Cereza tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "Cereza varía un +325%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Cereza, Arándano, Kiwi crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Manzana varió un +19%.",
          "respuesta": "F",
          "explicacion": "La variación real de Manzana es +10%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Kiwi supera a Uva.",
          "respuesta": "F",
          "explicacion": "Uva siempre está por encima de Kiwi en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Uva alcanzaría un valor de 536 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Uva representa el 28.1% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Kiwi es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 12.4% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Manzana representa el 21.6% del total.",
          "respuesta": "F",
          "explicacion": "Manzana representa el 24.8% del total, no el 21.6%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Kiwi es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Uva es quien más contribuye (28.1%), no Kiwi.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Uva y Manzana suman el 52.9% del total.",
          "respuesta": "V",
          "explicacion": "28.1% + 24.8% = 52.9%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 15.6 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "28.1% - 12.4% = 15.6 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Cereza y Arándano juntos representan el 43.3% del total.",
          "respuesta": "F",
          "explicacion": "Suman 34.7%, no 43.3%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 3 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 2 variable(s) sobre el 20%: Uva, Manzana.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (6.590) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Uva es aproximadamente 2.3 veces mayor que Kiwi en valor absoluto.",
          "respuesta": "V",
          "explicacion": "1.850 ÷ 820 ≈ 2.3.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Uva, Manzana, Cereza) concentran el 71.5% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 71.5%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Arándano tendría un valor de 1.646.",
          "respuesta": "F",
          "explicacion": "Arándano duplicado sería 2.110, no 1.646.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Manzana y Cereza es 0.7:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 1.3:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/001/barras.jpg",
    "imgLineas": "img/charts/001/lineas.jpg",
    "imgTorta": "img/charts/001/torta.jpg"
  },
  "002": {
    "id": "002",
    "nombre": "Producción de Energía (GWh)",
    "periodos": "Años 2020-2023 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Hidroeléctrica tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Hidroeléctrica=6.200, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Eólica alcanza un valor de 2.950.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Eólica=2.950 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Hidroeléctrica tiene un valor de 5.895.",
          "respuesta": "F",
          "explicacion": "El valor real de Hidroeléctrica en T4 es 6.550, no 5.895.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Gas Natural supera a Carbón.",
          "respuesta": "F",
          "explicacion": "En T2, Carbón=4.700 > Gas Natural=3.500.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Solar se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Solar pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Solar y Eólica es de 350.",
          "respuesta": "V",
          "explicacion": "Solar(2.600) - Eólica(2.950) = 350.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Hidroeléctrica y Carbón suman 10.750.",
          "respuesta": "V",
          "explicacion": "6.050 + 4.700 = 10.750.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Hidroeléctrica y Carbón es de 4.125.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 2.750, no 4.125.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 6.811.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 4.030.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Solar creció un +78% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "Solar pasó de 1.800 a 3.200, un cambio del +78%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Solar es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Solar: 1.400.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Carbón creció un -44%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Carbón es -25%, no -44%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Solar es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Hidroeléctrica tiene el mayor valor (6.550), no Solar.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Solar respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Solar alcanza exactamente 2.600.",
          "respuesta": "V",
          "explicacion": "El punto de Solar en T3 marca 2.600.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Hidroeléctrica finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Hidroeléctrica=6.550, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Eólica es 2.340.",
          "respuesta": "F",
          "explicacion": "Eólica vale 2.600 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Carbón muestra una tendencia creciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Carbón disminuye en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Solar representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Hidroeléctrica aumentó en 350 unidades.",
          "respuesta": "V",
          "explicacion": "De 6.200 a 6.550: cambio de 350 (+6%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Solar (T2→T3).",
          "respuesta": "V",
          "explicacion": "Cambio del +24%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Solar supera a Hidroeléctrica en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Hidroeléctrica mantiene valores superiores a Solar en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Carbón alcanza su valor máximo en T2.",
          "respuesta": "F",
          "explicacion": "El máximo de Carbón está en T1 (5.100).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Solar tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "Solar varía un +78%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Solar, Eólica crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Carbón varió un -20%.",
          "respuesta": "F",
          "explicacion": "La variación real de Carbón es -25%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Solar supera a Hidroeléctrica.",
          "respuesta": "F",
          "explicacion": "Hidroeléctrica siempre está por encima de Solar en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Hidroeléctrica alcanzaría un valor de 6.878 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Hidroeléctrica representa el 32.5% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Solar es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 12.5% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Eólica representa el 18.3% del total.",
          "respuesta": "F",
          "explicacion": "Eólica representa el 14.5% del total, no el 18.3%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Solar es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Hidroeléctrica es quien más contribuye (32.5%), no Solar.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Solar y Eólica suman el 27.0% del total.",
          "respuesta": "V",
          "explicacion": "12.5% + 14.5% = 27.0%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 20.0 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "32.5% - 12.5% = 20.0 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Hidroeléctrica y Carbón juntos representan el 39.3% del total.",
          "respuesta": "F",
          "explicacion": "Suman 55.4%, no 39.3%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 3 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 2 variable(s) sobre el 20%: Hidroeléctrica, Carbón.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (77.600) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Hidroeléctrica es aproximadamente 2.6 veces mayor que Solar en valor absoluto.",
          "respuesta": "V",
          "explicacion": "25.200 ÷ 9.700 ≈ 2.6.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Hidroeléctrica, Carbón, Gas Natural) concentran el 73.0% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 73.0%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Carbón tendría un valor de 49.484.",
          "respuesta": "F",
          "explicacion": "Carbón duplicado sería 35.600, no 49.484.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Eólica y Hidroeléctrica es 0.7:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 0.4:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/002/barras.jpg",
    "imgLineas": "img/charts/002/lineas.jpg",
    "imgTorta": "img/charts/002/torta.jpg"
  },
  "003": {
    "id": "003",
    "nombre": "Ventas de Smartphones (Miles Unid)",
    "periodos": "Trimestres 2024 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Samsung tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Samsung=780, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Apple alcanza un valor de 690.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Apple=690 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Xiaomi tiene un valor de 506.",
          "respuesta": "F",
          "explicacion": "El valor real de Xiaomi en T4 es 610, no 506.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Honor supera a Motorola.",
          "respuesta": "F",
          "explicacion": "En T2, Motorola=230 > Honor=150.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Samsung se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Samsung pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Samsung y Apple es de 100.",
          "respuesta": "V",
          "explicacion": "Samsung(790) - Apple(690) = 100.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Samsung y Apple suman 1.510.",
          "respuesta": "V",
          "explicacion": "810 + 700 = 1.510.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Xiaomi y Motorola es de 539.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 350, no 539.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 383.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 547.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Honor creció un +62% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "Honor pasó de 120 a 195, un cambio del +62%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Apple es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Apple: 180.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Motorola creció un +52%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Motorola es +24%, no +52%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Honor es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Samsung tiene el mayor valor (850), no Honor.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Samsung respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Samsung alcanza exactamente 790.",
          "respuesta": "V",
          "explicacion": "El punto de Samsung en T3 marca 790.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Samsung finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Samsung=850, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Apple es 868.",
          "respuesta": "F",
          "explicacion": "Apple vale 700 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Xiaomi muestra una tendencia decreciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Xiaomi aumenta en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Samsung representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Xiaomi aumentó en 90 unidades.",
          "respuesta": "V",
          "explicacion": "De 520 a 610: cambio de 90 (+17%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Honor (T1→T2).",
          "respuesta": "V",
          "explicacion": "Cambio del +25%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Honor supera a Samsung en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Samsung mantiene valores superiores a Honor en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Motorola alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de Motorola está en T4 (260).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Honor tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "Honor varía un +62%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Xiaomi, Motorola, Honor crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Samsung varió un +20%.",
          "respuesta": "F",
          "explicacion": "La variación real de Samsung es +9%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Honor supera a Samsung.",
          "respuesta": "F",
          "explicacion": "Samsung siempre está por encima de Honor en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Samsung alcanzaría un valor de 892 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Samsung representa el 32.5% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Honor es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 6.4% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Apple representa el 42.5% del total.",
          "respuesta": "F",
          "explicacion": "Apple representa el 28.7% del total, no el 42.5%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Honor es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Samsung es quien más contribuye (32.5%), no Honor.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Samsung y Apple suman el 61.2% del total.",
          "respuesta": "V",
          "explicacion": "32.5% + 28.7% = 61.2%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 26.1 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "32.5% - 6.4% = 26.1 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Xiaomi y Motorola juntos representan el 25.9% del total.",
          "respuesta": "F",
          "explicacion": "Suman 32.4%, no 25.9%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 4 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 3 variable(s) sobre el 20%: Samsung, Apple, Xiaomi.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (9.930) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Samsung es aproximadamente 5.1 veces mayor que Honor en valor absoluto.",
          "respuesta": "V",
          "explicacion": "3.230 ÷ 635 ≈ 5.1.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Samsung, Apple, Xiaomi) concentran el 84.1% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 84.1%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Motorola tendría un valor de 2.627.",
          "respuesta": "F",
          "explicacion": "Motorola duplicado sería 1.890, no 2.627.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Apple y Xiaomi es 1.6:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 1.3:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/003/barras.jpg",
    "imgLineas": "img/charts/003/lineas.jpg",
    "imgTorta": "img/charts/003/torta.jpg"
  },
  "004": {
    "id": "004",
    "nombre": "Producción Audiovisual (Proyectos)",
    "periodos": "Años 2021-2024 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Publicidad tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Publicidad=180, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Documentales alcanza un valor de 58.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Documentales=58 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Videoclips tiene un valor de 162.",
          "respuesta": "F",
          "explicacion": "El valor real de Videoclips en T4 es 104, no 162.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Series supera a Cortometrajes.",
          "respuesta": "F",
          "explicacion": "En T2, Cortometrajes=34 > Series=15.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Publicidad se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Publicidad pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Publicidad y Documentales es de 182.",
          "respuesta": "V",
          "explicacion": "Publicidad(240) - Documentales(58) = 182.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Publicidad y Videoclips suman 287.",
          "respuesta": "V",
          "explicacion": "205 + 82 = 287.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Videoclips y Series es de 119.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 84, no 119.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 75.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 100.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Series creció un +67% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "Series pasó de 12 a 20, un cambio del +67%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Publicidad es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Publicidad: 85.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Series creció un +115%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Series es +67%, no +115%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Series es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Publicidad tiene el mayor valor (265), no Series.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Publicidad respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Publicidad alcanza exactamente 240.",
          "respuesta": "V",
          "explicacion": "El punto de Publicidad en T3 marca 240.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Publicidad finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Publicidad=265, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Documentales es 70.",
          "respuesta": "F",
          "explicacion": "Documentales vale 52 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Publicidad muestra una tendencia decreciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Publicidad aumenta en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Publicidad representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Videoclips aumentó en 29 unidades.",
          "respuesta": "V",
          "explicacion": "De 75 a 104: cambio de 29 (+39%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Series (T1→T2).",
          "respuesta": "V",
          "explicacion": "Cambio del +25%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Series supera a Publicidad en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Publicidad mantiene valores superiores a Series en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Series alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de Series está en T4 (20).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Series tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "Series varía un +67%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Publicidad, Documentales, Videoclips, Series, Cortometrajes crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Videoclips varió un +39%.",
          "respuesta": "F",
          "explicacion": "La variación real de Videoclips es +39%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Series supera a Publicidad.",
          "respuesta": "F",
          "explicacion": "Publicidad siempre está por encima de Series en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Publicidad alcanzaría un valor de 278 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Publicidad representa el 53.2% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Series es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 3.9% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Documentales representa el 6.6% del total.",
          "respuesta": "F",
          "explicacion": "Documentales representa el 13.2% del total, no el 6.6%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Series es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Publicidad es quien más contribuye (53.2%), no Series.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Publicidad y Documentales suman el 66.4% del total.",
          "respuesta": "V",
          "explicacion": "53.2% + 13.2% = 66.4%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 49.3 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "53.2% - 3.9% = 49.3 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Videoclips y Series juntos representan el 37.3% del total.",
          "respuesta": "F",
          "explicacion": "Suman 24.9%, no 37.3%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 3 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 2 variable(s) sobre el 20%: Publicidad, Videoclips.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (1.672) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Publicidad es aproximadamente 13.7 veces mayor que Series en valor absoluto.",
          "respuesta": "V",
          "explicacion": "890 ÷ 65 ≈ 13.7.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Publicidad, Videoclips, Documentales) concentran el 87.4% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 87.4%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Series tendría un valor de 195.",
          "respuesta": "F",
          "explicacion": "Series duplicado sería 130, no 195.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Documentales y Videoclips es 1.0:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 0.6:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/004/barras.jpg",
    "imgLineas": "img/charts/004/lineas.jpg",
    "imgTorta": "img/charts/004/torta.jpg"
  },
  "005": {
    "id": "005",
    "nombre": "Temperatura Promedio (°C)",
    "periodos": "Estaciones 2024 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Norte tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Norte=28, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Centro alcanza un valor de 12.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Centro=12 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Sur tiene un valor de 26.",
          "respuesta": "F",
          "explicacion": "El valor real de Sur en T4 es 17, no 26.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Patagonia supera a Altiplano.",
          "respuesta": "F",
          "explicacion": "En T2, Altiplano=14 > Patagonia=8.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Norte se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Norte pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Norte y Centro es de 6.",
          "respuesta": "V",
          "explicacion": "Norte(18) - Centro(12) = 6.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Norte y Centro suman 37.",
          "respuesta": "V",
          "explicacion": "21 + 16 = 37.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Sur y Patagonia es de 6.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 5, no 6.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 16.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 19.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Altiplano creció un -5% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "Altiplano pasó de 19 a 18, un cambio del -5%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Centro es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Centro: 12.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Patagonia creció un -50%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Patagonia es -20%, no -50%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Patagonia es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Norte tiene el mayor valor (26), no Patagonia.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Norte respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Norte alcanza exactamente 18.",
          "respuesta": "V",
          "explicacion": "El punto de Norte en T3 marca 18.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Norte finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Norte=26, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Centro es 23.",
          "respuesta": "F",
          "explicacion": "Centro vale 16 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Todos los valores de Sur son iguales entre sí.",
          "respuesta": "F",
          "explicacion": "Sur varía entre 8 y 20.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Norte representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Sur disminuyó en 3 unidades.",
          "respuesta": "V",
          "explicacion": "De 20 a 17: cambio de -3 (-15%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Patagonia (T3→T4).",
          "respuesta": "V",
          "explicacion": "Cambio del +300%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Patagonia supera a Norte en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Norte mantiene valores superiores a Patagonia en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Patagonia alcanza su valor máximo en T2.",
          "respuesta": "F",
          "explicacion": "El máximo de Patagonia está en T1 (15).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Altiplano tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "Altiplano varía un -5%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "No existe ninguna variable que crezca en absolutamente todos los períodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Todas las variables tienen al menos un período donde no crecen.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Patagonia varió un -26%.",
          "respuesta": "F",
          "explicacion": "La variación real de Patagonia es -20%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Patagonia supera a Norte.",
          "respuesta": "F",
          "explicacion": "Norte siempre está por encima de Patagonia en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Norte alcanzaría un valor de 27 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Norte representa el 28.7% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Patagonia es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 11.7% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Centro representa el 33.6% del total.",
          "respuesta": "F",
          "explicacion": "Centro representa el 22.8% del total, no el 33.6%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Patagonia es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Norte es quien más contribuye (28.7%), no Patagonia.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Norte y Centro suman el 51.5% del total.",
          "respuesta": "V",
          "explicacion": "28.7% + 22.8% = 51.5%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 17.0 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "28.7% - 11.7% = 17.0 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Sur y Patagonia juntos representan el 34.1% del total.",
          "respuesta": "F",
          "explicacion": "Suman 29.6%, no 34.1%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 3 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 2 variable(s) sobre el 20%: Norte, Centro.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (324) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Norte es aproximadamente 2.4 veces mayor que Patagonia en valor absoluto.",
          "respuesta": "V",
          "explicacion": "93 ÷ 38 ≈ 2.4.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Norte, Centro, Altiplano) concentran el 70.4% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 70.4%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Patagonia tendría un valor de 109.",
          "respuesta": "F",
          "explicacion": "Patagonia duplicado sería 76, no 109.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Centro y Sur es 1.5:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 1.3:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/005/barras.jpg",
    "imgLineas": "img/charts/005/lineas.jpg",
    "imgTorta": "img/charts/005/torta.jpg"
  },
  "006": {
    "id": "006",
    "nombre": "Población Urbana (Millones)",
    "periodos": "Años 2020-2023 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Santiago tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Santiago=7, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Concepción alcanza un valor de 1.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Concepción=1 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Valparaíso tiene un valor de 1.",
          "respuesta": "F",
          "explicacion": "El valor real de Valparaíso en T4 es 1, no 1.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Temuco supera a La Serena.",
          "respuesta": "F",
          "explicacion": "En T2, La Serena=0 > Temuco=0.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Santiago se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Santiago pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Santiago y Concepción es de 6.",
          "respuesta": "V",
          "explicacion": "Santiago(7) - Concepción(1) = 6.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Santiago y Concepción suman 8.",
          "respuesta": "V",
          "explicacion": "7 + 1 = 8.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Valparaíso y La Serena es de 0.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 1, no 0.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 2.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 2.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] La Serena creció un +10% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "La Serena pasó de 0 a 0, un cambio del +10%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Santiago es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Santiago: 0.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] La Serena creció un +30%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de La Serena es +10%, no +30%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Temuco es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Santiago tiene el mayor valor (7), no Temuco.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Santiago respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Santiago alcanza exactamente 7.",
          "respuesta": "V",
          "explicacion": "El punto de Santiago en T3 marca 7.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Santiago finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Santiago=7, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Concepción es 2.",
          "respuesta": "F",
          "explicacion": "Concepción vale 1 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Santiago muestra una tendencia decreciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Santiago aumenta en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Santiago representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Valparaíso aumentó en 0 unidades.",
          "respuesta": "V",
          "explicacion": "De 1 a 1: cambio de 0 (+3%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra La Serena (T2→T3).",
          "respuesta": "V",
          "explicacion": "Cambio del +5%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Temuco supera a Santiago en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Santiago mantiene valores superiores a Temuco en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La Serena alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de La Serena está en T4 (0).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] La Serena tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "La Serena varía un +10%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Santiago, Concepción, Valparaíso, La Serena, Temuco crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Valparaíso varió un +24%.",
          "respuesta": "F",
          "explicacion": "La variación real de Valparaíso es +3%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Temuco supera a Santiago.",
          "respuesta": "F",
          "explicacion": "Santiago siempre está por encima de Temuco en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Santiago alcanzaría un valor de 7 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Santiago representa el 70.7% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Temuco es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 3.8% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Concepción representa el 16.2% del total.",
          "respuesta": "F",
          "explicacion": "Concepción representa el 10.9% del total, no el 16.2%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Temuco es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Santiago es quien más contribuye (70.7%), no Temuco.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Santiago y Concepción suman el 81.7% del total.",
          "respuesta": "V",
          "explicacion": "70.7% + 10.9% = 81.7%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 66.9 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "70.7% - 3.8% = 66.9 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Valparaíso y La Serena juntos representan el 21.8% del total.",
          "respuesta": "F",
          "explicacion": "Suman 14.5%, no 21.8%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 2 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 1 variable(s) sobre el 20%: Santiago.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (39) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Santiago es aproximadamente 18.5 veces mayor que Temuco en valor absoluto.",
          "respuesta": "V",
          "explicacion": "28 ÷ 2 ≈ 18.5.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Santiago, Concepción, Valparaíso) concentran el 91.8% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 91.8%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, La Serena tendría un valor de 4.",
          "respuesta": "F",
          "explicacion": "La Serena duplicado sería 3, no 4.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Concepción y Valparaíso es 1.5:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 1.1:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/006/barras.jpg",
    "imgLineas": "img/charts/006/lineas.jpg",
    "imgTorta": "img/charts/006/torta.jpg"
  },
  "007": {
    "id": "007",
    "nombre": "Matrículas Universitarias",
    "periodos": "Años 2021-2024 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Ingeniería tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Ingeniería=12.400, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Medicina alcanza un valor de 5.690.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Medicina=5.690 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Derecho tiene un valor de 5.709.",
          "respuesta": "F",
          "explicacion": "El valor real de Derecho en T4 es 4.460, no 5.709.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Periodismo supera a Arquitectura.",
          "respuesta": "F",
          "explicacion": "En T2, Arquitectura=2.200 > Periodismo=1.420.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Ingeniería se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Ingeniería pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Ingeniería y Medicina es de 7.410.",
          "respuesta": "V",
          "explicacion": "Ingeniería(13.100) - Medicina(5.690) = 7.410.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Ingeniería y Medicina suman 18.310.",
          "respuesta": "V",
          "explicacion": "12.750 + 5.560 = 18.310.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Derecho y Arquitectura es de 2.646.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 2.100, no 2.646.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 4.844.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 5.504.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Arquitectura creció un +12% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "Arquitectura pasó de 2.100 a 2.360, un cambio del +12%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Ingeniería es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Ingeniería: 1.120.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Arquitectura creció un +32%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Arquitectura es +12%, no +32%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Periodismo es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Ingeniería tiene el mayor valor (13.520), no Periodismo.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Ingeniería respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Ingeniería alcanza exactamente 13.100.",
          "respuesta": "V",
          "explicacion": "El punto de Ingeniería en T3 marca 13.100.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Ingeniería finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Ingeniería=13.520, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Medicina es 9.007.",
          "respuesta": "F",
          "explicacion": "Medicina vale 5.560 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Periodismo muestra una tendencia creciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Periodismo disminuye en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Ingeniería representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Derecho aumentó en 160 unidades.",
          "respuesta": "V",
          "explicacion": "De 4.300 a 4.460: cambio de 160 (+4%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Arquitectura (T1→T2).",
          "respuesta": "V",
          "explicacion": "Cambio del +5%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Periodismo supera a Ingeniería en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Ingeniería mantiene valores superiores a Periodismo en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Arquitectura alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de Arquitectura está en T4 (2.360).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Arquitectura tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "Arquitectura varía un +12%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Ingeniería, Medicina, Arquitectura crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Periodismo varió un -10%.",
          "respuesta": "F",
          "explicacion": "La variación real de Periodismo es -5%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Periodismo supera a Ingeniería.",
          "respuesta": "F",
          "explicacion": "Ingeniería siempre está por encima de Periodismo en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Ingeniería alcanzaría un valor de 14.196 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Ingeniería representa el 48.7% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Periodismo es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 5.3% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Medicina representa el 31.7% del total.",
          "respuesta": "F",
          "explicacion": "Medicina representa el 21.1% del total, no el 31.7%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Periodismo es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Ingeniería es quien más contribuye (48.7%), no Periodismo.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Ingeniería y Medicina suman el 69.9% del total.",
          "respuesta": "V",
          "explicacion": "48.7% + 21.1% = 69.9%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 43.4 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "48.7% - 5.3% = 43.4 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Derecho y Arquitectura juntos representan el 32.5% del total.",
          "respuesta": "F",
          "explicacion": "Suman 24.8%, no 32.5%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 3 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 2 variable(s) sobre el 20%: Ingeniería, Medicina.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (106.200) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Ingeniería es aproximadamente 9.2 veces mayor que Periodismo en valor absoluto.",
          "respuesta": "V",
          "explicacion": "51.770 ÷ 5.650 ≈ 9.2.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Ingeniería, Medicina, Derecho) concentran el 86.3% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 86.3%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Arquitectura tendría un valor de 14.662.",
          "respuesta": "F",
          "explicacion": "Arquitectura duplicado sería 17.880, no 14.662.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Medicina y Derecho es 1.5:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 1.3:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/007/barras.jpg",
    "imgLineas": "img/charts/007/lineas.jpg",
    "imgTorta": "img/charts/007/torta.jpg"
  },
  "008": {
    "id": "008",
    "nombre": "Turismo Internacional (Miles)",
    "periodos": "Trimestres 2024 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Argentina tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Argentina=420, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Brasil alcanza un valor de 235.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Brasil=235 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "EE.UU. tiene un valor de 217.",
          "respuesta": "F",
          "explicacion": "El valor real de EE.UU. en T4 es 140, no 217.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Europa supera a Perú.",
          "respuesta": "F",
          "explicacion": "En T2, Perú=175 > Europa=145.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Argentina se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Argentina pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Argentina y Brasil es de 275.",
          "respuesta": "V",
          "explicacion": "Argentina(510) - Brasil(235) = 275.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Argentina y Brasil suman 690.",
          "respuesta": "V",
          "explicacion": "480 + 210 = 690.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre EE.UU. y Perú es de 75.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 50, no 75.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 421.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 265.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] EE.UU. creció un +47% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "EE.UU. pasó de 95 a 140, un cambio del +47%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Argentina es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Argentina: 140.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Perú creció un +43%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Perú es +19%, no +43%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "EE.UU. es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Argentina tiene el mayor valor (560), no EE.UU..",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Argentina respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Argentina alcanza exactamente 510.",
          "respuesta": "V",
          "explicacion": "El punto de Argentina en T3 marca 510.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Argentina finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Argentina=560, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Brasil es 311.",
          "respuesta": "F",
          "explicacion": "Brasil vale 210 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Argentina muestra una tendencia decreciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Argentina aumenta en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Argentina representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] EE.UU. aumentó en 45 unidades.",
          "respuesta": "V",
          "explicacion": "De 95 a 140: cambio de 45 (+47%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Brasil (T1→T2).",
          "respuesta": "V",
          "explicacion": "Cambio del +17%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "EE.UU. supera a Argentina en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Argentina mantiene valores superiores a EE.UU. en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Perú alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de Perú está en T4 (190).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] EE.UU. tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "EE.UU. varía un +47%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Argentina, Brasil, EE.UU., Perú, Europa crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Perú varió un +49%.",
          "respuesta": "F",
          "explicacion": "La variación real de Perú es +19%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, EE.UU. supera a Argentina.",
          "respuesta": "F",
          "explicacion": "Argentina siempre está por encima de EE.UU. en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Argentina alcanzaría un valor de 588 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Argentina representa el 42.4% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "EE.UU. es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 10.1% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Brasil representa el 28.4% del total.",
          "respuesta": "F",
          "explicacion": "Brasil representa el 19.1% del total, no el 28.4%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "EE.UU. es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Argentina es quien más contribuye (42.4%), no EE.UU..",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Argentina y Brasil suman el 61.5% del total.",
          "respuesta": "V",
          "explicacion": "42.4% + 19.1% = 61.5%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 32.3 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "42.4% - 10.1% = 32.3 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "EE.UU. y Perú juntos representan el 28.1% del total.",
          "respuesta": "F",
          "explicacion": "Suman 25.4%, no 28.1%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 2 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 1 variable(s) sobre el 20%: Argentina.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (4.642) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Argentina es aproximadamente 4.2 veces mayor que EE.UU. en valor absoluto.",
          "respuesta": "V",
          "explicacion": "1.970 ÷ 470 ≈ 4.2.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Argentina, Brasil, Perú) concentran el 76.7% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 76.7%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Perú tendría un valor de 1.046.",
          "respuesta": "F",
          "explicacion": "Perú duplicado sería 1.414, no 1.046.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Brasil y EE.UU. es 1.4:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 1.9:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/008/barras.jpg",
    "imgLineas": "img/charts/008/lineas.jpg",
    "imgTorta": "img/charts/008/torta.jpg"
  },
  "009": {
    "id": "009",
    "nombre": "Consumo de Agua (Hm3)",
    "periodos": "Años 2020-2023 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Agricultura tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Agricultura=720, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Industria alcanza un valor de 248.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Industria=248 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Minería tiene un valor de 367.",
          "respuesta": "F",
          "explicacion": "El valor real de Minería en T4 es 328, no 367.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Servicios supera a Hogares.",
          "respuesta": "F",
          "explicacion": "En T2, Hogares=184 > Servicios=98.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Agricultura se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Agricultura pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Agricultura y Industria es de 442.",
          "respuesta": "V",
          "explicacion": "Agricultura(690) - Industria(248) = 442.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Agricultura y Minería suman 1.020.",
          "respuesta": "V",
          "explicacion": "705 + 315 = 1.020.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Minería y Hogares es de 150.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 136, no 150.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 481.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 310.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Servicios creció un +9% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "Servicios pasó de 95 a 104, un cambio del +9%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Agricultura es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Agricultura: 45.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Hogares creció un +25%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Hogares es +7%, no +25%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Servicios es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Agricultura tiene el mayor valor (675), no Servicios.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Agricultura respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Agricultura alcanza exactamente 690.",
          "respuesta": "V",
          "explicacion": "El punto de Agricultura en T3 marca 690.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Agricultura finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Agricultura=675, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Industria es 368.",
          "respuesta": "F",
          "explicacion": "Industria vale 245 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Agricultura muestra una tendencia creciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Agricultura disminuye en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Agricultura representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Minería aumentó en 18 unidades.",
          "respuesta": "V",
          "explicacion": "De 310 a 328: cambio de 18 (+6%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Servicios (T1→T2).",
          "respuesta": "V",
          "explicacion": "Cambio del +3%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Servicios supera a Agricultura en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Agricultura mantiene valores superiores a Servicios en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Hogares alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de Hogares está en T4 (192).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Servicios tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "Servicios varía un +9%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Industria, Minería, Hogares, Servicios crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Agricultura varió un -24%.",
          "respuesta": "F",
          "explicacion": "La variación real de Agricultura es -6%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Servicios supera a Agricultura.",
          "respuesta": "F",
          "explicacion": "Agricultura siempre está por encima de Servicios en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Agricultura alcanzaría un valor de 709 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Agricultura representa el 45.1% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Servicios es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 6.4% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Industria representa el 26.9% del total.",
          "respuesta": "F",
          "explicacion": "Industria representa el 15.9% del total, no el 26.9%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Servicios es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Agricultura es quien más contribuye (45.1%), no Servicios.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Agricultura y Industria suman el 61.0% del total.",
          "respuesta": "V",
          "explicacion": "45.1% + 15.9% = 61.0%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 38.6 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "45.1% - 6.4% = 38.6 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Minería y Hogares juntos representan el 26.7% del total.",
          "respuesta": "F",
          "explicacion": "Suman 32.6%, no 26.7%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 3 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 2 variable(s) sobre el 20%: Agricultura, Minería.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (6.190) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Agricultura es aproximadamente 7.0 veces mayor que Servicios en valor absoluto.",
          "respuesta": "V",
          "explicacion": "2.790 ÷ 398 ≈ 7.0.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Agricultura, Minería, Industria) concentran el 81.6% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 81.6%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Hogares tendría un valor de 1.681.",
          "respuesta": "F",
          "explicacion": "Hogares duplicado sería 1.488, no 1.681.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Industria y Minería es 1.1:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 0.8:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/009/barras.jpg",
    "imgLineas": "img/charts/009/lineas.jpg",
    "imgTorta": "img/charts/009/torta.jpg"
  },
  "010": {
    "id": "010",
    "nombre": "Índice Bursátil",
    "periodos": "Meses 2024 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Mayo tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Mayo=5.140, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Febrero alcanza un valor de 5.075.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Febrero=5.075 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Marzo tiene un valor de 7.845.",
          "respuesta": "F",
          "explicacion": "El valor real de Marzo en T4 es 5.230, no 7.845.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Abril supera a Mayo.",
          "respuesta": "F",
          "explicacion": "En T2, Mayo=5.220 > Abril=5.155.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Enero se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Enero pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Enero y Febrero es de 70.",
          "respuesta": "V",
          "explicacion": "Enero(5.005) - Febrero(5.075) = 70.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Mayo y Abril suman 10.375.",
          "respuesta": "V",
          "explicacion": "5.220 + 5.155 = 10.375.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Marzo y Abril es de 95.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 60, no 95.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 7.845.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 5.230.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Enero creció un +5% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "Enero pasó de 4.850 a 5.090, un cambio del +5%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Enero es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Enero: 240.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Abril creció un +16%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Abril es +4%, no +16%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Enero es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Mayo tiene el mayor valor (5.380), no Enero.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Enero respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Enero alcanza exactamente 5.005.",
          "respuesta": "V",
          "explicacion": "El punto de Enero en T3 marca 5.005.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Mayo finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Mayo=5.380, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Febrero es 2.505.",
          "respuesta": "F",
          "explicacion": "Febrero vale 5.010 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Enero muestra una tendencia decreciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Enero aumenta en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Enero representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Marzo aumentó en 220 unidades.",
          "respuesta": "V",
          "explicacion": "De 5.010 a 5.230: cambio de 220 (+4%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Enero (T2→T3).",
          "respuesta": "V",
          "explicacion": "Cambio del +2%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Enero supera a Mayo en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Mayo mantiene valores superiores a Enero en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Abril alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de Abril está en T4 (5.290).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Enero tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "Enero varía un +5%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Enero, Febrero, Marzo, Abril, Mayo crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Abril varió un +25%.",
          "respuesta": "F",
          "explicacion": "La variación real de Abril es +4%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Enero supera a Mayo.",
          "respuesta": "F",
          "explicacion": "Mayo siempre está por encima de Enero en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Mayo alcanzaría un valor de 5.649 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Mayo representa el 20.6% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Enero es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 19.4% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Febrero representa el 29.0% del total.",
          "respuesta": "F",
          "explicacion": "Febrero representa el 19.7% del total, no el 29.0%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Enero es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Mayo es quien más contribuye (20.6%), no Enero.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Enero y Febrero suman el 39.1% del total.",
          "respuesta": "V",
          "explicacion": "19.4% + 19.7% = 39.1%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 1.2 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "20.6% - 19.4% = 1.2 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Marzo y Abril juntos representan el 60.5% del total.",
          "respuesta": "F",
          "explicacion": "Suman 40.3%, no 60.5%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 4 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 3 variable(s) sobre el 20%: Marzo, Abril, Mayo.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (102.315) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Mayo es aproximadamente 1.1 veces mayor que Enero en valor absoluto.",
          "respuesta": "V",
          "explicacion": "21.045 ÷ 19.865 ≈ 1.1.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Mayo, Abril, Marzo) concentran el 60.9% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 60.9%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Abril tendría un valor de 62.190.",
          "respuesta": "F",
          "explicacion": "Abril duplicado sería 41.460, no 62.190.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Febrero y Marzo es 1.4:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 1.0:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/010/barras.jpg",
    "imgLineas": "img/charts/010/lineas.jpg",
    "imgTorta": "img/charts/010/torta.jpg"
  },
  "011": {
    "id": "011",
    "nombre": "Producción de Litio (Ton)",
    "periodos": "Años 2020-2023 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Salar A tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Salar A=82.000, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Salar B alcanza un valor de 45.200.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Salar B=45.200 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Salar C tiene un valor de 28.067.",
          "respuesta": "F",
          "explicacion": "El valor real de Salar C en T4 es 22.100, no 28.067.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Salar E supera a Salar D.",
          "respuesta": "F",
          "explicacion": "En T2, Salar D=10.400 > Salar E=5.800.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Salar A se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Salar A pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Salar A y Salar B es de 46.300.",
          "respuesta": "V",
          "explicacion": "Salar A(91.500) - Salar B(45.200) = 46.300.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Salar A y Salar B suman 130.800.",
          "respuesta": "V",
          "explicacion": "87.000 + 43.800 = 130.800.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Salar C y Salar D es de 11.536.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 10.300, no 11.536.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 31.407.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 36.520.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Salar E creció un +33% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "Salar E pasó de 5.200 a 6.900, un cambio del +33%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Salar A es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Salar A: 12.800.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Salar D creció un +15%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Salar D es +20%, no +15%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Salar E es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Salar A tiene el mayor valor (94.800), no Salar E.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Salar A respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Salar A alcanza exactamente 91.500.",
          "respuesta": "V",
          "explicacion": "El punto de Salar A en T3 marca 91.500.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Salar A finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Salar A=94.800, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Salar B es 65.700.",
          "respuesta": "F",
          "explicacion": "Salar B vale 43.800 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Salar A muestra una tendencia decreciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Salar A aumenta en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Salar A representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Salar C aumentó en 3.800 unidades.",
          "respuesta": "V",
          "explicacion": "De 18.300 a 22.100: cambio de 3.800 (+21%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Salar E (T1→T2).",
          "respuesta": "V",
          "explicacion": "Cambio del +12%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Salar E supera a Salar A en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Salar A mantiene valores superiores a Salar E en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Salar D alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de Salar D está en T4 (11.800).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Salar E tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "Salar E varía un +33%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Salar A, Salar B, Salar C, Salar D, Salar E crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Salar B varió un +22%.",
          "respuesta": "F",
          "explicacion": "La variación real de Salar B es +13%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Salar E supera a Salar A.",
          "respuesta": "F",
          "explicacion": "Salar A siempre está por encima de Salar E en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Salar A alcanzaría un valor de 99.540 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Salar A representa el 52.2% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Salar E es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 3.6% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Salar B representa el 22.9% del total.",
          "respuesta": "F",
          "explicacion": "Salar B representa el 26.1% del total, no el 22.9%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Salar E es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Salar A es quien más contribuye (52.2%), no Salar E.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Salar A y Salar B suman el 78.3% del total.",
          "respuesta": "V",
          "explicacion": "52.2% + 26.1% = 78.3%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 48.6 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "52.2% - 3.6% = 48.6 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Salar C y Salar D juntos representan el 13.6% del total.",
          "respuesta": "F",
          "explicacion": "Suman 18.2%, no 13.6%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 3 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 2 variable(s) sobre el 20%: Salar A, Salar B.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (680.800) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Salar A es aproximadamente 14.7 veces mayor que Salar E en valor absoluto.",
          "respuesta": "V",
          "explicacion": "355.300 ÷ 24.200 ≈ 14.7.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Salar A, Salar B, Salar C) concentran el 90.1% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 90.1%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Salar D tendría un valor de 137.920.",
          "respuesta": "F",
          "explicacion": "Salar D duplicado sería 86.200, no 137.920.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Salar B y Salar C es 2.6:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 2.2:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/011/barras.jpg",
    "imgLineas": "img/charts/011/lineas.jpg",
    "imgTorta": "img/charts/011/torta.jpg"
  },
  "012": {
    "id": "012",
    "nombre": "Velocidad Internet (Mbps)",
    "periodos": "Años 2021-2024 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Fibra tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Fibra=180, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Cable alcanza un valor de 150.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Cable=150 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "4G tiene un valor de 52.",
          "respuesta": "F",
          "explicacion": "El valor real de 4G en T4 es 42, no 52.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Satelital supera a 5G.",
          "respuesta": "F",
          "explicacion": "En T2, 5G=240 > Satelital=60.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Fibra se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Fibra pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Fibra y Cable es de 170.",
          "respuesta": "V",
          "explicacion": "Fibra(320) - Cable(150) = 170.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "5G y Fibra suman 480.",
          "respuesta": "V",
          "explicacion": "240 + 240 = 480.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre 4G y 5G es de 698.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 478, no 698.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 360.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 255.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] 5G creció un +373% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "5G pasó de 110 a 520, un cambio del +373%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "5G es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de 5G: 410.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] 5G creció un +544%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de 5G es +373%, no +544%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "4G es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, 5G tiene el mayor valor (520), no 4G.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Fibra respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Fibra alcanza exactamente 320.",
          "respuesta": "V",
          "explicacion": "El punto de Fibra en T3 marca 320.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "5G finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "5G=520, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Cable es 202.",
          "respuesta": "F",
          "explicacion": "Cable vale 135 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Fibra muestra una tendencia decreciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Fibra aumenta en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Fibra representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] 4G aumentó en 10 unidades.",
          "respuesta": "V",
          "explicacion": "De 32 a 42: cambio de 10 (+31%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra 5G (T1→T2).",
          "respuesta": "V",
          "explicacion": "Cambio del +118%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "4G supera a 5G en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "5G mantiene valores superiores a 4G en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "5G alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de 5G está en T4 (520).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] 5G tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "5G varía un +373%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Fibra, Cable, 4G, 5G, Satelital crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] 4G varió un +59%.",
          "respuesta": "F",
          "explicacion": "La variación real de 4G es +31%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, 4G supera a 5G.",
          "respuesta": "F",
          "explicacion": "5G siempre está por encima de 4G en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, 5G alcanzaría un valor de 546 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "5G representa el 36.5% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "4G es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 4.3% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Cable representa el 23.5% del total.",
          "respuesta": "F",
          "explicacion": "Cable representa el 16.7% del total, no el 23.5%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "4G es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "5G es quien más contribuye (36.5%), no 4G.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Fibra y Cable suman el 51.1% del total.",
          "respuesta": "V",
          "explicacion": "34.5% + 16.7% = 51.1%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 32.2 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "36.5% - 4.3% = 32.2 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "4G y 5G juntos representan el 54.3% del total.",
          "respuesta": "F",
          "explicacion": "Suman 40.8%, no 54.3%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 3 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 2 variable(s) sobre el 20%: Fibra, 5G.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (3.451) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "5G es aproximadamente 8.5 veces mayor que 4G en valor absoluto.",
          "respuesta": "V",
          "explicacion": "1.260 ÷ 148 ≈ 8.5.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (5G, Fibra, Cable) concentran el 87.7% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 87.7%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, 5G tendría un valor de 2.848.",
          "respuesta": "F",
          "explicacion": "5G duplicado sería 2.520, no 2.848.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Cable y 4G es 6.1:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 3.9:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/012/barras.jpg",
    "imgLineas": "img/charts/012/lineas.jpg",
    "imgTorta": "img/charts/012/torta.jpg"
  },
  "013": {
    "id": "013",
    "nombre": "Asistencia al Cine (Miles)",
    "periodos": "Trimestres 2024 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Acción tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Acción=420, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Comedia alcanza un valor de 360.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Comedia=360 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Drama tiene un valor de 307.",
          "respuesta": "F",
          "explicacion": "El valor real de Drama en T4 es 215, no 307.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Terror supera a Animación.",
          "respuesta": "F",
          "explicacion": "En T2, Animación=320 > Terror=175.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Acción se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Acción pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Acción y Comedia es de 150.",
          "respuesta": "V",
          "explicacion": "Acción(510) - Comedia(360) = 150.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Acción y Animación suman 800.",
          "respuesta": "V",
          "explicacion": "480 + 320 = 800.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Drama y Animación es de 152.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 305, no 152.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 560.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 389.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Animación creció un +100% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "Animación pasó de 260 a 520, un cambio del +100%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Animación es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Animación: 260.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Animación creció un +85%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Animación es +100%, no +85%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Drama es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Acción tiene el mayor valor (560), no Drama.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Acción respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Acción alcanza exactamente 510.",
          "respuesta": "V",
          "explicacion": "El punto de Acción en T3 marca 510.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Acción finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Acción=560, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Comedia es 432.",
          "respuesta": "F",
          "explicacion": "Comedia vale 335 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Acción muestra una tendencia decreciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Acción aumenta en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Acción representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Drama aumentó en 35 unidades.",
          "respuesta": "V",
          "explicacion": "De 180 a 215: cambio de 35 (+19%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Animación (T2→T3).",
          "respuesta": "V",
          "explicacion": "Cambio del +28%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Drama supera a Acción en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Acción mantiene valores superiores a Drama en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Animación alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de Animación está en T4 (520).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Animación tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "Animación varía un +100%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Acción, Comedia, Drama, Animación, Terror crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Drama varió un +54%.",
          "respuesta": "F",
          "explicacion": "La variación real de Drama es +19%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Drama supera a Acción.",
          "respuesta": "F",
          "explicacion": "Acción siempre está por encima de Drama en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Acción alcanzaría un valor de 588 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Acción representa el 30.5% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Drama es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 12.2% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Comedia representa el 17.7% del total.",
          "respuesta": "F",
          "explicacion": "Comedia representa el 21.6% del total, no el 17.7%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Drama es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Acción es quien más contribuye (30.5%), no Drama.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Acción y Comedia suman el 52.0% del total.",
          "respuesta": "V",
          "explicacion": "30.5% + 21.6% = 52.0%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 18.3 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "30.5% - 12.2% = 18.3 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Drama y Animación juntos representan el 54.1% del total.",
          "respuesta": "F",
          "explicacion": "Suman 35.6%, no 54.1%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 4 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 3 variable(s) sobre el 20%: Acción, Comedia, Animación.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (6.465) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Acción es aproximadamente 2.5 veces mayor que Drama en valor absoluto.",
          "respuesta": "V",
          "explicacion": "1.970 ÷ 790 ≈ 2.5.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Acción, Animación, Comedia) concentran el 75.4% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 75.4%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Animación tendría un valor de 4.107.",
          "respuesta": "F",
          "explicacion": "Animación duplicado sería 3.020, no 4.107.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Comedia y Drama es 2.2:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 1.8:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/013/barras.jpg",
    "imgLineas": "img/charts/013/lineas.jpg",
    "imgTorta": "img/charts/013/torta.jpg"
  },
  "014": {
    "id": "014",
    "nombre": "Ventas de Vehículos",
    "periodos": "Trimestres 2024 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "SUV tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "SUV=9.200, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Sedán alcanza un valor de 5.400.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Sedán=5.400 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Pickup tiene un valor de 5.494.",
          "respuesta": "F",
          "explicacion": "El valor real de Pickup en T4 es 4.010, no 5.494.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Eléctrico supera a Híbrido.",
          "respuesta": "F",
          "explicacion": "En T2, Híbrido=1.520 > Eléctrico=1.150.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de SUV se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de SUV pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre SUV y Sedán es de 4.900.",
          "respuesta": "V",
          "explicacion": "SUV(10.300) - Sedán(5.400) = 4.900.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "SUV y Sedán suman 15.050.",
          "respuesta": "V",
          "explicacion": "9.800 + 5.250 = 15.050.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Pickup y Eléctrico es de 1.675.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 2.120, no 1.675.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 4.352.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 4.890.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Eléctrico creció un +130% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "Eléctrico pasó de 820 a 1.890, un cambio del +130%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "SUV es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de SUV: 1.700.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Eléctrico creció un +211%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Eléctrico es +130%, no +211%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Eléctrico es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, SUV tiene el mayor valor (10.900), no Eléctrico.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de SUV respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "SUV alcanza exactamente 10.300.",
          "respuesta": "V",
          "explicacion": "El punto de SUV en T3 marca 10.300.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "SUV finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "SUV=10.900, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Sedán es 7.088.",
          "respuesta": "F",
          "explicacion": "Sedán vale 5.250 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "SUV muestra una tendencia decreciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "SUV aumenta en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de SUV representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Pickup aumentó en 610 unidades.",
          "respuesta": "V",
          "explicacion": "De 3.400 a 4.010: cambio de 610 (+18%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Eléctrico (T1→T2).",
          "respuesta": "V",
          "explicacion": "Cambio del +40%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Eléctrico supera a SUV en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "SUV mantiene valores superiores a Eléctrico en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Eléctrico alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de Eléctrico está en T4 (1.890).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Eléctrico tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "Eléctrico varía un +130%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "SUV, Sedán, Pickup, Eléctrico, Híbrido crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Sedán varió un +19%.",
          "respuesta": "F",
          "explicacion": "La variación real de Sedán es +10%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Eléctrico supera a SUV.",
          "respuesta": "F",
          "explicacion": "SUV siempre está por encima de Eléctrico en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, SUV alcanzaría un valor de 11.445 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "SUV representa el 45.5% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Eléctrico es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 6.0% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Sedán representa el 12.1% del total.",
          "respuesta": "F",
          "explicacion": "Sedán representa el 24.2% del total, no el 12.1%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Eléctrico es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "SUV es quien más contribuye (45.5%), no Eléctrico.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "SUV y Sedán suman el 69.7% del total.",
          "respuesta": "V",
          "explicacion": "45.5% + 24.2% = 69.7%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 39.5 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "45.5% - 6.0% = 39.5 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Pickup y Eléctrico juntos representan el 30.6% del total.",
          "respuesta": "F",
          "explicacion": "Suman 22.8%, no 30.6%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 3 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 2 variable(s) sobre el 20%: SUV, Sedán.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (88.330) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "SUV es aproximadamente 7.5 veces mayor que Eléctrico en valor absoluto.",
          "respuesta": "V",
          "explicacion": "40.200 ÷ 5.340 ≈ 7.5.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (SUV, Sedán, Pickup) concentran el 86.5% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 86.5%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Eléctrico tendría un valor de 16.020.",
          "respuesta": "F",
          "explicacion": "Eléctrico duplicado sería 10.680, no 16.020.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Sedán y Pickup es 0.7:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 1.4:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/014/barras.jpg",
    "imgLineas": "img/charts/014/lineas.jpg",
    "imgTorta": "img/charts/014/torta.jpg"
  },
  "015": {
    "id": "015",
    "nombre": "Producción Agrícola (Ton)",
    "periodos": "Años 2020-2023 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Trigo tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Trigo=120.000, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Maíz alcanza un valor de 102.300.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Maíz=102.300 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Papa tiene un valor de 45.050.",
          "respuesta": "F",
          "explicacion": "El valor real de Papa en T4 es 90.100, no 45.050.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Quinoa supera a Avena.",
          "respuesta": "F",
          "explicacion": "En T2, Avena=55.100 > Quinoa=5.200.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Trigo se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Trigo pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Trigo y Maíz es de 24.200.",
          "respuesta": "V",
          "explicacion": "Trigo(126.500) - Maíz(102.300) = 24.200.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Trigo y Maíz suman 223.500.",
          "respuesta": "V",
          "explicacion": "123.000 + 100.500 = 223.500.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Papa y Avena es de 28.623.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 32.900, no 28.623.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 89.830.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 77.440.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Quinoa creció un +27% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "Quinoa pasó de 4.800 a 6.100, un cambio del +27%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Trigo es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Trigo: 9.000.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Avena creció un +24%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Avena es +6%, no +24%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Quinoa es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Trigo tiene el mayor valor (129.000), no Quinoa.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Trigo respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Trigo alcanza exactamente 126.500.",
          "respuesta": "V",
          "explicacion": "El punto de Trigo en T3 marca 126.500.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Trigo finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Trigo=129.000, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Maíz es 111.555.",
          "respuesta": "F",
          "explicacion": "Maíz vale 100.500 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Trigo muestra una tendencia decreciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Trigo aumenta en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Trigo representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Papa aumentó en 4.100 unidades.",
          "respuesta": "V",
          "explicacion": "De 86.000 a 90.100: cambio de 4.100 (+5%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Quinoa (T3→T4).",
          "respuesta": "V",
          "explicacion": "Cambio del +9%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Quinoa supera a Trigo en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Trigo mantiene valores superiores a Quinoa en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Avena alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de Avena está en T4 (57.200).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Quinoa tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "Quinoa varía un +27%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Trigo, Maíz, Papa, Avena, Quinoa crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Papa varió un +26%.",
          "respuesta": "F",
          "explicacion": "La variación real de Papa es +5%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Quinoa supera a Trigo.",
          "respuesta": "F",
          "explicacion": "Trigo siempre está por encima de Quinoa en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Trigo alcanzaría un valor de 135.450 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Trigo representa el 33.2% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Quinoa es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 1.4% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Maíz representa el 44.1% del total.",
          "respuesta": "F",
          "explicacion": "Maíz representa el 27.0% del total, no el 44.1%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Quinoa es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Trigo es quien más contribuye (33.2%), no Quinoa.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Trigo y Maíz suman el 60.3% del total.",
          "respuesta": "V",
          "explicacion": "33.2% + 27.0% = 60.3%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 31.8 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "33.2% - 1.4% = 31.8 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Papa y Avena juntos representan el 57.4% del total.",
          "respuesta": "F",
          "explicacion": "Suman 38.3%, no 57.4%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 4 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 3 variable(s) sobre el 20%: Trigo, Maíz, Papa.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (1.499.900) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Trigo es aproximadamente 23.0 veces mayor que Quinoa en valor absoluto.",
          "respuesta": "V",
          "explicacion": "498.500 ÷ 21.700 ≈ 23.0.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Trigo, Maíz, Papa) concentran el 83.7% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 83.7%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Avena tendría un valor de 582.426.",
          "respuesta": "F",
          "explicacion": "Avena duplicado sería 444.600, no 582.426.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Maíz y Papa es 1.7:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 1.2:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/015/barras.jpg",
    "imgLineas": "img/charts/015/lineas.jpg",
    "imgTorta": "img/charts/015/torta.jpg"
  },
  "016": {
    "id": "016",
    "nombre": "Ventas de Libros",
    "periodos": "Años 2021-2024 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Novela tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Novela=18.000, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Historia alcanza un valor de 8.700.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Historia=8.700 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Ciencia tiene un valor de 5.895.",
          "respuesta": "F",
          "explicacion": "El valor real de Ciencia en T4 es 6.550, no 5.895.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Tecnología supera a Infantil.",
          "respuesta": "F",
          "explicacion": "En T2, Infantil=9.600 > Tecnología=4.550.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Novela se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Novela pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Novela y Historia es de 11.800.",
          "respuesta": "V",
          "explicacion": "Novela(20.500) - Historia(8.700) = 11.800.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Novela y Infantil suman 28.800.",
          "respuesta": "V",
          "explicacion": "19.200 + 9.600 = 28.800.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Ciencia y Infantil es de 6.052.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 4.450, no 6.052.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 15.990.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 10.660.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Tecnología creció un +32% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "Tecnología pasó de 4.100 a 5.400, un cambio del +32%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Novela es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Novela: 3.400.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Infantil creció un +39%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Infantil es +21%, no +39%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Tecnología es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Novela tiene el mayor valor (21.400), no Tecnología.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Novela respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Novela alcanza exactamente 20.500.",
          "respuesta": "V",
          "explicacion": "El punto de Novela en T3 marca 20.500.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Novela finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Novela=21.400, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Historia es 11.305.",
          "respuesta": "F",
          "explicacion": "Historia vale 8.500 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Novela muestra una tendencia decreciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Novela aumenta en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Novela representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Ciencia aumentó en 950 unidades.",
          "respuesta": "V",
          "explicacion": "De 5.600 a 6.550: cambio de 950 (+17%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Tecnología (T1→T2).",
          "respuesta": "V",
          "explicacion": "Cambio del +11%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Tecnología supera a Novela en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Novela mantiene valores superiores a Tecnología en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Infantil alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de Infantil está en T4 (11.000).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Tecnología tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "Tecnología varía un +32%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Novela, Historia, Ciencia, Infantil, Tecnología crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Historia varió un +12%.",
          "respuesta": "F",
          "explicacion": "La variación real de Historia es +9%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Tecnología supera a Novela.",
          "respuesta": "F",
          "explicacion": "Novela siempre está por encima de Tecnología en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Novela alcanzaría un valor de 22.470 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Novela representa el 40.2% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Tecnología es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 9.6% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Historia representa el 8.7% del total.",
          "respuesta": "F",
          "explicacion": "Historia representa el 17.5% del total, no el 8.7%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Tecnología es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Novela es quien más contribuye (40.2%), no Tecnología.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Novela y Historia suman el 57.7% del total.",
          "respuesta": "V",
          "explicacion": "40.2% + 17.5% = 57.7%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 30.6 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "40.2% - 9.6% = 30.6 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Ciencia y Infantil juntos representan el 27.4% del total.",
          "respuesta": "F",
          "explicacion": "Suman 32.7%, no 27.4%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 3 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 2 variable(s) sobre el 20%: Novela, Infantil.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (196.650) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Novela es aproximadamente 4.2 veces mayor que Tecnología en valor absoluto.",
          "respuesta": "V",
          "explicacion": "79.100 ÷ 18.950 ≈ 4.2.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Novela, Infantil, Historia) concentran el 78.0% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 78.0%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Infantil tendría un valor de 94.400.",
          "respuesta": "F",
          "explicacion": "Infantil duplicado sería 80.000, no 94.400.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Historia y Ciencia es 2.1:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 1.4:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/016/barras.jpg",
    "imgLineas": "img/charts/016/lineas.jpg",
    "imgTorta": "img/charts/016/torta.jpg"
  },
  "017": {
    "id": "017",
    "nombre": "Consumo Eléctrico (GWh)",
    "periodos": "Meses Invierno | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Minería tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Minería=1.450, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Industrial alcanza un valor de 1.265.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Industrial=1.265 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Comercial tiene un valor de 1.014.",
          "respuesta": "F",
          "explicacion": "El valor real de Comercial en T4 es 690, no 1.014.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Público supera a Minería.",
          "respuesta": "F",
          "explicacion": "En T2, Minería=1.465 > Público=220.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Residencial se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Residencial pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Residencial y Industrial es de 325.",
          "respuesta": "V",
          "explicacion": "Residencial(940) - Industrial(1.265) = 325.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Minería y Industrial suman 2.705.",
          "respuesta": "V",
          "explicacion": "1.465 + 1.240 = 2.705.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Comercial y Minería es de 713.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 810, no 713.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 1.309.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 935.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Residencial creció un +10% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "Residencial pasó de 880 a 970, un cambio del +10%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Residencial es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Residencial: 90.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Minería creció un +20%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Minería es +3%, no +20%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Público es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Minería tiene el mayor valor (1.500), no Público.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Residencial respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Residencial alcanza exactamente 940.",
          "respuesta": "V",
          "explicacion": "El punto de Residencial en T3 marca 940.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Minería finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Minería=1.500, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Industrial es 1.786.",
          "respuesta": "F",
          "explicacion": "Industrial vale 1.240 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Residencial muestra una tendencia decreciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Residencial aumenta en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Residencial representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Comercial aumentó en 50 unidades.",
          "respuesta": "V",
          "explicacion": "De 640 a 690: cambio de 50 (+8%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Público (T2→T3).",
          "respuesta": "V",
          "explicacion": "Cambio del +4%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Público supera a Minería en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Minería mantiene valores superiores a Público en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Minería alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de Minería está en T4 (1.500).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Residencial tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "Residencial varía un +10%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Residencial, Industrial, Comercial, Minería, Público crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Minería varió un +16%.",
          "respuesta": "F",
          "explicacion": "La variación real de Minería es +3%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Público supera a Minería.",
          "respuesta": "F",
          "explicacion": "Minería siempre está por encima de Público en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Minería alcanzaría un valor de 1.575 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Minería representa el 32.5% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Público es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 4.9% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Industrial representa el 37.5% del total.",
          "respuesta": "F",
          "explicacion": "Industrial representa el 27.6% del total, no el 37.5%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Público es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Minería es quien más contribuye (32.5%), no Público.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Residencial y Industrial suman el 48.0% del total.",
          "respuesta": "V",
          "explicacion": "20.4% + 27.6% = 48.0%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 27.5 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "32.5% - 4.9% = 27.5 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Comercial y Minería juntos representan el 56.5% del total.",
          "respuesta": "F",
          "explicacion": "Suman 47.1%, no 56.5%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 4 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 3 variable(s) sobre el 20%: Residencial, Industrial, Minería.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (18.153) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Minería es aproximadamente 6.6 veces mayor que Público en valor absoluto.",
          "respuesta": "V",
          "explicacion": "5.895 ÷ 898 ≈ 6.6.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Minería, Industrial, Residencial) concentran el 80.4% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 80.4%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Minería tendría un valor de 9.078.",
          "respuesta": "F",
          "explicacion": "Minería duplicado sería 11.790, no 9.078.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Industrial y Comercial es 1.4:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 1.9:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/017/barras.jpg",
    "imgLineas": "img/charts/017/lineas.jpg",
    "imgTorta": "img/charts/017/torta.jpg"
  },
  "018": {
    "id": "018",
    "nombre": "Producción Pesquera (Ton)",
    "periodos": "Años 2020-2023 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Salmón tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Salmón=520.000, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Jurel alcanza un valor de 188.000.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Jurel=188.000 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Merluza tiene un valor de 108.472.",
          "respuesta": "F",
          "explicacion": "El valor real de Merluza en T4 es 72.800, no 108.472.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Anchoveta supera a Sardina.",
          "respuesta": "F",
          "explicacion": "En T2, Sardina=101.000 > Anchoveta=65.800.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Salmón se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Salmón pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Salmón y Jurel es de 360.000.",
          "respuesta": "V",
          "explicacion": "Salmón(548.000) - Jurel(188.000) = 360.000.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Salmón y Jurel suman 711.000.",
          "respuesta": "V",
          "explicacion": "535.000 + 176.000 = 711.000.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Merluza y Sardina es de 45.408.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 35.200, no 45.408.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 231.104.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 200.960.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Sardina creció un +10% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "Sardina pasó de 98.000 a 108.000, un cambio del +10%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Salmón es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Salmón: 41.000.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Sardina creció un +34%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Sardina es +10%, no +34%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Anchoveta es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Salmón tiene el mayor valor (561.000), no Anchoveta.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Salmón respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Salmón alcanza exactamente 548.000.",
          "respuesta": "V",
          "explicacion": "El punto de Salmón en T3 marca 548.000.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Salmón finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Salmón=561.000, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Jurel es 209.440.",
          "respuesta": "F",
          "explicacion": "Jurel vale 176.000 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Merluza muestra una tendencia creciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Merluza disminuye en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Salmón representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Merluza disminuyó en 3.200 unidades.",
          "respuesta": "V",
          "explicacion": "De 76.000 a 72.800: cambio de -3.200 (-4%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Jurel (T2→T3).",
          "respuesta": "V",
          "explicacion": "Cambio del +7%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Anchoveta supera a Salmón en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Salmón mantiene valores superiores a Anchoveta en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Sardina alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de Sardina está en T4 (108.000).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Sardina tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "Sardina varía un +10%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Salmón, Sardina, Anchoveta crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Merluza varió un -26%.",
          "respuesta": "F",
          "explicacion": "La variación real de Merluza es -4%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Anchoveta supera a Salmón.",
          "respuesta": "F",
          "explicacion": "Salmón siempre está por encima de Anchoveta en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Salmón alcanzaría un valor de 589.050 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Salmón representa el 55.8% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Anchoveta es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 6.9% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Jurel representa el 28.6% del total.",
          "respuesta": "F",
          "explicacion": "Jurel representa el 19.1% del total, no el 28.6%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Anchoveta es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Salmón es quien más contribuye (55.8%), no Anchoveta.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Salmón y Jurel suman el 74.9% del total.",
          "respuesta": "V",
          "explicacion": "55.8% + 19.1% = 74.9%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 48.9 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "55.8% - 6.9% = 48.9 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Merluza y Sardina juntos representan el 28.7% del total.",
          "respuesta": "F",
          "explicacion": "Suman 18.3%, no 28.7%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 2 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 1 variable(s) sobre el 20%: Salmón.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (3.877.900) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Salmón es aproximadamente 8.1 veces mayor que Anchoveta en valor absoluto.",
          "respuesta": "V",
          "explicacion": "2.164.000 ÷ 265.900 ≈ 8.1.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Salmón, Jurel, Sardina) concentran el 85.5% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 85.5%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Sardina tendría un valor de 1.234.500.",
          "respuesta": "F",
          "explicacion": "Sardina duplicado sería 823.000, no 1.234.500.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Jurel y Merluza es 2.1:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 2.5:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/018/barras.jpg",
    "imgLineas": "img/charts/018/lineas.jpg",
    "imgTorta": "img/charts/018/torta.jpg"
  },
  "019": {
    "id": "019",
    "nombre": "Casos de Influenza",
    "periodos": "Semanas 1-4 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Niños tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Niños=210, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Adultos alcanza un valor de 280.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Adultos=280 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Adultos Mayores tiene un valor de 138.",
          "respuesta": "F",
          "explicacion": "El valor real de Adultos Mayores en T4 es 275, no 138.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Personal Salud supera a Embarazadas.",
          "respuesta": "F",
          "explicacion": "En T2, Embarazadas=31 > Personal Salud=20.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Niños se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Niños pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Niños y Adultos es de 40.",
          "respuesta": "V",
          "explicacion": "Niños(320) - Adultos(280) = 40.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Niños y Adultos suman 485.",
          "respuesta": "V",
          "explicacion": "260 + 225 = 485.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Adultos Mayores y Embarazadas es de 356.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 234, no 356.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 302.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 201.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Adultos Mayores creció un +90% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "Adultos Mayores pasó de 145 a 275, un cambio del +90%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Niños es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Niños: 140.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Embarazadas creció un +121%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Embarazadas es +71%, no +121%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Personal Salud es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Niños tiene el mayor valor (350), no Personal Salud.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Niños respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Niños alcanza exactamente 320.",
          "respuesta": "V",
          "explicacion": "El punto de Niños en T3 marca 320.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Niños finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Niños=350, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Adultos es 351.",
          "respuesta": "F",
          "explicacion": "Adultos vale 225 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Niños muestra una tendencia decreciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Niños aumenta en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Niños representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Adultos Mayores aumentó en 130 unidades.",
          "respuesta": "V",
          "explicacion": "De 145 a 275: cambio de 130 (+90%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Adultos Mayores (T2→T3).",
          "respuesta": "V",
          "explicacion": "Cambio del +33%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Personal Salud supera a Niños en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Niños mantiene valores superiores a Personal Salud en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Embarazadas alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de Embarazadas está en T4 (41).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Adultos Mayores tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "Adultos Mayores varía un +90%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Niños, Adultos, Adultos Mayores, Embarazadas, Personal Salud crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Personal Salud varió un +115%.",
          "respuesta": "F",
          "explicacion": "La variación real de Personal Salud es +61%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Personal Salud supera a Niños.",
          "respuesta": "F",
          "explicacion": "Niños siempre está por encima de Personal Salud en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Niños alcanzaría un valor de 368 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Niños representa el 35.6% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Personal Salud es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 2.9% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Adultos representa el 38.9% del total.",
          "respuesta": "F",
          "explicacion": "Adultos representa el 31.1% del total, no el 38.9%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Personal Salud es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Niños es quien más contribuye (35.6%), no Personal Salud.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Niños y Adultos suman el 66.7% del total.",
          "respuesta": "V",
          "explicacion": "35.6% + 31.1% = 66.7%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 32.7 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "35.6% - 2.9% = 32.7 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Adultos Mayores y Embarazadas juntos representan el 23.1% del total.",
          "respuesta": "F",
          "explicacion": "Suman 30.4%, no 23.1%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 4 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 3 variable(s) sobre el 20%: Niños, Adultos, Adultos Mayores.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (3.200) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Niños es aproximadamente 12.3 veces mayor que Personal Salud en valor absoluto.",
          "respuesta": "V",
          "explicacion": "1.140 ÷ 93 ≈ 12.3.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Niños, Adultos, Adultos Mayores) concentran el 93.0% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 93.0%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Embarazadas tendría un valor de 396.",
          "respuesta": "F",
          "explicacion": "Embarazadas duplicado sería 264, no 396.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Adultos y Adultos Mayores es 1.4:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 1.2:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/019/barras.jpg",
    "imgLineas": "img/charts/019/lineas.jpg",
    "imgTorta": "img/charts/019/torta.jpg"
  },
  "020": {
    "id": "020",
    "nombre": "Medallas Deportivas",
    "periodos": "Años 2021-2024 | Variables: 5",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "Atletismo tiene el valor más alto entre todas las variables.",
          "respuesta": "V",
          "explicacion": "Atletismo=12, el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Natación alcanza un valor de 12.",
          "respuesta": "V",
          "explicacion": "El gráfico muestra Natación=12 en T3.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Ciclismo tiene un valor de 15.",
          "respuesta": "F",
          "explicacion": "El valor real de Ciclismo en T4 es 10, no 15.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "Tenis supera a Remo.",
          "respuesta": "F",
          "explicacion": "En T2, Remo=11 > Tenis=8.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Atletismo se debe exclusivamente a las campañas de marketing digital realizadas durante ese período.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el valor de Atletismo pero no informa sobre las causas que lo produjeron.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "periodo": "T3",
          "enunciado": "La diferencia entre Atletismo y Natación es de 6.",
          "respuesta": "V",
          "explicacion": "Atletismo(18) - Natación(12) = 6.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "periodo": "T2",
          "enunciado": "Atletismo y Remo suman 26.",
          "respuesta": "V",
          "explicacion": "15 + 11 = 26.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "La diferencia entre Ciclismo y Remo es de 7.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 6, no 7.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "periodo": "T4",
          "enunciado": "El promedio de todas las variables es 19.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 14.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "periodo": "T1",
          "enunciado": "Los valores mostrados incluyen márgenes de error de ±3% según la metodología de recolección de datos.",
          "respuesta": "D",
          "explicacion": "El gráfico no indica márgenes de error ni metodología de recolección.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Ciclismo creció un +100% entre el primer y el último período.",
          "respuesta": "V",
          "explicacion": "Ciclismo pasó de 5 a 10, un cambio del +100%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Atletismo es la variable con mayor diferencia entre su valor máximo y mínimo.",
          "respuesta": "V",
          "explicacion": "Rango de Atletismo: 8.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Remo creció un +104%.",
          "respuesta": "F",
          "explicacion": "El crecimiento real de Remo es +78%, no +104%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Ciclismo es la variable con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4, Atletismo tiene el mayor valor (20), no Ciclismo.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "periodo": "T3",
          "enunciado": "La disminución de Atletismo respecto al período anterior se debe a condiciones climáticas adversas.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra el cambio pero no explica sus causas.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "periodo": "T3",
          "enunciado": "Atletismo alcanza exactamente 18.",
          "respuesta": "V",
          "explicacion": "El punto de Atletismo en T3 marca 18.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "periodo": "T4",
          "enunciado": "Atletismo finaliza con el valor más alto.",
          "respuesta": "V",
          "explicacion": "Atletismo=20, el mayor en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "periodo": "T2",
          "enunciado": "El valor de Natación es 15.",
          "respuesta": "F",
          "explicacion": "Natación vale 10 en T2.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Atletismo muestra una tendencia decreciente a lo largo de todos los períodos.",
          "respuesta": "F",
          "explicacion": "Atletismo aumenta en cada período consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "periodo": "T1",
          "enunciado": "El valor inicial de Atletismo representa el 15% del total de la industria a nivel nacional.",
          "respuesta": "D",
          "explicacion": "El gráfico no muestra el total de la industria ni datos de otras empresas/regiones.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T1→T4] Ciclismo aumentó en 5 unidades.",
          "respuesta": "V",
          "explicacion": "De 5 a 10: cambio de 5 (+100%).",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El mayor cambio porcentual entre períodos consecutivos lo registra Ciclismo (T1→T2).",
          "respuesta": "V",
          "explicacion": "Cambio del +40%.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Ciclismo supera a Atletismo en al menos dos períodos.",
          "respuesta": "F",
          "explicacion": "Atletismo mantiene valores superiores a Ciclismo en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Remo alcanza su valor máximo en T1.",
          "respuesta": "F",
          "explicacion": "El máximo de Remo está en T4 (16).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "[T3→T4] El cambio observado en este período se mantendrá durante los próximos 3 años.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra datos históricos, no permite predecir el futuro con certeza.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Ciclismo tiene la mayor tasa de variación porcentual total.",
          "respuesta": "V",
          "explicacion": "Ciclismo varía un +100%, la mayor de todas las variables.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Existe al menos una variable que crece en cada período consecutivo sin excepciones.",
          "respuesta": "V",
          "explicacion": "Atletismo, Natación, Ciclismo, Remo, Tenis crece en todos los períodos consecutivos.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "[T1→T4] Atletismo varió un +60%.",
          "respuesta": "F",
          "explicacion": "La variación real de Atletismo es +67%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "En algún momento, Ciclismo supera a Atletismo.",
          "respuesta": "F",
          "explicacion": "Atletismo siempre está por encima de Ciclismo en todos los períodos.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "periodo": "T4",
          "enunciado": "Si se aplicara una política de incentivos del 5%, Atletismo alcanzaría un valor de 21 en el próximo período.",
          "respuesta": "D",
          "explicacion": "El gráfico no puede confirmar el efecto de una política futura; es una proyección especulativa.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Atletismo representa el 29.0% del total.",
          "respuesta": "V",
          "explicacion": "Es la porción más grande del gráfico de torta.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Ciclismo es la variable con menor participación porcentual.",
          "respuesta": "V",
          "explicacion": "Representa solo el 13.4% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Natación representa el 23.7% del total.",
          "respuesta": "F",
          "explicacion": "Natación representa el 20.1% del total, no el 23.7%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Ciclismo es la variable que más contribuye al total.",
          "respuesta": "F",
          "explicacion": "Atletismo es quien más contribuye (29.0%), no Ciclismo.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "periodo": "",
          "enunciado": "Los porcentajes mostrados se calcularon usando datos preliminares sujetos a revisión por auditoría externa.",
          "respuesta": "D",
          "explicacion": "El gráfico muestra porcentajes pero no indica si los datos son preliminares o definitivos.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Atletismo y Natación suman el 49.1% del total.",
          "respuesta": "V",
          "explicacion": "29.0% + 20.1% = 49.1%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "La diferencia entre la mayor y menor participación es de 15.6 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "29.0% - 13.4% = 15.6 puntos.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Ciclismo y Remo juntos representan el 51.4% del total.",
          "respuesta": "F",
          "explicacion": "Suman 35.7%, no 51.4%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "Exactamente 4 variable(s) representa(n) más del 20% del total cada una.",
          "respuesta": "F",
          "explicacion": "Hay 3 variable(s) sobre el 20%: Atletismo, Natación, Remo.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "periodo": "",
          "enunciado": "El valor absoluto total (224) incluye ajustes por inflación según el IPC del último año.",
          "respuesta": "D",
          "explicacion": "El gráfico no especifica si los valores están ajustados por inflación u otros factores.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Atletismo es aproximadamente 2.2 veces mayor que Ciclismo en valor absoluto.",
          "respuesta": "V",
          "explicacion": "65 ÷ 30 ≈ 2.2.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Las tres variables principales (Atletismo, Remo, Natación) concentran el 71.4% del total.",
          "respuesta": "V",
          "explicacion": "Suman exactamente 71.4%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "Si el total general se duplicara, Remo tendría un valor de 50.",
          "respuesta": "F",
          "explicacion": "Remo duplicado sería 100, no 50.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La razón entre Natación y Ciclismo es 1.7:1.",
          "respuesta": "F",
          "explicacion": "La razón real es 1.5:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "periodo": "",
          "enunciado": "La distribución porcentual mostrada es representativa de la tendencia global del sector a nivel mundial.",
          "respuesta": "D",
          "explicacion": "El gráfico solo muestra estos datos; no se puede inferir si representa la tendencia mundial.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/020/barras.jpg",
    "imgLineas": "img/charts/020/lineas.jpg",
    "imgTorta": "img/charts/020/torta.jpg"
  }
};
