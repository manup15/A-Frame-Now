## Empezando {#empezando}

Vamos a empezar declarando nuestra escena, que es el objeto raiz donde se colocaran todas las entidades de la experiencia. La representamos mediante el elemento 
<a-scene>

```
<a-scene></a-scene>
```

Agregamos una primiiva, en este caso, una caja.

```
<a-scene>
    <a-box></a-box>
</a-scene>
```

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

Ahora ya podemos ver una caja roja bajo un cielo azul. Otra primitivas son la esfera, o <a-sphere>, la camara y el cursor.
Como el cursor representa el centro de nuestra vision, necesitamos adjuntarlo a la camara. Pero en A-Frame la camara viene agregada por defecto (no se necesitamos agregar un elemento "camara" a nuestro html para ver nuestra experiencia en el navegador). Para unir el cursor a la camara agregamos amos elementos uno dentro del otro.

```
<a-scene>
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" material="src: pen/imagen/madera.jpg;"></a-box>
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

