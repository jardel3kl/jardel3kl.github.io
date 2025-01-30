<script>

	import { pokedex } from "$lib/pokedex";
    let busca = $state('');
    let filtrados = $state([]);

    function filtrartitulo(event) {
    console.log(busca);
    //  se o campo de busca estiver vazio nao faz nada e encerre a funcão comando return
    if (busca == '') {
      filtrados =[]
      return;
    }
    filtrados = [];
    //pra cada filme dos meus filmes
    for (const poke of pokedex) {
      //  se este o titulo deste filme conter o campo de busca
      if (poke.nome.toLocaleLowerCase().includes(busca.toLocaleLowerCase())) {
        //    adicione este filme a lista de filmes filtrados
        filtrados.push(poke);
      } 
    }
  }
</script>

    <h1>Lista de Pokémon</h1>
    <div id="pokemonList"></div> <!-- Container para exibir a lista -->

    <input
    bind:value={busca}
    oninput={filtrartitulo}
    class="form-control"
    placeholder="Filtrar..."
  />
    {#each filtrados as poke}
    <span class="badge text-bg-secondary mx-1">{poke.nome}</span>
    
<img src="{poke.img}" alt="">
 
                 
                {/each}

           