var addButton =document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton=document.getElementById('remove');
removeButton.addEventListener('click' , removeItem);


var ul = document.getElementById('list')
var li;

function addItem(){

    var input= document.getElementById('input');
    var item =  input.value;
    ul=document.getElementById('list');
    var textnode=document.createTextNode(item);

    if(item===''){
return false;
    } else{
//create li
        li=document.createElement('li');
        //create checkBox
        var checkBox = document.createElement('input');
        checkBox.type='checkbox' ;
        checkBox.setAttribute('id' , 'check') ;
        //create label
        var label = document.createElement('label');
        label.setAttribute('for','item')
        //adding all these   items to webPAge

        ul.appendChild(label);
        li.appendChild(checkBox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        
        input.value=''; 

        setTimeout(()=>{
            li.className='visual';
        },5  );

// ul.appendChild(li);
// li.appendChild(checkBox);
// li.appendChild(label);
// ul.insertBefore(li,ul.childNodes[0]);


    }




}

function removeItem(){

    li=ul.children;
   for(let i=0;i<li.length;i++){
      while( li[i] &&li[i].children[0].checked){
           ul.removeChild(li[i]);
      }
   }


}