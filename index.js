const customExpress = require('../rest-nodejs-api-express-mysql/config/customExpress')
const conexao = require('../rest-nodejs-api-express-mysql/Infraestrutura/conexao');
const tabelas = require('../rest-nodejs-api-express-mysql/Infraestrutura/tabelas')
conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('conectado com sucesso')
        
        tabelas.init(conexão)
        const app = customExpress();

        app.listen(3000, () => console.log("rodando na porta 3000"));

    }

})





