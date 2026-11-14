import { environment } from "../../../environments/environment";

export const API_URL_BASE_LOCAL = 'http://127.0.0.1:5000';

export const API_URL_BASE = environment.apiUrl;

export const URLS_API = {
    NOTIFICATIONS: API_URL_BASE,
}   

export const PAYPAL_CLIENT_ID = 'AeUpD2k9kexfmDKnYirBYlhHpAYL4CyBYF2LhD6Ee0GNsOi7Bm5Y6T-GwZjSfC6pmQ8t5uLoQNiz-iUL';

export const PAYPAL_REDIRECT_URI = environment.production
  ? 'https://tu-dominio-produccion.com/ajustes-aplicacion'
  : 'https://blurry-thinner-marlin.ngrok-free.dev/ajustes-aplicacion';