import React, {useState, useEffect} from 'react';
import { Auth as AuthUser } from '../../request';
import './Auth.css';

export default function Auth() {
    const [isSending, setIsSending] = useState(false);
    const [name, setName] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const registerUser = (name: string) => {
        AuthUser.createUser(name);
    }

    return (
        <div className='auth'>
            auth
            <button onClick={() => registerUser('jhhlkjhlkjgkjhfjfhs')}>тымкни</button>
        </div>
    )
}