export interface ModalProps {
    type: ""
    content: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    onClose?: () => void;
}