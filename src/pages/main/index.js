import './styles.css';
import Message from '../../components/Message'

function Main() {
  return (
    <div className="box">
        <div className="chatbox">
            <Message/>
        </div>
        <div className="chatform">
            <input/>
            <input type="submit" value="ENVIAR"/>
        </div>
    </div>
  );
}

export default Main;