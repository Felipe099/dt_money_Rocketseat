import Modal from 'react-modal';

interface NewTransctionsModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransctionsModal({isOpen, onRequestClose} : NewTransctionsModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <h2>Cadastrar Transação</h2>
        </Modal>
    );
}