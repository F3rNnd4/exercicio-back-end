import { Router } from "express";

const suspeitosRoutes = Router();

// Array com futuros suspeitos
let suspeitos = [

];

//Rota para cadastrar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
    const { id, nome, profissao, envolvido, nivel } = req.body;

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

    if (envolvido != 'sim' && envolvido != 'não') {
        return res.status(400).send({
            message:
                "Insira sim ou não no envolvimento de apostas!",
        });
    }

    // Criação de um novo suspeito
    const novoSuspeito = {
        id: Math.floor(Math.random() * 1000000),
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

// Rota para buscar um suspeito pelo id
suspeitosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
  
    // Busca um suspeito pelo id no array
    const suspeito = suspeitos.find((criminoso) => criminoso.id == id);
  
    // Verifica se o suspeito foi encontrado
    if (!suspeito) {
      return res
        .status(404)
        .json({ message: `Suspeito com id ${id} não encontrado!` });
    }
  
    return res.status(200).json(suspeito);
  });

export default suspeitosRoutes;