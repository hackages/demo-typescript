// string, number and boolean => Object
class User {
  constructor(public login: string) {}
}

type Fish = { swim: () => "swimming" };
type Bird = { fly: () => void };
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getElement(el: string | number | User | Fish): string {
  if (el instanceof User) {
    return el.login;
  } else if (typeof el === "number") {
    return el.toFixed(1).toString();
  } else if (typeof el === "string") {
    return el;
  } else if (isFish(el)) {
    return el.swim();
  }
}

getElement(12);
getElement(new User("davy"));
getElement(" davy "); /*?*/

function isPromise<T>(value: any): value is Promise<T> {
  if (value.then && value.finally) {
    return true;
  }
}
