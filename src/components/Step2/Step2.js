import React from "react";
import { useCallback } from "react";
import Select from "react-select";
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {incAdv, SetItemInAdv, SetAdv, SetRadio, SetCheckbox} from "../../redux/reducer";
export default function Step2() {
    const navigate = useNavigate();
    const items = useSelector((state) => state.cart.itemsUsers);
    const itemsadv = useSelector((state) => state.cart.itemsAdv);
    const redirect = useCallback((link) => {
        navigate(`/${link}`);
    }, [navigate]
    )
    
    const dispatch = useDispatch();
    return(
        <div className="form">
            <div className="text">Advantages</div>
            
            <input className="form__input" defaultValue={items.advantages} onChange={(e) => {
                    dispatch(SetAdv(e.target.value))
                }}></input>
                    
            <div className="text">Checkbox group</div>
            <div/><input type="checkbox" defaultValue={items.checkbox} value={1} onChange={(e) => {
                    dispatch(SetCheckbox(e.target.value))
                }}/>1
            <div/><input type="checkbox" value={2} defaultValue={items.checkbox} onChange={(e) => {
                    dispatch(SetCheckbox(e.target.value))
                }}/>2
            <div/><input type="checkbox" value={3} defaultValue={items.checkbox} onChange={(e) => {
                    dispatch(SetCheckbox(e.target.value))
                }}/>3
            <div className="text">Radio group</div>
            <div/><input type="radio" value={1} defaultValue={items.radio} onChange={(e) => {
                    dispatch(SetRadio(e.target.value))
                }}/>1
            <div/><input type="radio" value={2} defaultValue={items.radio} onChange={(e) => {
                    dispatch(SetRadio(e.target.value))
                }}/>2
            <div/><input type="radio" value={3} defaultValue={items.radio} onChange={(e) => {
                    dispatch(SetRadio(e.target.value))
                }}/>3
            <div/>
            <button id="button-back" className="form__button__back" onClick={() => { redirect('step1') }}>Назад</button>
            <button id="button-next" className="form__button__next" onClick={() => { redirect('step3') }}>Далее</button>
        </div>
    )
}