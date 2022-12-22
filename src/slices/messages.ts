import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { getMessages } from "../services/messages";

export interface Message{
    id: number;
    text: string;
    receivedTime: string;
    channelId: number; 
    senderId: number; // senderId = 0 is for me
}

export interface MessagesState{
    messages: Message[];
    isLoading: boolean;
    text: string;
}

const initialState: MessagesState = {
    messages: [],
    isLoading: true,
    text: '',
};

export const fetchMessages = createAsyncThunk(
    'messages/fetchMessages',
    async () => {
        const {data} = await getMessages()
        return data
    }
)

export const selectMessagesByChannelId = (channelId: number | undefined) => 
                                            (state: RootState) =>
                                                state.messagesReducer.messages
                                                .filter(message => message.channelId === channelId)

export const selectLatestMessageByChannelId = (channelId: number) => (state: RootState) => 
                                            {
                                                const messages = state.messagesReducer.messages
                                                .filter(message => message.channelId === channelId)

                                                if(messages.length === 0) return null 

                                                return messages
                                                        .reduce((prev, curr) => new Date(prev.receivedTime).getTime() > new Date(curr.receivedTime).getTime() ? prev : curr)
                                            }
                                    
export const selectLatestMessageAll = (state: RootState) => state.channelsReducer.channels.map(({id}) => {
    const messages = state.messagesReducer.messages
                    .filter(message => message.channelId === id)
    if(messages.length === 0) return null
    return messages.reduce((prev, curr) => new Date(prev.receivedTime).getTime() > new Date(curr.receivedTime).getTime() ? prev : curr)

} )

export const selectIsMessagesLoading = (state: RootState) => state.messagesReducer.isLoading

export const selectText = (state: RootState) => state.messagesReducer.text 
 
export const messagesSlice = createSlice(
    {
        name: 'messages',
        initialState,
        reducers: {
            setText: (state, action: PayloadAction<string>) => {
                state.text = action.payload
            },
            sendMessage: (state, action: PayloadAction<number>) => {
                state.messages.push({
                    text: state.text,
                    receivedTime: new Date().toString(),
                    senderId: 0,
                    channelId: action.payload,
                    id: Math.max(...state.messages.map(msg => msg.id)) + 1,
                })
                state.text = ''
            }
        },
        extraReducers: 
            (builder) => {
                builder.addCase(fetchMessages.fulfilled, (state, action) => {
                    state.messages = action.payload
                    state.isLoading = false
                })
                builder.addCase(fetchMessages.pending, (state) => {
                    state.isLoading = true
                })
            }
    }
)

export const {setText, sendMessage} = messagesSlice.actions

export default messagesSlice.reducer