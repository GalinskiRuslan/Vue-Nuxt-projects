<template>
  <section class="questions" id="questions">
    <h2>{{ $t("question_title") }}</h2>
    <div class="accordions">
      <div class="container">
        <details>
          <summary>
            <span class="summary-title">{{ $t("question") }}</span>
            <div class="summary-chevron-up">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-down"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </summary>

          <div class="summary-content">{{ $t("question1") }}</div>
          <div class="summary-chevron-down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-chevron-up"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </div>
        </details>

        <details>
          <summary>
            <span class="summary-title">{{ $t("question2") }}</span>
            <div class="summary-chevron-up">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-down"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </summary>

          <div class="summary-content">
            {{ $t("question3") }}
            <span class="how-link" @click="scroll('how-pay')"
              >{{ $t("question3_1") }}
            </span>
          </div>
          <div class="summary-chevron-down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-chevron-up"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </div>
        </details>

        <details>
          <summary>
            <span class="summary-title">{{ $t("question4") }}</span>
            <div class="summary-chevron-up">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-down"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </summary>

          <div class="summary-content">
            {{ $t("question5") }}
          </div>
          <div class="summary-chevron-down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-chevron-up"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </div>
        </details>

        <!-- <details>
          <summary>
            <span class="summary-title"
              >Что делать если не успеваю погасить микрокредит ?</span
            >
            <div class="summary-chevron-up">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-down"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </summary>

          <div class="summary-content">
            В случае возникновения финансовых (и иных) затруднений, наша
            компания готова предоставить возможность урегулирования имеющейся
            просроченной задолженности на взаимовыгодных условиях,
            способствующих исполнению обязательств, в рамках действующего
            законодательства.
          </div>
          <div class="summary-chevron-down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-chevron-up"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </div>
        </details> -->
        <details>
          <summary>
            <span class="summary-title">{{ $t("question6") }} </span>
            <div class="summary-chevron-up">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-down"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </summary>

          <div class="summary-content">
            {{ $t("question7") }}<br /><br />
            {{ $t("question7_0") }}<br /><br />
            {{ $t("question7_1") }}<br /><br />
            {{ $t("question7_2") }}<br /><br />
            {{ $t("question7_3") }}<br /><br />
            {{ $t("question7_4") }}<br /><br />
          </div>
          <div class="summary-chevron-down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-chevron-up"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
const scroll = (refName) => {
  const element = document.getElementById(refName);
  element.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
.questions {
  background: #f3f9fb;
  height: 100%;
  padding-bottom: 50px;
}
.accordions {
  padding-top: 50px;
}
h2 {
  padding-top: 80px;
  font-weight: 800;
  font-size: 32px;
  line-height: 100%;
  text-align: center;
  color: #000000;
}
.how-link {
  color: #4154a8;
  cursor: pointer;
  text-decoration: underline;
}
details {
  font-size: 1rem;
  margin: 1em auto;
  box-shadow: 4px 4px 6px rgba(16, 109, 140, 0.25);
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
  position: relative;
  width: 80%;
}
details:hover {
  cursor: pointer;
}

.summary-title {
  user-select: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #000000;
}
.summary-content {
  border-top: 1px solid #e2e8f0;
  cursor: default;
  padding: 1em;
  font-weight: 300;
  line-height: 1.5;
}
summary {
  list-style: none;
  padding: 1.5em;
}
summary:focus {
  outline: none;
}
summary:hover .summary-chevron-up svg {
  opacity: 1;
}
.summary-chevron-up svg {
  opacity: 0.5;
}
.summary-chevron-up,
.summary-chevron-down {
  pointer-events: none;
  position: absolute;
  top: 1.5em;
  right: 1em;
  background: #ffffff;
}
svg {
  display: block;
}
summary::-webkit-details-marker {
  display: none;
}
@media (max-width: 1200px) {
  .container {
    padding: 0 20px;
  }
  details {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .summary-title {
    font-size: 16px;
  }
}
</style>
