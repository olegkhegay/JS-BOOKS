const catalog = [
    {
        name: 'RICH DAD POOR DAD',
        img: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_.jpg',
        price: 200,
        oldPrice: 400,
        currency: '$',
        desc: ' “Rich Dad Poor Dad” by Robert Kiyosaki is a game-changer for anyone seeking financial independence and a deeper understanding of money management. Kiyosak',
    },

    {
        name: 'THE RICHEST MAN IN BABYLON',
        img: 'https://cdn.kobo.com/book-images/9b641bf6-ae44-4c1e-aa2b-e57ca746eb82/1200/1200/False/the-richest-man-in-babylon-31.jpg',
        price: 300,
        oldPrice: 500,
        currency: '$',
        desc: 'In his classic bestseller, "The Richest Man in Babylon," George S. Clason reveals their secrets for creating, growing, and preserving wealth.',
    },

    {
        name: 'ТОНКОЕ ИССКУСТВО ПОФИГИЗМА',
        img: 'https://ndc.book24.ru/pim/products/images/39/0d/018ee58b-ae70-7b9d-8fdf-7b35bf6e390d.jpg',
        price: 400,
        oldPrice: 600,
        currency: '$',
        desc: 'В интернет-магазине «Буквоед» есть книга «Тонкое искусство пофигизма: Парадоксальный способ жить счастливо» от автора Мэнсон Марк.',
    },
]

const cards = document.querySelector('.cards')

catalog.forEach(card => {
    cards.innerHTML += `
    <div class="card">
            <img src="${card.img}" alt="" />
            <h3>${card.name}</h3>
            <p>${card.desc}</p>
            <s>${card.oldPrice}</s>
            <h4>${card.price}</h4>
            <button>buy</button>
          </div>
    `
})

console.log(cards);
