import React from "react";

// 4 - Componentes
import FirstComponent from "./components/FirstComponent";

function App() {
  // 1 - Variáveis
  const name: string = "James";
  const age: number = 39;
  const isWorking: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}! Como estão as coisas?`;
  };

  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <h1>Typescript com React!</h1>
      <h2>::General Data::</h2>
      <h3>Name: {name}</h3>
      <h3>Number: {age}</h3>
      {isWorking && (
        <div>
          <p>Está trabalhando!</p>
        </div>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <FirstComponent />
    </div>
  );
}

export default App;
