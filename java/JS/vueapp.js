const app =Vue.createApp({
    // template: "<h1> hi there</h1>"
    data(){
        return{
            title : "Aung God",
            author : "God Of data",
            age :20
        }
    },
    methods:{
         IncreaseAge(){
            this.age++;
         }
    }
});
app.mount('#app');
