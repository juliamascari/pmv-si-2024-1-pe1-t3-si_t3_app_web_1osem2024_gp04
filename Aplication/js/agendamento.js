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
});