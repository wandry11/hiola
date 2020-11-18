function resolver() {
	var m = parseFloat(document.getElementById('m').value),
		n = parseFloat(document.getElementById('n').value),
		resultado = document.getElementById('resultado'),
		r = 1,
		c = m,
		i = 0;

	while (i < n) {
		i++;
		r = r * c;
		c--;
	}

	document.getElementById('m').value = '';
	document.getElementById('n').value = '';

	resultado.innerHTML = 'El resultado es: V<sub>' + m + ',' + n + '</sub> = ' + r;
};