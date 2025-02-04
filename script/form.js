document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("3z9Sf39UtcxEPLteU"); // Remplace par ton User ID EmailJS

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Récupération des champs
      let surname = document.getElementById("first-name").value.trim();
      let name = document.getElementById("last-name").value.trim();
      let email = document.getElementById("email").value.trim();
      let subject = document.getElementById("objet").value.trim();
      let message = document.getElementById("message").value.trim();

      // Effacer les messages d'erreur précédents
      document.querySelectorAll(".error-msg").forEach((el) => el.remove());

      let isValid = true;

      // Fonction pour afficher une erreur
      function showError(input, message) {
        let error = document.createElement("p");
        error.classList.add("error-msg");
        error.style.color = "red";
        error.style.fontSize = "14px";
        error.textContent = message;
        input.parentNode.appendChild(error);
      }

      // Vérification des champs
      if (surname === "") {
        showError(
          document.getElementById("first-name"),
          "⚠️ Le prénom est requis."
        );
        isValid = false;
      }
      if (name === "") {
        showError(
          document.getElementById("last-name"),
          "⚠️ Le nom est requis."
        );
        isValid = false;
      }
      if (email === "") {
        showError(document.getElementById("email"), "⚠️ L'email est requis.");
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        showError(document.getElementById("email"), "⚠️ L'email est invalide.");
        isValid = false;
      }
      if (subject === "") {
        showError(document.getElementById("objet"), "⚠️ L'objet est requis.");
        isValid = false;
      }
      if (message === "") {
        showError(
          document.getElementById("message"),
          "⚠️ Le message est requis."
        );
        isValid = false;
      }

      // Si un champ est invalide, on arrête l'envoi
      if (!isValid) return;

      let params = {
        surname,
        name,
        email,
        subject,
        message,
        date: new Date().toLocaleDateString("fr-FR"),
      };

      emailjs.send("service_ywge66d", "template_ty3pdlf", params).then(
        function () {
          alert("Message envoyé avec succès ! ✅");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          alert("Erreur lors de l'envoi du message ❌");
          console.error("Erreur: ", error);
        }
      );
    });

  // Newsletter Form Validation
  document
    .getElementById("newsletter-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      let email = document.getElementById("email-address").value.trim();
      document.querySelectorAll(".error-msg").forEach((el) => el.remove());

      if (email === "") {
        showError(
          document.getElementById("email-address"),
          "⚠️ L'email est requis."
        );
        return;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        showError(
          document.getElementById("email-address"),
          "⚠️ L'email est invalide."
        );
        return;
      }

      let params = { email };

      emailjs.send("service_ywge66d", "template_dkiq9ue", params).then(
        function () {
          alert("Inscription réussie ! ✅");
          document.getElementById("newsletter-form").reset();
        },
        function (error) {
          alert("Erreur lors de l'inscription ❌");
          console.error("Erreur: ", error);
        }
      );
    });

  // Fonction d'erreur pour la newsletter
  function showError(input, message) {
    let error = document.createElement("p");
    error.classList.add("error-msg");
    error.style.color = "red";
    error.style.fontSize = "14px";
    error.textContent = message;
    input.parentNode.appendChild(error);
  }
});
