export interface ToastData {
    id: number;
    mensaje: string;
    type: 'success' | 'error' | 'info' | 'warning';
    leida: false;
}