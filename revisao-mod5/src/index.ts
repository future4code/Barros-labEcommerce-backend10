import app from "./app"
import getAllCharacters from "./endpoints/getAllCharacters"
import createCharacter from "./endpoints/createCharacter"


app.get ("/character", getAllCharacters)
app.put ("/character", createCharacter)