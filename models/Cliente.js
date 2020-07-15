class Cliente {
    constructor(nome, cpf) {
      this.nome = nome;
      this.cpf = cpf;
    }
    validarCPF(){
        return true;
    }
  }
  module.exports = Cliente;