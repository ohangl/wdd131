// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Example: Change theme color
    const toggleThemeButton = document.getElementById('toggle-theme');
    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    // Example: Store and retrieve data from localStorage
    const saveButton = document.getElementById('save-data');
    const dataField = document.getElementById('data-field');
    saveButton.addEventListener('click', () => {
        localStorage.setItem('userData', dataField.value);
    });

    const storedData = localStorage.getItem('userData');
    if (storedData) {
        dataField.value = storedData;
    }
});
