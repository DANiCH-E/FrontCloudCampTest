import { useCallback, useState } from "react";
import Select from "react-select";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Setname, Setnickname, Setsername, Setsex } from "../../redux/reducer";
import axios from "axios";


export default function Step1() {
    const items = useSelector((state) => state.cart.itemsUsers);
    const [nickname, setNickname] = useState('');
    const [sername, setSername] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const redirect = useCallback((link) => {
        navigate(`/${link}`);
    }, [navigate]
    )

    
    
    return (
        <div className="form">
            <div className="text">Nickname</div>
            <input className="form__input" id='field-nickname' defaultValue={items.nickname} onChange={(event) => {
                setNickname(event.target.value)
                dispatch(Setnickname(event.target.value))

            }}></input>
            <div className="text">Name</div>
            <input className="form__input" id='field-name' defaultValue={items.name} onChange={(event) => {
                setName(event.target.value)
                dispatch(Setname(event.target.value))

            }}></input>
            <div className="text">Sername</div>
            <input className="form__input" id='field-sername' defaultValue={items.sername} onChange={(event) => {
                setSername(event.target.value)
                dispatch(Setsername(event.target.value))

            }}></input>
            <div>Sex</div>

            <select className="form__input" defaultValue={items.sex} onChange={e => {
                dispatch(Setsex(e.target.value))
            }}>
                <option value="Man">Man</option>
                <option value="Woman">Woman</option>
                
            </select>
            <button className="form__button__back" id="button-back" onClick={() => { redirect('') }}>Назад</button>
            <button className="form__button__next" id="button-next" onClick={() => { redirect('step2') }}>Далее</button>
        </div>
    )
}