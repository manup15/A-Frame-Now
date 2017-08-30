
## Agregando escena

Una escena está representada por el elemento <a-scene>. La escena es el objeto raíz global, y todas las entidades están contenidas dentro de la escena.

Una escena es heredada de la clase Entity, por lo que hereda todas sus propiedades, sus métodos, la capacidad de adjuntar componentes y el comportamiento para esperar a todos sus nodos secundarios (por ejemplo, <a-assets>) y las carga antes de arrancar el bucle del render.

<A-scene> además configura automáticamente:
* lienzo, procesador, render loop,
* Cámara y luces predeterminadas,
* Añade una interfaz de usuario para activar el modo VR, entre otras cosas.

```
<a-scene></a-scene>
```

Luego, dentro de la escena colocamos la etiqueta < a-assets> .Dentro de esta etiqueta  se colocarán todos los assets que utilicemos (imagenes, sonido, videos, etc).

```
<a-scene>
  <a-assets>
    <img id="texture" src="texture.png">
  </a-assets>
  <a-box src="#texture"></a-box>
</a-scene>
```
