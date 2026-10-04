# Envíos

Espacio reservado para el adaptador de logística. No se han definido operador, zonas ni tarifas.

Al implementarlo:

- Crear envíos solo para pedidos pagados y con dirección validada.
- Mantener los datos de entrega limitados al proceso de preparación y transporte.
- Separar la creación de etiquetas de la actualización de seguimiento del envío.
- Guardar el identificador externo, el estado, el enlace de seguimiento y las fechas relevantes.
- Hacer idempotentes las solicitudes para que reintentos no generen etiquetas duplicadas.
- Diseñar el proceso para piezas frágiles, incidencias, entrega fallida y devoluciones.

Antes de mostrar plazos o costes, confirmar origen, destinos, embalaje, tarifas y condiciones con el taller y el transportista.