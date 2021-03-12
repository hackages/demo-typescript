// class Car {
//   Rent(type: string): this {
//     console.log(`${type} has been rented.`);
//     return this;
//   }

//   Record(): this {
//     console.log(`Car was rented at ${new Date().toLocaleString()}`);
//     return this;
//   }

//   Return(type: string): this {
//     console.log(`${type} has been returned.`);
//     return this;
//   }
// }

// class ElectricVehicle extends Car {
//   Charge() {
//     return this;
//   }
// }
// class GasVehicle extends Car {
//   Refill() {
//     return this;
//   }
// }

// const elect = new ElectricVehicle();
// elect.Rent('Tesla').Record().Charge();

type Company = {
  mentors: string[];
  addMentor: (name: string) => void;
};

const company: Company = {
  mentors: [],
  addMentor(this: Company, name: string) {
    // Typed this
    //this.mentors.push(name);
    this.mentors.push(name);
  },
};

company.addMentor = company.addMentor.bind(company);

company.addMentor("Guido");
company.mentors; /*?*/

const mentors = [];
company.addMentor.apply({ mentors }, ["Wesley"]);
mentors;
