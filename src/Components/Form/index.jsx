import { useNavigate } from 'react-router';
import Img from '../../images/img1.png'
import './style.css';
import { useContext } from 'react';
import { InfoContext } from '../../Context/infoContext';

const Form = () => {
    const { state, dispatch } = useContext(InfoContext);
    const { userInfo } = state;

    const navigate = useNavigate();
    const handleClickUsersP = () => {
        navigate('/');
    }

    const createImg = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            dispatch({type: 'createImg', payload: reader.result})
        }
    }

    // const selectImg = (e) => {
    //     const file = e.target.files[0];
    
    //     if (file) {
    //       const reader = new FileReader();
    
    //       reader.onload = (e) => {
    //         dispatch({ type: 'selectedImg', payload: e.target.result });
    //       };
    
    //       reader.readAsDataURL(file);
    //     }
    // };  


    console.log(userInfo);

    const addUser = (e) => {
        e.preventDefault();
        dispatch({type: 'addNewUser'});
        e.target.reset();
    }

    return(
        <div className="Form">
            <div>
                <button onClick={handleClickUsersP}>
                    <i className="fa-solid fa-left-long"></i>
                    Users Page
                </button>
                <img src={Img} alt="" />
            </div>
            <div className="form-div">
                <form onSubmit={addUser}>
                    <label className="img-label">
                        <i className="fa fa-2x fa-camera"></i>
                        <input type="file" className='img' onChange={createImg}/>
                    </label>
                    <input onChange={(e) => dispatch({ type: "inputValue", payload: { inputName: e.target.name, inputValue: e.target.value },})} type="text" name="firstName" placeholder="First Name" required />
                    <input input onChange={(e) => dispatch({ type: "inputValue", payload: { inputName: e.target.name, inputValue: e.target.value },})} type="text" name="lastName" placeholder="Last Name" required />
                    <input input onChange={(e) => dispatch({ type: "inputValue", payload: { inputName: e.target.name, inputValue: e.target.value },})} type="text" name="gender" placeholder="Gender" required />
                    <input input onChange={(e) => dispatch({ type: "inputValue", payload: { inputName: e.target.name, inputValue: e.target.value },})} type="date" name="birthDate" required />
                    <input input onChange={(e) => dispatch({ type: "inputValue", payload: { inputName: e.target.name, inputValue: e.target.value },})} type="number" name="age" placeholder="Age" min={1} required />
                    <input input onChange={(e) => dispatch({ type: "inputValue", payload: { inputName: e.target.name, inputValue: e.target.value },})} type="text" name="address" placeholder="Address" required />
                    <input input onChange={(e) => dispatch({ type: "inputValue", payload: { inputName: e.target.name, inputValue: e.target.value },})} type="email" name="email" placeholder="Email" required />
                    <input input onChange={(e) => dispatch({ type: "inputValue", payload: { inputName: e.target.name, inputValue: e.target.value },})} type="password" name="password" placeholder="Password" className='password' required />
                    <input input onChange={(e) => dispatch({ type: "inputValue", payload: { inputName: e.target.name, inputValue: e.target.value },})} type="tel" name="phone" placeholder='Phone Number' required />
                    <input input onChange={(e) => dispatch({ type: "inputValue", payload: { inputName: e.target.name, inputValue: e.target.value },})} type="text" name="card" placeholder="Bank Card" required />
                    <button className='Add-User'>Add User</button>
                </form>
            </div>
        </div>
    )
}
export default Form;