var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var inputItem = $('input');
var btn = $('button');

var renderList = $('.render_list')

console.log(inputItem);
console.log(btn);
console.log(renderList);
// console.log(getNameToDO);

btn.onclick = function () {
    console.log(inputItem.value)
    // getNameToDO.innerText = inputItem.value;
    var html = `
    <div class="render_list-item" style="margin-top: 10px">
        <div class="render_list-str">
            <div class="box_circle"></div>
            <p class="name_list">${inputItem.value}</p>
        </div>
        <i class="fa-solid fa-xmark icon_cancel" onclick="deleteToDo(this)"></i>
    </div>
    `

    renderList.insertAdjacentHTML('beforeEnd', html);
    
    console.log(inputItem.value = '')

    // console.log(renderList.value)
    renderList.addEventListener('click', function (e) {
        console.log(e.target)
        // Kiểm tra xem người dùng click vào phần nào
        if (e.target.closest('.render_list-str')) {
            const clickedItem = e.target.closest('.render_list-str');
            const text = clickedItem.querySelector('.name_list');
            const circle = clickedItem.querySelector('.box_circle');
    
            // Đổi giao diện khi bấm
            text.style.textDecoration = 'line-through';
            circle.style.border = 'none';
            circle.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #ff643b; width: 100%; height: 100%"></i>';
            circle.style.backgroundColor = '';
        }
    });

}

function deleteToDo(name) {
    var circleClose = $('.icon_cancel')
    var renderListItem = name.closest('.render_list-item');

    renderListItem.remove();
}




