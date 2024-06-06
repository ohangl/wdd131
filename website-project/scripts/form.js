document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const contactData = {};

            formData.forEach((value, key) => {
                contactData[key] = value;
            });

            localStorage.setItem("contactData", JSON.stringify(contactData));
            alert("Form data saved!");

            // Optionally reset the form after submission
            contactForm.reset();
        });
    }
});
