module.exports = 
    class UsuarioDTO{
        constructor(codigo, slack, senha, nome){
            this.codigo = codigo;
            this.slack = slack;
            this.senha = senha;
            this.nome = nome;
        }
    }