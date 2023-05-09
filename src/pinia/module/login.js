import {defineStore} from 'pinia';

const useAuthUserStore = defineStore('/user', {
    state: () => ({
        user: null,
        token: null,
    }),
    getters: {
        getUser() {
            return this.user;
        },
        getToken() {
            return this.token;
        },
    },
    actions: {
        setUser(user) {
            this.user = user;
        }
    }
});
export default useAuthUserStore;