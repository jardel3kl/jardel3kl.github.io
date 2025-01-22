<script>
    const tarefas = $state([]);
    let tarefa = $state();
    let editando = $state();
    let input = $state();

  </script>
  
  <h2>Tarefas a fazer</h2>
  <input placeholder="Tarefa..." bind:value={tarefa} />
  <button onclick={() => tarefas.push(tarefa)}>+</button>
  
  
  <ul>
    {#each tarefas as tarefa, i}
      <li>{tarefa} (<a href="#/" onclick={() => tarefas.splice(i, 1)}>🗑</a>) (<a href="#/" onclick={() => editando = tarefas[i]}>🖌️</a>)
        {#if editando === tarefas[i]}
        <input placeholder="Tarefa..." bind:value={editando} />
        {:else}
        <input placeholder="Tarefa..." bind:value={editando} />
        <button onclick={() => tarefas[i] = editando }>+</button>
        {/if} 
     
    
    </li>
      
   
      
    {/each}

    
  </ul>