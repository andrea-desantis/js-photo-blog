

const cardsElem = document.getElementById("cards");
axios
    .get("https://lanciweb.github.io/demo/api/pictures/")
    .then(function (resp) {
        // console.log(resp);
        const data = resp.data;
        for (let i = 0; i < 6; i++) {
            const img = data[i];
            cardsElem.innerHTML += `
            <div class="card flex column relative" id="single-card">
                <img src="${img.url}" alt="" class="card-img">
                <span>${img.title} ${img.date}</span>
                <img src="../assets_day1/img/pin.svg" alt="" class="pin-absolute">
            </div>
            `;
        }



        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                overlay.classList.remove("none");
                overlay.classList.add("overlay");
            });
        });



    });


// overlay
const overlay = document.getElementById('overlay');







// close button
const clBtn = document.getElementById('close');

clBtn.addEventListener('click', function () {
    console.log('chiuso')
    overlay.classList.add("none");
    overlay.classList.remove("overlay");
});
