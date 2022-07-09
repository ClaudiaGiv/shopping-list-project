//DOM - document object model - reprezentarea vizuala a elem,entelor html in obiecte js
//1. identificam elementele html necesare din pagina
//elementele: input, buton, lista (ul, li)

//2. identificam flow-ul/procesul pentru functionalitatea de implementat
// dupa introducere textului in input, la apasarea butonului add => se adauga textul ca ultim element in lista
  //1. introduc text input
  //2. apas nuton add
  //3. adaug elemt text in lista

//3. detalii de implementare

//declaram variabile pentru elementele din pagina html
let inputElem = document.getElementById("shopping-input")
let buttonElem = document.getElementById("shopping-button")
let listElem = document.getElementById("shopping-ul")

//identificam actiunea din pagina si atasam un event listener pe el (ascultam, dupa evenimente pe acel element, pe buton)

buttonElem.addEventListener("click", addElementTotList)

//identicam pasii pe care rvem sa ii implementam cand apare evebnimentul de click
//adaugarea elementului din input in lista
function addElementTotList() {
  //1 luam textul din input
  let inputValue = inputElem.value
  console.log(inputValue)
  
  //2. adauagam un element nou in lista care contine valoarea din input
  
  //2.a creeam element li pentru a fi adaugat in lista ul
  let li = document.createElement("li");
  
  //2.b setam vaoarea elementul;ui li cu valoarea din input
  li.innerText = inputValue;
  
  //2.c atasam element li la lista ul
  listElem.appendChild(li)
}