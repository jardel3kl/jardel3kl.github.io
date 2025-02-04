<script>
  import { pokedex } from "$lib/pokedex";
  
  let busca = "";
  let filtrados = [];

  // Reatividade: Atualiza filtrados sempre que busca mudar
  $: filtrados = busca
    ? pokedex.filter(poke =>
        poke.nome.toLowerCase().includes(busca.toLowerCase())
      ) || []
    : pokedex || [];

  // Mapa de cores para os tipos de Pokémon
  const tipoCores = {
    normal:"#808080",
    fogo: "#F08030",
    agua: "#6890F0",
    grama: "#78C850",
    eletrico: "#F8D030",
    gelo: "#98D8D8",
    lutador: "#C03028",
    venenoso: "#A040A0",
    terra: "#E0C068",
    voador: "#A890F0",
    psiquico: "#F85888",
    inseto: "#A8B820",
    pedra: "#B8A038",
    fantasma: "#705898",
    dragao: "#7038F8",
    sombrio: "#705848",
    metal: "#B8B8D0",
    fada: "#EE99AC"
    
  };

  // Função para obter a cor de fundo baseada no tipo do Pokémon
  function getCorDoTipo(tipo) {
    const tipoPrimario = tipo?.split('/')[0]?.toLowerCase().trim();
    return tipoCores[tipoPrimario] || ''; // Cor padrão se tipo não for reconhecido
  }

  // URL da imagem padrão para erro
  const imagemErro = "https://via.placeholder.com/80?text=Imagem+indisponível";
</script>

<center><h1>Lista de Pokémon</h1></center>

<input
  bind:value={busca}
  class="form-control"
  placeholder="Filtrar..."
/>

<div id="pokemonList" class="grid-container">
  {#each filtrados as poke}
    <div 
      class="pokemon-card" 
      style="background-color: {getCorDoTipo(poke.tipo)}"
    >
      <h2>{poke.nome}</h2>
      <img 
        src={poke.img || imagemErro} 
        alt={poke.nome} 
        width="80" 
        height="80" 
        on:error={(e) => e.target.src = imagemErro} 
      />
      <p>Tipo: {poke.tipo}</p>
    </div>
  {/each}
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    padding: 10px;
  }
  
  .pokemon-card {
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    color: white;
    font-weight: bold;
    border: 1px solid white;
  }

  input.form-control {
    margin: 20px 0;
    padding: 10px;
    border-radius: 5px;
    width: 80%;
    font-size: 16px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
