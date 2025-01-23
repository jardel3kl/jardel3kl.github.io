<script>
    import { onMount } from "svelte";

    let zapdos;

    // Função para alterar posição
    function moveZapdos() {
        // Remove a animação ao alterar a posição
        if (zapdos) {
            zapdos.style.animation = "";

            // Atualiza a posição
            const left = Math.random() * (window.innerWidth - 150);
            const top = Math.random() * (window.innerHeight - 150);

            zapdos.style.left = `${left}px`;
            zapdos.style.top = `${top}px`;

            // Reinicia a animação após a posição ser alterada
            setTimeout(() => {
                zapdos.style.animation = "zapdos-fly 5s linear infinite";
            }, 10);
        }
    }

    onMount(() => {
        // Garantir que o Zapdos tenha posição inicial
        if (zapdos) {
            zapdos.style.left = "0px";
            zapdos.style.top = "0px";
        }
    });
</script>

<style>
    body {
        margin: 0;
        padding: 0;
        background: linear-gradient(135deg, #FFD700, #FFEC8B);
        font-family: Arial, sans-serif;
        overflow: hidden;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        position: relative;
        text-align: center;
        color: #333;
    }

    h1 {
        font-size: 4rem;
        text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    }

    p {
        font-size: 1.5rem;
        margin: 20px 0;
    }

    .zapdos {
        position: absolute;
        width: 150px;
        height: 150px;
        background: #FFD700;
        border-radius: 50%;
        box-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
        animation: zapdos-fly 5s linear infinite;
        left: 0;
        top: 0;
    }

    @keyframes zapdos-fly {
        0% {
            transform: translate(-100px, 0) scale(1);
        }
        50% {
            transform: translate(100vw, -200px) scale(1.2);
        }
        100% {
            transform: translate(-100px, 0) scale(1);
        }
    }

    button {
        background-color: #FFA500;
        color: #fff;
        border: none;
        padding: 10px 20px;
        font-size: 1.2rem;
        cursor: pointer;
        border-radius: 5px;
        transition: background 0.3s;
    }

    button:hover {
        background-color: #FF4500;
    }
</style>

<div class="container">
    <div>
        <h1>Zapdos-Inspired Homepage</h1>
        <p>Bem-vindo ao seu site inspirado em Zapdos! Explore e sinta a energia elétrica.</p>
        <button on:click={() => alert("Explorando! ⚡")}>Explorar</button>
    </div>
    <div>
        bind:this={zapdos}
        class="zapdos"
        on:click={moveZapdos}
    </div>
</div>
