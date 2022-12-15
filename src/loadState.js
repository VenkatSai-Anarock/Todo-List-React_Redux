export const loadState = () =>{
    try{
        const persistedState = localStorage.getItem('state');
        if(persistedState === null){
            return undefined;
        }
        else{
            return JSON.parse(localStorage.getItem('state'));
        }
    }
    catch(err){
        return undefined;
    }
}

export const saveState = (state) =>{
    const serializableState = JSON.stringify(state);
    localStorage.setItem('state',serializableState);
}