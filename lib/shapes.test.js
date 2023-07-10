// shapes.test.js

const { Triangle } = require('./shapes');

test('Triangle render method', () => {
  const shape = new Triangle();
  shape.setColor('Blue');
  shape.setText('ECF');
  shape.setTextColor('Green');
  expect(shape.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="Blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="Green">ECF</text></svg>');
});

const { Circle } = require('./shapes');

test('Circle render method', () => {
  const shape = new Circle();
  shape.setColor('Blue');
  shape.setText('ECF');
  shape.setTextColor('Green');
  expect(shape.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="100" fill="Blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="Green">ECF</text></svg>');
});

const { Square } = require('./shapes');

test('Square render method', () => {
  const shape = new Square();
  shape.setColor('Blue');
  shape.setText('ECF');
  shape.setTextColor('Green');
  expect(shape.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200"><rect x="50" y="50" width="200" height="200" fill="Blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="Green">ECF</text></svg>');
});


