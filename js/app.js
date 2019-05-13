let vm = new Vue({
    el: '#app',

    data: {
        success: false
    },

    methods: {
        
        cls: function(){
           
            return this.success === true ? 'success' : 'error'
        
        }
    }
})
