export class ResponseCalculoCuotas {
    valorCuotaConSeguro: number;
    valorCuotaSinSeguro: number;
    valorTotalSeguro: number;
    costoMensualSeguro: number;
    montoTotalFinanciamiento: number;
    valorConDescuento: number;

    constructor() {
        this.valorCuotaConSeguro = 0;
        this.valorCuotaSinSeguro = 0;
        this.valorTotalSeguro = 0;
        this.costoMensualSeguro = 0;
        this.montoTotalFinanciamiento = 0;
        this.valorConDescuento = 0;
    }
}
