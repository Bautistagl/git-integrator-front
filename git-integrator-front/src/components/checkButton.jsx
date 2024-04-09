import React, { useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import back from '../../axios';

function CheckOwnerButton() {
 
  const [searchResult, setSearchResult] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const { data: session } = useSession()

  const handleSearch = () => {
    // Realizar la solicitud GET a tu endpoint
    axios.get('/api/github/check', {
      params: {
        owner: session.user.name
      }
    })
    .then(response => {
      // Manejar la respuesta del servidor
      if (response.data.exists) {
        setSearchResult('Owner encontrado en la base de datos');
        // Si existen repositorios, mostrar la información
        if (response.data.repositories) {
          setRepositories(response.data.repositories);
        }
      } else {
        setSearchResult('Owner no encontrado en la base de datos');
      }
    })
    .catch(error => {
      // Manejar errores
      console.error('Error:', error);
      setSearchResult('Error al realizar la búsqueda');
    });
  };


  const handlePostToEndpoint = (fullName, installationId) => {
    // Realizar la solicitud POST a tu endpoint
    back.post('/operacionesEnCadena', {
      fullName,
      installationId
    })
    .then(response => {
      // Manejar la respuesta del servidor
      console.log(response.data);
      // Aquí puedes mostrar algún mensaje de éxito si es necesario
    })
    .catch(error => {
      // Manejar errores
      console.error('Error:', error);
      // Aquí puedes mostrar algún mensaje de error si es necesario
    });
  };


  return (
    <div>
    <button onClick={handleSearch}>Buscar</button>
    <p>{searchResult}</p>
    {repositories.length > 0 && (
      <div>
        <h2>Repositorios encontrados:</h2>
        <ul>
          {repositories.map(repository => (
            <li key={repository.id}>
              
              <p>Nombre: {repository.name}</p>
              <button onClick={() => handlePostToEndpoint(repository.fullname, repository.installation_id)}>Realizar operaciones en cadena</button>
             
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
  );
}

export default CheckOwnerButton;