<script>
let { children } = $props();
</script>

<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="nav-link" href="/fibonati">fibonati</a>
    <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTExL3YxMTgxLXR1LWVsZW1lbnQtMjUwLXAtbTN3cXR3dTEucG5n.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
  </div>
</nav>

{@render children()}
