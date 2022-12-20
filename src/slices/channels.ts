import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getChannels } from "../services/channels";

export interface Channel{
    id: string;
    name: string;
    about: string;
}

export interface ChannelsState{
    channels: Channel[];
    currentChannelId: string;
    isLoading: boolean;
}

const initialState: ChannelsState = {
    channels: [],
    isLoading: true,
    currentChannelId: "",
}

export const fetchChannels = createAsyncThunk(
    'channels/fetchChannels',
    async () => {
        const {data} = await getChannels()
        return data;
    }
)

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