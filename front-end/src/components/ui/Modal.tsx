import type { ReactNode } from "react";

type Props = { title: string; onClose: () => void; children: ReactNode };

// Janela sobreposta; clicar fora dela também fecha
export function Modal({ title, onClose, children }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="card modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="modal__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
