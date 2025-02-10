 document.getElementById('mobile-menu-button').addEventListener('click', function () {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });

        document.getElementById('close-mobile-menu').addEventListener('click', function () {
            document.getElementById('mobile-menu').classList.add('hidden');
        });

 



        gsap.registerPlugin(ScrollTrigger);

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


    ///bg change 

        document.addEventListener("DOMContentLoaded", function () {
        const heroSection = document.getElementById("hero-section");

        // Tableau des images de fond
        const bgImages = [
            "./assets/images/hero.png",
            "./assets/images/help-1.png",
            "./assets/images/help-2.png"
        ];

        let index = 0;

        function changeBackground() {
            heroSection.style.backgroundImage = `url('${bgImages[index]}')`;
            index = (index + 1) % bgImages.length; // Incrémente et boucle
        }

        // Changer toutes les 3 secondes
        setInterval(changeBackground, 4000);

        // Initialiser avec la première image
        changeBackground();
    });
