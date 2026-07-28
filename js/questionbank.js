/* Banco V/F/D - preguntas por temática */
var QuestionBank = {
  "001": {
    "id": "001",
    "nombre": "Exportación de Frutas (Miles Ton)",
    "periodos": "2023",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Exportación de frutas (miles ton) (Trimestres 2023). Uva tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Uva=450 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Donde exportación de frutas (miles ton) se compara por T1 a T4. Manzana registra 405 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Manzana en T3 es exactamente 405.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De exportación de frutas (miles ton). Cereza alcanza 663 en T4.",
          "respuesta": "F",
          "explicacion": "Cereza vale 510 en T4, no 663.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Exportación de frutas (miles ton). En T2, Kiwi supera en valor a Arándano.",
          "respuesta": "F",
          "explicacion": "En T2, Arándano=250 > Kiwi=190.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De exportación de frutas (miles ton). La caida de Uva entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De exportación de frutas (miles ton) (Trimestres 2023). La diferencia entre Uva y Manzana en T3 es de 15 unidades.",
          "respuesta": "V",
          "explicacion": "Uva(420) - Manzana(405) = 15.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Uva es la categoría dominante y Kiwi la más pequeña. En T2, Uva y Manzana suman 880.",
          "respuesta": "V",
          "explicacion": "470 + 410 = 880.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De exportación de frutas (miles ton). La diferencia entre Cereza y Arándano en T4 es de 247.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 190, no 247.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y Cereza muestra un crecimiento excepcional del 325%. El promedio en T4 es 523.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 402, no 523.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Exportación de frutas (miles ton). Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De exportación de frutas (miles ton) donde Cereza muestra un crecimiento excepcional del 325%. Especificamente, Cereza crecio un +325% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "Cereza paso de 120 a 510 = +325%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Cereza es la variable con mayor diferencia entre su valor maximo y minimo (rango: 390).",
          "respuesta": "V",
          "explicacion": "El rango de Cereza es efectivamente 390.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Exportación de frutas (miles ton). Arándano vario un +81% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Arándano vario +52%, no +81%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De exportación de frutas (miles ton) (Trimestres 2023). En T4, Kiwi es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Uva (510), no Kiwi.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde exportación de frutas (miles ton). El cambio de tendencia de Uva se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de exportación de frutas (miles ton). El punto de Uva en T3 marca exactamente 420.",
          "respuesta": "V",
          "explicacion": "El valor de Uva en T3 es 420.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre exportación de frutas (miles ton) donde los marcadores diferencian cada variable. Uva termina en T4 con el valor mas alto: 510.",
          "respuesta": "V",
          "explicacion": "Uva lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de exportación de frutas (miles ton) (Trimestres 2023). Manzana registra 533 en T2.",
          "respuesta": "F",
          "explicacion": "Manzana vale 410 en T2, no 533.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de exportación de frutas (miles ton) con marcadores distintos. Cereza muestra una tendencia decreciente.",
          "respuesta": "F",
          "explicacion": "Cereza crece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de exportación de frutas (miles ton). El valor inicial de Uva representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para exportación de frutas (miles ton). Cereza aumento en 390 unidades de T1 a T4 (+325%).",
          "respuesta": "V",
          "explicacion": "De 120 a 510: 390 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de exportación de frutas (miles ton). La curva de Cereza tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "Cereza crece +325%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre exportación de frutas (miles ton) (Trimestres 2023). Kiwi supera a Uva en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Uva mantiene valores superiores a Kiwi en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de exportación de frutas (miles ton). Arándano alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de Arándano esta en T4 (320).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre exportación de frutas (miles ton). La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de exportación de frutas (miles ton) donde Cereza muestra un crecimiento excepcional del 325%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para exportación de frutas (miles ton). Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Cereza, Arándano, Kiwi crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre exportación de frutas (miles ton). Manzana vario un +33% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Manzana es +10%, no +33%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de exportación de frutas (miles ton). En algun momento Kiwi logra superar a Uva.",
          "respuesta": "F",
          "explicacion": "Uva siempre esta por encima de Kiwi.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde exportación de frutas (miles ton). La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de exportación de frutas (miles ton). Uva representa el 28.1% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 28.1%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre exportación de frutas (miles ton) donde el total central es 6.590. Kiwi es la porcion mas pequena (12.4%).",
          "respuesta": "V",
          "explicacion": "Kiwi tiene solo el 12.4% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de exportación de frutas (miles ton). Manzana ocupa el 32.3% del total.",
          "respuesta": "F",
          "explicacion": "Manzana ocupa el 24.8%, no el 32.3%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre exportación de frutas (miles ton). Kiwi es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Uva (28.1%), no Kiwi.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de exportación de frutas (miles ton). Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 6.590 sobre exportación de frutas (miles ton). Uva y Manzana suman el 52.9% del total.",
          "respuesta": "V",
          "explicacion": "28.1% + 24.8% = 52.9%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de exportación de frutas (miles ton). La diferencia entre la mayor y menor porcion es de 15.6 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "28.1% - 12.4% = 15.6.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre exportación de frutas (miles ton). Cereza y Arándano juntos representan el 45.1% del total.",
          "respuesta": "F",
          "explicacion": "Suman 34.7%, no 45.1%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de exportación de frutas (miles ton) con centro 6.590. Exactamente 3 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 2 categoria(s) sobre 20%: Uva, Manzana, no 3.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre exportación de frutas (miles ton). El total de 6.590 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de exportación de frutas (miles ton). Uva es aproximadamente 2.3 veces mayor que Kiwi en valor absoluto.",
          "respuesta": "V",
          "explicacion": "1.850 / 820 = 2.3.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre exportación de frutas (miles ton). Las tres categorias principales (Uva, Manzana, Cereza) concentran el 71.5% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 71.5%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de exportación de frutas (miles ton) con centro 6.590. Si el total se duplicara, Arándano tendria 2.743.",
          "respuesta": "F",
          "explicacion": "Arándano duplicado seria 2.110, no 2.743.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre exportación de frutas (miles ton). La razon entre Manzana y Cereza es 4.3:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 1.3:1, no 4.3:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de exportación de frutas (miles ton). Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Producción de energía (gwh) (Años 2020-2023). Hidroeléctrica tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Hidroeléctrica=6.200 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Donde producción de energía (gwh) se compara por T1 a T4. Eólica registra 2.950 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Eólica en T3 es exactamente 2.950.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De producción de energía (gwh). Hidroeléctrica alcanza 8.515 en T4.",
          "respuesta": "F",
          "explicacion": "Hidroeléctrica vale 6.550 en T4, no 8.515.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Producción de energía (gwh). En T2, Gas Natural supera en valor a Carbón.",
          "respuesta": "F",
          "explicacion": "En T2, Carbón=4.700 > Gas Natural=3.500.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De producción de energía (gwh). La caida de Hidroeléctrica entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De producción de energía (gwh) (Años 2020-2023). La diferencia entre Solar y Eólica en T3 es de 350 unidades.",
          "respuesta": "V",
          "explicacion": "Solar(2.600) - Eólica(2.950) = 350.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Hidroeléctrica es la categoría dominante y Solar la más pequeña. En T2, Hidroeléctrica y Carbón suman 10.750.",
          "respuesta": "V",
          "explicacion": "6.050 + 4.700 = 10.750.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De producción de energía (gwh). La diferencia entre Hidroeléctrica y Carbón en T4 es de 3.575.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 2.750, no 3.575.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y Solar muestra un crecimiento excepcional del 78%. El promedio en T4 es 5.239.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 4.030, no 5.239.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Producción de energía (gwh). Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De producción de energía (gwh) donde Solar muestra un crecimiento excepcional del 78%. Especificamente, Solar crecio un +78% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "Solar paso de 1.800 a 3.200 = +78%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Solar es la variable con mayor diferencia entre su valor maximo y minimo (rango: 1.400).",
          "respuesta": "V",
          "explicacion": "El rango de Solar es efectivamente 1.400.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Producción de energía (gwh). Carbón vario un -11% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Carbón vario -25%, no -11%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De producción de energía (gwh) (Años 2020-2023). En T4, Solar es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Hidroeléctrica (6.550), no Solar.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde producción de energía (gwh). El cambio de tendencia de Hidroeléctrica se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción de energía (gwh). El punto de Solar en T3 marca exactamente 2.600.",
          "respuesta": "V",
          "explicacion": "El valor de Solar en T3 es 2.600.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción de energía (gwh) donde los marcadores diferencian cada variable. Hidroeléctrica termina en T4 con el valor mas alto: 6.550.",
          "respuesta": "V",
          "explicacion": "Hidroeléctrica lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción de energía (gwh) (Años 2020-2023). Eólica registra 3.380 en T2.",
          "respuesta": "F",
          "explicacion": "Eólica vale 2.600 en T2, no 3.380.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción de energía (gwh) con marcadores distintos. Carbón muestra una tendencia creciente.",
          "respuesta": "F",
          "explicacion": "Carbón decrece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción de energía (gwh). El valor inicial de Hidroeléctrica representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para producción de energía (gwh). Hidroeléctrica aumento en 350 unidades de T1 a T4 (+6%).",
          "respuesta": "V",
          "explicacion": "De 6.200 a 6.550: 350 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción de energía (gwh). La curva de Solar tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "Solar crece +78%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción de energía (gwh) (Años 2020-2023). Solar supera a Hidroeléctrica en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Hidroeléctrica mantiene valores superiores a Solar en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción de energía (gwh). Carbón alcanza su punto maximo en T2.",
          "respuesta": "F",
          "explicacion": "El maximo de Carbón esta en T1 (5.100).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción de energía (gwh). La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción de energía (gwh) donde Solar muestra un crecimiento excepcional del 78%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para producción de energía (gwh). Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Solar, Eólica crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción de energía (gwh). Carbón vario un -53% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Carbón es -25%, no -53%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción de energía (gwh). En algun momento Solar logra superar a Hidroeléctrica.",
          "respuesta": "F",
          "explicacion": "Hidroeléctrica siempre esta por encima de Solar.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde producción de energía (gwh). La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de producción de energía (gwh). Hidroeléctrica representa el 32.5% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 32.5%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre producción de energía (gwh) donde el total central es 77.600. Solar es la porcion mas pequena (12.5%).",
          "respuesta": "V",
          "explicacion": "Solar tiene solo el 12.5% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de producción de energía (gwh). Eólica ocupa el 18.8% del total.",
          "respuesta": "F",
          "explicacion": "Eólica ocupa el 14.5%, no el 18.8%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre producción de energía (gwh). Solar es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Hidroeléctrica (32.5%), no Solar.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de producción de energía (gwh). Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 77.600 sobre producción de energía (gwh). Solar y Eólica suman el 27.0% del total.",
          "respuesta": "V",
          "explicacion": "12.5% + 14.5% = 27.0%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de producción de energía (gwh). La diferencia entre la mayor y menor porcion es de 20.0 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "32.5% - 12.5% = 20.0.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre producción de energía (gwh). Hidroeléctrica y Carbón juntos representan el 72.0% del total.",
          "respuesta": "F",
          "explicacion": "Suman 55.4%, no 72.0%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de producción de energía (gwh) con centro 77.600. Exactamente 3 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 2 categoria(s) sobre 20%: Hidroeléctrica, Carbón, no 3.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre producción de energía (gwh). El total de 77.600 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de producción de energía (gwh). Hidroeléctrica es aproximadamente 2.6 veces mayor que Solar en valor absoluto.",
          "respuesta": "V",
          "explicacion": "25.200 / 9.700 = 2.6.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre producción de energía (gwh). Las tres categorias principales (Hidroeléctrica, Carbón, Gas Natural) concentran el 73.0% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 73.0%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de producción de energía (gwh) con centro 77.600. Si el total se duplicara, Carbón tendria 46.280.",
          "respuesta": "F",
          "explicacion": "Carbón duplicado seria 35.600, no 46.280.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre producción de energía (gwh). La razon entre Eólica y Hidroeléctrica es 3.4:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 0.4:1, no 3.4:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de producción de energía (gwh). Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "2024",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Ventas de smartphones (miles unid) (Trimestres 2024). Samsung tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Samsung=780 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Donde ventas de smartphones (miles unid) se compara por T1 a T4. Apple registra 690 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Apple en T3 es exactamente 690.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De ventas de smartphones (miles unid). Xiaomi alcanza 793 en T4.",
          "respuesta": "F",
          "explicacion": "Xiaomi vale 610 en T4, no 793.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Ventas de smartphones (miles unid). En T2, Honor supera en valor a Motorola.",
          "respuesta": "F",
          "explicacion": "En T2, Motorola=230 > Honor=150.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De ventas de smartphones (miles unid). La caida de Samsung entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De ventas de smartphones (miles unid) (Trimestres 2024). La diferencia entre Samsung y Apple en T3 es de 100 unidades.",
          "respuesta": "V",
          "explicacion": "Samsung(790) - Apple(690) = 100.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Samsung es la categoría dominante y Honor la más pequeña. En T2, Samsung y Apple suman 1.510.",
          "respuesta": "V",
          "explicacion": "810 + 700 = 1.510.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De ventas de smartphones (miles unid). La diferencia entre Xiaomi y Motorola en T4 es de 455.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 350, no 455.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y Honor muestra un crecimiento excepcional del 62%. El promedio en T4 es 711.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 547, no 711.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Ventas de smartphones (miles unid). Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De ventas de smartphones (miles unid) donde Honor muestra un crecimiento excepcional del 62%. Especificamente, Honor crecio un +62% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "Honor paso de 120 a 195 = +62%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Apple es la variable con mayor diferencia entre su valor maximo y minimo (rango: 180).",
          "respuesta": "V",
          "explicacion": "El rango de Apple es efectivamente 180.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Ventas de smartphones (miles unid). Motorola vario un +44% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Motorola vario +24%, no +44%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De ventas de smartphones (miles unid) (Trimestres 2024). En T4, Honor es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Samsung (850), no Honor.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde ventas de smartphones (miles unid). El cambio de tendencia de Samsung se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de smartphones (miles unid). El punto de Samsung en T3 marca exactamente 790.",
          "respuesta": "V",
          "explicacion": "El valor de Samsung en T3 es 790.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre ventas de smartphones (miles unid) donde los marcadores diferencian cada variable. Samsung termina en T4 con el valor mas alto: 850.",
          "respuesta": "V",
          "explicacion": "Samsung lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de smartphones (miles unid) (Trimestres 2024). Apple registra 910 en T2.",
          "respuesta": "F",
          "explicacion": "Apple vale 700 en T2, no 910.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de smartphones (miles unid) con marcadores distintos. Xiaomi muestra una tendencia decreciente.",
          "respuesta": "F",
          "explicacion": "Xiaomi crece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de smartphones (miles unid). El valor inicial de Samsung representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para ventas de smartphones (miles unid). Xiaomi aumento en 90 unidades de T1 a T4 (+17%).",
          "respuesta": "V",
          "explicacion": "De 520 a 610: 90 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de smartphones (miles unid). La curva de Honor tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "Honor crece +62%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre ventas de smartphones (miles unid) (Trimestres 2024). Honor supera a Samsung en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Samsung mantiene valores superiores a Honor en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de smartphones (miles unid). Motorola alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de Motorola esta en T4 (260).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre ventas de smartphones (miles unid). La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de smartphones (miles unid) donde Honor muestra un crecimiento excepcional del 62%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para ventas de smartphones (miles unid). Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Xiaomi, Motorola, Honor crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre ventas de smartphones (miles unid). Samsung vario un +31% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Samsung es +9%, no +31%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de smartphones (miles unid). En algun momento Honor logra superar a Samsung.",
          "respuesta": "F",
          "explicacion": "Samsung siempre esta por encima de Honor.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde ventas de smartphones (miles unid). La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de ventas de smartphones (miles unid). Samsung representa el 32.5% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 32.5%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre ventas de smartphones (miles unid) donde el total central es 9.930. Honor es la porcion mas pequena (6.4%).",
          "respuesta": "V",
          "explicacion": "Honor tiene solo el 6.4% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de ventas de smartphones (miles unid). Apple ocupa el 37.3% del total.",
          "respuesta": "F",
          "explicacion": "Apple ocupa el 28.7%, no el 37.3%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre ventas de smartphones (miles unid). Honor es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Samsung (32.5%), no Honor.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de ventas de smartphones (miles unid). Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 9.930 sobre ventas de smartphones (miles unid). Samsung y Apple suman el 61.2% del total.",
          "respuesta": "V",
          "explicacion": "32.5% + 28.7% = 61.2%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de ventas de smartphones (miles unid). La diferencia entre la mayor y menor porcion es de 26.1 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "32.5% - 6.4% = 26.1.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre ventas de smartphones (miles unid). Xiaomi y Motorola juntos representan el 42.1% del total.",
          "respuesta": "F",
          "explicacion": "Suman 32.4%, no 42.1%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de ventas de smartphones (miles unid) con centro 9.930. Exactamente 4 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 3 categoria(s) sobre 20%: Samsung, Apple, Xiaomi, no 4.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre ventas de smartphones (miles unid). El total de 9.930 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de ventas de smartphones (miles unid). Samsung es aproximadamente 5.1 veces mayor que Honor en valor absoluto.",
          "respuesta": "V",
          "explicacion": "3.230 / 635 = 5.1.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre ventas de smartphones (miles unid). Las tres categorias principales (Samsung, Apple, Xiaomi) concentran el 84.1% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 84.1%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de ventas de smartphones (miles unid) con centro 9.930. Si el total se duplicara, Motorola tendria 2.457.",
          "respuesta": "F",
          "explicacion": "Motorola duplicado seria 1.890, no 2.457.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre ventas de smartphones (miles unid). La razon entre Apple y Xiaomi es 4.3:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 1.3:1, no 4.3:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de ventas de smartphones (miles unid). Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Producción audiovisual (proyectos) (Años 2021-2024). Publicidad tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Publicidad=180 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Donde producción audiovisual (proyectos) se compara por T1 a T4. Documentales registra 58 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Documentales en T3 es exactamente 58.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De producción audiovisual (proyectos). Videoclips alcanza 135 en T4.",
          "respuesta": "F",
          "explicacion": "Videoclips vale 104 en T4, no 135.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Producción audiovisual (proyectos). En T2, Series supera en valor a Cortometrajes.",
          "respuesta": "F",
          "explicacion": "En T2, Cortometrajes=34 > Series=15.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De producción audiovisual (proyectos). La caida de Publicidad entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De producción audiovisual (proyectos) (Años 2021-2024). La diferencia entre Publicidad y Documentales en T3 es de 182 unidades.",
          "respuesta": "V",
          "explicacion": "Publicidad(240) - Documentales(58) = 182.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Publicidad es la categoría dominante y Series la más pequeña. En T2, Publicidad y Videoclips suman 287.",
          "respuesta": "V",
          "explicacion": "205 + 82 = 287.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De producción audiovisual (proyectos). La diferencia entre Videoclips y Series en T4 es de 109.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 84, no 109.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y Series muestra un crecimiento excepcional del 67%. El promedio en T4 es 130.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 100, no 130.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Producción audiovisual (proyectos). Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De producción audiovisual (proyectos) donde Series muestra un crecimiento excepcional del 67%. Especificamente, Series crecio un +67% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "Series paso de 12 a 20 = +67%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Publicidad es la variable con mayor diferencia entre su valor maximo y minimo (rango: 85).",
          "respuesta": "V",
          "explicacion": "El rango de Publicidad es efectivamente 85.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Producción audiovisual (proyectos). Series vario un +100% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Series vario +67%, no +100%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De producción audiovisual (proyectos) (Años 2021-2024). En T4, Series es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Publicidad (265), no Series.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde producción audiovisual (proyectos). El cambio de tendencia de Publicidad se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción audiovisual (proyectos). El punto de Publicidad en T3 marca exactamente 240.",
          "respuesta": "V",
          "explicacion": "El valor de Publicidad en T3 es 240.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción audiovisual (proyectos) donde los marcadores diferencian cada variable. Publicidad termina en T4 con el valor mas alto: 265.",
          "respuesta": "V",
          "explicacion": "Publicidad lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción audiovisual (proyectos) (Años 2021-2024). Documentales registra 68 en T2.",
          "respuesta": "F",
          "explicacion": "Documentales vale 52 en T2, no 68.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción audiovisual (proyectos) con marcadores distintos. Publicidad muestra una tendencia decreciente.",
          "respuesta": "F",
          "explicacion": "Publicidad crece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción audiovisual (proyectos). El valor inicial de Publicidad representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para producción audiovisual (proyectos). Videoclips aumento en 29 unidades de T1 a T4 (+39%).",
          "respuesta": "V",
          "explicacion": "De 75 a 104: 29 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción audiovisual (proyectos). La curva de Series tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "Series crece +67%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción audiovisual (proyectos) (Años 2021-2024). Series supera a Publicidad en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Publicidad mantiene valores superiores a Series en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción audiovisual (proyectos). Series alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de Series esta en T4 (20).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción audiovisual (proyectos). La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción audiovisual (proyectos) donde Series muestra un crecimiento excepcional del 67%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para producción audiovisual (proyectos). Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Publicidad, Documentales, Videoclips, Series, Cortometrajes crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción audiovisual (proyectos). Videoclips vario un +70% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Videoclips es +39%, no +70%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción audiovisual (proyectos). En algun momento Series logra superar a Publicidad.",
          "respuesta": "F",
          "explicacion": "Publicidad siempre esta por encima de Series.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde producción audiovisual (proyectos). La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de producción audiovisual (proyectos). Publicidad representa el 53.2% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 53.2%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre producción audiovisual (proyectos) donde el total central es 1.672. Series es la porcion mas pequena (3.9%).",
          "respuesta": "V",
          "explicacion": "Series tiene solo el 3.9% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de producción audiovisual (proyectos). Documentales ocupa el 17.2% del total.",
          "respuesta": "F",
          "explicacion": "Documentales ocupa el 13.2%, no el 17.2%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre producción audiovisual (proyectos). Series es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Publicidad (53.2%), no Series.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de producción audiovisual (proyectos). Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 1.672 sobre producción audiovisual (proyectos). Publicidad y Documentales suman el 66.4% del total.",
          "respuesta": "V",
          "explicacion": "53.2% + 13.2% = 66.4%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de producción audiovisual (proyectos). La diferencia entre la mayor y menor porcion es de 49.3 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "53.2% - 3.9% = 49.3.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre producción audiovisual (proyectos). Videoclips y Series juntos representan el 32.3% del total.",
          "respuesta": "F",
          "explicacion": "Suman 24.9%, no 32.3%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de producción audiovisual (proyectos) con centro 1.672. Exactamente 3 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 2 categoria(s) sobre 20%: Publicidad, Videoclips, no 3.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre producción audiovisual (proyectos). El total de 1.672 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de producción audiovisual (proyectos). Publicidad es aproximadamente 13.7 veces mayor que Series en valor absoluto.",
          "respuesta": "V",
          "explicacion": "890 / 65 = 13.7.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre producción audiovisual (proyectos). Las tres categorias principales (Publicidad, Videoclips, Documentales) concentran el 87.4% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 87.4%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de producción audiovisual (proyectos) con centro 1.672. Si el total se duplicara, Series tendria 169.",
          "respuesta": "F",
          "explicacion": "Series duplicado seria 130, no 169.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre producción audiovisual (proyectos). La razon entre Documentales y Videoclips es 3.6:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 0.6:1, no 3.6:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de producción audiovisual (proyectos). Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "",
    "totalPreguntas": 44,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Temperatura promedio (°c) (Estaciones 2024). Norte tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Norte=28 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Donde temperatura promedio (°c) se compara por T1 a T4. Centro registra 12 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Centro en T3 es exactamente 12.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De temperatura promedio (°c). Sur alcanza 22 en T4.",
          "respuesta": "F",
          "explicacion": "Sur vale 17 en T4, no 22.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Temperatura promedio (°c). En T2, Patagonia supera en valor a Altiplano.",
          "respuesta": "F",
          "explicacion": "En T2, Altiplano=14 > Patagonia=8.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De temperatura promedio (°c). La caida de Norte entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De temperatura promedio (°c) (Estaciones 2024). La diferencia entre Norte y Centro en T3 es de 6 unidades.",
          "respuesta": "V",
          "explicacion": "Norte(18) - Centro(12) = 6.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Norte es la categoría dominante y Patagonia la más pequeña. En T2, Norte y Centro suman 37.",
          "respuesta": "V",
          "explicacion": "21 + 16 = 37.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De temperatura promedio (°c). La diferencia entre Sur y Patagonia en T4 es de 8.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 5, no 8.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y Patagonia es la única que decrece significativamente (-20%). El promedio en T4 es 25.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 19, no 25.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Temperatura promedio (°c). Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De temperatura promedio (°c) donde Patagonia es la única que decrece significativamente (-20%). Especificamente, Altiplano crecio un -5% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "Altiplano paso de 19 a 18 = -5%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Centro es la variable con mayor diferencia entre su valor maximo y minimo (rango: 12).",
          "respuesta": "V",
          "explicacion": "El rango de Centro es efectivamente 12.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Temperatura promedio (°c). Patagonia vario un -7% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Patagonia vario -20%, no -7%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De temperatura promedio (°c) (Estaciones 2024). En T4, Patagonia es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Norte (26), no Patagonia.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde temperatura promedio (°c). El cambio de tendencia de Norte se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de temperatura promedio (°c). El punto de Norte en T3 marca exactamente 18.",
          "respuesta": "V",
          "explicacion": "El valor de Norte en T3 es 18.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre temperatura promedio (°c) donde los marcadores diferencian cada variable. Norte termina en T4 con el valor mas alto: 26.",
          "respuesta": "V",
          "explicacion": "Norte lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de temperatura promedio (°c) (Estaciones 2024). Centro registra 21 en T2.",
          "respuesta": "F",
          "explicacion": "Centro vale 16 en T2, no 21.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre temperatura promedio (°c). Todos los valores de Sur son iguales entre si.",
          "respuesta": "F",
          "explicacion": "Sur varia entre 8 y 20.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de temperatura promedio (°c). El valor inicial de Norte representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para temperatura promedio (°c). Sur disminuyo en 3 unidades de T1 a T4 (-15%).",
          "respuesta": "V",
          "explicacion": "De 20 a 17: -3 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de temperatura promedio (°c). La curva de Altiplano tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "Altiplano crece -5%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre temperatura promedio (°c) (Estaciones 2024). Patagonia supera a Norte en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Norte mantiene valores superiores a Patagonia en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de temperatura promedio (°c). Patagonia alcanza su punto maximo en T2.",
          "respuesta": "F",
          "explicacion": "El maximo de Patagonia esta en T1 (15).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre temperatura promedio (°c). La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de temperatura promedio (°c) donde Patagonia es la única que decrece significativamente (-20%). Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre temperatura promedio (°c). Patagonia vario un -46% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Patagonia es -20%, no -46%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de temperatura promedio (°c). En algun momento Patagonia logra superar a Norte.",
          "respuesta": "F",
          "explicacion": "Norte siempre esta por encima de Patagonia.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde temperatura promedio (°c). La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de temperatura promedio (°c). Norte representa el 28.7% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 28.7%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre temperatura promedio (°c) donde el total central es 324. Patagonia es la porcion mas pequena (11.7%).",
          "respuesta": "V",
          "explicacion": "Patagonia tiene solo el 11.7% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de temperatura promedio (°c). Centro ocupa el 29.7% del total.",
          "respuesta": "F",
          "explicacion": "Centro ocupa el 22.8%, no el 29.7%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre temperatura promedio (°c). Patagonia es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Norte (28.7%), no Patagonia.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de temperatura promedio (°c). Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 324 sobre temperatura promedio (°c). Norte y Centro suman el 51.5% del total.",
          "respuesta": "V",
          "explicacion": "28.7% + 22.8% = 51.5%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de temperatura promedio (°c). La diferencia entre la mayor y menor porcion es de 17.0 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "28.7% - 11.7% = 17.0.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre temperatura promedio (°c). Sur y Patagonia juntos representan el 38.5% del total.",
          "respuesta": "F",
          "explicacion": "Suman 29.6%, no 38.5%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de temperatura promedio (°c) con centro 324. Exactamente 3 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 2 categoria(s) sobre 20%: Norte, Centro, no 3.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre temperatura promedio (°c). El total de 324 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de temperatura promedio (°c). Norte es aproximadamente 2.4 veces mayor que Patagonia en valor absoluto.",
          "respuesta": "V",
          "explicacion": "93 / 38 = 2.4.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre temperatura promedio (°c). Las tres categorias principales (Norte, Centro, Altiplano) concentran el 70.4% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 70.4%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de temperatura promedio (°c) con centro 324. Si el total se duplicara, Patagonia tendria 99.",
          "respuesta": "F",
          "explicacion": "Patagonia duplicado seria 76, no 99.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre temperatura promedio (°c). La razon entre Centro y Sur es 4.3:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 1.3:1, no 4.3:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de temperatura promedio (°c). Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Población urbana (millones) (Años 2020-2023). Santiago tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Santiago=7 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Donde población urbana (millones) se compara por T1 a T4. Concepción registra 1 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Concepción en T3 es exactamente 1.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De población urbana (millones). Valparaíso alcanza 4 en T4.",
          "respuesta": "F",
          "explicacion": "Valparaíso vale 1 en T4, no 4.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Población urbana (millones). En T2, Temuco supera en valor a La Serena.",
          "respuesta": "F",
          "explicacion": "En T2, La Serena=0 > Temuco=0.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De población urbana (millones). La caida de Santiago entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De población urbana (millones) (Años 2020-2023). La diferencia entre Santiago y Concepción en T3 es de 6 unidades.",
          "respuesta": "V",
          "explicacion": "Santiago(7) - Concepción(1) = 6.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Santiago es la categoría dominante y Temuco la más pequeña. En T2, Santiago y Concepción suman 8.",
          "respuesta": "V",
          "explicacion": "7 + 1 = 8.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De población urbana (millones). La diferencia entre Valparaíso y La Serena en T4 es de 4.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 1, no 4.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y las variables tienen crecimientos moderados entre 3% y 10%. El promedio en T4 es 5.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 2, no 5.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Población urbana (millones). Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De población urbana (millones) donde las variables tienen crecimientos moderados entre 3% y 10%. Especificamente, La Serena crecio un +10% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "La Serena paso de 0 a 0 = +10%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Santiago es la variable con mayor diferencia entre su valor maximo y minimo (rango: 0).",
          "respuesta": "V",
          "explicacion": "El rango de Santiago es efectivamente 0.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Población urbana (millones). La Serena vario un +26% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "La Serena vario +10%, no +26%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De población urbana (millones) (Años 2020-2023). En T4, Temuco es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Santiago (7), no Temuco.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde población urbana (millones). El cambio de tendencia de Santiago se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de población urbana (millones). El punto de Santiago en T3 marca exactamente 7.",
          "respuesta": "V",
          "explicacion": "El valor de Santiago en T3 es 7.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre población urbana (millones) donde los marcadores diferencian cada variable. Santiago termina en T4 con el valor mas alto: 7.",
          "respuesta": "V",
          "explicacion": "Santiago lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de población urbana (millones) (Años 2020-2023). Concepción registra 4 en T2.",
          "respuesta": "F",
          "explicacion": "Concepción vale 1 en T2, no 4.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de población urbana (millones) con marcadores distintos. Santiago muestra una tendencia decreciente.",
          "respuesta": "F",
          "explicacion": "Santiago crece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de población urbana (millones). El valor inicial de Santiago representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para población urbana (millones). Valparaíso aumento en 0 unidades de T1 a T4 (+3%).",
          "respuesta": "V",
          "explicacion": "De 1 a 1: 0 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de población urbana (millones). La curva de La Serena tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "La Serena crece +10%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre población urbana (millones) (Años 2020-2023). Temuco supera a Santiago en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Santiago mantiene valores superiores a Temuco en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de población urbana (millones). La Serena alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de La Serena esta en T4 (0).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre población urbana (millones). La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de población urbana (millones) donde las variables tienen crecimientos moderados entre 3% y 10%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para población urbana (millones). Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Santiago, Concepción, Valparaíso, La Serena, Temuco crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre población urbana (millones). Valparaíso vario un +24% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Valparaíso es +3%, no +24%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de población urbana (millones). En algun momento Temuco logra superar a Santiago.",
          "respuesta": "F",
          "explicacion": "Santiago siempre esta por encima de Temuco.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde población urbana (millones). La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de población urbana (millones). Santiago representa el 70.7% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 70.7%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre población urbana (millones) donde el total central es 39. Temuco es la porcion mas pequena (3.8%).",
          "respuesta": "V",
          "explicacion": "Temuco tiene solo el 3.8% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de población urbana (millones). Concepción ocupa el 14.2% del total.",
          "respuesta": "F",
          "explicacion": "Concepción ocupa el 10.9%, no el 14.2%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre población urbana (millones). Temuco es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Santiago (70.7%), no Temuco.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de población urbana (millones). Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 39 sobre población urbana (millones). Santiago y Concepción suman el 81.7% del total.",
          "respuesta": "V",
          "explicacion": "70.7% + 10.9% = 81.7%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de población urbana (millones). La diferencia entre la mayor y menor porcion es de 66.9 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "70.7% - 3.8% = 66.9.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre población urbana (millones). Valparaíso y La Serena juntos representan el 18.9% del total.",
          "respuesta": "F",
          "explicacion": "Suman 14.5%, no 18.9%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de población urbana (millones) con centro 39. Exactamente 2 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 1 categoria(s) sobre 20%: Santiago, no 2.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre población urbana (millones). El total de 39 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de población urbana (millones). Santiago es aproximadamente 18.5 veces mayor que Temuco en valor absoluto.",
          "respuesta": "V",
          "explicacion": "28 / 2 = 18.5.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre población urbana (millones). Las tres categorias principales (Santiago, Concepción, Valparaíso) concentran el 91.8% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 91.8%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de población urbana (millones) con centro 39. Si el total se duplicara, La Serena tendria 6.",
          "respuesta": "F",
          "explicacion": "La Serena duplicado seria 3, no 6.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre población urbana (millones). La razon entre Concepción y Valparaíso es 4.1:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 1.1:1, no 4.1:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de población urbana (millones). Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Matrículas universitarias (Años 2021-2024). Ingeniería tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Ingeniería=12.400 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Donde matrículas universitarias se compara por T1 a T4. Medicina registra 5.690 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Medicina en T3 es exactamente 5.690.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De matrículas universitarias. Derecho alcanza 5.798 en T4.",
          "respuesta": "F",
          "explicacion": "Derecho vale 4.460 en T4, no 5.798.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Matrículas universitarias. En T2, Periodismo supera en valor a Arquitectura.",
          "respuesta": "F",
          "explicacion": "En T2, Arquitectura=2.200 > Periodismo=1.420.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De matrículas universitarias. La caida de Ingeniería entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De matrículas universitarias (Años 2021-2024). La diferencia entre Ingeniería y Medicina en T3 es de 7.410 unidades.",
          "respuesta": "V",
          "explicacion": "Ingeniería(13.100) - Medicina(5.690) = 7.410.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Ingeniería es la categoría dominante y Periodismo la más pequeña. En T2, Ingeniería y Medicina suman 18.310.",
          "respuesta": "V",
          "explicacion": "12.750 + 5.560 = 18.310.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De matrículas universitarias. La diferencia entre Derecho y Arquitectura en T4 es de 2.730.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 2.100, no 2.730.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y las variables tienen crecimientos moderados entre -5% y 12%. El promedio en T4 es 7.155.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 5.504, no 7.155.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Matrículas universitarias. Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De matrículas universitarias donde las variables tienen crecimientos moderados entre -5% y 12%. Especificamente, Arquitectura crecio un +12% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "Arquitectura paso de 2.100 a 2.360 = +12%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Ingeniería es la variable con mayor diferencia entre su valor maximo y minimo (rango: 1.120).",
          "respuesta": "V",
          "explicacion": "El rango de Ingeniería es efectivamente 1.120.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Matrículas universitarias. Arquitectura vario un +29% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Arquitectura vario +12%, no +29%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De matrículas universitarias (Años 2021-2024). En T4, Periodismo es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Ingeniería (13.520), no Periodismo.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde matrículas universitarias. El cambio de tendencia de Ingeniería se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de matrículas universitarias. El punto de Ingeniería en T3 marca exactamente 13.100.",
          "respuesta": "V",
          "explicacion": "El valor de Ingeniería en T3 es 13.100.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre matrículas universitarias donde los marcadores diferencian cada variable. Ingeniería termina en T4 con el valor mas alto: 13.520.",
          "respuesta": "V",
          "explicacion": "Ingeniería lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de matrículas universitarias (Años 2021-2024). Medicina registra 7.228 en T2.",
          "respuesta": "F",
          "explicacion": "Medicina vale 5.560 en T2, no 7.228.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de matrículas universitarias con marcadores distintos. Periodismo muestra una tendencia creciente.",
          "respuesta": "F",
          "explicacion": "Periodismo decrece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de matrículas universitarias. El valor inicial de Ingeniería representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para matrículas universitarias. Derecho aumento en 160 unidades de T1 a T4 (+4%).",
          "respuesta": "V",
          "explicacion": "De 4.300 a 4.460: 160 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de matrículas universitarias. La curva de Arquitectura tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "Arquitectura crece +12%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre matrículas universitarias (Años 2021-2024). Periodismo supera a Ingeniería en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Ingeniería mantiene valores superiores a Periodismo en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de matrículas universitarias. Arquitectura alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de Arquitectura esta en T4 (2.360).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre matrículas universitarias. La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de matrículas universitarias donde las variables tienen crecimientos moderados entre -5% y 12%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para matrículas universitarias. Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Ingeniería, Medicina, Arquitectura crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre matrículas universitarias. Periodismo vario un -26% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Periodismo es -5%, no -26%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de matrículas universitarias. En algun momento Periodismo logra superar a Ingeniería.",
          "respuesta": "F",
          "explicacion": "Ingeniería siempre esta por encima de Periodismo.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde matrículas universitarias. La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de matrículas universitarias. Ingeniería representa el 48.7% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 48.7%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre matrículas universitarias donde el total central es 106.200. Periodismo es la porcion mas pequena (5.3%).",
          "respuesta": "V",
          "explicacion": "Periodismo tiene solo el 5.3% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de matrículas universitarias. Medicina ocupa el 27.5% del total.",
          "respuesta": "F",
          "explicacion": "Medicina ocupa el 21.1%, no el 27.5%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre matrículas universitarias. Periodismo es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Ingeniería (48.7%), no Periodismo.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de matrículas universitarias. Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 106.200 sobre matrículas universitarias. Ingeniería y Medicina suman el 69.9% del total.",
          "respuesta": "V",
          "explicacion": "48.7% + 21.1% = 69.9%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de matrículas universitarias. La diferencia entre la mayor y menor porcion es de 43.4 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "48.7% - 5.3% = 43.4.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre matrículas universitarias. Derecho y Arquitectura juntos representan el 32.2% del total.",
          "respuesta": "F",
          "explicacion": "Suman 24.8%, no 32.2%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de matrículas universitarias con centro 106.200. Exactamente 3 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 2 categoria(s) sobre 20%: Ingeniería, Medicina, no 3.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre matrículas universitarias. El total de 106.200 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de matrículas universitarias. Ingeniería es aproximadamente 9.2 veces mayor que Periodismo en valor absoluto.",
          "respuesta": "V",
          "explicacion": "51.770 / 5.650 = 9.2.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre matrículas universitarias. Las tres categorias principales (Ingeniería, Medicina, Derecho) concentran el 86.3% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 86.3%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de matrículas universitarias con centro 106.200. Si el total se duplicara, Arquitectura tendria 23.244.",
          "respuesta": "F",
          "explicacion": "Arquitectura duplicado seria 17.880, no 23.244.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre matrículas universitarias. La razon entre Medicina y Derecho es 4.3:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 1.3:1, no 4.3:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de matrículas universitarias. Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "2024",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Turismo internacional (miles) (Trimestres 2024). Argentina tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Argentina=420 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Donde turismo internacional (miles) se compara por T1 a T4. Brasil registra 235 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Brasil en T3 es exactamente 235.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De turismo internacional (miles). EE.UU. alcanza 182 en T4.",
          "respuesta": "F",
          "explicacion": "EE.UU. vale 140 en T4, no 182.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Turismo internacional (miles). En T2, Europa supera en valor a Perú.",
          "respuesta": "F",
          "explicacion": "En T2, Perú=175 > Europa=145.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De turismo internacional (miles). La caida de Argentina entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De turismo internacional (miles) (Trimestres 2024). La diferencia entre Argentina y Brasil en T3 es de 275 unidades.",
          "respuesta": "V",
          "explicacion": "Argentina(510) - Brasil(235) = 275.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Argentina es la categoría dominante y EE.UU. la más pequeña. En T2, Argentina y Brasil suman 690.",
          "respuesta": "V",
          "explicacion": "480 + 210 = 690.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De turismo internacional (miles). La diferencia entre EE.UU. y Perú en T4 es de 65.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 50, no 65.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y EE.UU. muestra un crecimiento excepcional del 47%. El promedio en T4 es 344.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 265, no 344.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Turismo internacional (miles). Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De turismo internacional (miles) donde EE.UU. muestra un crecimiento excepcional del 47%. Especificamente, EE.UU. crecio un +47% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "EE.UU. paso de 95 a 140 = +47%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Argentina es la variable con mayor diferencia entre su valor maximo y minimo (rango: 140).",
          "respuesta": "V",
          "explicacion": "El rango de Argentina es efectivamente 140.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Turismo internacional (miles). Perú vario un +37% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Perú vario +19%, no +37%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De turismo internacional (miles) (Trimestres 2024). En T4, EE.UU. es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Argentina (560), no EE.UU..",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde turismo internacional (miles). El cambio de tendencia de Argentina se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de turismo internacional (miles). El punto de Argentina en T3 marca exactamente 510.",
          "respuesta": "V",
          "explicacion": "El valor de Argentina en T3 es 510.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre turismo internacional (miles) donde los marcadores diferencian cada variable. Argentina termina en T4 con el valor mas alto: 560.",
          "respuesta": "V",
          "explicacion": "Argentina lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de turismo internacional (miles) (Trimestres 2024). Brasil registra 273 en T2.",
          "respuesta": "F",
          "explicacion": "Brasil vale 210 en T2, no 273.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de turismo internacional (miles) con marcadores distintos. Argentina muestra una tendencia decreciente.",
          "respuesta": "F",
          "explicacion": "Argentina crece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de turismo internacional (miles). El valor inicial de Argentina representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para turismo internacional (miles). EE.UU. aumento en 45 unidades de T1 a T4 (+47%).",
          "respuesta": "V",
          "explicacion": "De 95 a 140: 45 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de turismo internacional (miles). La curva de EE.UU. tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "EE.UU. crece +47%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre turismo internacional (miles) (Trimestres 2024). EE.UU. supera a Argentina en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Argentina mantiene valores superiores a EE.UU. en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de turismo internacional (miles). Perú alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de Perú esta en T4 (190).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre turismo internacional (miles). La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de turismo internacional (miles) donde EE.UU. muestra un crecimiento excepcional del 47%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para turismo internacional (miles). Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Argentina, Brasil, EE.UU., Perú, Europa crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre turismo internacional (miles). Perú vario un +44% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Perú es +19%, no +44%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de turismo internacional (miles). En algun momento EE.UU. logra superar a Argentina.",
          "respuesta": "F",
          "explicacion": "Argentina siempre esta por encima de EE.UU..",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde turismo internacional (miles). La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de turismo internacional (miles). Argentina representa el 42.4% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 42.4%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre turismo internacional (miles) donde el total central es 4.642. EE.UU. es la porcion mas pequena (10.1%).",
          "respuesta": "V",
          "explicacion": "EE.UU. tiene solo el 10.1% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de turismo internacional (miles). Brasil ocupa el 24.8% del total.",
          "respuesta": "F",
          "explicacion": "Brasil ocupa el 19.1%, no el 24.8%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre turismo internacional (miles). EE.UU. es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Argentina (42.4%), no EE.UU..",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de turismo internacional (miles). Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 4.642 sobre turismo internacional (miles). Argentina y Brasil suman el 61.5% del total.",
          "respuesta": "V",
          "explicacion": "42.4% + 19.1% = 61.5%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de turismo internacional (miles). La diferencia entre la mayor y menor porcion es de 32.3 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "42.4% - 10.1% = 32.3.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre turismo internacional (miles). EE.UU. y Perú juntos representan el 33.0% del total.",
          "respuesta": "F",
          "explicacion": "Suman 25.4%, no 33.0%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de turismo internacional (miles) con centro 4.642. Exactamente 2 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 1 categoria(s) sobre 20%: Argentina, no 2.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre turismo internacional (miles). El total de 4.642 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de turismo internacional (miles). Argentina es aproximadamente 4.2 veces mayor que EE.UU. en valor absoluto.",
          "respuesta": "V",
          "explicacion": "1.970 / 470 = 4.2.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre turismo internacional (miles). Las tres categorias principales (Argentina, Brasil, Perú) concentran el 76.7% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 76.7%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de turismo internacional (miles) con centro 4.642. Si el total se duplicara, Perú tendria 1.838.",
          "respuesta": "F",
          "explicacion": "Perú duplicado seria 1.414, no 1.838.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre turismo internacional (miles). La razon entre Brasil y EE.UU. es 4.9:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 1.9:1, no 4.9:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de turismo internacional (miles). Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Consumo de agua (hm3) (Años 2020-2023). Agricultura tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Agricultura=720 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Donde consumo de agua (hm3) se compara por T1 a T4. Industria registra 248 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Industria en T3 es exactamente 248.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De consumo de agua (hm3). Minería alcanza 426 en T4.",
          "respuesta": "F",
          "explicacion": "Minería vale 328 en T4, no 426.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Consumo de agua (hm3). En T2, Servicios supera en valor a Hogares.",
          "respuesta": "F",
          "explicacion": "En T2, Hogares=184 > Servicios=98.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De consumo de agua (hm3). La caida de Agricultura entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De consumo de agua (hm3) (Años 2020-2023). La diferencia entre Agricultura y Industria en T3 es de 442 unidades.",
          "respuesta": "V",
          "explicacion": "Agricultura(690) - Industria(248) = 442.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Agricultura es la categoría dominante y Servicios la más pequeña. En T2, Agricultura y Minería suman 1.020.",
          "respuesta": "V",
          "explicacion": "705 + 315 = 1.020.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De consumo de agua (hm3). La diferencia entre Minería y Hogares en T4 es de 177.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 136, no 177.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y las variables tienen crecimientos moderados entre -6% y 9%. El promedio en T4 es 403.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 310, no 403.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Consumo de agua (hm3). Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De consumo de agua (hm3) donde las variables tienen crecimientos moderados entre -6% y 9%. Especificamente, Servicios crecio un +9% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "Servicios paso de 95 a 104 = +9%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Agricultura es la variable con mayor diferencia entre su valor maximo y minimo (rango: 45).",
          "respuesta": "V",
          "explicacion": "El rango de Agricultura es efectivamente 45.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Consumo de agua (hm3). Hogares vario un +22% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Hogares vario +7%, no +22%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De consumo de agua (hm3) (Años 2020-2023). En T4, Servicios es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Agricultura (675), no Servicios.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde consumo de agua (hm3). El cambio de tendencia de Agricultura se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de consumo de agua (hm3). El punto de Agricultura en T3 marca exactamente 690.",
          "respuesta": "V",
          "explicacion": "El valor de Agricultura en T3 es 690.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre consumo de agua (hm3) donde los marcadores diferencian cada variable. Agricultura termina en T4 con el valor mas alto: 675.",
          "respuesta": "V",
          "explicacion": "Agricultura lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de consumo de agua (hm3) (Años 2020-2023). Industria registra 318 en T2.",
          "respuesta": "F",
          "explicacion": "Industria vale 245 en T2, no 318.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de consumo de agua (hm3) con marcadores distintos. Agricultura muestra una tendencia creciente.",
          "respuesta": "F",
          "explicacion": "Agricultura decrece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de consumo de agua (hm3). El valor inicial de Agricultura representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para consumo de agua (hm3). Minería aumento en 18 unidades de T1 a T4 (+6%).",
          "respuesta": "V",
          "explicacion": "De 310 a 328: 18 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de consumo de agua (hm3). La curva de Servicios tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "Servicios crece +9%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre consumo de agua (hm3) (Años 2020-2023). Servicios supera a Agricultura en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Agricultura mantiene valores superiores a Servicios en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de consumo de agua (hm3). Hogares alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de Hogares esta en T4 (192).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre consumo de agua (hm3). La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de consumo de agua (hm3) donde las variables tienen crecimientos moderados entre -6% y 9%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para consumo de agua (hm3). Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Industria, Minería, Hogares, Servicios crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre consumo de agua (hm3). Agricultura vario un -28% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Agricultura es -6%, no -28%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de consumo de agua (hm3). En algun momento Servicios logra superar a Agricultura.",
          "respuesta": "F",
          "explicacion": "Agricultura siempre esta por encima de Servicios.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde consumo de agua (hm3). La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de consumo de agua (hm3). Agricultura representa el 45.1% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 45.1%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre consumo de agua (hm3) donde el total central es 6.190. Servicios es la porcion mas pequena (6.4%).",
          "respuesta": "V",
          "explicacion": "Servicios tiene solo el 6.4% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de consumo de agua (hm3). Industria ocupa el 20.7% del total.",
          "respuesta": "F",
          "explicacion": "Industria ocupa el 15.9%, no el 20.7%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre consumo de agua (hm3). Servicios es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Agricultura (45.1%), no Servicios.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de consumo de agua (hm3). Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 6.190 sobre consumo de agua (hm3). Agricultura y Industria suman el 61.0% del total.",
          "respuesta": "V",
          "explicacion": "45.1% + 15.9% = 61.0%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de consumo de agua (hm3). La diferencia entre la mayor y menor porcion es de 38.6 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "45.1% - 6.4% = 38.6.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre consumo de agua (hm3). Minería y Hogares juntos representan el 42.4% del total.",
          "respuesta": "F",
          "explicacion": "Suman 32.6%, no 42.4%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de consumo de agua (hm3) con centro 6.190. Exactamente 3 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 2 categoria(s) sobre 20%: Agricultura, Minería, no 3.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre consumo de agua (hm3). El total de 6.190 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de consumo de agua (hm3). Agricultura es aproximadamente 7.0 veces mayor que Servicios en valor absoluto.",
          "respuesta": "V",
          "explicacion": "2.790 / 398 = 7.0.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre consumo de agua (hm3). Las tres categorias principales (Agricultura, Minería, Industria) concentran el 81.6% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 81.6%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de consumo de agua (hm3) con centro 6.190. Si el total se duplicara, Hogares tendria 1.934.",
          "respuesta": "F",
          "explicacion": "Hogares duplicado seria 1.488, no 1.934.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre consumo de agua (hm3). La razon entre Industria y Minería es 3.8:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 0.8:1, no 3.8:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de consumo de agua (hm3). Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Índice bursátil (Meses 2024). Mayo tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Mayo=5.140 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Donde índice bursátil se compara por T1 a T4. Febrero registra 5.075 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Febrero en T3 es exactamente 5.075.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De índice bursátil. Marzo alcanza 6.799 en T4.",
          "respuesta": "F",
          "explicacion": "Marzo vale 5.230 en T4, no 6.799.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Índice bursátil. En T2, Abril supera en valor a Mayo.",
          "respuesta": "F",
          "explicacion": "En T2, Mayo=5.220 > Abril=5.155.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De índice bursátil. La caida de Mayo entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De índice bursátil (Meses 2024). La diferencia entre Enero y Febrero en T3 es de 70 unidades.",
          "respuesta": "V",
          "explicacion": "Enero(5.005) - Febrero(5.075) = 70.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Mayo es la categoría dominante y Enero la más pequeña. En T2, Mayo y Abril suman 10.375.",
          "respuesta": "V",
          "explicacion": "5.220 + 5.155 = 10.375.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De índice bursátil. La diferencia entre Marzo y Abril en T4 es de 78.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 60, no 78.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y las variables tienen crecimientos moderados entre 4% y 5%. El promedio en T4 es 6.799.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 5.230, no 6.799.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Índice bursátil. Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De índice bursátil donde las variables tienen crecimientos moderados entre 4% y 5%. Especificamente, Enero crecio un +5% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "Enero paso de 4.850 a 5.090 = +5%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Enero es la variable con mayor diferencia entre su valor maximo y minimo (rango: 240).",
          "respuesta": "V",
          "explicacion": "El rango de Enero es efectivamente 240.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Índice bursátil. Abril vario un +18% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Abril vario +4%, no +18%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De índice bursátil (Meses 2024). En T4, Enero es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Mayo (5.380), no Enero.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde índice bursátil. El cambio de tendencia de Mayo se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de índice bursátil. El punto de Enero en T3 marca exactamente 5.005.",
          "respuesta": "V",
          "explicacion": "El valor de Enero en T3 es 5.005.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre índice bursátil donde los marcadores diferencian cada variable. Mayo termina en T4 con el valor mas alto: 5.380.",
          "respuesta": "V",
          "explicacion": "Mayo lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de índice bursátil (Meses 2024). Febrero registra 6.513 en T2.",
          "respuesta": "F",
          "explicacion": "Febrero vale 5.010 en T2, no 6.513.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de índice bursátil con marcadores distintos. Enero muestra una tendencia decreciente.",
          "respuesta": "F",
          "explicacion": "Enero crece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de índice bursátil. El valor inicial de Mayo representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para índice bursátil. Marzo aumento en 220 unidades de T1 a T4 (+4%).",
          "respuesta": "V",
          "explicacion": "De 5.010 a 5.230: 220 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de índice bursátil. La curva de Enero tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "Enero crece +5%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre índice bursátil (Meses 2024). Enero supera a Mayo en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Mayo mantiene valores superiores a Enero en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de índice bursátil. Abril alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de Abril esta en T4 (5.290).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre índice bursátil. La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de índice bursátil donde las variables tienen crecimientos moderados entre 4% y 5%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para índice bursátil. Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Enero, Febrero, Marzo, Abril, Mayo crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre índice bursátil. Abril vario un +25% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Abril es +4%, no +25%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de índice bursátil. En algun momento Enero logra superar a Mayo.",
          "respuesta": "F",
          "explicacion": "Mayo siempre esta por encima de Enero.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde índice bursátil. La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de índice bursátil. Mayo representa el 20.6% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 20.6%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre índice bursátil donde el total central es 102.315. Enero es la porcion mas pequena (19.4%).",
          "respuesta": "V",
          "explicacion": "Enero tiene solo el 19.4% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de índice bursátil. Febrero ocupa el 25.6% del total.",
          "respuesta": "F",
          "explicacion": "Febrero ocupa el 19.7%, no el 25.6%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre índice bursátil. Enero es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Mayo (20.6%), no Enero.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de índice bursátil. Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 102.315 sobre índice bursátil. Enero y Febrero suman el 39.1% del total.",
          "respuesta": "V",
          "explicacion": "19.4% + 19.7% = 39.1%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de índice bursátil. La diferencia entre la mayor y menor porcion es de 1.2 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "20.6% - 19.4% = 1.2.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre índice bursátil. Marzo y Abril juntos representan el 52.4% del total.",
          "respuesta": "F",
          "explicacion": "Suman 40.3%, no 52.4%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de índice bursátil con centro 102.315. Exactamente 4 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 3 categoria(s) sobre 20%: Marzo, Abril, Mayo, no 4.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre índice bursátil. El total de 102.315 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de índice bursátil. Mayo es aproximadamente 1.1 veces mayor que Enero en valor absoluto.",
          "respuesta": "V",
          "explicacion": "21.045 / 19.865 = 1.1.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre índice bursátil. Las tres categorias principales (Mayo, Abril, Marzo) concentran el 60.9% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 60.9%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de índice bursátil con centro 102.315. Si el total se duplicara, Abril tendria 53.898.",
          "respuesta": "F",
          "explicacion": "Abril duplicado seria 41.460, no 53.898.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre índice bursátil. La razon entre Febrero y Marzo es 4.0:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 1.0:1, no 4.0:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de índice bursátil. Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Producción de litio (ton) (Años 2020-2023). Salar A tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Salar A=82.000 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Donde producción de litio (ton) se compara por T1 a T4. Salar B registra 45.200 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Salar B en T3 es exactamente 45.200.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De producción de litio (ton). Salar C alcanza 28.730 en T4.",
          "respuesta": "F",
          "explicacion": "Salar C vale 22.100 en T4, no 28.730.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Producción de litio (ton). En T2, Salar E supera en valor a Salar D.",
          "respuesta": "F",
          "explicacion": "En T2, Salar D=10.400 > Salar E=5.800.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De producción de litio (ton). La caida de Salar A entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De producción de litio (ton) (Años 2020-2023). La diferencia entre Salar A y Salar B en T3 es de 46.300 unidades.",
          "respuesta": "V",
          "explicacion": "Salar A(91.500) - Salar B(45.200) = 46.300.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Salar A es la categoría dominante y Salar E la más pequeña. En T2, Salar A y Salar B suman 130.800.",
          "respuesta": "V",
          "explicacion": "87.000 + 43.800 = 130.800.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De producción de litio (ton). La diferencia entre Salar C y Salar D en T4 es de 13.390.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 10.300, no 13.390.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y Salar E muestra un crecimiento excepcional del 33%. El promedio en T4 es 47.476.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 36.520, no 47.476.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Producción de litio (ton). Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De producción de litio (ton) donde Salar E muestra un crecimiento excepcional del 33%. Especificamente, Salar E crecio un +33% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "Salar E paso de 5.200 a 6.900 = +33%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Salar A es la variable con mayor diferencia entre su valor maximo y minimo (rango: 12.800).",
          "respuesta": "V",
          "explicacion": "El rango de Salar A es efectivamente 12.800.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Producción de litio (ton). Salar D vario un +40% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Salar D vario +20%, no +40%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De producción de litio (ton) (Años 2020-2023). En T4, Salar E es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Salar A (94.800), no Salar E.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde producción de litio (ton). El cambio de tendencia de Salar A se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción de litio (ton). El punto de Salar A en T3 marca exactamente 91.500.",
          "respuesta": "V",
          "explicacion": "El valor de Salar A en T3 es 91.500.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción de litio (ton) donde los marcadores diferencian cada variable. Salar A termina en T4 con el valor mas alto: 94.800.",
          "respuesta": "V",
          "explicacion": "Salar A lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción de litio (ton) (Años 2020-2023). Salar B registra 56.940 en T2.",
          "respuesta": "F",
          "explicacion": "Salar B vale 43.800 en T2, no 56.940.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción de litio (ton) con marcadores distintos. Salar A muestra una tendencia decreciente.",
          "respuesta": "F",
          "explicacion": "Salar A crece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción de litio (ton). El valor inicial de Salar A representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para producción de litio (ton). Salar C aumento en 3.800 unidades de T1 a T4 (+21%).",
          "respuesta": "V",
          "explicacion": "De 18.300 a 22.100: 3.800 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción de litio (ton). La curva de Salar E tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "Salar E crece +33%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción de litio (ton) (Años 2020-2023). Salar E supera a Salar A en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Salar A mantiene valores superiores a Salar E en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción de litio (ton). Salar D alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de Salar D esta en T4 (11.800).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción de litio (ton). La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción de litio (ton) donde Salar E muestra un crecimiento excepcional del 33%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para producción de litio (ton). Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Salar A, Salar B, Salar C, Salar D, Salar E crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción de litio (ton). Salar B vario un +37% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Salar B es +13%, no +37%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción de litio (ton). En algun momento Salar E logra superar a Salar A.",
          "respuesta": "F",
          "explicacion": "Salar A siempre esta por encima de Salar E.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde producción de litio (ton). La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de producción de litio (ton). Salar A representa el 52.2% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 52.2%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre producción de litio (ton) donde el total central es 680.800. Salar E es la porcion mas pequena (3.6%).",
          "respuesta": "V",
          "explicacion": "Salar E tiene solo el 3.6% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de producción de litio (ton). Salar B ocupa el 33.9% del total.",
          "respuesta": "F",
          "explicacion": "Salar B ocupa el 26.1%, no el 33.9%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre producción de litio (ton). Salar E es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Salar A (52.2%), no Salar E.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de producción de litio (ton). Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 680.800 sobre producción de litio (ton). Salar A y Salar B suman el 78.3% del total.",
          "respuesta": "V",
          "explicacion": "52.2% + 26.1% = 78.3%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de producción de litio (ton). La diferencia entre la mayor y menor porcion es de 48.6 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "52.2% - 3.6% = 48.6.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre producción de litio (ton). Salar C y Salar D juntos representan el 23.6% del total.",
          "respuesta": "F",
          "explicacion": "Suman 18.2%, no 23.6%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de producción de litio (ton) con centro 680.800. Exactamente 3 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 2 categoria(s) sobre 20%: Salar A, Salar B, no 3.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre producción de litio (ton). El total de 680.800 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de producción de litio (ton). Salar A es aproximadamente 14.7 veces mayor que Salar E en valor absoluto.",
          "respuesta": "V",
          "explicacion": "355.300 / 24.200 = 14.7.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre producción de litio (ton). Las tres categorias principales (Salar A, Salar B, Salar C) concentran el 90.1% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 90.1%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de producción de litio (ton) con centro 680.800. Si el total se duplicara, Salar D tendria 112.060.",
          "respuesta": "F",
          "explicacion": "Salar D duplicado seria 86.200, no 112.060.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre producción de litio (ton). La razon entre Salar B y Salar C es 5.2:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 2.2:1, no 5.2:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de producción de litio (ton). Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Velocidad internet (mbps) (Años 2021-2024). Fibra tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Fibra=180 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Donde velocidad internet (mbps) se compara por T1 a T4. Cable registra 150 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Cable en T3 es exactamente 150.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De velocidad internet (mbps). 4G alcanza 55 en T4.",
          "respuesta": "F",
          "explicacion": "4G vale 42 en T4, no 55.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Velocidad internet (mbps). En T2, Satelital supera en valor a 5G.",
          "respuesta": "F",
          "explicacion": "En T2, 5G=240 > Satelital=60.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De velocidad internet (mbps). La caida de 5G entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De velocidad internet (mbps) (Años 2021-2024). La diferencia entre Fibra y Cable en T3 es de 170 unidades.",
          "respuesta": "V",
          "explicacion": "Fibra(320) - Cable(150) = 170.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde 5G es la categoría dominante y 4G la más pequeña. En T2, 5G y Fibra suman 480.",
          "respuesta": "V",
          "explicacion": "240 + 240 = 480.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De velocidad internet (mbps). La diferencia entre 4G y 5G en T4 es de 621.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 478, no 621.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y 5G muestra un crecimiento excepcional del 373%. El promedio en T4 es 332.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 255, no 332.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Velocidad internet (mbps). Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De velocidad internet (mbps) donde 5G muestra un crecimiento excepcional del 373%. Especificamente, 5G crecio un +373% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "5G paso de 110 a 520 = +373%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. 5G es la variable con mayor diferencia entre su valor maximo y minimo (rango: 410).",
          "respuesta": "V",
          "explicacion": "El rango de 5G es efectivamente 410.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Velocidad internet (mbps). 5G vario un +498% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "5G vario +373%, no +498%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De velocidad internet (mbps) (Años 2021-2024). En T4, 4G es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es 5G (520), no 4G.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde velocidad internet (mbps). El cambio de tendencia de 5G se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de velocidad internet (mbps). El punto de Fibra en T3 marca exactamente 320.",
          "respuesta": "V",
          "explicacion": "El valor de Fibra en T3 es 320.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre velocidad internet (mbps) donde los marcadores diferencian cada variable. 5G termina en T4 con el valor mas alto: 520.",
          "respuesta": "V",
          "explicacion": "5G lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de velocidad internet (mbps) (Años 2021-2024). Cable registra 176 en T2.",
          "respuesta": "F",
          "explicacion": "Cable vale 135 en T2, no 176.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de velocidad internet (mbps) con marcadores distintos. Fibra muestra una tendencia decreciente.",
          "respuesta": "F",
          "explicacion": "Fibra crece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de velocidad internet (mbps). El valor inicial de 5G representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para velocidad internet (mbps). 4G aumento en 10 unidades de T1 a T4 (+31%).",
          "respuesta": "V",
          "explicacion": "De 32 a 42: 10 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de velocidad internet (mbps). La curva de 5G tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "5G crece +373%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre velocidad internet (mbps) (Años 2021-2024). 4G supera a 5G en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "5G mantiene valores superiores a 4G en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de velocidad internet (mbps). 5G alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de 5G esta en T4 (520).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre velocidad internet (mbps). La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de velocidad internet (mbps) donde 5G muestra un crecimiento excepcional del 373%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para velocidad internet (mbps). Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Fibra, Cable, 4G, 5G, Satelital crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre velocidad internet (mbps). 4G vario un +60% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de 4G es +31%, no +60%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de velocidad internet (mbps). En algun momento 4G logra superar a 5G.",
          "respuesta": "F",
          "explicacion": "5G siempre esta por encima de 4G.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde velocidad internet (mbps). La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de velocidad internet (mbps). 5G representa el 36.5% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 36.5%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre velocidad internet (mbps) donde el total central es 3.451. 4G es la porcion mas pequena (4.3%).",
          "respuesta": "V",
          "explicacion": "4G tiene solo el 4.3% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de velocidad internet (mbps). Cable ocupa el 21.7% del total.",
          "respuesta": "F",
          "explicacion": "Cable ocupa el 16.7%, no el 21.7%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre velocidad internet (mbps). 4G es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es 5G (36.5%), no 4G.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de velocidad internet (mbps). Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 3.451 sobre velocidad internet (mbps). Fibra y Cable suman el 51.1% del total.",
          "respuesta": "V",
          "explicacion": "34.5% + 16.7% = 51.1%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de velocidad internet (mbps). La diferencia entre la mayor y menor porcion es de 32.2 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "36.5% - 4.3% = 32.2.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre velocidad internet (mbps). 4G y 5G juntos representan el 53.0% del total.",
          "respuesta": "F",
          "explicacion": "Suman 40.8%, no 53.0%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de velocidad internet (mbps) con centro 3.451. Exactamente 3 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 2 categoria(s) sobre 20%: Fibra, 5G, no 3.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre velocidad internet (mbps). El total de 3.451 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de velocidad internet (mbps). 5G es aproximadamente 8.5 veces mayor que 4G en valor absoluto.",
          "respuesta": "V",
          "explicacion": "1.260 / 148 = 8.5.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre velocidad internet (mbps). Las tres categorias principales (5G, Fibra, Cable) concentran el 87.7% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 87.7%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de velocidad internet (mbps) con centro 3.451. Si el total se duplicara, 5G tendria 3.276.",
          "respuesta": "F",
          "explicacion": "5G duplicado seria 2.520, no 3.276.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre velocidad internet (mbps). La razon entre Cable y 4G es 6.9:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 3.9:1, no 6.9:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de velocidad internet (mbps). Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "2024",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Asistencia al cine (miles) (Trimestres 2024). Acción tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Acción=420 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Donde asistencia al cine (miles) se compara por T1 a T4. Comedia registra 360 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Comedia en T3 es exactamente 360.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De asistencia al cine (miles). Drama alcanza 280 en T4.",
          "respuesta": "F",
          "explicacion": "Drama vale 215 en T4, no 280.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Asistencia al cine (miles). En T2, Terror supera en valor a Animación.",
          "respuesta": "F",
          "explicacion": "En T2, Animación=320 > Terror=175.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De asistencia al cine (miles). La caida de Acción entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De asistencia al cine (miles) (Trimestres 2024). La diferencia entre Acción y Comedia en T3 es de 150 unidades.",
          "respuesta": "V",
          "explicacion": "Acción(510) - Comedia(360) = 150.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Acción es la categoría dominante y Drama la más pequeña. En T2, Acción y Animación suman 800.",
          "respuesta": "V",
          "explicacion": "480 + 320 = 800.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De asistencia al cine (miles). La diferencia entre Drama y Animación en T4 es de 396.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 305, no 396.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y Animación muestra un crecimiento excepcional del 100%. El promedio en T4 es 506.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 389, no 506.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Asistencia al cine (miles). Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De asistencia al cine (miles) donde Animación muestra un crecimiento excepcional del 100%. Especificamente, Animación crecio un +100% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "Animación paso de 260 a 520 = +100%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Animación es la variable con mayor diferencia entre su valor maximo y minimo (rango: 260).",
          "respuesta": "V",
          "explicacion": "El rango de Animación es efectivamente 260.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Asistencia al cine (miles). Animación vario un +143% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Animación vario +100%, no +143%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De asistencia al cine (miles) (Trimestres 2024). En T4, Drama es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Acción (560), no Drama.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde asistencia al cine (miles). El cambio de tendencia de Acción se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de asistencia al cine (miles). El punto de Acción en T3 marca exactamente 510.",
          "respuesta": "V",
          "explicacion": "El valor de Acción en T3 es 510.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre asistencia al cine (miles) donde los marcadores diferencian cada variable. Acción termina en T4 con el valor mas alto: 560.",
          "respuesta": "V",
          "explicacion": "Acción lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de asistencia al cine (miles) (Trimestres 2024). Comedia registra 436 en T2.",
          "respuesta": "F",
          "explicacion": "Comedia vale 335 en T2, no 436.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de asistencia al cine (miles) con marcadores distintos. Acción muestra una tendencia decreciente.",
          "respuesta": "F",
          "explicacion": "Acción crece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de asistencia al cine (miles). El valor inicial de Acción representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para asistencia al cine (miles). Drama aumento en 35 unidades de T1 a T4 (+19%).",
          "respuesta": "V",
          "explicacion": "De 180 a 215: 35 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de asistencia al cine (miles). La curva de Animación tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "Animación crece +100%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre asistencia al cine (miles) (Trimestres 2024). Drama supera a Acción en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Acción mantiene valores superiores a Drama en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de asistencia al cine (miles). Animación alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de Animación esta en T4 (520).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre asistencia al cine (miles). La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de asistencia al cine (miles) donde Animación muestra un crecimiento excepcional del 100%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para asistencia al cine (miles). Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Acción, Comedia, Drama, Animación, Terror crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre asistencia al cine (miles). Drama vario un +45% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Drama es +19%, no +45%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de asistencia al cine (miles). En algun momento Drama logra superar a Acción.",
          "respuesta": "F",
          "explicacion": "Acción siempre esta por encima de Drama.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde asistencia al cine (miles). La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de asistencia al cine (miles). Acción representa el 30.5% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 30.5%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre asistencia al cine (miles) donde el total central es 6.465. Drama es la porcion mas pequena (12.2%).",
          "respuesta": "V",
          "explicacion": "Drama tiene solo el 12.2% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de asistencia al cine (miles). Comedia ocupa el 28.1% del total.",
          "respuesta": "F",
          "explicacion": "Comedia ocupa el 21.6%, no el 28.1%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre asistencia al cine (miles). Drama es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Acción (30.5%), no Drama.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de asistencia al cine (miles). Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 6.465 sobre asistencia al cine (miles). Acción y Comedia suman el 52.0% del total.",
          "respuesta": "V",
          "explicacion": "30.5% + 21.6% = 52.0%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de asistencia al cine (miles). La diferencia entre la mayor y menor porcion es de 18.3 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "30.5% - 12.2% = 18.3.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre asistencia al cine (miles). Drama y Animación juntos representan el 46.2% del total.",
          "respuesta": "F",
          "explicacion": "Suman 35.6%, no 46.2%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de asistencia al cine (miles) con centro 6.465. Exactamente 4 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 3 categoria(s) sobre 20%: Acción, Comedia, Animación, no 4.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre asistencia al cine (miles). El total de 6.465 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de asistencia al cine (miles). Acción es aproximadamente 2.5 veces mayor que Drama en valor absoluto.",
          "respuesta": "V",
          "explicacion": "1.970 / 790 = 2.5.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre asistencia al cine (miles). Las tres categorias principales (Acción, Animación, Comedia) concentran el 75.4% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 75.4%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de asistencia al cine (miles) con centro 6.465. Si el total se duplicara, Animación tendria 3.926.",
          "respuesta": "F",
          "explicacion": "Animación duplicado seria 3.020, no 3.926.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre asistencia al cine (miles). La razon entre Comedia y Drama es 4.8:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 1.8:1, no 4.8:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de asistencia al cine (miles). Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "2024",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Ventas de vehículos (Trimestres 2024). SUV tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "SUV=9.200 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Donde ventas de vehículos se compara por T1 a T4. Sedán registra 5.400 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Sedán en T3 es exactamente 5.400.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De ventas de vehículos. Pickup alcanza 5.213 en T4.",
          "respuesta": "F",
          "explicacion": "Pickup vale 4.010 en T4, no 5.213.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Ventas de vehículos. En T2, Eléctrico supera en valor a Híbrido.",
          "respuesta": "F",
          "explicacion": "En T2, Híbrido=1.520 > Eléctrico=1.150.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De ventas de vehículos. La caida de SUV entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De ventas de vehículos (Trimestres 2024). La diferencia entre SUV y Sedán en T3 es de 4.900 unidades.",
          "respuesta": "V",
          "explicacion": "SUV(10.300) - Sedán(5.400) = 4.900.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde SUV es la categoría dominante y Eléctrico la más pequeña. En T2, SUV y Sedán suman 15.050.",
          "respuesta": "V",
          "explicacion": "9.800 + 5.250 = 15.050.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De ventas de vehículos. La diferencia entre Pickup y Eléctrico en T4 es de 2.756.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 2.120, no 2.756.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y Eléctrico muestra un crecimiento excepcional del 130%. El promedio en T4 es 6.357.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 4.890, no 6.357.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Ventas de vehículos. Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De ventas de vehículos donde Eléctrico muestra un crecimiento excepcional del 130%. Especificamente, Eléctrico crecio un +130% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "Eléctrico paso de 820 a 1.890 = +130%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. SUV es la variable con mayor diferencia entre su valor maximo y minimo (rango: 1.700).",
          "respuesta": "V",
          "explicacion": "El rango de SUV es efectivamente 1.700.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Ventas de vehículos. Eléctrico vario un +183% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Eléctrico vario +130%, no +183%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De ventas de vehículos (Trimestres 2024). En T4, Eléctrico es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es SUV (10.900), no Eléctrico.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde ventas de vehículos. El cambio de tendencia de SUV se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de vehículos. El punto de SUV en T3 marca exactamente 10.300.",
          "respuesta": "V",
          "explicacion": "El valor de SUV en T3 es 10.300.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre ventas de vehículos donde los marcadores diferencian cada variable. SUV termina en T4 con el valor mas alto: 10.900.",
          "respuesta": "V",
          "explicacion": "SUV lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de vehículos (Trimestres 2024). Sedán registra 6.825 en T2.",
          "respuesta": "F",
          "explicacion": "Sedán vale 5.250 en T2, no 6.825.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de vehículos con marcadores distintos. SUV muestra una tendencia decreciente.",
          "respuesta": "F",
          "explicacion": "SUV crece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de vehículos. El valor inicial de SUV representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para ventas de vehículos. Pickup aumento en 610 unidades de T1 a T4 (+18%).",
          "respuesta": "V",
          "explicacion": "De 3.400 a 4.010: 610 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de vehículos. La curva de Eléctrico tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "Eléctrico crece +130%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre ventas de vehículos (Trimestres 2024). Eléctrico supera a SUV en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "SUV mantiene valores superiores a Eléctrico en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de vehículos. Eléctrico alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de Eléctrico esta en T4 (1.890).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre ventas de vehículos. La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de vehículos donde Eléctrico muestra un crecimiento excepcional del 130%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para ventas de vehículos. Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "SUV, Sedán, Pickup, Eléctrico, Híbrido crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre ventas de vehículos. Sedán vario un +32% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Sedán es +10%, no +32%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de vehículos. En algun momento Eléctrico logra superar a SUV.",
          "respuesta": "F",
          "explicacion": "SUV siempre esta por encima de Eléctrico.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde ventas de vehículos. La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de ventas de vehículos. SUV representa el 45.5% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 45.5%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre ventas de vehículos donde el total central es 88.330. Eléctrico es la porcion mas pequena (6.0%).",
          "respuesta": "V",
          "explicacion": "Eléctrico tiene solo el 6.0% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de ventas de vehículos. Sedán ocupa el 31.4% del total.",
          "respuesta": "F",
          "explicacion": "Sedán ocupa el 24.2%, no el 31.4%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre ventas de vehículos. Eléctrico es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es SUV (45.5%), no Eléctrico.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de ventas de vehículos. Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 88.330 sobre ventas de vehículos. SUV y Sedán suman el 69.7% del total.",
          "respuesta": "V",
          "explicacion": "45.5% + 24.2% = 69.7%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de ventas de vehículos. La diferencia entre la mayor y menor porcion es de 39.5 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "45.5% - 6.0% = 39.5.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre ventas de vehículos. Pickup y Eléctrico juntos representan el 29.7% del total.",
          "respuesta": "F",
          "explicacion": "Suman 22.8%, no 29.7%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de ventas de vehículos con centro 88.330. Exactamente 3 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 2 categoria(s) sobre 20%: SUV, Sedán, no 3.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre ventas de vehículos. El total de 88.330 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de ventas de vehículos. SUV es aproximadamente 7.5 veces mayor que Eléctrico en valor absoluto.",
          "respuesta": "V",
          "explicacion": "40.200 / 5.340 = 7.5.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre ventas de vehículos. Las tres categorias principales (SUV, Sedán, Pickup) concentran el 86.5% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 86.5%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de ventas de vehículos con centro 88.330. Si el total se duplicara, Eléctrico tendria 13.884.",
          "respuesta": "F",
          "explicacion": "Eléctrico duplicado seria 10.680, no 13.884.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre ventas de vehículos. La razon entre Sedán y Pickup es 4.4:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 1.4:1, no 4.4:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de ventas de vehículos. Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Producción agrícola (ton) (Años 2020-2023). Trigo tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Trigo=120.000 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Donde producción agrícola (ton) se compara por T1 a T4. Maíz registra 102.300 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Maíz en T3 es exactamente 102.300.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De producción agrícola (ton). Papa alcanza 117.130 en T4.",
          "respuesta": "F",
          "explicacion": "Papa vale 90.100 en T4, no 117.130.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Producción agrícola (ton). En T2, Quinoa supera en valor a Avena.",
          "respuesta": "F",
          "explicacion": "En T2, Avena=55.100 > Quinoa=5.200.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De producción agrícola (ton). La caida de Trigo entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De producción agrícola (ton) (Años 2020-2023). La diferencia entre Trigo y Maíz en T3 es de 24.200 unidades.",
          "respuesta": "V",
          "explicacion": "Trigo(126.500) - Maíz(102.300) = 24.200.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Trigo es la categoría dominante y Quinoa la más pequeña. En T2, Trigo y Maíz suman 223.500.",
          "respuesta": "V",
          "explicacion": "123.000 + 100.500 = 223.500.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De producción agrícola (ton). La diferencia entre Papa y Avena en T4 es de 42.770.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 32.900, no 42.770.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y las variables tienen crecimientos moderados entre 5% y 27%. El promedio en T4 es 100.672.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 77.440, no 100.672.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Producción agrícola (ton). Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De producción agrícola (ton) donde las variables tienen crecimientos moderados entre 5% y 27%. Especificamente, Quinoa crecio un +27% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "Quinoa paso de 4.800 a 6.100 = +27%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Trigo es la variable con mayor diferencia entre su valor maximo y minimo (rango: 9.000).",
          "respuesta": "V",
          "explicacion": "El rango de Trigo es efectivamente 9.000.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Producción agrícola (ton). Avena vario un +21% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Avena vario +6%, no +21%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De producción agrícola (ton) (Años 2020-2023). En T4, Quinoa es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Trigo (129.000), no Quinoa.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde producción agrícola (ton). El cambio de tendencia de Trigo se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción agrícola (ton). El punto de Trigo en T3 marca exactamente 126.500.",
          "respuesta": "V",
          "explicacion": "El valor de Trigo en T3 es 126.500.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción agrícola (ton) donde los marcadores diferencian cada variable. Trigo termina en T4 con el valor mas alto: 129.000.",
          "respuesta": "V",
          "explicacion": "Trigo lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción agrícola (ton) (Años 2020-2023). Maíz registra 130.650 en T2.",
          "respuesta": "F",
          "explicacion": "Maíz vale 100.500 en T2, no 130.650.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción agrícola (ton) con marcadores distintos. Trigo muestra una tendencia decreciente.",
          "respuesta": "F",
          "explicacion": "Trigo crece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción agrícola (ton). El valor inicial de Trigo representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para producción agrícola (ton). Papa aumento en 4.100 unidades de T1 a T4 (+5%).",
          "respuesta": "V",
          "explicacion": "De 86.000 a 90.100: 4.100 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción agrícola (ton). La curva de Quinoa tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "Quinoa crece +27%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción agrícola (ton) (Años 2020-2023). Quinoa supera a Trigo en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Trigo mantiene valores superiores a Quinoa en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción agrícola (ton). Avena alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de Avena esta en T4 (57.200).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción agrícola (ton). La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción agrícola (ton) donde las variables tienen crecimientos moderados entre 5% y 27%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para producción agrícola (ton). Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Trigo, Maíz, Papa, Avena, Quinoa crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción agrícola (ton). Papa vario un +26% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Papa es +5%, no +26%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción agrícola (ton). En algun momento Quinoa logra superar a Trigo.",
          "respuesta": "F",
          "explicacion": "Trigo siempre esta por encima de Quinoa.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde producción agrícola (ton). La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de producción agrícola (ton). Trigo representa el 33.2% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 33.2%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre producción agrícola (ton) donde el total central es 1.499.900. Quinoa es la porcion mas pequena (1.4%).",
          "respuesta": "V",
          "explicacion": "Quinoa tiene solo el 1.4% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de producción agrícola (ton). Maíz ocupa el 35.2% del total.",
          "respuesta": "F",
          "explicacion": "Maíz ocupa el 27.0%, no el 35.2%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre producción agrícola (ton). Quinoa es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Trigo (33.2%), no Quinoa.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de producción agrícola (ton). Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 1.499.900 sobre producción agrícola (ton). Trigo y Maíz suman el 60.3% del total.",
          "respuesta": "V",
          "explicacion": "33.2% + 27.0% = 60.3%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de producción agrícola (ton). La diferencia entre la mayor y menor porcion es de 31.8 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "33.2% - 1.4% = 31.8.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre producción agrícola (ton). Papa y Avena juntos representan el 49.8% del total.",
          "respuesta": "F",
          "explicacion": "Suman 38.3%, no 49.8%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de producción agrícola (ton) con centro 1.499.900. Exactamente 4 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 3 categoria(s) sobre 20%: Trigo, Maíz, Papa, no 4.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre producción agrícola (ton). El total de 1.499.900 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de producción agrícola (ton). Trigo es aproximadamente 23.0 veces mayor que Quinoa en valor absoluto.",
          "respuesta": "V",
          "explicacion": "498.500 / 21.700 = 23.0.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre producción agrícola (ton). Las tres categorias principales (Trigo, Maíz, Papa) concentran el 83.7% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 83.7%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de producción agrícola (ton) con centro 1.499.900. Si el total se duplicara, Avena tendria 577.980.",
          "respuesta": "F",
          "explicacion": "Avena duplicado seria 444.600, no 577.980.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre producción agrícola (ton). La razon entre Maíz y Papa es 4.2:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 1.2:1, no 4.2:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de producción agrícola (ton). Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Ventas de libros (Años 2021-2024). Novela tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Novela=18.000 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Historia registra 8.700 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Historia en T3 es exactamente 8.700.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De ventas de libros. Ciencia alcanza 8.515 en T4.",
          "respuesta": "F",
          "explicacion": "Ciencia vale 6.550 en T4, no 8.515.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Ventas de libros. En T2, Tecnología supera en valor a Infantil.",
          "respuesta": "F",
          "explicacion": "En T2, Infantil=9.600 > Tecnología=4.550.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De ventas de libros. La caida de Novela entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De ventas de libros (Años 2021-2024). La diferencia entre Novela y Historia en T3 es de 11.800 unidades.",
          "respuesta": "V",
          "explicacion": "Novela(20.500) - Historia(8.700) = 11.800.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Novela es la categoría dominante y Tecnología la más pequeña. En T2, Novela y Infantil suman 28.800.",
          "respuesta": "V",
          "explicacion": "19.200 + 9.600 = 28.800.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De ventas de libros. La diferencia entre Ciencia y Infantil en T4 es de 5.785.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 4.450, no 5.785.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y Tecnología muestra un crecimiento excepcional del 32%. El promedio en T4 es 13.858.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 10.660, no 13.858.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Ventas de libros. Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De ventas de libros donde Tecnología muestra un crecimiento excepcional del 32%. Especificamente, Tecnología crecio un +32% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "Tecnología paso de 4.100 a 5.400 = +32%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Novela es la variable con mayor diferencia entre su valor maximo y minimo (rango: 3.400).",
          "respuesta": "V",
          "explicacion": "El rango de Novela es efectivamente 3.400.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Ventas de libros. Infantil vario un +40% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Infantil vario +21%, no +40%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De ventas de libros (Años 2021-2024). En T4, Tecnología es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Novela (21.400), no Tecnología.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde ventas de libros. El cambio de tendencia de Novela se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de libros. El punto de Novela en T3 marca exactamente 20.500.",
          "respuesta": "V",
          "explicacion": "El valor de Novela en T3 es 20.500.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre ventas de libros donde los marcadores diferencian cada variable. Novela termina en T4 con el valor mas alto: 21.400.",
          "respuesta": "V",
          "explicacion": "Novela lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de libros (Años 2021-2024). Historia registra 11.050 en T2.",
          "respuesta": "F",
          "explicacion": "Historia vale 8.500 en T2, no 11.050.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de libros con marcadores distintos. Novela muestra una tendencia decreciente.",
          "respuesta": "F",
          "explicacion": "Novela crece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de libros. El valor inicial de Novela representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para ventas de libros. Ciencia aumento en 950 unidades de T1 a T4 (+17%).",
          "respuesta": "V",
          "explicacion": "De 5.600 a 6.550: 950 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de libros. La curva de Tecnología tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "Tecnología crece +32%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre ventas de libros (Años 2021-2024). Tecnología supera a Novela en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Novela mantiene valores superiores a Tecnología en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de libros. Infantil alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de Infantil esta en T4 (11.000).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre ventas de libros. La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de libros donde Tecnología muestra un crecimiento excepcional del 32%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para ventas de libros. Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Novela, Historia, Ciencia, Infantil, Tecnología crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre ventas de libros. Historia vario un +31% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Historia es +9%, no +31%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de ventas de libros. En algun momento Tecnología logra superar a Novela.",
          "respuesta": "F",
          "explicacion": "Novela siempre esta por encima de Tecnología.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde ventas de libros. La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de ventas de libros. Novela representa el 40.2% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 40.2%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre ventas de libros donde el total central es 196.650. Tecnología es la porcion mas pequena (9.6%).",
          "respuesta": "V",
          "explicacion": "Tecnología tiene solo el 9.6% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de ventas de libros. Historia ocupa el 22.7% del total.",
          "respuesta": "F",
          "explicacion": "Historia ocupa el 17.5%, no el 22.7%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre ventas de libros. Tecnología es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Novela (40.2%), no Tecnología.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de ventas de libros. Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 196.650 sobre ventas de libros. Novela y Historia suman el 57.7% del total.",
          "respuesta": "V",
          "explicacion": "40.2% + 17.5% = 57.7%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de ventas de libros. La diferencia entre la mayor y menor porcion es de 30.6 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "40.2% - 9.6% = 30.6.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre ventas de libros. Ciencia y Infantil juntos representan el 42.5% del total.",
          "respuesta": "F",
          "explicacion": "Suman 32.7%, no 42.5%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de ventas de libros con centro 196.650. Exactamente 3 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 2 categoria(s) sobre 20%: Novela, Infantil, no 3.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre ventas de libros. El total de 196.650 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de ventas de libros. Novela es aproximadamente 4.2 veces mayor que Tecnología en valor absoluto.",
          "respuesta": "V",
          "explicacion": "79.100 / 18.950 = 4.2.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre ventas de libros. Las tres categorias principales (Novela, Infantil, Historia) concentran el 78.0% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 78.0%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de ventas de libros con centro 196.650. Si el total se duplicara, Infantil tendria 104.000.",
          "respuesta": "F",
          "explicacion": "Infantil duplicado seria 80.000, no 104.000.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre ventas de libros. La razon entre Historia y Ciencia es 4.4:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 1.4:1, no 4.4:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de ventas de libros. Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Consumo eléctrico (gwh) (Meses Invierno). Minería tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Minería=1.450 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Donde consumo eléctrico (gwh) se compara por T1 a T4. Industrial registra 1.265 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Industrial en T3 es exactamente 1.265.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De consumo eléctrico (gwh). Comercial alcanza 897 en T4.",
          "respuesta": "F",
          "explicacion": "Comercial vale 690 en T4, no 897.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Consumo eléctrico (gwh). En T2, Público supera en valor a Minería.",
          "respuesta": "F",
          "explicacion": "En T2, Minería=1.465 > Público=220.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De consumo eléctrico (gwh). La caida de Minería entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De consumo eléctrico (gwh) (Meses Invierno). La diferencia entre Residencial y Industrial en T3 es de 325 unidades.",
          "respuesta": "V",
          "explicacion": "Residencial(940) - Industrial(1.265) = 325.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Minería es la categoría dominante y Público la más pequeña. En T2, Minería y Industrial suman 2.705.",
          "respuesta": "V",
          "explicacion": "1.465 + 1.240 = 2.705.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De consumo eléctrico (gwh). La diferencia entre Comercial y Minería en T4 es de 1.053.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 810, no 1.053.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y las variables tienen crecimientos moderados entre 3% y 10%. El promedio en T4 es 1.216.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 935, no 1.216.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Consumo eléctrico (gwh). Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De consumo eléctrico (gwh) donde las variables tienen crecimientos moderados entre 3% y 10%. Especificamente, Residencial crecio un +10% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "Residencial paso de 880 a 970 = +10%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Residencial es la variable con mayor diferencia entre su valor maximo y minimo (rango: 90).",
          "respuesta": "V",
          "explicacion": "El rango de Residencial es efectivamente 90.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Consumo eléctrico (gwh). Minería vario un +18% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Minería vario +3%, no +18%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De consumo eléctrico (gwh) (Meses Invierno). En T4, Público es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Minería (1.500), no Público.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde consumo eléctrico (gwh). El cambio de tendencia de Minería se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de consumo eléctrico (gwh). El punto de Residencial en T3 marca exactamente 940.",
          "respuesta": "V",
          "explicacion": "El valor de Residencial en T3 es 940.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre consumo eléctrico (gwh) donde los marcadores diferencian cada variable. Minería termina en T4 con el valor mas alto: 1.500.",
          "respuesta": "V",
          "explicacion": "Minería lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de consumo eléctrico (gwh) (Meses Invierno). Industrial registra 1.612 en T2.",
          "respuesta": "F",
          "explicacion": "Industrial vale 1.240 en T2, no 1.612.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de consumo eléctrico (gwh) con marcadores distintos. Residencial muestra una tendencia decreciente.",
          "respuesta": "F",
          "explicacion": "Residencial crece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de consumo eléctrico (gwh). El valor inicial de Minería representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para consumo eléctrico (gwh). Comercial aumento en 50 unidades de T1 a T4 (+8%).",
          "respuesta": "V",
          "explicacion": "De 640 a 690: 50 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de consumo eléctrico (gwh). La curva de Residencial tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "Residencial crece +10%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre consumo eléctrico (gwh) (Meses Invierno). Público supera a Minería en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Minería mantiene valores superiores a Público en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de consumo eléctrico (gwh). Minería alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de Minería esta en T4 (1.500).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre consumo eléctrico (gwh). La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de consumo eléctrico (gwh) donde las variables tienen crecimientos moderados entre 3% y 10%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para consumo eléctrico (gwh). Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Residencial, Industrial, Comercial, Minería, Público crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre consumo eléctrico (gwh). Minería vario un +24% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Minería es +3%, no +24%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de consumo eléctrico (gwh). En algun momento Público logra superar a Minería.",
          "respuesta": "F",
          "explicacion": "Minería siempre esta por encima de Público.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde consumo eléctrico (gwh). La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de consumo eléctrico (gwh). Minería representa el 32.5% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 32.5%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre consumo eléctrico (gwh) donde el total central es 18.153. Público es la porcion mas pequena (4.9%).",
          "respuesta": "V",
          "explicacion": "Público tiene solo el 4.9% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de consumo eléctrico (gwh). Industrial ocupa el 35.8% del total.",
          "respuesta": "F",
          "explicacion": "Industrial ocupa el 27.6%, no el 35.8%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre consumo eléctrico (gwh). Público es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Minería (32.5%), no Público.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de consumo eléctrico (gwh). Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 18.153 sobre consumo eléctrico (gwh). Residencial y Industrial suman el 48.0% del total.",
          "respuesta": "V",
          "explicacion": "20.4% + 27.6% = 48.0%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de consumo eléctrico (gwh). La diferencia entre la mayor y menor porcion es de 27.5 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "32.5% - 4.9% = 27.5.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre consumo eléctrico (gwh). Comercial y Minería juntos representan el 61.2% del total.",
          "respuesta": "F",
          "explicacion": "Suman 47.1%, no 61.2%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de consumo eléctrico (gwh) con centro 18.153. Exactamente 4 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 3 categoria(s) sobre 20%: Residencial, Industrial, Minería, no 4.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre consumo eléctrico (gwh). El total de 18.153 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de consumo eléctrico (gwh). Minería es aproximadamente 6.6 veces mayor que Público en valor absoluto.",
          "respuesta": "V",
          "explicacion": "5.895 / 898 = 6.6.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre consumo eléctrico (gwh). Las tres categorias principales (Minería, Industrial, Residencial) concentran el 80.4% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 80.4%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de consumo eléctrico (gwh) con centro 18.153. Si el total se duplicara, Minería tendria 15.327.",
          "respuesta": "F",
          "explicacion": "Minería duplicado seria 11.790, no 15.327.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre consumo eléctrico (gwh). La razon entre Industrial y Comercial es 4.9:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 1.9:1, no 4.9:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de consumo eléctrico (gwh). Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Producción pesquera (ton) (Años 2020-2023). Salmón tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Salmón=520.000 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Donde producción pesquera (ton) se compara por T1 a T4. Jurel registra 188.000 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Jurel en T3 es exactamente 188.000.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De producción pesquera (ton). Merluza alcanza 94.640 en T4.",
          "respuesta": "F",
          "explicacion": "Merluza vale 72.800 en T4, no 94.640.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Producción pesquera (ton). En T2, Anchoveta supera en valor a Sardina.",
          "respuesta": "F",
          "explicacion": "En T2, Sardina=101.000 > Anchoveta=65.800.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De producción pesquera (ton). La caida de Salmón entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De producción pesquera (ton) (Años 2020-2023). La diferencia entre Salmón y Jurel en T3 es de 360.000 unidades.",
          "respuesta": "V",
          "explicacion": "Salmón(548.000) - Jurel(188.000) = 360.000.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Salmón es la categoría dominante y Anchoveta la más pequeña. En T2, Salmón y Jurel suman 711.000.",
          "respuesta": "V",
          "explicacion": "535.000 + 176.000 = 711.000.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De producción pesquera (ton). La diferencia entre Merluza y Sardina en T4 es de 45.760.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 35.200, no 45.760.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y las variables tienen crecimientos moderados entre -4% y 10%. El promedio en T4 es 261.248.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 200.960, no 261.248.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Producción pesquera (ton). Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De producción pesquera (ton) donde las variables tienen crecimientos moderados entre -4% y 10%. Especificamente, Sardina crecio un +10% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "Sardina paso de 98.000 a 108.000 = +10%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Salmón es la variable con mayor diferencia entre su valor maximo y minimo (rango: 41.000).",
          "respuesta": "V",
          "explicacion": "El rango de Salmón es efectivamente 41.000.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Producción pesquera (ton). Sardina vario un +26% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Sardina vario +10%, no +26%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De producción pesquera (ton) (Años 2020-2023). En T4, Anchoveta es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Salmón (561.000), no Anchoveta.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde producción pesquera (ton). El cambio de tendencia de Salmón se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción pesquera (ton). El punto de Salmón en T3 marca exactamente 548.000.",
          "respuesta": "V",
          "explicacion": "El valor de Salmón en T3 es 548.000.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción pesquera (ton) donde los marcadores diferencian cada variable. Salmón termina en T4 con el valor mas alto: 561.000.",
          "respuesta": "V",
          "explicacion": "Salmón lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción pesquera (ton) (Años 2020-2023). Jurel registra 228.800 en T2.",
          "respuesta": "F",
          "explicacion": "Jurel vale 176.000 en T2, no 228.800.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción pesquera (ton) con marcadores distintos. Merluza muestra una tendencia creciente.",
          "respuesta": "F",
          "explicacion": "Merluza decrece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción pesquera (ton). El valor inicial de Salmón representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para producción pesquera (ton). Merluza disminuyo en 3.200 unidades de T1 a T4 (-4%).",
          "respuesta": "V",
          "explicacion": "De 76.000 a 72.800: -3.200 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción pesquera (ton). La curva de Sardina tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "Sardina crece +10%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción pesquera (ton) (Años 2020-2023). Anchoveta supera a Salmón en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Salmón mantiene valores superiores a Anchoveta en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción pesquera (ton). Sardina alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de Sardina esta en T4 (108.000).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción pesquera (ton). La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción pesquera (ton) donde las variables tienen crecimientos moderados entre -4% y 10%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para producción pesquera (ton). Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Salmón, Sardina, Anchoveta crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre producción pesquera (ton). Merluza vario un -25% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Merluza es -4%, no -25%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de producción pesquera (ton). En algun momento Anchoveta logra superar a Salmón.",
          "respuesta": "F",
          "explicacion": "Salmón siempre esta por encima de Anchoveta.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde producción pesquera (ton). La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de producción pesquera (ton). Salmón representa el 55.8% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 55.8%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre producción pesquera (ton) donde el total central es 3.877.900. Anchoveta es la porcion mas pequena (6.9%).",
          "respuesta": "V",
          "explicacion": "Anchoveta tiene solo el 6.9% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de producción pesquera (ton). Jurel ocupa el 24.8% del total.",
          "respuesta": "F",
          "explicacion": "Jurel ocupa el 19.1%, no el 24.8%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre producción pesquera (ton). Anchoveta es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Salmón (55.8%), no Anchoveta.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de producción pesquera (ton). Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 3.877.900 sobre producción pesquera (ton). Salmón y Jurel suman el 74.9% del total.",
          "respuesta": "V",
          "explicacion": "55.8% + 19.1% = 74.9%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de producción pesquera (ton). La diferencia entre la mayor y menor porcion es de 48.9 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "55.8% - 6.9% = 48.9.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre producción pesquera (ton). Merluza y Sardina juntos representan el 23.7% del total.",
          "respuesta": "F",
          "explicacion": "Suman 18.3%, no 23.7%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de producción pesquera (ton) con centro 3.877.900. Exactamente 2 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 1 categoria(s) sobre 20%: Salmón, no 2.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre producción pesquera (ton). El total de 3.877.900 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de producción pesquera (ton). Salmón es aproximadamente 8.1 veces mayor que Anchoveta en valor absoluto.",
          "respuesta": "V",
          "explicacion": "2.164.000 / 265.900 = 8.1.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre producción pesquera (ton). Las tres categorias principales (Salmón, Jurel, Sardina) concentran el 85.5% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 85.5%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de producción pesquera (ton) con centro 3.877.900. Si el total se duplicara, Sardina tendria 1.069.900.",
          "respuesta": "F",
          "explicacion": "Sardina duplicado seria 823.000, no 1.069.900.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre producción pesquera (ton). La razon entre Jurel y Merluza es 5.5:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 2.5:1, no 5.5:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de producción pesquera (ton). Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Casos de influenza (Semanas 1-4). Niños tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Niños=210 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Adultos registra 280 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Adultos en T3 es exactamente 280.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De casos de influenza. Adultos Mayores alcanza 358 en T4.",
          "respuesta": "F",
          "explicacion": "Adultos Mayores vale 275 en T4, no 358.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Casos de influenza. En T2, Personal Salud supera en valor a Embarazadas.",
          "respuesta": "F",
          "explicacion": "En T2, Embarazadas=31 > Personal Salud=20.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De casos de influenza. La caida de Niños entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De casos de influenza (Semanas 1-4). La diferencia entre Niños y Adultos en T3 es de 40 unidades.",
          "respuesta": "V",
          "explicacion": "Niños(320) - Adultos(280) = 40.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Niños es la categoría dominante y Personal Salud la más pequeña. En T2, Niños y Adultos suman 485.",
          "respuesta": "V",
          "explicacion": "260 + 225 = 485.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De casos de influenza. La diferencia entre Adultos Mayores y Embarazadas en T4 es de 304.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 234, no 304.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y Adultos Mayores muestra un crecimiento excepcional del 90%. El promedio en T4 es 261.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 201, no 261.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Casos de influenza. Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De casos de influenza donde Adultos Mayores muestra un crecimiento excepcional del 90%. Especificamente, Adultos Mayores crecio un +90% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "Adultos Mayores paso de 145 a 275 = +90%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Niños es la variable con mayor diferencia entre su valor maximo y minimo (rango: 140).",
          "respuesta": "V",
          "explicacion": "El rango de Niños es efectivamente 140.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Casos de influenza. Embarazadas vario un +105% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Embarazadas vario +71%, no +105%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De casos de influenza (Semanas 1-4). En T4, Personal Salud es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Niños (350), no Personal Salud.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde casos de influenza. El cambio de tendencia de Niños se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de casos de influenza. El punto de Niños en T3 marca exactamente 320.",
          "respuesta": "V",
          "explicacion": "El valor de Niños en T3 es 320.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre casos de influenza donde los marcadores diferencian cada variable. Niños termina en T4 con el valor mas alto: 350.",
          "respuesta": "V",
          "explicacion": "Niños lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de casos de influenza (Semanas 1-4). Adultos registra 292 en T2.",
          "respuesta": "F",
          "explicacion": "Adultos vale 225 en T2, no 292.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de casos de influenza con marcadores distintos. Niños muestra una tendencia decreciente.",
          "respuesta": "F",
          "explicacion": "Niños crece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de casos de influenza. El valor inicial de Niños representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para casos de influenza. Adultos Mayores aumento en 130 unidades de T1 a T4 (+90%).",
          "respuesta": "V",
          "explicacion": "De 145 a 275: 130 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de casos de influenza. La curva de Adultos Mayores tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "Adultos Mayores crece +90%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre casos de influenza (Semanas 1-4). Personal Salud supera a Niños en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Niños mantiene valores superiores a Personal Salud en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de casos de influenza. Embarazadas alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de Embarazadas esta en T4 (41).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre casos de influenza. La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de casos de influenza donde Adultos Mayores muestra un crecimiento excepcional del 90%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para casos de influenza. Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Niños, Adultos, Adultos Mayores, Embarazadas, Personal Salud crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre casos de influenza. Personal Salud vario un +99% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Personal Salud es +61%, no +99%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de casos de influenza. En algun momento Personal Salud logra superar a Niños.",
          "respuesta": "F",
          "explicacion": "Niños siempre esta por encima de Personal Salud.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde casos de influenza. La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de casos de influenza. Niños representa el 35.6% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 35.6%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre casos de influenza donde el total central es 3.200. Personal Salud es la porcion mas pequena (2.9%).",
          "respuesta": "V",
          "explicacion": "Personal Salud tiene solo el 2.9% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de casos de influenza. Adultos ocupa el 40.4% del total.",
          "respuesta": "F",
          "explicacion": "Adultos ocupa el 31.1%, no el 40.4%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre casos de influenza. Personal Salud es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Niños (35.6%), no Personal Salud.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de casos de influenza. Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 3.200 sobre casos de influenza. Niños y Adultos suman el 66.7% del total.",
          "respuesta": "V",
          "explicacion": "35.6% + 31.1% = 66.7%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de casos de influenza. La diferencia entre la mayor y menor porcion es de 32.7 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "35.6% - 2.9% = 32.7.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre casos de influenza. Adultos Mayores y Embarazadas juntos representan el 39.5% del total.",
          "respuesta": "F",
          "explicacion": "Suman 30.4%, no 39.5%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de casos de influenza con centro 3.200. Exactamente 4 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 3 categoria(s) sobre 20%: Niños, Adultos, Adultos Mayores, no 4.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre casos de influenza. El total de 3.200 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de casos de influenza. Niños es aproximadamente 12.3 veces mayor que Personal Salud en valor absoluto.",
          "respuesta": "V",
          "explicacion": "1.140 / 93 = 12.3.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre casos de influenza. Las tres categorias principales (Niños, Adultos, Adultos Mayores) concentran el 93.0% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 93.0%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de casos de influenza con centro 3.200. Si el total se duplicara, Embarazadas tendria 343.",
          "respuesta": "F",
          "explicacion": "Embarazadas duplicado seria 264, no 343.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre casos de influenza. La razon entre Adultos y Adultos Mayores es 4.2:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 1.2:1, no 4.2:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de casos de influenza. Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
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
    "periodos": "",
    "totalPreguntas": 45,
    "preguntas": {
      "barras": [
        {
          "id": "01",
          "nivel": "facil",
          "enunciado": "Medallas deportivas (Años 2021-2024). Atletismo tiene el valor mas alto en T1.",
          "respuesta": "V",
          "explicacion": "Atletismo=12 es el mayor en T1.",
          "tipo": "barras"
        },
        {
          "id": "02",
          "nivel": "facil",
          "enunciado": "Natación registra 12 en T3.",
          "respuesta": "V",
          "explicacion": "El valor de Natación en T3 es exactamente 12.",
          "tipo": "barras"
        },
        {
          "id": "03",
          "nivel": "facil",
          "enunciado": "De medallas deportivas. Ciclismo alcanza 13 en T4.",
          "respuesta": "F",
          "explicacion": "Ciclismo vale 10 en T4, no 13.",
          "tipo": "barras"
        },
        {
          "id": "04",
          "nivel": "facil",
          "enunciado": "Medallas deportivas. En T2, Tenis supera en valor a Remo.",
          "respuesta": "F",
          "explicacion": "En T2, Remo=11 > Tenis=8.",
          "tipo": "barras"
        },
        {
          "id": "05",
          "nivel": "facil",
          "enunciado": "De medallas deportivas. La caida de Atletismo entre algunos periodos se debe a una crisis de oferta.",
          "respuesta": "D",
          "explicacion": "El grafico muestra valores pero no explica las causas de los cambios.",
          "tipo": "barras"
        },
        {
          "id": "06",
          "nivel": "intermedio",
          "enunciado": "De medallas deportivas (Años 2021-2024). La diferencia entre Atletismo y Natación en T3 es de 6 unidades.",
          "respuesta": "V",
          "explicacion": "Atletismo(18) - Natación(12) = 6.",
          "tipo": "barras"
        },
        {
          "id": "07",
          "nivel": "intermedio",
          "enunciado": "Donde Atletismo es la categoría dominante y Ciclismo la más pequeña. En T2, Atletismo y Remo suman 26.",
          "respuesta": "V",
          "explicacion": "15 + 11 = 26.",
          "tipo": "barras"
        },
        {
          "id": "08",
          "nivel": "intermedio",
          "enunciado": "De medallas deportivas. La diferencia entre Ciclismo y Remo en T4 es de 9.",
          "respuesta": "F",
          "explicacion": "La diferencia real es 6, no 9.",
          "tipo": "barras"
        },
        {
          "id": "09",
          "nivel": "intermedio",
          "enunciado": "Con 5 categorias y Ciclismo muestra un crecimiento excepcional del 100%. El promedio en T4 es 19.",
          "respuesta": "F",
          "explicacion": "El promedio real en T4 es 14, no 19.",
          "tipo": "barras"
        },
        {
          "id": "10",
          "nivel": "intermedio",
          "enunciado": "Medallas deportivas. Los datos incluyen margenes de error de +/-3% segun la metodologia de recoleccion.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra intervalos de confianza ni metodologia.",
          "tipo": "barras"
        },
        {
          "id": "11",
          "nivel": "avanzado",
          "enunciado": "De medallas deportivas donde Ciclismo muestra un crecimiento excepcional del 100%. Especificamente, Ciclismo crecio un +100% de T1 a T4.",
          "respuesta": "V",
          "explicacion": "Ciclismo paso de 5 a 10 = +100%.",
          "tipo": "barras"
        },
        {
          "id": "12",
          "nivel": "avanzado",
          "enunciado": "Con 5 categorias. Atletismo es la variable con mayor diferencia entre su valor maximo y minimo (rango: 8).",
          "respuesta": "V",
          "explicacion": "El rango de Atletismo es efectivamente 8.",
          "tipo": "barras"
        },
        {
          "id": "13",
          "nivel": "avanzado",
          "enunciado": "Medallas deportivas. Remo vario un +114% entre el primer y ultimo periodo.",
          "respuesta": "F",
          "explicacion": "Remo vario +78%, no +114%.",
          "tipo": "barras"
        },
        {
          "id": "14",
          "nivel": "avanzado",
          "enunciado": "De medallas deportivas (Años 2021-2024). En T4, Ciclismo es la categoria con mayor valor.",
          "respuesta": "F",
          "explicacion": "En T4 el mayor es Atletismo (20), no Ciclismo.",
          "tipo": "barras"
        },
        {
          "id": "15",
          "nivel": "avanzado",
          "enunciado": "Donde medallas deportivas. El cambio de tendencia de Atletismo se explica por factores estacionales propios del sector.",
          "respuesta": "D",
          "explicacion": "El grafico no analiza causas; solo presenta los valores.",
          "tipo": "barras"
        }
      ],
      "lineas": [
        {
          "id": "16",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de medallas deportivas. El punto de Atletismo en T3 marca exactamente 18.",
          "respuesta": "V",
          "explicacion": "El valor de Atletismo en T3 es 18.",
          "tipo": "lineas"
        },
        {
          "id": "17",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre medallas deportivas donde los marcadores diferencian cada variable. Atletismo termina en T4 con el valor mas alto: 20.",
          "respuesta": "V",
          "explicacion": "Atletismo lidera en T4.",
          "tipo": "lineas"
        },
        {
          "id": "18",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de medallas deportivas (Años 2021-2024). Natación registra 13 en T2.",
          "respuesta": "F",
          "explicacion": "Natación vale 10 en T2, no 13.",
          "tipo": "lineas"
        },
        {
          "id": "19",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de medallas deportivas con marcadores distintos. Atletismo muestra una tendencia decreciente.",
          "respuesta": "F",
          "explicacion": "Atletismo crece en cada periodo consecutivo.",
          "tipo": "lineas"
        },
        {
          "id": "20",
          "nivel": "facil",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de medallas deportivas. El valor inicial de Atletismo representa el 50% del total del sector a nivel pais.",
          "respuesta": "D",
          "explicacion": "El grafico no muestra el total del sector ni otras entidades.",
          "tipo": "lineas"
        },
        {
          "id": "21",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores unicos para medallas deportivas. Ciclismo aumento en 5 unidades de T1 a T4 (+100%).",
          "respuesta": "V",
          "explicacion": "De 5 a 10: 5 unidades.",
          "tipo": "lineas"
        },
        {
          "id": "22",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de medallas deportivas. La curva de Ciclismo tiene la pendiente mas pronunciada de todo el grafico.",
          "respuesta": "V",
          "explicacion": "Ciclismo crece +100%, la mayor variacion.",
          "tipo": "lineas"
        },
        {
          "id": "23",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre medallas deportivas (Años 2021-2024). Ciclismo supera a Atletismo en al menos dos periodos.",
          "respuesta": "F",
          "explicacion": "Atletismo mantiene valores superiores a Ciclismo en todos los periodos.",
          "tipo": "lineas"
        },
        {
          "id": "24",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de medallas deportivas. Remo alcanza su punto maximo en T1.",
          "respuesta": "F",
          "explicacion": "El maximo de Remo esta en T4 (16).",
          "tipo": "lineas"
        },
        {
          "id": "25",
          "nivel": "intermedio",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre medallas deportivas. La tendencia observada en el ultimo periodo se mantendra durante los proximos 2 anos.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra datos pasados; no permite predecir el futuro.",
          "tipo": "lineas"
        },
        {
          "id": "26",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de medallas deportivas donde Ciclismo muestra un crecimiento excepcional del 100%. Esta diferencia de crecimiento entre categorias es la mayor entre todas las tematicas disponibles.",
          "respuesta": "D",
          "explicacion": "El grafico solo muestra esta tematica; no permite comparar con otras.",
          "tipo": "lineas"
        },
        {
          "id": "27",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) con marcadores distintos para medallas deportivas. Hay al menos una variable que crece en absolutamente todos los periodos consecutivos.",
          "respuesta": "V",
          "explicacion": "Atletismo, Natación, Ciclismo, Remo, Tenis crece en cada periodo sin excepcion.",
          "tipo": "lineas"
        },
        {
          "id": "28",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) sobre medallas deportivas. Atletismo vario un +106% de T1 a T4.",
          "respuesta": "F",
          "explicacion": "La variacion real de Atletismo es +67%, no +106%.",
          "tipo": "lineas"
        },
        {
          "id": "29",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) de medallas deportivas. En algun momento Ciclismo logra superar a Atletismo.",
          "respuesta": "F",
          "explicacion": "Atletismo siempre esta por encima de Ciclismo.",
          "tipo": "lineas"
        },
        {
          "id": "30",
          "nivel": "avanzado",
          "enunciado": "Con marcadores de formas distintas (círculo, cuadrado, triángulo, diamante, triángulo invertido) donde medallas deportivas. La aceleracion del crecimiento en el ultimo tramo indica exito de politicas implementadas.",
          "respuesta": "D",
          "explicacion": "El grafico no vincula los cambios con politicas especificas.",
          "tipo": "lineas"
        }
      ],
      "torta": [
        {
          "id": "31",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de medallas deportivas. Atletismo representa el 29.0% del total, siendo la porcion mas grande.",
          "respuesta": "V",
          "explicacion": "Efectivamente es la mayor porcion con 29.0%.",
          "tipo": "torta"
        },
        {
          "id": "32",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre medallas deportivas donde el total central es 224. Ciclismo es la porcion mas pequena (13.4%).",
          "respuesta": "V",
          "explicacion": "Ciclismo tiene solo el 13.4% del total.",
          "tipo": "torta"
        },
        {
          "id": "33",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de medallas deportivas. Natación ocupa el 26.1% del total.",
          "respuesta": "F",
          "explicacion": "Natación ocupa el 20.1%, no el 26.1%.",
          "tipo": "torta"
        },
        {
          "id": "34",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel sobre medallas deportivas. Ciclismo es la categoria que mas contribuye al total.",
          "respuesta": "F",
          "explicacion": "La mayor contribucion es Atletismo (29.0%), no Ciclismo.",
          "tipo": "torta"
        },
        {
          "id": "35",
          "nivel": "facil",
          "enunciado": "Con porciones de colores pastel de medallas deportivas. Los porcentajes fueron calculados con datos verificados por auditoria externa independiente.",
          "respuesta": "D",
          "explicacion": "El grafico no menciona verificacion ni auditoria.",
          "tipo": "torta"
        },
        {
          "id": "36",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel con centro 224 sobre medallas deportivas. Atletismo y Natación suman el 49.1% del total.",
          "respuesta": "V",
          "explicacion": "29.0% + 20.1% = 49.1%.",
          "tipo": "torta"
        },
        {
          "id": "37",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de medallas deportivas. La diferencia entre la mayor y menor porcion es de 15.6 puntos porcentuales.",
          "respuesta": "V",
          "explicacion": "29.0% - 13.4% = 15.6.",
          "tipo": "torta"
        },
        {
          "id": "38",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre medallas deportivas. Ciclismo y Remo juntos representan el 46.4% del total.",
          "respuesta": "F",
          "explicacion": "Suman 35.7%, no 46.4%.",
          "tipo": "torta"
        },
        {
          "id": "39",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel de medallas deportivas con centro 224. Exactamente 4 categoria(s) supera(n) el 20% individual.",
          "respuesta": "F",
          "explicacion": "Son 3 categoria(s) sobre 20%: Atletismo, Natación, Remo, no 4.",
          "tipo": "torta"
        },
        {
          "id": "40",
          "nivel": "intermedio",
          "enunciado": "Con porciones de colores pastel sobre medallas deportivas. El total de 224 incluye ajustes estacionales y correcciones por valores atipicos.",
          "respuesta": "D",
          "explicacion": "El grafico no detalla la metodologia de calculo del total.",
          "tipo": "torta"
        },
        {
          "id": "41",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de medallas deportivas. Atletismo es aproximadamente 2.2 veces mayor que Ciclismo en valor absoluto.",
          "respuesta": "V",
          "explicacion": "65 / 30 = 2.2.",
          "tipo": "torta"
        },
        {
          "id": "42",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre medallas deportivas. Las tres categorias principales (Atletismo, Remo, Natación) concentran el 71.4% del total.",
          "respuesta": "V",
          "explicacion": "Efectivamente suman 71.4%.",
          "tipo": "torta"
        },
        {
          "id": "43",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de medallas deportivas con centro 224. Si el total se duplicara, Remo tendria 130.",
          "respuesta": "F",
          "explicacion": "Remo duplicado seria 100, no 130.",
          "tipo": "torta"
        },
        {
          "id": "44",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel sobre medallas deportivas. La razon entre Natación y Ciclismo es 4.5:1.",
          "respuesta": "F",
          "explicacion": "La razon real es 1.5:1, no 4.5:1.",
          "tipo": "torta"
        },
        {
          "id": "45",
          "nivel": "avanzado",
          "enunciado": "Con porciones de colores pastel de medallas deportivas. Esta distribucion porcentual es representativa del comportamiento del sector a nivel global.",
          "respuesta": "D",
          "explicacion": "El grafico no compara con datos globales ni de otros mercados.",
          "tipo": "torta"
        }
      ]
    },
    "imgBarras": "img/charts/020/barras.jpg",
    "imgLineas": "img/charts/020/lineas.jpg",
    "imgTorta": "img/charts/020/torta.jpg"
  }
};
