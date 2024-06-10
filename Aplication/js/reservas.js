const tabelaReservas = document.getElementById('tabelaReservas');
const tbody = tabelaReservas.querySelector('tbody');

const dataInput = document.getElementById('data');
const cidadeInput = document.getElementById('cidade');
const predioInput = document.getElementById('predio');
const andarInput = document.getElementById('andar');
const areaInput = document.getElementById('area');

const reservas = [
    {
        dataEscolhida: '10/06/2024',
        cidade: 'São Paulo',
        predio: 'Prédio A',
        andar: '3',
        area: 'Sala de Reuniões',
        horario: 'Dia Inteiro'
    },
    {
        dataEscolhida: '12/06/2024',
        cidade: 'Rio de Janeiro',
        predio: 'Prédio B',
        andar: '5',
        area: 'Auditório',
        horario: 'Manhã'
    },
    {
        dataEscolhida: '14/06/2024',
        cidade: 'Belo Horizonte',
        predio: 'Prédio C',
        andar: '1',
        area: 'Sala de Treinamento',
        horario: 'Tarde'
    }
];

function filtrarReservas() {
    const data = dataInput.value;
    const cidade = cidadeInput.value.toLowerCase();
    const predio = predioInput.value.toLowerCase();
    const andar = andarInput.value;
    const area = areaInput.value.toLowerCase();

    const reservasFiltradas = reservas.filter(reserva => {
        return (
            (reserva.dataEscolhida === data || !data) &&
            (reserva.cidade.toLowerCase().includes(cidade) || !cidade) &&
            (reserva.predio.toLowerCase().includes(predio) || !predio) &&
            (reserva.andar === andar || !andar) &&
            (reserva.area.toLowerCase().includes(area) || !area)
        );
    });

    // Limpar o conteúdo do tbody
    tbody.innerHTML = '';

    // Inserir as reservas filtradas na tabela
    reservasFiltradas.forEach(reserva => {
        const row = document.createElement('tr');

        const dataCell = document.createElement('td');
        dataCell.textContent = reserva.dataEscolhida;
        row.appendChild(dataCell);

        const cidadeCell = document.createElement('td');
        cidadeCell.textContent = reserva.cidade;
        row.appendChild(cidadeCell);

        const predioCell = document.createElement('td');
        predioCell.textContent = reserva.predio;
        row.appendChild(predioCell);

        const andarCell = document.createElement('td');
        andarCell.textContent = reserva.andar;
        row.appendChild(andarCell);

        const areaCell = document.createElement('td');
        areaCell.textContent = reserva.area;
        row.appendChild(areaCell);

        const horarioCell = document.createElement('td');
        horarioCell.textContent = reserva.horario;
        row.appendChild(horarioCell);

        tbody.appendChild(row);
    });
}

// Event listeners para os inputs
dataInput.addEventListener('input', filtrarReservas);
cidadeInput.addEventListener('input', filtrarReservas);
predioInput.addEventListener('input', filtrarReservas);
andarInput.addEventListener('input', filtrarReservas);
areaInput.addEventListener('input', filtrarReservas);

// Chamada inicial para exibir todas as reservas ao carregar a página
filtrarReservas();
