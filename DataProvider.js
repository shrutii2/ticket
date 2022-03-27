import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id":"1",
            "title":"Taj Mahal",
            "price":440,
            "count":1,
            "category":"monument",
            "image":"https://tse2.mm.bing.net/th?id=OIP.qQ9CCtjHHDqs8o-H3j8XCAHaEo&pid=Api&P=0&w=248&h=155",
            "description":"Enlisted in the Seven Wonders of the World, The Taj Mahal is one of the most beautiful and famous buildings located in the city of Agra , located on the banks of river Yamuna.•	It is a monument of true love as the imperial court depicts the grief of Shah Jahan over Mumtaz’s death. Mumtaz was Shah Jahan’s most beloved wife out of 11 and she died delivering her 14th child. As per the last wish of Mumtaz, Shah Jahan built the Taj Mahal to signify their eternal love."
        },
        {
            "_id":"2",
            "title":"Golden Temple",
            "price":390,
            "count":1,
            "category":"monument",
            "image":"https://tse3.mm.bing.net/th?id=OIP.XqaIsHKC9F5O_m-DPGYU4wHaHg&pid=Api&P=0&w=176&h=178",
            "description":"The holiest shrine and pilgrimage place located in Amritsar is The Golden Temple known as the Harmandir Sahib. This is the most famous and sacred Sikh Gurdwara in Punjab, India and adorned with rich history and gold gilded exterior. •	The Golden Temple is an open house of worship for all people, from all walks of life and faiths."
        },
        {
            "_id":"3",
            "title":"Meenakshi Temple",
            "price":390,
            "count":1,
            "category":"monument",
            "image":"https://tse3.mm.bing.net/th?id=OIP.XqaIsHKC9F5O_m-DPGYU4wHaHg&pid=Api&P=0&w=176&h=178",
            "description":"Meenakshi Temple is situated on the Southern banks of Vaigai River in the temple city Madurai. This temple is dedicated to Parvati and her consort, Shiva and is visited by most Hindu and Tamil devotees and architectural lovers throughout the world. "
        },
        {
            "_id":"4",
            "title":"Mysore Palace",
            "price":390,
            "count":1,
            "category":"monument",
            "image":"https://tse3.mm.bing.net/th?id=OIP.XqaIsHKC9F5O_m-DPGYU4wHaHg&pid=Api&P=0&w=176&h=178",
            "description":"The Mysore Palace is a famous historical monument in the city of Mysore in Karnataka.•	This palace is so grand in its proportions and beauty that it looks like it sprung out of a fairytale. The interiors of the palace are intricately designed and adorned with ornate ceilings.It is a sight not be missed with its spacious halls, lovely art paintings and Indo-Saracenic style architecture."
        },
        {
            "_id":"5",
            "title":"Hawa Mahal",
            "price":340,
            "count":1,
            "category":"monument",
            "image":"http://foodelhi.in/wp-content/uploads/2017/08/IMG_20170819_162616_187.jpg",
            "description":"Hawa Mahal is considered to be one of the tallest buildings in the world without any foundation. Despite being curved, it still stands firm due to its pyramidal shape.Explore a blend of beauty and Rajasthan culture, the Hawa Mahal also known as Palace of Winds is situated in the capital of Rajasthan, Jaipur."
        },
        {
            "_id":"1",
            "title":"Indian Museum, Calcutta",
            "price":390,
            "count":1,
            "category":"museum",
            "image":"https://kolkatatourism.travel/images/places-to-visit/headers/indian-museum-kolkata-entry-fee-timings-holidays-reviews-header.jpg",
            "description":"The Indian Museum in Central Kolkata, West Bengal, India, also referred to as the Imperial Museum at Calcutta in colonial-era texts.It has rare collections of antiques, armour and ornaments, fossils, skeletons, mummies and Mughal paintings. It was founded by the Asiatic Society of Bengal in Kolkata (Calcutta), India, in 1814. The founder curator was Nathaniel Wallich, a Danish botanist."
        },
        {
            "_id":"2",
            "title":"Government Museum, Chennai",
            "price":390,
            "count":1,
            "category":"museum",
            "image":"https://chennaitourism.travel/images/places-to-visit/headers/chennai-government-museum-tourism-entry-fee-timings-holidays-reviews-header.jpg",
            "description":"The Government Museum, Chennai, or the Madras Museum, is a museum of human history and culture located in the Government Museum Complex in the neighbourhood of Egmore in Chennai, India. It has the largest collection of Roman antiquities outside Europe. Among them, the colossal Museum Theatre is one of the most impressive.[1] The National Art Gallery is also present in the museum premises. Built in Indo-Saracenic style"
        },
        {
            "_id":"3",
            "title":"Chhatrapatu Shivaji Vastu Museum, Mumbai",
            "price":390,
            "count":1,
            "category":"museum",
            "image":"https://mumbaitourism.travel/images/places-to-visit/headers/chhatrapati-shivaji-maharaj-vastu-sangrahalaya-prince-of-wales-museum-mumbai-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg",
            "description":"Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, originally named Prince of Wales Museum of Western India, is a museum in Bombay (Mumbai) which documents the history of India from prehistoric to modern times.The museum houses approximately 50,000 exhibits of ancient Indian history as well as objects from foreign lands, categorised primarily into three sections: Art, Archaeology and Natural History. The museum houses Indus Valley Civilization artefacts, and other relics from ancient India from the time of the Guptas, Mauryas, Chalukyas and Rashtrakuta."
        },
        {
            "_id":"4",
            "title":"National Museum, Delhi",
            "price":390,
            "count":1,
            "category":"museum",
            "image":"https://delhitourism.travel/images/places-to-visit/headers/national-museum-of-india-delhi-tourism-entry-fee-timings-holidays-reviews-header.jpg",
            "description":"The National Museum in New Delhi, also known as the National Museum of India, is one of the largest museums in India.It also houses the National Museum Institute of History of Art, Conservation and Museology on the first floor which was established in 1983 and has been to be a university since 1989, and runs Masters and Doctoral level courses in art history, conservation and museology."
        },
        {
            "_id":"5",
            "title":"Salar Jung Museum, Hyderabad",
            "price":390,
            "count":1,
            "category":"museum",
            "image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fiac.isa-india.in%2Fsalar-jung-museum%2F&psig=AOvVaw0KVfpU5BdVhyQ4aynTfBJ9&ust=1648451244880000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIje6Mzd5fYCFQAAAAAdAAAAABAD",
            "description":"The Salar Jung Museum is an art museum located at Dar-ul-Shifa, on the southern bank of the Musi River in the city of Hyderabad, Telangana, India.It is one of the three National Museums of India.It has a collection of sculptures, paintings, carvings, textiles, manuscripts, ceramics, metallic artifacts, carpets, clocks, and furniture from Japan, China, Burma, Nepal, India, Persia, Egypt, Europe, and North America. It is one of the largest museums in the world."
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
