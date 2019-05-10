let vm = new Vue({
    el: '#app',

    data: {
        seconds: 0, 
    },

    mounted: function(){

        setInterval(() => {
            this.seconds++

        }, 1000)
    }
})