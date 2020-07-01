


document.addEventListener('DOMContentLoaded', function () {
  const submit = document.getElementById('submit');
  const loader = document.getElementById('loader');
  const check = document.getElementById('check');

  console.log(submit);
  submit.addEventListener('click', function(e) {
    console.log('click');
    loader.classList.add('active');    
    check.classList.add('active'); 
  });
});
