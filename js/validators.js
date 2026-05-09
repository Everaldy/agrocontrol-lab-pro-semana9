function normalizeText(value) {
  return String(value || "").trim();
}

function isFutureDate(dateValue) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selectedDate = new Date(`${dateValue}T00:00:00`);
  return selectedDate > today;
}

function validateActivity(formData) {
  const errors = {};
  const type = normalizeText(formData.type);
  const name = normalizeText(formData.name);
  const unit = normalizeText(formData.unit);
  const date = normalizeText(formData.date);
  const responsible = normalizeText(formData.responsible);
  const note = normalizeText(formData.note);
  const quantity = Number(formData.quantity);

  if (!type) errors.activityType = "Seleccione un tipo de actividad.";
  if (name.length < 3) errors.activityName = "Escriba un nombre de mínimo 3 caracteres.";

  // Validación de cantidad (Reto docente)
  if (!Number.isFinite(quantity) || quantity <= 0) {
    errors.activityQuantity = "La cantidad debe ser un número mayor que cero.";
  }

  if (!unit) errors.activityUnit = "Seleccione una unidad.";
  if (!date) errors.activityDate = "Seleccione una fecha.";
  if (date && isFutureDate(date)) errors.activityDate = "La fecha no puede ser futura.";
  if (responsible.length < 3) errors.activityResponsible = "El responsable debe tener mínimo 3 caracteres.";

  // --- MEJORA SEMANAL INICIO: Observación obligatoria y detallada ---
  if (!note || note.length === 0) {
    errors.activityNote = "La observación es obligatoria para el registro.";
  } else if (note.length < 10) {
    errors.activityNote = "Describa mejor la actividad (mínimo 10 caracteres).";
  } else if (note.length > 160) {
    errors.activityNote = "La observación no puede superar los 160 caracteres.";
  }
  // --- MEJORA SEMANAL FIN ---

  if (type === "gasto" && unit && unit !== "pesos") {
    errors.activityUnit = "Los gastos deben registrarse en pesos.";
  }

  if (type === "leche" && unit && unit !== "litros") {
    errors.activityUnit = "La producción de leche debe registrarse en litros.";
  }

  if (type === "maiz" && unit && unit !== "kilos") {
    errors.activityUnit = "La cosecha de maíz debe registrarse en kilos.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    value: { type, name, unit, date, responsible, note, quantity }
  };
}