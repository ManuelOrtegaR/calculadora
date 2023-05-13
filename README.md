# Calculadora

## Fuciones principales

- Operaciones basicas: Suma (+), resta (-), multiplicación(x) y división (/)
- Guardado y reutlización de resultados
- Limpieza de memoria

## Procedimiento

### Esquema

1. Un contenedor para toda la calculadora
2. Un header para el titulo
3. Un div para la pantalla
4. Un div para el panel de guardado
5. Un div para el teclado numerico (números de 0-9, boton punto (.) y boton de Backspace(<-))
6. Un div o Aside para las operaciones

### Estilos (css)

- Agregar un id a los elementos que van a recibir un estilo
- Definir los estilos para cada elemento

### Funcionalidad

1. Asignar funcion a los botones numericos para que al clickear pinten su numero correspondiente en la pantalla
2. Asignar funcion a la tecla punto (.) para agregar un punto a la pantalla, no permitir agregar un segundo punto por numero
3. Asignar funcion a la tecla Backspace para eliminar uno a uno los numeros pintados en pantalla, si en pantalla se encuentra un resultado, no hacer nada
4. Asignar funcion a los botones de operaciones

- Al presionar el boton se guarde el numero, el identificador de la operación y limpie la pantalla para digitar el segundo numero
- Al presionar nuevamente otra operación sin digitar numeros, cambie el identificador de la operación, así hasta que comience a digitar los números
- Al presionar resultado (=) tome el numero guardado, el identificador de la operacion y el numero en pantalla para imprimir en pantalla el resultado con un identificador de resultado
- Al presionar nuevamente un boton de operacion, guarde ese resultado y repita el proceso de las operaciones

5. Asignar funcion a los botones del panel de guardado

- Al presionar el boton CLEAR (CE) limpie la pantalla y el indicador de operacion
- Al presionar el boton SAVE (SV), guarde el valor en pantalla con un identificador como valueNumber1
- Al presionar el boton MEMORY (ME) en pantalla se vaya imprimiendo uno a uno los valores almacenados por SAVE y se muestre en un span o label el index del dato guardado
- Al presionar el boton DELETE (DE), elimine el valor almacenado en el index al cual apunta MEMORY
