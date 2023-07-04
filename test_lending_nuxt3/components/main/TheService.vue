<template>
  <section class="service" id="service">
    <div class="container">
      <div class="item__title">
        <p>{{ $t("howWork") }}</p>
      </div>
      <div class="items">
        <div class="item">
          <div class="item__icon">
            <img src="../../assets/icons/serv_icon_1.png" alt="verify" />
          </div>
          <div>
            <div class="item__subtitle">
              <p>{{ $t("howWork1") }}</p>
            </div>
            <div class="item__descr">
              <p>
                {{ $t("howWork2") }}
              </p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item__icon">
            <img src="../../assets/icons/serv_icon_2.png" alt="verify" />
          </div>
          <div>
            <div class="item__subtitle">
              <p>{{ $t("howWork3") }}</p>
            </div>
            <div class="item__descr">
              <p>
                {{ $t("howWork4") }}
              </p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item__icon">
            <img src="../../assets/icons/serv_icon_3.png" alt="verify" />
          </div>
          <div>
            <div class="item__subtitle">
              <p>{{ $t("howWork5") }}</p>
            </div>
            <div class="item__descr">
              <p>
                {{ $t("howWork6") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.service {
  padding-bottom: 80px;
}
.items {
  padding-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
}
.item__title {
  padding-top: 80px;
  font-weight: 800;
  font-size: 32px;
  line-height: 100%;
  text-align: center;
  color: #000000;
}
.item {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}
.item__icon {
  padding-right: 10px;
}
.item__subtitle {
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  color: #000000;
}
.item__descr {
  padding-top: 10px;
  font-weight: 600;
  font-size: 13px;
  line-height: 150%;
  color: #0d6d8c;
}

@media (max-width: 1024px) {
  .container {
    padding: 0 30px;
  }
}
@media (max-width: 1023px) {
  .items {
    padding-top: 50px;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 20px;
    row-gap: 20px;
  }
  .item {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .item__subtitle {
    text-align: center;
  }
  .item__descr {
    text-align: center;
  }
}

@media (max-width: 425px) {
  .service {
    padding-bottom: 50px;
  }
  .item__title {
    padding-top: 30px;
    font-weight: 800;
    font-size: 24px;
    line-height: 100%;
    text-align: center;
    color: #000000;
  }
  .item__icon {
    display: flex;
    justify-content: center;
    padding-top: 30px;
  }
  .item__subtitle {
    padding-top: 30px;
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    color: #000000;
  }
  .item__descr {
    font-weight: 600;
    font-size: 13px;
    line-height: 150%;
    text-align: center;
    color: #0d6d8c;
  }
}
</style>
