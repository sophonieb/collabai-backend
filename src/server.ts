import express, { Response, Request } from 'express';

const app = express()
const PORT = process.env.PORT

console.log('port:', PORT);

app.get('/', (req: Request, res: Response) => {
  res.json({hello: 'world'});
})

app.listen(PORT, () => {
  console.log(`Server listening in port: ${PORT}`);
})
