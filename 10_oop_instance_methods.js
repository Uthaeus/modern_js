// adding instance methods to a class

class Instructor {
  constructor({ name, role = 'assistant' }) {
    this.name = name;
    this.role = role;
  }

  renderDetails() {
    console.log(`${this.name}: ${this.role}`);
  }
}

const jon = new Instructor({ name: 'Jon Snow' });
console.log(jon.name);

jon.renderDetails();
  // => Jon Snow: assistant

const brayden = new Instructor({ name: 'Brayden', role: 'teacher' });
brayden.renderDetails();
  // => Brayden: teacher