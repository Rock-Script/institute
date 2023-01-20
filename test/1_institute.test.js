const server = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const chance = require('chance').Chance();
chai.should();
chai.use(chaiHttp);


describe('Institute tests', () => {
    let payload;
    let _id;
    describe('Institute', () => {
        it("It should create new Institute", (done) => {
            payload = {
                name: chance.company(),
                address: chance.address()
            }
            chai.request(server.getServer())
                .post('/institutes')
                .send(payload)
                .end((err, response) => {
                    response.should.have.status(201);
                    const data = response.body.data;
                    data.name.should.be.eq(payload.name);
                    data.address.should.be.eq(payload.address)
                    _id = data._id;
                    done();
                })
        });

        it("It should get Institute", (done) => {
            chai.request(server.getServer())
                .get('/institutes/' + _id)
                .end((err, response) => {
                    response.should.have.status(200);
                    const data = response.body.data;
                    data.name.should.be.eq(payload.name);
                    data.address.should.be.eq(payload.address)
                    _id = data._id;
                    done();
                })
        });

        it("It should update Institute", (done) => {
            payload = {
                name: chance.company(),
                address: chance.address()
            }
            chai.request(server.getServer())
                .patch('/institutes/' + _id)
                .send(payload)
                .end((err, response) => {
                    response.should.have.status(200);
                    const data = response.body.data;
                    data.name.should.be.eq(payload.name);
                    data.address.should.be.eq(payload.address)
                    _id = data._id;
                    done();
                })
        });

    });
});