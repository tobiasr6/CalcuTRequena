let displayV= "";

function appendisplayValue(valor) {
    displayV += valor
    document.getElementById("InpuT").value=displayV
}

function cleaning(){
    InpuT.style.transition="opacity 0.5s";

    InpuT.style.opacity="0"

    InpuT.addEventListener('transitionend', function transitionEndHandler() {
        InpuT.textContent='';
        InpuT.removeEventListener('transitionend', transitionEndHandler)
        InpuT.style.transition='none';
        InpuT.style.opacity='1'

        displayV= ""
        document.getElementById("InpuT").value = displayV
    })
}

function calcular(valor) {
    InpuT.style.transition="opacity 0.5s";

    InpuT.style.opacity="0"

    InpuT.addEventListener('transitionend', function transitionEndHandler() {
        InpuT.textContent='';
        InpuT.removeEventListener('transitionend', transitionEndHandler)
        InpuT.style.transition='none';
        InpuT.style.opacity='1'

        displayV=eval(displayV)
    document.getElementById("InpuT").value=displayV
    })
}





