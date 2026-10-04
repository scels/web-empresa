# Catálogo, Pagos y Logística

El catálogo local de `src/lib/products.ts` sirve para la maqueta y requiere un deploy por cada cambio. Para administrar productos, imágenes, categorías y stock sin desplegar, la opción recomendada para esta tienda es Shopify Admin como fuente de catálogo e inventario, conectado al escaparate Next.js mediante Storefront API. Aún no está conectado: hacen falta una cuenta y credenciales.

En la migración, importa el inventario inicial por CSV; define colecciones y categorías publicadas; conserva las tres traducciones por producto; archiva las piezas retiradas para mantener pedidos y enlaces antiguos. El escaparate leerá los datos publicados y podrá refrescar caché cuando lleguen notificaciones de cambios. Una alta, cambio o baja en Shopify no debe requerir un deploy de código.

Un CMS editorial como Sanity es una alternativa para contenido, pero seguiría necesitando otro sistema para carrito, stock, pedidos y pagos. Por eso Shopify es el punto de partida recomendado si se prioriza operar la tienda desde un panel único.

## Secuencia prevista

1. Confirmar catálogo, idiomas, monedas, variantes, piezas únicas y stock en el administrador elegido.
2. Importar productos y colecciones; conectar lectura del catálogo y validar las tres traducciones.
3. Añadir carrito con cantidades validadas en servidor; el navegador nunca es la autoridad del precio.
4. Crear el pedido pendiente y una sesión de pago alojada por el proveedor desde el servidor.
5. Confirmar el pago exclusivamente mediante webhook verificado e idempotente.
6. Solicitar el envío para pedidos pagados y guardar el identificador y seguimiento.
7. Notificar al cliente y gestionar cancelaciones, devoluciones y reembolsos.

No almacenar datos de tarjeta. Preferir checkout alojado por el proveedor. Mantener claves secretas solo en variables de entorno del servidor y no enviar direcciones al operador logístico antes de tener un pedido pagado.

## Decisiones pendientes

- Cuenta de comercio y quién mantiene la publicación del catálogo.
- Pasarela, países, moneda e impuestos.
- Tienda y persistencia de pedidos, inventario y sesiones.
- Zonas, tarifas, embalaje, plazos y operador de transporte.
- Proceso de piezas únicas, encargos, roturas, cambios y devoluciones.
- Correo transaccional y gestión de consentimiento/privacidad.

Las carpetas `payments/` y `shipping/` contienen los límites de responsabilidad para cada adaptador.