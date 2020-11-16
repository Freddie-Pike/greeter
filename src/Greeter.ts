// From the TypeScript docs: https://www.typescriptlang.org/docs/handbook/classes.html
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

export default Greeter;