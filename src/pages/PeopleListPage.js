import React from "react";
import { PeopleList } from "../PeopleList";

const people = [
  {
    name : 'John',
    age: 12,
    hairColor: 'red'
  },
  {
    name: 'mary',
    age: 14,
    hairColor: 'blonde'
  },
  {
    name: 'erick',
    age: 5,
    hairColor: 'brunette'
  }
]

export const PeopleListPage = ()=> (
    <>
        <h1>The PeopleList Page</h1>
        <PeopleList people={people} />
    </>
);