class Negociacoes {
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArrary() {
        return [].concat(this._negociacoes);
    }
}
