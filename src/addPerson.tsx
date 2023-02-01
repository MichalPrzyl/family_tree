import React from 'react';
import {useState} from 'react';
import { Context } from './App';

const AddPerson = (props: any) =>{
    
    // context
    const context = React.useContext(Context);
    
    // state
    const [input, setInput] = useState({firstName: "", lastName: ""})

    const setValue = (e: any) =>{
        const {name, value} = e.target;
        setInput({...input, [name]: value});
    }

    const addPerson = () => {
        const newObj = {
            id: peopleList.length + 1,
            firstName: input.firstName,
            lastName: input.lastName
        }

        setPeopleList([...peopleList, newObj]);
        setInput({firstName: "", lastName: ""})
    }
 
    const {peopleList, setPeopleList} = context;

    return (
        <>
        <div>
            <input value={input.firstName} name="firstName" onChange={setValue} type="text"></input>
            <input value={input.lastName} name="lastName" onChange={setValue} type="text"></input>
            <button onClick={() => addPerson()}>Dodaj</button>
            <button onClick={props.generateTreeFunction}>Generuj drzewo</button>
            
        </div>
        </>
    )
}

export default AddPerson;