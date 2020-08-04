import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/30204464?s=460&u=0af33a7e0fbfa4176abf5186f3cf1ca712ccc552&v=4" alt="Gabriel" />
                <div>
                    <strong>Gabriel</strong>
                    <span>Game Design</span>
                </div>
            </header>
            <p>
                Aulas de Game Desgin
                        <br /><br />
                        Abordando as teorias e também ferramentas mais usadas no mercado
            </p>
            <footer>
                <p>
                    Preço/hora
                        <strong>R$ 25,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;