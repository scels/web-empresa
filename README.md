# Web Empresa

Aplicación web construida con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**.

Este repositorio contiene el código fuente de la aplicación y está pensado para desarrollarse, versionarse y desplegarse de forma independiente de cualquier herramienta de generación de código o plataforma de diseño.

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
- **Vercel**: Plataforma prevista para el despliegue.

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
│   └── Assets estáticos
│
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       └── globals.css
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
src/app/page.tsx
```

Ruta generada:

```text
/
```

Archivo:

```text
src/app/about/page.tsx
```

Ruta generada:

```text
/about
```

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