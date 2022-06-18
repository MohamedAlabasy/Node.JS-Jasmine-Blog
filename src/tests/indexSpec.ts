// import myFun from '../index';
import arrays from '../utilities/arrays';
import numbers from '../utilities/numbers';
import strings from '../utilities/strings';
import countries from "../index";


// it('expect myFun(5) to equal 25', () => {
//     expect(myFun(5)).toEqual(25);
// });

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

it('should capitalize a string', () => {
    expect(strings.capitalize('a sentence')).toEqual('A Sentence');
});

it('should be a sum greater than 10', () => {
    expect(numbers.sum(3, 10)).toBeGreaterThan(10);
});

it('multiply 3 by 5 and be 15', () => {
    expect(numbers.multiply(3, 5)).toEqual(15);
});

it('should add numbers in array and be truthy', () => {
    expect(arrays.addArr(numArr)).toBeTruthy();
});

it('should concatenate 2 arrays to not equal just 1', () => {
    expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
});

it('should not contain the third index', () => {
    expect(arrays.cut3(wordArr)).not.toContain('rabbit');
});

it('should not have a large number and be falsy', () => {
    expect(arrays.lgNum(wordArr)).toBeFalsy();
});




it("should get basic data on the country canada", async () => {
    const data = await countries.getCountry('canada');
    expect(data).toEqual({
        capital: 'Ottawa',
        region: 'Americas',
        numericCode: '124'
    });
});



/** Add test for getRegionCountries function here */
it("should get the countries in the region NAFTA", async () => {
    const data = await countries.getRegionCountries('nafta');
    expect(data).toEqual([
        'Canada', 'Mexico', 'United States of America'
    ]);
});

it("should get capitals of NAFTA countries", async () => {
    const data = await countries.getRegionCapitals('nafta');
    expect(data).toEqual([
        'Ottawa', 'Mexico City', 'Washington, D.C.'
    ]);
});