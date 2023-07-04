<template>
  <div class="container center">
    <NuxtLink class="toBack" to="/">На главную</NuxtLink>
    <h3 class="delete-title">Удаление аккаунта</h3>
    <form>
      <label class="delete-label">Введите номер телефона</label><br />
      <input
        class="delete-input"
        v-on:input="onPhoneInput($event)"
        type="tel"
      />
    </form>
    <button @click="log" class="delete-button">Отправить</button>
    <div @click="log" class="modal" v-if="getModal()">
      <div class="modal__inner">Заявка отправлена</div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

let getInputNumbersValue = function (input) {
  return input.value.replace(/\D/g, "");
};

let onPhoneInput = function (e) {
  let input = e.target,
    inputValue = getInputNumbersValue(input),
    formattedInputValue = "",
    selectionStart = input.selectionStart;

  if (!inputValue) {
    return (input.value = "");
  }
  if (input.value.length != selectionStart) {
    if (e.data && /\D/g.test(e.data)) {
      input.value = inputValue;
    }
    return;
  }

  if (["7", "8"].indexOf(inputValue[0]) > -1) {
    //KZ number
    let firstSymbols = inputValue[0] == "8" ? "8" : "+7";
    formattedInputValue = firstSymbols + " ";

    console.log(inputValue[1]);
    if (inputValue.length > 1) {
      if (inputValue[1] != "7") {
        formattedInputValue += "(7" + inputValue.substring(1, 4);
      } else {
        formattedInputValue += "(" + inputValue.substring(1, 4);
      }
    }
    if (inputValue.length >= 5) {
      formattedInputValue += ") " + inputValue.substring(4, 7);
    }
    if (inputValue.length >= 8) {
      formattedInputValue += "-" + inputValue.substring(7, 9);
    }
    if (inputValue.length >= 10) {
      formattedInputValue += "-" + inputValue.substring(9, 11);
    }
  } else {
    formattedInputValue = "+" + inputValue;
    // не КЗ номер
  }
  input.value = formattedInputValue;
};
function log() {
  store.commit("setMoldal");
  console.log(store.state.modal);
}
function getModal() {
  return store.state.modal;
}
</script>

<style>
.center {
  text-align: center;
  margin-top: 80px;
}
.delete-title {
  color: var(--unnamed, #0d6d8c);
  font-size: 32px;
  font-family: Mont;
}
.delete-input {
  margin-top: 40px;
  width: 30%;
  height: 60px;
  padding: 0 20px;
  font-size: 24px;
}
.toBack {
  text-decoration: none;
  font-size: 18px;
}
.delete-button {
  margin-top: 40px;
  background: #0d6d8c;
  border: none;
  color: #ffffff;
  border-radius: 5px;
  padding: 20px 120px;
  cursor: pointer;
  font-size: 18px;
}
.delete-button:hover {
  background: #12556b;
}
.delete-button:disabled {
  background: #5c5c5c;
}
.delete-button:disabled:hover {
  background: #5c5c5c;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal__inner {
  position: absolute;
  background: #ffffff;
  padding: 80px;
  border-radius: 20px;
  top: 30%;
  left: 50%;
  margin-left: -160px;
  margin-top: -75px;
}
</style>