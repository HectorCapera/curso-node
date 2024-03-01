// argumentos de entrada

// console.log(process.argv);

// controlar el proceso y su salida

process.exit(1);

//Podemos controlar eventos del proceso

process.on("beforeExit", () => {
  process.on("exit", () => {
    console.log("El proceso va a terminar");
  });
});

// current working directory

console.log(process.cwd());

// platform
console.log(process.env.Pepito);
