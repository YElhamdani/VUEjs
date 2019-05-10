new Vue({
    el: '#app',

    data: {
        message: 'salut les gens',
       
        link: 'https://www.gamekult.com/actualite/halo-pas-de-crossplay-au-lancement-de-la-master-chief-collection-sur-pc-3050816483.html',
       
        success: true,

        persons: ['Younes', 'Joh', 'Mamadou', 'Fatima', 'Geaorge']
    },

    methods: {
        close: function(){

            this.success = false;
        },
        style: function(){
            if (this.success) {
                return {background: '#00FF00'}
            } else {
                return {background: '#FF0000'}
            }
        }
    }
})