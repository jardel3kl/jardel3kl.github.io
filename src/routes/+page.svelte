<script>
    let fibonacciNumbers = [0, 1];
    let currentMonth = 0;

    function increaseFibonacciNumbers() {
        const nextNumber = fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2];
        fibonacciNumbers.push(nextNumber);
        currentMonth++;
    }

    function decreaseFibonacciNumbers() {
        if (currentMonth > 0) {
            currentMonth--;
            fibonacciNumbers.pop();
        }
    }

    function changeMonth(event) {
        currentMonth = parseInt(event.target.value);
        while (currentMonth >= fibonacciNumbers.length) {
            const nextNumber = fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2];
            fibonacciNumbers.push(nextNumber);
        }
    }
</script>

<h1>Os Coelhos de Fibonacci</h1>

<p>
    Mês:
    <input 
        type="number" 
        min="0" 
        value={currentMonth} 
        on:input={changeMonth} 
    />
    <button on:click={increaseFibonacciNumbers}>Próximo mês</button>
    <button on:click={decreaseFibonacciNumbers}>Mês anterior</button>
</p>

<p>Após {currentMonth} meses, haverá {fibonacciNumbers[currentMonth]} ninhadas de coelhos!</p>
