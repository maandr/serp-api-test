var assert = require('assert');
var axios = require('axios');

const HOST = process.env.DOCKER_IP || 'localhost'
const PORT = process.env.SERP_API_PORT || 3000

const API = 'http://' + HOST + ':' + PORT + '/api/';

describe('API Test Suite', function() {
    it('POST /products', function(done) {
      axios.post(API + 'products', { sku: '1001-XL', name: 'T-Shirt XL', price: 19.99, stockLevel: 10 })
        .then((response) => {       
          assert.equal(response.status, 201);
          done();
        })
        .catch((error) => { 
          assert.fail(error);
          done();
        })
    });

    it('GET /products', function(done) {
      axios.get(API + 'products')
        .then((response) => {
          assert.equal(response.status, 200);
          done();
        })
        .catch((error) => {
          assert.fail(error);
          done();
        })
    })

    it('GET /products/:id', function(done) {
      axios.get(API + 'products')
        .then((response) => {
          assert.equal(response.status, 200)
          done();
        })
        .catch((error) => {
          assert.fail(error);
          done();
        })
    })

    it('PUT /products/:id', function(done) {
      axios.put(API + 'products/1', { sku: '1001-XS', name: 'T-Shirt XS', price: 19.99, stockLevel: 11 })
        .then((response) => {       
          assert.equal(response.status, 200);
          done();
        })
        .catch((error) => { 
          assert.fail(error);
          done();
        })
    });
    it('DELETE /products/:id', function(done) {
      axios.delete(API + 'products/1')
        .then((response) => {       
          assert.equal(response.status, 200);
          done();
        })
        .catch((error) => { 
          assert.fail(error);
          done();
        })
    });
});