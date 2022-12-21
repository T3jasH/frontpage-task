import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { getChannels } from "../services/channels";

export interface Channel{
    id: number;
    name: string;
    about: string;
    profileUrl: string;
}

export interface ChannelsState{
    channels: Channel[];
    currentChannelId: number;
    isLoading: boolean;
    isChannelProfileOpen: boolean
}

const initialState: ChannelsState = {
    channels: [],
    isLoading: true,
    currentChannelId: -1,
    isChannelProfileOpen: false,
}

export const fetchChannels = createAsyncThunk(
    'channels/fetchChannels',
    async () => {
        const {data} = await getChannels()
        return data;
    }
)

export const selectChannel = (id: number) => (state: RootState)  => state.channelsReducer.channels.find(channel => channel.id === id)
export const selectIsChannelLoading = (state: RootState) => state.channelsReducer.isLoading
export const selectChannelIds = (state: RootState) => state.channelsReducer.channels.map(ch => ch.id)
export const selectCurrentChannel = (state: RootState) => state.channelsReducer.channels.find(ch => ch.id === state.channelsReducer.currentChannelId)
export const selectIsProfileOpen = (state: RootState) => state.channelsReducer.isChannelProfileOpen

export const channelsSlice = createSlice(
    {
        name: 'channels',
        initialState,
        reducers: {
            setCurrentChannel: (state, action: PayloadAction<number>) => {
                state.currentChannelId = action.payload
            },
            setIsProfileOpen: (state, action: PayloadAction<boolean>) => {
                state.isChannelProfileOpen = action.payload
            } 
        },
        extraReducers: (builder) => {
            builder.addCase(fetchChannels.fulfilled, (state, action) =>{
                state.channels = action.payload
                state.isLoading = false
            }) 
            builder.addCase(fetchChannels.pending, (state) => {
                state.isLoading = true
            })
            
        }
    }
)

export const {setCurrentChannel, setIsProfileOpen} = channelsSlice.actions

export default channelsSlice.reducer;