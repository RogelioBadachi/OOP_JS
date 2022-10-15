import {CuentaCorriente} from './CuentaCorriente.js';
import {Cliente} from './Cliente.js';
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
const cliente = new Cliente('Jaime','13804050','123224');
/*cliente.nombreCliente = 'Jaime';
cliente.dniCliente = '13804050';
cliente.rutCliente = '123224'; */

const cuentaDeJaime = new CuentaCorriente();
cuentaDeJaime.numero = '1';
cuentaDeJaime.agencia = '001';
cuentaDeJaime.cliente = cliente;
//cuentaDeJaime.saldo = 0;

console.log(cuentaDeJaime);
let saldo = cuentaDeJaime.verSaldo();
/*
console.log("El Saldo Actual es: " + saldo);
saldo = cuentaDeJaime.depositoEnCuenta(100);

console.log("El Saldo Actual es: " + saldo);
saldo = cuentaDeJaime.retirarDeCuenta(50);

console.log("El Saldo Actual es: " + saldo);
saldo = cuentaDeJaime.retirarDeCuenta(50);

console.log("El Saldo Actual es: " + saldo);
saldo = cuentaDeJaime.depositoEnCuenta(1000);

console.log("El Saldo Actual es: " + saldo);
*/
const cliente2 = new Cliente('Maria','16979808','8989');

const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente2;

cuentaDeJaime.transferirParaCuenta(100,cuentaDeMaria);


console.log('El saldo actual (cuentaJaime) ' + saldo);

console.log('Cuenta de Maria' , cuentaDeMaria.cliente);
console.log('Cuenta de Jaime ' , cuentaDeJaime);
const saldoMaria = cuentaDeMaria.verSaldo();
console.log('El saldo actual (cuentaMaria) ' + saldoMaria);
const saldoJaime = cuentaDeJaime.verSaldo();
console.log('Saldo actual de (cuentaJaime) ' + saldoJaime);
