// Generics

function logger1(arg: string):string {
  console.log(arg);
  return arg;
}

logger1("Log In");

function logAny1<T>(arg: T): T {
  console.log(arg);
  return arg;
}

logAny1([45, 3, 20]);

logAny1(true);

