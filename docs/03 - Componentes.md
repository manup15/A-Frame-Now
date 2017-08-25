## Componentes
Los componentes son propiedades que logran que una entidad sea diferente a otra, única. Los componentes dotan de personalidad a las entidades brindandoles comportamiento, apariencia, funcionalidad, etc.


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


#### Visibilidad
El componente visible determina si una entidad debe o mostrarse en la escena (true o false).

```
<a-entity visible="false"></a-entity>
```


#### Controles wasd
El componente wasd-controls controla una entidad con las teclas WASD o con las flechas del teclado. El componente wasd-controls normalmente se conecta a una entidad con el componente de cámara.
Activando este componente podemos movernos libremente por el espacio 3D.
```
<a-entity camera look-controls wasd-controls></a-entity>
```
