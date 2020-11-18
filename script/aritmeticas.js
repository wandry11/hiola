function resolver() {
	var a1 = parseFloat(document.getElementById('a1').value),
		an = parseFloat(document.getElementById('an').value),
		d = parseFloat(document.getElementById('d').value),
		k = 0,
		k2 = 0,
		k3 = 0,
		i = 0,
		v = 0;

	k = an - 1;
	k2 = k * d;
	k3 = k2 + a1;

	progrecion.textContent = '';
	operacion.innerHTML = 'a<sub>1</sub>=' + a1 + '; a<sub>n=' + an +'</sub>; d=' + d;
	resultado.innerHTML = 'El resultado es: a<sub>n</sub>=' + k3;
	document.getElementById('a1').value = '';
	document.getElementById('an').value = '';
	document.getElementById('d').value = '';
	
	while (an > i) {
		i++;
		v = v + d;
		progrecion.innerHTML = progrecion.innerHTML + 'a<sub>' + i + '</sub>='+ v + '; ';
	}
}
	
function resolver2() {
	var a1 = parseFloat(document.getElementById('a1_2').value),
		a2 = parseFloat(document.getElementById('a2_2').value),
		an = parseFloat(document.getElementById('an_2').value),
		d = 0,
		k = 0,
		k2 = 0,
		k3 = 0,
		i = 0,
		v = 0;

	d = a2 - a1;
	k = an - 1;
	k2 = k * d;
	k3 = k2 + a1;

	progrecion2.textContent = '';
	operacion2.innerHTML = 'a<sub>1</sub>=' + a1 + '; a<sub>2</sub>=' + a2 + '; a<sub>n=' + an + '</sub>;';
	resultado2.innerHTML = 'El resultado es: a<sub>n</sub>=' + k3 + '; d=' + d + ';';
	document.getElementById('a1_2').value = '';
	document.getElementById('a2_2').value = '';
	document.getElementById('an_2').value = '';
	
	while (an > i) {
		i++;
		v = v + d;
		progrecion2.innerHTML = progrecion2.innerHTML + 'a<sub>' + i + '</sub>='+ v + '; ';
	}
}