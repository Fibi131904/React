import React from 'react';

export const StoreContex = React.createContext(null);

export const Provider= (props:any)=>{
    return <StoreContex.Provider value={props.store}>
       {props.children} 
    </StoreContex.Provider>
}