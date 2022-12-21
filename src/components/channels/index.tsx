import { useAppSelector } from "../../app/hooks"
import { selectChannelIds, selectIsChannelLoading } from "../../slices/channels"
import { selectIsMessagesLoading, selectLatestMessageAll } from "../../slices/messages"
import Channel from "./Channel"
import {useChannelsFetch, useMessagesFetch} from "./Channels.hooks"
import style from './Channels.module.css'

const Channels = () =>{
    const channelIds = useAppSelector(selectChannelIds)
    const lastMessageTimes = useAppSelector(selectLatestMessageAll)
    useChannelsFetch()
    useMessagesFetch()
    const isChannelLoading = useAppSelector(selectIsChannelLoading)
    const isMessagesLoading = useAppSelector(selectIsMessagesLoading)

    if(isChannelLoading || isMessagesLoading){
        return <div>
            loading...
        </div>
    }

    const sortByTime = () => {
        const channelIdWithTime = channelIds.map(channel => ({id: channel, time: lastMessageTimes.find(lmt => lmt?.channelId === channel)!.receivedTime }) )
        channelIdWithTime
        .sort((ch1, ch2) => new Date(ch2.time).getTime() - new Date(ch1.time).getTime() )
        console.log(lastMessageTimes, channelIdWithTime)
        return channelIdWithTime
        .map(({id}) => (
            <Channel id={id} key={id}/>
        ));
    }

    return <div className={style.channels} >
        {
            sortByTime()
        }
    </div>
}

export default Channels