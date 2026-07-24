// Generar Corazones Flotantes Continuos
function crearCorazones() {
    const container = document.getElementById('heartsContainer');
    const cantidad = 15;

    for (let i = 0; i < cantidad; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.animationDelay = (Math.random() * 5) + 's';
        container.appendChild(heart);
    }
}

// Iniciar Experiencia al hacer Clic en la Pantalla de Inicio
function iniciarExperiencia() {
    document.getElementById('pantallaIntro').style.display = 'none';
    document.getElementById('appContent').style.display = 'block';

    // Crear corazones en pantalla
    crearCorazones();

    // Reproducir música de fondo
    const music = document.getElementById('bgMusic');
    music.play().then(() => {
        document.getElementById('playIcon').innerText = "❚❚";
    }).catch(e => console.log("Audio en espera de interacción."));

    // Lanzar confeti de bienvenida
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}

// Reproductor de Música
function toggleAudio() {
    const music = document.getElementById('bgMusic');
    const symbol = document.getElementById('playIcon');

    if (music.paused) {
        music.play();
        symbol.innerText = "❚❚";
    } else {
        music.pause();
        symbol.innerText = "▶";
    }
}

// Abrir Sobre de la Carta
function abrirCarta() {
    const envelope = document.getElementById('envelopeObj');
    envelope.classList.toggle('open');
}

// Desempaquetar Regalo Sorpresa
function desempaquetar() {
    document.getElementById('regaloTexto').innerHTML = "🎉 ¡Sorpresa Desbloqueada! <br><br> Vale por una salida muy especial y un día entero consintiéndote por nuestros 11 meses. ¡Te amo! ❤️";
    confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
}

function cerrarModal() {
    document.getElementById('modalAlert').style.display = 'none';
}