import { createContext, useEffect, useState} from 'react';
export const dataContext = createContext();

const DataProvider = ({children}) => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(savedCart);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    
    const buyProduct=(product)=>{
        const productrepeat=cart.find((item)=>item.id===product.id);
        if(productrepeat){
          setCart(cart.map((item)=>item.id===product.id ? {...product, quantity:productrepeat.quantity+1}:item));
        }else{
          setCart([...cart, product]);
        }
      };
    return <dataContext.Provider value={{cart,setCart, buyProduct}}>{children}</dataContext.Provider>;
};

export default DataProvider;