// Formatadores.jsx
function Formatadores() {
  // Função para aplicar máscara de celular
  const celular = (number) => {
    number = number.replace(/\D/g, "");
    number = number.replace(/^(\d{2})(\d)/g, "($1) $2");
    number = number.replace(/(\d{5})(\d)/, "$1-$2");
    return number;
  };

  // Função para aplicar máscara de CPF
  const cpf = (cpf) => {
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf;
  };

  // Função para limpar espaços do email
  const email = (email) => email.trim();

  // Função para validar email usando regex
  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Função para validar CPF (verifica dígitos verificadores)
  const validarCpf = (cpf) => {
    cpf = cpf.replace(/\D/g, ""); // Remove tudo que não for número
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; // Rejeita CPFs inválidos

    let soma = 0;
    // Calcula o primeiro dígito verificador
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    // Calcula o segundo dígito verificador
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.charAt(10));
  };

  // Exporta todas as funções
  return { celular, cpf, email, validarEmail, validarCpf };
}

export default Formatadores;
