
const axios = require('axios');

const headers = {
    Authorization: `Bearer nOTu9MU5mvyuXjdn8bQIw44pxycPXgfbyZcparIhNsNv27rYFxIILqQHQs2GZACZRfHsTv5y0ERdiTZE`,
};



for (i = 1; i <= 4000; ++i) {
    setDelay(i);
}

function setDelay(i) {
    setTimeout(function(){
        
        axios
        .get("http://phplaravel-887910-3078587.cloudwaysapps.com/api/test", { headers: headers })
        .then((res) => {
            console.log(i)
                })
                .catch((err) => {
                    console.log(err)
                });
            }, 0.001)
  }
  