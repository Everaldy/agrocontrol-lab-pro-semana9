function systemCheck() {
  const activities = readActivities();
  const formExists = Boolean(document.querySelector("#activityForm"));
  const storageAvailable = (() => {
    try {
      localStorage.setItem("agrocontrol_test", "ok");
      localStorage.removeItem("agrocontrol_test");
      return true;
    } catch {
      return false;
    }
  })();

  console.group("Diagnóstico del sistema");
  console.log("Aplicación:", APP_CONFIG.appName);
  console.log("Versión:", APP_CONFIG.version);
  console.log("Modo depuración:", APP_CONFIG.debugMode);
  console.log("Formulario encontrado:", formExists);
  console.log("localStorage disponible:", storageAvailable);
  console.log("Actividades registradas:", activities.length);
  console.groupEnd();

  writeDebugOutput(`Sistema revisado. Formulario: ${formExists ? "OK" : "No encontrado"}. Registros: ${activities.length}. Revisa la consola.`);
  setSystemStatus("ok", "Diagnóstico ejecutado", "El sistema fue revisado. Mira los detalles en consola.");
}

function showConsoleTable() {
  const activities = readActivities();
  console.group("Actividades guardadas");
  console.table(activities);
  console.groupEnd();
  writeDebugOutput(`Se enviaron ${activities.length} registros a console.table().`);
}

function validationTest() {
  const invalidExample = {
    type: "leche",
    name: "A",
    quantity: 0,
    unit: "kilos",
    date: "2999-01-01",
    responsible: "Lu",
    note: "Prueba automática desde el panel de diagnóstico."
  };
  const result = validateActivity(invalidExample);
  console.group("Prueba automática de validaciones");
  console.log("Datos probados:", invalidExample);
  console.warn("Errores encontrados:", result.errors);
  console.groupEnd();
  writeDebugOutput("Prueba de validaciones ejecutada. Deben aparecer errores esperados en consola.");
  setSystemStatus("warning", "Validaciones probadas", "Se ejecutó una prueba con datos incorrectos.");
}

function inspectLocalStorage() {
  const raw = localStorage.getItem(APP_CONFIG.storageKey);
  console.group("localStorage");
  console.log("Clave usada:", APP_CONFIG.storageKey);
  console.log("Valor crudo:", raw);
  console.log("Valor interpretado:", readActivities());
  console.groupEnd();
  writeDebugOutput("localStorage revisado. Abre Application > Local Storage en DevTools para verlo visualmente.");
}

function simulateControlledError() {
  console.group("Reto de depuración controlado");
  console.warn("Este botón ejecuta un error intencional para que practiques consola y depurador.");
  console.warn("Pista: revisa el nombre de la función llamada al final de simulateControlledError().");
  console.groupEnd();

  writeDebugOutput("Se activó un error controlado. Revisa la consola y ubica la línea exacta en debug-panel.js.");
  setSystemStatus("error", "Error controlado", "El sistema generó un error intencional para practicar depuración.");

  // Error intencional: esta función no existe.
  // Actividad del estudiante: comentar esta línea o cambiarla por systemCheck().
  // funcionQueNoExisteParaPracticarDebugger();
}
