# 📚 MarcaLibros Personalizados -

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## web 
https://jhormancastella.github.io/MarcaLibros-Free/

## 🌟 Descripción General

**MarcaLibros Personalizados** es una aplicación web interactiva que permite a los usuarios crear separadores de libros personalizados de forma rápida y sencilla. Los usuarios pueden cargar sus propias imágenes, recortarlas según sus preferencias y descargar el resultado en múltiples formatos listos para imprimir.

### 🎯 Características Principales

- ✨ **Dos modos de creación**: Separadores de una cara o doble cara
- 🖼️ **Carga de imágenes personalizada** con vista previa instantánea
- ✂️ **Herramienta de recorte avanzada** con Cropper.js
- 📐 **Dimensiones optimizadas**: 5cm x 15cm (una cara) o 10cm x 15cm (doble cara)
- 💾 **Múltiples formatos de descarga**: PDF, PNG y JPG
- 📱 **Diseño responsive** adaptable a cualquier dispositivo
- 🎨 **Interfaz moderna** con gradientes y animaciones suaves

---

## 🏗️ Estructura del Código

### 📄 HTML - Estructura Principal

```
├── 🏠 Header
│   ├── Logo de la aplicación
│   └── Título principal
├── 🔄 Selector de Modo
│   ├── Botón "Una cara"
│   └── Botón "Doble cara"
├── 📤 Sección de Carga
│   ├── Modo Una Cara
│   │   └── Contenedor de imagen única
│   └── Modo Doble Cara
│       ├── Contenedor imagen frontal
│       └── Contenedor imagen trasera
├── 🎮 Controles
│   ├── Botón de recorte
│   └── Botones de descarga (PDF/PNG/JPG)
├── 👁️ Vista Previa
└── 📋 Instrucciones de Impresión
```

---

## 💅 Estilos CSS - Sistema de Diseño

### 🎨 Variables CSS (Custom Properties)

| Variable | Valor | Uso |
|----------|-------|-----|
| `--primary` | #4361ee | Color principal (azul vibrante) |
| `--primary-dark` | #3a56d4 | Variante oscura para hover |
| `--secondary` | #7209b7 | Color secundario (púrpura) |
| `--light` | #f8f9fa | Fondos claros |
| `--dark` | #212529 | Textos oscuros |
| `--success` | #4cc9f0 | Estados de éxito |
| `--border-radius` | 12px | Bordes redondeados |
| `--box-shadow` | 0 4px 20px rgba(0,0,0,0.08) | Sombras sutiles |

### 🎭 Componentes Visuales Destacados

#### 1. **Contenedores de Imagen**
```css
.image-box {
  /* Diseño elegante con borde punteado */
  border: 2px dashed #bdc3c7;
  /* Efecto hover con elevación */
  transition: all 0.3s ease;
}
```

#### 2. **Botones Interactivos**
- 🔘 Efecto de elevación al hover
- 🌈 Transiciones suaves
- 💫 Sombras dinámicas

#### 3. **Diseño Responsive**
- 📱 Breakpoint principal: 768px
- 🔄 Reorganización vertical en móviles
- 📏 Ajuste automático de dimensiones

---

## ⚙️ JavaScript - Funcionalidades Core

### 🔄 Sistema de Modos

```javascript
// Cambio dinámico entre modos
currentMode = 'single' | 'double'
```

| Modo | Descripción | Características |
|------|-------------|-----------------|
| **Single** 🎯 | Una sola cara | 5cm x 15cm, ideal para diseños simples |
| **Double** 🎯🎯 | Doble cara | 10cm x 15cm, permite frente y reverso |

### 📸 Gestión de Imágenes

#### **Proceso de Carga**
1. 📁 Usuario selecciona archivo
2. 🔍 FileReader procesa la imagen
3. 🖼️ Se muestra vista previa
4. ✂️ Se inicializa Cropper.js

#### **Herramienta de Recorte**
```javascript
// Configuración de Cropper.js
{
  aspectRatio: 1 / 3,    // Proporción fija
  viewMode: 1,            // Restricción al canvas
  dragMode: 'move',       // Modo de arrastre
  zoomOnWheel: true       // Zoom con scroll
}
```

### 💾 Sistema de Exportación

| Formato | Uso Recomendado | Características |
|---------|-----------------|-----------------|
| **PDF** 📄 | Impresión profesional | Incluye guías y medidas |
| **PNG** 🖼️ | Alta calidad | Transparencia, sin compresión |
| **JPG** 📷 | Compartir en redes | Compresión optimizada |

---

## 🛠️ Tecnologías y Librerías

### 📚 Dependencias Externas

1. **[Bootstrap Icons](https://icons.getbootstrap.com/)** v1.10.0
   - 🎨 Iconografía moderna y consistente
   - 📦 CDN optimizado

2. **[Cropper.js](https://fengyuanchen.github.io/cropperjs/)** v1.5.12
   - ✂️ Recorte avanzado de imágenes
   - 🔄 Rotación y zoom
   - 📐 Mantiene proporción 1:3

3. **[jsPDF](https://github.com/parallax/jsPDF)** v2.5.1
   - 📄 Generación de PDFs en el navegador
   - 🖨️ Formato A4 con guías de impresión

### 🌐 Recursos Externos

- **Favicon**: Imagen alojada en Cloudinary
- **Fuentes**: Segoe UI (sistema)

---

## 📋 Instrucciones de Uso

### 🚀 Guía Paso a Paso

#### **Para Separador de Una Cara:**
1. 🎯 Selecciona "Una cara" en el selector de modo
2. 📸 Carga tu imagen favorita
3. ✂️ Ajusta el recorte según tu preferencia
4. 👁️ Revisa la vista previa
5. 💾 Descarga en tu formato preferido

#### **Para Separador Doble Cara:**
1. 🎯 Selecciona "Doble cara" en el selector de modo
2. 📸 Carga imagen frontal y trasera
3. ✂️ Recorta ambas imágenes
4. 👁️ Verifica la vista previa combinada
5. 💾 Descarga y sigue las instrucciones de armado

### 🖨️ Recomendaciones de Impresión

| Aspecto | Recomendación |
|---------|---------------|
| **Papel** | Opalina brillante o mate (180-250 g/m²) |
| **Calidad** | Máxima calidad de impresión |
| **Tamaño** | 100% sin escalar |
| **Orientación** | Vertical (portrait) |

---

## 🎨 Características de Diseño UX/UI

### 🌈 Paleta de Colores
- **Primario**: Azul eléctrico (#4361ee) - Confianza y modernidad
- **Secundario**: Púrpura (#7209b7) - Creatividad
- **Fondo**: Gradiente suave de grises claros
- **Acentos**: Cyan (#4cc9f0) para estados de éxito

### ✨ Micro-interacciones
- 🔼 Elevación en hover de elementos
- 🔄 Transiciones suaves de 0.3s
- 📱 Feedback visual en carga de imágenes
- ✅ Estados visuales claros (vacío/cargado/procesado)

### 📱 Responsive Design
- **Desktop**: Layout horizontal con imágenes lado a lado
- **Tablet**: Ajuste flexible del contenido
- **Mobile**: Stack vertical completo con botones al 80% del ancho

---

## 🔒 Seguridad y Privacidad

- ✅ **Procesamiento local**: Todas las imágenes se procesan en el navegador
- 🔐 **Sin servidor**: No se envían datos a servidores externos
- 🗑️ **Sin almacenamiento**: Las imágenes no se guardan después de cerrar la página

---

## 🐛 Manejo de Errores

| Situación | Respuesta de la App |
|-----------|---------------------|
| Sin imagen cargada | Alerta al usuario para cargar imagen |
| Formato no compatible | Input acepta solo formatos de imagen |
| Imagen corrupta | FileReader maneja el error silenciosamente |

---

## 📈 Rendimiento

### ⚡ Optimizaciones Implementadas
- 🖼️ Redimensionado de canvas a medidas óptimas
- 🔄 Destrucción de croppers anteriores para liberar memoria
- 📦 CDN para librerías externas
- 🎨 CSS minificado inline

---

## 🚀 Posibles Mejoras Futuras

- [ ] 🎨 Editor de texto sobre las imágenes
- [ ] 🖼️ Plantillas prediseñadas
- [ ] 💾 Guardado de proyectos en localStorage
- [ ] 🌍 Soporte multiidioma
- [ ] 🎭 Filtros y efectos de imagen
- [ ] 📊 Historial de creaciones
- [ ] 🔗 Compartir en redes sociales directamente

---

## 📝 Notas Técnicas

### Dimensiones de Salida
- **Una cara**: 500px × 1500px (5cm × 15cm)
- **Doble cara**: 1000px × 1500px (10cm × 15cm)
- **Resolución**: Optimizada para 300 DPI en impresión

### Compatibilidad del Navegador
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 👨‍💻 Información del Desarrollador

**© 2025 Jhorman Jesús Castellanos Morales**  
Todos los derechos reservados.
