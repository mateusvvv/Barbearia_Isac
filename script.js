// FUNÇÃO WHATSAPP
function agendar(servico) {
    const telefone = "55081993205690"; // DDI + DDD + número
    const mensagem = `Olá! Gostaria de agendar ${servico}.`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

// ANIMAÇÃO AO ROLAR A PÁGINA
const elementos = document.querySelectorAll('.card, .mapa');

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar');
        }
    });
}, {
    threshold: 0.2
});

elementos.forEach((elemento) => {
    observer.observe(elemento);
});
