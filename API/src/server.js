const app = require('./app');
const connectDb = require('./config/db');
require('dotenv').config();

connectDb();

//const PORT = process.env.PORT || 3000;

/*app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/
