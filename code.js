
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
