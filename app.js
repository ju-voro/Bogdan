document.querySelector(".btn").addEventListener('click', getData);

function getData(e) {
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = 'http://uptime-auction-api.azurewebsites.net/api/Auction';

    e.preventDefault();
    fetch(proxy + url)
        .then(function(res)  {
            console.log(res);
            return res.json();
        })
        .then(data => {
            console.log(data);
            data.forEach(element => {
                console.log(element.productName);
            });

        });
}