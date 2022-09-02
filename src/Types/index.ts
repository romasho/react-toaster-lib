export interface IconProps {
  fontSize?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export enum ToastType {
  info = "info",
  warning = 'warning',
  error = "error",
  success = 'success'
}

export enum ToastPosition {
  bottomRight = 'bottom-right',
  bottomLeft = 'bottom-left',
  topLeft = 'top-left',
  topRight = 'top-right'
}

export enum AnimationType {
  startX = 'startX',
  startY = 'startY'
} 

export interface ToastWrapType {
  type?: ToastType;
  margin?: number;
  fontSize?: number;
  animation?: AnimationType;
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

