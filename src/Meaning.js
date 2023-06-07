import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <div className="definition">{props.meaning.definition}</div>
        <div className="example">
          <em>{props.meaning.example}</em>
        </div>
      </div>
    </div>
  );
}
