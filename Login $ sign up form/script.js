document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', () => {
        let input = icon.previousElementSibling.previousElementSibling;
        let label = input.nextElementSibling; // Get the label

        if (input.type === "password") {
            input.type = "text";
            icon.textContent = "🧐";
            label.style.transform = "translate(-150%, -50%)"; // Keep label hidden
        } else {
            input.type = "password";
            icon.textContent = "👁️‍🗨️";

            // Only move label back if input is empty
            if (!input.value) {
                label.style.transform = "translate(0%, -50%)";
            }
        }
    });
});
