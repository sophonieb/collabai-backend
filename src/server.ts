import app from './app';

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server listening in port: ${PORT}`);
})

app.on('SIGTERM', () => {
  console.log('Server stop gracefully.');
})
