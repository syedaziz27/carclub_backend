const request = require('supertest')
const {app,} = require('../../app')
jest.mock('../../services/user')
const UserService = require('../../services/user')

describe('Tests for /users route', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Should return 200 when GET /username', done => {
        UserService.getUserData.mockImplementation(() => {
            return Promise.resolve();
        })
        request(app)
            .get('/user/foo')
            .then(response => {
                console.log(UserService.getUserData.mock.calls)
                expect(UserService.read.mock.calls[0][0]).toBe('foo')
                expect(response.status).toBe(200)
                done()
            })
    })

    it('should return 400 when GET /username incorrectly', done => {
        UserService.getUserData.mockImplementation(() => {
            return Promise.reject();
        })
        console.log('here')
        request(app)
            .get('/user/lolshouldfail')
            .then(response => {
                expect(UserService.getUserData.mock.calls[0][0]).toBe('lolshouldfail')
                expect(response.status).toBe(400)
                done()
            })
    })
})
