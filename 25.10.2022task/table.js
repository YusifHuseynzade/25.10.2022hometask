let submitbtn = document.getElementById('submit');
let input = document.querySelector('.input');
let input2 = document.querySelector('.input2');


["keydown", "keyup"].forEach(js1 => {
    input.addEventListener(js1, function() {
        let lastletter = input.value[input.value.length - 1];
            if(!isNaN(lastletter) || lastletter == ' ' || lastletter == '.' || lastletter == '@')  {
                input.value = input.value.slice(0,-1);
                alert("Ad ve soyad yalniz herflerden ibaret olmalidir!");
            }
    })
});
["keydown", "keyup"].forEach(js1 => {
    input2.addEventListener(js1, function() {
        let lastletter = input2.value[input2.value.length - 1];
            if(!isNaN(lastletter) || lastletter == ' ' || lastletter == '.' || lastletter == '@')  {
                input2.value = input2.value.slice(0,-1);
                alert("Ad ve soyad yalniz herflerden ibaret olmalidir!");
            }
    })
});
submitbtn.addEventListener('click',function(){
    let surname = this.previousElementSibling;
    let name = surname.previousElementSibling;
    surname.style.borderColor = '#ced4da';
    name.style.borderColor = '#ced4da';
    if (name.value.length < 3 && surname.value.length < 3)
    {
        alert("Ad ve Soyad uc herfden az olmamalidir!")
    }
    else if (name.value.length >= 3 && surname.value.length >= 3) {
        let list = document.getElementById('list');
        list.innerHTML+=`<li class="list-group-item">
        <div class="row align-items-center">
           <table>
              <tr class="text-center">
                <td class="col-md-3">${name.value}</td>
                <td class="col-md-3">${surname.value}</td>
                <td class="col-md-6"><div class="justify-content-between">
                    <button onclick="this.parentElement.parentElement.parentElement.style.backgroundColor ='red'" class="btn btn-success done-btn col-md-5 me-2">Redakte Et</button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" class="btn btn-danger col-md-5">Sil</button>
                    </div>
                </td>
              </tr>
           </table>
        </div>
    </li>`
        surname.value = "";
        name.value="";
        checkAllItem();
    }
})

