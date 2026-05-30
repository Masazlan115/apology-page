import { useState, useRef } from "react";
import "./App.css";

export default function App() {
  const [forgiven, setForgiven] = useState(false);
  const noRef = useRef(null);

  const noPosition = useRef("right"); // track current side

function runAway(e) {
  e.preventDefault();
  e.stopPropagation();

  const btn = noRef.current;

  if (noPosition.current === "right") {
    btn.style.position = "relative";
    btn.style.order = "-1"; // move to left of Yes
    noPosition.current = "left";
  } else {
    btn.style.position = "relative";
    btn.style.order = "1"; // move to right of Yes
    noPosition.current = "right";
  }
}

  return (
    <div className="page">
      <div className="petals">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="petal" style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 5}s`,
            animationDelay: `${-Math.random() * 8}s`,
          }} />
        ))}
      </div>

      <div className="card">
        <div className="rose">🌹</div>
        <h1>I'm so sorry Sayang ku Aineen</h1>
        <p className="tagline">Cara I salah tadi</p>

        <p className="message">
          I know I hurt you, sbb I terus pergi tadi but itu utk kebaikkan kita sayang.<br />
          You know you mean everything to me, Please jangan tinggalkan I sayang.<br />
          Please Forgive me sayang, Next time I akan ubah cara I 💕
        </p>

        {!forgiven ? (
          <div className="btn-area">
            <button className="btn-yes" onClick={() => setForgiven(true)}>
              Yes, I forgive you 💖
            </button>
            <button
              ref={noRef}
              className="btn-no"
              onMouseEnter={runAway}
              onTouchStart={runAway}
              onTouchEnd={(e) => { e.preventDefault(); e.stopPropagation(); }}

              >
              No
              </button>
          </div>
        ) : (
          <p className="accepted">Thank you! I promise to do better for you sayang.🌹</p>
        )}
      </div>
    </div>
  );
}