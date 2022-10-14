class Cliente {
    
    nombreCliente;
    dniCliente;
    rutCliente;

}

class CuentaCorriente{
    numero;
    #saldo;
    agencia;

    constructor() {
        this.#saldo = 0;
        this.numero = '';
        this.agencia = '';
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

} 
/*
const cliente1 = new Cliente();

cliente1.nombreCliente = "José";
cliente1.dniCliente = "13232";
cliente1.rutCliente = "133434";

const cuentaCorriente1 = new CuentaCorriente();

cuentaCorriente1.numero = "232323";
cuentaCorriente1.saldo = "5000";
cuentaCorriente1.agencia = 1001;

const cliente2 = new Cliente();

cliente2.nombreCliente = "Ramiro";
cliente2.dniCliente = "13804050";
cliente2.rutCliente = "V13804050";

const cuentaCorriente2 = new CuentaCorriente();

cuentaCorriente2.numero = "123434343";
cuentaCorriente2.saldo = 1000;
cuentaCorriente2.agencia = 1002;

/* console.log(cliente1);
console.log(cuentaCorriente1);
console.log(cliente2);
console.log(cuentaCorriente2); 

console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(100);
console.log(cuentaCorriente2.saldo);
*/
cuentaDeJaime = new CuentaCorriente();
//cuentaDeJaime.saldo = 0;
let saldo = cuentaDeJaime.verSaldo();

console.log("El Saldo Actual es: " + saldo);
cuentaDeJaime.depositoEnCuenta(100);
saldo = cuentaDeJaime.verSaldo();
console.log("El Saldo Actual es: " + saldo);
cuentaDeJaime.retirarDeCuenta(50);
saldo = cuentaDeJaime.verSaldo();
console.log("El Saldo Actual es: " + saldo);
cuentaDeJaime.retirarDeCuenta(50);
saldo = cuentaDeJaime.verSaldo();
console.log("El Saldo Actual es: " + saldo);
cuentaDeJaime.depositoEnCuenta(10);
saldo = cuentaDeJaime.verSaldo();
console.log("El Saldo Actual es: " + saldo);