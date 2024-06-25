const tabelaReservas = document.getElementById('tabelaReservas');
    const tbody = tabelaReservas.querySelector('tbody');

    const dataInput = document.getElementById('data');
    const cidadeInput = document.getElementById('cidade');
    const predioInput = document.getElementById('predio');
    const andarInput = document.getElementById('andar');
    const areaInput = document.getElementById('area');

    const reservas = [
      {
        dataEscolhida: '01/07/2024',
        cidade: 'São Paulo',
        predio: 'Edifício Pátio Victor Malzoni',
        andar: '3',
        area: 'Estação de Trabalho',
        horario: 'Dia Inteiro'
      },
      {
        dataEscolhida: '05/07/2024',
        cidade: 'Rio de Janeiro',
        predio: 'Edifício Pátio Victor Malzoni',
        andar: '5',
        area: 'Estação de Trabalho',
        horario: 'Manhã'
      },
    ];

    // Verificar se há uma reserva realizada armazenada no localStorage
    const reservaRealizada = JSON.parse(localStorage.getItem('reservaRealizada'));

    if (reservaRealizada) {
      reservas.push(reservaRealizada);
      localStorage.removeItem('reservaRealizada');
    }

    // Função para exibir as reservas na tabela
    function exibirReservas(reservas) {
      tbody.innerHTML = ''; // Limpar o conteúdo do tbody
      reservas.forEach(reserva => {
        const row = document.createElement('tr');

        // Formatar a data para dd/mm/aaaa
        const dataFormatada = formatarData(reserva.dataEscolhida);

        const dataCell = document.createElement('td');
        dataCell.textContent = dataFormatada;
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

    function formatarData(data) {
      // Verifica se a data está no formato esperado 'aaaa-mm-dd'
      if (!/\d{4}-\d{2}-\d{2}/.test(data)) {
        return data; 
      }
      
      // Separa a data em ano, mês e dia
      const partes = data.split('-');
      const ano = partes[0];
      const mes = partes[1];
      const dia = partes[2];
      
      // Retorna a data formatada 'dd/mm/aaaa'
      return `${dia}/${mes}/${ano}`;
    }
    

    // Exibir as reservas inicialmente
    exibirReservas(reservas);

    function filtrarReservas() {
      const data = dataInput.value.trim();  
      const cidade = cidadeInput.value.trim();
      const predio = predioInput.value.trim();
      const andar = andarInput.value.trim();
      const area = areaInput.value.trim();
    
      const reservasFiltradas = reservas.filter(reserva => {
        return (
          (reserva.dataEscolhida === data || data === '') &&
          (reserva.cidade === cidade || cidade === '') &&
          (reserva.predio === predio || predio === '') &&
          (reserva.andar === andar || andar === '') &&
          (reserva.area === area || area === '')
        );
      });
    
      exibirReservas(reservasFiltradas);
    }
    

    // Event listeners para os inputs
    dataInput.addEventListener('input', filtrarReservas);
    cidadeInput.addEventListener('input', filtrarReservas);
    predioInput.addEventListener('input', filtrarReservas);
    andarInput.addEventListener('input', filtrarReservas);
    areaInput.addEventListener('input', filtrarReservas);
