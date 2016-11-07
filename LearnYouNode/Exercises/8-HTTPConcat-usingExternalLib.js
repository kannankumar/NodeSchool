// LearnYouNode - Exercise 8 - Alternative solution using bl library
// Date - 7th Nov 2016

 var http = require('http')                            
 var bl = require('bl')                                
                                                       
 http.get(process.argv[2], function (response) {       
   response.pipe(bl(function (err, data) {             
     if (err) {                                        
       return console.error(err)                       
     }                                                 
     data = data.toString()                            
     console.log(data.length)                          
     console.log(data)                                 
   }))                                                 
 })                                                    
                                                       