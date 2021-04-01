export const updateObject = (state,updateObjetct)=>{
    return{
        ...state,
        ...updateObjetct
    }
}