import {RESTUARANTS}  from './constants';
import produce from 'immer';
export const initialState= {
        restuarant:{
            
        },
         
 
};

const Restuarant =(state=initialState ,action)=>
    produce(state,draft=>{
	switch (action.type) {
		case RESTUARANTS.ADD_RESTUARANTS:
		break;
            
        case RESTUARANTS.CHANGE_NAME:
            draft.restuarant.name = action.name;
            break;
	
        case RESTUARANTS.CHANGE_EMAIL:
            draft.restuarant.email = action.email;
            break;
	
        case RESTUARANTS.CHANGE_PASSWORD:
            draft.restuarant.password = action.password;
            break;
	
        case RESTUARANTS.CHANGE_ADDRESS:
            draft.restuarant.address = action.address;
            break;
	
        case RESTUARANTS.CHANGE_CITY:
            draft.restuarant.city = action.city;
            break;
	
        case RESTUARANTS.CHANGE_EMAIL:
            draft.restuarant.email = action.email;
            break;
	
        case RESTUARANTS.CHANGE_STATE:
            draft.restuarant.state = action.state;
            break;
	
        case RESTUARANTS.CHANGE_ZIP:
            draft.restuarant.zip = action.zip;
            break;
	
        case RESTUARANTS.CHANGE_CONTACT1:
            draft.restuarant.contact1 = action.contact;
            break;
	
        case RESTUARANTS.CHANGE_CONTACT2:
            draft.restuarant.contact2 = action.contact;
            break;
        case RESTUARANTS.CHANGE_TAGLINE:
            draft.restuarant.tagline = action.tagline;
            break;
        case RESTUARANTS.CHANGE_DESCRIPTION:
            draft.restuarant.description = action.description;
            break;

        case RESTUARANTS.CHANGE_FACEBOOK:
            draft.restuarant.facebookURL = action.facebook;
            break;
        case RESTUARANTS.CHANGE_INSTAGRAM:
            draft.restuarant.instagramURL = action.instagram;
            break;
        case RESTUARANTS.CHANGE_PINTEREST:
            draft.restuarant.pinterestURL = action.pinterest;
            break;
        case RESTUARANTS.CHANGE_TWITTER:
            draft.restuarant.twitterURL = action.twitter;
            break;
        case RESTUARANTS.CHANGE_GOOGLE_MAP:
            draft.restuarant.googleMapURL = action.googleMap;
            break;
       
        case RESTUARANTS.CHANGE_COVER:
            draft.restuarant.coverImage = action.cover;
            break;

        case RESTUARANTS.CHANGE_LOGO:
            draft.restuarant.logo=action.logo;
            break;
	
    }
});
export default Restuarant;