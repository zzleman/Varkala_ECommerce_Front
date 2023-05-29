var dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function(event) {
        if (!event.target.closest(".dropdown")) {
            dropdowns.forEach(function(dropdown) {
                dropdown.classList.remove("active");
            });
        }
    });