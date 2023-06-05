var siteName = document.querySelector("#sitename")
var siteURL = document.querySelector("#siteurl")

var bookmarkList =[]
if (localStorage.getItem("list") !== null) {
  bookmarkList = JSON.parse(localStorage.getItem("list"))
  display()
}
function submit(){
   

    var listt = {
        namee:siteName.value,
        urll:siteURL.value,
   }
  bookmarkList.push(listt);
  localStorage.setItem("list", JSON.stringify(bookmarkList))

    resetForm()
    display()
}



function display(){
   
   
var temp=""

    for(var i= 0 ; i<bookmarkList.length; i++){
        var name = bookmarkList[i].namee;
      var url = bookmarkList[i].urll;
    temp+=`   <div class="bookmarkcontant">
    <h2>`+name+`</h2>
    <i class="fa-brands fa-`+name+`"class="d-inline-block "></i>
    <a class="btn btn-primary mar mart" target="_blank" href="https://`+url+`">Visit</a>
    <a onclick="deleteBookmark('`+i+`')" class="btn btn-danger mar mart" href="#">Delete</a>
    </div>`
    
}
document.getElementById("bookmarktable").innerHTML=temp;

}

function resetForm(){
    siteName.value="";
    siteURL.value="";
   
  }

function deleteBookmark(url){
  bookmarkList.splice(url, 1)
    localStorage.setItem("list", JSON.stringify(bookmarkList))
    display()
}


