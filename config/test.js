module.exports = {
    db: {
        database: 'ntask',
        username:'',
        password:'',
    
        params: {
         dialect: 'sqlite',
         storage: 'ntask_test.sqlite',
         loggin: false,
         define: {
            underscored:true
          }
        },
    },

        jwt: {
            secret:'nta$K-AP1',
            options: {session: false}
        }
};