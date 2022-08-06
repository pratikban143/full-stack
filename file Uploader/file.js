var Choosebtn = document.getElementById('Submit');
console.dir(Choosebtn)


var Inputfeild = document.getElementById('InputFEild')

function OnclickChooseBtn() {
    var newElem = document.createElement('input');
    newElem.setAttribute("type", "file");
    newElem.setAttribute("id", "ChooseBtn");
    Inputfeild.appendChild(newElem)

    var ChooseButton = document.getElementById('ChooseBtn')

    function ChanhevalueHandler(e) {
        console.log('value changed', e)
        console.log(e.target.files[0].name)

        var fileName = document.createElement('p')
        fileName.innerText = "Your Uploaded File Name Is:"+" " +e.target.files[0].name
        Inputfeild.appendChild(fileName)
    }

    ChooseButton.addEventListener('change', ChanhevalueHandler)
}



Choosebtn.addEventListener('click', OnclickChooseBtn)

