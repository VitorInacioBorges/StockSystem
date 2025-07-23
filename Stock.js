const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout})

let estoque = []

MenuPrincipal();

function MenuPrincipal(){
    console.log(`
    ====== Estoque ======
    1. Cadastrar produtos
    2. Listar Produtos
    3. Atualizar Estoque
    4. Remover Produtos
    5. Verificar Estoque Minimo
    6. sair
`)

rl.question('\n Escolha uma opção acima:\n', (input1)=>{
    let menu = parseInt(input1)
switch (menu){
    case 1:
        CadastrarProduto()
        break
    case 2:
        ListarProduto()
        break
    case 3: 
        AtualizarEstoque()
        break
    case 4:
        Remover()
        break
    case 5:
        VerificarEstoque()
        break
    case 6:
        process.exit()
        break
    default:
        console.log("Digite um número Valido...")
        MenuPrincipal()
        break
        }
    })

}

function ListarProduto() {
    if(estoque.length === 0){
        console.log('nenhum item cadastrado! \nprecione enter para voltar')
        return rl.question('', MenuPrincipal)
    }else{
        console.log('estoque: ')
        estoque.forEach((listar, index) => {
            console.log(`${index + 1}. \nNome: ${listar.nome} \nQuantidade: ${listar.quantidade} \nPreço: ${listar.preco.toFixed(2)}\n`)
        })
    }
    console.log('precione enter para voltar')
    return rl.question('', MenuPrincipal)
}

function AtualizarEstoque(){
    if(estoque.length === 0){
        console.log('nenhum item cadastrado! \nPrecione enter para voltar')
        rl.question('', MenuPrincipal)
    }

    console.log('Lista de estoque: ')
    estoque.forEach((produto, index) => {
        console.log(`${index + 1}. \nNome: ${produto.nome} \nCriador: ${produto.quantidade} \nvalor: R$${produto.valor.toFixed(2)}\n`)
    })

    rl.question('digite o número do estoque que você quer editar: ', (input) => {
        let i = parseInt(input, 10) - 1
        if(i >= 0 && i < estoque.length){
            rl.question('digite a nova quantidade: ', (quantidade) => {
                if(quantiadde < 0 || isNaN(quantidade)){
                    console.log('valor inválido!')
                    return quantidade()
                }

                estoque[i] = {
                    quantidade
                }
                       
                console.log('Estoque editado com sucesso! \nDeseja editar outro? (s/n)')
                rl.question('', (resposta) =>{
                    resposta.toLowerCase() === 's'
                    ? AtualizarEstoque()
                    : MenuPrincipal()
                })
            })
        }else{
            console.log('posição inválida!\n')
            console.log('precione enter para voltar')
            rl.question('', MenuPrincipal)
        }
    })  
}

}

function CadastrarProduto(){
console.log('==== Cadastrar Produto ====\n')

rl.question('\nDigite o nome do produto:\n', (input2) => {
        rl.question('\nDigite a quantidade:\n', (input3) => {
            if(isNaN(input3) || input3 < 0){console.log('Digite um numero...') 
                CadastrarProduto()}
                    rl.question('\nDigite o Preço:\n', (input4) =>{
                        if(isNaN(input4) || input4 < 0){console.log('Digite um numero...') 
                            CadastrarProduto()}
                        produto.push({
                            Nome:input2,
                            Quantidade: parseFloat(input3),
                            Preço: parseFloat(input4)
                        })
console.log("Cadastrado com sucesso!")
        rl.question("Deseja Cadastrar um novo produto? (s/n)", (input5)=>{
            if (input5.toLowerCase() === 's'){ CadastrarProduto()} else {MenuPrincipal()}})
            })
        })
    })
})
}

function Remover(){
    if(estoque.length == 0){
        console.log('Estoque vazio!');
        MenuPrincipal();
    } else {
        console.log('============ PRODUTOS LISTADOS ============');
        for(let i = 0; i<estoque.length; i++){
            console.log(`${i + 1} - Nome: ${estoque[i].Nome}, Quantidade: ${estoque[i].Quantidade}, Preço: ${estoque[i].Preco}`);
        };
        rl.question('Escolha o número do produto que deseja remover: ', (input) => {
            const index = parseInt(input) - 1;
            if(isNaN(index) || index < 0 || index > estoque.length){
                console.log('Entrada inválida!! Volte ao menu!');
                MenuPrincipal();
            } else {
                const [removido] = estoque.splice(index);
                rl.question('', MenuPrincipal);
                console.log('Produto removido com sucesso!!');
            }
        });
    }
}

function VerificarEstoque(){
    let baixoEstoque = 0;
    console.log('Os seguintes produtos possuem quantidade baixa (menor que 5):');
    for(let i = 0; i < estoque.length; i++){
        if(estoque[i].Quantidade < 5){
            console.log(`Nome: ${estoque[i].Nome}, Quantidade: ${estoque[i].Quantidade}`);
            baixoEstoque++;
        }
    }
    console.log(`No total temos ${baixoEstoque} produtos com quantidade baixa!\n Aperte ENTER para voltar ao menu...`);
    rl.question('', MenuPrincipal);

}
