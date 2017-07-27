import sum from '../sum'


// Let's test drive summing numbers
test('passing nothing give us 0!', () => {
  const result = sum()
  expect(result).toBe(0)
})

test('passing a single number return that number', () => {
  const result = sum(3)
  expect(result).toBe(3)
})

test('passing any number of number return their sum', () => {
  const result = sum(4,5,6)
  expect(result).toBe(15)
})