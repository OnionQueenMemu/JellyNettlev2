import { useEffect, useRef, useState } from 'react';
import SignUpForm from '../loginComponents/SignUp';
import { loginUser } from '../../store/session';
import { useDispatch } from 'react-redux';

const SignUpDemo = () => {
    const [scrollVal, setScrollVal] = useState(0);
    const childRef = useRef();
    const position = '0%';
    const dispatch = useDispatch();

    const demoLogin = () => {
        dispatch(loginUser('Demo-lition','password'))
    }

    useEffect(() => {
        document.body.onscroll = () => setScrollVal(document.scrollingElement.scrollTop);
        return () => {
            document.body.onscroll = null;
        }
    },[])


    return (
        <div className='any-system'>
            <SignUpForm props={{childRef, position, scrollVal, setScrollVal}} />
            <div className='demo-box'>
                <h2 className='demo-header'>Want to just try it out?</h2>
                <button className='demo-button' onClick={demoLogin}>Demo</button>
                <div className='game-dude-background' />
            </div>
        </div>
    )
}

export default SignUpDemo;