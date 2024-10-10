import { Router } from "express";

const suspeitosRoutes = Router();

// Array com futuros suspeitos
let suspeitos = [
    {
        nome: 'Jon Vlogs',
        profissao: 'Youtuber',
        envolvido: 'sim',
        nivel: 'alto' //Nível de suspeita
    }
];

suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
})

export default suspeitosRoutes;