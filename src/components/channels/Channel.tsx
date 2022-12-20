import { useAppSelector } from '../../app/hooks';
import { selectChannel} from '../../slices/channels';
import { selectLatestMessageByChannelId } from '../../slices/messages';
import style from './Channels.module.css'

const Channel = ({id}: {id: number}) => {

    const channel = useAppSelector(selectChannel(id))
    const latestMessage = useAppSelector(selectLatestMessageByChannelId(id))
    
    return <div className={style.channel}>
        <img
        alt='Display Pic'
        src={channel?.profileUrl}
        className={style.displayPic}
        />
        <div className={style.chatContent}>
            <p className={style.name}>{channel?.name}</p>
            <p className={style.latestMessage} >
                {latestMessage?.text}
            </p>
        </div>
    </div>
}

export default Channel;