const Cliente = require("../models/Cliente")
test('este teste precisa validar uma instancia de cliente com cpf valido', () => {
    let cliente = new Cliente("Rafael Sobral" , "030.502.911-84");
  expect(cliente.nome).not.beUndefined;
  expect(cliente.cpf).not.beUndefined;
  expect(cliente.validarCPF()).toBe(true);
});