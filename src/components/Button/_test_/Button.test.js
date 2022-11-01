import { getRandomImage } from ".."

test('should get a random image', () => {
    expect(getRandomImage()).not.toBeNull()
})