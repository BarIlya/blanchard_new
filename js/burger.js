document.querySelector('.burger').addEventListener('click', function(){
  document.querySelector('body').classList.toggle('lock');
  document.querySelector('.burger').toggle('_active');
})