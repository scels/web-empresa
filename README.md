# Xavier Cels

Web de Xavier Cels, ceramista, construida con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**. Incluye portada, catálogo, fichas de producto, proceso de trabajo y contacto.

El catálogo se gestiona en Sanity. No hay compra online, carrito ni pagos.

---

# Stack Tecnológico

- **Next.js**: Framework principal para construir la aplicación web.
- **Sanity**: CMS del catálogo; el Studio se sirve en `/studio`.
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

## Contenido y Puesta en Marcha

Los productos y las categorías se gestionan en Sanity. Los textos y las imágenes editoriales de Inicio, Taller y Contacto son estáticos y viven en `src/lib/i18n/dictionaries.ts` y `public/images/`. Los esquemas de catálogo están en `src/sanity/schemaTypes/`, las consultas GROQ en `src/sanity/lib/queries.ts` y el cliente de lectura en `src/sanity/lib/client.ts`.

Para conectar el proyecto local:

1. Copia `.env.example` a `.env.local` y completa `NEXT_PUBLIC_SANITY_PROJECT_ID` y `SANITY_STUDIO_PROJECT_ID` con el mismo ID de proyecto.
2. En Sanity Manage, añade `http://localhost:3000` como origen CORS y permite credenciales.
3. Arranca `npm run dev`, abre `http://localhost:3000/studio` e inicia sesión con tu cuenta de Sanity.
4. Crea y publica una categoría; después crea un producto, asígnale esa categoría, añade fotografía y texto alternativo, y publícalo.
5. Comprueba `/es/tienda/<slug>` y las páginas públicas. Los cambios publicados pueden tardar hasta un minuto en aparecer.

Los campos de texto traducibles admiten español, catalán e inglés; si falta una traducción, el escaparate usa el español. Precio y referencia son opcionales. El precio es informativo: no hay carrito ni pagos.

## Imágenes

Las fotografías de producto se suben a Sanity y se sirven desde su CDN con `next/image`. Las imágenes editoriales estáticas están en `public/images/` y requieren un despliegue de código para cambiarse.

## Siguientes Pasos

1. Completar categorías y productos, indicando las traducciones y el estado de cada pieza.
2. Añadir en Vercel las mismas variables `NEXT_PUBLIC_SANITY_*` y el dominio de producción a CORS.

La compra online, los pagos y los envíos quedan fuera de esta fase.

---

# Rutas

- `/es`, `/ca`, `/en`: portada traducida.
- `/<idioma>/tienda`: catálogo.
- `/<idioma>/tienda/<slug>`: detalle de una pieza.
- `/<idioma>/tienda/categoria/<slug>`: categoría derivada del catálogo.
- `/<idioma>/taller`: historia y proceso.
- `/<idioma>/contact`: información de contacto estática con enlace a Instagram.

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