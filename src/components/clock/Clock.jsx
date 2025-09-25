import { useEffect, useState } from "react";

const Clock = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if(isRunning) {
            let id = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        setIntervalId(id);
        } else {
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(null);
            }
        }

        return () => {
            if (intervalId) {
                 clearInterval(intervalId);
            }
        }
    }, [isRunning])

    const handleRunning = () => {
        if (isRunning && intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }

        setIsRunning(prev => !prev)
    }

    return (
        <>
            <h1>{time}</h1>
            <button onClick={handleRunning}>
                {isRunning ? "Stop" : "Start"}
            </button>
        </>
    )
}

export default Clock;