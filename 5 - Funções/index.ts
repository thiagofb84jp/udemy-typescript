// 1 - Void
function withoutReturn(): void {
  console.log("Esta função não tem retorno algum!");
}

withoutReturn();

// 2 - Callback como argumentos
function greeting(name: string): string {
  return `Olá, ${name}`;
}

function preGreeting(func: (name: string) => string, userName: string) {
  console.log("Preparando a função!");

  const greet = func(userName);

  console.log(greet);
}

preGreeting(greeting, "Matthew");
preGreeting(greeting, "John");

// Exemplo de callback
const mensagem = function() {
    console.log("Essa mensagem é exibida depois de 5 segundos...");
}

setTimeout(mensagem, 5000);