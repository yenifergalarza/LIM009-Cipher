

# Cifrado César :penguin:

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## Resumen del proyecto :penguin:

¿Qué tengo que hacer exactamente? En este proyecto crearás la primera aplicación web del _bootcamp_. Servirá para que el usuario pueda cifrar y descifrar un texto indicando un desplazamiento específico de caracteres (_offset_).

La temática es libre. Tú debes pensar en qué situaciones de la vida real se necesitaría cifrar un mensaje y pensar en cómo debe ser esa experiencia de uso (qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc. 

Algunas ideas de ejemplo:

- Crear claves seguras para el email.
- Encriptar/cifrar una tarjeta de crédito.
- Herramienta de mensajería interna de una organización de derechos humanos en una zona de conflicto.
- Mensajería secreta para parejas.

#### Caso elegido :penguin:
Bueno pongámonos en la situación de que somos una persona famosa o una persona que está siendo amenazada o tal vez perseguida. Por ende, necesitas comunicarte con personas de tu círculo cercano, sin que otras personas se enteren. necesitas privacidad y también una forma entendible de comunicación para tu receptor. así que le asigne como respuesta el cifrado cesar
#### como instalar: penguin:

![image](https://user-images.githubusercontent.com/39390011/53751176-b202be80-3e79-11e9-9c9a-ba1430aa6bea.png)
Para usarlo se tiene 2 opciones descargarlo o acceder desde un enlace
-	Para el primer caso lo descargas, luego entras a la carpeta src y finalmente accedes al index.html
-	Para el enlace simplemente haces click a esto https://yenifergalarza.github.io/LIM009-Cipher/src
#### Definición del producto: penguin:

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.

- Quiénes son los principales usuarios de producto.
- ====>  personas que generalmente están expuestas al ojo público, personas perseguidas, personas amenazadas o que siempre están rodeada de otras personas y estas interfieren con su comunicación privada. Así que necesitan hablar con personas de su entorno. 

--------------------------------------------------------

- Cuáles son los objetivos de estos usuarios en relación con tu producto.
-  ====> Lograr mayor privacidad, entregar datos con cierto recelo, dar lugar a una comunicación secreta pero entendible y que además tenga una interfaz entendible e intuitiva, por lo tanto, amigable.

----------------------------------------------------------------------------------------------

- Cómo crees que el producto que estás creando está resolviendo sus problemas.
- ====>  mediante el cifrado logran tener el significado de forma no explicita ,y al estar en una web es fácil de acceder y tiene una interfaz que hace su uso más simple ,y por lo tanto más rápida.

-----------------------------------------------------------------------------------------------------

#### Interfaz de usuario (UI) :penguin:
- vista en celular
- ![image](https://user-images.githubusercontent.com/39390011/53353802-7c972780-38f3-11e9-98ce-1e503f6228af.png)

- vista en tablet

- ![image](https://user-images.githubusercontent.com/39390011/53353729-5c676880-38f3-11e9-8e07-65162c02d654.png)

- vista en computadora
- ![image](https://user-images.githubusercontent.com/39390011/53353682-4659a800-38f3-11e9-83f9-255e6b8c7617.png)



## Evaluación :penguin:

Te aconsejamos revisar [la rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada _habilidad_ y cada _nivel_. Esta es una lista de todas las habilidades involucradas en este proyecto y que evaluaremos cuando lo completes:

## Diseño de experiencia de usuario (User Experience Design) :penguin: :

- Ideación

primero pensé en establecer un color base, que transmita la emoción e idea de la página de una forma rápida
por ello elegí el azul, es un color que representa la confianza, el profesionalismo y la tranquilidad

![image](https://user-images.githubusercontent.com/39390011/53352810-7d2ebe80-38f1-11e9-9c87-33796fc1fe2d.png)

![image](http://reader.digitalbooks.pro/content/preview/books/45900/book/OEBPS/Images/lm05.jpg)

- Prototipado (sketching)

bueno el prototipado, lo hice de baja fidelidad a mano alzada. Cambio según el feedback obtenido 

![image](https://user-images.githubusercontent.com/39390011/53355442-085e8300-38f7-11e9-9d14-90cb5d2ec0ba.png)

- Testeo e Iteración

Gracias al testeo logre cambiar el diseño para hacerlo mucho más amigable al usuario
![image](https://user-images.githubusercontent.com/39390011/53751524-70264800-3e7a-11e9-92c9-fab29ee9d3e3.png)
## Checklist :penguin:

Esta sección está para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria :penguin: 
* [X] `README.md` incluye info sobre proceso y decisiones de diseño.
* [X] `README.md` explica claramente quiénes son los usuarios y su relación con el producto.
* [X] `README.md` explica claramente cómo el producto soluciona los problemas/necesidades de los usuarios.
* [X] Usa VanillaJS.
* [X] No utiliza `this`.
* [X] Implementa `cipher.encode`.
* [X] Implementa `cipher.decode`.
* [X] Pasa linter con configuración provista.
* [X] Pasa pruebas unitarias.
* [X] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [X] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [X] Interfaz permite escribir un texto para ser cifrado.
* [X] Interfaz muestra el resultado del cifrado correctamente.
* [X] Interfaz permite escribir un texto para ser descifrado.
* [X] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [X] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [X] Permite usar un `offset` negativo.

