import axios from 'axios'
import startServer from '../start-server'

let server

beforeAll(() => {
  return startServer()
    .then(s => server = s)
})

afterAll(done => {
  server.close(done)
})

test('can get users', () => {
  return axios
    .get('http://localhost:3001/api/users')
    .then(response => {
      const user = response.data.users[0]
      expect(user).toMatchObject({
        name: expect.any(String),
        username: expect.any(String),
      })
    })
})

test('can get 2 users at offset of 3', () => {
  const fiveUsers = axios
    .get('http://localhost:3001/api/users?limit=5')
    .then(response => response.data.users)
  const twoUsers = axios
    .get('http://localhost:3001/api/users?limit=2&offset=3')
    .then(response => response.data.users)
  return Promise
    .all([fiveUsers, twoUsers])
    .then(responses => {
      const fiveUsers = responses[0]
      const twoUsers = responses[1]
      const firstUser = twoUsers[0]
      const secondUser = twoUsers[1]
      const firstUserAll = fiveUsers[3]
      const secondUserAll = fiveUsers[4]
      expect(firstUser).toEqual(firstUserAll)
      expect(secondUser).toEqual(secondUserAll)
    })
})
