
/*
//nút lên top 
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/****************************/
const add_nk = document.getElementById("nhatki-add")
let p = document.querySelector("p")
const div = document.createElement('div')

p.appendChild(div)
function add() {
    output = `
    <div>
    <input type="text" id="nk-nd">
    <p>nhật kí</p>
    </div>`
    document.getElementById('nhatki-add').innerHTML+=output;

};

fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(json => {
        //tạo list
        const listItem = document.createElement('li');
        listItem.innerHTML = json.slip.advice;
        // đưa list item vào ul
        const todoList = document.getElementById('todo-list');
        todoList.appendChild(listItem);
    })

