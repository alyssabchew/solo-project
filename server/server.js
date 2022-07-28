const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

// require routers
const recipeRouter = require('./routers/recipeRouter');

app.use('/recipe', recipeRouter);

// Catch all 404 error handler
app.use((req, res) => res.status(404).send('404: Page not found! :('))

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 404,
    message: { err: 'An unknown error occurred' }
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
})

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;