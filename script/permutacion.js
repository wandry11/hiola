function resolver() {
	var m = parseFloat(document.getElementById('m').value),
		resultado = document.getElementById('resultado'),
		r = 1,
		c = m,
		i = 0;

	while (i < m) {
		i++;
		r = r * c;
		c--;
	}

	document.getElementById('m').value = '';

	resultado.innerHTML = 'El resultado es: P<sub>' + m + '</sub> = ' + r;
};