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
        // bg: ``
    }
]

let wrapper = document.querySelector('.wrapper');
let btn = document.getElementById('btn');
let contantText = document.querySelector('.poem');

btn.addEventListener('click', function() {
    poem.innerHTML = '';
    poem.innerHTML = poems[0].poemText;
})