export const selected=(state={},action)=>{
  switch(action.type){
    case 'selected':return action.payload;
    break;
  }
  return state;
}
