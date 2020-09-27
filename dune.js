function dune(arg) {
    let yield = Number(arg);
    let daysCount = 0;
    let availableSpice = 0;

    while (yield >= 100) {
        availableSpice += yield;
        availableSpice -= 26;
        yield -= 10;
        daysCount++
    }
    availableSpice -= 26;

    if (availableSpice < 0) {
        availableSpice = 0;
    }

    console.log(daysCount);
    console.log(availableSpice);

 }