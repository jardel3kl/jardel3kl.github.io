<script>
    import { onMount } from 'svelte';

    let score = 0;
    let questionCount = 0;
    let showResult = false;
    let message = "";

    const answers = {
        1: "B",
        2: "C",
        3: "A"
    };

    function checkAnswer(question, selected) {
        if (answers[question] === selected) {
            score++;
        }
        questionCount++;

        if (questionCount === Object.keys(answers).length) {
            calculateResult();
        }
    }

    function calculateResult() {
        if (score === 3) {
            message = `Parabéns, amor! Você acertou tudo ❤️! Você realmente me conhece.`;
        } else if (score === 2) {
            message = `Muito bem, meu amor! Você acertou ${score} de 3 perguntas. 😊`;
        } else {
            message = `Tudo bem, amor! Você acertou ${score} de 3. Ainda te amo muito! 🥰`;
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
        <h1>Quiz para Minha Namorada 💕</h1>
        <p>Responda essas perguntas e veja o quanto você me conhece!</p>

        {#if !showResult}
            <div id="quiz">
                <div>
                    <p><strong>1. Qual é minha cor favorita?</strong></p>
                    <button on:click="() => checkAnswer(1, 'A')">A) Azul</button>
                    <button on:click="() => checkAnswer(1, 'B')">B) Vermelho</button>
                    <button on:click="() => checkAnswer(1, 'C')">C) Verde</button>
                </div>

                <div>
                    <p><strong>2. Qual filme eu amo assistir?</strong></p>
                    <button on:click="() => checkAnswer(2, 'A')">A) Titanic</button>
                    <button on:click="() => checkAnswer(2, 'B')">B) Vingadores</button>
                    <button on:click="() => checkAnswer(2, 'C')">C) A Culpa é das Estrelas</button>
                </div>

                <div>
                    <p><strong>3. Onde seria nossa viagem dos sonhos?</strong></p>
                    <button on:click="() => checkAnswer(3, 'A')">A) Paris</button>
                    <button on:click="() => checkAnswer(3, 'B')">B) Maldivas</button>
                    <button on:click="() => checkAnswer(3, 'C')">C) Japão</button>
                </div>
            </div>
        {/if}

        {#if showResult}
            <div class="result" id="result">
                {message}
            </div>
        {/if}
    </div>
</main>
