## Scripts
```bash
npm i
````
Iniciar

````
npm run api
```
## Imagenes usadas en la lista de hoteles
Unsplash permite acceder a las imágenes con parámetros en la URL para ajustar:

w → ancho de la imagen en píxeles. Ej: w=2048.

h → altura. Ej: h=1024.

q → calidad de compresión JPEG, de 1 a 100. Ej: q=80.

fit → cómo se ajusta la imagen:

crop → recorta para encajar la dimensión exacta.

max → se ajusta dentro de las dimensiones sin recortar.

auto=format → el navegador recibe la mejor versión del formato compatible (webp, jpg, etc.).

crop=faces → útil si hay personas, centra el recorte en caras.

crop=entropy → recorte automático basado en contenido importante de la imagen.

Ejemplo de URL robusta:

https://images.unsplash.com/photo-1560347876-aeef00ee58a1?crop=entropy&cs=tinysrgb&fit=crop&w=2048&h=1365&q=80&auto=format

