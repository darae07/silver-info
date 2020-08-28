const db = require('./models');

db.AppList.sync().then(() => {
    return db.AppList.findAll();
});
db.User.sync().then(() => {
    return db.User.findAll();
});
db.InfoData.sync().then(() => {
    return db.InfoData.findAll();
});
