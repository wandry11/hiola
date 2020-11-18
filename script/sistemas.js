function resolver() {
	var a = parseFloat(document.getElementById('a').value),
		b = parseFloat(document.getElementById('b').value),
		c = parseFloat(document.getElementById('c').value),
		a2 = parseFloat(document.getElementById('a2').value),
		b2 = parseFloat(document.getElementById('b2').value),
		c2 = parseFloat(document.getElementById('c2').value),
		operacion = document.getElementById('operacion'),
		resultado = document.getElementById('resultado'),
		d, d1 , d2, d3, d4, k, k1, k2, k3, k4, y, x = 0;

		d = b * -1;
		k = b2 * -1;

		k1 = a2 * c;
		k2 = a2 * d;

		d1 = a * c2;
		d2 = a * k;

		k3 = k2 * -1;
		d3 = d1 * -1;

		d4 = d3 + k1;
		k4 = k3 + d2;

		y = d4 / k4;

		x = (c2 + (k * y)) / a2;

	document.getElementById('a').value = '';
	document.getElementById('b').value = '';
	document.getElementById('c').value = '';
	document.getElementById('a2').value = '';
	document.getElementById('b2').value = '';
	document.getElementById('c2').value = '';

	if (k4 == 0 || d4 == 0) {
		resultado.textContent = 'La operacion no tiene solucion o tiene infinitas soluciones.';
	} else {
		operacion.innerHTML = a + 'x+(' + b + 'y)=' + c + '<br/>' + a2 + 'x+(' + b2 + 'y)=' + c2;
		resultado.textContent = 'El resultado es: x=' + x + ' ; y=' + y;
	}
};