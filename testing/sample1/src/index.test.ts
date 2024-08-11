import { describe, expect, it } from '@jest/globals';
import { multiply, sum } from './index';

describe('calculations of number', () => {
    describe('sum of numbers', ()=> {
        it('add 5 + 9 to equal 14', () => {
             expect(sum(5,9)).toBe(14)
        })
        it('add 9 + 9 to equal 18', () => {
            expect(sum(9,9)).toBe(18)
       })
    })
    describe('multiply of number', () => {
        it('muk 5 * 5 to be 25', () => {
            expect(multiply(5,5)).toBe(25)
        })
        it('muk 9 * 5 to be 45', () => {
            expect(multiply(9,5)).toBe(45)
        })
    })
})

describe('sum module', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1,2)).toBe(3);
    })

    it('adds 3 + 5 to equal 8', () => {
         expect(sum(3,5)).toBe(8);
    })
})

