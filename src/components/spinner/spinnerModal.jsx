import React, { useState } from 'react';
import Modal from '../Modal';
import CoinFlipGame from "../coinflip/CoinFlipGame";
import RouletteSpinner from "../spinner/rouletteSpinner";

const SpinnerModal = () => {
    const [isModalopen, setModalOpen] = useState(true);

    return (
        <div>
            <h1>404</h1>
            <button onClick={() => setModalOpen(true)}>Open the Modal</button>

            <div>
                <CoinFlipGame />
            </div>

            {isModalopen && (
                <Modal onClose={() => setModalOpen(false)}>
                    <div>
                        <RouletteSpinner />
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default SpinnerModal;