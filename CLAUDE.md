# Proyecto: web de cerámica artesanal

Web de un taller de cerámica artesanal. La desarrollan un ingeniero de software (código y mantenimiento técnico) y su padre, ceramista profesional (gestiona todo el contenido y no es técnico).

Prioridades: **sencillez, bajo mantenimiento y bajo coste**. El contenido debe poder gestionarse sin tocar código.

## Fase actual: escaparate (sin compra online)

La web funciona como mostrador: catálogo de unas 40-50 piezas, fichas de producto, páginas del taller y contacto. **Todavía no hay carrito, checkout, pagos ni base de datos propia.**

La compra online llegará en una fase posterior. No implementes nada de eso ni dejes código "preparado" para ello, salvo los campos de datos indicados abajo.

## Stack

- Next.js (App Router) + TypeScript (modo estricto)
- Sanity como CMS (Studio embebido en `/studio`)
- Despliegue en Vercel, código en GitHub
- Entorno de desarrollo: VS Code + WSL + Node.js

## Arquitectura

- **Next.js**: web pública (inicio, catálogo, categorías, colecciones, ficha de producto, páginas del taller).
- **Sanity**: única fuente de contenido. Su padre crea y edita aquí productos, fotos, textos, categorías, colecciones y ajustes del sitio. Incluye el estado de cada pieza (`disponible`, `vendida`, `bajo encargo`).
- Los datos se leen con consultas GROQ mediante `next-sanity`. Las imágenes se sirven desde el CDN de Sanity con `next/image`.
- El contenido se actualiza con revalidación (por tiempo o mediante webhook de Sanity a una ruta protegida con secreto).

### Servicios previstos para fases futuras (NO implementar ahora)

Stripe (pagos), Supabase (inventario y pedidos), Sendcloud (envíos), Meta Catalog (catálogo en redes). Solo se añadirán cuando se pida explícitamente.

## Modelo de contenido (Sanity)

- `producto`: nombre, slug, imágenes (con texto alternativo), descripción, medidas, material/técnica, precio (opcional), estado, referencia/SKU, categoría (referencia), colecciones (referencias), destacado, fecha de creación.
- `categoria`: nombre, slug, descripción, imagen y **categoría padre opcional** (referencia a otra categoría).
- `coleccion`: nombre, slug, descripción, imagen.
- `ajustesSitio` y páginas editables: textos de inicio, "sobre el taller", contacto, redes.

### Categorías iniciales

Dos categorías principales, cada una con subcategorías:

- **Piezas funcionales / uso diario**: vasos, platos, bols, etc.
- **Piezas creativas / decorativas**: jarrones, bandejas de sobremesa, etc.

Las categorías son **documentos de Sanity, no valores fijos en el código**. Nunca las escribas a mano en el código ni en enums: su padre las añadirá, quitará y reorganizará desde el Studio. Las páginas y la navegación se generan a partir de los datos.

## Reglas de código

- Haz el cambio mínimo necesario. No refactorices ni reorganices código que no te pidan tocar.
- Si falta información o hay varias formas razonables de hacerlo, pregunta antes de implementar.
- No añadas dependencias nuevas sin consultarlo antes.
- No añadas funcionalidades, abstracciones ni configuración "por si acaso". Nada de capas genéricas, patrones ni carpetas para casos futuros.
- Usa Server Components por defecto. Usa `"use client"` solo cuando sea imprescindible (estado, eventos del navegador).
- TypeScript estricto: sin `any`. Tipa las respuestas de Sanity (usa los tipos generados con Sanity TypeGen si están configurados).
- Mantén las consultas GROQ en un único sitio (`src/sanity/lib/queries.ts` o equivalente) y pide solo los campos necesarios.
- Imágenes siempre con `next/image`, con `alt` y dimensiones adecuadas.
- Estilos con la solución ya elegida en el proyecto. No introduzcas otra.
- Maneja solo los errores que puedan ocurrir de verdad (datos inexistentes, 404 con `notFound()`). No envuelvas todo en `try/catch`.

### Comentarios y ruido

- Código claro y con nombres descriptivos en lugar de comentarios.
- No comentes lo evidente, no dejes código comentado, `console.log` ni TODOs sin que te los pidan.
- Comenta solo el "por qué" cuando algo no sea obvio.
- No generes archivos de documentación, ejemplos ni tests que no se hayan pedido.

### Idioma

- Identificadores, nombres de archivos y de campos en el código: inglés (`product`, `category`), salvo los nombres de tipos del esquema de Sanity si se decide otra cosa.
- Textos visibles al usuario y etiquetas del Studio de Sanity: **español**, con títulos y descripciones claros para una persona no técnica.

## Estructura orientativa

```
src/
  app/                 # rutas de Next.js
    studio/            # Sanity Studio embebido
    producto/[slug]/
    categoria/[slug]/
  components/
  sanity/
    schemaTypes/       # esquemas
    lib/               # cliente, consultas, helper de imágenes
```

Si la estructura real del repo difiere de esta, manda el repo.

## Comandos

Revisa `package.json` para los scripts reales. Habituales:

- `npm run dev` — desarrollo
- `npm run build` — comprobar que compila antes de dar algo por terminado
- `npm run lint` — lint

## Variables de entorno

Nunca escribas valores reales en el código ni en archivos versionados. Se definen en `.env.local` y en Vercel:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- Token de lectura de Sanity y secreto del webhook de revalidación, si se usan (solo en servidor).

## Antes de dar una tarea por terminada

1. Compila sin errores (`npm run build`).
2. No quedan imports sin usar, `console.log` ni código muerto.
3. Resume en pocas líneas qué has cambiado y por qué.
