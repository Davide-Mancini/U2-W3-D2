const bottoneSalva = document.getElementById("salva");
const bottoneElimina = document.getElementById("elimina");
const form = document.getElementById("form");
const input = document.getElementById("input");
const memoryKey = "name-memory";
let array = [];
bottoneSalva.addEventListener("click", function () {
  const inputValue = input.value;
  localStorage.setItem(memoryKey, inputValue);
  alert("NOME SALVATO CON SUCCESSO");
  console.log(input.value);
  const row = document.getElementById("row");
  row.innerHTML += `<div class="col col-12 col-md-4 col-lg-3">
        <div class="card">
          
          <div class="card-body">
            <h5 class="card-title">${input.value} </h5>
           
          </div>
        </div>
      </div>`;
  array.push(input.value);
  localStorage.setItem();
  input.value = " ";
});
bottoneElimina.addEventListener("click", function () {
  localStorage.removeItem(memoryKey);
  alert("NOME ELIMINIATO!");
});
