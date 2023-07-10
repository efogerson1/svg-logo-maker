// index.js

const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const shapeChoices = ['Triangle', 'Circle', 'Square'];

async function promptUser() {
  const { shape, color, text, textColor } = await inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: shapeChoices,
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter the shape color (color keyword or hexadecimal number):',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters to include in the SVG (leave empty for no text):',
      validate: (input) => input.length <= 3 || 'Enter up to three characters only',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the color of the text you would like to use:',
    }
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
  selectedShape.setText(text);
  selectedShape.setTextColor(textColor);
  const svgContent = selectedShape.render();

  const fileName = `${shape.toLowerCase()}-${color.replace('#', '')}-${text}.svg`;
  const filePath = `examples/${fileName}`;

  fs.writeFile(filePath, svgContent, (err) => {
    if (err) {
      console.error('Error creating SVG file:', err);
    } else {
      console.log(`SVG file "${fileName}" created successfully!`);
    }
  });
}

promptUser();
