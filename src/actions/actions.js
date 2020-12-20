export const ADD_FEATURE = "ADD_FEATURE";

export function addFeature(featureID){
  console.log(featureID);
  return {
    type:ADD_FEATURE, 
    payload: featureID
  };
}