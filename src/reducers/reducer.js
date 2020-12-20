import {ADD_FEATURE, REMOVE_FEATURE} from '../actions/actions';
const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};
/*
return{
        ...state, 
        additionalPrice: state.additionalPrice +=state.additionalFeatures[action.payload-1].price,
        features: [...state.car.features, state.additionalFeatures[action.payload-1]]
      }
*/

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_FEATURE: 
      console.log(action);
      return{
        ...state, 
        additionalPrice: state.additionalPrice +=state.additionalFeatures.find(feature => feature.id === action.payload).price,
        additionalFeatures: state.additionalFeatures.filter(feature => feature.id !== action.payload),
        car: {...state.car, features: [...state.car.features, state.additionalFeatures.find(feature => feature.id === action.payload)]}
      }
    case REMOVE_FEATURE:
      console.log(action);
      return{
        ...state,
        additionalPrice: state.additionalPrice -= state.car.features.find(feature => feature.id === action.payload).price,
        additionalFeatures: [...state.additionalFeatures, state.car.features.find(feature => feature.id === action.payload)],
        car: {...state.car, features: state.car.features.filter((feature) => feature.id !== action.payload)}
      }
    default:
      return state;
  }
}

export default reducer;