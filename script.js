// Animación de entrada en la presentación
gsap.from('.presentacion__titulo', { duration: 1.5, y: -50, opacity: 0, ease: "power4.out" });
gsap.from('.presentacion__subtitulo', { duration: 1.5, y: 50, opacity: 0, ease: "power4.out", delay: 0.5 });
gsap.from('.presentacion__foto', { duration: 1.5, scale: 0, ease: "elastic.out(1, 0.5)", delay: 0.8 });

const menuItems = document.querySelectorAll('.navegacion__elemento a');
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        gsap.to(item, { duration: 0.5, scale: 1.2, ease: "power4.out" });
    });
    item.addEventListener('mouseout', () => {
        gsap.to(item, { duration: 0.5, scale: 1, ease: "power4.out" });
    });
});

// Animación texto presentación
gsap.registerPlugin(TextPlugin);

const text = document.querySelector(".nombre-destacado");

gsap.to(".presentacion__saludo" , {
    duration: 1,
    text: "¡Hola!",
    ease: "power2.out",
    delay: 0.5
});

gsap.to(".nombre-soy" , {
    duration: 1,
    text: "Soy",
    ease: "power2.out",
    delay: 1
});

gsap.to(".nombre-destacado" , {
    duration: 2,
    text: "Silene González Quiroz",
    ease: "power2.out",
    delay: 2,
    overwrite: true
});

gsap.to(".presentacion__descripcion" , {
    duration: 2,
    text: "¡Como docente, es grato enseñar nuevas tecnologías. ",
    ease: "power2.out",
    delay: 4
});

gsap.to(".presentacion__descripcion1" , {
    duration: 2,
    text: "Apasionada por el desarrollo Front - End!..",
    ease: "power2.out",
    delay: 6,
    overwrite: true
});

//Altura del header y secciones
document.querySelectorAll('.navegacion__elemento a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetID);

        const headerHeight = document.querySelector('.cabecera').offsetHeight;

        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

//Flecha hacia arriba
window.onscroll = function() {showScrollToTopBtn()};

function showScrollToTopBtn() {
    const btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//Sección Formación
function openModal(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

//Sección contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');

    if (!nombre.value) {
        document.getElementById('nombreError').textContent = 'Diligencie este campo';
        document.getElementById('nombreError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nombreError').style.display = 'none';
    }

    const correoPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!correo.value) {
        document.getElementById('correoError').textContent = 'Diligencie este campo';
        document.getElementById('correoError').style.display = 'block';
        isValid = false;
    } else if (!correoPattern.test(correo.value)) {
        document.getElementById('correoError').textContent = 'El formato de correo válido';
        document.getElementById('correoError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('correoError').style.display = 'none';
    }

    if (!asunto.value) {
        document.getElementById('asuntoError').textContent = 'Diligencie este campo';
        document.getElementById('asuntoError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('asuntoError').style.display = 'none';
    }

    if (!mensaje.value) {
        document.getElementById('mensajeError').textContent = 'Diligencie este campo';
        document.getElementById('mensajeError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('mensajeError').style.display = 'none';
    }

    if (isValid) {
        const modal = document.getElementById('successModal');
        modal.style.display = 'flex';
        document.getElementById('contactForm').reset();
    }
});

document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('successModal').style.display = 'none';
});

