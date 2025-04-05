import React, { useState } from 'react';
import Modal from '../Modal';
import CoinFlipGame from "../coinflip/CoinFlipGame";

const ModalDemo = () => {
    const [isModalopen, setModalOpen] = useState(false);

    return (
        <div>
            <h1>404</h1>
            <button onClick={() => setModalOpen(true)}>Open the Modal</button>

            <div>
                <CoinFlipGame />
            </div>

            {isModalopen && (
                <Modal onClose={() => setModalOpen(false)}>
                    <h2>Modal Title</h2>
                    <p>This is modal content.</p>
                    <div>
                        <CoinFlipGame />
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default ModalDemo;