{ // task1
    let arr = ['qweq', 123, 23523, '123124', 412412, true, false, '123124', 44444, 2];
    console.log(arr);

    ////////////////////////////////////////////////////////////////

    let book1 = {
        title: 'book1',
        pageCount: 400,
        genre: 'roman'
    }
    console.log(book1);

    let book2 = {
        title: 'book2',
        pageCount: 230,
        genre: 'criminal'
    }
    console.log(book2);

    let book3 = {
        title: 'book3',
        pageCount: 501,
        genre: 'horror'
    }
    console.log(book3);

    ////////////////////////////////////////////////////////////////

    let book1_w_a = {
        title: 'book1',
        pageCount: 400,
        genre: 'roman',
        authors: {
            name: 'name1',
            age: 40
        }
    }
    console.log(book1_w_a);

    let book2_w_a = {
        title: 'book2',
        pageCount: 400,
        genre: 'criminal',
        authors: {
            name: 'name2',
            age: 40
        }
    }
    console.log(book2_w_a);

    let book3_w_a = {
        title: 'book3',
        pageCount: 400,
        genre: 'horror',
        authors: {
            name: 'name3',
            age: 40
        }
    }
    console.log(book3_w_a);

    ////////////////////////////////////////////////////////////////

    let users = [
        user1 = {
            name: 'name1',
            username: 'us1',
            password: 'pass1'
        },
        user2 = {
            name: 'name2',
            username: 'us2',
            password: 'pass2'
        },
        user3 = {
            name: 'name3',
            username: 'us3',
            password: 'pass3'
        },
        user4 = {
            name: 'name4',
            username: 'us4',
            password: 'pass4'
        },
        user5 = {
            name: 'name5',
            username: 'us5',
            password: 'pass5'
        },
        user6 = {
            name: 'name6',
            username: 'us6',
            password: 'pass6'
        },
        user7 = {
            name: 'name7',
            username: 'us7',
            password: 'pass7'
        },
        user8 = {
            name: 'name8',
            username: 'us8',
            password: 'pass8'
        },
        user9 = {
            name: 'name9',
            username: 'us9',
            password: 'pass9'
        },
        user10 = {
            name: 'name10',
            username: 'us10',
            password: 'pass10'
        }
    ];
    console.log(users);

    console.log(users[0].password);
    console.log(users[1].password);
    console.log(users[2].password);
    console.log(users[3].password);
    console.log(users[4].password);
    console.log(users[5].password);
    console.log(users[6].password);
    console.log(users[7].password);
    console.log(users[8].password);
    console.log(users[9].password);

    ////////////////////////////////////////////////////////////////

    let weather = [
        monday = {
            temp_morning: 12,
            temp_noon: 20,
            temp_evening: 18
        },
        tuesday = {
            temp_morning: 14,
            temp_noon: 22,
            temp_evening: 15
        },
        wednesday = {
            temp_morning: 10,
            temp_noon: 15,
            temp_evening: 13
        },
        thursday = {
            temp_morning: 11,
            temp_noon: 26,
            temp_evening: 20
        },
        friday = {
            temp_morning: 13,
            temp_noon: 23,
            temp_evening: 13
        },
        saturday = {
            temp_morning: 12,
            temp_noon: 18,
            temp_evening: 115
        },
        sunday = {
            temp_morning: 15,
            temp_noon: 28,
            temp_evening: 18
        }
    ];
    console.log(weather)
}

////////////////////////////////////////////////////////////////

{ //task2
   let x = 0;
   console.log((x !== 0) ? 'Вірно' : 'Невірно');

   ////////////////////////////////////////////////////////////////

   let time = 30;
   if (time < 15)
       console.log('Перша чверть');
   else if (time < 30)
       console.log('Друга чверть');
    else if (time < 45)
        console.log('Третя чверть');
    else
        console.log('Четверта чверть');

    ////////////////////////////////////////////////////////////////

    let day = 3;
    if (day <= 10)
        console.log('Перша третина');
    else if (time <= 20)
        console.log('Друга третина');
    else
        console.log('Третя третина');

    ////////////////////////////////////////////////////////////////

    let day_of_week = prompt("Введіть порядковий номер дня тижня");
    switch (day_of_week) {
        case '1': console.log("monday"); break;
        case '2': console.log("tuesday"); break;
        case '3': console.log("wednesday"); break;
        case '4': console.log("thursday"); break;
        case '5': console.log("friday"); break;
        case '6': console.log("saturday"); break;
        case '7': console.log("sunday"); break;
    }

    ////////////////////////////////////////////////////////////////

    let num1 = +prompt("Enter first number");
    let num2 = +prompt("Enter second number");
    if (num1 > num2)
        console.log(num1);
    else if (num1 < num2)
        console.log(num2);
    else
        console.log("same");

    ////////////////////////////////////////////////////////////////

    {
        let x = undefined;
        if (isNaN(x) || x == null || x === 0 || x === '' || x === undefined)
            x = 'default';
        console.log(x);
    }

    {
        let coursesAndDurationArray = [
            {title: 'JavaScript Complex', monthDuration: 5},
            {title: 'Java Complex', monthDuration: 6},
            {title: 'Python Complex', monthDuration: 6},
            {title: 'QA Complex', monthDuration: 4},
            {title: 'FullStack', monthDuration: 7},
            {title: 'Frontend', monthDuration: 4}
        ];

        if (coursesAndDurationArray[0].monthDuration > 5)
            console.log("Супер");
        if (coursesAndDurationArray[1].monthDuration > 5)
            console.log("Супер");
        if (coursesAndDurationArray[2].monthDuration > 5)
            console.log("Супер");
        if (coursesAndDurationArray[3].monthDuration > 5)
            console.log("Супер");
        if (coursesAndDurationArray[4].monthDuration > 5)
            console.log("Супер");
        if (coursesAndDurationArray[5].monthDuration > 5)
            console.log("Супер");
    }
}
