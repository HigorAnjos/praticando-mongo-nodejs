import express from 'express';
import errorMiddleware from './middlewares/error.middleware';
import movieRoutes from './routes/movie.route';

class App {

  public express: express.Application;

  constructor() {
    this.express = express();
    this.config();
  }

  private config(): void {
    this.express.use(express.json());
    this.express.use(movieRoutes);
    this.express.use(errorMiddleware);
  }

  public start(port: number | string = 3001) {
    this.express.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  };
}

export default App;
