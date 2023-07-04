<template>
  <section class="contactForm">
    <div class="container">
      <div class="wrapper">
        <div>
          <div class="title">
            <p>Остались вопросы?</p>
          </div>
          <div class="subtitle">
            <p>Спросите нас</p>
          </div>
          <div class="descr">
            <p>Заполните форму и мы свяжемся с вами</p>
          </div>
          <form
            action=""
            @submit.prevent="formSubmit"
            class="form"
            method="POST"
            id="form"
          >
            <input
              type="text"
              name="name"
              placeholder="Имя"
              v-model="name"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Номер телефона"
              v-model="phone"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Эл.почта"
              v-model="email"
              required
            />
            <ui-base-button mode="green">Отправить</ui-base-button>
          </form>
        </div>
        <div class="form__img">
          <img src="../../assets/images/phone.png" alt="phone" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        phone: this.phone,
        email: this.email,
      };
    },

    formSubmit() {
      this.formRequest()
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error("Contact form could not be send", error);
        });
    },

    async formRequest() {
      return await $fetch(
        "https://getform.io/f/18d0ee13-69d0-4e83-a411-387dedcaef04",
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          method: "POST",
          body: {
            name: this.name,
            phone: this.phone,
            email: this.email,
          },
        }
      );
    },
  },
};
</script>

<style scoped>
.contactForm {
  background: linear-gradient(164.21deg, #00c0ff 16.69%, #006a8d 119.71%);
}
.wrapper {
  min-height: 610px;
  display: grid;
  grid-template-columns: 1fr 0.8fr;
}
.form__img img {
  padding-top: 50px;
  max-width: 100%;
}
.title {
  padding-top: 80px;
  font-weight: 800;
  font-size: 28px;
  line-height: 135%;
  color: #0d6d8c;
}
.subtitle {
  padding-top: 10px;
  font-weight: 800;
  font-size: 42px;
  line-height: 135%;
  text-transform: uppercase;
  color: #52ffa8;
}
.descr {
  padding-top: 10px;
  font-weight: 600;
  font-size: 22px;
  line-height: 100%;
  color: #ffffff;
  padding-bottom: 30px;
}
.form {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 365px;
}
input {
  background: #ffffff;
  border-radius: 23.5px;
  height: 47px;
  border: none;
  padding: 15px;
  margin-bottom: 20px;
}
@media (max-width: 1200px) {
  .container {
    padding: 0 30px;
  }
}
@media (max-width: 1023px) {
  .wrapper {
    min-height: 610px;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    padding-bottom: 50px;
  }
  .form__img img {
    padding-top: 30px;
    max-width: 70%;
    display: grid;
    margin: 0 auto;
    grid-column-start: 1;
  }
  .form__img {
    display: grid;
    margin: 0 auto;
    grid-row-start: 1;
  }
  .title {
    padding-top: 30px;
    font-weight: 800;
    font-size: 18px;
    line-height: 135%;
    color: #0d6d8c;
    text-align: center;
  }
  .subtitle {
    padding-top: 10px;
    font-weight: 800;
    font-size: 36px;
    line-height: 135%;
    text-transform: uppercase;
    color: #52ffa8;
    text-align: center;
  }
  .descr {
    padding-top: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #ffffff;
    padding-bottom: 30px;
    text-align: center;
  }
  .form {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 365px;
    margin: 0 auto;
  }
}
</style>
