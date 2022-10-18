module.exports = {
    db: {
        database: 'ntask',
        username:'',
        password:'',
    },
        params: {
         dialect: 'sqlite',
         storage: 'ntask.sqlite',
         define: {
            underscored:true
          }
        },

        jwt: {
            secret:'nta$K-AP1',
            options: {session: false}
        }
};