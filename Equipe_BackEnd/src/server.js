import express from "express";
import cors from "cors";
import http from "http";
// aqui será conectado à landing page do front end //

import sf from "fs";
import path from "path";

const filePath = 'Equipe_LandingPage\index.html';

const app = express();
app.use(cors());



const server = http.createServer((req,res) => {
    let pathFile = path.join(__dirname, 'Equipe_LandingPage', req.url ==='/' ? 'index.html' : req.url);

    fs.readFile(filePath, (err, data) => {
        if (err){
            res.writeHead(404);
            res.end('Página não encontrada');
        }
        else {
            res.writeHead(200, {'Content-Type': getContentType(filePath) });
            res.end(data);
        }
    });
});

function getContentType(filePath) {
    if (filePath.endsWith('.html')){
        return 'text/html';
    } else if (filePath.endsWith('.css')) {
        return 'text/css';
    } else {
        return 'text/plain';
    }
}

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000.")
})