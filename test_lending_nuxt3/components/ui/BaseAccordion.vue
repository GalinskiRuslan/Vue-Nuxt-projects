<template>
  <div class="container">
    <details>
      <summary>
        <span class="summary-title">{{ title }}</span>
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
        {{ descr }}
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
</template>

<script setup>
const { title } = defineProps(["title"]);
const { descr } = defineProps(["title"]);
</script>

<style scoped>
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
