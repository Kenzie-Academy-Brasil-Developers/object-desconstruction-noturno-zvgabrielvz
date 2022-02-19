const itemArray = [
    {
        "id": 1,
        "product": "Pão",
        "price": 5.80,
        "quantity": 3,
        "section": "Padaria"
    },
    {
        "id": 2,
        "product": "Leite",
        "price": 3.00,
        "quantity": 1,
        "section": "Derivados de Leite"
    },
    {
        "id": 3,
        "product": "Carne",
        "price": 10.00,
        "quantity": 2,
        "section": "Carne"
    },
    {
        "id": 4,
        "product": "Tomate",
        "price": 4.00,
        "quantity": 5,
        "section": "Hortifruti"
    },
]


const testMap = (array) => {

    const result = array.map((value) => {
        let { id, price } = value
        if (id > 2) { 

            value.price = 2
        
        }
        return {...value, price}
    })
    return result 
}

const testFilter = (array) => {
    
    const result = array.filter( ({id}) => {
        return id <= 2
    })
    return result
}

const testFind = (array) => {

    const result = array.find( ({id, product}) => {
        return product === 'Leite'
    })

    return result;

}

const testReduce = (array) => {

    const totalList = array.reduce((acc, {quantity, price}) => {
        acc = acc + (quantity * price);

        return acc
    }, 0)

    return totalList
}

const priceMaxthree = (array) => {
    
    const result = array.filter( ({price}) => {
        return price > 3;
    })
    return result
}


const addNewPrice = (array) => {

    const result = array.map((value) => {
        let { product, price } = value
        if (product === "Leite") { 

            price = 4
        
        }
        return {...value, price}
    })
    return result 
}


const costAllPadaria = (array) => {

    const totalList = array.reduce((acc, {quantity, price, section}) => {
        if(section === "Padaria"){
            acc = acc + (quantity * price);
        }
        return acc
    }, 0)

    return totalList
}