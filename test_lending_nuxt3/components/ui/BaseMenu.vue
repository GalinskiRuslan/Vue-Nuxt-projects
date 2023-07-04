<template>
  <transition name="anim">
    <div class="menu" v-if="isActive">
      <div class="wrapper">
        <!-- <div class="register">
          <a href="">Регистрация </a><a class="green" href="">/ Войти</a>
        </div> -->
        <ul class="flex">
          <li @click="scroll('service')">Как это работает?</li>
          <li @click="scroll('aboutUs'), changeAbout()">О нас</li>
          <li @click="scroll('aboutUs'), changeDoc()">Документы</li>
          <li @click="scroll('partners')">Наши партнеры</li>
          <li @click="scroll('questions')">Вопрос-ответ</li>
          <li @click="scroll('footer')">Контакты</li>
        </ul>
        <!-- <div class="local">
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
        </div> -->
        <div class="contact">
          <p>Поддержка клиентов:</p>
          <div class="tel">
            <img src="../../assets/icons/Telephone_menu.png" alt="tel" />
            <a href="tel:+996 226 213 213">+996 226 213 213</a>
          </div>
          <div class="tel">
            <img src="../../assets/icons/Telephone_menu.png" alt="tel" />
            <a href="tel:+996 558 213 213">+996 558 213 213</a>
          </div>
          <div class="tel">
            <img src="../../assets/icons/Telephone_menu.png" alt="tel" />
            <a href="tel:+996 507 213 213">+996 507 213 213</a>
          </div>
        </div>
      </div>
      <div class="logo">
        <img src="../../assets/icons/logo_menu.png" alt="logo" />
      </div>
    </div>
  </transition>
  <transition name="backdrop"
    ><div v-if="isActive" @click="toggleBaseMenu" class="backdrop"></div>
  </transition>
</template>

<script setup>
import { useStore } from "vuex";
/* const { toggleBaseMenu } = useBaseMenu(); */
const { isActive, toggleBaseMenu } = useBaseMenu();
const scroll = (refName) => {
  const element = document.getElementById(refName);
  element.scrollIntoView({ behavior: "smooth" });
  toggleBaseMenu();
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
.wrapper {
  width: 100%;
}

.menu {
  position: fixed;
  width: 273px;
  height: 676px;
  background: linear-gradient(178.98deg, #006a8d -0.96%, #00c0ff 109.91%);
  border: 2px solid #ffffff;
  border-radius: 25px 0px 0px 25px;
  right: 0;
  z-index: 100;
  padding: 50px 30px 0 27px;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

.anim-enter-from,
.anim-leave-to {
  opacity: 1;
  transform: translateX(100%);
}

.anim-enter-active {
  transition: all 0.3s ease-out;
}

.anim-leave-active {
  transition: all 0.3s ease-in;
}

.anim-enter-to,
.anim-leave-from {
  opacity: 1;
  transform: scale(1);
}
.register {
  font-weight: 800;
  font-size: 18px;
  line-height: 26px;
  text-align: right;
  color: #ffffff;
  position: relative;
  padding-bottom: 18px;
}
.register::before {
  content: "";
  position: absolute;
  width: 174px;
  height: 0px;
  bottom: 0;
  right: 0;
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  transform: rotate(180deg);
}
.register a {
  color: #ffffff;
  text-decoration: none;
}
.register .green {
  color: #52ffa8;
  text-decoration: none;
}
ul {
  list-style: none;
}
ul li {
  position: relative;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  text-align: right;
  padding: 18px 0;
  z-index: 150;
}
ul li::before {
  content: "";
  position: absolute;
  width: 174px;
  height: 0px;
  bottom: 0;
  right: 0;
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  transform: rotate(180deg);
}
ul li a {
  color: #ffffff;
  text-decoration: none;
}
.local {
  padding-top: 152px;
  text-align: right;
  font-weight: 800;
  font-size: 18px;
  line-height: 23px;
}
.local a {
  color: #fff;
  text-decoration-line: none;
}
.local .green {
  color: #52ffa8;
  text-decoration-line: none;
}
.contact p {
  padding-top: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  text-align: right;
  color: #ffffff;
}
.tel {
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
  align-items: center;
}
.tel a {
  font-weight: 800;
  font-size: 16px;
  line-height: 100%;
  text-decoration-line: underline;
  color: #52ffa8;
}
.logo {
  position: absolute;
  bottom: 150px;
  z-index: 10;
}
</style>
