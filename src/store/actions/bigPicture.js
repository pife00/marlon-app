import * as  actionTypes from './actionTypes';

export const setBigPicture = (image) =>{
    return{
        type:actionTypes.SET_BIGPICTURE_VIEW,
        image:image
    }
    
}