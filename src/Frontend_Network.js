export const Host = 'http://107.20.70.11:80';

const first = () => (new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
    console.log(7);
    setTimeout(() => {
    console.log(5);
    resolve(6);
    }, 0);
    resolve(1);
    });
    resolve(2);
    p.then((arg) => {
    console.log(arg);
    });
    
    }));
    first().then((arg) => {
    console.log(arg);
    })
    
    console.log(4);