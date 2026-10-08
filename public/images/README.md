# Imágenes

## Organización local

Las imágenes editoriales fijas (portada, historia, taller y contacto) viven en este directorio porque no se editarán habitualmente desde el Studio. Sus rutas se guardan en `src/lib/i18n/dictionaries.ts`.

```text
public/images/
├── xavier-home-hero.webp
├── pieza_modelado_en_torno.jpeg
├── taller_entrada.jpeg
├── productos_boles.jpeg
├── productos_v2.jpeg
├── collage_proceso_bol.jpeg
```

En las páginas, la ruta pública empieza en `/`, por ejemplo `/images/xavier-home-hero.webp`.

Taller utiliza solo la entrada y la selección de boles indicada arriba, sin galería de proceso con pies de foto. Las imágenes de categorías en Inicio se obtienen de productos de esa categoría publicados en Sanity.

Conserva los originales fuera del repositorio. Exporta copias web con el encuadre correcto, elimina metadatos innecesarios y usa WebP o AVIF cuando el flujo de edición lo permita. Para una tienda pequeña, una imagen de producto de alrededor de 1.200 a 1.600 píxeles en su lado largo suele bastar; conserva el original mayor para futuros recortes. Evita usar el original de cámara en cada tarjeta.

Renderiza con `next/image`, proporciona texto alternativo localizado, declara la proporción con `width`/`height` o usa `fill` dentro de un contenedor con proporción fija, y configura `sizes` según el diseño. Reserva prioridad alta para la imagen principal visible al cargar; las imágenes fuera del primer pantallazo deben usar carga diferida normal.

## Fotografías de producto

Las fotos de producto se suben a Sanity y se sirven desde su CDN con `next/image`; el host permitido está limitado en `next.config.ts`. Así tu padre puede actualizar el catálogo sin cambiar código ni hacer un deploy.

Las imágenes editoriales de `public/` sí forman parte del deploy: cambiarlas requiere un commit y desplegar el código. Para sustituir una, conserva la proporción prevista y actualiza su ruta y texto alternativo en los diccionarios.
