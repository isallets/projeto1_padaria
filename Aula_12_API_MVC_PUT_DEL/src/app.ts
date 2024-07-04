import express from "express";
import {cadastrarModalidade, listaModalidade,atualizarModalidade, deletarModalidade, filtraModalidadePorId, } from "./controller/ProductController";
import {adicionarEstoque, listarEstoque, atualizarEstoque, deletarEstoque, buscaEstoquePorId} from "./controller/ProductController";
import { adicionaVenda } from "./controller/ProductController";
const app = express();
const PORT = process.env.PORT ?? 4400;
app.use(express.json());


function logInfo(){
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}
app.post("/api/modalidade", cadastrarModalidade);
app.get("/api/modalidade/todos", listaModalidade);
app.put("/api/modalidade", atualizarModalidade);
app.delete("/api/modalidade", deletarModalidade);
app.get("/api/modalidade", filtraModalidadePorId);

//////

app.post("/api/estoque", adicionarEstoque);
app.get("/api/estoque/todos",listarEstoque);
app.put("/api/estoque", atualizarEstoque);
app.delete("/api/estoque", deletarEstoque);
app.get("/api/estoque", buscaEstoquePorId);

////

app.post("/app/venda", adicionaVenda);

app.listen(PORT, logInfo);


