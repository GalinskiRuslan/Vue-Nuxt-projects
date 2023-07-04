<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <NuxtLink v-else :to="to" :class="mode">
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 10px 40px;
  font: inherit;
  background: #00c0ff;
  border: 1px solid #00c0ff;
  color: white;
  cursor: pointer;
  border-radius: 25px;

  /* display: inline-block; */
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #00c0ff;
  border-color: #00c0ff;
}

.blue {
  text-decoration: none;
  padding: 10px 40px;
  font: inherit;
  background: #00c0ff;
  border: 1px solid #00c0ff;
  color: white;
  cursor: pointer;
  border-radius: 25px;
}
.flat {
  background-color: transparent;
  color: #000;
  border: none;
}
.green {
  background: #52ffa8;
  border-radius: 28px;
  color: #0d6d8c;
  border: none;
  padding: 20px 85px;
  font-weight: 800;
  font-size: 24px;
  line-height: 100%;
}
.step__button_blue {
  width: 270px;
  height: 56px;
  background: linear-gradient(164.21deg, #00c0ff 16.69%, #006a8d 119.71%);
  border-radius: 28px;
  color: #fff;
  font-weight: 800;
  font-size: 24px;
  line-height: 100%;
}

.outline {
  background-color: transparent;
  border-color: transparent;
  color: #0d6d8c;
  border-radius: 28px 28px 0 0;
  background-color: #fff;
  height: 60px;
  width: 47%;
  /*  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.15); */
  font-weight: 800;
  font-size: 24px;
  line-height: 100%;
  text-align: start;
}
.blur {
  color: #c3c3c3;
  background: #ededed;
  border-color: transparent;
  font-size: 24px;
  line-height: 100%;
  font-weight: 800;
  width: 50%;
  text-align: start;
  border-radius: 25px 25px 0 0;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active,
.blur:hover,
.blur:active {
  background-color: #fff;
  border-color: transparent;
  color: #0d6d8c;
  /*  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.15); */
}

.green:hover,
.green:active {
  background-color: #52ffa8;
}

@media (max-width: 500px) {
  .green {
    font-size: 14px;
  }
  .outline,
  .blur {
    font-size: 14px;
  }
}
</style>
