import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectChannel, selectCurrentChannel, setCurrentChannel} from '../../slices/channels';
import { selectLatestMessageByChannelId } from '../../slices/messages';
import style from './Channels.module.css'

const Channel = ({id}: {id: number}) => {
    const dispatch = useAppDispatch()
    const channel = useAppSelector(selectChannel(id))
    const latestMessage = useAppSelector(selectLatestMessageByChannelId(id))
    const selectedChannel = useAppSelector(selectCurrentChannel)
    const [hovering, setHovering] = useState<boolean>(false)
    
    return <div 
        className={`${style.channel} ${selectedChannel?.id === id ? style.selected : hovering === true ? style.hovering : '' }`}
        onClick={() => dispatch(setCurrentChannel(id))}
        onMouseEnter={() => {
            if(selectedChannel?.id !== id){
                setHovering(true)
            }
        }}
        onMouseLeave={() => {
                setHovering(false)
        }}
        >
        <img
        alt='Display Pic'
        src={channel?.profileUrl}
        className={style.displayPic}
        />
        <div className={style.chat}>
            <div className={style.chatHeader}>
                <p className={style.name}>{channel?.name}</p>
                <p className={style.time}>
                {latestMessage && new Intl.DateTimeFormat('en-IN', {
                    hour: 'numeric',
                    minute: 'numeric',
                }).format(new Date(latestMessage.receivedTime))}
                </p>
            </div>
            <p className={style.latestMessage} >
                    {latestMessage?.text}
                </p>
        </div>
    </div>
}

export default Channel;