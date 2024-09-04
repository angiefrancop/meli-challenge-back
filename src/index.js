import express from 'express';
import cors from 'cors';
import ItemsRouter from './routes/items-routes.js';
const corsOptions = {
  origin: '*'
};
const app = express();
app.use(cors(corsOptions));
app.use(ItemsRouter());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.info(`Express server running on port http://localhost:${PORT} 🚀`);
});
