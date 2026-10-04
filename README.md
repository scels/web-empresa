# Libélula Cerámica

Primera versión de la tienda de autor de Libélula, construida con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**. Incluye portada, catálogo, fichas de producto, historia del taller y contacto.

El catálogo y las fotografías actuales son contenido de muestra. No se muestran precios ni se aceptan pedidos o pagos todavía. La web anterior sigue siendo el canal de contacto mientras se confirma la información del negocio.

---

# Stack Tecnológico

- **Next.js**: Framework principal para construir la aplicación web.
- **React**: Librería utilizada para construir la interfaz mediante componentes.
- **TypeScript**: JavaScript con tipado estático.
- **Tailwind CSS**: Framework de utilidades CSS para construir la interfaz.
- **ESLint**: Análisis estático y reglas de calidad del código.
- **Node.js**: Runtime utilizado para ejecutar las herramientas de desarrollo y Next.js.
- **npm**: Gestor de paquetes.
- **Git**: Control de versiones.
- **GitHub**: Repositorio remoto del código.
- **Vercel**: Conectado con GitHub para desplegar automáticamente en el dominio propio.

---

# Entorno de Desarrollo

El proyecto se desarrolla actualmente en **Ubuntu 24.04 mediante WSL sobre Windows**.

Node.js se gestiona mediante **NVM**.

La versión principal de Node utilizada por el proyecto está indicada en el archivo:

```bash
.nvmrc
```

## Comprobar la versión activa

```bash
node -v
```

## Activar la versión del proyecto

```bash
nvm use
```

---

# Ejecución Local

## Instalar dependencias

```bash
npm install
```

## Arrancar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible normalmente en:

```text
http://localhost:3000
```

El servidor de desarrollo permite modificar el código y visualizar los cambios inmediatamente en el navegador sin necesidad de generar una build de producción.

---

# Scripts Disponibles

## Desarrollo

```bash
npm run dev
```

Arranca Next.js en modo desarrollo.

## Lint

```bash
npm run lint
```

Analiza el código utilizando ESLint.

## Build

```bash
npm run build
```

Genera una versión optimizada de la aplicación para producción.

## Producción Local

```bash
npm run start
```

Arranca la aplicación utilizando la build de producción generada previamente mediante:

```bash
npm run build
```

---

# Estructura Inicial

```text
web-empresa/
│
├── public/
│   └── images/                   # Imágenes propias versionadas
│
├── src/
│   ├── app/
│   │   ├── [locale]/             # Rutas en es, ca y en
│   │   │   ├── contact/
│   │   │   ├── taller/
│   │   │   └── tienda/           # Catálogo, categorías y fichas
│   │   ├── globals.css
│   ├── components/
│   │   ├── layout/              # Cabecera y pie
│   │   └── store/               # Componentes de catálogo
│   └── lib/
│       ├── commerce/            # Notas de integración futura
│       ├── i18n/                # Diccionarios de interfaz
│       └── products.ts          # Catálogo de muestra
├── proxy.ts                      # Prefijo de idioma por defecto
│
├── .nvmrc
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

# Estructura de Next.js (App Router)

## `src/app`

Es la parte principal de la aplicación Next.js.

Con App Router, la estructura de carpetas define automáticamente las rutas.

### Ejemplo

Archivo:

```text
src/app/[locale]/page.tsx
```

Ruta generada:

```text
/es, /ca, /en
```

Archivo:

```text
src/app/[locale]/tienda/[slug]/page.tsx
```

Ruta generada:

```text
/es/tienda/taza-de-gres
```

El castellano es el idioma por defecto. El selector permite cambiar entre castellano, catalán e inglés y conserva la página actual.

---

## `layout.tsx`

Define el layout raíz compartido por todas las páginas de la aplicación.

## `page.tsx`

Define el contenido de una ruta.

## `globals.css`

Contiene los estilos CSS globales.

## `public/`

Contiene recursos estáticos como imágenes, iconos u otros archivos servidos directamente por Next.js.

## `package.json`

Define:

- Información del proyecto
- Dependencias
- Scripts disponibles

## `package-lock.json`

Registra las versiones exactas de las dependencias instaladas para garantizar instalaciones reproducibles.

## `.nvmrc`

Indica la versión principal de Node.js utilizada por el proyecto.

---

# Flujo de Desarrollo

El objetivo es separar claramente desarrollo, control de versiones y producción:

```text
┌─────────────────────┐
│   Desarrollo local  │
│                     │
│   WSL + Node +      │
│   Next.js           │
└──────────┬──────────┘
           │
           │ git commit
           ▼
┌─────────────────────┐
│        Git          │
│                     │
│ Historial local     │
└──────────┬──────────┘
           │
           │ git push
           ▼
┌─────────────────────┐
│       GitHub        │
│                     │
│ Repositorio remoto  │
└──────────┬──────────┘
           │
           │ Integración
           ▼
┌─────────────────────┐
│       Vercel        │
│                     │
│ Build + Deployment  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│     Producción      │
│                     │
│      Internet       │
└─────────────────────┘
```

---

# Desarrollo vs Producción

## Desarrollo

```bash
npm run dev
```

Se utiliza para desarrollar y probar la aplicación localmente.

Normalmente estará disponible en:

```text
http://localhost:3000
```

## Producción

La aplicación se compila mediante:

```bash
npm run build
```

y se ejecuta mediante:

```bash
npm run start
```

En producción, la aplicación estará alojada en una plataforma o servidor accesible desde Internet.

---

# Filosofía del Proyecto

La aplicación debe mantener una arquitectura sencilla y portable.

Las herramientas externas deben considerarse infraestructura intercambiable:

```text
Código
  ↓
Git
  ↓
GitHub
  ↓
Deployment
```

El código fuente debe permanecer bajo control del repositorio.

Las herramientas de IA pueden utilizarse para desarrollar y modificar el código, pero no deben convertirse en una dependencia necesaria para ejecutar, desplegar o mantener la aplicación.

---

# Contenido y Puesta en Marcha

Los textos de interfaz están en `src/lib/i18n/dictionaries.ts`. Los datos de cada pieza incluyen nombre, descripción, categoría y texto alternativo en `es`, `ca` y `en`.

El catálogo actual vive en `src/lib/products.ts` y es solo de muestra. Para añadir una pieza ahora, crea un objeto con un `slug` único, completa los campos en los tres idiomas y asígnale una categoría. Si aparece una categoría nueva, inclúyela en el producto: la navegación la detecta y genera su página automáticamente. Para retirar una pieza de esta versión, elimínala del array. **Estos cambios en el archivo local requieren `git push` y un despliegue de Vercel.**

Para administrar altas, cambios y bajas sin desplegar, recomiendo conectar Shopify como fuente de catálogo e inventario y mantener este Next.js como escaparate headless. Los productos, categorías, traducciones, fotos, precios y existencias se gestionarían desde Shopify Admin; el sitio leería esos datos y se refrescaría al publicarlos. Se puede importar el catálogo con CSV. Conviene archivar piezas retiradas en vez de borrarlas para conservar pedidos y redirigir enlaces antiguos.

Shopify es una recomendación, no está conectado todavía: hacen falta una cuenta y credenciales para implementar la conexión. Un CMS editorial como Sanity no resuelve por sí solo stock, pedidos y pagos; requeriría integrar otro sistema para esas funciones.

## Imágenes

Las fotos de muestra se sirven desde Unsplash. Para fotos propias que deban viajar con el código, usa `public/images/products/<slug>/` con nombres estables. La guía completa de tamaños, formato, `next/image` y migración a una biblioteca administrable está en [public/images/README.md](public/images/README.md).

No conviene guardar en `public/` el catálogo definitivo si necesitas cambiar fotos sin desplegar: cada archivo versionado forma parte del deploy. Al conectar Shopify, usaremos su CDN de archivos o un servicio de imágenes administrado, y limitaremos sus dominios en `next.config.ts`.

## Siguientes Pasos

1. Sustituir los ejemplos por productos reales, fotografías y traducciones aprobadas.
2. Elegir y configurar la fuente de catálogo administrable; definir stock, variantes y piezas únicas.
3. Conectar el catálogo y añadir carrito y checkout alojado por el proveedor.
4. Confirmar países, impuestos, embalaje, costes y plazos con el taller y el transportista.
5. Automatizar confirmación de pago, envío, seguimiento, incidencias y devoluciones.
6. Revisar condiciones de venta, privacidad y obligaciones fiscales aplicables.

La pasarela, la logística y sus tarifas siguen pendientes de decisión; no se deben anunciar como disponibles hasta verificarlas.

Antes de habilitar ventas, confirmar y añadir:

- Catálogo real: nombres, disponibilidad, medidas, materiales y cuidados.
- Precios, impuestos, existencias y política para encargos o piezas únicas.
- Fotografías y derechos de uso de las imágenes.
- Correo de contacto, origen y zonas de envío, costes, embalaje y plazos.
- Condiciones de compra, privacidad, cookies y devoluciones aplicables.
- Proveedor de pago y operador logístico.

Las notas de arquitectura para estas dos últimas integraciones están en `src/lib/commerce/`.

---

# Rutas

- `/es`, `/ca`, `/en`: portada traducida.
- `/<idioma>/tienda`: catálogo.
- `/<idioma>/tienda/<slug>`: detalle de una pieza.
- `/<idioma>/tienda/categoria/<slug>`: categoría derivada del catálogo.
- `/<idioma>/taller`: historia y proceso.
- `/<idioma>/contact`: enlace provisional a la web actual.

---

# Recursos Oficiales

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Documentation](https://docs.github.com/)
- [Vercel Documentation](https://vercel.com/docs)

---

# Licencia

Pendiente de definir.