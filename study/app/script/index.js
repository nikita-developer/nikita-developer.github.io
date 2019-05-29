

window.onload = function() {
  var nomber,
      count = 3;
  nomber = Math.random() * (9 - 0 + 1);
  nomber = Math.round(nomber);
  console.log(nomber);

  document.querySelector('button').onclick = function() {
    var val = document.querySelector('input').value,
        out = document.querySelector('.out'),
        check = document.querySelector('.check');

    val = parseInt(val);
    count--;

    function funReload() {
      location.reload();
    }

    if (count > 0) {

      if (val == nomber) {
        out.innerHTML = 'Вы угадали';
        setTimeout(funReload, 3000);

      } else if (val > nomber) {
        out.innerHTML = 'Ваше число больше';
        if (count == 1) {
          check.innerHTML = 'У вас ' + count + ' попытка';
        } else if (count == 0) {
          check.innerHTML = 'У вас ' + count + ' попыток';
        } else {
          check.innerHTML = 'У вас ' + count + ' попытки';
        }
      } else if (val < nomber) {
        out.innerHTML = 'Ваше число меньше';
        if (count == 1) {
          check.innerHTML = 'У вас ' + count + ' попытка';
        } else if (count == 0) {
          check.innerHTML = 'У вас ' + count + ' попыток';
        } else {
          check.innerHTML = 'У вас ' + count + ' попытки';
        }
      };

    } else {
      check.innerHTML = 'У вас ' + count + ' попыток';
      console.log(check);
      out.innerHTML = 'Вы проиграли, страница будет перезагружена';
      setTimeout(funReload, 3000);
    };

  };
};
