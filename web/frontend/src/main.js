
import api from "./module/api.js";
import router from "./router.js";

const store = Vuex.createStore({
    state() {
        return {
        };
    },
    mutations: {
    },
    actions: {
    },
    getters: {
    },
});

const vuetify = Vuetify.createVuetify({
});

const appComponent = {
    template: `
        <v-app>
            <router-view></router-view>
        </v-app>
    `,
};

const app = Vue.createApp(appComponent);

app.use(router);
app.use(store);
app.use(vuetify);

app.use(api);


const validatePlugin = {
    install(app, options) {
        app.config.globalProperties.$validate = {
            required: (value) => !!value || "必須項目です",
            email: (value) => /.+@.+\..+/.test(value) || "メールアドレスの形式で入力してください",
        }
    }
};
app.use(validatePlugin);

app.mount('#app');