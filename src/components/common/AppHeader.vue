<template>
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div class="container-fluid">
            <router-link tag="a" to="/" class="navbar-brand">TY FOODS</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="oi oi-menu"></span> Menu
            </button>

            <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><a href="index.html" class="nav-link">Trang Chủ</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown"
                           aria-haspopup="true"
                           aria-expanded="false">Sản Phẩm</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown04">
                            <router-link tag="a" to="/product-list/tissue" class="dropdown-item">Giấy Ăn</router-link>
                            <router-link tag="a" to="/product-list/paper-cup" class="dropdown-item">Ly Giấy
                            </router-link>
                            <router-link tag="a" to="/product-list/bottle-plastic" class="dropdown-item">Hộp Nhựa
                            </router-link>
                            <router-link tag="a" to="/product-list/flour" class="dropdown-item">Bột Làm Bánh
                            </router-link>
                        </div>
                    </li>
                    <li class="nav-item"><a href="about.html" class="nav-link">Giới Thiệu</a></li>
                    <li class="nav-item"><a href="blog.html" class="nav-link">Tin tức & Sự kiện</a></li>
                    <li class="nav-item"><a href="contact.html" class="nav-link">Liên Hệ</a></li>
                    <li class="nav-item">
                        <router-link tag="a" class="nav-link icon-shopping_cart" to="/cart">
                            [{{shopCartSize}}]
                        </router-link>
                    </li>

                </ul>
            </div>
            <div class="search-top">
                <form action="#" class="subscribe-form">
                    <div class="form-group d-flex">
                        <input type="text" class="form-control">
                        <input type="submit" value="" class="submit submit-search px-3"><span
                            class="icon-search"></span>
                    </div>
                </form>
            </div>
        </div>
    </nav>

</template>
<script>
export default {
  name: 'app-header',
  data () {
    return {
      shopCart: this.$store.getters.GET_SHOP_CART_SIZE
    }
  },
  computed: {
    shopCartSize () {
      return this.$store.getters.GET_SHOP_CART_SIZE
    }
  }
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
