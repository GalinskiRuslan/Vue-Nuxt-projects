<template>
  <div>
    <footer id="footer">
      <div class="container">
        <div class="wrapper">
          <div>
            <div class="footer__logo">
              <NuxtLink to="/"
                ><img src="../../assets/icons/footer__logo.png" alt="logo"
              /></NuxtLink>
            </div>
            <div class="footer__descr">
              <p>
                {{ $t("footer") }}
              </p>
            </div>
            <div class="contact__wrapper">
              <div class="contacts">
                <div class="descr">
                  <p>{{ $t("footer1") }}</p>
                </div>
                <div class="tel-con">
                  <div class="tel">
                    <img src="../../assets/icons/Telephone.png" alt="tel" />
                    <a href="tel:+996123456789">+996 507 213 213</a>
                  </div>
                  <div class="tel-m">
                    <img src="../../assets/icons/Telephone.png" alt="tel" />
                    <a href="tel:+996123456789">+996 558 213 213</a>
                  </div>
                  <div class="tel">
                    <img src="../../assets/icons/Telephone.png" alt="tel" />
                    <a href="tel:+996123456789">+996 226 213 213</a>
                  </div>
                </div>
                <div class="email">
                  <img src="../../assets/icons/mail.png" alt="tel" />
                  <a href="mailto:info.dostukcha.com">info@dostukcha.kg</a>
                </div>
                <div class="days">
                  <img src="../../assets/icons/clock.png" alt="tel" />
                  <p>{{ $t("footer2") }}</p>
                </div>
                <!-- <div class="days">
                  <a href="" class="download"
                    ><button class="download-btn">Скачать приложение</button
                    ><img
                      style="max-width: 250px"
                      src="../../assets/icons/логоплеймаркетбелый.png"
                      alt="tel"
                  /></a>
                </div> -->
              </div>
              <!-- <div class="time">
                <div class="descr">
                  <p>Поддержка клиентов:</p>
                </div>
                <div class="days">
                  <img src="../../assets/icons/clock.png" alt="tel" />
                  <p>ПН-ПТ с 09:00 до 18:00</p>
                </div>
              </div> -->
            </div>
          </div>
          <div class="social__wrapper">
            <ul>
              <li style="cursor: pointer" @click="scroll('TheMain')">
                Получить микрокредит
              </li>
              <li style="cursor: pointer" @click="scroll('service')">
                {{ $t("headerFirst") }}
              </li>
              <li style="cursor: pointer" @click="scroll('aboutUs')">
                {{ $t("headerSecond") }}
              </li>
              <li style="cursor: pointer" @click="scroll('partners')">
                {{ $t("headerFouth") }}
              </li>
              <li style="cursor: pointer" @click="scroll('questions')">
                {{ $t("headerFifth") }}
              </li>
            </ul>

            <!-- <div class="social">
              <div class="social__descr">
                <p>Мы в социальных сетях</p>
              </div>
              <div class="social__icons">
                <a href=""
                  ><img
                    src="../../assets/icons/whatsapp_line.png"
                    alt="whatsapp"
                /></a>
                <a href=""
                  ><img src="../../assets/icons/ins_line.png" alt="instagram"
                /></a>
                <a href=""
                  ><img
                    src="../../assets/icons/telegram_fill.png"
                    alt="telegram"
                /></a>
              </div>
            </div> -->
          </div>
        </div>
        <div class="title__end">
          <p
            style="
              margin-bottom: 30px;
              margin-top: 30px;
              text-align: start;
              font-weight: 300;
            "
          >
            Лицензия НБКР от «5» сентября 2022 г. за № 515
          </p>
          <p>© Copyright 2022</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const scroll = (refName) => {
  const element = document.getElementById(refName);
  console.log(refName);
  element.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
footer {
  background: #333333;
}
.download {
  display: flex;
  text-decoration: none;
}
.tel-con {
  display: flex;
  flex-wrap: wrap;
}
.wrapper {
  min-height: 535px;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  column-gap: 50px;
}
.footer__logo {
  padding-top: 80px;
}
.footer__descr {
  padding-top: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: #ffffff;
}
.footer__descr span {
  color: #52ffa8;
}
.contact__wrapper {
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.descr {
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: #ffffff;
}
.tel {
  padding-top: 20px;
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  align-items: center;
  column-gap: 10px;
}
.tel-m {
  padding-top: 20px;
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  align-items: center;
  column-gap: 10px;
}
.download-btn {
  background: #52ffa8;
  border-radius: 28px;
  color: #0d6d8c;
  border: none;
  padding: 20px 85px;
  font-weight: 800;
  font-size: 22px;
  line-height: 100%;
  cursor: pointer;
}
.tel a {
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  text-decoration-line: none;
  color: #ffffff;
}
.tel-m a {
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  text-decoration-line: none;
  color: #ffffff;
}
.email {
  padding-top: 20px;
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  align-items: center;
  column-gap: 10px;
}
.email a {
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  text-decoration-line: none;
  color: #ffffff;
}
.days {
  padding-top: 20px;
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  align-items: center;
  column-gap: 10px;
}
.days p {
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  text-decoration-line: none;
  color: #ffffff;
}
.social__wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.social__wrapper::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 359px;
  background: #52ffa8;
  left: -35px;
}
.social__wrapper ul {
  list-style: none;
}
.social__wrapper ul li {
  padding-bottom: 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
}
.social__descr {
  padding-top: 50px;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  color: #ffffff;
}
.social__icons {
  padding-top: 20px;
  display: grid;
  grid-template-columns: 0.3fr 0.3fr 0.3fr;
}
.title__end {
  font-weight: 800;
  font-size: 13px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  padding-bottom: 50px;
}
@media (max-width: 1200px) {
  .container {
    padding: 0 30px;
  }
  .download {
    display: block;
  }
  .days {
    margin-bottom: 30px;
  }
}
@media (max-width: 1023px) {
  .wrapper {
    min-height: 535px;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 50px;
    padding-bottom: 50px;
  }
  /* .social__wrapper::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 5px;
    background: #52ffa8;
    left: 0;
    top: 35px;
  } */
  .social__icons {
    padding-top: 20px;
    display: grid;
    grid-template-columns: 0.1fr 0.1fr 0.1fr;
  }
}
@media (max-width: 767px) {
  .contact__wrapper {
    padding-top: 40px;
    display: grid;
    grid-template-columns: 1fr;
  }
  .time .descr {
    padding-top: 20px;
  }
  .footer__descr {
    padding-top: 20px;
    font-weight: 500;
    font-size: 18px;
    line-height: 130%;
    color: #ffffff;
  }
}
</style>
