import { describe, expect, test } from '@jest/globals'
import checkValidData from '../checkValidData'
import { UserType } from '../types'

const data = [
    { email: 'ianspeelman@gmail.com', password: 'password', firstName: 'ian', lastName: 'speelman' },
    { password: 'password', firstName: 'ian', lastName: 'speelman' },
    { email: 'ianspeelman@gmail.com', firstName: 'ian', lastName: 'speelman' },
    { email: 'ianspeelman@gmail.com', password: 'password', lastName: 'speelman' },
    { email: 'ianspeelman@gmail.com', password: 'password', firstName: 'ian' },
    { email: 'ianspeelman@gmail.com', password: 'password', firstName: 'ian', lastName: 'speelman', extra: 'field' },
]

const results = [
    data[0],
    false,
    false,
    false,
    false,
    data[0],
]

describe('tests related to checkvaliddata function', () => {
    test('should return user object if information is valid', () => {
        expect(checkValidData(data[0] as UserType)).toEqual(results[0])
    })

    test('should return false with missing email', () => {
        expect(checkValidData(data[1] as UserType)).toEqual(results[1])
    })

    test('should return false with missing password', () => {
        expect(checkValidData(data[2] as UserType)).toEqual(results[2])
    })

    test('should return false with missing firstname', () => {
        expect(checkValidData(data[3] as UserType)).toEqual(results[3])
    })

    test('should return false with missing lastname', () => {
        expect(checkValidData(data[4] as UserType)).toEqual(results[4])
    })

    test('should discard extra fields', () => {
        expect(checkValidData(data[5] as UserType)).toEqual(results[5])
    })
})
