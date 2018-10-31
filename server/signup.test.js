import chai from 'chai';
import chaiHttp from 'chai-http';

import app from './index';

chai.use(chaiHttp);

const should = chai.should();
const createUser1 = {
  firstName: 'user',
  surname: 'user',
  email: 'user1@gmail.com',
  password: 'testpassword',
};

const createUser2 = {
  firstName: 'osaze',
  surname: '',
  email: 'osaze@gmail.com',
  password: 'testpassword',
};

describe('Sign up User', () => {
  it('it should sign up user successfuly', (done) => {
    chai.request(app)
      .post('/api/v1/signup')
      .send(createUser1)
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.equal(201);
        res.body.status.should.equal('Successful');
        res.body.message.should.equal('Welcome user')
        done();
      });
  });
  it('it should fail from email already existing', (done) => {
    chai.request(app)
      .post('/api/v1/signup')
      .send(createUser1)
      .end((err, res) => {
        res.status.should.equal(409);
        res.body.status.should.equal('Unsuccessful');
        res.body.message.should.equal('Email already exist');
        done();
    });
  });
  it('it should prompt a validation error', (done) => {
    chai.request(app)
      .post('/api/v1/signup')
      .send(createUser2)
      .end((err, res) => {
        res.status.should.equal(422);
        res.body.status.should.equal('Unsuccessful');
        res.body.errors.length.should.equal(1);
        done();
      });
  });
});
