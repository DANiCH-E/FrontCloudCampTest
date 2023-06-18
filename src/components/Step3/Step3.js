import { useCallback, useState } from "react";
import Select from "react-select";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Setname, Setnickname, Setsername, Setsex, Setabout } from "../../redux/reducer";
import axios from "axios";
import Modal from "../Modal/Modal";

export default function Step3() {
    const [modalActive, setModalActive] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate();
    const redirect = useCallback((link) => {
        navigate(`/${link}`);
    }, [navigate]
    )
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.itemsUsers);

    async function postUser() {

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            }
        };
        const body = JSON.stringify({
            nickname: items.nickname,
            name: items.name,
            sername: items.sername,
            sex: items.sex,
            about: items.about,
            phone: items.phone,
            email: items.email,
            advantages: items.advantages,
            checkbox: items.checkbox,
            radio: items.radio
        })

        const res = await axios.post('https://api.sbercloud.ru/content/v1/bootcamp/frontend/', body, config)

        if (res.data = 'success') {
            setModalActive(true)
            setError(false)
        }
        else {
            setModalActive(true)
            setError(true)
        }
            
    }

    return (
        <div className="form">
            <div className="text">About</div>

            <textarea className="placeholder" defaultValue={items.about} onChange={e => {
                dispatch(Setabout(e.target.value))
            }} />

            <div className="text">{items.about.length}</div>

            <button id="button-back" className="form__button__back" onClick={() => { redirect('step2') }}>Назад</button>
            <button id="button-send" className="form__button__next" onClick={postUser}>Отправить</button>

            <Modal active={modalActive} setActive={setModalActive} error={error} setError={setError} />
        </div>
    )
}