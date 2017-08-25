require('rootpath')();
const { describe, it, expect } = require('tests/helper');
const User = require('app/domain/models/user');

describe('Unit | Model | User Schema ', function() {

    describe('User schema', () => {

        it('should exist', () => {
            // when
            const user = new User({});

            // then
            expect(user).to.be.an.instanceof(User);
        });

        describe('Validations', () => {

            it('should be invalid, when username is empty', () => {
                // then
                const user = new User({});

                // when
                const validation = user.validateSync();

                // then
                expect(validation.errors.username).to.exist;
                expect(validation.errors['username'].message).to.eql('Username is not valid');
            });

            it('should be invalid, when email is not valid', () => {
                // then
                const user = new User({ username: 'Conqueror', email: '' });

                // when
                const validation = user.validateSync();

                // then
                expect(validation.errors.email).to.exist;
                expect(validation.errors['email'].message).to.eql('Email is not valid');
            });

            it('should be valid, when username is not empty', () => {
                // then
                const user = new User({ username: 'Conqueror' });

                // when
                const validation = user.validateSync();

                // then
                expect(validation).to.be.undefined;
            });
        });

    });
});