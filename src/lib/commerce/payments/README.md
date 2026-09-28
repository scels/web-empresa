# Pagos

Espacio reservado para el adaptador de pago. La elección del proveedor queda pendiente.

Al implementarlo:

- Crear sesiones de checkout en el servidor y redirigir a una página alojada por el proveedor.
- Calcular importes a partir del catálogo del servidor; nunca confiar en importes enviados por el navegador.
- Verificar firma y origen de cada webhook, contemplar reintentos e impedir procesar dos veces el mismo evento.
- Cambiar el estado del pedido a pagado solo tras confirmación fiable del proveedor.
- No guardar ni registrar números de tarjeta, códigos de seguridad ni claves secretas.
- Añadir pruebas para pago correcto, fallo, cancelación, webhook repetido y firma inválida.

Definir nombres de variables de entorno y actualizar `.env.example` cuando se elija proveedor. No incluir valores reales en Git.