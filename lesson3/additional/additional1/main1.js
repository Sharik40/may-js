{ //task1
    console.log('----------------task1-------------');
    let arrNum = [1, 2, 3, 4, 5];
    console.log(arrNum.toString());
    let arrStr = ['12', 'qwfr', 'qgf', '321rwef', 'qwefg2'];
    console.log(arrStr.toString());
    let arrMix = [1, 2, 3, 4, 5, '12', 'qwfr', 'qgf', '321rwef', 'qwefg2', true, false, false, true, true];
    console.log(arrMix.toString());
}

{ //task2
    console.log('----------------task2-------------');
    let arr = [];
    arr[0] = 1;
    arr[1] = 'qwfr';
    arr[2] = true;
    arr[3] = null;
    console.log(arr.toString());
}

{ //task3
    console.log('----------------task3-------------');
    let arr = [2,17,13,6,22,31,45,66,100,-18];
    let index = 0;
    while (index < arr.length) {
        console.log(arr[index]);
        index++;
    }
    console.log('-----------------------------');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('-----------------------------');
    index = 0;
    while (index < arr.length) {
        if (index % 2 !== 0)
            console.log(arr[index]);
        index++;
    }
    console.log('-----------------------------');
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0)
            console.log(arr[i]);
    }
    console.log('-----------------------------');
    index = 0;
    while (index < arr.length) {
        if (arr[index] % 2 === 0)
            console.log(arr[index]);
        index++;
    }
    console.log('-----------------------------');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0)
            console.log(arr[i]);
    }
    console.log('-----------------------------');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0)
            arr[i] = 'okten';
    }
    console.log(arr.toString());
    console.log('-----------------------------');
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
