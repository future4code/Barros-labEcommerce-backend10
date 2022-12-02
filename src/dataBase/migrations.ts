import { connection } from "./connection"


const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTable = () => connection.raw(`
    CREATE TABLE movie (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR (255) NOT NULL,
        year YEAR NOT NULL
    );
`).then(() => console.log('Tabela criada com sucesso!')).catch(printError)

const finish = () => connection.destroy()

createTable().then(finish)