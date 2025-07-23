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
        console.log("Digite um numero Valido...")
        MenuPrincipal()
        break
}
})
}