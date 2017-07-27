import makeMeASandwich from '../make-me-a-sandwich'

test('returns null if the sanwich does not exist', () => {
  const req = getReq()
  const result = makeMeASandwich(req)
  expect(result).toBeNull()
})

test('returns my sanwich', () => {
  const sandwich = "Monte"
  const req = getReq(sandwich)
  const result = makeMeASandwich(req)
  expect(result).toBe(sandwich)
})

function getReq(sandwich) {
  return {query: {sandwich}}
}
