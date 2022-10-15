import { Cliente } from "./Cliente.js";

export class CuentaCorriente{
    #cliente;
    numero;
    agencia;
    #saldo;

    set cliente(valor) {
        if (valor instanceof Cliente){
            this.#cliente = valor;
        }
    }

    get cliente() {
        return this.#cliente;
    }

    constructor(cliente, numero , agencia) {
        this.cliente = cliente;
        this.#saldo = 0;
        this.numero = numero; //this.numero = '';
        this.agencia = agencia;
    }

    depositoEnCuenta (valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
        return this.#saldo;
    }

    retirarDeCuenta (valor){
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        }
        return this.#saldo;
    }
    verSaldo () {
        return this.#saldo;
    }
    transferirParaCuenta (valor, cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}
