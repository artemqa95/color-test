import image from '../../../images/img.png'
import {useCallback} from "react";

export const RowCreation = ({setIsCreationMenu}) => {

    const addHandler = useCallback(() => {
        setIsCreationMenu(true)
        }, []
    )
    return (<img src={image} alt="addition" onClick={addHandler}/>)
}