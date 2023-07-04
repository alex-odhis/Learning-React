import React from "react";
import { Greeting } from "../Greeting";

export const HomePage = ()=> (
    <>
        <h1>The HomePage</h1>
        <Greeting name='Alex' numberOfMessages={10} />
    </>
);