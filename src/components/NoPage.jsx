import React, { useState } from 'react';
import Modal from './Modal';

const NoPage = () => {
    const [isModalopen, setModalOpen] = useState(false);

    return (
        <div>
            <h1>404</h1>
            <button onClick={() => setModalOpen(true)}>Open the Modal</button>
            {isModalopen && (
                <Modal onClose={() => setModalOpen(false)}>
                    <h2>Modal Title</h2>
                    <p>This is modal content.</p>
                    <button>TEST</button>
                </Modal>
            )}
        </div>
    );
};

export default NoPage;