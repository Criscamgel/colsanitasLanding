// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backBdUrl: 'http://localhost:9091', // spring boot para base de datos.
  keycloakUrl: 'http://localhost:8080/auth',  //keyclock sso
  keycloakRealm: 'rei_colsanitas',
  keycloakClientId: 'cli_colsanitas',
  //datos de prueba con openshift
  // backBdUrl: 'http://calculadora-credito-consumo-dev.apps.sv-bsnc-arquitectura-openshift.itac.com.co',
  // keycloakUrl: 'https://sso-credito-consumo-dev.apps.sv-bsnc-arquitectura-openshift.itac.com.co/auth',
  // keycloakRealm: 'rei_colsanitas',
  // keycloakClientId: 'cli_colsanitas',
  redirectUriLogout: 'https://www.youtube.com/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
