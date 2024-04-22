document.addEventListener("DOMContentLoaded", function() {
    const classBoxes = document.querySelectorAll('.class-box');

    classBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            classBoxes.forEach(b => b.style.opacity = '0.5');
            this.style.opacity = '1';
        });

        box.addEventListener('mouseleave', function() {
            classBoxes.forEach(b => b.style.opacity = '1');
        });
    });
});
