require('rootpath')();
const { describe, it, expect } = require('tests/helper');
const errors = require('app/domain/errors');

describe('Unit | Errors ', function() {

    it('should export a HostCreationError', () => {
        expect(errors.HostCreationError).to.exist;
    });

    it('should export a CreationError', () => {
        expect(errors.CreationError).to.exist;
    });
});