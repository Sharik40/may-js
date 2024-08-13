{ //task1
    for (let i = 0; i < 10; i++) {
        document.write(`<div>div - ${i + 1}</div>`);
    }
}

{ //task2
    for (let i = 0; i < 10; i++) {
        document.write(`<div>div - ${i + 1} ---- індекс - ${i}</div>`);
    }
}

{ //task3
    let i = 1;
    while (i <= 10) {
        document.write(`<h1>h1 - ${i}</h1>`);
        i++;
    }
}

{ //task4
    let i = 1;
    while (i <= 10) {
        document.write(`<h1>h1 - ${i} ---- індекс - ${i - 1}</h1>`);
        i++;
    }
}

{ //task5
    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
    for (let i = 0; i < listOfItems.length; i++) {
        if (i === 0) {
            document.write('<ul>');
        }
        document.write(`<li>${listOfItems[i]}</li>`);
        if (i === listOfItems.length - 1) {
            document.write('</ul>');
        }
    }
}

{ //task6
    let products = [
        {
            title: 'milk',
            price: 22,
            image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
        },
        {
            title: 'juice',
            price: 27,
            image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
        },
        {
            title: 'tomato',
            price: 47,
            image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
        },
        {
            title: 'tea',
            price: 15,
            image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
        },
    ];
    for (const product of products) {
        const TITLE = product.title;
        const PRICE = product.price;
        const IMG = product.image;
        document.write(
            `<div class="product-card">` +
            `<h3 class="product-title">${TITLE}. Price - ${PRICE}</h3>` +
            `<img src="${IMG}" alt="" class="product-image">` +
            `</div>`
        )
    } // Посилання на фото чаю не працює
}

{ //task7
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];

    for (const user of users) {
        if (!user.status) {
            document.write(user.name + ' has status: false <br>')
        }
    }
    document.write('<br>');
    for (const user of users) {
        if (user.status) {
            document.write(user.name + ' has status: true <br>')
        }
    }
    document.write('<br>');
    for (const user of users) {
        if (user.age > 30) {
            document.write(user.name + ' older than 30<br>')
        }
    }
}
