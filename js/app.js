let vm = new Vue({
    el: '#app',

    data: {
        firstname: 'Younes',
        lastname: 'Elhamdani',
    },

    methods: {
        
        fullname: ()=>{
            return this.firstname + ' ' + this.lastname
        
        }
    }
})
