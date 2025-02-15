 // Ajoute un écouteur d'événement pour le bouton du menu mobile
 document.getElementById('mobile-menu-button').addEventListener('click', function () {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });

        // Ajoute un écouteur d'événement pour le bouton de fermeture du menu mobile
        document.getElementById('close-mobile-menu').addEventListener('click', function () {
            document.getElementById('mobile-menu').classList.add('hidden');
        });

        // Enregistre le plugin ScrollTrigger de GSAP
        gsap.registerPlugin(ScrollTrigger);

        // Animation pour l'élément avec la classe "header"
        gsap.from(".header", {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".header",
                start: "top top",
                end: "+=500",
                scrub: true
            }
        });

        // Animation pour l'élément avec la classe "hero-section"
        gsap.from(".hero-section", {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top 80%",
                end: "+=500",
                scrub: true
            }
        });

        // Animation pour l'élément avec la classe "features-section"
        gsap.from(".features-section", {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".features-section",
                start: "top 80%",
                end: "+=500",
                scrub: true
            }
        });

        // Animation pour l'élément avec la classe "features-section-1"
        gsap.from(".features-section-1", {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".features-section-1",
                start: "top 80%",
                end: "+=500",
                scrub: true
            }
        });

        // Animation pour l'élément avec la classe "features-section-2"
        gsap.from(".features-section-2", {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".features-section-2",
                start: "top 80%",
                end: "+=500",
                scrub: true
            }
        });

        // Animation pour l'élément avec la classe "features-section-3"
        gsap.from(".features-section-3", {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".features-section-3",
                start: "top 80%",
                end: "+=500",
                scrub: true
            }
        });

        // Animation pour l'élément avec la classe "features-section-4"
        gsap.from(".features-section-4", {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".features-section-4",
                start: "top 80%",
                end: "+=500",
                scrub: true
            }
        });

        // Animation pour l'élément avec la classe "cta-section"
        gsap.from(".cta-section", {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".cta-section",
                start: "top 80%",
                end: "+=500",
                scrub: true
            }
        });

        // Animation pour l'élément avec la classe "how-it-work-1"
        gsap.from(".how-it-work-1", {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".how-it-work-1",
                start: "top 80%",
                end: "+=500",
                scrub: true
            }
        });

        // Animation pour l'élément avec la classe "how-it-work-2"
        gsap.from(".how-it-work-2", {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".how-it-work-2",
                start: "top 80%",
                end: "+=500",
                scrub: true
            }
        });

        // Animation pour l'élément avec la classe "footer"
        gsap.from(".footer", {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".footer",
                start: "top 80%",
                end: "+=500",
                scrub: true
            }
        });

        // Animation pour l'élément avec la classe "custom"
        gsap.from(".custom", {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".custom",
            start: "top 80%",
            end: "+=500",
            scrub: true,
          },
        });

        // Animation pour l'élément avec la classe "cta-section-1"
        gsap.from(".cta-section-1", {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".cta-section-1",
            start: "top 80%",
            end: "+=500",
            scrub: true,
          },
        });

        // Ajoute un écouteur d'événement pour le chargement du DOM
    document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll(".nav-link");

        // Vérifier quelle page est active au chargement
        function setActiveLink() {
            const currentPage = window.location.pathname;
            links.forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active-link");
                } else {
                    link.classList.remove("active-link");
                }
            });
        }

        // Détecter le clic et changer l'effet
        links.forEach(link => {
            link.addEventListener("click", function () {
                links.forEach(l => l.classList.remove("active-link"));
                this.classList.add("active-link");
            });
        });

        setActiveLink(); // Appliquer l'effet au chargement de la page
    });

    // Ajoute un écouteur d'événement pour le chargement du DOM
    document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".bg-slider");
    let index = 0;

    // Fonction pour changer l'arrière-plan
    function changeBackground() {
      slides.forEach((slide, i) => {
        slide.classList.remove("active", "hidden");
        if (i === index) {
          slide.classList.add("active");
        } else {
          slide.classList.add("hidden");
        }
      });

      index = (index + 1) % slides.length;
    }

    // Précharger les images pour éviter le flash gris
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.style.backgroundImage.replace('url("', '').replace('")', '');
    });

    // Changer l'image toutes les 6 secondes
    setInterval(changeBackground, 6000);
  });

  // Ajoute un écouteur d'événement pour le chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  const selects = document.querySelectorAll(
    "#language-select, #language-select-1"
  );

  function changeLanguage(lang) {
    localStorage.setItem("preferredLanguage", lang); // Sauvegarde la langue

    const googleTranslateCombo = document.querySelector(".goog-te-combo");
    if (googleTranslateCombo) {
      googleTranslateCombo.value = lang;
      googleTranslateCombo.dispatchEvent(new Event("change"));
    } else {
      console.warn("Google Translate n'est pas encore chargé...");
      setTimeout(() => changeLanguage(lang), 500);
    }

    // Synchroniser les deux selects
    selects.forEach((select) => {
      select.value = lang;
    });

    // Supprimer le ruban Google Translate et les pop-ups
    setTimeout(() => {
      document
        .querySelectorAll(
          ".goog-te-banner-frame, .goog-tooltip, .goog-te-balloon-frame"
        )
        .forEach((el) => {
          el.remove();
        });
      document.body.style.top = "0px";
    }, 1000);
  }

  // Appliquer la langue sauvegardée au chargement de la page
  const savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage) {
    changeLanguage(savedLanguage);
  }

  // Écouter le changement sur les deux selects
  selects.forEach((select) => {
    select.addEventListener("change", (e) => {
      changeLanguage(e.target.value);
    });
  });
});


