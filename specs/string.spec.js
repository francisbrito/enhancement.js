require('../src/string');

describe('String', function () {
    describe('String.format', function () {
	it('Should replace a placeholder with it\'s respective positional argument.', function () {
	    var msg = 'Hello, {0}!';
	    var sut = String.format(msg, 'World');

	    expect(sut).toBe('Hello, World!');
	});
	
	it('Should replace repetitions of a placeholder with it\'s respective positional argument.', function () {
	    var msg = '{0}{0}{0}{0} {0}{0}{0}{0} Batman!';
	    var sut = String.format(msg, 'Na');

	    expect(sut).toBe('NaNaNaNa NaNaNaNa Batman!');
	});

	it('Should throw if placeholder position does not match with any argument\'s position.', function () {
	    var msg = '1 + 1 = {1}';

	    expect(function () {
		String.format(msg, 2);
	    }).toThrow();
	});
    });
});
