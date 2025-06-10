export interface Notification {
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  leida?: boolean;
}