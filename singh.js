const add_button = document.getElementById("fbutton");
const itemList = document.getElementById('items')
const form = document.getElementsByClassName('row gy-2 gx-3 align-items-center');
const form_desc = document.getElementById('autoSizingInput');
const form_amount = document.getElementById('autoSizingInputGroup')
const form_category = document.getElementById('autoSizingSelect')
add_button.addEventListener('click',fun1)

function fun1(e)
{
    e.preventDefault();
    let desc = form_desc.value
    let amount = form_amount.value
    let category = form_category.value
    //console.log(desc,amount,category)
    const dlt = document.createElement('button');
    const edt = document.createElement('button');
    edt.className='btn btn-success btn-sm float-right';
    edt.textContent='Edit';
    edt.setAttribute('style',"float: right;")
    dlt.className='btn btn-danger btn-sm float-right delete';
    dlt.textContent='Delete';
    dlt.setAttribute('style',"float: right;")
    const node = document.createElement('li');
    node.className='list-group-item';
    node.textContent=`${desc} ${amount} ${category}`
    itemList.appendChild(node)
    node.appendChild(dlt)
    node.appendChild(edt)




    var doo = {description:desc, amt:amount, cato:category};
    var co = JSON.stringify(doo);
    localStorage.setItem(desc,co);

    
}

itemList.addEventListener('click', removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
    else if(e.target.className=='btn btn-success btn-sm float-right')
    {
        e.preventDefault();
        var li = e.target.parentElement;

        var temp1 = li.childNodes[0].textContent
        var t1 = String(temp1).split(" ")
        var tt1 = t1[0];
        var tt2 = t1[1];
        var tt3 = t1[2];
        form_desc.value=tt1
        form_amount.value=Number.parseInt(tt2);
        form_category.value=tt3
        itemList.removeChild(li);

    }
  }