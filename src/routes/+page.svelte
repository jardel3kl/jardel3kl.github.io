<script>
    let score = 0;
    let currentQuestion = 1;
    let showResult = false;
    let message = "";

    const answers = {
        1: "A",
        2: "A",
        3: "B",
        4: "C",
        5: "B"
    };

    function checkAnswer(question, selected) {
        if (answers[question] === selected) {
            score++;
        }

        if (question === Object.keys(answers).length) {
            calculateResult();
        } else {
            currentQuestion++;
        }
    }

    function calculateResult() {
        if (score === Object.keys(answers).length) {
            message = `Parabéns, amor! Você acertou tudo ❤️! Você realmente me conhece.`;
        } else if (score >= 3) {
            message = `Muito bem, meu amor! Você acertou ${score} de ${Object.keys(answers).length} perguntas. 😊`;
        } else {
            message = `Tudo bem, amor! Você acertou ${score} de ${Object.keys(answers).length}. Ainda te amo muito! 🥰`;
        }
        showResult = true;
    }
</script>

<svelte:head>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #ffe6e6;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
        }
        h1 {
            color: #ff4d4d;
        }
        button {
            background-color: #ff4d4d;
            color: white;
            border: none;
            padding: 10px 20px;
            margin: 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #e63939;
        }
        .result {
            margin-top: 20px;
            font-size: 18px;
            color: #ff4d4d;
        }
    </style>
</svelte:head>

<main>
    <div class="container">
        <h1>Quiz para Minha Princesinha 💕</h1>

        {#if !showResult}
            <div id="quiz">
                {#if currentQuestion === 1}
                    <div>
                        <p><strong>1. Com qual casal de desenho nós nos parecemos mais?</strong></p>
                        <button on:click={() => checkAnswer(1, 'A')}>A) Zootopia</button>
                        <button on:click={() => checkAnswer(1, 'B')}>B) A Dama e o Vagabundo</button>
                        <button on:click={() => checkAnswer(1, 'C')}>C) A Bela e a Fera</button>
                    </div>
                {/if}

                {#if currentQuestion === 2}
                    <div>
                        <p><strong>2. Qual foi o primeiro dia que você falou comigo? (Pelo celular)</strong></p>
                        <button on:click={() => checkAnswer(2, 'A')}>A) 17/07/2024</button>
                        <button on:click={() => checkAnswer(2, 'B')}>B) 18/06/2024</button>
                        <button on:click={() => checkAnswer(2, 'C')}>C) 23/07/2024</button>
                    </div>
                {/if}

                {#if currentQuestion === 3}
                    <div>
                        <p><strong>3. Qual foi o dia em que fomos ao cinema?</strong></p>
                        <button on:click={() => checkAnswer(3, 'A')}>A) 04/10/2024</button>
                        <button on:click={() => checkAnswer(3, 'B')}>B) 28/09/2024</button>
                        <button on:click={() => checkAnswer(3, 'C')}>C) 29/09/2024</button>
                    </div>
                {/if}

                {#if currentQuestion === 4}
                    <div>
                        <p><strong>4. Qual o meu quadro favorito?</strong></p>
                        <button on:click={() => checkAnswer(4, 'A')}>A) A Ponte de Monet</button>
                        <button on:click={() => checkAnswer(4, 'B')}>B) Os Girassóis</button>
                        <button on:click={() => checkAnswer(4, 'C')}>C) A Noite Estrelada</button>
                    </div>
                {/if}

                {#if currentQuestion === 5}
                    <div>
                        <p><strong>5. Quando foi a primeira vez que nos abraçamos?</strong></p>
                        <button on:click={() => checkAnswer(5, 'A')}>A) Na Igreja</button>
                        <button on:click={() => checkAnswer(5, 'B')}>B) No Enem</button>
                        <button on:click={() => checkAnswer(5, 'C')}>C) No cinema</button>
                    </div>
                {/if}
            </div>
        {/if}

        {#if showResult}
            <div class="result" id="result">
                {message}
            </div>
        {/if}
    </div>
</main>
