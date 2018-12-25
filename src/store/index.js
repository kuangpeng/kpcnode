export default{
    state: {
        user: null,
        access_token: '',
    },
    getters: {
        getUser: function(state) {
            return state.user;  
        },
        getToken: function(state){
            return state.access_token;
        }
    },
    mutations: {
        updateUser: function(state, user) {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));  
        },
        updateToken: function(state, token) {
            state.access_token = token;
            localStorage.setItem('accesstoken', token);
        }
    },
    actions: {

    }
}