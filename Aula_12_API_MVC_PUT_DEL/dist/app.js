"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductController_1 = require("./controller/ProductController");
const ProductController_2 = require("./controller/ProductController");
const ProductController_3 = require("./controller/ProductController");
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 4400;
app.use(express_1.default.json());
function logInfo() {
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}
app.post("/api/modalidade", ProductController_1.cadastrarModalidade);
app.get("/api/modalidade/todos", ProductController_1.listaModalidade);
app.put("/api/modalidade", ProductController_1.atualizarModalidade);
app.delete("/api/modalidade", ProductController_1.deletarModalidade);
app.get("/api/modalidade", ProductController_1.filtraModalidadePorId);
//////
app.post("/api/estoque", ProductController_2.adicionarEstoque);
app.get("/api/estoque/todos", ProductController_2.listarEstoque);
app.put("/api/estoque", ProductController_2.atualizarEstoque);
app.delete("/api/estoque", ProductController_2.deletarEstoque);
app.get("/api/estoque", ProductController_2.buscaEstoquePorId);
////
app.post("/app/venda", ProductController_3.adicionaVenda);
app.listen(PORT, logInfo);
