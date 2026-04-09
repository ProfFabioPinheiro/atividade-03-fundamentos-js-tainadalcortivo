



function calcularDesconto(valorproduto,porcentagem){

    const desconto =   (porcentagem/100) * valorproduto;
    const valorFinal = valorproduto - desconto;
    
    console.log("O valor incial era: R$ " + valorproduto)
    console.log("O valor do desconto era: R$ " + desconto)
    console.log("O valor final ficou: R$ " + valorFinal)

}


calcularDesconto(200,25)