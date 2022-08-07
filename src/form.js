const openForm = document.getElementById('open_form');
const closeForm = document.getElementById('close_form');
const content = document.getElementById('content');

openForm.addEventListener('click', (e) => {
  e.preventDefault();
  content.classList.add('active');
})

closeForm.addEventListener('click', ()=> {
    content.classList.remove('active');
})
