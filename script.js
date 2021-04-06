var inputText = document.getElementById("txt"),
    items = document.querySelectorAll("#list li"),
    todos = [],
    index;

for (var i = 0; i < items.length; i++) {
    todos.push();
}

for (var i = 0; i < items.length; i++) {
    items[i].onclick = function () {
        index = todos.indexOf(this.innerText);
        nputText.value = this.innerText;
    };

}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'SPAN') {
        ev.target.classList.toggle('checked');
    }
}, false)

var liNode = document.getElementsByTagName("LI");
var i;
for (i = 0; i < liNode.length; i++) {
    var spanDelete = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    spanDelete.className = "close";
    spanDelete.appendChild(txt)
    liNode[i].appendChild(spanDelete);
}

function refreshArray() {
    todos.length = 0;
    items = document.querySelectorAll("#list span");
    for (var i = 0; i < items.length; i++) {
        todos.push(items[i].innerText);
    }
}

function add() {
    if (inputText.value === '') {
        alert('please write something')
    } else {
        var listNode = document.getElementById("list"),
            textNode = document.createTextNode(inputText.value),
            liNode = document.createElement("LI");
        span = document.createElement('SPAN')
        span.className = "task"

        var spanDelete = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        spanDelete.className = "close";

        listNode.appendChild(liNode);
        spanDelete.appendChild(txt);
        liNode.appendChild(span)
        span.appendChild(textNode)
        liNode.appendChild(spanDelete)

        var close = document.getElementsByClassName("close");
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var li = this.parentElement;
                li.style.display = "none";
            }
        }

        inputText.value = ''
        refreshArray();
        var task = document.querySelectorAll('.task');
        for (var i = 0; i < task.length; i++) {
            task[i].onclick = function (e) {
                index = todos.indexOf(e.target.innerHTML);
                inputText.value = e.target.innerHTML;
            }
        }

    }
}

function edit() {
    items[index].innerText = inputText.value;
    inputText.value = ''



}