import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app= express();
const port = 3000;

app.set ('view engine', 'hbs');
app.set ('views', path.join(__dirname, 'assets','views'));

app.get ('/', (req, res)=>{
    const data={
        name: 'Ruben Amorim',
        age: 40,
        address: 'Lisbon, Portugal',
        email: 'emyukapanjuara?@gmail.com',
        photo:'https://www.meme-arsenal.com/memes/0364a9f4b5ef73e090880246377e3185.jpg'
    };
    res.render('profile', data);
});
app.listen(port, () => {
console.log('Server berjalan di http://localhost:${port}');
});