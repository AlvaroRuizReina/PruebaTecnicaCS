# PruebaTecnicaCS
Esto es una prueba técnica, para una Colsultora.

Para el uso de esta prueba se ha empleado como lenguajes.
   - HTML5.
   - CSS.
   - JS.
   - VSCode ( Editor de texto ).
   - Koala ( minificador de ficheros ).
   - Git-GitHub.

-------------------------------------------------------------------- DESCRIPCIÓN DE LA PRUEBA --------------------------------------------------------

La prueba consiste en el desarrollo de un Quiz Choise, es decir, un formulario con preguntas y respuestas que se han de contestar y evaluar. Dicha prueba se dibide 
en las siguientes partes:

Primero: La creación de una cabezera, en la que se detallan algunos pasos a seguir en el Quiz Choise, como cuantas preguntas se han de responder, para aprobar.
Segundo: Desarrollar un acordeon desplegable, que alberga diferentes partes:
  - Una descripción más detallada de la prueba.
  - Cada una de las preguntas, con sus respectivas opciones se han añadido dentro de un formulario. Dichas respuestas contiene los iconos que identifican la 
    respuesta, como correcta o incorrecta. Así hasta un total de 3 respuestas por pregunta en el test.
           
Tercero: El desarrollo de 3 modales, las cuales mostrarán diferentes textos en base al comportamiento del test.
  - Modal Aprobado.
  - Modal de suspenso.
  - Modal de no se ha completado todo el test.

Cuarto: Dos botones uno que será tag button y otro un tag a ( este último actuará como un hipervinculo ). Los cuales nos permiten interactuar con nuestro Quiz Choise,
de la siguiente forma:
  - Tag a: Enlace de hipervinculo, que nos habre una nueva pestaña, donde se encuentra nuestro certificado que demuestra el aprobado.
  - Tag Button: Contendrá la lógica funcional de este Quiz Choise, de la sigunete forma:
    - Si no se reponde a alguna/as pregunta/as y se hace click en el botón, este mostrá una modal que indica que se han quedado respuestas sin responder.
    - En caso de completar todo el test, si el resultado es meno que cinco. Se muestra una modal de suspenso del test y se cuantifica las respuestas acertadas.
    - Por el contrario, si al completar todo el test, el resultado es igual o mayor que 5, hasta un max de 10. Se muestra una modal de aprobado que 
      indica que hemos completado el test, se visualizan los iconos de las respuestas correctas e incorrectas, se cuantifica el resultado de las
      respuetas y se hace visible el botón de certificate. Este último al hacerle click, habre un enlace en una pestaña nueva, donde podremos
      ver nuestro certificado obtenido en forma de img, por aprobar el test.
