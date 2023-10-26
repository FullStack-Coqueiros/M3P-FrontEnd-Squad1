import { useForm } from 'react-hook-form';
import { InputComponent } from '../../InputComponents/InputComponent.jsx';
import { PacienteService } from '../../../services/Paciente.service.jsx';
import { Switch } from 'antd';
import * as Styled from './FormPaciente.style.jsx';

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
                    <Styled.Form onSubmit={handleSubmit(submitForm)}>

                        <Styled.Header>
                        <Styled.Title>Identificação</Styled.Title>


                        <Styled.LabelSwitch>
                            Editar
                        </Styled.LabelSwitch>

                        <Styled.SwitchBtn>
                            <Switch/>
                        </Styled.SwitchBtn>


                        <Styled.ButtonDel $width={'10%'} onClick={deletePaciente} $active={!errors.email && !errors.password} type='button' disabled={errors.email || errors.password}>Deletar</Styled.ButtonDel>
                        
                        <Styled.Button $width={'10%'} onClick={createPaciente} $active={!errors.email && !errors.password} type='submit' disabled={errors.email || errors.password}>Salvar</Styled.Button>
                        </Styled.Header>


                        <Styled.MainForm $width={'100%'}>
                        <Styled.InputGroup>

                            <InputComponent $width={'100%'}
                            id='nomeCompleto'
                            type='string'
                            placeholder='Digite seu Nome'
                            label='Nome Completo'
                            name='nomeCompleto'
                                register={{
                            ...register('nomeCompleto', {
                                required: true,
                            })
                            }}
                            error={errors.nome}
                            />

                            <SelectComponent $width={'20%'}
                            id='genero'
                            name='genero'
                            label={'Gênero'}
                            options={genero}
                            register={{
                                ...register('genero', {
                                required: true,
                                })
                            }}
                            error={errors.genero}
                            />

                            <InputComponent $width={'10 %'}
                            id='dataNascimento'
                            type='date'
                            name='dataNascimento'
                            placeholder='Data Nascimento'
                            label='Data Nascimento'
                                register={{
                            ...register('dataNascimento', {
                                required: true,
                            
                            })
                            }}
                            error={errors.nasc}
                            />

                        </Styled.InputGroup>

                        <Styled.InputGroup>

                            <InputComponent $width={'100%'}
                            id='cpf'
                            type='text'
                            name='cpf'
                            placeholder='Digite seu CPF'
                            label='CPF'
                                register={{
                            ...register('cpf', {
                                required: true,
                            
                            })
                            }}
                            error={errors.cpf}
                            />

                            <InputComponent $width={'100%'}
                            id='rg'
                            type='text'
                            name='rg'
                            placeholder='Digite seu RG'
                            label='RG'
                                register={{
                            ...register('rg', {
                                required: true,
                            
                            })
                            }}
                            error={errors.rg}
                            />

                            <SelectComponent $width={'30%'}
                            id='estadoCivil'
                            name='estadoCivil'
                            label={'Estado Civil'}
                            options={estadoCivil}
                            register={{
                                ...register('estadoCivil', {
                                
                            required: false,
                                })
                            }}
                            error={errors.estadoCivil}
                            />

                        </Styled.InputGroup>

                        <Styled.InputGroup>

                            <InputComponent $width={'100%'}
                            id='telefone'
                            type='number'
                            placeholder='Telefone'
                            name='tel'
                            label='Telefone'
                                register={{
                            ...register('telefone', {
                                required: true
                            })
                            }}
                            error={errors.tel}
                            />

                            <InputComponent $width={'100%'}
                            id='email'
                            type='email'
                            placeholder='Digite o seu email'
                            name='email'
                            label='E-mail'
                                register={{
                            ...register('email', {
                                required: true
                            })
                            }}
                            error={errors.email}
                            />

                            <InputComponent $width={'100%'}
                            id='naturalidade'
                            type='string'
                            placeholder='Naturalidade'
                            name='naturalidade'
                            label='Naturalidade'
                                register={{
                            ...register('naturalidade', {
                                required: true,
                            })
                            }}
                            error={errors.natural}
                            />

                        </Styled.InputGroup>


                        <Styled.Header>
                        <Styled.Title>
                            Convênio
                        </Styled.Title>
                        </Styled.Header>

                        
                        <Styled.InputGroup>

                            <InputComponent $width={'100%'}
                            id='convenio'
                            type='string'
                            placeholder='Informe seu convênio'
                            label='Convênio'
                            name='convenio'
                                register={{
                            ...register('convenio', {
                                required: false,
                            })
                            }}
                            error={errors.convenio}
                            />

                            <InputComponent $width={'100%'}
                            id='numeroConvenio'
                            type='number'
                            placeholder='Digite o número do convenio'
                            name='numeroConvenio'
                            label='Número do Convenio'
                                register={{
                            ...register('numeroConvenio', {
                                required: false,
                            })
                            }}
                            error={errors.NCart}
                            />

                            <InputComponent $width={'100%'}
                            id='validade'
                            type='date'
                            placeholder='Validade'
                            name='validade'
                            label='Validade'
                                register={{
                            ...register('validade', {
                                required: false,
                            })
                            }}
                            error={errors.validade}
                            />

                        </Styled.InputGroup>

                        <Styled.Header>
                        <Styled.Title>
                            Dados do Endereço
                        </Styled.Title>
                        </Styled.Header>

                        
                        <Styled.InputGroup>

                            <InputComponent $width={'100%'}
                            id='cep'
                            type='text'
                            placeholder='Informe o CEP'
                            name='cep'
                            label='CEP'
                            /* onBlur={buscaCEP} */
                                register={{
                            ...register('cep', {
                                required: false,
                            })
                            }}
                            error={errors.cep}
                            />

                            <InputComponent $width={'100%'}
                            id='cidade'
                            type='string'
                            placeholder='Digite a Cidade'
                            name='cidade'
                            label='Cidade'
                        /*             defaultValue={endereco.localidade || ''}
                        */              register={{
                            ...register('cidade', {
                                required: false,
                            })
                            }}
                            error={errors.cidade}
                            />

                            <InputComponent $width={'100%'}
                            id='uf'
                            type='string'
                            placeholder='Estado'
                            name='uf'
                            label='Estado'
                            /* defaultValue={endereco.uf || ''} */
                                register={{
                            ...register('uf', {
                                required: false,
                            })
                            }}
                            error={errors.uf}
                            />

                        </Styled.InputGroup>

                            
                        <Styled.InputGroup>

                            <InputComponent $width={'500%'}
                            id='rua'
                            type='string'
                            placeholder='Informe seu endereço'
                            name='rua'
                            label='Logradouro'
                            /* defaultValue={endereco.logradouro || ''} */
                                register={{
                            ...register('rua', {
                                required: false,
                            })
                            }}
                            error={errors.rua}
                            />

                            <InputComponent $width={'100%'}
                            id='numRua'
                            type='number'
                            placeholder='Número'
                            label='Número'
                            name='numRua'
                            /* defaultValue={endereco.numero || ''} */
                                register={{
                            ...register('numRua', {
                                required: false,
                            })
                            }}
                            error={errors.numRua}
                            />


                        </Styled.InputGroup>


                        <Styled.InputGroup>

                            <InputComponent $width={'100%'}
                            id='compl'
                            type='string'
                            placeholder='Complemento'
                            name='compl'
                            label='Complemento'
                                register={{
                            ...register('compl', {
                                required: false,
                            })
                            }}
                            error={errors.compl}
                            />

                            <InputComponent $width={'100%'}
                            id='bairro'
                            type='string'
                            placeholder='Digite o seu bairro'
                            name='bairro'
                            label='Bairro'
                            /* defaultValue={endereco.bairro || ''} */
                                register={{
                            ...register('bairro', {
                                required: false,
                            })
                            }}
                            error={errors.bairro}
                            />

                            <InputComponent $width={'100%'}
                            id='refEnd'
                            type='string'
                            placeholder='Referência'
                            name='refEnd'
                            label='Ponto de Referência'
                                register={{
                            ...register('refEnd', {
                                required: false,
                            })
                            }}
                            error={errors.refEnd}
                            />

                        </Styled.InputGroup>
                        </Styled.MainForm>




                        </Styled.Form>
                </>
            )
        }
    }
}
