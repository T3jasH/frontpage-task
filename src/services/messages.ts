import { Message } from "../slices/messages"
import { addTime } from "../utils/addTime"

export const getMessages = async () => {
    return new Promise<{data: Message[]}>(
        (resolve) => {
            setTimeout(
                () => {
                    
                    resolve({data: [
                        {
                            text: 'hi',
                            receivedTime: addTime(1),
                            channelId: 1,
                            id: 1,
                            senderId: 0,
                        },
                        {
                            text: 'hello',
                            receivedTime: addTime(2),
                            channelId: 2,
                            id: 2,
                            senderId: 1,
                        },
                        {
                            text: "something smells like updog",
                            receivedTime: addTime(3),
                            channelId: 3,
                            id: 3,
                            senderId: 2,
                        },
                        {
                            text: "What's updog?",
                            receivedTime: addTime(4),
                            channelId: 3,
                            id: 6,
                            senderId: 0,
                        },
                        {
                            text: "Oh i see what you did there",
                            receivedTime: addTime(7),
                            channelId: 3,
                            id: 7,
                            senderId: 0,
                        },
                        {
                            text: 'sup',
                            receivedTime: addTime(5),
                            channelId: 1,
                            id: 4,
                            senderId: 0,
                        },
                        {
                            text: 'heyy',
                            receivedTime: addTime(6),
                            channelId: 2,
                            id: 5,
                            senderId: 0,
                        },
                    ]})
                },
                500
            )
        },
    )
}