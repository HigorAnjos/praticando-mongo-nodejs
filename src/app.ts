import express from 'express';
import movieRoutes from './routes/movie.route';

class App {

  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.use(movieRoutes);
  }

  public start(port: number | string = 3001) {
    this.express.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  };
}

export default App;
