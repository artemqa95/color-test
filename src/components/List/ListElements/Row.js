import React from 'react';
import ColorChanger from "../RowElements/ColorChanger";
import {refreshStore} from "../../../constants/data";

const Row = ({options, data, setData, setIsCreationMenu, setEditElement}) => {
    const {name, type, color, id} = options
    const deleteHandler = () => {
        const newData = data.filter(options =>
            id !== options.id
        )
        setData(newData)
        refreshStore(newData)
    }
    const changeColorHandler = color => {
        const newData = data.map(options => {
            if (id === options.id) {
                options.color = color.hex
            }
            return options
        })
        setData(newData)
        refreshStore(newData)
    }
    const changeDataHandler = () => {
        setIsCreationMenu(true)
        setEditElement(id)
    }
    const onMoveUp = () => {
        let newData = [...data]
        let prev
        for (let i=0;i<data.length;i++) {
            let current = newData[i]
            if (id === newData[i].id && id !== 1) {
                newData[i] = prev
                newData[i-1] = current
            }
            prev = newData[i]
        }
        setData(newData)
        refreshStore(newData)
    }

    const onMoveDown = () => {
        let newData = [...data]
        let prev
        for (let i=data.length-1;i>=0;i--) {
            let current = newData[i]
            if (id === newData[i].id && id !== 1) {
                newData[i] = prev
                newData[i-1] = current
            }
            prev = newData[i]
        }
        setData(newData)
        refreshStore(newData)
    }
    return (
        <div className={'row'} style={{background: color}}>
            <div>{name}</div>
            <div>Тип:{type}</div>
            <div>
                <ColorChanger onChangeColor={changeColorHandler} color={color}/>
            </div>
            <div>
                <button onClick={deleteHandler}>Удалить</button>
                <button onClick={changeDataHandler}>Изменить</button>
                <button onClick={onMoveUp}>⇧</button>
                <button onClick={onMoveDown}>⇩</button>
            </div>
        </div>
    );
};

export default Row;