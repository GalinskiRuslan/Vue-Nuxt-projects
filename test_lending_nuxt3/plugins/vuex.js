import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      aboutUs: true,
      documents: false,
      reports: false,

      modal: false,
    };
  },
  getters: {
    getOne: (state) => {
      return {
        aboutUs: state.aboutUs,
        document: state.documents,
        reports: state.reports,
      };
    },
    getModal: (state) => {
      return state.modal;
    },
  },
  actions: {
    setOne(state) {
      state.aboutUs = true;
      state.documents = false;
    },
    setTwo(state) {
      state.aboutUs = false;
      state.documents = true;
      state.reports = false;
    },
    setRep(state) {
      state.aboutUs = false;
      state.documents = false;
      state.reports = true;
    },
    setMoldal(state) {
      state.modal = !state.modal;
    },
  },
  mutations: {
    setOne(state) {
      state.aboutUs = true;
      state.documents = false;
      state.reports = false;
    },
    setTwo(state) {
      state.aboutUs = false;
      state.documents = true;
      state.reports = false;
    },
    setRep(state) {
      state.aboutUs = false;
      state.documents = false;
      state.reports = true;
    },
    setMoldal(state) {
      state.modal = !state.modal;
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});
