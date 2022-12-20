import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { getMessages } from "../services/messages";

export interface Message{
    id: number;
    text: string;
    receivedTime: Date;
    channelId: number; 
}

export interface MessagesState{
    messages: Message[]
}

const initialState: MessagesState = {
    messages: []
};

export const fetchMessages = createAsyncThunk(
    'messages/fetchMessages',
    async () => {
        const {data} = await getMessages()
        return data
    }
)

export const selectMessagesByChannelId = (channelId: number) => 
                                            (state: RootState) =>
                                                state.messagesReducer.messages
                                                .filter(message => message.channelId === channelId)

export const selectLatestMessageByChannelId = (channelId: number) => (state: RootState) => 
                                            {
                                                const messages = state.messagesReducer.messages
                                                .filter(message => message.channelId === channelId)
                                                
                                                if(messages.length === 0) return null 

                                                return messages
                                                        .reduce((prev, curr) => prev.receivedTime.getTime() > curr.receivedTime.getTime() ? prev : curr)
                                            }

export const messagesSlice = createSlice(
    {
        name: 'messages',
        initialState,
        reducers: {

        },
        extraReducers: 
            (builder) => {
                builder.addCase(fetchMessages.fulfilled, (state, action) => {
                    state.messages = action.payload
                })
            }
    }
)

export default messagesSlice.reducer