import { Router } from "express";

const suspeitosRoutes = Router();

// Array com futuros suspeitos
let suspeitos = [
    
];

//Rota para cadastrar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
    const { nome, profissao, envolvido, nivel } = req.body;
  
    // Validação dos campos nome e profissão
    if (!nome || !profissao) {
      return res.status(400).send({
        message: "O nome ou o profissão não foi preenchido!",
      });
    }
  
    // Validação do nível de suspeita
    if (nivel != 'baixo' && nivel != 'médio' && nivel != 'alto') {
      return res.status(400).send({
        message:
          "O suspeito não possui o nível de suspeita!",
      });
    }
  
    // Criação de um novo suspeito
    const novoSuspeito = {
      nome,
      profissao,
      envolvido,
      nivel,
    };
  
    // Adiciona o novo suspeito ao array
    suspeitos.push(novoSuspeito);
  
    return res.status(201).json({
      message: "Suspeito cadastrado com sucesso!",
      novoSuspeito,
    });
  });

//Rota para buscar os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
})

export default suspeitosRoutes;