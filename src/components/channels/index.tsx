import { useAppSelector } from "../../app/hooks"
import { selectChannelIds, selectIsChannelLoading } from "../../slices/channels"
import Channel from "./Channel"
import {useChannelsFetch, useMessagesFetch} from "./Channels.hooks"
import style from './Channels.module.css'

const Channels = () =>{
    const channelIds = useAppSelector(selectChannelIds)
    useChannelsFetch()
    useMessagesFetch()
    const isLoading = useAppSelector(selectIsChannelLoading)

    if(isLoading){
        return <div>
            loading...
        </div>
    }


    return <div className={style.channels} >
        {
            channelIds.map(id => (
                <Channel id={id} key={id}/>
            ))
        }
    </div>
}

export default Channels