# 🧠 ESTRATEGIA PARA RESOLVER RAZONAMIENTO INDUCTIVO

## La prueba en 30 segundos

Tienes **6 minutos** para resolver **30 ejercicios**. Cada ejercicio tiene:
- **2 tablas de referencia** (Ref 1 y Ref 2) que comparten una REGLA
- **4 tablas de opción** (A, B, C, D) — debes elegir las **2** que siguen la misma regla

---

## 🔍 PASO A PASO: Cómo resolver cada ejercicio

### PASO 1 — CUENTA (10 segundos)

Cuenta cuántas veces aparece **cada símbolo** en Ref 1.

```
Ejemplo:
■ ■ ▲ ★     ■ = 3 veces
■ ★ ● ★     ★ = 3 veces  
★ ● ▲ ●     ▲ = 1 vez
             ● = 2 veces

Patrón: 3-3-2-1  ← ¡CUIDADO! Empate entre ■ y ★
```

> 📌 **Regla de oro**: Si el símbolo que más se repite es CLARAMENTE el mayor (ej: 5-2-1-1 o 6-1-1-1), el ejercicio es **fácil**. Si hay empate o gana por poco, es **difícil**.

---

### PASO 2 — UBICA (10 segundos)

Encuentra **dónde** está ubicado el símbolo dominante en Ref 1.

Mira sus posiciones en la cuadrícula 3×3:

```
Posiciones:     Ref 1:
0  1  2        ■  ▲  ★
3  4  5        ■  ★  ●
6  7  8        ★  ●  ▲

■ está en: 0, 3  (columna izquierda)
```

---

### PASO 3 — COMPARA CON REF 2 (15 segundos)

Ref 2 es un **espejo** de Ref 1. Encuentra el eje:

| Eje | Qué cambia | Cómo detectarlo |
|-----|-----------|-----------------|
| **Horizontal ↔** | Izquierda se invierte con derecha | Columna 0 ↔ Columna 2 |
| **Vertical ↕** | Arriba se invierte con abajo | Fila 0 ↔ Fila 2 |
| **180°** | Giro completo | Esquina 0 ↔ Esquina 8 |

```
Ref 1:     Ref 2 (horizontal):
■ ▲ ★      ★ ▲ ■        ← Las columnas se invirtieron
■ ★ ●      ● ★ ■
★ ● ▲      ▲ ● ★
```

---

### PASO 4 — VERIFICA LAS OPCIONES (20 segundos)

De las 4 opciones, **2 son correctas** y **2 son distractoras**.

#### ¿Cómo identificar las correctas?
Deben cumplir **AMBAS** condiciones:
1. ✅ **Misma frecuencia**: los 4 símbolos aparecen la misma cantidad de veces que en Ref 1
2. ✅ **Misma posición o su espejo**: el símbolo dominante está en las mismas posiciones que Ref 1 o Ref 2

#### ¿Cómo identificar las distractoras?
- ❌ **Frecuencia diferente**: algún símbolo aparece más o menos veces
- ❌ **Posiciones cambiadas**: el dominante está en lugares que no coinciden ni con Ref 1 ni con Ref 2

---

## 🎯 NIVELES DE DIFICULTAD

| Nivel | Patrón | Estrategia |
|-------|--------|------------|
| 🟢 **Fácil** | 3-2-2-2, 4-2-2-1, 5-2-1-1, 6-1-1-1 | El dominante es OBVIO. Solo cuenta, ubica, y compara. |
| 🟡 **Intermedio** | 4-3-1-1 | El dominante gana por poco (4 vs 3). Verifica bien antes de decidir. |
| 🔴 **Difícil** | 3-3-2-1, 2-3-2-2, 2-3-3-1 | ¡TRAMPA! El dominante NO es el más frecuente o hay empate. **No te fíes solo del conteo**: mira las POSICIONES. |

---

## ⚡ CONSEJOS RÁPIDOS

1. **Primero cuenta, luego ubica**. No intentes adivinar el patrón sin contar.
2. **Los colores ayudan**: cada símbolo tiene un color fijo. Úsalos para identificar rápido.
3. **Descarta las obvias**: si una opción tiene frecuencias muy distintas, elimínala primero.
4. **No te cases con una opción**: verifica las 4 antes de decidir.
5. **Si hay empate, mira posiciones**: en ejercicios difíciles, el patrón está en DÓNDE están los símbolos, no en CUÁNTOS hay.
6. **Practica el espejo**: horizontal (columnas), vertical (filas), 180° (todo gira).

---

## 📊 RESUMEN VISUAL

```
┌─────────────────────────────────────────────────┐
│                  REF 1        REF 2             │
│                ┌─────┐      ┌─────┐             │
│  1. CUENTA     │■ ▲ ★│      │★ ▲ ■│  Espejo     │
│     ■=3 ★=3   │■ ★ ●│  ↔   │● ★ ■│  Horizontal │
│     ▲=1 ●=2   │★ ● ▲│      │▲ ● ★│             │
│                └─────┘      └─────┘             │
│                                                 │
│  2. UBICA: ■ en (0,3)                          │
│  3. COMPARA: columnas invertidas → Horizontal   │
│                                                 │
│  4. OPCIONES:                                   │
│     ✅ A: 3-3-2-1, ■ en (0,3)                  │
│     ✅ B: 3-3-2-1, ■ en (2,5) ← espejo         │
│     ❌ C: 4-2-2-1 ← frecuencia DIFERENTE        │
│     ❌ D: 3-3-2-1, ■ en (1,4) ← mala posición   │
└─────────────────────────────────────────────────┘
```

---

*Documento generado para la plataforma Ninja Trainer.*
