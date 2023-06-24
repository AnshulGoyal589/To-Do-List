let item=document.getElementsByClassName("list-group-item");
let itemsList=document.querySelector("ul");
let inputAdd=document.getElementById("addForm");
let inputSearch=document.getElementById("filter");
let themeOptions=document.querySelectorAll('input[type="radio"]');





//storing in local memory






function storeTheme(theme){
    localStorage.setItem( "theme", theme);

} 

function storeItem(arrayItem){
    localStorage.setItem( "cItem", arrayItem );
}

function applyTheme(){

    const activeTheme=localStorage.getItem("theme");

    themeOptions.forEach( (i)=>{

        if(i.id===activeTheme){

            i.checked=true;

        }

    } ); 

}

function applyItem(){

    

}

themeOptions.forEach( (theme)=>{

    theme.addEventListener( "click", ()=>{

        storeTheme(theme.id);
        applyTheme();

    } ); 

} );

storeItem(Array.from(item));
// Array.from(item).forEach( (i)=>{

    // i.addEventListener ("click",()=>{

        // console.log(i.childNodes[0].textContent);
        // storeItem(i.childNodes[0].textContent);


    // })

// } );
document.onload=applyItem();
document.onload = applyTheme()



























inputAdd.addEventListener("submit",addItem);
itemsList.addEventListener("click",deleteDo);
inputSearch.addEventListener("keyup",searchDo);


function addItem(e){
    e.preventDefault();
    let newLi=document.createElement("li");
    newLi.className="list-group-item";
    newLi.textContent=e.target[0].value;
    let newDel=document.createElement("button");
    newDel.className="btn btn-danger btn-sm float-end delete";
    newDel.textContent="X";
    newLi.append(newDel);
    itemsList.append(newLi);
}
function deleteDo(e){
    if(e.target.classList.contains("btn-danger")){
        if(confirm("Do you really want to delete this element??")){
            itemsList.removeChild(e.target.parentElement);
        }
    }
}
function searchDo(e){

    let item=e.target.value.toLowerCase();
    console.log(e.target.value.toLowerCase());
    let searchSpace= document.getElementsByTagName("li") ;

    Array.from(searchSpace).forEach( (i)=>{
        let text=i.childNodes[0].textContent.toLowerCase();
        if( text.includes(item)  ){
            i.style.display="block";
        }
        else{
            i.style.display="none";
        }
    });
        
}