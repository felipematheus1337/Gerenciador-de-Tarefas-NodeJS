const { expect } = require("chai");
const { request } = require("express");

describe('Routes: Token',	()	=>	{
    const Users = app.models.users;
    describe('POST /token', () => {

         beforeEach(async	() =>	{
              await Users.destroy({where:{}});
              await Users.create({
                name:'Felipe',
                email:'felipe@mail.com',
                password:'123456'
              })
         });

         describe('status 200', ()	=>	{
                 it('returns authenticated user token',	done => {
                        request.post('/token')
                        .send({
                            email:'felipe@mail.com',
                            password:'123456'
                        })
                        .expect(200)
                        .end((err,res) => {
                            expect(res.body).to.include.keys('token');
                            if(err) {
                                console.log(err);
                            }
                            done(err);
                        })
                    });
            });

            describe('status 401', () => {
                    it('throws error when password is incorrect', done	=>	{
                           request.post('/token')
                           send({
                            email:'felipe@mail.com',
                            password:'SENHA_ERRADA'
                           })
                           .expect(401)
                           .end(done);
                    });


                    it('throws error when email not exists', done => {
                          request.post('/token')
                          .send({
                            email: 'EMAIL_ERRADO',
                            password: 'SENHA_ERRADA'
                          })
                          .expect(401)
                          .end(done);
                    });


                    it('throws error when fields are	blank',	done => {
                       request.post('/token')
                        .expect(401)
                        .end(done);
                    });
            });
    });
});
