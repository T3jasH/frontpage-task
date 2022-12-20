import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
}

const initialState: ChannelsState = {
    channels: [],
    isLoading: true,
    currentChannelId: -1,
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
export const selectChannelIds = (state: RootState) => state.channelsReducer.channels.map(channel => channel.id)
 
export const channelsSlice = createSlice(
    {
        name: 'channels',
        initialState,
        reducers: {

        },
        extraReducers: (builder) => {
            builder.addCase(fetchChannels.fulfilled, (state, action) =>{
                state.channels = action.payload
                state.isLoading = false
                state.currentChannelId = action.payload[0]?.id
            }) 
            builder.addCase(fetchChannels.pending, (state) => {
                state.isLoading = true
            })
            
        }
    }
)

export default channelsSlice.reducer;