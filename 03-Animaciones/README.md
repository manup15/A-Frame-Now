
Ahora vamos a darle un poco de movimiento a nuestro boton. A-Frame maneja las animaciones de la misma manera que las primitivas, por medio de elementos con atributos. Para agregar animacion a una primitiva, la colocamos dentro de esta. EN nuestro ejemplo, agregamos dos animaciones, una para animar la posicion y otra la rotacion. En cada animacion podemos setear la propiedad a animar, su duracion, direccion, repeticion, entre otras.

```
<a-scene>
    <a-sphere position="0 2 0" radius="5" material="src: pen/imagen/paisaje-360.jpg;" side="double"></a-sphere>
    <a-plane position="0 2 -3" rotation="0 0 0" width="1" height="1" material="src: pen/imagen/boton-1.jpg"; side="double">
        <a-animation
            attribute="position"
            dur="1000"
            to="0 2.2 -3"
            direction="alternate-reverse"
            repeat="indefinite"
        ></a-animation>
        <a-animation
            attribute="rotation"
            dur="1000"
            to="0 360 0"
            direction="alternate-reverse"
            repeat="indefinite"
        ></a-animation>
    </a-plane>
    <a-camera wasd-controls-enabled="false">
    <a-cursor id="cursor"></a-cursor>
  </a-camera>
</a-scene>