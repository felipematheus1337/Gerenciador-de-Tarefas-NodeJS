const { expect } = require('chai');
const { request } = require('express');
const jwt = require('jwt-simple');

describe('Routes : Users',() => {
    const Users = app.models.users;
    let token;
    
    beforeEach(async () => {
     await Users.destroy({where:{}})
     const user = await Users.create({
        name:'Felipe',
        email:'felipe@mail.com',
        password:'123456'
     });
     token = jwt.encode({id:user.id},config.jwt.secret);
    });



    describe('GET /user', () => {
        describe('status 200' ,() => {
            it('returns an authenticated user', done => {
             request.get('/user')
             .set('Authorization',token)
             .expect(200)
             .end((err,res) => {
                expect(res.body.name).to.eql('Felipe');
                expect(res.body.email).to.eql('felipe@mail.com')
                done(err);
             })
            })
        })
    })

    describe('DELETE /user', () => {
        describe('status 200' ,() => {
            it('deletes an authenticated user', done => {
              request.delete('/user')
              .set('Authorization',token)
              .expect(204)
              .end(done);
            })
        })
    })


    describe('POST /user', () => {
        describe('status 200' ,() => {
            it('creates a new user', done => {
               request.post('/users')
                .send({
                    name:'Mary',
                    email:'mary@mail.net',
                    password:'12345'
                })
                .expect(200)
                .end((err,res) => {
                    expect(res.body.name).to.eql('Mary')
                    expect(res.body.email).to.eql('mary@mail.net')
                    done(err);
                })
            })
        })
    })


    
})