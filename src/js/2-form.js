const input = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};
const fillForm = () => {
  try {
    if (formDataFromLS === null) {
      return;
    }
    const formDataFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    formData = formDataFromLS;
    for (const key in formDataFromLS) {
      input.elements[key].value = formDataFromLS[key];
    }
  } catch (err) {
    console.log(err);
  }
};
fillForm();
const onFormField = event => {
  const { target: formFieldEl } = event;
  const fieldValue = formFieldEl.value;
  const fieldName = formFieldEl.name;
  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
const onFeedbackSubmit = event => {
  event.preventDefault();
  const { email, message } = formData;

  if (!email.trim() || !message.trim()) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
};
input.addEventListener('input', onFormField);
input.addEventListener('submit', onFeedbackSubmit);
