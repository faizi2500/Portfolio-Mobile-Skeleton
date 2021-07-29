const userFullName = document.getElementById('name');
const userEmailId = document.getElementById('email-id');
const userTextMsg = document.getElementById('text-area');

if (!localStorage.getItem('name')) {
  populateForm();
} else setLocal();

function populateForm() {
  localStorage.setItem('name', document.getElementById('name').value);
  localStorage.setItem('email-id', document.getElementById('email-id').value);
  localStorage.setItem('text-area', document.getElementById('text-area').value);
  setStorage();
}