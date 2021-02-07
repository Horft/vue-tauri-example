import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    enUS: {
        welcomeMessage: "Welcome to Your Tauri App"
    },
}

export default new VueI18n({
    locale: "enUS",
    messages
});