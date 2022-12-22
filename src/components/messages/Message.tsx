import { Message as IMessage } from "../../slices/messages";
import style from './Messages.module.css';


export const Message = ({message}: {message: IMessage}) => {
    return <div className={`${style.message} ${message.senderId === 0 ? style.shiftRight : ''}`}>
        <p>
            {message.text}
        </p>
        <p className={style.time}>
            {new Intl.DateTimeFormat('en-IN', {
                hour: 'numeric',
                minute: 'numeric',
            }).format(new Date(message.receivedTime))}
        </p>
    </div>
}