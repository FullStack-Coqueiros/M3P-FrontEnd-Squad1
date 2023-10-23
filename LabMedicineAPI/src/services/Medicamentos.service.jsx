import { LocalStorageService } from "./LocalStorage.Server";

const API_URL = 'http://localhost:3000/medicamentos';

const Get = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data;
}

const Create = async (medicamentoData) => {
    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(medicamentoData),
        headers: {
            "Content-type": "application/json",
        },
    })
        .then(async (data) => {
            const res = await data.json();
            console.log(res);
            console.log("Medicamento cadastrado com sucesso");
        })
        .catch((err) => {
            console.log(err);
        });
}

const Show = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();

    return data;
}

const ShowByName = async (nome) => {
    const filter = `?nome=${nome}`;
    const response = await fetch(`${API_URL}/${filter}`);
    const data = await response.json();

    return data[0];
}

const Delete = (id) => {
    LocalStorageService.set('medicamentos', Get().filter((medicamento) => medicamento.id !== id));
}

const Update = (id, newMedicamento) => {
    const medicamentos = Get();
    medicamentos[medicamentos.findIndex((medicamento) => medicamento.id === id)] = newMedicamento;
    LocalStorageService.set('medicamentos', medicamentos);
}

export const MedicamentoService = {
    Get,
    Create,
    Show,
    ShowByName,
    Delete,
    Update,
};
