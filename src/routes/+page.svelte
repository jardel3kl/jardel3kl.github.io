<script>
    import { onMount } from "svelte";

    let zapdos;
    let velocity = { x: 5, y: 5 }; // Velocidade inicial

    function updatePosition() {
        if (zapdos) {
            const zapdosRect = zapdos.getBoundingClientRect();
            const containerWidth = window.innerWidth;
            const containerHeight = window.innerHeight;

            let newLeft = zapdos.offsetLeft + velocity.x;
            let newTop = zapdos.offsetTop + velocity.y;

            // Verificar colisão com as bordas
            if (newLeft <= 0 || newLeft + zapdosRect.width >= containerWidth) {
                velocity.x *= -1; // Inverte a direção no eixo X
            }

            if (newTop <= 0 || newTop + zapdosRect.height >= containerHeight) {
                velocity.y *= -1; // Inverte a direção no eixo Y
            }

            // Atualizar posição
            zapdos.style.left = `${zapdos.offsetLeft + velocity.x}px`;
            zapdos.style.top = `${zapdos.offsetTop + velocity.y}px`;

            // Repetir o movimento
            requestAnimationFrame(updatePosition);
        }
    }

    onMount(() => {
        if (zapdos) {
            zapdos.style.left = "0px";
            zapdos.style.top = "0px";
            requestAnimationFrame(updatePosition);
        }
    });
</script>
<body></body>
<style>
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
        background: url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png') no-repeat center center;
        background-size: contain;
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
        <h1>ZAPDOS</h1>
        <p>Pássaro Lendário Elétrico</p>
        <a href="/pokedex">
            <button>pokedex</button>
          </a> 
           </div>
    <div
        bind:this={zapdos}
        class="zapdos"
    ></div>
</div>
