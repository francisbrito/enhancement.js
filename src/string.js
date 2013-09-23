String.format = function (format) {
    var args = Array.prototype.slice.call(arguments, 1);
    var old = format;

    args.forEach(function (arg, idx) {
	var placeholder = '{' + idx + '}';
	
	format = format.split(placeholder).join(arg);
    });

    // Just a trick. If strings match, something was wrong.
    if (old === format)
	throw 'Placeholder position doesn\'t match with any argument\'s position.';

    return format;
};
