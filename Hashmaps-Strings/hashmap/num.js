for (let i = 33; i <= 99; i++) {
    if (i.toString().includes(0) || i.toString().includes(1) ||i.toString().includes(2) || i.toString().includes(5)) {
        continue;
    } else {
        console.log(i)
    }
}