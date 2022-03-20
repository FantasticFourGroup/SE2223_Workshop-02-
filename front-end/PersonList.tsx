import React from "react";
import Person from "./Person";
import PersonView from "./PersonView";

interface PersonListProps {
  list: Person[];
}

export default function PersonList({ list }: PersonListProps) {
  console.log(list, list.length < 1);
  if (list.length < 1) {
    return <></>;
  }

  return (
    <div>
      {list.map((person) => (
        <PersonView person={person} />
      ))}
    </div>
  );
}
