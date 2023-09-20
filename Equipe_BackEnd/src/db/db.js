import sqlite3 from "sqlite3";

const db_user = new sqlite3.Database("./src/db/database.db");

db_user.serialize(()=> {
    db_user.run (`
    CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        senha TEXT,
        idade INTEGER,
        cidade TEXT,
        estado TEXT,
        telefone TEXT,
        termos INTEGER DEFAULT 0,
        tempo_resposta_total FLOAT DEFAULT 0,
        tempo_resposta_questao FLOAT DEFAULT 0,
        repeticoes INTEGER DEFAULT 0,
        evolução FLOAT DEFAULT 0,
        todas_certas INTEGER DEFAULT 0,
    ) 
    `)
})


const db_perguntas = new sqlite3.Database("./src/db/perguntas.db");

db_perguntas.serialize(()=>{
    db_perguntas.run(`
    CREATE TABLE IF NOT EXISTS perguntas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        corpo TEXT,
        respostas_json TEXT,
      resposta_correta INTEGER
        
    )
    `)
})