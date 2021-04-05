import React, { useState, useEffect } from "react";

import GlobalStyles from "./Components/GlobalStyles";
import Loading from "./Components/Loading";
import Tours from "./Components/Tours";
import Refresh from "./Components/Refresh";

// api 'https://course-api.com/react-tours-project'
// breakpoint @media (min-width: 640px)

function App() {
    const url = "https://course-api.com/react-tours-project";
    let [isLoading, setisLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchData = async () => {
        setisLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setTours(data);
            setisLoading(false);
        } catch (error) {
            console.log(error);
            setisLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const removeTours = (id) => {
        const newTours = tours.filter((e) => e.id !== id);
        setTours(newTours);
    };

    if (isLoading) {
        return (
            <>
                <GlobalStyles />
                <Loading />
            </>
        );
    }
    if (tours.length === 0) {
        return (
            <>
                <GlobalStyles />
                <Refresh fetchData={fetchData} />
            </>
        );
    } else {
        return (
            <>
                <GlobalStyles />
                <Tours tours={tours} removeTours={removeTours} />;
            </>
        );
    }
}

export default App;
