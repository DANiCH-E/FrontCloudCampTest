import { useCallback, useState } from "react";
import Select from "react-select";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Setemail, Setname, Setnickname, Setsername, Setsex, Setabout, Setphone } from "../../redux/reducer";
import axios from "axios";
import MaskedInput from 'react-text-mask';
import '../main.css'

export default function Main() {
    const navigate = useNavigate();
    const redirect = useCallback((link) => {
        navigate(`/${link}`);

    }, [navigate])
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.itemsUsers);
    const validateEmail = (text) => {
        if (!text.includes('@')) {
            return ("Email should contain @")
        }
        if (!text.includes('.')) {
            return ("Email should contain domain")
        }
    }

    return (
        <div className="body">
            
             <div className="form">
                <div className="avatar__box">
                    <div className="avatar__text">
                        {items.sername[0]}
                        {items.name[0]}
                    </div>
                    
                </div>

                <h3 className="form__header">
                    {items.sername}{items.name}
                </h3>
                
                
                    <Link className="links" to="https://t.me/DANiCH_E">Telegram</Link>
                    <Link className="links" to="https://github.com/DANiCH-E">Github</Link>
                    <Link className="links" to="https://docs.google.com/document/d/146QTcVu5RHoU1gIVYjez5DMzmGQNYu8p/edit?usp=drive_link&ouid=114414978353458338864&rtpof=true&sd=true">Resume</Link>
                
                <div className="line"/>
                <div className="text">Номер телефона</div>
                <MaskedInput className="form__input" onChange={(e) => {
                    dispatch(Setphone(e.target.value))
                }}
                    defaultValue={items.phone}
                    mask={['+', 7, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]} guide={true} showMask={true} />
                
                <div className="text">Email</div>
                <input className="form__input" defaultValue={items.email} onChange={(e) => {
                    dispatch(Setemail(e.target.value))
                }}></input>

                <div className="warning">{validateEmail(items.email)}</div>
                <button id="button-start" className="form__button__next" onClick={() => { redirect('step1') }}>Начать</button>
            </div>
            
        </div>
    )
}
