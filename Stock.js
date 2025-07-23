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