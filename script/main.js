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





