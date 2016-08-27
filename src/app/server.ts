import { App } from '../config/Express'
import { Config } from '../config/Config'

const app = new App();

app.startServer(Config.PORT);