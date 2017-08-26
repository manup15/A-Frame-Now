##Primitivas

Las primitivas son los "objetos" que se pueden poner en la escena. Existe una gran variedad de éstas definidas por A-Frame como cajas, conos, cilindros, planos,imagenes, textos, etc. Aqúi se mencionan las más comunes de utilizar.


Dentro del elemento <a-assets> se colocan todos los assets (imagenes, sonido, videos, etc).

```
<a-scene>
  <a-assets>
    <img id="texture" src="texture.png">
  </a-assets>
  <a-box src="#texture"></a-box>
</a-scene>
```


#### Cámara
La cámara define la perspectiva desde la cual el usuario ve la escena.
> Cuando no está en modo VR, userHeight (altura de usuario) eleva la cámara hasta la altura promedio aproximada del nivel del ojo humano, 1,6 (metros). Al introducir el modo VR, este desplazamiento de altura se elimina de tal manera que usamos la posición absoluta devuelta desde el casco VR. La compensación es conveniente para las experiencias que trabajan tanto dentro como fuera de VR.

Agregamos a continuación una cámara a la escena. Ésta tendrá como nodo hijo un cursor, el cual ayuda al usuario a identificar el centro de la escena y a interactuar con diferentes primitivas.

```
<a-scene>
  <a-assets>
    <img id="texture" src="images/texture.jpg">
  </a-assets>
  <a-box src="#texture"></a-box>
  <a-camera>
    <a-cursor id="cursor"></a-cursor>
  </a-camera>
</a-scene>
```


#### Imagen
Se puede agregar una imágen sobre una entidad colocando la ruta de la imagen dentro de los assets y luego asignandosela a la primitiva < a-image>. Entre sus atributos más comunes se encuentra el ancho y el alto de la imagen

```
<a-scene>
  <a-assets>
    <img id="my-image" src="images/curved-image.jpg">
  </a-assets>
  <a-image src="#my-image" width="200" height="100"></a-image>
</a-scene>
```

#### Texto
Entre sus propiedades prinicipales se encuentran:
* align (left,center,right).
* color.
* height y width (altura y anchura del plano que contiene al texto).
* opacity (opacidad del texto).

Se pueden obtener todas las propiedades [aquí](https://aframe.io/docs/0.6.0/components/text.html#properties)
El texto no se renderiza al igual que en un sitio web 2D, por lo tanto las fuentes son limitadas.
[Aquí](https://aframe.io/docs/0.6.0/components/text.html#stock-fonts) un listado de fuentes compatibles.
```
<a-entity text="value: Hello World;"></a-entity>
```
#### Iluminación
Componente de luz define la entidad como una fuente de luz. La luz afecta a todos los materiales que no han especificado un modelo de sombreado plano con sombreado: plano.
Hay que tener en cuenta que las luces son computacionalmente caras y es importante limitar el número de luces en la escena.


```
<a-entity light="color: #AFA; intensity: 1.5" position="-1 1 0"></a-entity>
```
Podemos desactivar las lueces por defecto agregand light="defaultLightsEnabled: false" a la escena para luego colocar las luces de interés.

```
<a-scene light="defaultLightsEnabled: false">
</a-scene>
```
Los tipos de luz son:
* Ambiente.
* Direccional.
* Hemisferio.
* Punto.
* Spot de luz.

> Las luces del hemisferio son como una luz ambiente, pero con dos colores diferentes, uno de arriba y uno de abajo . Esto puede ser útil para escenas con dos colores de iluminación distintos (por ejemplo, un campo verde bajo un cielo gris).

Se puede ver una descipción completa de las luces [aquí](https://aframe.io/docs/0.6.0/components/light.html#light-types)


#Atributos

Como todas las entidades de AFRAME son elementos HTML, vamos a manejarnos mucho atraves de atributos html de cada una para manejarnos y alterarlas.

Si vamos ahora mismo a ver el resultado en el navegador, no vamos a ver nada. La escena y la caja estan renderizadas, pero aun no tienen ninguna propiedad que haga visibles estos elementos. Agregamos entonces alguns artibutos a la caja: posicion, rotacion y color. Agregamos tambien un cielo con color. El cielo se representa con el elemento <a-sky>

```
<a-scene>

    <a-box
        position="-1 0.5 -3"
        rotation="0 45 0"
        color="red"
    ></a-box>

    <a-sky
        color="blue"
    ></a-sky>

</a-scene>
```

Perfecto. Ahora ya podemos ver una caja roja bajo un cielo azul. Otra primitivas son la esfera, o <a-sphere>, la camara y el cursor.
Como el cursor representa el centro de nuestra vision, necesitamos adjuntarlo a la camara. Pero en A-Frame la camara viene agregada por defecto (no se necesitamos agregar un elemento "camara" a nuestro html para ver nuestra experiencia en el navegador). Para unir el cursor a la camara agregamos amos elementos uno dentro del otro.

```
<a-scene>
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
    <a-sky color="#cafefc" material="src: pen/imagen/nubes.png;"></a-sky>
    <a-sphere
        position="0 1.25 -5"
        radius="1.25"
        color="#EF2D5E"
    ></a-sphere>
    <a-camera>
        <a-cursor id="cursor"></a-cursor>
    </a-camera>
</a-scene>
```
