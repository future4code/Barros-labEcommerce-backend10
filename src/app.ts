import express from "express"
import cors from "cors"
import { AddressInfo } from "net"

const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server){
        const adress = server.address() as AddressInfo;
        console.log(`Servidor rodando na porta http://localhost:${adress.address}`);
    } else {
        console.error("falha ao iniciar o servidor")
    }
})

export default app