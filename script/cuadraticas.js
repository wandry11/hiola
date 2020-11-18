function resolver() {
	var a = parseFloat(document.getElementById('a').value),
		b = parseFloat(document.getElementById('b').value),
		c = parseFloat(document.getElementById('c').value),
		operacion = document.getElementById('operacion'),
		resultado = document.getElementById('resultado'),
		b1 = 0,
		b2 = 0,
		b3 = 0,
		b4 = 0,
		b6 = 0,
		b7 = 0,
		x1 = 0,
		x2 = 0;

	b1 = b * -1;
	b2 = b**2;
	b3 = -4 * a * c;
	b4 = b2 + b3;
	b6 = b4 ** 0.5;
	b7 = a * 2;
	x1 = (b1 + b6) / b7;
	x2 = (b1 - b6) / b7;

	document.getElementById('a').value = '';
	document.getElementById('b').value = '';
	document.getElementById('c').value = '';
	operacion.innerHTML = a + 'x<sup>2</sup>+(' + b + 'x)+(' + c + ')=0';

	if (b4 < 0) {
		resultado.innerHTML = 'El resultado es: x<sub>1</sub>=(' + b1 + '+√' + b4 + ')/' + b7 + ' ; x<sub>2</sub>=(' + b1 + '-√' + b4 + ')/' + b7;
	} else {
		resultado.innerHTML = 'El resultado es: x<sub>1</sub>=' + x1 + ' ; x<sub>2</sub>=' + x2;
	}
};