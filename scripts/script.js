document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('mouseover', function() {
        var categorias = dropdown.querySelector('.categorias');
        categorias.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', function() {
        var categorias = dropdown.querySelector('.categorias');
        categorias.style.display = 'none';
    });
});