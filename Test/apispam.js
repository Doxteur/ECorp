
const axios = require('axios');

const headers = {
    Authorization: `Bearer v7mpYx0LnR8dsiAieX0PfZa4Rn5dYxAfMmTHLgYgHQhg6YaAoy0EOWkGxDb4BsdNd53eAuaQrc5dNvpJ`,
};



for (i = 1; i <= 100; ++i) {
    setDelay(i);
  }
  
  function setDelay(i) {
    setTimeout(function(){

            axios
                .get("http://127.0.0.1:8000/api/post", { headers: headers })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                });
            }, 1000);
  }
  