import { useState } from "react";

export default function Player({ name, symbol, isActive, conChangeName }) {
  const [input, setField] = useState(true);
  const [palyerName, setPlayerName] = useState(name);

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="palyer">
        {input ? (
          <span className="palyer-name"> {palyerName}</span>
        ) : (
          <input
            type="text"
            value={palyerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        )}

        <span className="palyer-symbol">{symbol} </span>
        {input && (
          <button
            onClick={() => {
              console.log("clicked")

              
              return setField(false);
            }}
          >
            Edit
          </button>
        )}
      </span>
      {!input ? (
        <button
          onClick={() => {
            console.log("clicked saved")

            
              conChangeName(symbol, palyerName);
          
            return setField(true);
          }}
        >
          Save
        </button>
      ) : null}
    </li>
  );
}
