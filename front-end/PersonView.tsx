import React from "react";
import Person from "./Person";

interface PersonProps {
  person: Person;
}

function personView({ person }: PersonProps) {
  return (
    <div
      style={{
        border: "solid",
        paddingLeft: "10px",
        borderRadius: "20px",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <div>
        <h1 style={{ color: "red" }}>Rank: {person.rank}</h1>
      </div>
      <div>
        <h2>{person.name}</h2>
      </div>
      <div>
        <h3>{person.description}</h3>
      </div>
    </div>
  );
}

export default personView;
