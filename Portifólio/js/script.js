document.addEventListener("DOMContentLoaded", () => {
    // Inicializa AOS (animações ao rolar)
    AOS.init({
        duration: 1000, // Duração das animações em milissegundos
        once: true,     // Anima animações apenas uma vez
    });

    // Adiciona um delay crescente aos elementos com data-aos
    const elements = document.querySelectorAll("[data-aos]");
    elements.forEach((el, index) => {
        const delay = index * 300; // 300ms entre cada animação
        el.setAttribute("data-aos-delay", delay);
    });

    // Carrega a preferência de tema do localStorage
    const themeToggle = document.getElementById('theme-toggle');
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Alternar entre o modo escuro e claro com o toggle switch
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});

