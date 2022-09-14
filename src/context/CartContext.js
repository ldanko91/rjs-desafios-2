import { createContext, useState } from "react";
import TanquesImpor from '../assets/js/newtanques'

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    // const productCartList = TanquesImpor;
    const [productCartList, setProductCartList] = useState([]);

    const isInCart = (id)=>{
        const elementExists = productCartList.some((elemento)=>elemento.id == id);

        return elementExists;
    }
    
    const addProduct = (product, qty)=>{
        const newList = [...productCartList]
        if(isInCart(product.id)){
            const productIndex  = productCartList.findIndex( elemento=> elemento.id == product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + qty;
            setProductCartList(newList)
        } else {

            const newList = [...productCartList,product];
            setProductCartList(newList);
        }

    }

    const deleteProduct = (idProduct)=>{
        const copyArray = [...productCartList]
        const newArray = copyArray.filter(elm=>elm.id !== idProduct);
        setProductCartList(newArray);
    }

    const clearProductCartList = ()=>{
        setProductCartList([]);
    }


    return(
        <CartContext.Provider value={{productCartList, addProduct, deleteProduct, clearProductCartList}}>
            {children}
        </CartContext.Provider>
    )
}