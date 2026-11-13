
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

// Toggle mobile navigation
menuToggle?.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

});

// Close navigation after clicking a link
navigation?.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});
