import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { format } from 'date-fns';
import './index.scss';
import TeamForm from '../../components/teamForm/teamForm';

const AdmPainel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [filterProvider, setFilterProvider] = useState(true);
  const [filterClient, setFilterClient] = useState(true);

  // Função para realizar login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backendbhcdnc.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid username or password');
      }

      const data = await response.json();
      setToken(data.token);
      setIsAuthenticated(true);
      fetchData(data.token);
    } catch (error) {
      setError(error.message);
    }
  };

  // Função para buscar os dados do painel
  const fetchData = async (jwtToken) => {
    try {
      const response = await fetch('https://backendbhcdnc.onrender.com/api/admin', {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Erro ao buscar os dados');
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  };

  // Função para excluir um dado
  const handleDelete = async (id) => {
    if (window.confirm('Você tem certeza que deseja excluir este item?')) {
      try {
        const response = await fetch(`https://backendbhcdnc.onrender.com/api/admin/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao excluir o dado');
        }

        // Atualiza os dados após exclusão
        fetchData(token);
      } catch (error) {
        console.error('Erro ao excluir o dado:', error);
      }
    }
  };

  // Função para exportar os dados para Excel
  const exportToExcel = () => {
    const filteredData = data.filter(item =>
      (filterProvider && item.userType === 'provider') ||
      (filterClient && item.userType === 'client')
    );

    const exportData = filteredData.map(item => ({
      Contato: item.Contact,
      Email: item.Email,
      Telefone: item.Phone,
      Eircode: item.Eircode,
      Endereço: item.Address,
      Número: item.AddressNumber,
      Complemento: item.Complement,
      Serviços: item.Services,
      'Data de Cadastro': format(new Date(item.createdAt), 'dd/MM/yyyy'), // Formatação da data aqui
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Dados');
    XLSX.writeFile(wb, 'dados_exportados.xlsx');
  };

  // Paginação
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredData = data.filter(item =>
    (filterProvider && item.userType === 'provider') ||
    (filterClient && item.userType === 'client')
  );

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div>
      <h1>Painel Administrativo</h1>

      {!isAuthenticated ? (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
      ) : (
        <div>
          <div className="filters">
            <label>
              <input
                type="checkbox"
                checked={filterProvider}
                onChange={() => setFilterProvider(prev => !prev)}
              />
              Prestadores
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterClient}
                onChange={() => setFilterClient(prev => !prev)}
              />
              Clientes
            </label>
          </div>

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
                <th>Data de Cadastro</th>
                <th>Ações</th> {/* Coluna de ações para o botão de excluir */}
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
                  <td>{format(new Date(item.createdAt), 'dd/MM/yyyy')}</td>
                  <td>
                    <button onClick={() => handleDelete(item._id)}>Excluir</button> {/* Botão de excluir */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={exportToExcel}>Exportar para Excel</button>

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

          <button onClick={() => fetchData(token)}>Atualizar</button>
        </div>
      )}
    </div>
  );
};

export default AdmPainel;
