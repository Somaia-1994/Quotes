var inputName=document.getElementById('bookmarkName')
var inputUrl=document.getElementById('websiteUrl')
var submitBtn=document.getElementById('submitBtn')
var tableBody=document.getElementById('tableBody')

var allData=[];
if(localStorage.getItem('allBook'));{
    getData()
   
}



//validation
 function validName(){
    var nameValid=/^[A-Z][a-z0-9]{3,9}/;
    var x=nameValid.test(inputName.value);
    if(nameValid.test(inputName.value)){
        inputName.classList.remove("is-invalid");
        inputName.classList.add("is-valid")
    }
    else{
        inputName.classList.remove("is-valid");
        inputName.classList.add("is-invalid")
    }
 }
 function validUrl(){
    var nameUrl=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    var x=nameUrl.test(inputUrl.value);
    if(nameUrl.test(inputUrl.value)){
        inputUrl.classList.remove("is-invalid");
        inputUrl.classList.add("is-valid")
    }
    else{
        inputUrl.classList.remove("is-valid");
        inputUrl.classList.add("is-invalid")
    }
  
 }
 



//add bookmark
function addBook(){
   
    var usrData={
        siteName : inputName.value,
        siteUrl : inputUrl.value,
    }
    allData.push(usrData)
    saveData();
    clearInput();
    inputUrl.classList.remove("is-valid");
    inputName.classList.remove("is-valid");
  
    display(allData);
}

//clear 
function clearInput(){
    inputName.value='';
    inputUrl.value='';

}

//localstorage
function saveData(){
    localStorage.setItem('allBook', JSON.stringify(allData));
}

function getData(){
   allData=JSON.parse(localStorage.getItem('allBook'));
}

//display

function display(array){
    var boxs="";
    for(var i= 0; i< array.length; i++){
       boxs += `<tr>
        <td>${i+1}</td>
        <td>${array[i].siteName}</td>
        <td><a href="${array[i].siteUrl}" class="btn btn-outline-info" target="_blank">visit</a></td>
        <td>
          <button onclick=" deleteBook(${i})"  class="btn btn-outline-danger">Delete</button>
        </td>

       </tr> 
         ` ;
         tableBody.innerHTML = boxs;
    }
}

//delete function
 function deleteBook(index){
    allData.splice(index,1);
    display(allData);
    saveData()

 }