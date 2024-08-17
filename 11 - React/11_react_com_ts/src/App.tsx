import React, { createContext } from "react";

// 4 - Componentes
import FirstComponent from "./components/FirstComponent";

// 5 - Desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 6 - UseState
import State from "./components/State";
// import { createContext } from "node:vm";

// 8 - Type
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo" | "Isso, isso, isso!";

// 9 - Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

// export const AppContext = createContext<IAppContext | null>(null);
export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - Variáveis
  const name: string = "James";
  const age: number = 39;
  const isWorking: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}! Como estão as coisas?`;
  };

  // 8 - Type
  const myText: textOrNull =
    "Tem algum texto aqui. Por favor, verifique novamente.";
  let mySecondText: textOrNull = null;
  mySecondText = "Opa";

  const testandoFixed: fixed = "Isso, isso, isso!";

  // 9 - Context
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
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
          category={Category.JS}
        />
        <Destructuring
          title="Segundo Post"
          content="Outro conteúdo qualquer"
          commentsQty={10}
          tags={["ts ", "js ", "Java ", "Python "]}
          category={Category.TS}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
        {testandoFixed}
      </div>
    </AppContext.Provider>
  );
}

export default App;

// https://github.com/matheusbattisti/curso_typescript/blob/main/11_ts_com_react/src/App.tsx