const app = require("./app");
const db = require("./mongoosedb");

db.init();

const port = process.env.PORT || 3005;

app.listen(port, function () {
    console.log(`listening app on port ${port}`);
});
