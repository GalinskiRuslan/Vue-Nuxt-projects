<template>
  <section class="main" id="TheMain">
    <div class="container">
      <div class="grid__wrapper">
        <div class="grid_wrapper_text">
          <h2>{{ $t("main1") }}</h2>
          <h1>Достук<span>ча</span></h1>
          <div class="main__img_2">
            <img src="../../assets/images/girls_main_1.png" alt="main_bg" />
          </div>
          <ul>
            <li>{{ $t("main2") }}</li>
            <li>{{ $t("main21") }}</li>
            <li>{{ $t("main22") }}</li>
          </ul>

          <div class="main__button">
            <UiBaseButton @click="scroll('footer')" link mode="green"
              >{{ $t("main3") }}
            </UiBaseButton>
          </div>
        </div>
        <div class="main__img">
          <img src="../../assets/images/girls_main_1.png" alt="main_bg" />
        </div>
        <div class="calc">
          <p class="calc-title">{{ $t("calc1") }}</p>
          <label class="calc-label"
            ><p class="calc-text">{{ $t("calc2") }}</p>
            <span class="calc-text__bold">{{ valueRange }} сом</span></label
          >
          <input
            type="range"
            min="1000"
            max="1500"
            step="100"
            v-model="valueRange"
            class="calc-range"
            v-bind:style="`background: linear-gradient(to right,#52FFA8 ${
              ((valueRange - 1000) / (1500 - 1000)) * 100
            }%, #FFFFFF ${
              ((valueRange - 1000) / (1500 - 1000)) * 100
            }%, #FFFFFF 100%); background: -webkit-linear-gradien(to right, #a103ee, #f1783b ${
              ((valueRange - 1000) / (1500 - 1000)) * 100
            }%, #FFFFFF ${
              ((valueRange - 1000) / (1500 - 1000)) * 100
            }%, #FFFFFF 100%); background: -moz-linear-gradien(to right, #a103ee, #f1783b ${
              ((valueRange - 1000) / (1500 - 1000)) * 100
            }%, #FFFFFF ${
              ((valueRange - 1000) / (1500 - 1000)) * 100
            }%, #FFFFFF 100%);`"
          />
          <label class="calc-label"
            ><p class="calc-text__smal">1000 сом</p>
            <p class="calc-text__smal">1500 сом</p></label
          >
          <label class="calc-label"
            ><p class="calc-text">{{ $t("calc3") }}</p>
            <p class="big-blue">30 дней</p></label
          >
          <div class="calc-line"></div>
          <label class="calc-label mt-20"
            ><p class="calc-text">{{ $t("calc4") }}</p>
            <p class="calc-text-blue">{{ valueRange }} сом</p></label
          >
          <label class="calc-label mt-20"
            ><p class="calc-text">{{ $t("calc5") }}:</p>
            <p class="calc-text-blue">{{ reward }} сом</p></label
          >
          <label class="calc-label mt-20"
            ><p class="calc-text">{{ $t("calc6") }}</p>
            <p class="calc-text-blue">{{ sum }} сом</p></label
          >
          <div class="calc-btm-cont">
            <button class="calc-button">{{ $t("calc7") }}</button>
          </div>
          <div>
            <p class="small-bottom-text">{{ $t("calc8") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      valueRange: 1200,
    };
  },
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
  computed: {
    reward: function () {
      return Math.round((1.05 / 100) * this.valueRange * 30);
    },
    sum: function () {
      return Math.round(Number(this.valueRange) + Number(this.reward));
    },
  },
};
</script>

<style scoped>
.main {
  background: linear-gradient(180deg, #36cdff 0%, #119ac7 100%);
}
.grid__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 560px;
  height: 100%;
}
h2 {
  padding-top: 105px;
  font-weight: 600;
  font-size: 32px;
  line-height: 130%;
}
h1 {
  padding-top: 20px;
  font-weight: 800;
  font-size: 32px;
  line-height: 100%;
  text-transform: uppercase;
}
h1 span {
  color: #52ffa8;
}
.main__button {
  display: flex;
  margin-top: 30px;
}
ul {
  padding-top: 20px;
  padding-left: 30px;
  list-style: none;
}
ul li {
  position: relative;
  padding-bottom: 15px;
}
ul li::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background: #52ffa8;
  border-radius: 100%;
  left: -30px;
  top: 5px;
}
.main__img {
  width: 100%;
  display: grid;
  align-self: end;
}
.main__img img {
  width: 85%;
  position: relative;
  left: -185px;
}
.main__img_2 {
  display: none;
}
.small-bottom-text {
  margin-top: 15px;
  font-size: 12px;
}
.calc {
  position: absolute;
  right: 0;
  margin-top: 20px;
  border-radius: 26px;
  background: linear-gradient(
    225deg,
    rgba(207, 207, 207, 0.8) 0%,
    rgba(239, 239, 239, 0.32) 100%
  );
  backdrop-filter: blur(10px);
  padding: 40px 30px;
  padding-bottom: 20px;
  border: 1px solid #ffffff;
  max-width: 387px;
  width: 100%;
}
.calc-label {
  display: flex;
  justify-content: space-between;
}
.calc-title {
  color: #0d6d8c;
  font-size: 17px;
  font-family: Open Sans;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.container {
  position: relative;
}
input {
  width: 100%;
}
.calc-text {
  color: #000;
  font-size: 14px;
  font-family: Open Sans;
}
.calc-text__bold {
  text-align: right;
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 700;
}
.calc-text__smal {
  color: #000;
  font-size: 12px;
  font-family: Open Sans;
  margin-bottom: 33px;
}
.calc-line {
  border-bottom: 1px solid #0d6d8c;
  width: 80%;
  margin: 0 auto;
  margin-top: 33px;
}
.big-blue {
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 700;
  color: #0d6d8c;
}
.calc-text-blue {
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 700;
  color: #0d6d8c;
}
.mt-20 {
  margin-top: 20px;
}
.calc-range {
  -webkit-appearance: none;
  width: 100%;
  height: 18px;
  border-radius: 2px;
  background: #fff;
  outline: none;
  box-shadow: inset 0 0 5px white;
  border-radius: 30px;
  margin: 10px 0;
}
.calc-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 35px;
  height: 35px;
  background: url("../../assets/images/range.png");
  background-position: 60% 30%;
  cursor: pointer;
}
.calc-button {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  background: var(--unnamed, #52ffa8);
  font-size: 16px;
  font-family: Mont;
  font-weight: 800;
  color: var(--unnamed, #0d6d8c);
  padding: 15px 50px;
  border: none;
  cursor: pointer;
  text-align: center;
  margin-top: 30px;
}
.calc-btm-cont {
  text-align: center;
}
.calc-button:hover {
  background: var(--unnamed, #15c26b);
}
@media (max-width: 1024px) {
  .container {
    padding: 0 30px;
  }
  h2 {
    padding-top: 80px;
  }
}
@media (max-width: 1024px) {
  .main {
    background: linear-gradient(180deg, #36cdff 0%, #119ac7 100%);
    /*  height: 613px; */
    width: 100%;
    padding-bottom: 30px;
  }
  .container {
    margin: 0 auto;
    padding: 0 30px;
  }
  h2 {
    padding-top: 40px;
    font-weight: 600;
    font-size: 24px;
    line-height: 130%;
    color: #000000;
  }
  h1 {
    padding-top: 20px;
    font-weight: 800;
    font-size: 32px;
    line-height: 100%;
    text-transform: uppercase;
    color: #000000;
  }
  h1 span {
    color: #52ffa8;
  }
  .main__button {
    display: flex;
    justify-content: center;
    margin-top: -5px;
  }
  .main .main__img_2 {
    width: 100%;
    display: block;
    text-align: center;
  }
  .main__img_2 img {
    margin-top: 50px;
    max-width: 420px;
    width: 100%;
  }
  .main__img {
    display: none;
  }

  .grid__wrapper {
    display: grid;
    grid-template-columns: 1fr;
  }
  ul {
    display: none;
  }
  .calc {
    position: relative;
    margin: auto;
    margin-top: 80px;
  }
}
</style>
