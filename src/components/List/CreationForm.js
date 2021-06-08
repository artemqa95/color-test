import ColorChanger from "./RowElements/ColorChanger";
import { useState} from "react";
import {refreshStore} from "../../constants/data";

export const CreationForm = ({options}) => {

    const {data, setData, setIsCreationMenu, editElement} = options
    const [inputData, setInputData] = useState({name: "", type: "", color: '#FFF'})
    const changeColorHandler = color => {
        setInputData({
            ...inputData,
            color: color.hex
        })
    }
    const changeInputHandler = (event, prop) => {
        setInputData(
            {
                ...inputData,
                [prop]: event.target.value
            })
    }
    const cancelHandler = () => {
        setIsCreationMenu(false)
    }
    const applyHandler = () => {
        console.log(inputData)
        const {name, type} = inputData
        if (name.length > 0 && type.length > 0) {
            let copy = [...data]
            if (editElement) {
                copy = copy.map(element => element.id === editElement? inputData : element)
            }
            else {
                copy.push(inputData)
            }
            setData(copy)
            refreshStore(copy);
            setIsCreationMenu(false)
        } else {
            alert('Введите имя и укажите тип')
        }
    }
    return <div>
        <div>Создание карточки</div>
        <input type="text" value={inputData.name} onChange={event => changeInputHandler(event, 'name')}/>
        <input type="text" value={inputData.type} onChange={event => changeInputHandler(event, 'type')}/>
        <ColorChanger onChangeColor={changeColorHandler} color={inputData.color}/>
        <div style={{background: inputData.color}}>Пример</div>
        <button onClick={applyHandler}>Принять</button>
        <button onClick={cancelHandler}>Отменить</button>
    </div>
}