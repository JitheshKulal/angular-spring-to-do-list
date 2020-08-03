import {Math} from './math'


describe('When we call  math.add',() => {

    let math: Math;

    beforeEach(() => {
        console.log('Running before test');
        math = new Math();
    })

    it('it add 2 numbers together', () => {
        console.log('Running during test');
        expect(math.add(1,2)).toBe(3);
    })

    afterEach(() => {
        console.log('Running after test');
    })
})