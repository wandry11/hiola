function resolver() {
	var a = parseFloat(document.getElementById('a').value),
		b = parseFloat(document.getElementById('b').value),
		c = parseFloat(document.getElementById('c').value),
		d = parseFloat(document.getElementById('d').value),
		operacion = document.getElementById('operacion'),
		resultado = document.getElementById('resultado'),
		e = 0,
		f = 0,
		x = 0;

	e = b * -1;
	f = c * -1;
	a2 = a + f;
	b2 = e + d;
	x = b2 / a2;

	document.getElementById('a').value = '';
	document.getElementById('b').value = '';
	document.getElementById('c').value = '';
	document.getElementById('d').value = '';
	operacion.textContent = a + 'x+(' + b + ')=' + c + 'x+(' + d + ')';
	resultado.textContent = 'El resultado es: x = ' + x;
};