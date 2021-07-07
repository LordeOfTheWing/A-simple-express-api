const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

console.log(process.env.NODE_ENV);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
