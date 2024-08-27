

const handleChange = (number1, number2) => {
    console.log(number1 + number2)
    return
}
handleChange(10, 12)


const aloneNumber = (number) => {
    if (number == 1) {
        console.log("tekdir")
    } else {
        console.log("cütdür")
    }
}
aloneNumber(20)




// function algoritm(number) {
//     for (let i = 1; i < number; i++) {
//         let a = '';
//         for (let j = 1; j < i; j++) {
//             a =  a + j + ' ';
//         }
//         console.log(a);
//     }
// }

// algoritm(9);

// console.log('abc '.repeat(4));

// function createFullPyramid(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let row = ' '.repeat(rows - i) + '1 '.repeat(i);
//         console.log(row);
//     }
// }

// createFullPyramid(9);


// function createDiamond(rows) {
    
//     for (let i = 1; i <= rows; i++) {
//         let row = ' '.repeat(rows - i) + '1 '.repeat(i);
//         console.log(row);
//     }

    
//     for (let i = rows - 1; i >= 1; i--) {
//         let row = ' '.repeat(rows - i) + '1 '.repeat(i);
//         console.log(row);
//     }
// }

// createDiamond(5);


function createRomp(number){
    for (let i = 1; i <= number; i++) {
        let row = " ".repeat(number - i) + "1 ".repeat(i)
        console.log(row)
    }
}
createRomp(5)



// function creaetKub (number){
//     for (let i = 0; i < number; i++) {
//         let a = '1 '.repeat(number)
//         console.log(a)
//     }
// }

// creaetKub(5)

