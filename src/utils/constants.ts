export class Constants {
    public static readonly PATTER_NUMBER = new RegExp('^[0-9]+$');
    public static readonly ALIADO = 'aliado';
    public static readonly PATTER_EMAIL = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');

    public static readonly tiposIdentificacion = [{id: 'CC', tipo: 'Cédula de ciudadanía'},
                                                  {id: 'CE', tipo: 'Cédula de extrangería'},
                                                  {id: 'NIT', tipo: 'NIT'}];
    public static readonly ocupacion = [{id: 1, tipo: 'Pensionado'},
                                        {id: 2, tipo: 'Empleado'},
                                        {id: 3, tipo: 'Independiente'}];
    public static readonly MAS = 'MAS';
    public static readonly MENOS = 'MENOS';

    public static readonly STATUS_VALID = 'VALID';
    public static readonly STATUS_INVALID = 'INVALID';
}
