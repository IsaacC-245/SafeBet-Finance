import React, { useState, useEffect } from "react";

const CoinFlipGame = ({ onResult }) => {
    const [guess, setGuess] = useState(null);
    const [flipping, setFlipping] = useState(false);
    const [result, setResult] = useState(null);

    const handleGuess = (userGuess) => {
        setGuess(userGuess);
        setFlipping(true);
        setResult(null);

        setTimeout(() => {
            const coin = Math.random() < 0.5 ? "heads" : "tails";
            setResult(coin);
            setFlipping(false);
            if (onResult) {
                onResult(userGuess === coin); // return true/false
            }
        }, 2000);
    };

    const getMessage = () => {
        if (!result) return "";
        if (result === guess) return `✅ You guessed right! It’s ${result.toUpperCase()}!`;
        return `❌ Nope! It was ${result.toUpperCase()}.`;
    };

    return (
        <div style={styles.container}>
            <h2>🪙 Flip the Coin</h2>

            {!flipping && !result && (
                <div style={styles.buttonRow}>
                    <button onClick={() => handleGuess("heads")} style={styles.button}>Heads</button>
                    <button onClick={() => handleGuess("tails")} style={styles.button}>Tails</button>
                </div>
            )}

            {flipping && (
                <div>
                    <img
                        src="/heads.gif"
                        alt="Flipping..."
                        style={styles.image}
                    />
                    <p>Flipping...</p>
                </div>
            )}

            {!flipping && result && (
                <div>
                    <h3>{getMessage()}</h3>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: { textAlign: "center", padding: "2rem" },
    buttonRow: { display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" },
    button: { padding: "0.7rem 1.2rem", fontSize: "1rem", borderRadius: "8px", cursor: "pointer", border: "2px solid #444", backgroundColor: "#f2f2f2" },
    image: { width: "150px", margin: "1rem auto" }
};

export default CoinFlipGame;