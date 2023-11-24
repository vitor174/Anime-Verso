const favorito = document.querySelector('.favorito');

favorito.addEventListener('click', () => {
    if (favorito.classList.contains('clicked')) {
        favorito.classList.remove('clicked');
    } else {
        favorito.classList.add('clicked');
    }
});
