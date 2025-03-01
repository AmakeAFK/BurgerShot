document.getElementById("miFormulario").addEventListener("submit", async function(event) {
    event.preventDefault();

    // Recolectar los datos del formulario
    const formData = {
        "Nombre IC": document.getElementById("nombre-ic").value,
        "Edad IC": document.getElementById("edad-ic").value,
        "Edad OOC": document.getElementById("edad-ooc").value,
        "Nombre de Discord": document.getElementById("discord").value,
        "Steam": document.getElementById("steam").value,
        "Tiempo disponible diario": document.getElementById("tiempo").value,
        "Experiencia previa": document.getElementById("experiencia").value,
        "¿Por qué deberíamos elegirte?": document.getElementById("razon-eleccion").value,
        "¿Por qué el Burger Shot y no el Salieri's?": document.getElementById("razon-burgershot").value
    };

    // Construir el embed para Discord
    const embed = {
        "title": "¡Nueva postulación!",
        "color": 1937372, // Mismo color que usabas antes
        "fields": Object.entries(formData).map(([name, value]) => ({
            "name": name,
            "value": value || "No especificado",
            "inline": false // Campos en líneas separadas
        }))
    };

    // Configurar el payload para Discord
    const webhookBody = {
        "content": "<@&1343225793894940779>", // Mención del rol fuera del embed
        "username": "Burger Shot postulaciones", // Nombre del bot
        "avatar_url": "https://i.ibb.co/JwdHPMn9/burgershotlogo.webp", // Avatar del bot
        "embeds": [embed]
    };

    // URL del webhook de Discord
    const webhookUrl = "https://discord.com/api/webhooks/1344385106831478806/MDfLH5DDUlAlAmpm-S_hiTJQAm2ZoKNlNu5TZ3yYXsi0a7cFIMveNMw1Y_XRRmqY1tU7";
    const messageDiv = document.getElementById("formMessage");

    console.log("Enviando a Discord:", webhookBody); // Depuración

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(webhookBody)
        });

        console.log("Respuesta del servidor:", response.status); // Depuración

        if (response.ok) {
            messageDiv.textContent = "¡Postulación enviada con éxito!";
            messageDiv.classList.add("show");
            this.reset();
            setTimeout(() => messageDiv.classList.remove("show"), 3000);
        } else {
            messageDiv.textContent = `Error: ${response.status} - ${response.statusText}`;
            messageDiv.classList.add("show");
        }
    } catch (error) {
        console.error("Error al enviar:", error);
        messageDiv.textContent = "Hubo un problema al enviar.";
        messageDiv.classList.add("show");
    }
});
