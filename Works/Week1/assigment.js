    let a = 2;
    let b = 3;
    let c = 2;
    (a == b) // returns false (çünkü 2,3'e eşit değil)
    (a == c) //returns true (çünkü her ikiside 2'ye eşittir)

    typeof "John Doe" // Returns "string"
    typeof 3.14 // Returns "number"
    typeof true // Returns "boolean"
    typeof 234567890123456789012345678901234567890n // Returns "bigint"
    typeof undefined // Returns "undefined"
    typeof null // Returns "object"
    typeof Symbol('symbol') // Returns "symbol"

    let x = 2;
    let y = "2";
    (x == y) // Returns true
    (x === y) // Returns false

    let x = 3;
    let y = "3";
    x + y // Returns "33" (çünkü + operatörü dizeleri birleştirir)

    let x = 24;
    let y = "Hello";
    x + y // Returns "24Hello"

    let name = "Vivek";
    let surname = " Bisht";
    name + surname // Returns "Vivek Bisht"

    let x = 3;
    let y = "3";
    x - y //Returns 0

    let x = 0;
    let y = 23;

    if(x) { console.log(x) } // Hiçbir şey yazdırmaz çünkü x yanlıştır 

    if(y) { console.log(y) } // 23 yazdırır çünkü y doğrudur

    isNaN("Hello") // Returns true, çünkü "Hello" bir sayıya dönüştürülemez
    isNaN(345) // Returns false, çünkü 345 geçerli bir sayıdır
    isNaN('1') // Returns  false, çünkü '1' geçerli bir sayıdır
    isNaN(true) // Returns false, çünkü true 1 ile eşdeğerdir, geçerli bir sayıdır
    isNaN(false) // Returns false, çünkü false 0 ile eşdeğerdir, geçerli bir sayıdır
    isNaN(undefined) // Returns true, çünkü undefined bir sayıya dönüştürülemez
