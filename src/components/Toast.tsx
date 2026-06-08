import { useEffect } from 'react';

interface ToastProps {
  message: string;
  visible: boolean;
  onHide: () => void;
}

export default function Toast({ message, visible, onHide }: ToastProps): JSX.Element {
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(onHide, 2200);
    return () => clearTimeout(t);
  }, [visible, onHide]);

  return <div className={`toast${visible ? ' toast-show' : ''}`}>{message}</div>;
}
