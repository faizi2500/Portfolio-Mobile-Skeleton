const userFullName = document.getElementById('name');
const userEmailId = document.getElementById('email-id');
const userTextMsg = document.getElementById('text-area');

if (!localStorage.getItem('name')) {
  populateForm();
} else setLocal();


