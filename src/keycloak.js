import Keycloak from 'keycloak-js'
const keycloakConfig = {
    url: 'http://localhost:8080/auth',
    realm: 'hakaton_realm',
    clientId: 'hakaton_client'
}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak