require('rootpath')();
const { describe, it, expect, beforeEach } = require('tests/helper');
const route = require('app/features/status');
const { name, version, description } = require('package');

describe('Unit | Route | Status Index ', function() {

    let server;

    beforeEach(() => {
        server = require('server').BootStrapTestHelper('status');
    });

    describe('Server', () => {

        it('should have an attributes', () => {
            // then
            expect(route.register.attributes).to.exist;
            expect(route.register.attributes).to.be.an('object');
            expect(route.register.attributes.name).to.equal('status-api');
            expect(route.register.attributes).to.have.property('version');
        });

    });

    describe('Route Get /api/status', () => {

        it('should exist', () => {
            // when
            return server.inject({
                method: 'GET',
                url: '/api/status',
                payload: {}
            }).then((res) => {
                // then
                expect(res.statusCode).to.equal(200);
                expect(res.result).to.deep.equal({ name, version, description });
            });
        });
    });
});