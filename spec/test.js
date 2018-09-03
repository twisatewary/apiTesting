var request = require('request');
/*request('https://reqres.in/api/users?page=2', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});*/


describe("Using api",function(){
    it("getting test data",function(done){

        request('https://reqres.in/api/users?page=2', function (error, response, body) {
           console.log('error:', error); // Print the error if one occurred
           console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
           console.log('body:', body); // Print the HTML for the Google homepage.
            var JSONObject = JSON.parse(body).data[0].id;
            console.log(JSONObject);
            if(JSONObject==4)
            {
                console.log("hi");
            }
            for(var i=0;i<JSONObject.length;i++)
            {
                var JSONObject1 = JSON.parse(body).data;
                console.log("id:"+ JSONObject1[i].id);
                var firstname=JSONObject1[i].first_name;
                console.log("FirstName:"+firstname);
                var lastname=JSONObject1[i].last_name;
                console.log("lastname:" +lastname);
                console.log(firstname.length);
                    
            }
           
           /* for (var x = 0; x < firstname.length;x++)
               {
                   var c = firstname.charAt(x);
                    
                   // if(c=='T')
                   // {
                        console.log(c);
                   // }
                } */
            
            
             var JSONObject2 = JSON.parse(body).data[2].id;
             var JSONF_NAME = JSON.parse(body).data[2].first_name;
              expect(JSONF_NAME).toBe("Tracey");
             // expect(JSONObject).toBe(4);
              // if(JSONObject==4)
           // {
           //     console.log(JSONF_NAME);
           // }*/
            expect(response.statusCode).toBe(200);
            done();
           
          });

    })
    
  

})


