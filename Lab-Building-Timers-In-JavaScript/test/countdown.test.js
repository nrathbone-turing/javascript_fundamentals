const { countdownTimer } = require('../src/countdown')

jest.useFakeTimers()

describe('countdownTimer', () => {
  test('should log remaining time at intervals and stop at 0', () => {
    console.log = jest.fn() // Mock console.log

    const startTime = 5 // 5 seconds
    const interval = 1000 // 1 second
    const timerId = countdownTimer(startTime, interval)

    // Fast-forward all timers
    jest.advanceTimersByTime(startTime * interval)

    // Verify that console.log was called correctly
    expect(console.log).toHaveBeenCalledTimes(startTime)
    for (let i = startTime; i > 0; i--) {
      expect(console.log).toHaveBeenCalledWith(i)
    }

    // Ensure timer was stopped
    expect(clearInterval).toHaveBeenCalledWith(timerId)
  })
})
