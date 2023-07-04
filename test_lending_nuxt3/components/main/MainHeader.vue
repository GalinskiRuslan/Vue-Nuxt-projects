<template>
  <div>
    <header>
      <nav class="flex container" style="width: 100%">
        <NuxtLink :to="localePath('/')">
          <img src="../../assets/icons/logo.png" alt="logo" class="logo" />
        </NuxtLink>
        <ul class="flex">
          <li class="nav-li" @click="scroll('service')">
            {{ $t("headerFirst") }}
          </li>
          <li class="nav-li" @click="scroll('aboutUs'), changeAbout()">
            {{ $t("headerSecond") }}
          </li>
          <li class="nav-li" @click="scroll('aboutUs'), changeDoc()">
            {{ $t("headerTreeth") }}
          </li>
          <li class="nav-li" @click="scroll('partners')">
            {{ $t("headerFouth") }}
          </li>
          <li class="nav-li" @click="scroll('questions')">
            {{ $t("headerFifth") }}
          </li>
          <li class="nav-li" @click="scroll('footer')">
            {{ $t("headerSixth") }}
          </li>
        </ul>
        <div class="local">
          <NuxtLink
            style="
              cursor: pointer;
              background-color: #119ac7;
              padding: 12px;
              color: #ffffff;
              border-radius: 5px;
              margin-left: 10px;
              font-size: 18px;
            "
            v-for="{ code, name } in locales"
            :key="code"
            :to="switchLocalePath(code)"
            >{{ name }}
          </NuxtLink>
        </div>
        <!--  <div class="header__button">
          <UiBaseButton link to="/"> Войти </UiBaseButton>
        </div> -->
        <div class="hamburger" @click="toggleBaseMenu">
          <img src="../../assets/icons/hamburger.png" alt="hamburger" />
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const { toggleBaseMenu } = useBaseMenu();

const scroll = (refName) => {
  const element = document.getElementById(refName);
  element.scrollIntoView({ behavior: "smooth" });
};
const store = useStore();
const localePath = useLocalePath();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
function changeDoc() {
  store.commit("setTwo");
}
function changeAbout() {
  store.commit("setOne");
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: 130px; */
}
ul {
  display: flex;
  list-style: none;
}
ul li {
  padding: 0 10px;
  cursor: pointer;
}
.logo {
  padding: 15px 0;
}
.hamburger {
  display: none;
}
.local a {
  color: black;
  text-decoration: none;
}
.nav-li {
  position: relative;
  font-weight: 600;
}
.nav-li::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: #119ac7;
  border-radius: 6px;
  left: 0;
  bottom: -6px;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform.7s;
}
.nav-li:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
@media (max-width: 1024px) {
  ul li {
    padding: 0 10px;
    font-size: 14px;
  }
  .container {
    padding: 0 30px;
  }
  a {
    font-size: 14px;
  }
}
@media (max-width: 1023px) {
  ul {
    display: none;
  }
  .local {
    display: none;
  }
  .header__button {
    display: none;
  }
  .hamburger {
    display: block;
  }
}
@media (max-width: 500px) {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
  }
  .logo {
    padding-bottom: 15px;
  }
}
</style>
