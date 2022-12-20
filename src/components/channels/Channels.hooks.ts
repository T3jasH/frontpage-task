import {useEffect} from 'react'
import { useAppDispatch } from '../../app/hooks'
import { fetchChannels } from '../../slices/channels'
import { fetchMessages } from '../../slices/messages'


export const useChannelsFetch = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchChannels())
        console.log('fetching channels')
    }, [dispatch])
}

export const useMessagesFetch = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchMessages())
    }, [dispatch])
}
