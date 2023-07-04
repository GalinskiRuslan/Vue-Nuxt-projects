<template>
  <section class="partners" id="partners">
    <div class="container">
      <div class="partners__title">
        <p>{{ $t("usPartners") }}</p>
      </div>
      <div class="items">
        <div class="item blue">
          <div class="flex">
            <div>
              <div class="logo">
                <img src="../../assets/icons/partner_neft.png" alt="logo" />
              </div>
              <p class="part-text">
                {{ $t("usPartners1") }}
              </p>
              <!-- <div class="item__title">
            <p>Партнер <span>“Нефть”</span></p>
          </div> -->
              <!-- <div class="item__descr">
            <p>
              Сеть АЗС «Партнер нефть» где Вы сможете, не имея с собой денег
              заправить свой автомобиль через наше приложение после одобрения
              микрокредита с помощью уникального QR кода
            </p>
          </div> -->
              <!-- <div class="item__button">
            <UiBaseButton>Подробнее</UiBaseButton>
          </div> -->
            </div>
            <div class="imgs">
              <img
                style="position: absolute; margin-top: -50px"
                src="../../assets/images/Rectangle4149.png"
                alt="img"
              />
              <img
                style="
                  position: absolute;
                  margin-top: -50px;
                  margin-left: 180px;
                "
                src="../../assets/images/Rectangle4150.png"
                alt="img"
              />
              <img
                src="../../assets/images/Rectangle4151.png"
                alt="img"
                style="position: absolute; margin-top: 120px"
              />
            </div>
          </div>
        </div>

        <!-- <div class="item green">
          <div class="logo">
            <img src="../../assets/icons/frunze.png" alt="logo" />
          </div>
          <div class="item__title">
            <p>Партнер <span>“Фрунзе”</span></p>
          </div>
          <div class="item__descr">
            <p>
              Сеть гипермаркетов «Фрунзе» где вы сможете приобрести любой товар
              на сумму, которую Вам одобрит Dostukcha с помощью уникального QR
              кода
            </p>
          </div>
          <div class="item__button">
            <UiBaseButton>Подробнее</UiBaseButton>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.partners {
  padding-bottom: 150px;
}
.partners__title {
  padding-top: 80px;
  font-weight: 800;
  font-size: 32px;
  line-height: 100%;
  color: #000000;
}
.items {
  padding-top: 50px;
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  column-gap: 20px;
}
.flex {
  display: flex;
}
.imgs {
  width: 35%;
  margin-left: 75px;
}
.blue {
  padding: 30px 120px;
  /* max-width: 560px; */
  height: 100%;
  background: #c9f2ff;
  border-radius: 25px;
}
.part-text {
  color: #000;
  font-size: 16px;
  font-family: Mont;
  font-weight: 600;
  line-height: 150%;
  margin-top: 30px;
}
.green {
  padding: 30px 50px;
  max-width: 560px;
  height: 100%;
  background: #cdfae3;
  border-radius: 25px;
}
.item {
  /* display: grid;
  grid-template-rows: 1fr 0.5fr 1fr 1fr; */
}
.item__title {
  padding-top: 10px;
  font-weight: 400;
  font-size: 26px;
  line-height: 150%;
  color: #000000;
}

.item__title span {
  font-weight: 600;
  font-size: 26px;
  line-height: 150%;
  color: #00c0ff;
}
.item__descr {
  padding-top: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #000000;
}
.item__button {
  padding-top: 20px;
}
@media (max-width: 1200px) {
  .container {
    padding: 0 30px;
  }
  .flex {
    flex-direction: column;
  }
  .imgs {
    display: none;
  }
  .blue {
    padding: 30px;
  }
  .partners {
    padding-bottom: 50px;
  }
}
@media (max-width: 767px) {
  .items {
    grid-template-columns: 1fr;
    row-gap: 20px;
    justify-items: center;
  }
  .partners__title {
    text-align: center;
  }
}
</style>
