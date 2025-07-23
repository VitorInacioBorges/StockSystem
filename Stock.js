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
    6. Valor Total do Estoque
    7. Buscar Produto
    8. Adicionar Categoria e Filtrar Por Ela
    9. Sair
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
        ValorTotalEstoque()
        break
    case 7:
        process.exit()
        break
    default:
        console.log("Digite um número Valido...")
        MenuPrincipal()
        break
        }
    })
    
}

function CadastrarProduto(){
console.log('==== Cadastrar Produto ====\n')

rl.question('\nDigite o nome do produto:\n', (Nome) => {
        rl.question('\nDigite a quantidade:\n', (Quantidade) => {
            if(isNaN(Quantidade) || Quantidade < 0){console.log('Digite um numero...') 
                CadastrarProduto()}
                    rl.question('\nDigite o Preço:\n', (Preco) =>{
                        if(isNaN(Preco) || Preco < 0){console.log('Digite um numero...') 
                            CadastrarProduto()}
                        estoque.push({
                            Nome,
                            Quantidade,
                            Preco
                        });
console.log("Cadastrado com sucesso!")
        rl.question("Deseja Cadastrar um novo produto? (s/n)", (input5)=>{
            if (input5.toLowerCase() === 's'){ CadastrarProduto()} else {MenuPrincipal()}})
            })
        })
    })
}

function ListarProduto() {
    if(estoque.length === 0){
        console.log('nenhum item cadastrado! \nprecione enter para voltar')
        return rl.question('', MenuPrincipal)
    }else{
        console.log('estoque: ')
        estoque.forEach((produto, index) => {
            console.log(`${index + 1}. \nNome: ${estoque[index].Nome} \nQuantidade: ${estoque[index].Quantidade} \nPreço: ${estoque[index].Preco}\n`)
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

    console.log('estoque: ')
    estoque.forEach((produto, index) => {
        console.log(`${index + 1}. \nNome: ${estoque[index].Nome} \nQuantidade: ${estoque[index].Quantidade} \nPreço: ${estoque[index].Preco}\n`)
    })

    rl.question('digite o número do estoque que você quer editar: ', (input) => {
        let i = parseInt(input, 10) - 1
        if(i >= 0 && i < estoque.length){
            rl.question('digite a nova quantidade: ', (quantidade) => {
                if(quantidade < 0 || isNaN(quantidade)){
                    console.log('valor inválido!')
                    return AtualizarEstoque()
                }

                estoque[i].Quantidade = parseInt(quantidade);
                       
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


function Remover(){
    if(estoque.length == 0){
        console.log('Estoque vazio!');
        MenuPrincipal();
    } else {
        console.log('============ PRODUTOS LISTADOS ============');
        estoque.forEach((produto, index) => {
            console.log(`${index + 1} - Nome: ${estoque[index].Nome}, Quantidade: ${estoque[index].Quantidade}, Preço: ${estoque[index].Preco}`);
        });
        rl.question('Escolha o número do produto que deseja remover: ', (input) => {
            const index = parseInt(input) - 1;
            if(isNaN(index) || index < 0 || index > estoque.length){
                console.log('Entrada inválida!! Volte ao menu!');
                MenuPrincipal();
            } else {
                const [removido] = estoque.splice(index, 1);
                rl.question('', MenuPrincipal);
                console.log('Produto removido com sucesso!!');
                MenuPrincipal();
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

function ValorTotalEstoque(){
    if(estoque.length === 0){
        console.log('nenhum item cadastrado! \nPrecione enter para voltar')
        rl.question('', MenuPrincipal)
    }

    console.log('estoque: ')
    estoque.forEach((produto, index) => {
        console.log(`${index + 1}. \nNome: ${estoque[index].Nome} \nQuantidade: ${estoque[index].Quantidade} \nPreço: ${estoque[index].Preco}\n`)
    })

    rl.question('digite o número do estoque que você quer ver o valor total: ', (input) => {
        let i = parseInt(input, 10) - 1
        if(i >= 0 && i < estoque.length){
            console.log(`Valor total: ${estoque[i].Quantidade * estoque[i].Preco}`) 
            console.log('precione enter para voltar')
            rl.question('', MenuPrincipal)

        }else{
            console.log('posição inválida!\n')
            console.log('precione enter para voltar')
            rl.question('', MenuPrincipal)
        }
    })  
}