<script>
  import { filmes, gêneros } from '$lib/filmes.js';

  let gênerosSelecionados = $state([]);
  let filtrados = $state(filmes.slice());
  let busca = $state('');

  function filtrartitulo(event) {
    console.log(busca);
    //  se o campo de busca estiver vazio nao faz nada e encerre a funcão comando return
    if (busca == '') {
      filtrados = filmes.slice();
      return;
    }
    filtrados = [];
    //pra cada filme dos meus filmes
    for (const filme of filmes) {
      //  se este o titulo deste filme conter o campo de busca
      if (filme.título.includes(busca)) {
        //    adicione este filme a lista de filmes filtrados
        filtrados.push(filme);
        //  senao
      } else {
        //    exclua este filme da lista de filtrados
      }
    }
  }

  function filtrarGenero(event) {
    if (event.target.checked) {
      gênerosSelecionados.push(event.target.value);
    } else {
      gênerosSelecionados.splice(gênerosSelecionados.indexOf(event.target.value), 1);
    }

    if (gênerosSelecionados.length == 0) {
      filtrados = filmes.slice();
    } else {
      filtrados = [];
      for (const filme of filmes) {
        for (const gênero of gênerosSelecionados) {
          if (filme.gêneros.includes(gênero)) {
            filtrados.push(filme);
            break;
          }
        }
      }
    }
  }
</script>

<div class="row align-items-center mb-3">
  <div class="col">
    <input
      bind:value={busca}
      oninput={filtrartitulo}
      class="form-control"
      placeholder="Filtrar..."
    />
  </div>
  {#each gêneros as gênero}
    <div class="col">
      <div class="form-check form-check-inline">
        <input
          oninput={filtrarGenero}
          class="form-check-input"
          type="checkbox"
          id={gênero}
          value={gênero}
        />
        <label class="form-check-label" for={gênero}>{gênero}</label>
      </div>
    </div>
  {/each}
</div>
<div class="row g-4">
  {#each filtrados as filme}
    <div class="col-md-6 col-xl-3">
      <div class="card h-100">
        <div class="row g-0">
          <div class="col-3 col-sm-4">
            <img src={filme.imagem} class="img-fluid rounded-start" alt="capa do filme" />
            <a target="_blank" href={filme.referência} class="btn btn-outline-dark">Referências</a>
          </div>
          <div class="col-sm-8">
            <div class="card-body">
              <h5 class="card-title">{filme.título}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">{filme.ano}</h6>
              <p class="card-text">{filme.sinopse}</p>
              <p class="card-text">
                
                {#each filme.gêneros as gênero}
                  <span class="badge text-bg-secondary mx-1">{gênero}</span>
                {/each}

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
