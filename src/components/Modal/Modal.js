import { useCallback, useState } from "react";
import Select from "react-select";
import { Link, useNavigate } from 'react-router-dom';
import './modal.css'
export default function Modal({ active, setActive, error, setError }) {
    const navigate = useNavigate();
    const redirect = useCallback((link) => {
        navigate(`/${link}`);
    }, [navigate])
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>

                <div>
                    {!error ?
                        <div className="modal__text">Форма успешно отправлена!
                        <div className="box__modal success">
                            <div className="arrow"></div>
                        </div>
                        <div>
                            <button className="button__modal" onClick={() => { redirect('') }}> На главную</button>
                        </div>
                        </div>
                        : <div className="modal__text">
                            Ошибка
                            
                            <button className="form__button__next" onClick={() => setActive(false)}> Закрыть</button>
                        </div>}

                </div>

            </div>
        </div>
    )
}
