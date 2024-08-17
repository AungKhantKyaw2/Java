let i=0;
const app =Vue.createApp({
    // template: "<h1> hi there</h1>"
    data(){
        return{
            books:[{
                title : "Aung God",
                author : "God Of data1",
                age :20,
                img : 'JS/img/boost.jpeg',
                isFav: false
            },
            {
                title : "Aung God2",
                author : "God Of data2",
                age :20,
                img :'JS/img/git.png',
                isFav: true
            },  
            {
                title : "Aung God3",
                author : "God Of data3",
                age :20,
                img :'JS/img/php.png',
                isFav : true
            },
           
        ],
        showbook : true,
        link :'https://www.perplexity.ai/search/how-to-write-for-loop-in-java-6jbfmgJZRtewa.ZAnNdNwQ'
            
        }
    },
    methods:{
         IncreaseAge(){
            this.age++;
         },
         mousemovehandler(event,data){
             console.log('mouse is working',event.type,data);
         },

         mouseleave(event,data){
        
          i++;
          console.log(`mouse leaving ${i}`,event.type,data);  
         },
         dbclick(event,data){
            console.log("double click",event.type,data);
         },
         clickcolorshow(book){
            
            // console.log(bs);
            book.isFav = ! book.isFav;
            
            
         }

    },  
    computed:{
          filterbook(){
            return this.books.filter(data=>{
                return  data.isFav;

            });
            
          } 


    }
});
app.mount('#app');
