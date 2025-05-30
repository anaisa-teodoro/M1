import React, {useState, useEffect,useRef} from "react";

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setelapsedTime] = useState(0); 
    const intervalRef = useRef(null);

    return (<></>);

}

export default Stopwatch;