const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout})

let estoque = []

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
        console.log("Digite um número Valido...")
        MenuPrincipal()
        break
        }
    })
}

listar()
quantidade()

function listar() {
    if(estoque.lengh === 0){
        console.log('nenhum item cadastrado! \nprecione enter para voltar')
        return rl.question('', MenuPrincipal)
    }else{
        console.log('estoque: ')
        estoque.forEach((listar, index) => {
            console.log(`${index + 1}. \nNome: ${listar.nome} \nQuantidade: ${listar.quantidade} \nPreço: ${listar.preco.toFixed(2)}\n`)
        })
    }
    console.log('precione enter para voltar')
    return rl.question('', menu)
}

function quantidade(){
    if(listaJogo.length === 0){
        console.log('nenhum item cadastrado! \nPrecione enter para voltar')
        rl.question('', MenuPrincipal)
    }

    console.log('Lista de estoque: ')
    listaJogo.forEach((produto, index) => {
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
                    ? quantidade()
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
