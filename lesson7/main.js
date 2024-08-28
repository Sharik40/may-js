{   //task1
    console.log('-----------------task1-----------------');

    //id, name, surname , email, phone
    function User(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }

    let user1 = new User(1, "wqwe", "qwerqwr", "wegergerg", 123124124);
    console.log(user1);

    //task2
    console.log('-----------------task2-----------------');
    let user2 = new User(3, "wqwe", "qwerqwr", "wegergerg", 123124124);
    let user3 = new User(2, "wqwe", "qwerqwr", "wegergerg", 123124124);
    let user4 = new User(7, "wqwe", "qwerqwr", "wegergerg", 123124124);
    let user5 = new User(5, "wqwe", "qwerqwr", "wegergerg", 123124124);
    let user6 = new User(4, "wqwe", "qwerqwr", "wegergerg", 123124124);
    let user7 = new User(6, "wqwe", "qwerqwr", "wegergerg", 123124124);
    let users = [user1, user2, user3,user4,user5,user6, user7];
    console.log(users);
    let new_arr = users.filter(a => {return a.id %2 === 0});
    console.log(new_arr);

    //task3
    console.log('-----------------task3-----------------');
    users.sort((a1, a2) => {
        return a1 - a2;
    });
    console.log(users);
}

{   //task4
    console.log('-----------------task4-----------------');
    function Client(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
    let client1 = new Client(3, "wqwe", "qwerqwr", "wegergerg", 123124124, ["qweqwf", "wegwerg"]);
    let client2 = new Client(1, "wqwe", "qwerqwr", "wegergerg", 123124124, ["qweqwf"]);
    let client3 = new Client(4, "wqwe", "qwerqwr", "wegergerg", 123124124, ["qweqwf", "qewgfwergw", "wegwerg", "wegwerg"]);
    let client4 = new Client(2, "wqwe", "qwerqwr", "wegergerg", 123124124, ["qweqwf", "qewgfwergw", "wegwerg"]);
    let client5 = new Client(5, "wqwe", "qwerqwr", "wegergerg", 123124124, ["qweqwf", "qewgfwergw", "wegwerg", "wegwerg", "wegwerg"]);

    let clients = [client1, client2, client3, client4, client5];
    console.log(clients);

    //task5
    console.log('-----------------task5-----------------');
    //Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
    let clientsSorted = clients.slice(0);
    clientsSorted.sort((a1, a2) => {
        return a1.order.length - a2.order.length;
    })
    console.log(clientsSorted);
}

{   //task6
    console.log('-----------------task6-----------------');
    function Car (model, producer, year, maxSpeed, value) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.value = value;
        this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        this.info = () => {
            console.log(`Модель - ${this.model}`);
            console.log(`Виробник - ${this.producer}`);
            console.log(`Рік випуску - ${this.year}`);
            console.log(`Максимальна швидкість - ${this.maxSpeed}`);
            console.log(`Об'єм двигуна - ${this.value}`);
            if (this.driver) {
                console.log(this.driver);
            }
        };
        this.increaseMaxSpeed = (newSpeed) => this.maxSpeed = newSpeed;
        this.changeYear = (newValue) => this.year = newValue;
        this.addDriver = (driver) => this.driver = driver;
    }

    const car = new Car('bmw', 'bmw', 2005, 180, 2);
    car.drive();
    car.info();
    car.increaseMaxSpeed(200);
    car.changeYear(2020);
    car.info();
    car.addDriver({name: "Ivan", age: 40});
    car.info();
}

{   //task7
    console.log('-----------------task7-----------------');
    class Car{
        constructor (model, producer, year, maxSpeed, value) {
            this.model = model;
            this.producer = producer;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.value = value;
        }

        drive () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }

        info () {
            console.log(`Модель - ${this.model}`);
            console.log(`Виробник - ${this.producer}`);
            console.log(`Рік випуску - ${this.year}`);
            console.log(`Максимальна швидкість - ${this.maxSpeed}`);
            console.log(`Об'єм двигуна - ${this.value}`);
            if (this.driver) {
                console.log(this.driver);
            }
        }

        increaseMaxSpeed (newSpeed) {
            this.maxSpeed = newSpeed;
        }

        changeYear (newValue) {
            this.year = newValue;
        }

        addDriver (driver) {
            this.driver = driver;
        }
    }
    const car = new Car('bmw', 'bmw', 2005, 180, 2);
    car.drive();
    car.info();
    car.increaseMaxSpeed(200);
    car.changeYear(2020);
    car.info();
    car.addDriver({name: "Ivan", age: 40});
    car.info();
}

{   //task8
    console.log('-----------------task8-----------------');
    class Cinderella{
        constructor(name, age, footSize) {
            this.name = name;
            this.age = age;
            this.footSize = footSize;
        }
    }

    class Prince{
        constructor(name, age, shoes) {
            this.name = name;
            this.age = age;
            this.shoes = shoes;
        }
    }

    const cinderellas = [
        new Cinderella("1", 20, 30),
        new Cinderella("2", 20, 32),
        new Cinderella("3", 20, 34),
        new Cinderella("4", 20, 33),
        new Cinderella("5", 20, 32),
        new Cinderella("6", 20, 35),
        new Cinderella("7", 20, 29),
        new Cinderella("8", 20, 30),
        new Cinderella("9", 20, 28),
        new Cinderella("10", 20, 27)
    ];

    const prince = new Prince("1", 23, 28);

    let correctCinderella = cinderellas.find((item) => item.footSize === prince.shoes);
    console.log(correctCinderella);
}

{
    //task9
    console.log('-----------------task9-----------------');
    //*Через Array.prototype. створити власний foreach, filter
    Array.prototype.myForEach = function (fn) {
        for (let i = 0; i < this.length; i++) {
            fn(this[i], i, this);
        }
    };
    const arr = [2, 43, 53, 12, 123];
    arr.myForEach((a) => {
        console.log(a);
    });

    Array.prototype.myFilter = function (fn) {
        const res = [];
        this.myForEach(a => {
            if (fn(a)) {
                res.push(a);
            }
        })
        return res;
    }
    let users = [
        {id: 2, name: "Вася"},
        {id: 3, name: "Петя"},
        {id: 1, name: "Маша"}
    ];

    let user = users.myFilter(item => item.id < 3);
    console.log(user);
    let user2 = users.filter(item => item.id < 3);
    console.log(user2);
}
