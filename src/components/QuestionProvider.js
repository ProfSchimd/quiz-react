import { useState, useEffect, createContext } from "react";
import { preprocessQuestions } from "../util";

export const QuestionContext = createContext();

export default function QuestionProvider({children}) {
    const [questions, setQuestions] = useState();
    useEffect(() => {
        fetch("questions.json")
            .then(response => response.json())
            .then(json => setQuestions(preprocessQuestions(json)))
    }, []);
    return (
        <QuestionContext.Provider value={{ questions, setQuestions }}>
            {children}
        </QuestionContext.Provider>

    );
}