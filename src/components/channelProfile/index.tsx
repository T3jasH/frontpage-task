import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectCurrentChannel, selectIsProfileOpen, setIsProfileOpen } from "../../slices/channels"
import style from './ChannelProfile.module.css'

const ChannelProfile = () => {
    const isProfileOpen = useAppSelector(selectIsProfileOpen)
    const dispatch = useAppDispatch()
    const channel = useAppSelector(selectCurrentChannel)

    if(!isProfileOpen){
        return <div/>
    }

    return <div className={`${style.channelProfile} ${isProfileOpen === true ? style.profileOpen : ''}`}>
        <div className={style.header}>
            <i 
            className="fas fa-times" 
            onClick={() => dispatch(setIsProfileOpen(false))}
            ></i>
            <p>
                Contact Info
            </p>
        </div>
        <div className={style.profile}>
            <img 
            alt={'Display Pic'}
            src={channel?.profileUrl}
            />
            <p>
                {channel?.name}
            </p>
        </div>
        <div className={style.about}>
            <p>
                About
            </p>
            <p>
                {channel?.about}
            </p>
        </div>
    </div>
}

export default ChannelProfile