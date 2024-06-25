$(document).ready(function() {
  $('#calendar').fullCalendar({
    // configurações do calendário
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'onth,agendaWeek,agendaDay'
    },
    defaultDate: '2024-05-15',
    selectable: true,
    select: function(start, end) {
      $('#dia-escolhido').text(start.format('DD/MM/YYYY'));
    }
  });

  $('#full-day, #morning, #afternoon').on('click', function() {
    var ocupacao = $(this).val();
    $('#ocupacao').text(ocupacao + '%');
  });

  $('#reset').on('click', function() {
    $('#dia-escolhido').text('');
    $('#ocupacao').text('');
  });

  $('#submit').on('click', function() {
    var cidade = $('#cidade').val();
    var predio = $('#predio').val();
    var andar = $('#andar').val();
    var diaEscolhido = $('#dia-escolhido').text();
    var ocupacao = $('#ocupacao').text();

    // Enviar dados para o servidor
    $.post('/agendamento', {
      cidade: cidade,
      predio: predio,
      andar: andar,
      diaEscolhido: diaEscolhido,
      ocupacao: ocupacao
    }, function(data) {
      console.log(data);
      // Tratar resposta do servidor
    });
  });

  // Novo codigo adicionando variavel no local storage
  $('#submit').on('click', function() {
    var cidade = $('#cidade').val();
    var predio = $('#predio').val();
    var andar = $('#andar').val();
    var diaEscolhido = $('#dia-escolhido').text();
    var ocupacao = $('#ocupacao').text();

    // Create a JSON object for the new entry
    var newEntry = {
        cidade: cidade,
        predio: predio,
        andar: andar,
        diaEscolhido: diaEscolhido,
        ocupacao: ocupacao
    };

    // Retrieve the existing data from local storage
    var agendamentoStr = localStorage.getItem('agendamento');
    var agendamentoArr;

    // If there is existing data, try to parse it into an array
    if (agendamentoStr) {
        try {
            agendamentoArr = JSON.parse(agendamentoStr);
            if (!Array.isArray(agendamentoArr)) {
                throw new Error('Data is not an array');
            }
        } catch (e) {
            console.error('Error parsing JSON from local storage:', e);
            // If there's an error, initialize an empty array
            agendamentoArr = [];
        }
    } else {
        // If no existing data, initialize an empty array
        agendamentoArr = [];
    }

    // Add the new entry to the array
    agendamentoArr.push(newEntry);

    // Convert the updated array back to a string
    var updatedAgendamentoStr = JSON.stringify(agendamentoArr);

    // Store the updated array back in local storage
    localStorage.setItem('agendamento', updatedAgendamentoStr);

    // Optionally, log the updated array to the console to confirm it's stored correctly
    console.log('Updated data stored in local storage:', agendamentoArr);
});




});