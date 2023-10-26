import { useForm } from 'react-hook-form';
import { InputComponent } from '../../InputComponents/InputComponent.jsx';
import { PacienteService } from '../../../services/Paciente.service.jsx';
import { Switch } from 'antd';

export const FormPaciente = () => {

    const genero = [
        {
            id: 1,
            value: 'f',
            label: 'Feminino'
        },
        {
            id: 2,
            value: 'm',
            label: 'Masculino'
        },
        {
            id: 3,
            value: 'n',
            label: 'Prefiro não responder'
        }
    ];

    const estadoCivil = [
        {
            id: 1,
            value: 'S',
            label: 'Solteiro(a)'
        },
        {
            id: 2,
            value: 'C',
            label: 'Casado(a)'
        },
        {
            id: 3,
            value: 'V',
            label: 'Viuvo(a)'
        },
        {
            id: 4,
            value: 'D',
            label: 'Divorciado(a)'
        },
        {
            id: 5,
            value: 'O',
            label: 'Outro(a)'
        }
    ];

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const createPaciente = (pacienteData) => {
        PacienteService.CreatePaciente(pacienteData)
        .then(response => {
            console.log('Paciente cadastrado com sucesso:', response);
            reset();
        })
        .catch(error => {
            console.error('Erro ao cadastrar paciente:', error);
        });

        const deletePaciente = (pacienteData) => {
            PacienteService.DeletePaciente(pacienteData.nomeCompleto)
            .then(response => {
                console.log("Paciente deletado com sucesso:", response);
                reset();
            })
            .catch(error => {
                console.error('Erro ao deletar paciente:', error);
            });
        };

        const submitForm = async (pacienteData) => {
            const paciente = await PacienteService.CreatePaciente(pacienteData);

            if(!paciente) {
                alert ("Novo paciente cadastrado");
                reset();
            } else {
                alert("Paciente não Cadastrado");
            }

            return (
                <>
                
                </>
            )
        }
    }
}
