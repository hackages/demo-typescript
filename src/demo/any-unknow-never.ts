let value: unknown;

// value.foo.bar; // OK
// value.trim(); // OK
// value(); // OK
// new value(); // OK
// value[0][1]; // OK

function stringifyAnything(value: unknown): string {
  if (typeof value === "function") {
    const nameFn = value.name;
    return nameFn;
  }

  return String(value);
}

stringifyAnything(12); /*?*/
stringifyAnything({ login: "davy" }); /*?*/
