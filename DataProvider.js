import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id":"1",
            "title":"Pepper Barbeque Chicken",
            "price":440,
            "count":1,
            "category":"museum",
            "image":"https://tse2.mm.bing.net/th?id=OIP.qQ9CCtjHHDqs8o-H3j8XCAHaEo&pid=Api&P=0&w=248&h=155",
            "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
        },
        {
            "_id":"2",
            "title":"NonVeg Supreme",
            "price":390,
            "count":1,
            "category":"museum",
            "image":"https://tse3.mm.bing.net/th?id=OIP.XqaIsHKC9F5O_m-DPGYU4wHaHg&pid=Api&P=0&w=176&h=178",
            "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
        },
        {
            "_id":"3",
            "title":"NonVeg Supreme",
            "price":390,
            "count":1,
            "category":"museum",
            "image":"https://tse3.mm.bing.net/th?id=OIP.XqaIsHKC9F5O_m-DPGYU4wHaHg&pid=Api&P=0&w=176&h=178",
            "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
        },
        {
            "_id":"4",
            "title":"NonVeg Supreme",
            "price":390,
            "count":1,
            "category":"museum",
            "image":"https://tse3.mm.bing.net/th?id=OIP.XqaIsHKC9F5O_m-DPGYU4wHaHg&pid=Api&P=0&w=176&h=178",
            "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
        },
        {
            "_id":"5",
            "title":"Corn Pizza",
            "price":340,
            "count":1,
            "category":"museum",
            "image":"http://foodelhi.in/wp-content/uploads/2017/08/IMG_20170819_162616_187.jpg",
            "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
        },
        {
            "_id":"1",
            "title":"NonVeg Supreme",
            "price":390,
            "count":1,
            "category":"monument",
            "image":"https://tse3.mm.bing.net/th?id=OIP.XqaIsHKC9F5O_m-DPGYU4wHaHg&pid=Api&P=0&w=176&h=178",
            "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
        },
        {
            "_id":"2",
            "title":"NonVeg Supreme",
            "price":390,
            "count":1,
            "category":"monument",
            "image":"https://tse3.mm.bing.net/th?id=OIP.XqaIsHKC9F5O_m-DPGYU4wHaHg&pid=Api&P=0&w=176&h=178",
            "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
        },
        {
            "_id":"3",
            "title":"NonVeg Supreme",
            "price":390,
            "count":1,
            "category":"monument",
            "image":"https://tse3.mm.bing.net/th?id=OIP.XqaIsHKC9F5O_m-DPGYU4wHaHg&pid=Api&P=0&w=176&h=178",
            "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
        },
        {
            "_id":"4",
            "title":"NonVeg Supreme",
            "price":390,
            "count":1,
            "category":"monument",
            "image":"https://tse3.mm.bing.net/th?id=OIP.XqaIsHKC9F5O_m-DPGYU4wHaHg&pid=Api&P=0&w=176&h=178",
            "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
        },
        {
            "_id":"5",
            "title":"NonVeg Supreme",
            "price":390,
            "count":1,
            "category":"monument",
            "image":"https://tse3.mm.bing.net/th?id=OIP.XqaIsHKC9F5O_m-DPGYU4wHaHg&pid=Api&P=0&w=176&h=178",
            "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
        }
    ])

    const [cart, setCart] = useState([])

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
                
            })
            setCart([...cart, ...data])
        }else{
            alert("The product has already been added to cart.")
        }
    }

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}