# Futuras Integraciones de Comercio

El catálogo actual es contenido estático y no crea pedidos. Mantén el dominio de la tienda separado de los proveedores para poder cambiar de pasarela u operador sin rehacer la experiencia.

## Secuencia prevista

1. Definir productos, variantes, existencias y precios en una fuente de datos fiable.
2. Añadir carrito con cantidades validadas en servidor; el navegador nunca es la autoridad del precio.
3. Crear el pedido pendiente y una sesión de pago desde el servidor.
4. Confirmar el pago exclusivamente mediante webhook verificado e idempotente.
5. Solicitar el envío para pedidos pagados y guardar el identificador y seguimiento.
6. Notificar al cliente y gestionar cancelaciones, devoluciones y reembolsos.

No almacenar datos de tarjeta. Preferir checkout alojado por el proveedor. Mantener claves secretas solo en variables de entorno del servidor y no enviar direcciones al operador logístico antes de tener un pedido pagado.

## Decisiones pendientes

- Pasarela, países, moneda e impuestos.
- Tienda y persistencia de pedidos, inventario y sesiones.
- Zonas, tarifas, embalaje, plazos y operador de transporte.
- Proceso de piezas únicas, encargos, roturas, cambios y devoluciones.
- Correo transaccional y gestión de consentimiento/privacidad.

Las carpetas `payments/` y `shipping/` contienen los límites de responsabilidad para cada adaptador.