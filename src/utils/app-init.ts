import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: {
            url: environment.keycloakUrl,
            realm: environment.keycloakRealm,
            clientId: environment.keycloakClientId
          },
          initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: false
          },
          bearerExcludedUrls: ['/assets', '/clients/public']
        });
        resolve();
      } catch (error) {
        console.error('fallo el inicio de session!');
        reject(error);
      }
    });
  };
}
