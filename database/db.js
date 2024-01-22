const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb+srv://curiosidades381:DBofdb@cluster0.on7xl3g.mongodb.net/userData", {})
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
