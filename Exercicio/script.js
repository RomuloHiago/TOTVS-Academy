document.addEventListener('DOMContentLoaded', function() {
  var adicionarLinhaBtn = document.querySelector('#adicionar-linha');
  var tabelaDinamica = document.querySelector('.tabela-dinamica');
  var contadorLinhas = 1;

////////CRIANDO O CONTADOR DE LINHAS//////////  

  adicionarLinhaBtn.addEventListener('click', function() {
    if (contadorLinhas <= 4) {
      var novaLinha = document.createElement('tr');

      for (var i = 0; i < 4; i++) {
        var cell = novaLinha.insertCell(i);
        var input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control';
        input.classList.add('column-' + (i + 1))

        if ( i === 3 ) {
          input.setAttribute ('readonly', '')
        };

        cell.appendChild(input);
      }

                ///BOTÃO DE SOMA 

      var resultadoCell = novaLinha.insertCell(4);
      var btnSomar = document.createElement('button');
      btnSomar.type = 'button';
      btnSomar.className = 'btn btn-success btn-somar-coluna';
      btnSomar.innerHTML = 'Somar';
      resultadoCell.appendChild(btnSomar);


                ///BOTÃO DE REMOVER

      var btnRemover = document.createElement('button');
      btnRemover.type = 'button';
      btnRemover.innerHTML = 'Remover';
      btnRemover.className = 'btn btn-danger btn-remover';
      var removerCell = novaLinha.insertCell(5);
      removerCell.appendChild(btnRemover);

      tabelaDinamica.querySelector('tbody').appendChild(novaLinha);

      contadorLinhas++;
    } else {
      alert('Máximo de 5 linhas!!');
    }
  });





//////////// SOMA DOS BOTOES 'SOMAR COLUNA' 1,2 E 3//////////////////

  tabelaDinamica.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-somar-coluna')) {
      var linha = event.target.parentNode.parentNode;
      var inputs = linha.getElementsByTagName('input');
      var resultadoInput = linha.cells[3].getElementsByTagName('input')[0];
      var soma = 0;

      for (var i = 0; i < inputs.length - 1; i++) {
        soma += parseInt(inputs[i].value) || 0;
      }

      resultadoInput.value = soma;
    } else if (event.target.classList.contains('btn-somar-coluna-1')) {
      var resultadoColuna1 = somarColuna(0);
      tabelaDinamica.querySelector('.resultado-coluna-1').value = resultadoColuna1;
    } else if (event.target.classList.contains('btn-somar-coluna-2')) {
      var resultadoColuna2 = somarColuna(1);
      tabelaDinamica.querySelector('.resultado-coluna-2').value = resultadoColuna2;
    } else if (event.target.classList.contains('btn-somar-coluna-3')) {
      var resultadoColuna3 = somarColuna(2);
      tabelaDinamica.querySelector('.resultado-coluna-3').value = resultadoColuna3;
    } else if (event.target.classList.contains('btn-remover')) {
      var linha = event.target.parentNode.parentNode;
      linha.parentNode.removeChild(linha);
      contadorLinhas--;
    }
  });

  var somar1 = document.querySelector('.btn-somar-coluna-1')    
    somar1.addEventListener('click', function(){
      somarColuna (1)
    })
  var somar1 = document.querySelector('.btn-somar-coluna-2')
    somar1.addEventListener('click', function(){
      somarColuna (2)
    })
  var somar1 = document.querySelector('.btn-somar-coluna-3')
    somar1.addEventListener('click', function(){
      somarColuna (3)
    })

  function somarColuna(coluna) {
    var soma = 0;
    var inputs = document.querySelectorAll('.column-' + coluna)

    var result = document.getElementById('result' + coluna  )


    inputs.forEach(coluna  => {
      soma += parseInt(coluna.value);

    });
   
    result.value = soma;
   
  }
});





