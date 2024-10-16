const canjearBtn = document.getElementById('canjear-btn');
const noRegaloBtn = document.getElementById('no-regalo-btn');

// Detectar si el dispositivo es táctil
const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Función para mover el botón de manera aleatoria
const moverBoton = () => {
    const x = Math.random() * (window.innerWidth - canjearBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - canjearBtn.offsetHeight);
    canjearBtn.style.position = 'absolute';
    canjearBtn.style.left = `${x}px`;
    canjearBtn.style.top = `${y}px`;
};

// Mover el botón tanto en dispositivos móviles como en computadoras
canjearBtn.addEventListener(isTouchDevice() ? 'touchstart' : 'mouseover', moverBoton);

// Deshabilitar el clic en dispositivos móviles
if (isTouchDevice()) {
    canjearBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevenir la acción de clic
    });
} else {
    // Acción del botón "Canjear regalo" si el usuario logra hacer clic (en computadoras)
    canjearBtn.addEventListener('click', () => {
        const messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';

        const messageBox = document.createElement('div');
        messageBox.className = 'message-box';
        messageBox.innerHTML = `
            <img src="./assets/img/Nat_regalo.webp" alt="nat-regalo">
            <h3>¡Woow! <br>¡Te mereces un regalo!</h3>
            <p>¡Disfruta tu día!</p>
            <p>Captura esta pantalla y envíamela para recibir tu regalo :)</p>
            <button class="btn-close">Cerrar</button>
        `;

        messageContainer.appendChild(messageBox);
        document.body.appendChild(messageContainer);

        document.querySelector('.btn-close').addEventListener('click', () => {
            document.body.removeChild(messageContainer);
        });
    });
}

// Acción del botón "No quiero regalo"
noRegaloBtn.addEventListener('click', () => {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';

    const messageBox = document.createElement('div');
    messageBox.className = 'message-box';
    messageBox.innerHTML = `
        <img src="./assets/img/nat-feliz.webp" alt="nat-feliz">
        <h3>¡¡Qué considerado!!</h3>
        <p>Te daré una sorpresita a fin de mes :)</p>
        <p>¡Besitos!</p>
        <p>Atte. tu tía querida <br> Natalie Vidal &#128519;</p>
        <button class="btn-close">Cerrar</button>`;

    messageContainer.appendChild(messageBox);
    document.body.appendChild(messageContainer);

    document.querySelector('.btn-close').addEventListener('click', () => {
        document.body.removeChild(messageContainer);
    });
});
