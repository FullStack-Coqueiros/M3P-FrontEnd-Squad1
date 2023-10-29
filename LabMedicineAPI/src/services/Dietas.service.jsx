import { LocalStorageService } from "./LocalStorage.Server";

const API_URL = 'http://localhost:7289/api/dietas';

const Get = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data;
}

const Create = async (dietaData) => {
    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(dietaData),
        headers: {
            "Content-type": "application/json",
        },
    })
    .then(async (data) => {
        const res = await data.json();
        console.log(res);
        console.log("Dieta cadastrada com sucesso");
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
    LocalStorageService.set('dietas', Get().filter((dieta) => dieta.id !== id));
}

const Update = (id, newDieta) => {
    const dietas = Get();
    dietas[dietas.findIndex((dieta) => dieta.id === id)] = newDieta;
    LocalStorageService.set('dietas', dietas);
}

export const DietaService = {
    Get,
    Create,
    Show,
    ShowByName,
    Delete,
    Update,
};