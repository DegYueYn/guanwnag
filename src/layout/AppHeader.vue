<template>
 <div class="header" >
<base-nav  type="" expand>
     <img class="logo" src="../assets/images/logo.png"/>
    <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-12 collapse-close dakr" >
            <close-button @click="closeMenu"></close-button>
        </div>
    </div>
    <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                探索
            </a>
        </li>
         <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                首发
            </a>
        </li>
         <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                下载App
            </a>
        </li>
         <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                关于我们
            </a>
        </li>
    </ul>

    <ul class="navbar-nav ml-lg-auto">
         <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                登录
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-link-icon bord" href="#">
                注册
            </a>
        </li>
    </ul>
 </base-nav>
</div>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style lang="scss" >
.header{
 position: sticky;
 top: 0;
 left: 0;
 background-color: #fff;
 z-index: 9999;
}
.navbar{
    // background-color: #fff !important;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
}

.logo{
    width: 64px;
    height: 32px;
    object-fit: cover;
}

.nav-link-icon{
    margin-left: 20px;
    color: #6B7280 !important;
}
.bord{
    border: 1px solid #333;
    color:#fff !important;
    height: 40px;
    line-height: 5px;
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
    width: 80px;
    background-color: #4F46E5;
}

</style>
