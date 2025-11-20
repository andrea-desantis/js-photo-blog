

const cardsElem = document.getElementById("cards");
axios
    .get("https://lanciweb.github.io/demo/api/pictures/")
    .then(function(resp){
        // console.log(resp);
        const data = resp.data;
        for(let i =0; i<6; i++){
            const img = data[i];
            cardsElem.innerHTML+=`
            <div class="card flex column relative">
                <img src="${img.url}" alt="" class="card-img">
                <span>${img.title} ${img.date}</span>
                <img src="../assets_day1/img/pin.svg" alt="" class="pin-absolute">
            </div>
            `;
        }
    });