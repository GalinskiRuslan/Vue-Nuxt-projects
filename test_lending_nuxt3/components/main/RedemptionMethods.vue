<template>
  <section id="how-pay">
    <h3 class="container title">{{ $t("howPat") }}</h3>
    <div class="container grid">
      <div class="mob-center">
        <div v-for="(method, index) in methods" :key="method">
          <button
            @click="log(index)"
            :class="`method-btn ${index === active ? 'active' : ''}`"
          >
            <img :src="method.src" />
            {{ method.name }}
          </button>
          <div
            v-for="(method, index2) in methodsDiscr"
            :key="index2"
            :class="`methods__descr-item ${
              index2 === active ? 'active' : ''
            } mob`"
          >
            <div v-if="index2 == index">
              <!-- <h3 class="methods__descr-title">{{ method.title }}</h3> -->
              <div v-for="(discr, index) in method" :key="discr">
                <p v-if="index != 'title'">{{ discr }}</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="methods__descr-card desc">
        <div
          v-for="(method, index) in lang"
          :key="index"
          :class="`methods__descr-item ${index === active ? 'active' : ''} `"
        >
          <h3 class="methods__descr-title">{{ method.title }}</h3>

          <div v-for="(discr, index) in method" :key="discr">
            <p v-if="index != 'title'">{{ discr }}</p>
            <br />
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
      methods: [
        { name: "Mbank", src: "/icons/mbank_icon_ellipse.png" },
        { name: "MegaPay", src: "/icons/MegaPay-512h-png.png" },
        { name: "Pay24", src: "/icons/Group417.png" },
        { name: "Unipay", src: "/icons/Group418.png" },
        { name: "Balance", src: "/icons/LogoBalance-021.png" },
        { name: "О!Деньги", src: "/icons/Maskgroup(3).png" },
      ],
      methodsDiscr: [
        {
          title: "Mbank",
          description1: "1. На главном экране выберите раздел 'Платежи'",
          description2: "2. Далее выберите 'МКК'",
          description3:
            "3. Далее выберите ОсОО МКК 'Достукча'- 'погашение кредита'",
          description4: "4. Введите ИНН и сумму платежа",
          description5: "5. Далее нажмите на кнопку 'Подтверждение оплаты'",
          description6:
            "6. На номер телефона придет смс-сообщение о погашении микрокредита",
        },
        {
          title: "MegaPay",
          description1: "1. На главном экране выберите раздел 'Оплата'",
          description2: "2. Далее выберите 'Погашение кредита МКК'",
          description3: "3. Далее выберите ОсОО МКК 'Достукча'",
          description4: "4. Введите ИНН и сумму погашения",
          description5: "5. Нажмите на кнопку 'Оплатить'",
          description6:
            "6. На номер телефона придет смс-сообщение о погашении микрокредита",
        },
        {
          title: "Pay24",
          description1:
            "1. На главном экране выберите раздел 'Банковские и финансовые услуги'",
          description2: " 2. Далее выберите 'Погашение кредитов и займов'",
          description3: " 3. Далее выберите ОсОО МКК 'Достукча'",
          description4:
            " 4. Введите ИНН и номер телефона, на который желаете получить сдачи",
          description5: " 5. Внесите деньги",
          description6: " 6. Нажмите на кнопку 'Оплатить'",
          description7: " 7. Получите квитанцию о погашении микрокредита",
          description8:
            " 8. В случае, если есть сдачи получите квитанцию о получении сдачи",
          description9:
            " 9. На номер телефона придет смс-сообщение о погашении микрокредита",
        },
        {
          title: "Unipay",
          description1:
            "1. На главном экране выберите раздел 'Финансовые услуги' ",
          description2: " 2. Далее выберите 'Погашение кредитов и займов'",
          description3: " 3. Далее выберите ОсОО МКК 'Достукча'",
          description4: " 4. Введите свой ИНН.",
          description5: " 5. Внесите деньги",
          description6: " 6. Нажмите на кнопку 'Оплатить'",
          description7: " 7. Получите квитанцию",
          description8:
            " 8. На номер телефона придет смс-сообщение о погашении микрокредита",
        },
        {
          title: "Balance",
          description1: "1. На главном экране выберите раздел «Категории» ",
          description2: "2. Далее выберите «Финансы»",
          description3: "3. Затем выберите услугу «Погашение кредита»",
          description4: "4. Найдите в списке ОсОО МКК «Достукча» ",
          description5: "5. Введите номер ID договора ",
          description6: "6. Укажите сумму погашения",
          description7:
            "7. Нажмите далее, на экране появится окно, где необходимо подтвердить данные",
          description8: "8. После подтверждения нажмите «Оплатить»",
          description9:
            "9. На номер телефона придет смс-подтверждение о погашении микрокредита",
        },
        {
          title: "О!Деньги",
          description1: " 1. На главном экране выберите раздел 'О!Деньги'",
          description2: " 2. Далее выберите 'Оплата'",
          description3: " 3. Далее выберите 'Погашение кредита'",
          description4: " 4. Далее выберите ОсОО МКК 'Достукча'",
          description5: " 5. Введите ИНН",
          description6: " 6. Укажите сумму погашения",
          description7: " 7. Нажмите на кнопку 'Оплатить'",
          description8:
            " 8. На номер телефона придет смс-сообщение о погашении микрокредита",
        },
      ],
      active: 0,
    };
  },
  methods: {
    log(index) {
      console.log(this.$i18n.locale);
      this.active = index;
    },
  },
  computed: {
    lang() {
      if (this.$i18n.locale == "ru") {
        return [
          {
            title: "Mbank",
            description1: "1. На главном экране выберите раздел 'Платежи'",
            description2: "2. Далее выберите 'МКК'",
            description3:
              "3. Далее выберите ОсОО МКК 'Достукча'- 'погашение кредита'",
            description4: "4. Введите ИНН и сумму платежа",
            description5: "5. Далее нажмите на кнопку 'Подтверждение оплаты'",
            description6:
              "6. На номер телефона придет смс-сообщение о погашении микрокредита",
          },
          {
            title: "MegaPay",
            description1: "1. На главном экране выберите раздел 'Оплата'",
            description2: "2. Далее выберите 'Погашение кредита МКК'",
            description3: "3. Далее выберите ОсОО МКК 'Достукча'",
            description4: "4. Введите ИНН и сумму погашения",
            description5: "5. Нажмите на кнопку 'Оплатить'",
            description6:
              "6. На номер телефона придет смс-сообщение о погашении микрокредита",
          },
          {
            title: "Pay24",
            description1:
              "1. На главном экране выберите раздел 'Банковские и финансовые услуги'",
            description2: " 2. Далее выберите 'Погашение кредитов и займов'",
            description3: " 3. Далее выберите ОсОО МКК 'Достукча'",
            description4:
              " 4. Введите ИНН и номер телефона, на который желаете получить сдачи",
            description5: " 5. Внесите деньги",
            description6: " 6. Нажмите на кнопку 'Оплатить'",
            description7: " 7. Получите квитанцию о погашении микрокредита",
            description8:
              " 8. В случае, если есть сдачи получите квитанцию о получении сдачи",
            description9:
              " 9. На номер телефона придет смс-сообщение о погашении микрокредита",
          },
          {
            title: "Unipay",
            description1:
              "1. На главном экране выберите раздел 'Финансовые услуги' ",
            description2: " 2. Далее выберите 'Погашение кредитов и займов'",
            description3: " 3. Далее выберите ОсОО МКК 'Достукча'",
            description4: " 4. Введите свой ИНН.",
            description5: " 5. Внесите деньги",
            description6: " 6. Нажмите на кнопку 'Оплатить'",
            description7: " 7. Получите квитанцию",
            description8:
              " 8. На номер телефона придет смс-сообщение о погашении микрокредита",
          },
          {
            title: "Balance",
            description1: "1. На главном экране выберите раздел «Категории» ",
            description2: "2. Далее выберите «Финансы»",
            description3: "3. Затем выберите услугу «Погашение кредита»",
            description4: "4. Найдите в списке ОсОО МКК «Достукча» ",
            description5: "5. Введите номер ID договора ",
            description6: "6. Укажите сумму погашения",
            description7:
              "7. Нажмите далее, на экране появится окно, где необходимо подтвердить данные",
            description8: "8. После подтверждения нажмите «Оплатить»",
            description9:
              "9. На номер телефона придет смс-подтверждение о погашении микрокредита",
          },
          {
            title: "О!Деньги",
            description1: " 1. На главном экране выберите раздел 'О!Деньги'",
            description2: " 2. Далее выберите 'Оплата'",
            description3: " 3. Далее выберите 'Погашение кредита'",
            description4: " 4. Далее выберите ОсОО МКК 'Достукча'",
            description5: " 5. Введите ИНН",
            description6: " 6. Укажите сумму погашения",
            description7: " 7. Нажмите на кнопку 'Оплатить'",
            description8:
              " 8. На номер телефона придет смс-сообщение о погашении микрокредита",
          },
        ];
      } else {
        return [
          {
            title: "Mbank",
            description1: "1. Негизги экранда 'Төлөмдөр' бөлүмүн тандаңыз",
            description2: "2. Андан кийин 'МКК' тандаңыз",
            description3:
              "3. Андан кийин, ЖЧК МКК 'Достукча' - 'Насыяны төлөө' тандаңыз",
            description4:
              "4. ИНН номеринизди (паспортунуздагы узун сан) жана төлөм суммасын киргизиңиз",
            description5: "5. Андан кийин, 'Төлөмдү ырастоо' баскычын басыңыз",
            description6:
              "6. Тиркемеде катталган номериңизге карызыңыздын төлөнгөнү боюнча смс-билдирме келет",
          },
          {
            title: "MegaPay",
            description1: "1. Башкы беттеги 'Төлөмдөр' бөлүмүн тандаңыз",
            description2:
              "2. Андан кийин  'Насыяны төлөө (МКК)' баскычын тандаңыз",
            description3: "3. ОсОО МКК 'Достукча' бөлүмүн тандаңыз",
            description4:
              "4. ИНН номеринизди (паспортунуздагы узун сан) жана төлөм суммасын киргизиңиз 'Улантуу' баскычын басыңыз",
            description5: "5. 'Төлөө' баскычын басыңыз",
            description6:
              "6. Тиркемеде катталган номериңизге карызыңыздын төлөнгөнү боюнча смс-билдирме келет",
          },
          {
            title: "Pay24",
            description1:
              "1. Негизги экранда 'Банктык жана финансылык кызматтар' бөлүмүн тандаңыз",
            description2:
              "2. Андан кийин 'Насыяларды жана зайымдарды кайтаруу' баскычын тандаңыз",
            description3: "3. ЖЧК МКК 'Достукча' бөлүмүн танданыз",
            description4:
              "4. ИНН номериңизди (паспортуңуздагы узун сан) терип, сдача алуу үчүн телефон  номериңизди киргизиңиз",
            description5: "5. Акчанызды салыңыз",
            description6: "6. Андан кийин 'Төлөө' баскычын басыңыз",
            description7: "7. Төлөм квитанциясын алыңыз",
            description8:
              "8. Сдачанын телефонуңузга жиберилгендигин билдирген квитанцияны алыңыз",
            description9:
              "9. Катталган номериңизге карызыңыздын төлөнгөнү боюнча смс-билдирме келет",
          },
          {
            title: "Unipay",
            description1:
              "1. Негизги экранда 'Финансылык кызматтар' бөлүмүн тандаңыз",
            description2:
              "2. Андан кийин  'Насыяларды жана зайымдарды кайтаруу' баскычын тандаңыз",
            description3: "3.  ЖЧК МКК 'Достукча' бөлүмүн танданыз",
            description4:
              "4.  ИНН номериңизди (паспортуңуздагы узун сан) киргизиңиз",
            description5: "5. Акчаңызды салыңыз",
            description6: "6. 'Төлөө' баскычын басыңыз",
            description7: "7. Төлөм квитанциясын алыңыз",
            description8:
              "8. Катталган номериңизге карызыңыздын төлөнгөнү боюнча смс-билдирме келет",
          },
          {
            title: "Balance",
            description1: "1. Негизги экранда 'Категориялар' бөлүмүн тандаңыз",
            description2: "2. «Финансы» баскычын тандаңыз",
            description3: "3. Андар кийин  'Насыяны төлөө' баскычын тандаңыз",
            description4: "4. ЖЧК МКК 'Достукча' бөлүмүн танданыз",
            description5: "5. Келишимдин ID- номерин киргизиңиз ",
            description6: "6. Төлөм суммасын киргизиңиз",
            description7:
              "7. 'Улантуу' дегенди баскандан кийин, насыянын төлөө эсебин текшериңиз",
            description8:
              "8. Андан кийин 'Төлөө' баскычын басып, төлөм квитанциясын алыңыз",
            description9:
              "9. Катталган номериңизге карызыңыздын төлөнгөнү боюнча смс-билдирме келет",
          },
          {
            title: "О!Деньги",
            description1: "1. Негизги экранда 'О! деньги' бөлүмүн тандаңыз",
            description2: "2. 'Төлөө' баскычын тандаңыз",
            description3: "3. Андар кийин  'Насыяны төлөө' баскычын тандаңыз",
            description4: "4. ЖЧК МКК 'Достукча' бөлүмүн танданыз",
            description5:
              "5. ИНН номериңизди (паспортуңуздагы узун сан) киргизиңиз",
            description6: "6. Төлөм суммасын киргизиңиз",
            description7: "7. Андан кийин 'Төлөө' баскычын басыңыз",
            description8:
              "8. Катталган номериңизге карызыңыздын төлөнгонү боюнча смс-билдирме келет",
          },
        ];
      }
    },
  },
};
</script>

<style>
.method-btn {
  max-width: 290px;
  display: flex;
  align-items: center;
  width: 100%;
  background: #ffffff;
  box-shadow: 4px 4px 6px 0px rgba(16, 109, 140, 0.25);
  font-size: 20px;
  font-weight: 700;
  padding: 17px 0;
  padding-left: 25px;
  margin: 13px 0;
  border-radius: 16px;
  cursor: pointer;
  border: none;
}
.mob {
  display: none;
}
.title {
  font-size: 32px;
  font-family: Mont;
  font-style: normal;
  font-weight: 800;
  margin-bottom: 50px;
}
.method-btn img {
  margin-right: 15px;
}
.method-btn.active {
  color: #ffffff;
  background: #00c0ff;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 50px;
  padding-bottom: 60px;
}
.methods__descr-card {
  max-width: 100%;
  border-radius: 16px;
  border: 1px solid #cef3ff;
  box-shadow: 4px 4px 6px 0px rgba(16, 109, 140, 0.25);
  overflow: hidden;
  padding: 50px;
  position: relative;
}
.methods__descr-item.active {
  position: absolute;
  top: 50px;
  transform: translateX(0);
  transition: 0.5s;
}
.methods__descr-item {
  position: absolute;
  transform: translateX(1000px);
  transition: 0.5s;
}
.methods__descr-title {
  color: #000;
  font-size: 20px;
  font-family: Mont;
  font-weight: 700;
  line-height: 100%;
  margin-bottom: 20px;
}
@media (max-width: 767px) {
  .title {
    text-align: center;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  .methods__descr-item.active.mob {
    display: block;
    position: relative;
    top: 10px;
    padding: 15px;
  }
  .mob-center {
    text-align: center;
  }
  .method-btn {
    margin: auto;
    margin-bottom: 15px;
  }
  .desc {
    display: none;
  }
}
</style>