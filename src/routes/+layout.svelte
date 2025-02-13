<script>
  const features = [
    { title: "Nova Coleção", description: "Descubra as últimas tendências da moda.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeiLodyYRLoxzRlp1bEw783qqPeUX-JUosw&s" },
    { title: "Descontos Exclusivos", description: "Aproveite ofertas especiais por tempo limitado.", image: "https://static.vecteezy.com/system/resources/previews/004/141/666/non_2x/golden-50-percent-off-flat-cartoon-style-logo-concept-50-percent-sale-isolated-icon-on-black-background-fifty-percent-discount-for-business-illustration-vector.jpg" },
    { title: "Frete Grátis", description: "Entrega gratuita para compras acima de R$200.", image: "https://ecommercenapratica.com/wp-content/uploads/2023/01/frete-gratis-mercado-livre.png" }
  ];
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  body {
    background-color: #f5f5f5;
    color: #333;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .nav-links a {
    margin: 0 15px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: color 0.3s;
  }

  .nav-links a:hover {
    color: #ff4081;
  }

  .hero {
    height: 80vh;
    background: url('/images/banner.jpg') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-size: 36px;
    font-weight: bold;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  }

  .hero .btn {
    display: inline-block;
    margin-top: 20px;
    padding: 12px 24px;
    background: #ff4081;
    color: white;
    font-size: 18px;
    border-radius: 8px;
    text-decoration: none;
    transition: background 0.3s, transform 0.2s;
  }

  .hero .btn:hover {
    background: #e6006e;
    transform: scale(1.05);
  }

  .container {
    max-width: 1200px;
    margin: auto;
    padding: 40px 20px;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .feature-card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease-in-out;
  }

  .feature-card:hover {
    transform: translateY(-5px);
  }

  .feature-card img {
    width: 100%;
    border-radius: 10px;
    max-height: 200px;
    object-fit: cover;
  }

  .feature-card h3 {
    margin: 15px 0;
    font-size: 22px;
    font-weight: bold;
    color: #333;
  }

  .feature-card p {
    font-size: 16px;
    color: #666;
  }

  .footer {
    text-align: center;
    padding: 20px;
    background: #333;
    color: white;
    margin-top: 40px;
  }
</style>

<nav class="navbar">
  <h2>Fashion Store</h2>
  <div class="nav-links">
    <a href="/home">Home</a>
    <a href="/shop">Loja</a>
    <a href="/contact">Contato</a>
  </div>
</nav>

<header class="hero">
  <div>
    <h1>Descubra a Moda do Futuro</h1>
    <a href="/shop" class="btn">Ver Coleção</a>
  </div>
</header>

<div class="container">
  <h2 style="text-align: center; margin-bottom: 20px;">Destaques</h2>
  <div class="features">
    {#each features as feature}
      <div class="feature-card">
        <img src={feature.image} alt={feature.title} />
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    {/each}
  </div>
</div>

<footer class="footer">
  © 2025 Fashion Store - Todos os direitos reservados
</footer>
