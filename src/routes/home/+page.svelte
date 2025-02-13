<script>
    import { items } from '/items.js'; // ✅ Caminho correto
  
  </script>
  
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding: 0;
      background: #fdfdfd;
      color: #333;
    }
    .header {
      text-align: center;
      padding: 60px 20px;
      background: url('https://source.unsplash.com/1600x900/?fashion') center/cover no-repeat;
      color: white;
      font-size: 36px;
      font-weight: bold;
      text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
    }
    .container {
      max-width: 1200px;
      margin: auto;
      padding: 40px 20px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 30px;
    }
    .card {
      background: white;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.3s ease-in-out;
    }
    .card:hover {
      transform: scale(1.05);
    }
    .card img {
      width: 100%;
      border-radius: 10px;
      max-height: 300px;
      object-fit: cover;
    }
    .card h3 {
      margin: 15px 0;
      font-size: 20px;
      font-weight: bold;
      color: #444;
    }
    .card p {
      font-size: 18px;
      color: #ff4081;
      font-weight: bold;
    }
    .btn {
      display: inline-block;
      margin-top: 10px;
      padding: 10px 20px;
      background: #ff4081;
      color: white;
      font-size: 16px;
      border-radius: 5px;
      text-decoration: none;
      transition: background 0.3s;
    }
    .btn:hover {
      background: #e6006e;
    }
  </style>
  
  <header class="header">Moda Feminina  Coleção Exclusiva</header>
  <div class="container">
    <div class="grid">
      {#each items as item}
        <div class="card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <a href="/home" class="btn">Comprar Agora</a>
        </div>
      {/each}
    </div>
  </div>
  
  