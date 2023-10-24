document.addEventListener('DOMContentLoaded', function () {
    let string = '';
    let keys = document.querySelectorAll('.key');
    keys.forEach((key) => {
      key.addEventListener('click', (e) => {
       
        if (e.target.innerHTML == '=') {
          let result = eval(string);
       
          document.getElementById('input').value = result;
          string = result;
        } else if (e.target.innerHTML == 'AC') {
          string = ' ';
          document.getElementById('input').value = string;
        } else {
          string += e.target.innerHTML;
          document.getElementById('input').value = string;
        }
      });
    });
  });
  