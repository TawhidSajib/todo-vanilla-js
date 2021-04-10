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
        inputText.value = this.innerText;
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
    items = document.querySelectorAll("#list .task");
    for (var i = 0; i < items.length; i++) {
        todos.push(items[i].innerText);
    }
}

function add() {
    if (inputText.value === '') {
        alert('please write something')
    } else {
        console.log(inputText.value)
        var listNode = document.getElementById("list"),
            textNode = document.createTextNode(inputText.value),
            liNode = document.createElement("LI");
        span = document.createElement('SPAN')
        span.className = "task"

        var edit = document.createElement('button')
        edit.textContent = "Edit"
        edit.className = "editBtn"

        var spanDelete = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        spanDelete.className = "close";


        listNode.appendChild(liNode);
        spanDelete.appendChild(txt);
        liNode.appendChild(span)
        span.appendChild(textNode)

        liNode.appendChild(edit)
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
        var task = document.querySelectorAll('.editBtn');
        for (var i = 0; i < task.length; i++) {
            task[i].onclick = function () {
                console.log(this.parentElement);

                let remove = document.querySelector("#list .active");
                if (remove) {
                    remove.classList.remove('active');
                }

                setTimeout(() => {
                    let child = this.parentElement.querySelector("#list .task");
                    let active = this.parentElement.querySelector("#list .editBtn");
                    active.classList = "active editBtn"
                    index = todos.indexOf(child.innerHTML);
                    inputText.value = child.innerHTML;
                }, 500)

            }
        }

    }
}

function edit() {
    items[index].innerText = inputText.value;
    todos[index] = inputText.value;
    inputText.value = ''
}