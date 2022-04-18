import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboader';
import { Header } from './components/Header/index';
import { NewTransctionsModal } from './components/NewTransctionsModal';
import { GlobalStyle } from './styles/global';

export function App() {
    Modal.setAppElement('#root'); //para ajudar na acessibilidade

    const [isNewTransctionModalOpen, setIsNewTransactionModalOpen] =
        useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }
    return (
        <>
            <Header onOpenNewTranslationModal={handleOpenNewTransactionModal} />
            <Dashboard />

            <NewTransctionsModal
                isOpen={isNewTransctionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
            <GlobalStyle />
        </>
    );
}
