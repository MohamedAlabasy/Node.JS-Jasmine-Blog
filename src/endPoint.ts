import express from 'express';



const app = express()
const PORT = 8888;
app.get('/api', (request, response, next) => {
    response.send('hello world');
})
app.listen(PORT, () => {
    console.log(`App Run at http://localhost:${PORT || 5000}`);
})


export default app


