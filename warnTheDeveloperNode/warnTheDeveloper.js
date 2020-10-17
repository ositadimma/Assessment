//install and require prompt from node npm
const prompt = require('prompt')


prompt.start()
prompt.get(
     ['n','m','s'],(err, result)=>{
         var n= result.n
         var m= result.m
         var s= result.s 
         var mod= parseInt(m)%parseInt(n)
         var developer= parseInt(mod)+parseInt(s)

         var add= ()=>{

            var warnTheDeveloper=()=>{
              console.log('you are in big trouble developer in chair number '+developer)  
             }

             warnTheDeveloper()
          }
          add()
     }
)

