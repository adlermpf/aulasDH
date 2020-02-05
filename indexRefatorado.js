const PETSHOP = "Petshop DH";

console.log(`**  ${PETSHOP} **`);

// arrays de objetos pets
let pets = [{
    nome: "Dutch",
    tipo: "Cão",
    raca: "Vira-Lata",
    idade: 5,
    genero: "Macho",
    servicos: [],
    vacinado: true
}, {
    nome: "German",
    tipo: "Cão",
    raca: "Pastor",
    idade: 3,
    genero: "Macho",
    servicos: [],
    vacinado: true
}, {
    nome: "English",
    tipo: "Cão",
    raca: "Bulldog",
    idade: 10,
    genero: "Macho",
    servicos: [],
    vacinado: true
}, {
    nome: "Brazilian",
    tipo: "Cão",
    raca: "Vira-Lata",
    idade: 1,
    genero: "Macho",
    servicos: [],
    vacinado: false
}];

const anoDeNascimento = pet => 2020 - pet.idade;

anoDeNascimento(pets);

const vacinarPet = () => {
    pets.forEach(pet => {
        if (!pet.vacinado) {
            console.log("não está vacinado");
            pet.vacinado = true;
            console.log("Agora está vacinado");
        } else {
            console.log("está vacinado");
        }
    });
}


//vacinarPet(pets);

const exibePets = () => {
    for (let pet of pets) {
        console.log("-----------------------------------")
        console.log("nome: " + pet.nome);
        console.log("Tipo: " + pet.tipo);
        console.log("Raca: " + pet.raca);
        console.log("Idade: " + pet.idade);
        console.log("Genero: " + pet.genero);
        console.log("Serviço: " + pet.servicos);
        console.log("Vacinado: " + (pets.vacinado ? "Sim" : "Não"));
    }
}

exibePets(pets);

const validarDados = dadosPet => {
    return (
        dadosPet.nome &&
        dadosPet.idade &&
        dadosPet.genero &&
        dadosPet.tipo &&
        dadosPet.raca
    );
};

const adicionarPets = novoPet => {
    if (typeof novoPet == "object" && validarDados(novoPet)) {
        pets.push(novoPet);
        novoPet.nome = novoPet.nome.toString();
        novoPet.idade = parseInt(novoPet.idade);
        if (!novoPet.servicos) {
            novoPet.servicos = [];
        }
        console.log("Pet adicionado com sucesso")
    } else {
        console.log("Ops, insira um pet valido");
    }
};

adicionarPets({
    nome: "Spanish",
    tipo: "Cão",
    raca: "CockerSpanel",
    idade: 8,
    genero: "Macho",
    servicos: ["banho", "tosa"],
    vacidado: true
});

const tosarPet = pet => {
    pet.servicos.push("tosa");
    console.log("Tosa realizada com sucesso");
};

const darBanhoPet = pet => {
    pet.servicos.push("banho");
    console.log("Banho realizada com sucesso");
};

const cortarUnhasPet = pet => {
    pet.servicos.push("Unha");
    console.log("Unhas cortadas!");
};

const atenderPet = (pet, ...servicos) => {
    console.log(`Bem vindo, ${pet.nome}`);
    for (let servico of servicos) {
        servico(pet);
    }
}

const pagar = () => {
    console.log("Pagamento realizado com sucesso");
}
pagar();
console.log("volte Sempre");

atenderPet(pets[0], darBanhoPet, cortarUnhasPet);



const contarVacinados = () => {
    let vacinados = pets.filter(pet => pet.vacinado).length;
    let naoVacinados = pets.filter(pet => !pet.vacinado).length;

    console.log(`Há ${vacinados} Vacinados
Há ${naoVacinados} Não Vacinados`);
}
contarVacinados(pets);

const campanhaVacina = () => {
    let contador = 0;
    for (let pet of pets) {
        if (!pet.vacinado) {
            contador++;
            vacinarPet(pet);
        }
    }
    console.log(`${contador} pet(s) foram vacinados nessa campanha!`);
}
contarVacinados(pets);
campanhaVacina(pets);

const buscarPetPeloNome = (pet, nome) => {
    let consultaNome = pet.filter(oPet => oPet.nome === nome).length;
    (consultaNome >= 1) ? console.log(`O nome foi encontrado em ${consultaNome} ocorrencias`): console.log(`nome nao encontado`);
}

buscarPetPeloNome(pets, "Dutch");