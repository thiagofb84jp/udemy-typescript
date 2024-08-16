import React from "react";

// 4 - Componentes
import FirstComponent from "./components/FirstComponent";

// 5 - Desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring from "./components/Destructuring";

// 6 - UseState
import State from "./components/State";

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
      <SecondComponent name="segundo" />
      <Destructuring
        title="Primeiro Post"
        content="Algum conteúdo qualquer"
        commentsQty={10}
        tags={["ts ", "js ", "Java ", "Python "]}
      />
      <Destructuring
        title="Segundo Post"
        content="Outro conteúdo qualquer"
        commentsQty={10}
        tags={["ts ", "js ", "Java ", "Python "]}
      />
      <State />
    </div>
  );
}

export default App;
