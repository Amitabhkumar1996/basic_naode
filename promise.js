let arr = ['a', 'b', 'c', 'd', 'e'];
let resolvedArr = [];
let current = 0;
let occ = 0;
let i = 0;
let a = [false, false, true];

const res = (index) => {

    if (current < arr.length) {
        current++;
        resolvedArr.push(arr[index]);
    }

    return resolvedArr;
}

const callPromise = (cur) => {

    return new Promise((resolve, reject) => {
        // if (cur === 4 && occ === 0) {
        //     occ++;
        //     reject("Error");
        // }
        // else {
        //     resolve(res(cur));
        // }
        resolve(res(cur));
    });
};

let done = () => {
    console.log("Promises Resolved :", resolvedArr);
}

callPromise(current).then(() => {
    callPromise(current).then(() => {
        callPromise(current).then(() => {
            if (resolvedArr.includes('b', 'c')) {
                callPromise(current).then(() => {
                    callPromise(current).then(() => {
                        if (resolvedArr.includes('e')) {
                            done();
                        }
                        else {
                            while (a[i] === false) {
                                callPromise(current - 1).then(() => {
                                    if (resolvedArr.includes('e')) {
                                        done()
                                    }
                                    else {
                                        i++;
                                    }

                                }).catch(err => console.log(err));
                            }

                        }
                    }).catch((err) => console.log(err));
                }).catch(err => console.log(err))
            }

        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
}).catch(err => console.log(err));





