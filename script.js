let cart = 0;

function addToCart(){
  cart = cart+1;
  console.log(cart);
  document.getElementById("cartValue").innerHTML = cart;
  myFunctionSelect();
}

function myFunctionSelect() {
      
  const title = document.title;
  let x = document.getElementById("cartValue").innerHTML;
  let y = Number(x);
  console.log(y);

  
  lpTag.sdes = lpTag.sdes||[];
  lpTag.sdes.push(
    {
      "type": "cart",  //MANDATORY
      "total":"",
      "currency":"INR",
      "numItems":y,
      "products":[{
        "product":{
          "name":"Page Title: "+title,
          "category":" "
          
        },
      }]
}
);
}

lpTag.identities.push(identityFn);
      function identityFn(callback) {
        callback({
          "sub": "Kunal Sonawane - 826542",
          "iss": "https://jwt.io/",
          "aud": "acc:qa57221676",
          "exp": 1992025992,
          "iat": 1682030954,
          "acr": "loa1"
        });
    }

    var id_token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJLdW5hbCBTb25hd2FuZSAtIDgyNjU0MiIsImlzcyI6Imh0dHBzOi8vand0LmlvLyIsImF1ZCI6ImFjYzpxYTU3MjIxNjc2IiwiZXhwIjoxOTkyMDI1OTkyLCJpYXQiOjE2ODIwMzA5NTQsImFjciI6ImxvYTEifQ.JUhdjlvnPKUFh_GkoSJvGwZSepITqlV2gZBD-IiutMkWZGwEnGe5onKJyH_49uNplSxTMQ-vjzteJOtqjkQsxMHAcNGXWyPNCxpU_157ESwrZiMh9lohOpK3mRz6N_qgg_JH03VH5-E3ZssY-ryJg_gUMkRn00oxMsn_BJB8dZKx79n4PPbounJfwXB5ukva_fJRxPoKImkLuE9iK8ueMb4pD0w3PJIYttlXNjDlHCGlkFkosCsVuRY0_fsrAICWzAHLST1m_fbhnTSKTt18m0HJerd5g3zLpMaEXyOuM9e8P7hHRKlrUNJ7hZ5Db3OW7--VsA1UhI8M2Xhlk8aEcw"
    
    function lpGetAuthenticationToken(callback) {
            console.log("LP asked for id_token or auth code in Code Flow");
            // Do your magic…
            // On Success
            callback(id_token);
            // On Failure
            callback("", "error reason");
        }
