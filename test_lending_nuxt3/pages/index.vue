<template>
  <div>
    <UiBaseMenu></UiBaseMenu>
    <MainHeader />
    <MainTheMain></MainTheMain>
    <MainTheService></MainTheService>
    <MainAboutUs></MainAboutUs>
    <MainOurPartners></MainOurPartners>
    <redemption-methods></redemption-methods>
    <MainQuestionAnswer></MainQuestionAnswer>
    <!-- <MainContactForm></MainContactForm> -->
    <MainTheFooter></MainTheFooter>
  </div>
</template>

<script>
import RedemptionMethods from "~~/components/main/RedemptionMethods.vue";
export default {
  components: { RedemptionMethods },
};
</script>

<style lang="scss" scoped></style>
