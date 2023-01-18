document.querySelector('button').onclick = function() 
{
    document.querySelector("p[id='name']").textContent = document.getElementById("imie").value;
    document.querySelector("p[id='surname']").textContent = document.getElementById("nazwisko").value;
    document.querySelector("p[id='phone']").textContent = document.getElementById("numertel").value;
}

