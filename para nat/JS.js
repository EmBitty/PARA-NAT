function abrirCarta() {
  const sobre = document.querySelector('.sobre');
  sobre.classList.toggle('abierto');

  if (sobre.classList.contains('abierto')) {
    lanzarCorazones();
  }
}

function lanzarCorazones() {
  const contenedor = document.querySelector('.corazones');
  for (let i = 0; i < 30; i++) {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.top = '100vh';
    corazon.style.background = Math.random() > 0.5 ? 'red' : 'pink';
    corazon.style.width = '20px';
    corazon.style.height = '20px';
    corazon.style.transform = 'rotate(-45deg)';
    contenedor.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 4000);
  }
}