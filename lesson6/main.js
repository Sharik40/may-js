{   //task1
    console.log('-----------------task1-----------------');
    let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
    str.forEach(value => {
        console.log(value.length);
    });
}

{   //task2
    console.log('-----------------task2-----------------');
    let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].toUpperCase();
    }
    console.log(str.toString());
}

{   //task3
    console.log('-----------------task3-----------------');
    let str = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].toLowerCase();
    }
    console.log(str.toString());
}

{   //task4
    console.log('-----------------task4-----------------');
    let str = ' dirty string   ';
    str = str.trim();
    console.log(str);
}

{   //task5
    console.log('-----------------task5-----------------');
    let str = 'Ревуть воли як ясла повні';
    function stringToarray(str) {
        return str.split(' ');
    }
    let newStr = stringToarray(str);
    console.log(newStr.toString());
}

{   //task6
    console.log('-----------------task6-----------------');
    let num = [10,8,-7,55,987,-1011,0,1050,0];
    let str = num.map( value => {
       return value+'';
    });
    console.log(num);
    console.log(str);
}

{   //task7
    console.log('-----------------task7-----------------');
    function sortNums(array,direction) {
        let arr = array.slice(0);
        arr.sort((a1, a2) => {
            return a1 - a2;
        })
        if (direction === 'ascending')
            return arr;
        else
            return arr.reverse();
    }
    let nums = [11,21,3];
    let newNums = sortNums(nums,'ascending');
    let newNumsRev = sortNums(nums,'descending');
    console.log(newNums);
    console.log(newNumsRev);
}

{   //task8
    console.log('-----------------task8-----------------');
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    coursesAndDurationArray.sort((a1, a2) => {
        return a2.monthDuration - a1.monthDuration;
    })
    // for (const element of coursesAndDurationArray) {
    //     console.log(element);
    // }

    let arrFiltered = coursesAndDurationArray.filter(a => {
        return a.monthDuration > 5;
    })
    // for (const element of arrFiltered) {
    //     console.log(element);
    // }

    let arrMapped = coursesAndDurationArray.map((a, index) => {
        a.id = index + 1;
        return a;
    })
    for (const element of arrMapped) {
        console.log(element);
    }

}

{   //task9
    console.log('-----------------task9-----------------');
    let cardSuit = ['spade', 'diamond','heart', 'clubs'];
    let value = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];
    let cards = [];
    for (const suit of cardSuit) {
        for (const val of value) {
            let card = {cardSuit: suit, value: val};
            if (suit === 'heart' || suit === 'diamond')
                card.color = 'red';
            else
                card.color = 'black';
            cards.push(card);
        }
    }
    console.log(cards);

    let spadeAce = cards.find(a => { return a.cardSuit === 'spade' & a.value === 'ace'; });
    console.log(spadeAce);

    let six = cards.filter(a => {return a.value === '6'});
    console.log(six);

    let red = cards.filter(a => {return a.color === 'red'});
    console.log(red);

    let diamond = cards.filter(a => {return a.cardSuit === 'diamond'});
    console.log(diamond);

    let clubs = cards.filter(a => {return a.cardSuit === 'clubs'}).slice(3);
    console.log(clubs);
}

{   //task10
    console.log('-----------------task10-----------------');
    let cardSuit = ['spade', 'diamond','heart', 'clubs'];
    let value = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];
    let cards = [];
    for (const suit of cardSuit) {
        for (const val of value) {
            let card = {cardSuit: suit, value: val};
            if (suit === 'heart' || suit === 'diamond')
                card.color = 'red';
            else
                card.color = 'black';
            cards.push(card);
        }
    }
    let reduce = cards.reduce((accumulator, card) => {
        switch (card.cardSuit) {
            case 'spade': accumulator.spade.push(card); break;
            case 'diamond': accumulator.diamond.push(card); break;
            case 'heart': accumulator.heart.push(card); break;
            case 'clubs': accumulator.clubs.push(card); break;
            default: console.log('warning');
        }
        return accumulator;
    }, {spade: [], diamond: [], heart: [], clubs: []})
    console.log(reduce);
}

{   //task11
    console.log('-----------------task11-----------------');
    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];

    function findSass(arr) {
        let newArr = [];
        for (const element of arr) {
            if (element.modules.find(a => a === 'sass'))
                newArr.push(element);
        }
        return newArr;
    }
    function findDocker(arr) {
        let newArr = [];
        for (const element of arr) {
            if (element.modules.find(a => a === 'docker'))
                newArr.push(element);
        }
        return newArr;
    }

    let mas = findSass(coursesArray);
    console.log(mas);
    let mas2 = findDocker(coursesArray);
    console.log(mas2);
}
