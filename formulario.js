console.log("Script cargado correctamente");

// Limpiar cualquier listener previo para evitar envíos múltiples
const form = document.getElementById("miFormulario");
if (form) {
    // Remover listeners previos (por si acaso)
    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);

    newForm.addEventListener("submit", async function(event) {
        event.preventDefault();
        console.log("Formulario enviado - Inicio");

        // Recolectar los datos del formulario
        const formData = {
            "Nombre IC": document.getElementById("nombre-ic")?.value || "No encontrado",
            "Edad IC": document.getElementById("edad-ic")?.value || "No encontrado",
            "Edad OOC": document.getElementById("edad-ooc")?.value || "No encontrado",
            "Nombre de Discord": document.getElementById("discord")?.value || "No encontrado",
            "Steam": document.getElementById("steam")?.value || "No encontrado",
            "Tiempo disponible diario": document.getElementById("tiempo")?.value || "No encontrado",
            "Experiencia previa": document.getElementById("experiencia")?.value || "No encontrado",
            "¿Por qué deberíamos elegirte?": document.getElementById("razon-eleccion")?.value || "No encontrado",
            "¿Por qué el Burger Shot y no el Salieri's?": document.getElementById("razon-burgershot")?.value || "No encontrado"
        };

        console.log("Datos recolectados:", formData); // Verificar los valores

        // Si todos los campos están vacíos o "No encontrado", no enviar
        const allEmpty = Object.values(formData).every(value => value === "" || value === "No encontrado");
        if (allEmpty) {
            console.log("No se enviará: Todos los campos están vacíos");
            const messageDiv = document.getElementById("formMessage");
            messageDiv.textContent = "Por favor, completa el formulario.";
            messageDiv.classList.add("show");
            return;
        }

        // Construir el embed para Discord
        const embed = {
            "title": "¡Nueva postulación!",
            "color": 1937372,
            "fields": Object.entries(formData).map(([name, value]) => ({
                "name": name,
                "value": value || "No especificado",
                "inline": false
            }))
        };

        // Configurar el payload para Discord
        const webhookBody = {
            "content": "<@&1343225793894940779>",
            "username": "Burger Shot postulaciones",
            "avatar_url": "https://i.ibb.co/JwdHPMn9/burgershotlogo.webp",
            "embeds": [embed]
        };

        console.log("Payload preparado:", webhookBody);

        // URL del webhook de Discord
        const webhookUrl = "https://discord.com/api/webhooks/1345743030291923004/1L4ERFO5spRTYKJ-jpBxrLIwB1acXdskTO8DXUVq2gBxd70izyY5BllyFO4eanAjjErU";
        const messageDiv = document.getElementById("formMessage");

        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(webhookBody)
            });

            console.log("Respuesta del servidor:", response.status);

            if (response.ok) {
                messageDiv.textContent = "¡Postulación enviada con éxito!";
                messageDiv.classList.add("show");
                newForm.reset();
                setTimeout(() => messageDiv.classList.remove("show"), 3000);
            } else {
                messageDiv.textContent = `Error: ${response.status} - ${response.statusText}`;
                messageDiv.classList.add("show");
            }
        } catch (error) {
            console.error("Error detallado:", error);
            messageDiv.textContent = "Hubo un problema al enviar.";
            messageDiv.classList.add("show");
        }
    }, { once: true }); // Asegurarse de que el listener se ejecute solo una vez por envío
} else {
    console.error("No se encontró el formulario con ID 'miFormulario'");
}
