<script>
  import { classes } from '$lib/classes-dd.js';
</script>

<div class="card-group">
    <div class="row row-cols-1 row-cols-md-3 g-4">
     
  {#each classes as classe}
  <div class="col">
    <div class="card h-100" style="width: 30rem;heigth: 30rem;">
      <img src={classe.imgsrc} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{classe.nome}</h5>
        <p class="card-text">{classe.descricao}</p>
        <a target="_blank" href={classe.url} class="btn btn-primary">Mais sobre</a>
      </div>
    </div>
  </div>
  {/each}
  </div>
</div>
