import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCurrentChannel, selectIsChannelLoading, selectIsProfileOpen, setIsProfileOpen} from '../../slices/channels';
import { selectIsMessagesLoading, selectMessagesByChannelId, selectText, sendMessage, setText } from '../../slices/messages';
import { Message } from './Message';
import style from './Messages.module.css';

const Messages = () => {
    const dispatch = useAppDispatch()
    const currentChannel = useAppSelector(selectCurrentChannel)
    const isMessagesLoading = useAppSelector(selectIsMessagesLoading)
    const isChannelLoading = useAppSelector(selectIsChannelLoading)
    const messages = useAppSelector(selectMessagesByChannelId(currentChannel?.id))
    const text = useAppSelector(selectText)
    const isProfileOpen = useAppSelector(selectIsProfileOpen)

    if(isChannelLoading || isMessagesLoading){
        return <></>
    }

    if(currentChannel === undefined){
        return <div className={style.container}>
            <div className={style.inner}>
                <b className={style.welcomeText} >Welcome to Whatsapp Web</b>
            </div>
        </div>
    }

    return <div className={`${style.container} ${isProfileOpen === true ? style.profileOpen : ''}`}>
            <div 
            className={style.profile} 
            onClick={() => dispatch(setIsProfileOpen(true))} >
                <img
                alt={'Display Pic'}
                src={currentChannel.profileUrl}
                />
                <div className={style.name}>
                {currentChannel.name}
                </div>
            </div>
            <div className={style.messages}>
                {messages
                .slice()
                .sort((msg1, msg2) => new Date(msg2.receivedTime).getTime() - new Date(msg1.receivedTime).getTime() )
                .map(msg => <Message
                message={msg}
                key={msg.id}
                />)}
            </div>
            <div className={style.textareaContainer}>
                <textarea
                    value={text}
                    className={style.sendMessages}
                    placeholder={"Send a message"}
                    onChange={(e) => dispatch(setText(e.target.value))}
                    onKeyDown={(e) => {
                            if(e.key !== 'Enter') {
                                return
                            }
                            e.preventDefault()
                            dispatch(sendMessage(currentChannel.id))
                        }
                    }
                ></textarea>
            </div>
        </div>
}

export default Messages