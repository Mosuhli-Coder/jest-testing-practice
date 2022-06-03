import {Utils} from '../app/Utils'


describe('Users test suite', () => {

    test('first test', () => {
     const result = Utils.toUpperCase('abc');
      expect(result).toBe('ABC');
    })
    test('parse simple URL', () => {
        const parseUrl = Utils.parseUrl('http://localhost:8080/login');
        expect(parseUrl.href).toBe('http://localhost:8080/login');
        expect(parseUrl.port).toBe('8080');
        expect(parseUrl.protocol).toBe('http:')
    })
    test('parse URL with query', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login?user=user&password=pass');
        const expectedQuery = {
            user: 'user',
            password: 'pass'
        }
        expect(parsedUrl.query).toEqual(expectedQuery);
        expect(expectedQuery).toBe(expectedQuery)
    })

    test.only('test invalid URL', () => {
        function expectError() {
            Utils.parseUrl('')
        }
        expect(expectError).toThrowError();
    })
  })