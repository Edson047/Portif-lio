// Efeito de rolagem suave para os links do menu
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Engrenagem girando em "Projetos"
const engrenagem = document.getElementById('engrenagem');
setInterval(() => {
    engrenagem.style.transform = `rotate(${Date.now() % 360}deg)`;
}, 20);

// Mostrar mensagem de sucesso ao enviar o formulário
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    form.reset(); // Limpa o formulário
});

// Fade-in suave ao carregar as seções
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', function () {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});