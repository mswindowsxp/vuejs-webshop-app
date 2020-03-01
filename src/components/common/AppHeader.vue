<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">TY FOODS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="oi oi-menu"></span> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active"><a href="index.html" class="nav-link">Trang Chủ</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true"
                 aria-expanded="false">Sản Phẩm</a>
              <div class="dropdown-menu" aria-labelledby="dropdown04">
                <a class="dropdown-item" href="shop.html">Giấy ăn</a>
                <a class="dropdown-item" href="wishlist.html">Ly giấy</a>
                <a class="dropdown-item" href="product-single.html">Hộp nhựa</a>
                <a class="dropdown-item" href="cart.html">Hải sản</a>
                <a class="dropdown-item" href="checkout.html">Bột Làm Bánh</a>
              </div>
            </li>
            <li class="nav-item"><a href="about.html" class="nav-link">Giới Thiệu</a></li>
            <li class="nav-item"><a href="blog.html" class="nav-link">Tin tức & Sự kiện</a></li>
            <li class="nav-item"><a href="contact.html" class="nav-link">Liên Hệ</a></li>
            <li class="nav-item cta cta-colored"><a href="cart.html" class="nav-link"><span
              class="icon-shopping_cart"></span>[0]</a></li>

          </ul>
        </div>
        <div class="search-top">
          <form action="#" class="subscribe-form">
            <div class="form-group d-flex">
              <input type="text" class="form-control">
              <input type="submit" value="" class="submit submit-search px-3"><span class="icon-search"></span>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </div>

</template>
<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
