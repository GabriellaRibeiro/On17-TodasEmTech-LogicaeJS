/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

    let qtdItens = Number(prompt("Informe a quantidade de itens: "));
    let total = 0;
    
    for (let i = 1; <= qtdItens; i++) {
        let preço = parseFloat(prompt("Preço produto ${i}: "));
        total += preço;
    }

    console.log ("O total da compra é: r$${total}");
