{ //task1
    console.log('-----------------task1-----------------');
    let rectangleArea = (a, b) => a * b;
    console.log(rectangleArea(2, 5));
}

{ //task2
    console.log('-----------------task2-----------------');
    let circleArea  = (r) => Math.PI * Math.pow(r, 2);
    console.log(circleArea(2));
}

{ //task3
    console.log('-----------------task3-----------------');
    let cylinderArea = (h, r) => 2 * h * r;
    console.log(cylinderArea(4, 3));
}

{ //task4
    console.log('-----------------task4-----------------');
    let showArr = (arr) => {
        for (const arrElement of arr) {
            console.log(arrElement);
        }
        // або замість for в один рядок можна написати arr.toString()
    }
    let myArr = [1, 2, 3, 4, 5];
    showArr(myArr);
}

{ //task5
    console.log('-----------------task5-----------------');
    let showParagraph = (text) => {
        document.write(
            `<p>` +
            `${text}` +
            `</p>`
        );
    }
    showParagraph('fwefweggewgwewefqwf');
}

{ //task6
    console.log('-----------------task6-----------------');
    let showList = (text) => {
        document.write(
            `<ul>` +
            `<li>${text}</li>` +
            `<li>${text}</li>` +
            `<li>${text}</li>` +
            `</ul>`
        );
    }
    showList('list');
}

{ //task7
    console.log('-----------------task7-----------------');
    let showListFixed = (text, quantity) => {
        document.write('<ul>');
        for (let i = 0; i < quantity; i++) {
            document.write(`<li>${text}</li>`)
        }
        document.write('</ul>');
    }

    showListFixed('list2', 7);
}

{ //task8
    console.log('-----------------task8-----------------');
    let showParamList = (arr) => {
        document.write('<ul>');
        for (let i = 0; i < arr.length; i++) {
            document.write(`<li>${arr[i]}</li>`)
        }
        document.write('</ul>');
    }

    showParamList([1,4,'wqegf', true]);
}

{ //task9
    console.log('-----------------task9-----------------');
    let showObj = (arrObj) => {
        for (const arrObjElement of arrObj) {
            document.write('<div>')
            for (const arrKey in arrObjElement) {
                document.write(arrKey, ': ', arrObjElement[arrKey], '<br>');
            }
            document.write('</div>')
        }
    }

    let arr = [
        {id: 1, name: 'qwfwef', age: 13},
        {id: 2, name: 'qwfwef', age: 13},
        {id: 3, name: 'qwfwef', age: 13},
        {id: 4, name: 'qwfwef', age: 13},
    ]
    showObj(arr);
}

{ //task10
    console.log('-----------------task10-----------------');
    let minElem = (arr) => {
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min)
                min = arr[i];
        }
        return min;
    }

    console.log(minElem([5,7,8,2,4,123,8976,34,-4,2,5,6,1,]));
}

{ //task11
    console.log('-----------------task11-----------------');
    let sum = (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    let myArr = [1, 2, 3, 4, 5];
    console.log(sum(myArr));
}

{ //task12
    console.log('-----------------task12-----------------');
    let swap = (arr, index1, index2) => {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    let myArr = [1, 2, 3, 4, 5];
    console.log(myArr.toString());
    swap(myArr, 2,4);
    console.log(myArr.toString());
}

{ //task13
    console.log('-----------------task13-----------------');
    let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
        let value;
        for (const element of currencyValues) {
            if (element.currency === exchangeCurrency)
                value = element.value;
        }
        return sumUAH/value;
    }

    let values = [{currency:'USD',value:25},{currency:'EUR',value:42}];
    console.log(exchange(42000,values,'EUR'));
}
