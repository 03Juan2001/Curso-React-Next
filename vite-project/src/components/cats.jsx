import { useState } from "react";

const cats = () => {
    const [ cat, setCat ] = useState({
        name: 'Botas',
        years: 5,
    })
    
    const handleClick = () => {
        //hace una copia del objeto "cat" y asi mismo modifica el valor de years
        setCat({ ...cat, years: cat.years + 1 })
    }

    return (
        <>
            <h1> {cat.name} - {cat.years} </h1>
            <button onClick={handleClick} className="btn btn-dark mb-2">
                + 1
            </button>
        </>
    )
}

export default cats;