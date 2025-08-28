import express from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send(`안녕하세요, 만나서 반갑습니다.`);
});

app.listen(PORT, () => {
    console.log(`Server On: http://localhost:${PORT}/`)
})