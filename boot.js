module.exports = app => {
    app.listen(app.get('port'), () => {
        console.log(`NTask Running with port : ${app.get('port')}`);
    })
}