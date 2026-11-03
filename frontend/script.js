
/* ==========================================
   FERRAREZI UTILIDADES
   JAVASCRIPT PRINCIPAL
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       1. ROLAGEM SUAVE ENTRE AS SEÇÕES
       ========================================== */

    const linksInternos = document.querySelectorAll(
        'a[href^="#"]'
    );

    linksInternos.forEach((link) => {

        link.addEventListener("click", (evento) => {

            const destino = link.getAttribute("href");

            // Ignora links que apontam apenas para "#"
            if (!destino || destino === "#") {
                return;
            }

            const secaoDestino = document.getElementById(
                destino.substring(1)
            );

            // Mantém o comportamento normal se não existir destino
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

    /* ==========================================
       2. ANIMAÇÃO DOS CARTÕES DE CATEGORIAS
       ========================================== */

    const cartoes = document.querySelectorAll(".categoria_card");

    // Respeita a preferência de movimento reduzido
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

