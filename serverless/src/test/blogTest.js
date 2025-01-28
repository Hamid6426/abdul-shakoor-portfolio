const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('Blogs', () => {
  it('should GET all the blogs', (done) => {
    chai.request(server)
      .get('/api/blogs')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  // Additional tests can be added here
});
