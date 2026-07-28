# ============================================================
# CURSO INTERACTIVO DE PORCENTAJES — GUI con CustomTkinter
# ============================================================

import os
import json
import threading
from datetime import datetime

try:
    import customtkinter as ctk
except ImportError:
    print("Instala customtkinter: pip install customtkinter")
    exit(1)

try:
    import requests
    HAS_REQUESTS = True
except ImportError:
    HAS_REQUESTS = False

# ── Tema ───────────────────────────────────────────────────
ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("blue")

# ── Colores ────────────────────────────────────────────────
C_VERDE    = "#4CAF50"
C_ROJO     = "#F44336"
C_AMARILLO = "#FFC107"
C_AZUL     = "#2196F3"
C_CYAN     = "#00BCD4"
C_MAGENTA  = "#9C27B0"
C_BG       = "#1a1a2e"
C_SIDEBAR  = "#16213e"
C_CARD     = "#0f3460"
C_TEXT     = "#e0e0e0"
C_ACCENT   = "#e94560"

# ── Variables globales ─────────────────────────────────────
api_key = None
API_URL = "https://api.deepseek.com/v1/chat/completions"

# ── Persistencia API key ───────────────────────────────────
CONFIG_FILE = "config.json"

def load_config():
    global api_key
    if os.path.exists(CONFIG_FILE):
        try:
            with open(CONFIG_FILE, "r", encoding="utf-8") as f:
                api_key = json.load(f).get("api_key")
        except Exception:
            pass

def save_config(key):
    try:
        with open(CONFIG_FILE, "w", encoding="utf-8") as f:
            json.dump({"api_key": key}, f, indent=2)
        return True
    except Exception:
        return False

load_config()

# ============================================================
# BLOQUE 1: APP PRINCIPAL
# ============================================================

class App(ctk.CTk):
    def __init__(self):
        super().__init__()
        self.title("Curso Interactivo: Domina los Porcentajes")
        self.geometry("1100x750")
        self.minsize(900, 600)

        # Grid 1 fila x 2 columnas
        self.grid_rowconfigure(0, weight=1)
        self.grid_columnconfigure(1, weight=1)

        # ── Sidebar ──
        self.sidebar = Sidebar(self, self.navegar)
        self.sidebar.grid(row=0, column=0, sticky="ns")

        # ── Panel principal ──
        self.main_frame = ctk.CTkFrame(self, fg_color=C_BG, corner_radius=0)
        self.main_frame.grid(row=0, column=1, sticky="nsew")
        self.main_frame.grid_rowconfigure(0, weight=1)
        self.main_frame.grid_columnconfigure(0, weight=1)

        # ── Pantalla actual ──
        self.current_screen = None
        self.navegar("bienvenida")

    def navegar(self, destino, **kwargs):
        if self.current_screen:
            self.current_screen.destroy()

        screens = {
            "bienvenida":  BienvenidaScreen,
            "fase1":       Fase1Screen,
            "fase2":       Fase2Screen,
            "fase3":       Fase3Screen,
            "fase4":       Fase4Screen,
            "fase5":       Fase5Screen,
            "ia":          IAScreen,
            "config":      ConfigScreen,
        }
        screen_class = screens.get(destino, BienvenidaScreen)
        self.current_screen = screen_class(self.main_frame, self, **kwargs)
        self.current_screen.pack(fill="both", expand=True)

# ============================================================
# BLOQUE 2: SIDEBAR
# ============================================================

class Sidebar(ctk.CTkFrame):
    def __init__(self, parent, navegar_callback):
        super().__init__(parent, width=260, fg_color=C_SIDEBAR, corner_radius=0)
        self.navegar = navegar_callback
        self.pack_propagate(False)

        # Logo
        ctk.CTkLabel(self, text="📊  PORCENTAJES",
                     font=ctk.CTkFont(size=20, weight="bold"),
                     text_color=C_CYAN).pack(pady=(30, 5))

        ctk.CTkLabel(self, text="Curso Interactivo",
                     font=ctk.CTkFont(size=12),
                     text_color="#888").pack(pady=(0, 25))

        ctk.CTkFrame(self, height=2, fg_color=C_ACCENT).pack(fill="x", padx=20, pady=(0, 20))

        # Navegación
        self.btn_fases = []
        fases = [
            ("🏠  Inicio",        "bienvenida"),
            ("1. Concepto Fundamental", "fase1"),
            ("2. Los 3 Tipos",    "fase2"),
            ("3. Factor Multiplicador", "fase3"),
            ("4. Protocolo 4 Pasos", "fase4"),
            ("5. Examen Final",   "fase5"),
        ]
        for texto, destino in fases:
            btn = ctk.CTkButton(self, text=texto, anchor="w", fg_color="transparent",
                                hover_color=C_CARD, font=ctk.CTkFont(size=13),
                                height=38, corner_radius=8,
                                command=lambda d=destino: self.navegar(d))
            btn.pack(fill="x", padx=12, pady=2)
            self.btn_fases.append(btn)

        # Separador
        ctk.CTkFrame(self, height=1, fg_color="#333").pack(fill="x", padx=20, pady=(15, 10))

        # IA
        ctk.CTkLabel(self, text="🧠  IA DeepSeek",
                     font=ctk.CTkFont(size=11, weight="bold"),
                     text_color=C_MAGENTA).pack(anchor="w", padx=24, pady=(0, 2))

        self.btn_ia = ctk.CTkButton(self, text="Generar Ejercicios", anchor="w",
                                     fg_color="transparent", hover_color=C_CARD,
                                     font=ctk.CTkFont(size=13), height=38, corner_radius=8,
                                     command=lambda: self.navegar("ia"))
        self.btn_ia.pack(fill="x", padx=12, pady=2)

        self.btn_config = ctk.CTkButton(self, text="⚙️  Configuración API", anchor="w",
                                         fg_color="transparent", hover_color=C_CARD,
                                         font=ctk.CTkFont(size=13), height=38, corner_radius=8,
                                         command=lambda: self.navegar("config"))
        self.btn_config.pack(fill="x", padx=12, pady=2)

        # Espacio flexible
        ctk.CTkLabel(self, text="").pack(expand=True)

        # Estado API
        self.lbl_status = ctk.CTkLabel(self, text="", font=ctk.CTkFont(size=10))
        self.lbl_status.pack(pady=(0, 5))
        self.actualizar_status()

        # Salir
        ctk.CTkButton(self, text="❌  Salir", fg_color=C_ROJO, hover_color="#b71c1c",
                      height=35, corner_radius=8, font=ctk.CTkFont(size=13),
                      command=parent.quit).pack(fill="x", padx=12, pady=(10, 20))

    def actualizar_status(self):
        if api_key:
            self.lbl_status.configure(text="🟢 API Configurada", text_color=C_VERDE)
        else:
            self.lbl_status.configure(text="🔴 API sin configurar", text_color=C_ROJO)

# ============================================================
# BLOQUE 3: SCROLL FRAME REUTILIZABLE
# ============================================================

class ScrollableContent(ctk.CTkScrollableFrame):
    def __init__(self, parent, **kwargs):
        super().__init__(parent, fg_color="transparent", **kwargs)
        self.grid_columnconfigure(0, weight=1)

    def add_title(self, text, color=C_CYAN):
        lbl = ctk.CTkLabel(self, text=text, font=ctk.CTkFont(size=22, weight="bold"),
                           text_color=color, anchor="w")
        lbl.pack(fill="x", pady=(10, 5), padx=20)
        return lbl

    def add_subtitle(self, text):
        lbl = ctk.CTkLabel(self, text=text, font=ctk.CTkFont(size=15, weight="bold"),
                           text_color=C_AZUL, anchor="w")
        lbl.pack(fill="x", pady=(15, 5), padx=20)
        return lbl

    def add_text(self, text, color=C_TEXT, size=13):
        lbl = ctk.CTkLabel(self, text=text, font=ctk.CTkFont(size=size),
                           text_color=color, anchor="w", justify="left")
        lbl.pack(fill="x", pady=(1, 1), padx=20)
        return lbl

    def add_formula(self, text):
        frame = ctk.CTkFrame(self, fg_color=C_CARD, corner_radius=8)
        frame.pack(fill="x", padx=20, pady=5)
        lbl = ctk.CTkLabel(frame, text=text, font=ctk.CTkFont(size=14, weight="bold"),
                           text_color=C_CYAN, anchor="w")
        lbl.pack(padx=12, pady=8)
        return frame

    def add_step(self, num, text):
        lbl = ctk.CTkLabel(self, text=f"  Paso {num}: {text}",
                           font=ctk.CTkFont(size=13), text_color=C_AMARILLO, anchor="w")
        lbl.pack(fill="x", pady=(1, 1), padx=20)
        return lbl

    def add_separator(self):
        ctk.CTkFrame(self, height=1, fg_color="#333").pack(fill="x", padx=20, pady=8)

    def add_card(self, content_cb):
        """Crea una card (frame con fondo) y pasa el frame al callback."""
        frame = ctk.CTkFrame(self, fg_color=C_CARD, corner_radius=12)
        frame.pack(fill="x", padx=20, pady=8)
        content_cb(frame)
        return frame

    def add_exercise(self, enunciado, callback_verificar, placeholder="Tu respuesta"):
        """Añade un ejercicio interactivo: enunciado, entry, botón verificar, label feedback."""
        frame = ctk.CTkFrame(self, fg_color=C_CARD, corner_radius=12)
        frame.pack(fill="x", padx=20, pady=8)

        ctk.CTkLabel(frame, text="🎯 Ejercicio:", font=ctk.CTkFont(size=14, weight="bold"),
                     text_color=C_AZUL, anchor="w").pack(padx=12, pady=(10, 2), anchor="w")

        lbl_enunciado = ctk.CTkLabel(frame, text=enunciado, font=ctk.CTkFont(size=13),
                                     text_color=C_TEXT, anchor="w", justify="left",
                                     wraplength=650)
        lbl_enunciado.pack(fill="x", padx=12, pady=(2, 8), anchor="w")

        entry_frame = ctk.CTkFrame(frame, fg_color="transparent")
        entry_frame.pack(fill="x", padx=12, pady=(0, 8))

        entry = ctk.CTkEntry(entry_frame, placeholder_text=placeholder,
                             font=ctk.CTkFont(size=14), height=36, width=180)
        entry.pack(side="left", padx=(0, 10))
        entry.bind("<Return>", lambda e: callback_verificar(entry, feedback_lbl))

        btn = ctk.CTkButton(entry_frame, text="Verificar", width=100, height=36,
                            font=ctk.CTkFont(size=13),
                            command=lambda: callback_verificar(entry, feedback_lbl))
        btn.pack(side="left")

        feedback_lbl = ctk.CTkLabel(frame, text="", font=ctk.CTkFont(size=13, weight="bold"),
                                    anchor="w")
        feedback_lbl.pack(fill="x", padx=12, pady=(0, 10), anchor="w")

        return frame, entry, feedback_lbl

    def add_spacing(self, h=10):
        ctk.CTkLabel(self, text="", height=h).pack()

# ============================================================
# BLOQUE 4: PANTALLA DE BIENVENIDA
# ============================================================

class BienvenidaScreen(ctk.CTkFrame):
    def __init__(self, parent, app):
        super().__init__(parent, fg_color=C_BG)
        self.app = app

        content = ScrollableContent(self)
        content.pack(fill="both", expand=True)

        content.add_title("📊  ¡Bienvenido/a al Curso Interactivo de Porcentajes!")
        content.add_spacing(10)
        content.add_text("Este curso te enseñará porcentajes desde cero, paso a paso.")
        content.add_spacing(15)

        content.add_subtitle("📚 Estructura del Curso")
        fases_info = [
            ("Fase 1", "El Concepto Fundamental — ¿Qué es un porcentaje?"),
            ("Fase 2", "Traducción y los 3 Tipos de Problemas"),
            ("Fase 3", "El Factor Multiplicador (aumentos y descuentos)"),
            ("Fase 4", "Protocolo de 4 Pasos (método infalible)"),
            ("Fase 5", "Examen Final — Pon a prueba lo aprendido"),
        ]
        for nombre, desc in fases_info:
            content.add_text(f"  {C_CYAN}{nombre}:{C_TEXT} {desc}")

        content.add_spacing(15)
        content.add_subtitle("🧠 Bonus: Generador de Ejercicios con IA")
        content.add_text("Configura tu API Key de DeepSeek y genera ejercicios ilimitados en tiempo real.")
        content.add_text("Cada ejercicio incluye solución detallada paso a paso.")

        content.add_spacing(20)
        content.add_text("Usa el menú de la izquierda para navegar entre las fases.", C_AMARILLO, 14)

# ============================================================
# BLOQUE 5: PANTALLAS DE FASES (1-5)
# ============================================================

class Fase1Screen(ctk.CTkFrame):
    def __init__(self, parent, app):
        super().__init__(parent, fg_color=C_BG)
        content = ScrollableContent(self)
        content.pack(fill="both", expand=True)

        content.add_title("Fase 1: El Concepto Fundamental")
        content.add_subtitle("📖 ¿Qué es un porcentaje?")
        content.add_text("Un porcentaje es una fracción con denominador 100.")
        content.add_text("La palabra 'por ciento' significa 'de cada cien'.")
        content.add_text("El símbolo % equivale a dividir entre 100.")
        content.add_formula("  Ejemplo: 25% = 25/100 = 0.25")

        content.add_subtitle("📖 La idea clave")
        content.add_text("Para cualquier problema de porcentajes, identifica 3 elementos:")
        content.add_text("  • EL TOTAL (el 100%, el número completo)", C_CYAN)
        content.add_text("  • EL PORCENTAJE (la proporción, ej: 25%)", C_CYAN)
        content.add_text("  • LA PARTE (el resultado, el trozo)", C_CYAN)

        content.add_separator()
        content.add_subtitle("🧠 Mini-ejercicio resuelto")
        content.add_text("¿Cuánto es el 50% de 200?")
        content.add_step(1, "Identificamos: Total = 200, Porcentaje = 50%, Parte = ?")
        content.add_step(2, "Fórmula: Parte = (Porcentaje / 100) * Total")
        content.add_step(3, "Sustituimos: Parte = (50 / 100) * 200")
        content.add_step(4, "Calculamos: Parte = 0.5 * 200 = 100")
        content.add_text("✅ Respuesta: El 50% de 200 es 100", C_VERDE)

        content.add_separator()
        def verificar(entry, lbl):
            try:
                r = float(entry.get())
                if abs(r - 8) < 0.01:
                    lbl.configure(text="✅ ¡Muy bien! El 10% de 80 es 8.", text_color=C_VERDE)
                else:
                    lbl.configure(text=f"❌ {r} no es correcto. (10/100)*80 = 8", text_color=C_ROJO)
            except ValueError:
                lbl.configure(text="⚠️ Ingresa un número válido.", text_color=C_AMARILLO)

        content.add_exercise("¿Cuánto es el 10% de 80?", verificar)

class Fase2Screen(ctk.CTkFrame):
    def __init__(self, parent, app):
        super().__init__(parent, fg_color=C_BG)
        content = ScrollableContent(self)
        content.pack(fill="both", expand=True)

        content.add_title("Fase 2: Traducción y los 3 Tipos")
        content.add_subtitle("📖 Los 3 tipos de problemas de porcentajes")

        content.add_text("TIPO 1: Hallar la PARTE", C_CYAN, 15)
        content.add_text("  Pregunta típica: '¿Cuánto es el X% de Y?'")
        content.add_formula("  Parte = (Porcentaje / 100) * Total")
        content.add_text("  Ejemplo: ¿Cuánto es el 30% de 150? → 0.30 * 150 = 45")

        content.add_text("TIPO 2: Hallar el TOTAL", C_CYAN, 15)
        content.add_text("  Pregunta típica: '¿De qué número, el X% es Y?'")
        content.add_formula("  Total = Parte / (Porcentaje / 100)")
        content.add_text("  Ejemplo: ¿De qué número, el 20% es 30? → 30 / 0.20 = 150")

        content.add_text("TIPO 3: Hallar el PORCENTAJE", C_CYAN, 15)
        content.add_text("  Pregunta típica: '¿Qué porcentaje de X es Y?'")
        content.add_formula("  Porcentaje = (Parte / Total) * 100")
        content.add_text("  Ejemplo: ¿Qué % de 200 es 50? → (50/200)*100 = 25%")

        content.add_separator()
        content.add_subtitle("🎯 Ejercicios")

        def verificar1(entry, lbl):
            try:
                r = float(entry.get())
                if abs(r - 9) < 0.01:
                    lbl.configure(text="✅ ¡Correcto! Te ahorras 9€ (0.15 * 60).", text_color=C_VERDE)
                else:
                    lbl.configure(text=f"❌ El ahorro es 9€ (0.15 * 60). Dijiste {r}.", text_color=C_ROJO)
            except ValueError:
                lbl.configure(text="⚠️ Ingresa un número.", text_color=C_AMARILLO)

        content.add_exercise("En una tienda hay un descuento del 15% en un producto de 60€. ¿Cuánto dinero te ahorras?", verificar1)

        def verificar2(entry, lbl):
            try:
                r = float(entry.get())
                if abs(r - 160) < 0.01:
                    lbl.configure(text="✅ ¡Correcto! Hay 160 estudiantes (40/0.25).", text_color=C_VERDE)
                else:
                    lbl.configure(text=f"❌ Hay 160 estudiantes (40/0.25). Dijiste {r}.", text_color=C_ROJO)
            except ValueError:
                lbl.configure(text="⚠️ Ingresa un número.", text_color=C_AMARILLO)

        content.add_exercise("Si 40 estudiantes (el 25% del total) aprobaron un examen, ¿cuántos estudiantes hay en total?", verificar2)

        def verificar3(entry, lbl):
            try:
                r = float(entry.get())
                if abs(r - 25) < 0.01:
                    lbl.configure(text="✅ ¡Correcto! El 25% prefiere pizza.", text_color=C_VERDE)
                else:
                    lbl.configure(text=f"❌ Es el 25%. Dijiste {r}%.", text_color=C_ROJO)
            except ValueError:
                lbl.configure(text="⚠️ Ingresa un número.", text_color=C_AMARILLO)

        content.add_exercise("En una encuesta de 500 personas, 125 prefieren pizza. ¿Qué porcentaje prefiere pizza?", verificar3)

class Fase3Screen(ctk.CTkFrame):
    def __init__(self, parent, app):
        super().__init__(parent, fg_color=C_BG)
        content = ScrollableContent(self)
        content.pack(fill="both", expand=True)

        content.add_title("Fase 3: El Factor Multiplicador")
        content.add_subtitle("📖 ¿Qué es el factor multiplicador?")
        content.add_text("Es un atajo para calcular aumentos y descuentos directamente,")
        content.add_text("sin tener que calcular el porcentaje por separado.")

        content.add_formula("  AUMENTO:  Factor = 1 + (Porcentaje / 100)")
        content.add_text("  Ejemplo: Aumento del 15% → Factor = 1.15")
        content.add_text("  Precio final = Precio original * 1.15")

        content.add_formula("  DESCUENTO:  Factor = 1 - (Porcentaje / 100)")
        content.add_text("  Ejemplo: Descuento del 20% → Factor = 0.80")
        content.add_text("  Precio final = Precio original * 0.80")

        content.add_subtitle("⚠️ ¡Cuidado con la trampa del 10%+10%!")
        content.add_text("Un aumento del 10% y luego otro 10% NO es un 20%.", C_AMARILLO)
        content.add_text("Es: Precio * 1.10 * 1.10 = Precio * 1.21 → ¡21% de aumento real!", C_AMARILLO)

        content.add_separator()
        content.add_subtitle("🎯 Ejercicios")

        def verificar1(entry, lbl):
            try:
                r = float(entry.get())
                if abs(r - 20) < 0.01:
                    lbl.configure(text="✅ ¡Correcto! 25 * 0.80 = 20€", text_color=C_VERDE)
                else:
                    lbl.configure(text=f"❌ Es 20€ (25 * 0.80). Dijiste {r}.", text_color=C_ROJO)
            except ValueError:
                lbl.configure(text="⚠️ Ingresa un número.", text_color=C_AMARILLO)
        content.add_exercise("Una camiseta cuesta 25€ y tiene un 20% de descuento. ¿Precio final?", verificar1)

        def verificar2(entry, lbl):
            try:
                r = float(entry.get())
                if abs(r - 1620) < 0.01:
                    lbl.configure(text="✅ ¡Correcto! 1500 * 1.08 = 1620€", text_color=C_VERDE)
                else:
                    lbl.configure(text=f"❌ Es 1620€ (1500 * 1.08). Dijiste {r}.", text_color=C_ROJO)
            except ValueError:
                lbl.configure(text="⚠️ Ingresa un número.", text_color=C_AMARILLO)
        content.add_exercise("Un salario de 1500€ sube un 8%. ¿Cuál es el nuevo salario?", verificar2)

        def verificar3(entry, lbl):
            try:
                r = float(entry.get())
                if abs(r - 99) < 0.01:
                    lbl.configure(text="✅ ¡Correcto! 100*1.10*0.90 = 99€. ¡No vuelve al precio original!", text_color=C_VERDE)
                else:
                    lbl.configure(text=f"❌ 100*1.10*0.90 = 99€. Dijiste {r}. Lección: no se cancelan.", text_color=C_ROJO)
            except ValueError:
                lbl.configure(text="⚠️ Ingresa un número.", text_color=C_AMARILLO)
        content.add_exercise("Un producto de 100€ primero sube un 10% y luego baja un 10%. ¿Vuelve a costar 100€? (precio final)", verificar3)

class Fase4Screen(ctk.CTkFrame):
    def __init__(self, parent, app):
        super().__init__(parent, fg_color=C_BG)
        content = ScrollableContent(self)
        content.pack(fill="both", expand=True)

        content.add_title("Fase 4: Protocolo de 4 Pasos")
        content.add_subtitle("📖 Un método infalible para CUALQUIER problema de porcentajes")

        content.add_text("PASO 1: IDENTIFICA los 3 elementos", C_CYAN, 15)
        content.add_text("  • ¿Quién es el TOTAL (100%)?")
        content.add_text("  • ¿Quién es el PORCENTAJE (%)?")
        content.add_text("  • ¿Quién es la PARTE (resultado)?")
        content.add_text("  • ¿Qué me preguntan exactamente?")

        content.add_text("PASO 2: ELIGE la fórmula según lo que buscas", C_CYAN, 15)
        content.add_text("  • Buscas PARTE → Parte = (Porcentaje/100) * Total")
        content.add_text("  • Buscas TOTAL → Total = Parte / (Porcentaje/100)")
        content.add_text("  • Buscas %     → Porcentaje = (Parte/Total) * 100")

        content.add_text("PASO 3: SUSTITUYE los valores en la fórmula", C_CYAN, 15)
        content.add_text("  • Reemplaza cada variable con el número correspondiente.")

        content.add_text("PASO 4: CALCULA y RESPONDE en lenguaje natural", C_CYAN, 15)
        content.add_text("  • Haz la operación matemática.")
        content.add_text("  • Escribe la respuesta como una frase completa.")

        content.add_separator()
        content.add_subtitle("🧠 Ejercicio guiado")
        content.add_text("En una clase de 30 alumnos, 18 son chicas. ¿Qué % son chicas?")
        content.add_step(1, "Identifico: TOTAL = 30 (toda la clase), PARTE = 18 (chicas), % = ?")
        content.add_step(2, "Busco PORCENTAJE → % = (Parte/Total) * 100")
        content.add_step(3, "Sustituyo: % = (18/30) * 100")
        content.add_step(4, "Calculo: % = 0.6 * 100 = 60%. El 60% son chicas.")
        content.add_text("✅ Respuesta: El 60% de la clase son chicas.", C_VERDE)

        content.add_separator()
        def verificar(entry, lbl):
            try:
                r = float(entry.get())
                if abs(r - 60.5) < 0.01:
                    lbl.configure(text="✅ ¡Perfecto! 50 * 1.21 = 60.50€", text_color=C_VERDE)
                else:
                    lbl.configure(text=f"❌ Es 60.50€. Paso 1: TOTAL=50, %=21→IVA. Paso 2: Factor=1.21. Paso 3: 50*1.21. Paso 4: 60.50€.", text_color=C_ROJO)
            except ValueError:
                lbl.configure(text="⚠️ Ingresa un número.", text_color=C_AMARILLO)
        content.add_exercise("Un videojuego cuesta 50€ sin IVA. El IVA es del 21%. ¿Cuánto pagas en total?", verificar)

class Fase5Screen(ctk.CTkFrame):
    def __init__(self, parent, app):
        super().__init__(parent, fg_color=C_BG)
        self.app = app
        self.aciertos = 0

        content = ScrollableContent(self)
        content.pack(fill="both", expand=True)

        content.add_title("Fase 5: Examen Final 🏆")
        content.add_text("5 preguntas. Demuestra lo que sabes.", C_AMARILLO, 15)
        content.add_separator()

        # Preguntas con sus respuestas correctas
        preguntas = [
            ("Pregunta 1/5: ¿Cuánto es el 35% de 200?", 70),
            ("Pregunta 2/5: De 120 empleados, 30 teletrabajan. ¿Qué % teletrabaja?", 25),
            ("Pregunta 3/5: Si el 15% de un número es 45, ¿cuál es el número?", 300),
            ("Pregunta 4/5: Un abrigo de 120€ con 30% de descuento. ¿Precio final?", 84),
            ("Pregunta 5/5: Acción de 250€. Sube 12% y luego baja 12%. ¿Precio final?", 246.4),
        ]

        self.feedbacks = []
        self.correctas_list = []

        for i, (enunciado, correcta) in enumerate(preguntas):
            self.correctas_list.append(correcta)

            def make_verificar(idx, corr):
                def verificar(entry, lbl):
                    try:
                        r = float(entry.get())
                        tol = 0.1
                        if abs(r - corr) < tol:
                            lbl.configure(text=f"✅ ¡Correcto! ({corr})", text_color=C_VERDE)
                            self.feedbacks[idx] = True
                        else:
                            lbl.configure(text=f"❌ Incorrecto. Respuesta correcta: {corr}", text_color=C_ROJO)
                            self.feedbacks[idx] = False
                    except ValueError:
                        lbl.configure(text="⚠️ Ingresa un número.", text_color=C_AMARILLO)
                        self.feedbacks[idx] = False
                return verificar

            self.feedbacks.append(None)
            frame, entry, lbl = content.add_exercise(enunciado, make_verificar(i, correcta))
            setattr(self, f"entry_{i}", entry)

        content.add_spacing(15)

        # Botón de resultado
        self.lbl_resultado = ctk.CTkLabel(content, text="", font=ctk.CTkFont(size=16, weight="bold"), anchor="w")
        self.lbl_resultado.pack(fill="x", padx=20, pady=(5, 5))

        btn_resultado = ctk.CTkButton(content, text="📊 Calcular Resultado Final",
                                      font=ctk.CTkFont(size=15, weight="bold"),
                                      height=42, fg_color=C_ACCENT, hover_color="#c62828",
                                      command=self.calcular_resultado)
        btn_resultado.pack(padx=20, pady=10, anchor="w")

    def calcular_resultado(self):
        aciertos = sum(1 for f in self.feedbacks if f is True)
        total = 5

        if aciertos == 5:
            msg = f"🎉 ¡PERFECTO! {aciertos}/{total} — ¡Eres un maestro de los porcentajes!"
            color = C_VERDE
        elif aciertos >= 3:
            msg = f"👍 {aciertos}/{total} — Bien hecho. Repasa lo que fallaste."
            color = C_CYAN
        else:
            msg = f"📚 {aciertos}/{total} — Necesitas repasar. Vuelve a las fases anteriores."
            color = C_AMARILLO

        self.lbl_resultado.configure(text=msg, text_color=color)

# ============================================================
# BLOQUE 6: PANTALLA DE IA (GENERADOR DE EJERCICIOS)
# ============================================================

class IAScreen(ctk.CTkFrame):
    def __init__(self, parent, app):
        super().__init__(parent, fg_color=C_BG)
        self.app = app

        content = ScrollableContent(self)
        content.pack(fill="both", expand=True)

        content.add_title("🧠 Generar Ejercicios con DeepSeek")
        content.add_spacing(5)

        if not HAS_REQUESTS:
            content.add_text("❌ La librería 'requests' no está instalada.", C_ROJO, 14)
            content.add_text("Ejecuta: pip install requests", C_CYAN, 13)
            return

        if not api_key:
            content.add_text("❌ API Key no configurada.", C_ROJO, 14)
            content.add_text("Ve a ⚙️ Configuración API en el menú lateral para configurarla.", C_AMARILLO, 13)
            return

        # Selector de tipo
        content.add_subtitle("Tipo de ejercicios")
        tipos = ["Hallar la Parte", "Hallar el Total", "Hallar el Porcentaje",
                 "Aumentos y Descuentos", "Problemas Combinados", "Mezcla de todos"]
        self.tipo_var = ctk.StringVar(value=tipos[0])
        tipo_menu = ctk.CTkOptionMenu(content, values=tipos, variable=self.tipo_var,
                                       font=ctk.CTkFont(size=14), height=36, width=280)
        tipo_menu.pack(padx=20, pady=(0, 10), anchor="w")

        # Cantidad
        content.add_subtitle("Cantidad (1-10)")
        self.cantidad_entry = ctk.CTkEntry(content, placeholder_text="5",
                                            font=ctk.CTkFont(size=14), height=36, width=100)
        self.cantidad_entry.pack(padx=20, pady=(0, 10), anchor="w")

        # Botón generar
        self.btn_generar = ctk.CTkButton(content, text="🚀 Generar Ejercicios",
                                          font=ctk.CTkFont(size=15, weight="bold"),
                                          height=42, fg_color=C_MAGENTA, hover_color="#6A1B9A",
                                          command=self.generar_en_hilo)
        self.btn_generar.pack(padx=20, pady=(5, 10), anchor="w")

        # Spinner / estado
        self.lbl_estado = ctk.CTkLabel(content, text="", font=ctk.CTkFont(size=13), anchor="w")
        self.lbl_estado.pack(fill="x", padx=20, pady=(0, 10))

        # Contenedor de resultados
        self.resultados_frame = ctk.CTkFrame(content, fg_color="transparent")
        self.resultados_frame.pack(fill="x", padx=20, pady=(0, 10))

        self.ejercicios_generados = []

    def generar_en_hilo(self):
        self.btn_generar.configure(state="disabled", text="⏳ Generando...")
        self.lbl_estado.configure(text="🧠 Conectando con DeepSeek... (puede tardar ~15s)", text_color=C_AMARILLO)

        # Limpiar resultados anteriores
        for w in self.resultados_frame.winfo_children():
            w.destroy()

        thread = threading.Thread(target=self._generar, daemon=True)
        thread.start()

    def _generar(self):
        tipos_map = {
            "Hallar la Parte": 1, "Hallar el Total": 2, "Hallar el Porcentaje": 3,
            "Aumentos y Descuentos": 4, "Problemas Combinados": 5, "Mezcla de todos": 6,
        }
        tipo = tipos_map.get(self.tipo_var.get(), 1)
        try:
            cantidad = max(1, min(10, int(self.cantidad_entry.get() or "5")))
        except ValueError:
            cantidad = 5

        ejercicios = generar_ejercicios_con_ia(tipo, cantidad)
        self.ejercicios_generados = ejercicios or []

        self.after(0, self._mostrar_resultados)

    def _mostrar_resultados(self):
        self.btn_generar.configure(state="normal", text="🚀 Generar Ejercicios")

        if not self.ejercicios_generados:
            self.lbl_estado.configure(text="❌ No se pudieron generar ejercicios.", text_color=C_ROJO)
            return

        self.lbl_estado.configure(text=f"✅ {len(self.ejercicios_generados)} ejercicios generados.", text_color=C_VERDE)

        for i, ej in enumerate(self.ejercicios_generados):
            card = ctk.CTkFrame(self.resultados_frame, fg_color=C_CARD, corner_radius=12)
            card.pack(fill="x", pady=6)

            # Enunciado
            ctk.CTkLabel(card, text=f"📝 Ejercicio {i+1}: {ej.get('enunciado', 'Sin enunciado')}",
                         font=ctk.CTkFont(size=13), text_color=C_TEXT, anchor="w",
                         wraplength=600, justify="left").pack(padx=12, pady=(10, 5), anchor="w")

            # Solución (colapsable simple: mostrar/ocultar)
            sol = ej.get("solucion", {})
            sol_text = "\n".join([f"  {sol[k]}" for k in sorted(sol.keys()) if k.startswith("paso")])

            sol_frame = ctk.CTkFrame(card, fg_color="transparent")
            sol_frame.pack(fill="x", padx=12, pady=(0, 5))

            def toggle(sf=sol_frame, st=sol_text, r=ej.get("respuesta_correcta", "?")):
                if sf.winfo_children():
                    for w in sf.winfo_children():
                        w.destroy()
                else:
                    ctk.CTkLabel(sf, text=st, font=ctk.CTkFont(size=12),
                                 text_color=C_AMARILLO, anchor="w", justify="left",
                                 wraplength=600).pack(anchor="w")
                    ctk.CTkLabel(sf, text=f"✅ Respuesta: {r}",
                                 font=ctk.CTkFont(size=13, weight="bold"),
                                 text_color=C_VERDE, anchor="w").pack(anchor="w", pady=(5, 0))

            btn_toggle = ctk.CTkButton(card, text="👁️ Ver/Ocultar solución", width=180,
                                        font=ctk.CTkFont(size=12), fg_color="transparent",
                                        hover_color=C_BG, command=toggle)
            btn_toggle.pack(padx=12, pady=(0, 10), anchor="w")

        # Botón guardar
        if self.ejercicios_generados:
            btn_guardar = ctk.CTkButton(self.resultados_frame, text="💾 Guardar ejercicios en archivo",
                                         font=ctk.CTkFont(size=13), height=36,
                                         command=lambda: guardar_ejercicios_en_archivo(self.ejercicios_generados))
            btn_guardar.pack(pady=(10, 5), anchor="w")

# ============================================================
# BLOQUE 7: PANTALLA DE CONFIGURACIÓN
# ============================================================

class ConfigScreen(ctk.CTkFrame):
    def __init__(self, parent, app):
        super().__init__(parent, fg_color=C_BG)
        self.app = app

        content = ScrollableContent(self)
        content.pack(fill="both", expand=True)

        content.add_title("⚙️ Configuración de DeepSeek")
        content.add_spacing(5)

        # Estado
        self.lbl_estado = ctk.CTkLabel(content, text="", font=ctk.CTkFont(size=14, weight="bold"))
        self.lbl_estado.pack(anchor="w", padx=20, pady=(5, 15))
        self.actualizar_estado()

        # Input API key
        content.add_text("API Key de DeepSeek:", C_CYAN, 13)
        self.key_entry = ctk.CTkEntry(content, placeholder_text="sk-...", show="*",
                                       font=ctk.CTkFont(size=13), height=36, width=350)
        self.key_entry.pack(padx=20, pady=(2, 8), anchor="w")

        # Botones
        btn_frame = ctk.CTkFrame(content, fg_color="transparent")
        btn_frame.pack(padx=20, pady=(0, 10), anchor="w")

        ctk.CTkButton(btn_frame, text="💾 Guardar Key", width=130, height=36,
                      fg_color=C_VERDE, hover_color="#388E3C",
                      font=ctk.CTkFont(size=13),
                      command=self.guardar_key).pack(side="left", padx=(0, 10))

        ctk.CTkButton(btn_frame, text="🔍 Probar Conexión", width=150, height=36,
                      fg_color=C_AZUL, hover_color="#1565C0",
                      font=ctk.CTkFont(size=13),
                      command=self.probar_conexion).pack(side="left", padx=(0, 10))

        ctk.CTkButton(btn_frame, text="🗑️ Eliminar Key", width=130, height=36,
                      fg_color=C_ROJO, hover_color="#b71c1c",
                      font=ctk.CTkFont(size=13),
                      command=self.eliminar_key).pack(side="left")

        # Feedback
        self.lbl_feedback = ctk.CTkLabel(content, text="", font=ctk.CTkFont(size=13),
                                         wraplength=600, anchor="w", justify="left")
        self.lbl_feedback.pack(fill="x", padx=20, pady=(5, 5))

        content.add_spacing(15)
        content.add_text("⚠️ Tu API key se guarda localmente en config.json.", C_AMARILLO, 12)
        content.add_text("No compartas ese archivo. Solo se envía a DeepSeek.", C_AMARILLO, 12)

    def actualizar_estado(self):
        if api_key:
            self.lbl_estado.configure(text="🟢 Estado: API Configurada", text_color=C_VERDE)
        else:
            self.lbl_estado.configure(text="🔴 Estado: Sin configurar", text_color=C_ROJO)
        self.app.sidebar.actualizar_status()

    def guardar_key(self):
        global api_key
        nueva = self.key_entry.get().strip()
        if not nueva:
            self.lbl_feedback.configure(text="⚠️ Ingresa una API Key primero.", text_color=C_AMARILLO)
            return
        api_key = nueva
        if save_config(api_key):
            self.lbl_feedback.configure(text="✅ API Key guardada correctamente.", text_color=C_VERDE)
            self.key_entry.delete(0, "end")
        else:
            self.lbl_feedback.configure(text="❌ Error al guardar en archivo (pero sí en memoria).", text_color=C_ROJO)
        self.actualizar_estado()

    def eliminar_key(self):
        global api_key
        api_key = None
        if os.path.exists(CONFIG_FILE):
            try:
                os.remove(CONFIG_FILE)
            except Exception:
                pass
        self.lbl_feedback.configure(text="🗑️ API Key eliminada.", text_color=C_AMARILLO)
        self.key_entry.delete(0, "end")
        self.actualizar_estado()

    def probar_conexion(self):
        if not api_key:
            self.lbl_feedback.configure(text="❌ No hay API Key configurada.", text_color=C_ROJO)
            return
        self.lbl_feedback.configure(text="⏳ Probando conexión...", text_color=C_AMARILLO)

        def _probar():
            ok, msg = probar_conexion_api()
            color = C_VERDE if ok else C_ROJO
            self.after(0, lambda: self.lbl_feedback.configure(text=msg.replace("❌ ", "").replace("✅ ", ""), text_color=color))

        threading.Thread(target=_probar, daemon=True).start()

# ============================================================
# BLOQUE 8: FUNCIONES AUXILIARES API
# ============================================================

def probar_conexion_api():
    if not HAS_REQUESTS:
        return False, "❌ requests no instalado."
    headers = {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}
    data = {"model": "deepseek-chat", "messages": [{"role": "user", "content": "Responde: Conexión exitosa"}], "max_tokens": 20}
    try:
        r = requests.post(API_URL, headers=headers, json=data, timeout=15)
        if r.status_code == 200:
            return True, "✅ Conexión exitosa con DeepSeek."
        msgs = {401: "❌ API Key inválida.", 402: "❌ Cuota excedida.", 429: "❌ Demasiadas solicitudes."}
        return False, msgs.get(r.status_code, f"❌ Error {r.status_code}")
    except requests.exceptions.ConnectionError:
        return False, "❌ Sin conexión a internet."
    except requests.exceptions.Timeout:
        return False, "⏱️ Timeout."
    except Exception as e:
        return False, f"❌ {e}"

def generar_ejercicios_con_ia(tipo, cantidad):
    if not HAS_REQUESTS or not api_key:
        return None

    templates = {
        1: {"nombre": "Hallar la Parte", "contexto": "compras, propinas, impuestos",
            "formula": "Parte = (Porcentaje/100) * Total", "busca": "la Parte"},
        2: {"nombre": "Hallar el Total", "contexto": "descuentos, estadísticas",
            "formula": "Total = Parte / (Porcentaje/100)", "busca": "el Total"},
        3: {"nombre": "Hallar el Porcentaje", "contexto": "notas, encuestas",
            "formula": "Porcentaje = (Parte/Total)*100", "busca": "el Porcentaje"},
        4: {"nombre": "Aumentos y Descuentos", "contexto": "rebajas, impuestos, salarios",
            "formula": "Factor = 1 ± (Porcentaje/100)", "busca": "precio final"},
        5: {"nombre": "Problemas Combinados", "contexto": "multi-paso, identificar el 100%",
            "formula": "Combinación", "busca": "resolución multi-paso"},
        6: {"nombre": "Mezcla", "contexto": "vida cotidiana variada",
            "formula": "Todas", "busca": "mezcla de todos los tipos"},
    }
    t = templates.get(tipo, templates[1])

    prompt = f"""Eres un profesor de matemáticas. Genera {cantidad} ejercicios de "{t['nombre']}" ({t['contexto']}). Fórmula: {t['formula']}.

Responde SOLO con JSON válido:
{{"ejercicios": [{{"enunciado": "...", "tipo": "{t['nombre']}", "solucion": {{"paso_1": "...", "paso_2": "...", "paso_3": "...", "paso_4": "...", "respuesta": "..."}}, "respuesta_correcta": número}}]}}"""

    headers = {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}
    data = {"model": "deepseek-chat", "messages": [
        {"role": "system", "content": "Responde SIEMPRE con JSON válido, sin markdown."},
        {"role": "user", "content": prompt}
    ], "max_tokens": 4000, "temperature": 0.8}

    try:
        r = requests.post(API_URL, headers=headers, json=data, timeout=60)
        if r.status_code != 200:
            return None
        contenido = r.json()["choices"][0]["message"]["content"]
        return _parsear_json(contenido)
    except Exception:
        return None

def _parsear_json(contenido):
    import re
    # Intento 1: directo
    try:
        return json.loads(contenido).get("ejercicios", [])
    except Exception:
        pass
    # Intento 2: quitar ```
    m = re.search(r'```(?:json)?\s*([\s\S]*?)```', contenido)
    if m:
        try:
            return json.loads(m.group(1)).get("ejercicios", [])
        except Exception:
            pass
    # Intento 3: buscar { }
    i, f = contenido.find("{"), contenido.rfind("}")
    if i != -1 and f != -1:
        try:
            return json.loads(contenido[i:f+1]).get("ejercicios", [])
        except Exception:
            pass
    return []

def guardar_ejercicios_en_archivo(ejercicios):
    if not ejercicios:
        return
    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    nombre = f"ejercicios_guardados_{ts}.json"
    try:
        with open(nombre, "w", encoding="utf-8") as f:
            json.dump({"fecha": ts, "ejercicios": ejercicios}, f, indent=2, ensure_ascii=False)
        # Mostrar feedback en algún label no es posible aquí, usamos print
        print(f"✅ Ejercicios guardados en {nombre}")
    except Exception as e:
        print(f"❌ Error al guardar: {e}")

# ============================================================
# BLOQUE 9: ENTRY POINT
# ============================================================

if __name__ == "__main__":
    app = App()
    app.mainloop()
