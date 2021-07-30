const userFullName = document.getElementById('name');
const userEmailId = document.getElementById('email-id');
const userTextMsg = document.getElementById('text-area');

function setLocal() {
  const localName = localStorage.getItem('name');
  const localemail = localStorage.getItem('email-id');
  const localText = localStorage.getItem('text-area');
  document.getElementById('name').value = localName;
  document.getElementById('email-id').value = localemail;
  document.getElementById('text-area').value = localText;
}

function populateForm() {
  localStorage.setItem('name', document.getElementById('name').value);
  localStorage.setItem('email-id', document.getElementById('email-id').value);
  localStorage.setItem('text-area', document.getElementById('text-area').value);
  setLocal();
}

if (!localStorage.getItem('name')) {
  populateForm();
} else setLocal();

userFullName.onchange = populateForm;
userEmailId.onchange = populateForm;
userTextMsg.onchange = populateForm;
