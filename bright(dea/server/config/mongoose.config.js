const mongoose = require('mongoose');

module.exports = (db_name) => {
// mongoose.connect("mongodb://localhost/prj_prg", {
mongoose.connect("mongodb://localhost/" + db_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        // console.log("Established a connection");
        console.log(`You are connected to the ${db_name} database`)
    })
    .catch(() => {
        // console.log("There has been an error")
        console.log(`Something went wrong connecting to the ${db_name} database: ${err}`)
    });

}