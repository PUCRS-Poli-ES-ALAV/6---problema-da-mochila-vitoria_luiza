let fiboRecIterations = 0;
let fiboRecInstructions = 0;

function fiboRec (n) {

    fiboRecIterations++;

    if(n<=1) {

        fiboRecInstructions++;

        return n;
    } else {

        fiboRecInstructions += 2;

        let a = fiboRec(n-1);
        let b = fiboRec(n-2);

        fiboRecInstructions +- 2;

        return a + b;
    }
}

console.log("fiboRecIterations: ", fiboRecIterations);
console.log("fiboRecInstructions: ", fiboRecInstructions);

let fiboIterations = 0;
let fiboInstructions = 0;

function fibo (n) {
    var f = [];

    f[0] = 0;
    f[1] = 1;

    fiboInstructions += 2;

    for(let i = 2; i <= n; i++) {

        fiboIterations++;

        f[i] = f[i-1] + f[i-2];

        fiboInstructions += 4;
    }

    fiboIterations++;

    return f[n];
}

console.log("fiboIterations: ", fiboIterations);
console.log("fiboInstructions: ", fiboInstructions);

let memoizedFiboIterations = 0;
let memoizedFiboInstructions = 0;

function memoizedFibo (f, n) {

    memoizedFiboInstructions++;

    for(let i = 0; i<= n; i++) {

        memoizedFiboIterations++;

        f[i] = -1;

        memoizedFiboInstructions += 2;

    }

    memoizedFiboInstructions++;

    return lookupFibo(f , n);
}

function lookupFibo(f , n) {

    memoizedFiboIterations++;

    if(f[n] >= 0) {

        memoizedFiboInstructions++;

        return f[n];
    }

    memoizedFiboIterations++;

    if(n<=1) {

        memoizedFiboInstructions += 2;

        f[n] = n;
    } else {

        memoizedFiboInstructions += 3;

        f[n] = lookupFibo(f, n-1) + lookupFibo(f, n-2);
    }

    memoizedFiboInstructions++;

    return f[n];
}

console.log("memoizedFiboIterations: ", memoizedFiboIterations);
console.log("memoizedFiboInstructions: ", memoizedFiboInstructions);

console.log("---4---");
console.log("fiboRec", fiboRec(4));
console.log("fibo", fibo(4));
var f = [];
console.log("memoizedFibo", memoizedFibo(f, 4));

console.log("---8---");
console.log("fiboRec", fiboRec(8));
console.log("fibo", fibo(8));
var f = [];
console.log("memoizedFibo", memoizedFibo(f, 8));

console.log("---16---");
console.log("fiboRec", fiboRec(16));
console.log("fibo", fibo(16));
var f = [];
console.log("memoizedFibo", memoizedFibo(f, 16));

console.log("---32---");
console.log("fiboRec", fiboRec(32));
console.log("fibo", fibo(32));
var f = [];
console.log("memoizedFibo", memoizedFibo(f, 32));

console.log("---128---");
console.log("fibo", fibo(128));
var f = [];
console.log("memoizedFibo", memoizedFibo(f, 128));

console.log("---1000---");
console.log("fibo", fibo(1000));
var f = [];
console.log("memoizedFibo", memoizedFibo(f, 1000));

console.log("---10000---");
console.log("fibo", fibo(10000));
var f = [];
console.log("memoizedFibo", memoizedFibo(f, 10000));
