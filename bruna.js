const { gets, print } = required('./funcoes-auxiliares');

const valorSalarioBruto = gets();
const adicionalBeneficios = gets();

function calcularPorcentagem( valor,porcentual) {
    return valor * ( porcentual / 100 );
    
}
print(calcularPorcentagem(valorSalarioBruto,10));