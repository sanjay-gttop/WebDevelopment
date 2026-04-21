const load = document.getElementByid("download");
load.addEventListener("submit",function(){
    function1();
})
function function1(){
    let user = confirm("Do you want to continue?");
    if(user === "yes"){
        alert("Download completed");
    }else{
        alert("Download failed");
    }
}