import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DogDetails from "./DogDetails"
import { v4 as uuidv4 } from "uuid"

const Dog = () => {
    let { dogName } = useParams()
    const { name, src, age, facts } = DogDetails[dogName]

    const [ imgSrc, setImgSrc ] = useState(`./assets/${src}.jpg`)

    // useEffect(() => {
    //     setImgSrc(`./assets/${src}.jpg`)
    // }, [dogName])
    // console.log(imgSrc)

    return (
        <div>
            <h1>{name}</h1>
            
            <img src={imgSrc} alt={name} />
            <h3>More about {name}:</h3>
                <p>Age: {age}</p>
                {facts.map(fact => (
                    <p key={uuidv4()}>{fact}</p>
                ))}
        </div>
    )
}

export default Dog