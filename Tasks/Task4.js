// Функция delay. Промис разрешится после указанного в функции времени

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));

// Promise.all своя реализация

function all(promiseAll) {
  return new Promise(function (resolve, reject) {
    let successArr = new Array(promiseAll.length);
    if (promiseAll.length == 0) {
      resolve(successArr);
    }
    let pending = promiseAll.length;
    promiseAll.forEach(function (promise, i) {
      promise.then(
        function (result) {
          successArr[i] = result;
          pending -= 1;
          if (!pending) {
            resolve(successArr);
          }
        },
        function (error) {
          reject(new Error("Ошибка: ", error));
        }
      );
    });
  });
}
function singlePromise(value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(value);
    }, 500);
  });
}
function singlePromise2(value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(value);
    }, 700);
  });
}
all([singlePromise(1), singlePromise(2), singlePromise2(3)]).then((array) => {
  console.log("Promise.all! This should be [1, 2, 3]:", array);
});


// Promise.race своя реализация

function race(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) promise.then(resolve, reject);
  });
}
function firstPromise(value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(value);
    }, 500);
  });
}
function secondPromise(value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(value);
    }, 800);
  });
}
race([firstPromise(1), secondPromise(2)]).then((promise) => {
  console.log("Promise.race! Winner:", promise);  // winner: 2
});