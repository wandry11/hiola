function resolver() {
    var a1 = parseFloat(document.getElementById('a1').value),
        an = parseFloat(document.getElementById('an').value),
        r = parseFloat(document.getElementById('r').value),
        k = 0,
        k2 = 0,
        k3 = 0,
        i = 0,
        v = 0;

    k = an - 1;
    k2 = r**k;
    k3 = k2 * a1;

    progrecion.textContent = '';
    operacion.innerHTML = 'a<sub>1</sub>=' + a1 + '; a<sub>n=' + an +'</sub>; r=' + r;
    resultado.innerHTML = '<strong>El resultado es:</strong> a<sub>n</sub>=' + k3;
    document.getElementById('a1').value = '';
    document.getElementById('an').value = '';
    document.getElementById('r').value = '';
    
    while (an > i) {
        i++;

        if (i == 1) {
            v = a1
        } else {
            v = v * r
        }
        
        progrecion.innerHTML = progrecion.innerHTML + 'a<sub>' + i + '</sub>='+ v + '; ';
    }
}
    
function resolver2() {
    var a1 = parseFloat(document.getElementById('a1_2').value),
        a2 = parseFloat(document.getElementById('a2_2').value),
        an = parseFloat(document.getElementById('an_2').value),
        r = 0,
        k = 0,
        k2 = 0,
        k3 = 0,
        i = 0,
        v = 0;

    r = a2 / a1;
    k = an - 1;
    k2 = r**k;
    k3 = k2 * a1;

    progrecion2.textContent = '';
    operacion2.innerHTML = 'a<sub>1</sub>=' + a1 + '; a<sub>2</sub>=' + a2 + '; a<sub>n=' + an + '</sub>;';
    resultado2.innerHTML = 'El resultado es: a<sub>n</sub>=' + k3 + '; r=' + r + ';';
    document.getElementById('a1_2').value = '';
    document.getElementById('a2_2').value = '';
    document.getElementById('an_2').value = '';
    
    while (an > i) {
        i++;

        if (i == 1) {
            v = a1
        } else {
            v = v * r
        }

        progrecion2.innerHTML = progrecion2.innerHTML + 'a<sub>' + i + '</sub>='+ v + '; ';
    }
}