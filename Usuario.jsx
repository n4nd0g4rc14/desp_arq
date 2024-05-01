import React, { useState } from 'react';
import './Usuario.css';
import Header from '../components/Header/Header';

function Usuario() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [placa, setPlaca] = useState('');
  const [nomeVeiculo, setNomeVeiculo] = useState('');
  const [veiculos, setVeiculos] = useState([]);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handlePopupConfirm = () => {
    // Verifica se a informação 1 (placa) está preenchida
    if (!placa) {
      alert('A placa é obrigatória.');
      return;
    }

    // Adiciona as informações do veículo ao estado
    setVeiculos([...veiculos, { placa, nomeVeiculo }]);
    // Limpa os campos do popup
    setPlaca('');
    setNomeVeiculo('');
    setPopupVisible(false);
  };

  const handlePlacaChange = (e) => {
    const value = e.target.value.toUpperCase(); // Converte para maiúsculas
  
    // Remove caracteres inválidos da placa
    const placaLimpa = value.replace(/[^A-Z0-9]/g, '');
  
    // Limita a placa a 7 caracteres
    const placaFormatada = placaLimpa.slice(0, 7);
  
    // Atualiza o estado com a placa formatada
    setPlaca(placaFormatada);
  };
  
  return (
    <div>
      <Header />
      <div className='img-topo'>
        <div className='desc'>Informações. Veículos. Serviços</div>
        <div className='page-name'>Perfil do Usuário</div>
      </div>
      <div className='info-usuário'>
        <div className='bv'>olá, <span className='title'>Fernando Garcia</span></div>
        <div className='section-dados'>
          <h4 className='title-dados'>Dados</h4>
          <span className='nome'>Nome:</span> <span>{/* Aqui você pode exibir o nome do usuário */}</span><br />
          <span className='cpf'>CPF:</span> <span>{/* Aqui você pode exibir o CPF do usuário */}</span><br />
          <span className='email'>Email:</span> <span>{/* Aqui você pode exibir o email do usuário */}</span><br />
          <span className='endereco'>Endereço:</span> <span>{/* Aqui você pode exibir o endereço do usuário */}</span><br />
        </div>
      </div>
      <div className='info-veiculo'>
        <div className='title-veiculo'>Meus Veículos</div>
        <button className="botao" onClick={handleButtonClick}>Adicionar Veículo</button>
        {popupVisible && (
         <div className='popup'>
            <input
              type='text'
              placeholder='Placa (obrigatório)'
              value={placa}
              onChange={handlePlacaChange}
            />
            <input
              type='text'
              placeholder='Nome do Veículo (opcional)'
              value={nomeVeiculo}
              onChange={(e) => setNomeVeiculo(e.target.value)}
            />
            <button onClick={handlePopupConfirm}>Confirmar</button>
          </div>
        )}

        <ul>
          {veiculos.map((veiculo, index) => (
            <li key={index}><span className="placa">{veiculo.placa}</span> - <span className="nomeVeiculo">{veiculo.nomeVeiculo || 'Sem nome'}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Usuario;

