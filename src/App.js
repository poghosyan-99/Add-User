import {useReducer} from 'react';
import {InfoContext} from './Context/infoContext';
import AppRouter from './Pages/AppRouter';
import './App.css';

function App() {

  const reducer = (state, action) => {
    switch(action.type){
      case 'inputValue':
        return{
          ...state, userInfo: { ...state.userInfo, [action.payload.inputName]: action.payload.inputValue},
        };
      case 'createImg':
        return{
          ...state,
          userInfo: { ...state.userInfo, image: action.payload},
        };
      // case 'selectedImg':
      //   return{
      //     ...state, 
      //     selectedImage: action.payload 
      //   };
      case 'addNewUser':
        return{
          ...state,
          usersData: [ ...state.usersData, state.userInfo],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    userInfo: {firstName: '', lastName: '', age: '', gender:'', address: '', email: '', password: '', phone: '', card: ''},
    usersData: [],
    // selectedImage: [],
  });

  return (
    <div className="App">
      <InfoContext.Provider value={{state, dispatch}}>
        <AppRouter/>
      </InfoContext.Provider>
    </div>
  );
}

export default App;
