const hoteis = [
  { numero: 1, nome: "Touro Verde" },
  { numero: 2, nome: "Lobo Azul" },
  { numero: 3, nome: "Coruja Dourada" },
];

let valor = 62;

let nomeHospede = prompt("Informe seu nome:");

let mensagem = `Agora escolha um hotel ${nomeHospede}\n`;
for (let i = 0; i < hoteis.length; i++) {
  mensagem += `[${hoteis[i].numero}] ${hoteis[i].nome}\n`;
}

const escolha = prompt(mensagem);
const hotelEscolhido = hoteis.find((hotel) => hotel.numero === parseInt(escolha));

function Hotel() {
  var escolha = parseInt(prompt(`Selecione um serviço: [1]-Reserva de Quartos [2]-Cadastro de Hóspedes\n [3]-Eventos do hotel [4]-Buffe do hotel\n [5]-Sair`));

  switch (escolha) {
    case 1:
      reserva_de_Quartos()
      break;

    case 2:
      cadastro()
      break;

    case 3:
      eventosHotel()
      break;

    case 4:
      buffetDoHotel();
      break;

    case 5:
      sair()
      break;


    default:
      erro()
      break;
  }


}
function reserva_de_Quartos() {
  var opcao = prompt("Cadastrar [1]-uma pessoa  [2]-mais de uma");

  switch (opcao) {
    case "1":
      pessoa1();
      break;

    case "2":
      pessoa2();
      break;

    default:
      erro();
      break;
  }

  function pessoa1() {
    var nomeHospede = prompt("Informe o nome do hóspede:");
    prompt(`Bem vindo ao hotel, ${nomeHospede}! \nO valor da diária é R$62.00`);
    var diarias = parseInt(prompt(`${nomeHospede}, quantas diárias serão necessárias?`));

    if (isNaN(diarias) || diarias <= 0) {
      alert("Valor inválido");

    } else if (diarias > 30) {
      alert("Valor inválido,");

    } else if (diarias < 30) {
      alert("Calculando...");
    }

    var soma = 62 * diarias;
    var resultado = prompt(`O valor de ${diarias} dias de hospedagem é de R$${soma}.00.\n${nomeHospede}, você confirma a hospedagem?\n[1]Sim\n[2]Não`);

    if (resultado === "1") {
      alert(`Reserva efetuada para ${nomeHospede}. O valor total é de R$${soma.toFixed(2)}.`);
      Hotel();

    } else if (resultado === "2") {
      alert("Reserva cancelada");
      Hotel();

    } else {
      erro();
    }
  }

  function pessoa2() {
    const valorDiaria = 62.0; // valor padrão da diária
    var hospedes = [];
    var nome, idade, valorTotal = 0.0, gratuidades = 0, meiasHospedagens = 0;

    while (true) {
      nome = prompt("Informe o nome do hóspede (digite PARE para encerrar):");
      if (nome.toLowerCase() === "pare") break;

      idade = parseInt(prompt(`Informe a idade do hóspede ${nome}:`));
      if (isNaN(idade)) {
        alert("Idade inválida, tente novamente.");
        continue;
      }

      var valorDiariaHospede = valorDiaria;
      if (idade < 6) {
        alert(`${nome} possui gratuidade`);
        gratuidades++;
        continue;
      } else if (idade > 60) {
        alert(`${nome} paga meia`);
        valorDiariaHospede /= 2;
        meiasHospedagens++;
      }

      hospedes.push({ nome: nome, idade: idade, valorDiaria: valorDiariaHospede });
      valorTotal += valorDiariaHospede;
    }

    alert(`Quantidade de gratuidades: ${gratuidades}\nQuantidade de meias hospedagens: ${meiasHospedagens}\nValor total: R$${valorTotal.toFixed(2)}`);
    Hotel()

  }



function cadastro() {

  if (hotelEscolhido) {
    alert(`Bem vindo ao hotel: ${hotelEscolhido.nome}!`);

  } else {
    alert(`Escolha inválida. Tente novamente.`);
    erro()
  }

  var senha = prompt(`${nomeHospede}, agora nos informe sua senha para efetuarmos o cadastro no hotel ${hotelEscolhido.nome}.`)

  if (senha === "2678") {
    alert("Cadastro realizado com sucesso.")
    Hotel()

  } else {
    erro()

  }

}

function eventosHotel() {
  const salarioGarcon = 10.5

  var Bemvindo = window.prompt(`Qual evento vai ser realizado no hotel ${hotelEscolhido.nome}?`)
  let horas = prompt("Qual a duração do evento em horas?")
  let garcon = prompt("Quantos garçons serão necessários:")

  let custo = salarioGarcon * garcon * horas

  let alternativa = prompt(`Custo total do evento R$${custo}.\n Gostaria de realizar a reserva\n [1]-Sim\n [2]-Não`)

  if (alternativa === "1") {
    alert(`${nomeHospede}, reserva efetuada com sucesso.`)
    Hotel()

  } else if (alternativa === "2") {
    alert(`Evento de:${Bemvindo} cancelado.`)

  } else {
    erro()
  }
}

function buffetDoHotel() {
  const capacidadeMaxima = 350;
  const precoCafe = 0.8;
  const precoAgua = 0.4;
  const precoSalgado = 34.0;

  let numConvidados = parseInt(prompt("Quantos convidados estarão presentes?"));

  if (isNaN(numConvidados) || numConvidados <= 0) {
    alert("Valor inválido!");
    return;
  }

  if (numConvidados > capacidadeMaxima) {
    alert("Quantidade de convidados superior à capacidade máxima!");
    return;
  }

  let litrosCafe = numConvidados * 0.2;
  let litrosAgua = numConvidados * 0.5;
  let numSalgados = numConvidados * 7;

  let valorTotal = (litrosCafe * precoCafe) + (litrosAgua * precoAgua) + ((numSalgados / 100) * precoSalgado);

  let confirmacao = prompt(`Quantidade de água: ${litrosAgua.toFixed(2)} litros\nQuantidade de café: ${litrosCafe.toFixed(2)} litros\nQuantidade de salgados: ${numSalgados}\nValor total: R$${valorTotal.toFixed(2)}\nVocê aceita esses valores? [1]-Sim [2]-Não`);

  if (confirmacao === "1") {
    alert("Reserva efetuada com sucesso!");
  } else if (confirmacao === "2") {
    alert("Reserva não efetuada.");
  }
  Hotel()
}

function sair() {
  let confirma = confirm("Você deseja sair?")

  if (confirma == true) {
    alert(`Foi uma prazer te ter aqui ${nome}`)
    window.closed()

  } else {
    alert("False")
    Hotel();
  }
}

function erro() {
  alert("Algo deu errado. Tente novamente")
  Hotel();
}


Hotel();
}