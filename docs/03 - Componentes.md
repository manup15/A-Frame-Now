## Componentes

#### Cámara
La cámara define la perspectiva desde la cual el usuario ve la escena.
> Cuando no está en modo VR, userHeight (altura de usuario) eleva la cámara hasta la altura promedio aproximada del nivel del ojo humano, 1,6 (metros). Al introducir el modo VR, este desplazamiento de altura se elimina de tal manera que usamos la posición absoluta devuelta desde el casco VR. La compensación es conveniente para las experiencias que trabajan tanto dentro como fuera de VR.

Agregamos a continuación una cámara a la escena. Ésta tendrá como nodo hijo un cursor, el cual ayuda al usuario a identificar el centro de la escena y a interactuar con diferentes primitivas.

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

#### Rotación
El componente de rotación define la orientación de una entidad en el espacio x,y,z. Su medida está en grados.
En el ejemplo, la rotación del espacio de #child1 sería 0 45 0 porque ha heredado la rotación del nodo padre. Es decir, de manera local el elemento #child1 no se ha rotado, sin embargo globalmente hereda la rotación de 45 en Y.

La rotación global de # child2 sería 15 90 30, combinando la rotación definida con la rotación de la entidad principal. En el espacio local la rotación #child2 sería 15 45 30.
```
<a-entity id="parent" rotation="0 45 0">
  <a-entity id="child-1"></a-entity>
  <a-entity id="child-2" rotation="15 45 30"></a-entity>
</a-entity>
```


#### Escala
La escala define una transformación de compresión, estiramiento o deformación de una entidad. Se necesitan tres factores de escala para los ejes X, Y y Z.

Todas las entidades tienen por defecto el componente de escala seteado en 1 1 1.
```
<a-entity scale="0.5 1 2"></a-entity>
```
> Los factores de escala pueden ser negativos, lo que resulta en una reflexión.

#### Sonido
El componente de sonido agrega un audio a la escena. El sonido debe colocarse en un punto del espacio utilizando 'position=(x y z)'.
Entre sus propiedades más importantes se encuentran:
* autoplay (true o false)
* loop (true o false)
* volume( 0 a 1 )
```
<a-scene>
  <a-assets>
    <audio id="river" src="river.mp3" preload="auto"></audio>
  </a-assets>
  <a-entity sound="src: #river" position="0 0 0"></a-entity>
</a-scene>
```
#### Texto
Entre sus propiedades prinicipales se encuentran:
* align (left,center,right).
* color.
* height y width (altura y anchura del plano que contiene al texto).
* opacity (opacidad del texto).

Se pueden obtener todas las propiedades [aquí](https://aframe.io/docs/0.6.0/components/text.html#properties)
```
<a-entity text="value: Hello World;"></a-entity>
```

wasd controles
```
<a-entity camera look-controls wasd-controls></a-entity>
```
