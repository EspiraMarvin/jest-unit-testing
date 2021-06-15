const functions = require('./functions')

// eg of lifecycle hooks
// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

// const initDatabase = () => console.log('Database Initialized')
// const closeDatabase = () => console.log('Database Closed')

const nameCheck = () => console.log('Checking Name...')

// describe.. tests for a specific test case
describe('Checking Names', () => {
    beforeEach(() => nameCheck())

    test('User is Jeff', () => {
        const user = 'Jeff'
        expect(user).toBe('Jeff')
    })

    test('User is Karen', () => {
        const user = 'Karen'
        expect(user).toBe('Karen')
    })
})

// toBe test for equality in primitive types like numbers
// toBe
test('Ads 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

// not.toBe
test('Ads 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

// CHECK FOR TRUTHY & FALSY VALUE
// toBeNull mathces only null
// toBeUndefined matches only undefined
// toBeDefined is opposite of toBeDefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
    expect(functions.isNUll()).toBeNull()
})

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy()
})

// toEqual -- checks for equality in reference types -such as objects and arrays
test('User should be Marvin Espira object', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Marvin', lastName: 'Espira'})
    // expect(functions.createUser()).toStrictEqual({ firstName: 'Marvin', lastName: 'Espira'})
})

// less than and greater than
test('Should be under 1600', () => {
    const load1 = 800
    const load2 = 800
    // expect(load1 + load2).toBeLessThan(1600)
    expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// Regex
test('There is no I in team', () => {
    // expect('teami').not.toMatch(/I/i) // fails
    expect('team').not.toMatch(/I/i) // passes
})

// Arrays -- we use 1.toContain to check availability of an item in an array
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin']
    expect(usernames).toContain('admin')
})

// working with async data

// promise
/*
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1)
    functions.fetchUser().then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
})
*/

// Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1)
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})


