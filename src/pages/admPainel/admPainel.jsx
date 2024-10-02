import React, { useEffect, useState } from 'react';
import './index.scss';
import TeamForm from '../../components/teamForm/teamForm';

const AdmPainel = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://backendbhcdnc.onrender.com/api/form');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  };

  // Paginação
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <table>
        <thead>
          <tr>
            <th>Contato</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Eircode</th>
            <th>Endereço</th>
            <th>Número</th>
            <th>Complemento</th>
            <th>Serviços</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.Contact}</td>
              <td>{item.Email}</td>
              <td>{item.Phone}</td>
              <td>{item.Eircode}</td>
              <td>{item.Address}</td>
              <td>{item.AddressNumber}</td>
              <td>{item.Complement}</td>
              <td>{item.Services}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Botões de paginação */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Botão de refresh */}
      <button onClick={fetchData}>Atualizar</button>
    </div>
  );
};

export default AdmPainel;
