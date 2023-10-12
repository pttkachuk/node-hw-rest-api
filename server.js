const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST, PORT } = process.env;
mongoose.set("strictQuery", false);

mongoose
  .connect(DB_HOST)
  .then(() => { console.log(`Database connection successful. localhost:${PORT}`); app.listen(PORT) })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

