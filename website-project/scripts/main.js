document.addEventListener("DOMContentLoaded", () => {
    
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            localStorage.setItem("lastVisitedPage", link.getAttribute("href"));
        });
    });

    
    const introText = document.querySelector(".intro-text");
    if (introText) {
        introText.textContent += " We are excited to have you here!";
    }

});
