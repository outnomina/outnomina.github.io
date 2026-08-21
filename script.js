document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var form = document.getElementById("leadForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var data = new FormData(form);
      var servicio = data.get("servicio") || "Consulta general";
      var tipo = data.get("tipo");
      var nombre = data.get("nombre") || "";
      var email = data.get("email") || "";
      var telefono = data.get("telefono") || "";
      var empleados = data.get("empleados");
      var mensaje = data.get("mensaje") || "";

      var subject = "Consulta Outnomina - " + servicio;

      var bodyLines = [
        "Nombre: " + nombre,
        "Email: " + email,
        "Teléfono: " + (telefono || "No indicado"),
        "Servicio de interés: " + servicio
      ];
      if (tipo) bodyLines.push("Tipo: " + tipo);
      if (empleados) bodyLines.push("Número aproximado de empleados: " + empleados);
      bodyLines.push("");
      bodyLines.push("Mensaje:");
      bodyLines.push(mensaje);

      var body = bodyLines.join("\n");

      var mailto =
        "mailto:luis.sanchez@outnomina.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }
});
