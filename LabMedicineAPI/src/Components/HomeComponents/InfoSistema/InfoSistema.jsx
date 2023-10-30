import CardEstatistica from '../CardEstatistica/CardEstatistica.jsx';
import * as Styled from './InfoSistema.Style.jsx';
import React, { useState, useEffect } from 'react';
import { ImUsers, ImAidKit, ImFolderPlus } from 'react-icons/im';
import { GiRemedy, GiFoodTruck, GiHeartInside  } from "react-icons/gi";
import { PacienteService } from '../../../services/Paciente.service.jsx';
import { ConsultaService } from '../../../services/Consulta.service.jsx';
import { ExameService } from '../../../services/Exame.service.jsx';
import { MedicamentoService } from '../../../services/Medicamentos.service.jsx';
import { DietaService } from '../../../services/Dietas.service.jsx';
import { ExercicioService } from '../../../services/Exercicios.service.jsx';

function EstatisticasSistema() {
    const [pacientes, setPacientes] = useState([]);
    const [consultas, setConsultas] = useState([]);
    const [exames, setExames] = useState([]);
    const [medicamentos, setMedicamentos] = useState([]);
    const [dietas, setDietas] = useState([]);
    const [exercicios, setExercicios] = useState([]);

    const fetchData = async (endpoint) => {
        try {
        const response = await fetch(`./server/db.json`);
        const data = await response.json();
        return data[endpoint];        
        } catch (error) {
            console.error(`Erro ao obter ${endpoint}:`, error);
            return [];
        }
    }

    useEffect(() => {
        const getPacientes = async () => {
            const pacientesDoDB = PacienteService.Get();
            setPacientes(pacientesDoDB);
        };

        const getConsultas = async () => {
            const consultasDoDB = ConsultaService.Get();
            setConsultas(consultasDoDB);
          };
      
          const getExames = async () => {
            const examesDoDB = ExameService.Get();
            setExames(examesDoDB);
          }; 

          const getMedicamentos = async () => {
            const medicamentosDoDB = MedicamentoService.Get;
            setMedicamentos(medicamentosDoDB);
          };

          const getDietas = async () => {
            const dietasDoDB = DietaService.Get();
            setDietas(dietasDoDB);
          };

          const getExercicios = async () => {
            const exerciciosDoDB = ExercicioService.Get();
            setExercicios(exerciciosDoDB);
          }
          
        getPacientes();
        getConsultas();
        getExames(); 
        getMedicamentos();
        getDietas();
        getExercicios();    
    }, []);
    const totalPacientes = () => {
        return pacientes.length;
      };
    
      const totalConsultas = () => {
        return consultas.length;
      };
    
      const totalExames = () => {
        return exames.length;
      };

      const totalMedicamentos = () => {
        return medicamentos.length;
      };

      const totalDietas = () => {
        return dietas.length;
      };

      const totalExercicios = () => {
        return exercicios.length;
      };
    
      const dataCard = [
        {
          id: '1',
          icone: <ImUsers/>,
          resultado: totalPacientes(),
          legenda: 'Pacientes',
        },
        {
          id: '2',
          icone: <ImAidKit/>,
          resultado: totalConsultas(),
          legenda: 'Consultas',
        },
        {
          id: '3',
          icone: <ImFolderPlus/>,
          resultado: totalExames(),
          legenda: 'Exames',
        },
        {
          id: '4',
          icone: <GiRemedy/>,
          resultado: totalMedicamentos(),
          legenda: 'Medicamentos',
        },
        {
          id: '5',
          icone: <GiFoodTruck/>,
          resultado: totalDietas(),
          legenda: 'Dietas',
        },
        {
          id: '6',
          icone: <GiHeartInside/>,
          resultado: totalExercicios(),
          legenda: 'Exercícios',
        }
      ];
    
      return (
        <>
          <Styled.ContainerEstatisticas>
            <h2>Estatísticas do Sistema</h2>
            <Styled.ContainerCardEstatisticas>
              {dataCard.map(estatistica => (
                <CardEstatistica key={estatistica.id} dataCard={estatistica}/>
              ))}
            </Styled.ContainerCardEstatisticas>
          </Styled.ContainerEstatisticas>
        </>
      );
}

export default EstatisticasSistema;