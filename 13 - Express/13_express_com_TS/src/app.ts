// 1 - Iniciando projeto
console.log("Express + TS!");

// 2 - Utilizanod o Express
import express, { NextFunction, Request, Response } from "express";

const app = express();

// 3 - Rota com POST
app.use(express.json());

// 11 - Middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}

app.use(showPath);

app.get("/", (req, res) => {
  return res.send("Hello Express!");
});

// 3 - Rota com POST
app.post("/api/product", (req, res) => {
  console.log(req.body);

  return res.send("Produto adicionado com sucesso.");
});

// 4 - Rota para todos os verbos
app.all("/api/product/check", (req, res) => {
  // req.method = VERB HTTP

  if (req.method === "POST") {
    return res.send("Inseriu algum registro.");
  } else if (req.method === "GET") {
    return res.send("Leu algum registro.");
  } else {
    return res.send("Não podemos realizar esta operação.");
  }
});

// 5 - Interfaces do Express
app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.send("Utilizando as interfaces.");
});

// 6 - Enviando JSON
app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "Shirt",
    price: 30.0,
    color: "Blue",
    sizes: ["P", "M", "G", "XG"],
  });
});

// 7 - Router Parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params);

  const id = req.params.id;

  if (id === "1") {
    const product = {
      id: "1",
      name: "Boné",
      price: 10.0,
    };

    return res.json(product);
  }

  return res.send("Produto não encontrado.");
});

// 8 - Rotas Complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
  console.log(req.params);

  const productId = req.params.id;
  const reviewId = req.params.reviewId;

  return res.send(`Acessando a review ${reviewId} do produto ${productId}.`);
});

// 9 - Router Handler
function getUser(req: Request, res: Response) {
  console.log(`Resgatando o usuário com id: ${req.params.id}`);

  return res.send("O usuário foi encontrado.");
}

app.get("/api/user/:id", getUser);

// 10 - Middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    console.log("Pode seguir.");
    next();
  } else {
    console.log("Acesso restrito. Por favor, tente outra rota.");
  }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  return res.json({ msg: "Bem-vindo a área administrativa." });
});

// 12 - Req e Res com Generics
app.get(
  "/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(`ID: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);

    return res.json({ status: true });
  }
);

app.listen(3000, () => {
  console.log("Hello Express!");
  console.log("Aplicação de TS + Express funcionando!");
  console.log("I love coding!");
});
