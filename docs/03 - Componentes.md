## Componentes

camara

```
<a-scene>
  <a-assets>
    <img id="texture" src="texture.png">
  </a-assets>
  <a-box src="#texture"></a-box>
  <a-camera>
  <a-cursor id="cursor"></a-cursor>
</a-camera>
</a-scene>
```
rotacion
```
<a-entity rotation="45 90 180"></a-entity>
```
escala
```
<a-entity scale="0.5 1 2"></a-entity>
```
sonido
```
<a-scene>
  <a-assets>
    <audio id="river" src="river.mp3" preload="auto"></audio>
  </a-assets>
  <a-entity sound="src: #river"></a-entity>
</a-scene>
```
texto
```
<a-entity text="value: Hello World;"></a-entity>
```

wasd controles
```
<a-entity camera look-controls wasd-controls></a-entity>
```
