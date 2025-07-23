const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout})

let produto = []

MenuPrincipal()

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
        console.log("Digite um numero Valido...")
        MenuPrincipal()
        break
        }
    })
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
}