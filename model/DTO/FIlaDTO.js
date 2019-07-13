module.exports = 
    class FilaDTO{
        constructor(usuario, tipoFila, posicao, swap, horaMarcada){
            this.usuario = usuario;
            this.tipoFila = tipoFila;
            this.posicao = posicao;
            this.swap = swap;
            this.horaMarcada = horaMarcada;
        }
    }