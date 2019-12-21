import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER } from '../../consts';

const Explorations = ({ match }) => {

  const [medications, setMedications] = useState([]);

  useEffect(() => {
    const getExploration = async () => {
      const { data } = await axios.get(SERVER + `exploration/booking/${match.params.id}`);
      setMedications(data.data[0].consumedMedications)

    }

    getExploration();
  }, [match]);


  if (!medications) return <p>Cargando medicaciones...</p>

  return (
    <div>
      <h2 className="text-primary">Medicamentos consumidos</h2>
      {
        medications.length > 0 ?
          <div className="card col-md-4 p-3">
            {
              medications.map(medication => (
                <div>
                  <p>{medication}</p>
                  <hr />
                </div>
              ))
            }
          </div>
          : <p>No hay medicaciones!! </p>
      }

    </div>
  );
}

export default Explorations;