## Agregando interaccion

Nuestro objetivo aqui es agregar un par de botones a la experiencia. haciendo click en uno u otro cambiaremos la imagen de la esfera en la que estamos inmersos.

Comenzamos agregando un plano con algunos atributos. El plano funcionara como boton.

```
<a-scene>
    <a-sphere position="0 2 0" radius="5" material="src: pen/imagen/paisaje-360.jpg;" side="double"></a-sphere>
    <a-plane
        position="0 2 -3"
        rotation="0 0 0"
        width="1"
        height="1"
        material="src: pen/imagen/boton-1.jpg";
    ></a-plane>
    <a-camera>
    <a-cursor id="cursor"></a-cursor>
  </a-camera>
</a-scene>
```

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
```
En la camara agregamos el atributo wasd-controls-enabled en false. Con esto restringimos la experiencia a permanecer siempre en el mismo lugar, bloqueando las funciones de desplazamiento con el teclado en las teclas W,A,S y D.

La animacion de rotacion en el plano no vamos a necesitarla por ahora, asi es que la removemos, y agregamos un script para cambiar la imagen de la esfera cuando el usuario hace click con el cursor apuntando al plano.

```
<a-scene>
    <a-sphere position="0 2 0" radius="5" material="src: pen/imagen/paisaje-360.jpg;" side="double"></a-sphere>
    <a-plane position="0 2 -3" rotation="0 0 0" width="1" height="1" material="src: pen/imagen/boton-1.jpg"; side="double">
        <a-animation attribute="position" dur="1000" to="0 2.2 -3" direction="alternate-reverse" repeat="indefinite" ></a-animation>
    </a-plane>
    <a-camera>
    <a-cursor id="cursor"></a-cursor>
  </a-camera>
</a-scene>
<script>
    document.querySelector('a-plane').addEventListener('click', function (evt) {
        document.querySelector('a-sphere').setAttribute("material", "src: pen/imagen/ciudad-360.jpg;");
    });
</script>
```

Agregamos otro plano. Este funcionara como segundo boton para devolvernos a la imagen inicial. La idea aqui es que tengamos dos planos en la escena, uno visible y el otro oculto. Cuando cliqueamos el visible, la imagen de la esfera cambia. EL plano visible se mueve a una posicion mas lejana saliendo de nuestro campo de vision. El plano oculto se hace visible.


```
<a-scene>
    <a-sphere position="0 2 0" radius="5" material="src: pen/imagen/paisaje-360.jpg;" side="double"></a-sphere>

    <a-plane id="boton-1" position="0 2 -3" rotation="0 0 0" width="1" height="1" material="src: pen/imagen/boton-1.jpg"; side="double"></a-plane>

    <a-plane id="boton-2" position="2 100 -3" rotation="0 0 0" width="1" height="1" material="src: pen/imagen/boton-2.jpg"; side="double"></a-plane>

    <a-camera wasd-controls-enabled="false">
    <a-cursor id="cursor"></a-cursor>
  </a-camera>

</a-scene>
<script>
    document.querySelector('#boton-1').addEventListener('click', function() {
        this.setAttribute("position", "0 100 -3");
        document.querySelector('#boton-2').setAttribute("position", "2 2 -3");
        document.querySelector('a-sphere').setAttribute("material", "src: pen/imagen/ciudad-360.jpg;");
    });
    document.querySelector('#boton-2').addEventListener('click', function() {
        this.setAttribute("position", "2 100 -3");
        document.querySelector('a-sphere').setAttribute("material", "src: pen/imagen/cubos-360.jpg;");
    });
</script>
```

Aunque seria mas comodo si ambos estuviesen en el mismo lugar al clickearse. Lo que haremos entonces sera modificar la posicion inicial de ambos planos para intercalarlos.

```
<a-scene>

    <a-sphere position="0 2 0" radius="5" material="src: pen/imagen/paisaje-360.jpg;" side="double"></a-sphere>

    <a-plane id="boton-1" position="0 2 -3" rotation="0 0 0" width="1" height="1" material="src: pen/imagen/boton-1.jpg"; side="double"></a-plane>

    <a-plane id="boton-2" position="0 100 -3" rotation="0 0 0" width="1" height="1" material="src: pen/imagen/boton-2.jpg"; side="double"></a-plane>

    <a-camera wasd-controls-enabled="false">
        <a-cursor id="cursor"></a-cursor>
    </a-camera>

</a-scene>
<script>
    document.querySelector('#boton-1').addEventListener('click', function() {
        this.setAttribute("position", "0 100 -3");
        document.querySelector('#boton-2').setAttribute("position", "0 2 -3");
        document.querySelector('a-sphere').setAttribute("material", "src: pen/imagen/ciudad-360.jpg;");
    });
    document.querySelector('#boton-2').addEventListener('click', function() {
        this.setAttribute("position", "0 100 -3");
        document.querySelector('a-sphere').setAttribute("material", "src: pen/imagen/cubos-360.jpg;");
    });
</script>
```
