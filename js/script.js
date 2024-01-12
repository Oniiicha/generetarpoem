let poems = [
    {
        poemText:
        `<p>
            Дед Мороз идёт на праздник <br>
            В красной шубе, в валенках, <br>
            Он несёт с собой подарки <br>
            Для детишек маленьких! <br>
        </p>
        <p>
            Белый - белый снегопад <br>
            Во дворе кружится. <br>
            Это яркий Новый год <br>
            В двери к нам стучится. <br>
        </p>`
    },
    {
        poemText:
        `<p>
            В двери Новый год стучится, <br>
            Дед Мороз к нам в гости мчится, <br>
            В небе праздничный салют, <br>
            И часы двенадцать бьют. <br>
        </p>
        <p>
            Огоньки сверкают ярко. <br>
            Свечи, шарики, подарки. <br>
            Скоро сказка в дом войдет, <br>
            Скоро будет Новый год! <br>
        </p>`
    }
]

let wrapper = document.querySelector('.wrapper');
let btn = document.getElementById('btn');
let poem = document.querySelector('.poem');

btn.addEventListener('click', function() {
    poem.innerHTML = '';
    poem.innerHTML = poems[0].poemText;
})