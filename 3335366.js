// Crear el overlay del modal
const overlay = document.createElement('div');
overlay.className = 'modal-overlay';

// Crear el contenedor del formulario
const modal = document.createElement('div');
modal.className = 'modal-content';

// Crear el título
const title = document.createElement('h2');
title.textContent = 'Willkommen! Melden Sie sich mit Ihrer Porsche ID an';

// Crear el texto descriptivo
const description = document.createElement('p');
description.textContent = 'Bitte geben Sie die E-Mail-Adresse ein, die Sie als Ihre Porsche ID definiert haben.';

// Crear el campo de entrada
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Porsche ID';

// Crear los botones
const button1 = document.createElement('button');
button1.textContent = 'Mit Passwort einloggen';

const button2 = document.createElement('button');
button2.textContent = 'Erhalten Sie den Anmeldecode per E-Mail';

const button3 = document.createElement('button');
button3.textContent = 'Porsche ID erstellen';

// Agregar elementos al modal
modal.appendChild(title);
modal.appendChild(description);
modal.appendChild(input);
modal.appendChild(button1);
modal.appendChild(button2);
modal.appendChild(document.createElement('hr')); // Línea divisoria
modal.appendChild(button3);

// Agregar modal al overlay
overlay.appendChild(modal);

// Agregar overlay al body
document.body.appendChild(overlay);

// Estilos CSS inyectados como string
const styles = `
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .modal-content {
        background: white;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
        width: 300px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
    h2 {
        margin: 0 0 10px;
        font-size: 1.2em;
        color: #000;
    }
    p {
        margin: 0 0 15px;
        font-size: 0.9em;
        color: #555;
    }
    input[type="text"] {
        width: 90%;
        padding: 8px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    button {
        display: block;
        width: 90%;
        padding: 10px;
        margin: 5px auto;
        border: none;
        border-radius: 4px;
        background: #000;
        color: white;
        cursor: pointer;
    }
    button:nth-child(3) {
        background: #fff;
        color: #000;
        border: 1px solid #ccc;
    }
    button:hover {
        opacity: 0.9;
    }
    hr {
        border: 0;
        height: 1px;
        background: #ccc;
        margin: 10px 0;
    }
`;

// Inyectar estilos en el head
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Mostrar mensaje al hacer clic en cualquier botón
[button1, button2, button3].forEach(button => {
    button.addEventListener('click', () => {
        alert('Your information is being stolen');
    });
});

// Asegurarse de que el modal se muestre al cargar la página
window.onload = function() {
    document.body.style.margin = '0'; // Resetear márgenes del body
};
