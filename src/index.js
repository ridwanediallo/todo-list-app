import './style.css';

const list = document.querySelector('.list');

const todoList = [
  {
    id: 1,
    todo: 'wash the dishes',
    done: false,
  },
  {
    id: 1,
    todo: 'complete to do project',
    done: false,
  },
  {
    id: 1,
    todo: 'clean the room',
    done: false,
  },
];

for (let i = 0; i < todoList.length; i += 1) {
  list.innerHTML = ` ${list.innerHTML}
        <li class="item">
        <div class="left-itmes">
        <input type="checkbox" class="checkbox">
          <p id=${todoList[i].id} class="text">${todoList[i].todo}</p>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </li>
      <hr>
        `;
}
