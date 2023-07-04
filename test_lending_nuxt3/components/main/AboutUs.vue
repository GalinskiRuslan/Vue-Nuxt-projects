<template>
  <section class="about__us" id="aboutUs">
    <div class="container">
      <div class="about__us_buttons">
        <UiBaseButton
          class="f-b"
          @click="swichButtonOne"
          :mode="{
            outline: isActiveAboutUs,
            blur: isActiveDocuments || isActiveReports,
          }"
          >{{ $t("aboutTiitle") }}</UiBaseButton
        >
        <UiBaseButton
          class="f-b"
          @click="swichButtonTwo"
          :mode="{
            outline: isActiveDocuments,
            blur: isActiveAboutUs || isActiveReports,
          }"
          >Документы</UiBaseButton
        >
        <UiBaseButton
          class="f-b"
          @click="swichButtonTree"
          :mode="{
            outline: isActiveReports,
            blur: isActiveAboutUs || isActiveDocuments,
          }"
          >{{ $t("otchet") }}</UiBaseButton
        >
      </div>
      <div class="wrapper">
        <div class="about__us_wrapper flex" v-if="isActiveAboutUs">
          <div>
            <h2>{{ $t("about") }}</h2>
            <p>
              {{ $t("about1") }}
            </p>
            <br />
            <p>
              {{ $t("about2") }}
            </p>
            <br />
            <p>
              {{ $t("about3") }}
            </p>
          </div>
          <div class="about__us_img">
            <img src="../../assets/images/Group15.png" alt="aboutUs" />
          </div>
        </div>
        <div class="documents" v-if="isActiveDocuments">
          <div class="docs__items">
            <div class="docs__item">
              <img src="../../assets/icons/doc.png" alt="doc" />
              <a class="link-doc" href="/doc/dogovoprd.docx" target="_blank"
                ><p>{{ $t("documents") }}</p></a
              >
            </div>
            <div class="docs__item">
              <img src="../../assets/icons/doc.png" alt="doc" />
              <a
                target="_blank"
                class="link-doc"
                href="/doc/Лицензия на осуществление микрофинансовой деятельности.pdf"
              >
                <p>{{ $t("documents4") }}</p>
              </a>
            </div>
            <div class="docs__item">
              <img src="../../assets/icons/doc.png" alt="doc" />
              <a
                target="_blank"
                class="link-doc"
                href="/doc/Политика конфиденциальности.pdf"
              >
                <p>{{ $t("documents1") }}</p>
              </a>
            </div>
            <div class="docs__item">
              <img src="../../assets/icons/doc.png" alt="doc" />
              <a
                target="_blank"
                class="link-doc"
                href="/doc/Политика_в_отношении_обработки_и_защиты_персональных_данных-(1).html"
              >
                <p>
                  {{ $t("documents5") }}
                </p>
              </a>
            </div>
            <div class="docs__item">
              <img src="../../assets/icons/doc.png" alt="doc" />
              <a target="_blank" class="link-doc" href="/doc/Реквизиты.pdf">
                <p>{{ $t("documents2") }}</p>
              </a>
            </div>
            <div class="docs__item">
              <img src="../../assets/icons/doc.png" alt="doc" />
              <a
                target="_blank"
                class="link-doc"
                href="/doc/Dostukcha_politica.html"
              >
                <p>
                  {{ $t("documents6") }}
                </p>
              </a>
            </div>
            <div class="docs__item">
              <img src="../../assets/icons/doc.png" alt="doc" />
              <a
                target="_blank"
                class="link-doc"
                href="/doc/0dcb8b29-18b7-4528-8573-41435c3ea638.pdf"
              >
                <p>{{ $t("documents3") }}</p>
              </a>
            </div>
          </div>
        </div>
        <div class="documents" v-if="isActiveReports">
          <div class="docs__items">
            <!-- <div class="docs__item">
              <img src="../../assets/icons/doc.png" alt="doc" />
              <a class="link-doc" href="" target="_blank"><p>Отчёт 1</p></a>
            </div>
            <div class="docs__item">
              <img src="../../assets/icons/doc.png" alt="doc" />
              <a target="_blank" class="link-doc" href="">
                <p>отчёт 2</p>
              </a>
            </div>
            <div class="docs__item">
              <img src="../../assets/icons/doc.png" alt="doc" />
              <a target="_blank" class="link-doc" href="">
                <p>Отчёт 3</p>
              </a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      mode: "",
    };
  },
  computed: {
    ...mapGetters(["getOne"]),
    isActiveAboutUs() {
      return this.getOne.aboutUs;
    },
    isActiveDocuments() {
      return this.getOne.document;
    },
    isActiveReports() {
      return this.getOne.reports;
    },
  },
  methods: {
    ...mapMutations(["setOne", "setTwo", "setRep"]),
    swichButtonOne() {
      this.setOne();
    },
    swichButtonTwo() {
      this.setTwo();
    },
    swichButtonTree() {
      this.setRep();
    },
  },
};
</script>

<style scoped>
h2 {
  font-weight: 800;
  font-size: 24px;
  line-height: 135%;
  color: #000000;
  padding: 10px 0 20px 0;
}
p {
  font-weight: 600;
  font-size: 16px;
  line-height: 135%;
  color: #000000;
}
.about__us {
  background: #f3f9fb;
  padding-bottom: 50px;
}
.about__us_buttons {
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
}
.wrapper {
  /* margin-top: 20px; */
  background: #ffffff;
  /* border: 0.8px solid #ececec; */
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.15);
  border-radius: 0 0 25px 25px;
  padding: 40px 55px 50px 35px;
  min-height: 550px;
}
ul {
  list-style: none;
}
ul li {
  position: relative;
  padding-left: 30px;
}
ul li::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 3px;
  background: #0d6d8c;
  left: 0px;
  top: 8px;
}
.docs__items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.docs__item {
  display: flex;
  /* grid-template-columns: 0.2fr auto; */
  align-items: center;
}
.docs__item img {
  margin-right: 15px;
}
.flex {
  display: flex;
}
.link-doc {
  text-decoration: none;
}
@media (max-width: 1200px) {
  .container {
    padding: 0 30px;
  }
  .f-b {
    padding: 10px;
  }
}
@media (max-width: 768px) {
  .container {
    padding: 0 30px;
  }
  h2 {
    font-size: 18px;
    line-height: 135%;
  }
  p {
    font-size: 13px;
    line-height: 135%;
  }
  .docs__item {
    display: grid;
    grid-template-columns: 0.1fr 1fr;
    align-items: center;
    column-gap: 10px;
  }
  .docs__items {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .about__us_img {
    display: none;
  }
}
</style>
