import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import tokenRoutes from './routes/token.routes';
import homeRoutes from './routes/home.routes';
import userRoutes from './routes/user.routes';
import alunoRoutes from './routes/alunos.routes';
import fotosRoutes from './routes/foto.routes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotosRoutes);
    this.app.use('/', homeRoutes);
  }
}

export default new App().app;
