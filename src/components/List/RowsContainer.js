import React, {useState} from 'react';
import Row from "./ListElements/Row";
import {initialData, refreshStore} from "../../constants/data";
import {RowCreation} from "./ListElements/RowCreation";
import {CreationForm} from "./CreationForm";


const RowsContainer = () => {
    if (!localStorage.getItem('cardsData')) refreshStore(initialData)
    const [data, setData] = useState(
        JSON.parse(localStorage.getItem('cardsData'))
    )
    const [isCreationMenu, setIsCreationMenu] = useState(false)
    const [editElement, setEditElement] = useState(null)
    const creationOptions = {
        data, setData, setIsCreationMenu, editElement
    }
    let content =
        <div className='content container'>
            {data.map((options, index) => {
                return <Row key={index}
                            options={options}
                            data={data}
                            setData={setData}
                            setIsCreationMenu={setIsCreationMenu}
                            setEditElement={setEditElement}/>
            })}
            <RowCreation setIsCreationMenu={setIsCreationMenu}/>
        </div>
    if (isCreationMenu) content =
        <div className='content container'>
            <CreationForm options={creationOptions}/>
        </div>
    return content
};

export default RowsContainer;