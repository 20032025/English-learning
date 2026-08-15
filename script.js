// =========================================
// SOUKA.DEV — HOME PAGE JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // MOBILE MENU
    // ================================

    const menuButton = document.querySelector(".menu-button");
    const navigation = document.querySelector(".main-nav");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            navigation.classList.toggle("mobile-active");

            const isOpen =
                navigation.classList.contains("mobile-active");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuButton.textContent = isOpen ? "✕" : "☰";
        });


        // Close menu when clicking a link
        const navigationLinks =
            navigation.querySelectorAll("a");

        navigationLinks.forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("mobile-active");

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });
    }


    // ================================
    // COMING SOON LEVELS
    // ================================

    const comingSoonLevels =
        document.querySelectorAll(".coming-soon");

    comingSoonLevels.forEach(level => {

        level.addEventListener("click", (event) => {

            event.preventDefault();

            alert(
                "This level is coming soon.\n\nهذا المستوى سيكون متاحاً قريباً."
            );

        });

    });


    // ================================
    // CURRENT YEAR
    // ================================

    const currentYear = new Date().getFullYear();

    const footerYear =
        document.querySelector(".footer-bottom p");

    if (footerYear) {

        footerYear.textContent =
            `© ${currentYear} SOUKA.DEV — All Rights Reserved.`;
    }

});


/* =========================================
   ENGLISH AUDIO
========================================= */

const audioButtons = document.querySelectorAll(".audio-button");

audioButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const word = button.dataset.word;

        if (!word) return;

        // إيقاف أي نطق سابق
        window.speechSynthesis.cancel();

        const speech = new SpeechSynthesisUtterance(word);

        // النطق بالإنجليزية البريطانية
        speech.lang = "en-GB";

        // سرعة النطق
        speech.rate = 0.85;

        // درجة الصوت
        speech.pitch = 1;

        window.speechSynthesis.speak(speech);
    });

});