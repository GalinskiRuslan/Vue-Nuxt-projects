export default defineNuxtRouteMiddleware((to, from) => {
  useNuxtApp().hook("page:finish", () => {
    if (history.state.scroll) {
      window.scrollTo(history.state.scroll);
    } else {
      window.scrollTo(0, 0);
    }
  });
});
