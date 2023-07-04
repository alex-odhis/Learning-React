import React, {useState} from "react";
import { CongratulationMessage } from "../CongratulationMessage";
import { CounterButton } from "../CounterButton";
import { useLocation } from "react-router-dom";
import queryString  from "query-string"
import { DisplayIf } from "./DisplayIf";

export const CounterButtonPage = () => {
    //getting params from the URL
    //const { name } = useParams()

    //getting query from URL
    const location = useLocation();
    const startingValue = queryString.parse(location.search).startingValue || 0

    //define state
    const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue));
    const [hideMassage, setHideMessage] = useState(false)

    //method for the clicked button in CounterButton component(passed as a prop)
    const increement = () => setNumberOfClicks(numberOfClicks + 1);

    return (
        <>
            <h1> The Counter Button Page</h1>
            <DisplayIf condition={!hideMassage && numberOfClicks>=10}>
                <CongratulationMessage threshold={10} onHide={() => setHideMessage(true)} />
            </DisplayIf>

            <CounterButton onIncreement={increement} numberOfClicks={numberOfClicks} />
        </>    
    );
}