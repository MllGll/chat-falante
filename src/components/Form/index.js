import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

const Form = () => {

    return(
        <form>
            <label for="fname">Nome</label>
            <input className="inp" type="text" id="fname" name="fname"/>
            <label for="fname">Voz</label>
            <select className="sel" id="" name=""></select>
            <Link to="/chat">
                <input className="but" type="submit" value="PRONTO"/>
            </Link>
        </form>
    );
}

export default Form;