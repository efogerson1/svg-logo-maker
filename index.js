// index.js

const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const shapeChoices = ['Triangle', 'Circle', 'Square'];

async function promptUser() {
  const { shape, color, text } = await inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: shapeChoices,
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter the color (color keyword or hexadecimal number):',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters to include in the SVG (leave empty for no text):',
      validate: (input) => input.length <= 3 || 'Enter up to three characters only',
    },
  ]);

  let selectedShape;
  switch (shape) {
    case 'Triangle':
      selectedShape = new Triangle();
      break;
    case 'Circle':
      selectedShape = new Circle();
      break;
    case 'Square':
      selectedShape = new Square();
      break;
    default:
      console.log('Invalid shape!');
      return;
  }

  selectedShape.setColor(color);
  const svgContent = selectedShape.render();

  let svgWithText = svgContent;
  if (text) {
    const textPositionX = selectedShape instanceof Circle ? 150 : 100;
    const textPositionY = selectedShape instanceof Square ? 275 : 225;
    const textSVG = `<text x="${textPositionX}" y="${textPositionY}" text-anchor="middle">${text}</text>`;
    svgWithText = svgContent.slice(0, -2) + textSVG + svgContent.slice(-2);
  }

  const fileName = `${shape.toLowerCase()}-${color.replace('#', '')}-${text}.svg`;
  const filePath = `examples/${fileName}`;

  fs.writeFile(filePath, svgWithText, (err) => {
    if (err) {
      console.error('Error creating SVG file:', err);
    } else {
      console.log(`SVG file "${fileName}" created successfully!`);
    }
  });
}

promptUser();
