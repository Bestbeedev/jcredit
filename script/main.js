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

// Animation pour les éléments
const animations = [
    { element: ".header", y: -100 },
    { element: ".hero-section", y: 100 },
    { element: ".features-section", y: 30 },
    { element: ".features-section-1", x: -100 },
    { element: ".features-section-2", y: 100 },
    { element: ".features-section-3", y: 100 },
    { element: ".features-section-4", x: 100 },
    { element: ".cta-section", y: 80 },
    { element: ".cta-section-2", y: 80 },
    { element: ".how-it-work-1", x: -100 },
    { element: ".how-it-work-2", x: 100 },
    { element: ".footer", y: 100 },
    { element: ".custom", x: 100 },
    { element: ".cta-section-1", y: 80 },
];

animations.forEach(({ element, x = 0, y = 0 }) => {
    gsap.from(element, {
        x,
        y,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "+=500",
            scrub: true
        }
    });
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
    const selects = document.querySelectorAll("#language-select, #language-select-1");

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
            document.querySelectorAll(".goog-te-banner-frame, .goog-tooltip, .goog-te-balloon-frame").forEach((el) => {
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

document.addEventListener("DOMContentLoaded", function () {
    // Supprimer le bandeau et le tooltip de traduction
    function removeGoogleTranslateUI() {
        const googleBanner = document.querySelector(".goog-te-banner-frame");
        const googleTooltip = document.querySelector("iframe[style*='translate.google.com']");

        if (googleBanner) googleBanner.remove();
        if (googleTooltip) googleTooltip.remove();

        document.body.style.top = "0px"; // Empêcher Google de décaler la page
    }

    // Observer les changements dans le DOM pour supprimer les éléments de traduction
    const observer = new MutationObserver(removeGoogleTranslateUI);
    observer.observe(document.body, { childList: true, subtree: true });

    // Appel immédiat pour s'assurer que les éléments sont supprimés dès leur apparition
    removeGoogleTranslateUI();
});

// document.addEventListener("DOMContentLoaded", function () {
//     // Cibler l'élément <html>
//     const htmlElement = document.documentElement;

//     // Supprimer les attributs indésirables
//     function cleanHtmlAttributes() {
//         htmlElement.removeAttribute("bbai-tooltip-injected"); // Supprime l'attribut
//         htmlElement.setAttribute("bbai-tooltip-injected", "false"); // Le remet à false si nécessaire
//         htmlElement.classList.remove("translated-ltr", "translated-rtl"); // Supprime les classes Google Translate
//     }

//     // Observer les changements pour éviter que Google Translate le réinjecte
//     const observer = new MutationObserver(cleanHtmlAttributes);
//     observer.observe(htmlElement, { attributes: true, attributeFilter: ['class', 'bbai-tooltip-injected'] });

//     // Exécuter la fonction immédiatement
//     cleanHtmlAttributes();
// });
