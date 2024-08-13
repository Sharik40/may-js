{ //task1

    //1
    console.log('----------------1-------------');
    let arr = [];
    let num = 2;
    for (let i = 0; i < 50; i++) {
        arr[i] = num;
        num += 2;
    }
    console.log(arr);

    num = 1;
    for (let i = 0; i < 50; i++) {
        arr[i] = num;
        num += 2;
    }
    console.log(arr);

    arr = [];
    for (let i = 0; i < 20; i++) {
        arr[i] = Math.floor(Math.random() * 100) + 1;
    }
    console.log(arr);

    for (let i = 0; i < 20; i++) {
        arr[i] = Math.floor(Math.random() * (733 - 8) + 8);
    }
    console.log(arr);

    //2
    console.log('----------------2-------------');
    for (let i = 0; i < arr.length; i++) {
        if (i % 3 === 0 && i !== 0)
            console.log(arr[i]);
    }
    //3
    console.log('----------------3-------------');
    for (let i = 0; i < arr.length; i++) {
        if (i % 3 === 0 && i !== 0 && arr[i] % 2 === 0)
            console.log(arr[i]);
    }

    //4
    console.log('----------------4-------------');
    let newArr = [];
    let newArrIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 3 === 0 && i !== 0 && arr[i] % 2 === 0) {
            newArr[newArrIndex] = arr[i];
            newArrIndex++;
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i]);
    }

    //5
    console.log('----------------5-------------');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i+1] % 2 === 0)
            console.log(arr[i]);
    }

    //6
    console.log('----------------6-------------');
    {
        let checks = [100,250,50,168,120,345,188];
        let sum = 0;
        for (const check of checks) {
            sum += check;
        }
        console.log("Середній чек ---> " + sum/checks.length);
    }

    //7
    console.log('----------------7-------------');
    {
        let arr7 = [];
        for (let i = 0; i < 20; i++) {
            arr7[i] = Math.floor(Math.random() * 100) + 1;
        }
        console.log(arr7);
        for (let i = 0; i < arr7.length; i++) {
            arr7[i] *= 5;
        }
        let newArr7 = Array.of(arr7);
        console.log(newArr7);
    }

    //8
    console.log('----------------8-------------');
    {
        let arr8 = ['wegwerg', 123, 324, 'wgerhgerf', 'wghk342', '123', null, {wef: 2}, 93, 12, 0];
        let numArr = [];
        let numArrIndex = 0;
        for (const element of arr8) {
            if (typeof element == "number") {
                numArr[numArrIndex] = element;
                numArrIndex++;
            }
        }
        console.log(numArr.toString());
    }
}

{ //task2
    console.log('----------------task2-------------');
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

    let citiesWithId = [
        {user_id: 3, country: 'USA', city: 'Portland'},
        {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
        {user_id: 2, country: 'Poland', city: 'Krakow'},
        {user_id: 4, country: 'USA', city: 'Miami'}
    ];

    let usersWithCities = [];
    for (let i = 0; i < usersWithId.length; i++) {
        for (let j = 0; j < citiesWithId.length; j++) {
             if (usersWithId[i].id === citiesWithId[j].user_id) {
                 usersWithCities[i] = usersWithId[i];
                 usersWithCities[i].address = citiesWithId[j];
             }
        }
    }

    for (const usersWithCity of usersWithCities) {
        console.log(usersWithCity);
    }
}

{ //task3
    console.log('----------------task3-------------');
    let arr = [1, 5, 32, 31, 5, 6, 7, 2, 8, 13];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0)
            console.log(arr[i]);
    }
}

{ //task4
    console.log('----------------task4-------------');
    let arr = [1, 5, 32, 31, 5, 6, 7, 2, 8, 13];
    let new_arr = []
    for (let i = 0; i < arr.length; i++) {
        new_arr[i] = arr[i];
        console.log(new_arr[i]);
    }
}

{ //task5
    console.log('----------------task5-------------');
    let arr = [ 'a', 'b', 'c'];
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str+= arr[i];
    }
    console.log(str);
}

{ //task6
    console.log('----------------task6-------------');
    let arr = [ 'a', 'b', 'c'];
    let str = '';
    let i = 0;
    while (i < arr.length) {
        str += arr[i];
        i++;
    }
    console.log(str);
}

{ //task7
    console.log('----------------task7-------------');
    let arr = [ 'a', 'b', 'c'];
    let str = '';
    for (const arrElement of arr) {
        str += arrElement;
    }
    console.log(str);
}
