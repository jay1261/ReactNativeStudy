const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const remove = document.querySelector("#delete");

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (input.value !== '') {
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = '';
    alert("등록되었습니다. 오승승");
  }
  else{
    alert("내용을 입력하세오승승");
  }
});

remove.addEventListener('click', (event) =>{
  ul.lastChild.remove();
})


