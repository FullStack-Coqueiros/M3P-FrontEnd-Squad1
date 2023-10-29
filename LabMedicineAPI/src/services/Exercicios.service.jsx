import { LocalStorageService } from "./LocalStorage.Server";

const API_URL = 'http://localhost:7289/api/exercicios';

const Get = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data;
}

const Create = async (exercicioData) => {
    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(exercicioData),
        headers: {
            "Content-type": "application/json",
        },
    })
        .then(async (data) => {
            const res = await data.json();
            console.log(res);
            console.log("Exercício cadastrado com sucesso");
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
    LocalStorageService.set('exercicios', Get().filter((exercicio) => exercicio.id !== id));
}

const Update = (id, newExercicio) => {
    const exercicios = Get();
    exercicios[exercicios.findIndex((exercicio) => exercicio.id === id)] = newExercicio;
    LocalStorageService.set('exercicios', exercicios);
}

export const ExercicioService = {
    Get,
    Create,
    Show,
    ShowByName,
    Delete,
    Update,
};
