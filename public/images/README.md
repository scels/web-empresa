# Imágenes

## Organización local

Las imágenes propias que deban viajar junto al código pueden organizarse así:

```text
public/images/
├── brand/
│   └── studio.webp
└── products/
    └── taza-de-gres/
        ├── taza-de-gres-01.webp
        └── taza-de-gres-02.webp
```

En las páginas, la ruta pública empieza en `/`, por ejemplo:
`/images/products/taza-de-gres/taza-de-gres-01.webp`.

Conserva los originales fuera del repositorio. Exporta copias web con el encuadre correcto, elimina metadatos innecesarios y usa WebP o AVIF cuando el flujo de edición lo permita. Para una tienda pequeña, una imagen de producto de alrededor de 1.200 a 1.600 píxeles en su lado largo suele bastar; conserva el original mayor para futuros recortes. Evita usar el original de cámara en cada tarjeta.

Renderiza con `next/image`, proporciona texto alternativo localizado, declara la proporción con `width`/`height` o usa `fill` dentro de un contenedor con proporción fija, y configura `sizes` según el diseño. Reserva prioridad alta para la imagen principal visible al cargar; las imágenes fuera del primer pantallazo deben usar carga diferida normal.

## Catálogo administrable

Un archivo en `public/` forma parte del deploy: añadirlo o reemplazarlo requiere commit y despliegue. Las fotos del catálogo se suben a Sanity y se sirven desde su CDN con `next/image`; el host permitido está limitado en `next.config.ts`.

Sube una foto original por pieza y deja que la CDN genere tamaños y formatos adecuados. En tarjetas, solicita un tamaño cercano al renderizado; en el detalle, una variante mayor. Mantén nombres, texto alternativo por idioma y orden de galería en los datos del producto, no codificados en cada página.

El contenido de muestra anterior se ha retirado. Añade fotografías reales desde el Studio de Sanity.