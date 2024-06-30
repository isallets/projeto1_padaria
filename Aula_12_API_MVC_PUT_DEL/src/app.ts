import express from "express";
import {cadastrarModalidade, listaModalidade,atualizarModalidade, deletarModalidades} from "./controller/ProductController";
import {adicionarEstoque, listarEstoque, atualizarEstoque} from "./controller/ProductController";
const app = express();
const PORT = process.env.PORT ?? 2000;
app.use(express.json());


function logInfo(){
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}
app.post("/api/modalidade", cadastrarModalidade);
app.get("/api/modalidade", listaModalidade);
app.put("/api/modalidade", atualizarModalidade);
app.delete("/api/modalidade", deletarModalidades);

//////

app.post("/api/estoque", adicionarEstoque);
app.get("/api/estoque",listarEstoque);
app.put("/api/estoque", atualizarEstoque);
/*
app.delete("/api/estoque", deletarEstoque, deletarEstoque);
*/

app.listen(PORT, logInfo);


