export default interface CasoDeUso<IN, OUT> {
    /* 
        metodo executar que recebe um parametro de entrada,
        e retorna uma Promise
    */
    executar(entrada: IN): Promise<OUT>; 
}