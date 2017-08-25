
## Agregando escena

Una escena está representada por el elemento <a-scene>. La escena es el objeto raíz global, y todas las entidades están contenidas dentro de la escena.

```
<a-scene></a-scene>
```

Dentro del elemento < a-assets> se colocan todos los assets (imagenes, sonido, videos, etc).

```
<a-scene>
  <a-assets>
    <img id="texture" src="texture.png">
  </a-assets>
  <a-box src="#texture"></a-box>
</a-scene>
```
