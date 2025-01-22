<script>
    const tarefas = $state(['lavar a louça', 'arrumar o quarto', 'comprar chocolate pro amigo secreto']);
    let tarefaNova = $state('');
    let tarefaEditandoIndice = $state(null);
    let tarefaEditando = $state('');

    function adicionarTarefa() {
        if (tarefaNova.trim()) {
            tarefas.push(tarefaNova);
            tarefaNova = '';
        }
    }

    function excluirTarefa(i) {
        tarefas.splice(i, 1);
    }

    function editarTarefa(i) {
        tarefaEditandoIndice = i;
        tarefaEditando = tarefas[i];
    }

    function salvarTarefa(i) {
        tarefas[i] = tarefaEditando.trim();
        tarefaEditandoIndice = null;
    }

    function cancelarEdicao() {}
</script>

<h2>Lista de tarefas</h2>
<p>
    <input placeholder="Digite a tarefa..." bind:value={tarefaNova} />
    <button onclick={adicionarTarefa}>➕</button>
</p>
<ul>
    {#each tarefas as tarefa, i}
        <li>
            {#if tarefaEditandoIndice == i}
                <input bind:value={tarefaEditando} />
                <button onclick={() => salvarTarefa(i)}>💾</button>
                <button onclick={cancelarEdicao}>❌</button>
            {:else}
                {tarefa}
                <button onclick={() => editarTarefa(i)}>✏</button>
                <button onclick={() => excluirTarefa(i)}>🗑</button>
            {/if}
        </li>
    {/each}
</ul>