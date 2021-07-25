"use strict";
let formEL = document.getElementById('myform')
formEL.addEventListener('submit', funsubmit)
let tableEL = document.getElementById('table')
let tbodyEL = document.getElementById('tbody')
tableEL.appendChild(tbodyEL)


let bookname
let bookprice
let bookpage
let total = 0
let bookarray = []
function funsubmit(event) {
    event.preventDefault();
    bookname = event.target.bookname.value
    console.log(bookname)
    bookprice = event.target.myselect.value
    console.log(bookprice)

    total =Number(total + bookprice)
    bookpage = getrandompages(1, 500)
    console.log(bookpage)
    new Book(bookname, bookpage,bookprice,total)
    rendertable()
    renderfooter()
    // var rowCount = tableEL.rows.length;
    // for (var i = rowCount - 1; i > 0; i--) {
    //     tableEL.deleteRow(i);
    // }
    // readlocal()
    // rendertable()
    // renderfooter()



}
function getrandompages(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function Book(bookname, bookpage, bookprice, total) {
    this.bookname = bookname;
    this.bookpage = bookpage;
    this.bookprice = bookprice;
    this.total = total;
    bookarray.push(this)
    localStorage.setItem('localbook', JSON.stringify(bookarray));
}
console.log(bookarray)




function rendertable() {
  
    for (let i = 0; i < bookarray.length; i++) {
        let trEL = document.createElement('tr')

        let tdbooknameEL = document.createElement('td')
    
        tdbooknameEL.textContent = `${bookarray[0].bookname}`
        trEL.appendChild(tdbooknameEL)

        
        let tdpagenum = document.createElement('td')
        tdpagenum.textContent = `${bookarray[0].bookpage}`
        trEL.appendChild(tdpagenum)
        
        let tdprice = document.createElement('td')
        tdprice.textContent = `${bookarray[0].bookprice}`
        trEL.appendChild(tdprice)
        
        tbodyEL.appendChild(trEL)
        
    }
}
console.log(bookarray.length)


function renderfooter()
{
    let trEL = document.createElement('tr')

    let tdtotalEL = document.createElement('td')
  
    tdtotalEL.textContent = `${total}`
    trEL.appendChild(tdtotalEL)
    tbodyEL.appendChild(trEL)
}
function readlocal(){
    let stringbook = localStorage.getItem('localbook');
   let objectlocal =JSON.parse(stringbook)
    if( objectlocal!== null)
    {
       
        bookarray=objectlocal
        console.log(bookarray.length)
        console.log(bookarray)
        rendertable()
        renderfooter()

    }else{}
}
