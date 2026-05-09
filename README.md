# AgroControl Lab Pro - Semana 9

## 1. Proposito del proyecto

Este proyecto es una mini aplicacion web educativa para practicar:

- Pruebas y depuracion.
- Consola del navegador.
- Inspector de elementos.
- Depurador de JavaScript.
- Validaciones de formularios.
- Integracion de HTML, CSS y JavaScript.
- Almacenamiento local con `localStorage`.
- Entrega incremental de una funcionalidad semanal.
- Evidencias para Moodle o GitHub.

El contexto del proyecto es una finca o comunidad rural que necesita registrar actividades productivas como produccion de leche, cosecha de maiz, gastos, inventario y mantenimiento.

---

## 2. Que debes lograr en esta actividad

Tu tarea es ejecutar el proyecto, explorar su estructura, probar sus funcionalidades, usar las herramientas del navegador y entregar evidencias de que el sistema funciona correctamente.

Tambien deberas activar un error controlado y corregirlo siguiendo una ruta de depuracion.

---

## 3. Estructura del proyecto

```txt
agrocontrol-lab-pro-semana9/
├── index.html
├── README.md
├── css/
│   ├── styles.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── config.js
│   ├── database.js
│   ├── validators.js
│   ├── ui.js
│   ├── charts.js
│   ├── debug-panel.js
│   └── seed-data.js
├── data/
│   └── sample-data.json
├── evidencias/
│   └── .gitkeep
├── .vscode/
│   └── settings.json
├── .gitignore
└── LICENSE
```

### Funcion de cada archivo principal

| Archivo | Para que sirve |
|---|---|
| `index.html` | Contiene la estructura visual de la pagina. |
| `css/styles.css` | Define colores, botones, tarjetas, tabla, formulario y estilo general. |
| `css/responsive.css` | Ajusta la pagina para celular, tableta y computador. |
| `js/config.js` | Guarda configuraciones generales del sistema. |
| `js/database.js` | Guarda, lee, elimina y exporta datos usando `localStorage`. |
| `js/validators.js` | Valida los datos del formulario antes de guardar. |
| `js/ui.js` | Actualiza la tabla, metricas, mensajes y pantalla. |
| `js/charts.js` | Dibuja el grafico usando `canvas`. |
| `js/debug-panel.js` | Contiene botones de diagnostico y el error controlado. |
| `js/app.js` | Conecta todos los modulos y escucha los eventos de la pagina. |

---

## 4. Como abrir el proyecto en VS Code

1. Descarga y descomprime el archivo `.zip`.
2. Abre Visual Studio Code.
3. Selecciona **File > Open Folder** o **Archivo > Abrir carpeta**.
4. Elige la carpeta `agrocontrol-lab-pro-semana9`.
5. Verifica que puedas ver las carpetas `css`, `js`, `data` y `evidencias`.

---

## 5. Como ejecutar el proyecto con Live Server

1. Instala la extension **Live Server** en VS Code si no la tienes.
2. Abre el archivo `index.html`.
3. Haz clic derecho dentro del archivo.
4. Selecciona **Open with Live Server**.
5. El navegador debe abrir una direccion parecida a:

```txt
http://127.0.0.1:5501/index.html
```

Si la pagina carga, ya puedes empezar las pruebas.

---

## 6. Ruta de exploracion del estudiante

Sigue este orden:

1. Abre el proyecto en VS Code.
2. Ejecuta `index.html` con Live Server.
3. Observa la pagina principal.
4. Presiona `F12` para abrir las herramientas del navegador.
5. Entra a la pestana **Console**.
6. Entra a la pestana **Elements** o **Inspector**.
7. Entra a la pestana **Sources** para usar el depurador.
8. Entra a la pestana **Application > Local Storage** para revisar la base local.
9. Registra actividades validas e invalidas.
10. Toma capturas para la entrega.

---

## 7. Prueba basica de funcionamiento

Realiza esta prueba:

1. Haz clic en **Cargar datos de prueba**.
2. Observa que se actualizan:
   - Las tarjetas del dashboard.
   - La tabla de registros.
   - El grafico de actividades por tipo.
3. Escribe en el buscador el nombre `Juan`.
4. Cambia el filtro por tipo de actividad.
5. Haz clic en **Ver datos en consola**.
6. Abre la consola y verifica que aparece una tabla con los registros.

Resultado esperado: el sistema debe mostrar datos, filtrar registros y no presentar errores criticos en consola.

---

## 8. Prueba del formulario

Registra una actividad valida:

| Campo | Valor de ejemplo |
|---|---|
| Tipo | Produccion de leche |
| Nombre | Ordeño tarde |
| Cantidad | 28 |
| Unidad | Litros |
| Fecha | Fecha actual o anterior |
| Responsable | Ana |
| Observacion | Produccion registrada correctamente |

Resultado esperado:

- El registro aparece en la tabla.
- El dashboard se actualiza.
- El grafico se actualiza.
- La consola muestra informacion del envio del formulario.
- Si recargas la pagina, el dato permanece guardado.

---

## 9. Pruebas de validacion

Prueba casos incorrectos:

| Caso | Accion | Resultado esperado |
|---|---|---|
| Campos vacios | Enviar el formulario vacio | Deben aparecer mensajes de error. |
| Cantidad cero | Escribir `0` en cantidad | El sistema debe rechazar el registro. |
| Fecha futura | Seleccionar una fecha posterior a hoy | El sistema debe mostrar error. |
| Responsable corto | Escribir solo `Lu` | El sistema debe pedir minimo 3 caracteres. |
| Leche en kilos | Tipo leche y unidad kilos | El sistema debe pedir litros. |
| Gasto en litros | Tipo gasto y unidad litros | El sistema debe pedir pesos. |

---

## 10. Uso de la consola

Abre la consola con `F12 > Console`.

Acciones recomendadas:

1. Clic en **Revisar sistema**.
2. Clic en **Ver datos en consola**.
3. Clic en **Probar validaciones**.
4. Clic en **Revisar localStorage**.

Debes observar mensajes como:

```js
console.log("Actividades registradas:", activities.length);
console.table(activities);
console.warn("Errores encontrados:", result.errors);
```

La consola sirve para observar datos internos, errores, advertencias y resultados de prueba.

---

## 11. Uso del inspector

Abre `F12 > Elements` o `Inspector`.

Realiza estas acciones:

1. Selecciona el boton **Guardar actividad**.
2. Revisa sus clases CSS.
3. Cambia temporalmente el texto o color desde el inspector.
4. Selecciona el formulario y revisa su `id`.
5. Selecciona una tarjeta del dashboard y revisa sus estilos.

Importante: los cambios hechos desde el inspector son temporales. Si quieres conservar un cambio, debes hacerlo en `css/styles.css` o `index.html`.

---

## 12. Uso del depurador

Abre `F12 > Sources`.

Ruta recomendada:

1. Busca el archivo `js/validators.js`.
2. Ubica la funcion `validateActivity`.
3. Pon un breakpoint en esta linea:

```js
const quantity = Number(formData.quantity);
```

4. Regresa a la pagina.
5. Envia el formulario.
6. Observa como el navegador pausa el codigo.
7. Revisa el valor de `formData`, `quantity` y `errors`.
8. Usa los botones de paso a paso del depurador.

El depurador sirve para revisar el comportamiento del codigo linea por linea.

---

## 13. Reto de depuracion controlado

El proyecto incluye un error intencional para practicar.

### Como activarlo

1. Abre la consola con `F12`.
2. Haz clic en el boton **Simular error controlado**.
3. Observa el error en consola.
4. La consola debe indicar un problema relacionado con una funcion que no existe.

### Donde esta el error

Abre el archivo:

```txt
js/debug-panel.js
```

Busca esta funcion:

```js
function simulateControlledError() {
```

Al final encontraras una linea como esta:

```js
funcionQueNoExisteParaPracticarDebugger();
```

### Como corregirlo

Tienes dos opciones:

Opcion A: comentar la linea del error:

```js
// funcionQueNoExisteParaPracticarDebugger();
```

Opcion B: cambiarla por una funcion real:

```js
systemCheck();
```

Despues de corregir:

1. Guarda el archivo.
2. Recarga la pagina.
3. Vuelve a hacer clic en **Simular error controlado**.
4. Comprueba que la consola ya no muestra ese error.

---

## 14. Feature semanal sugerida

Ademas de probar y depurar, debes proponer una mejora pequena.

Elige una:

### Opcion A: Mejora visual

Cambia colores, tamanos o distribucion de alguna seccion en `css/styles.css`.

### Opcion B: Mejora de validacion

Agrega una regla nueva en `js/validators.js`.

Ejemplo: impedir que la observacion tenga menos de 5 caracteres.

### Opcion C: Mejora funcional

Agrega una nueva opcion de tipo de actividad en el formulario.

Ejemplo:

```html
<option value="riego">Riego</option>
```

Luego debes agregar su nombre en `js/charts.js` dentro de `TYPE_LABELS`.

### Opcion D: Mejora de usabilidad

Cambia un texto, ayuda, mensaje o instruccion para que el sistema sea mas claro para el usuario.

---

## 15. Evidencias que debes guardar

Guarda tus capturas dentro de la carpeta `evidencias/`.

Capturas sugeridas:

```txt
captura-01-pagina-funcionando.png
captura-02-consola.png
captura-03-inspector.png
captura-04-debugger.png
captura-05-localstorage.png
captura-06-github.png
```

---

## 16. Como subir el proyecto a GitHub

Desde la terminal de VS Code, dentro de la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Entrega Semana 9 - AgroControl Lab Pro"
git branch -M main
git remote add origin URL_DEL_REPOSITORIO
git push -u origin main
```

Reemplaza `URL_DEL_REPOSITORIO` por la URL de tu repositorio en GitHub.

Si no usas GitHub, entrega el proyecto comprimido en Moodle.

---

## 17. Checklist de entrega

Marca cada punto antes de entregar:

### Ejecucion

- [X] Abri el proyecto en VS Code.
- [X] Ejecute el proyecto con Live Server.
- [X] La pagina carga correctamente.
- [X] La consola no muestra errores criticos al iniciar.

### Funcionalidad

- [X] Cargue datos de prueba.
- [X] Registre una actividad valida.
- [X] Los datos aparecen en la tabla.
- [X] El dashboard se actualiza.
- [X] El grafico se actualiza.
- [X] Los datos permanecen despues de recargar la pagina.

### Validaciones

- [X] Probe campos vacios.
- [X] Probe cantidad cero o negativa.
- [X] Probe fecha futura.
- [X] Probe responsable con menos de 3 caracteres.
- [X] Probe combinaciones incorrectas como leche en kilos o gasto en litros.

### Depuracion

- [X] Use la consola del navegador.
- [X] Use el inspector de elementos.
- [X] Use el depurador con al menos un breakpoint.
- [X] Active el error controlado.
- [X] Corrigi el error controlado.

### Entrega

- [X] Guarde capturas en la carpeta `evidencias`.
- [X] Realice una mejora pequena al proyecto.
- [X] Subi el proyecto a GitHub o lo comprimi para Moodle.

---

## 18. Rubrica sugerida

| Criterio | Descripcion | Valor |
|---|---|---:|
| Funcionalidad incremental | La mejora semanal funciona correctamente. | 25% |
| Validaciones | Los datos se validan antes de guardar. | 20% |
| Integracion tecnica | HTML, CSS, JavaScript y localStorage funcionan juntos. | 20% |
| Depuracion | Usa consola, inspector y depurador con evidencia. | 15% |
| Usabilidad y diseno | La interfaz es clara, ordenada y facil de usar. | 10% |
| Entrega y documentacion | Incluye capturas, checklist y repositorio o ZIP. | 10% |
| Total |  | 100% |

---

## 19. Preguntas de reflexion

Responde brevemente:

1. Que error encontraste y como lo corregiste?
 Encontré un error provocado por una función inexistente en el archivo debug-panel.js.
 Lo corregí comentando la línea que llamaba la función inexistente para evitar el error en consola.
2. Para que te sirvio la consola?
La consola me sirvió para observar mensajes del sistema, validar datos, revisar errores y comprobar que las funciones del proyecto trabajaban correctamente.
3. Que revisaste con el inspector?
Revisé la estructura HTML, los estilos CSS, botones, formularios y elementos visuales de la aplicación.
4. Que variable observaste con el depurador?
Observé variables como formData, quantity y errors dentro de la función de validación.
5. Que mejora agregaste al proyecto?
Implementé una mejora de interfaz avanzada con efectos de iluminación dinámica (Glow IA) y espejo. Usé variables CSS para que los cuadros y los destellos visuales se adapten solos al Modo Oscuro, logrando que el sistema se vea mucho más profesional y tecnológico sin importar el tema que se elija.
6. Como podria usarse este sistema en una finca, colegio o comunidad rural?
Este sistema sirve para digitalizar procesos clave. En una finca o comunidad, permite elegir entre opciones como producción de leche, cosecha de maíz, gastos, inventario o mantenimiento para llevar un control exacto de lo que se hace día a día. Ayuda a dejar de usar papel y permite ver los datos organizados al instante para tomar mejores decisiones.
---

## 20. Recomendacion final

No entregues solo capturas. Entrega una version funcional del proyecto. La idea de esta semana es demostrar que sabes probar, depurar, validar, corregir y presentar una mejora integrada.
