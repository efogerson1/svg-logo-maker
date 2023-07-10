// shapes.js

class Shape {
    constructor() {
      this.color = '';
      this.text = '';
    }
  
    setColor(color) {
      this.color = color;
    }

    setText(text){
        this.text = text;
    }
    setTextColor(textColor){
      this.textColor = textColor;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="100" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200"><rect x="50" y="50" width="200" height="200" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
  }
  
  module.exports = {
    Triangle,
    Circle,
    Square,
  };
  