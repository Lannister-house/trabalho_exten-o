


document.addEventListener("DOMContentLoaded", () => {

    

    const linksInternos = document.querySelectorAll(
        'a[href^="#"]'
    );

    linksInternos.forEach((link) => {

        link.addEventListener("click", (evento) => {

            const destino = link.getAttribute("href");

            
            if (!destino || destino === "#") {
                return;
            }

            const secaoDestino = document.getElementById(
                destino.substring(1)
            );

            
            if (!secaoDestino) {
                return;
            }

            evento.preventDefault();

            secaoDestino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

    

    const cartoes = document.querySelectorAll(".categoria_card");
    
    const movimentoReduzido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if ("IntersectionObserver" in window && !movimentoReduzido) {

        const observador = new IntersectionObserver(
            (entradas, observer) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add(
                            "categoria_visivel"
                        );

                        observer.unobserve(entrada.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        cartoes.forEach((cartao) => {
            cartao.classList.add("categoria_animada");
            observador.observe(cartao);
        });

    }

});

