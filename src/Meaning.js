import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <div>
        <div className="definition">
          <strong>Definition</strong>
          <br />
          {props.meaning.definition}
        </div>
        <div className="example">
          <em>Example</em> <br />
          <em>{props.meaning.example}</em>
        </div>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
