//install and require prompt from node npm
const prompt = require('prompt')


prompt.start()
prompt.get(
     ['n','m','s'],(err, result)=>{
         const n= result.n
         const m= result.m
         const s= result.s 
         const q= Math.floor(m/n) 
         const developer= q+s-1

         var add= ()=>{

            var warnTheDeveloper=()=>{
              console.log('you are in big trouble developer in chair number '+developer)  
             }

          warnTheDeveloper()
          }
          add()
     }
)




