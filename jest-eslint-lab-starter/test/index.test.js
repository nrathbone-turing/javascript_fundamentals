const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe('capitalizeWords', () => {
  test('should capitalize the first letter of each word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World')
  })

  test('should handle an empty string', () => {
    expect(capitalizeWords('')).toBe('')
  })

  test('should handle special characters', () => {
    expect(capitalizeWords('hello-world')).toBe('Hello-World')
  })

  test('should handle single-word strings', () => {
    expect(capitalizeWords('javascript')).toBe('Javascript')
  })
})

describe('filterActiveUsers', () => {
  test('should return only active users', () => {
    const users = [
      { name: 'Alice', isActive: true },
      { name: 'Bob', isActive: false },
    ]
    expect(filterActiveUsers(users)).toEqual([
      { name: 'Alice', isActive: true },
    ])
  })

  test('should handle all inactive users', () => {
    const users = [
      { name: 'Alice', isActive: false },
      { name: 'Bob', isActive: false },
    ]
    expect(filterActiveUsers(users)).toEqual([])
  })

  test('should handle an empty array', () => {
    expect(filterActiveUsers([])).toEqual([])
  })
})

describe('logAction', () => {
  test('should generate the correct log string', () => {
    const action = 'login'
    const username = 'Alice'
    const log = logAction(action, username)
    const regex =
      /^User Alice performed login at \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/
    expect(log).toMatch(regex)
  })

  test('should handle missing action or username', () => {
    expect(() => logAction()).toThrowError('Action and username are required')
    expect(() => logAction('login')).toThrowError(
      'Action and username are required'
    )
    expect(() => logAction(undefined, 'Alice')).toThrowError(
      'Action and username are required'
    )
  })

  test('should handle empty strings as inputs', () => {
    expect(() => logAction('', '')).toThrowError(
      'Action and username are required'
    )
  })
})
