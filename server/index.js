import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import path from 'path';

import users from './signup';

const app = express();
const compiler = webpack(webpackConfig);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({}));
app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.join(__dirname, '../client/style.scss')));


app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, '../client/index.html'));
});

app.post('/api/v1/signup', users.signup);

app.listen(3000, () => {
  console.log('App has started on port 3000');
});

export default app;
