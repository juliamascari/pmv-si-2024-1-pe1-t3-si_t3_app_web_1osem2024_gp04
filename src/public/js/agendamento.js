$(document).ready(function() {
    var calendar = $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2024-07-01',
        selectable: true,
        select: function(start, end) {
            $('#dia-escolhido').text(start.format('DD/MM/YYYY'));
        }
    });

    $('#reset').on('click', function() {
        $('#cidade').val('');
        $('#predio').val('');
        $('#andar').val('');
        $('#area').val('');
        $('#dia-escolhido').text('');
        $('input[name="fullDay"]').prop('checked', false);
        $('input[name="morning"]').prop('checked', false);
        $('input[name="afternoon"]').prop('checked', false);
    });

    $('#submit').on('click', function(event) {
        event.preventDefault();

        var cidade = $('#cidade').val();
        var predio = $('#predio').val();
        var andar = $('#andar').val();
        var area = $('#area').val();
        var diaEscolhido = $('#dia-escolhido').text().trim();
        var fullDay = $('input[name="fullDay"]').prop('checked');
        var morning = $('input[name="morning"]').prop('checked');
        var afternoon = $('input[name="afternoon"]').prop('checked');

        var horario = '';
        if (fullDay) {
            horario = 'Dia Inteiro';
        } else if (morning) {
            horario = 'Manhã';
        } else if (afternoon) {
            horario = 'Tarde';
        }

        var reserva = {
            dataEscolhida: diaEscolhido,
            cidade: cidade,
            predio: predio,
            andar: andar,
            area: area,
            horario: horario
        };

        // Armazenar a reserva no localStorage
        localStorage.setItem('reservaRealizada', JSON.stringify(reserva));
        alert('Reserva salva com sucesso!');

        // Redirecionar para a página de reservas
        window.location.href = 'reservas.html';
    });
});
