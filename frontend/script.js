
document.querySelectorAll('.links_navegacao a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 

    
        const idDestino = this.getAttribute('href');
        const seccaoDestino = document.querySelector(idDestino);

        if (seccaoDestino) {
    
            seccaoDestino.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});