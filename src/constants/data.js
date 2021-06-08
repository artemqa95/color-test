export const initialData = [
    {name: "name1", type: "main", color: '#f4f4f4'},
    {name: "name2", type: "side", color: '#f8f8f8'}
].map((elm,index) => {
    elm.id = index+1
    return elm
})

export const refreshStore = data => {
    data = refreshID(data)
    localStorage.setItem(
        'cardsData',
        JSON.stringify(data)
    )
}

const refreshID = data => {
    return data.map((element, index) => {
        element.id = index+1
        return element
    })
}
