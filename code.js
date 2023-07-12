
function hideNothingImage(x){
 var nothing = document.getElementById("nothingImage" + x)
 nothing.style.display = "none"
}

function showGoodJobImage(x){
    var goodJob = document.getElementById("goodJobImage" + x)
    goodJob.style.visibility = "visible"
}

function hideGoodJobImage(x){
    var goodJob = document.getElementById("goodJobImage" + x)
    goodJob.style.visibility = "hidden"
}


function showNothingImage(x){
    var nothing = document.getElementById("nothingImage" + x)
    nothing.style.display = "inline"
}

function showYayImage(){
    var yay = document.getElementById("yayImage")
    yay.style.visibility = "visible"
}

function hideYayImage(){
    var yay = document.getElementById("yayImage")
    yay.style.visibility = "hidden"
}

function checkCheckboxes(x){
    checkCompletion();
    var checkboxes = document.getElementById(x+"Form").getElementsByClassName(x)
    for(var i = 0; i < checkboxes.length; i++){
        if(!checkboxes[i].checked){
            hideGoodJobImage(x);
            showNothingImage(x);
            return;
        }
    }
    hideNothingImage(x);
    showGoodJobImage(x);
}

function checkCompletion(){
    var checkboxes = document.getElementsByClassName("checkbox");
    for(var i = 0; i < checkboxes.length; i++){
        if(!checkboxes[i].checked){
            hideYayImage();
            return;
        }
    }
    showYayImage();
}

function addTask(){
    document.getElementById("weirdForm").style.visibility = "visible"
}

function cancel(){
    document.getElementById("newTask").value = ""
    document.getElementById("day").value = ""
    document.getElementById("weirdForm").style.visibility = "hidden"
}

function ok(){
    var task = document.getElementById("newTask").value;
    var day = parseInt(document.getElementById("day").value);
    if(!Number.isInteger(day) || day < 1 || day > 7){
        cancel();
        return;
    }
    var form = document.getElementById(day + "Form");
    var input = document.createElement("input")
    input.type = "checkbox"
    input.name = "Task"
    input.classList.add('checkbox', day)
    input.addEventListener('click', () => {checkCheckboxes(day);});
    var label = document.createElement("label")
    label.htmlFor = "Task"
    label.innerHTML = task
    var div = document.createElement("div")
    form.appendChild(div);
    div.appendChild(input);
    div.appendChild(label);
    checkCheckboxes(day)
    cancel()
}
