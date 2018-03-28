class Instructor {
  constructor({ name, role = 'assistant' }) {
    this.name = name;
    this.role = role;
  }

  renderDetails() {
    console.log(`${this.name}: ${this.role}`);
  }

  static helloWorld() {
    console.log('Hi there');
  }

  static canTeach(instructor) {
    return (instructor.role === 'classroom');
  }
}

// const jon = new Instructor({ name: 'Jon Snow'});
// const brayden = new Instructor({ name: 'Brayden', role: 'teacher' });
// jon.renderDetails();
// brayden.renderDetails();

// static methods do not require an instance
Instructor.helloWorld();
  // => Hi there

let jon = new Instructor({ name: 'Jon' });
jon.helloWorld();
  // does not work

console.log(
  `${jon.name} can teach: ${Instructor.canTeach(jon)}`
);
  // => false

let alice = new Instructor({ name: 'Alice', role: 'classroom' });
console.log(
  `${alice.name} can teach ${Instructor.canTeach(alice)}`
);
  // => true

// single responsibility principle



