'use strict';
const data = [
  {
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: 'Play',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: 'Study',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: 'Social',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

// console.log(data);



// console.log(...h2Element);
// console.log(pElement[1]);
// pElement[1].innerHTML = `Last Week -  ${data[3].timeframes.daily.current}Hrs`;
// const daily = document.querySelectorAll('h2')
// const newD= [...daily]
// console.log(newD[1]);

// for (let i = 0; i < data.length; i++) {
//   h2Element[i].innerHTML = `${data[i].timeframes.daily.current}Hrs`;
//   pElement[i].innerHTML = `Last day -  ${data[i].timeframes.daily.previous}Hrs`;
// }


const h2Element = document.querySelectorAll('h2');
const pElement = document.querySelectorAll('p');

document
  .querySelector('#daily')
  .addEventListener('click', function activeState(event) {
    event.target.classList.add('active');
    document.querySelector('#weekly').classList.remove('active');
    document.querySelector('#monthly').classList.remove('active');
    for (let i = 0; i < data.length; i++) {
      h2Element[i].innerHTML = `${data[i].timeframes.daily.current}Hrs`;
      pElement[
        i
      ].innerHTML = `Last day -  ${data[i].timeframes.daily.previous}Hrs`;
    }
  });

document
  .querySelector('#weekly')
  .addEventListener('click', function activeState(event) {
    event.target.classList.add('active');
    document.querySelector('#daily').classList.remove('active');
    document.querySelector('#monthly').classList.remove('active');
    for (let i = 0; i < data.length; i++) {
      h2Element[i].innerHTML = `${data[i].timeframes.weekly.current}Hrs`;
      pElement[
        i
      ].innerHTML = `Last week -  ${data[i].timeframes.weekly.previous}Hrs`;
    }
  });

document
  .querySelector('#monthly')
  .addEventListener('click', function activeState(event) {
    event.target.classList.add('active');
    document.querySelector('#daily').classList.remove('active');
    document.querySelector('#weekly').classList.remove('active');
    for (let i = 0; i < data.length; i++) {
      h2Element[i].innerHTML = `${data[i].timeframes.monthly.current}Hrs`;
      pElement[
        i
      ].innerHTML = `Last month -  ${data[i].timeframes.monthly.previous}Hrs`;
    }
  });
