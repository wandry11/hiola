function resolver() {
	var m = parseFloat(document.getElementById('m').value),
		n = parseFloat(document.getElementById('n').value),
		resultado = document.getElementById('resultado'),
		r = 1,
		c = m,
		i = 0,
		n2 = 1;

	while (i < n) {
		i++;
		r = r * c;
		c--;
	}

	i = 0;
	c = n;

	while (i < n) {
		i++;
		n2 = n2 * c;
		c--;
	}

	r2 = r / n2;

	document.getElementById('m').value = '';
	document.getElementById('n').value = '';

	resultado.innerHTML = 'El resultado es: C<sub>' + m + ',' + n + '</sub> = ' + r2;
};