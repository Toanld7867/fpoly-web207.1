import React from 'react';
import ReactDOM from 'react-dom';

const myName = "Le Danh Toan";
const myAge = 21;

const person = {
  name: 'Le Danh Toan',
  age: '21',
}

function total(giatriA, giatriB){
  return giatriA + giatriB;
}

const a = 20;
const b = 30;

const element = <h1>Tổng là : {total(a,b)}</h1>
ReactDOM.render(
  element,
  document.getElementById('root')
);

