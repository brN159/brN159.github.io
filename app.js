const poema = document.querySelector('.poema');

const arrowCiencia = document.querySelector('.arrow-ciencia');
const ciencia = document.querySelector('.ciencia');

(document.querySelector('.arrow')).addEventListener('click', () => {
    poema.style.display = poema.style.display === 'none' ? 'block' : 'none';
});

arrowCiencia.addEventListener('click', () => {
    ciencia.style.display = ciencia.style.display === 'none' ? 'block' : 'none';
})
