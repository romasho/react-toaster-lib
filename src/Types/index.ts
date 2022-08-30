export interface IconProps {
  fontSize?: number;
}

export type ToastType =
  | 'info'
  | 'warning'
  | 'error'
  | 'success'

export type ToastPosition =
  | 'bottom-right'
  | 'bottom-left'
  | 'top-right'
  | 'top-left'

export interface ToastWrapType {
  type: ToastType;
  margin?: number;
  fontSize?: number;
  animation?: string;
  delay?: number;
  position?: ToastPosition;
}

export interface MessagePropsType {
  fontSize: number;
}

export interface ToastMessage {
  message: string;
  description?: string;
}

export type IToastProps = ToastWrapType & ToastMessage
