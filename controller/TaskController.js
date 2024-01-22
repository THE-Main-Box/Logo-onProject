const Users = require("../models/users");


const createUser = async (req, res) => {
  try {
    const username = req.body.username;
    const useremail = req.body.email;
    const userpassword = req.body.password;

    await Users.create({
      email: useremail,
      username: username,
      password: userpassword,
    });

    res.redirect("/");
  } catch (err) {
    res.send("Errono Servidor PorFavor Tente Mais Tarde :(");
    console.log(err.message);
  }
};

const login = async (req, res) => {
    try {
        const useremail = req.body.email
        const userpassword = req.body.senha

        const user = await Users.findOne({email: useremail, password: userpassword})
        
        if(user){
            res.render("../views/page",{username: user.username})
        }else{
            res.redirect("/")
        }
        

    } catch (err) {
        res.send("Erro no Servidor PorFavor Tente Mais Tarde :(");
        console.log(err.message);
    }
};


module.exports = {
  createUser,
  login,
};
