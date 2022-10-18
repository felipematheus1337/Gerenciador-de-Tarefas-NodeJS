const { expect } = require("chai")
const { request } = require("express")

describe('Routes: Index', () => {
    describe('GET /', () => {
        it('returns the API Status', done => {
            request.get('/')
            .expect(200)    
            .end((err,res) => {
                const expected = {status: 'NTask API'};
                expect(res.body).to.eql(expected);
                done(err);
            });
        });
    });
});