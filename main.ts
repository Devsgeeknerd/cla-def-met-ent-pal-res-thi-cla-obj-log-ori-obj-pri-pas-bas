class Conta {
  titular: string = "";
  saldo: number = 0;

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo = this.saldo + valor;
    }
  }

  sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo = this.saldo - valor;
    }
  }
}

let contaDoPaulo: Conta = new Conta();
contaDoPaulo.titular = "Paulo";

contaDoPaulo.sacar(1000);
console.log(contaDoPaulo.saldo);
