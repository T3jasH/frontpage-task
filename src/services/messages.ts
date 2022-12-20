import { Message } from "../slices/messages"

export const getMessages = async () => {
    return new Promise<{data: Message[]}>(
        (resolve) => {
            setTimeout(
                () => {
                    resolve({data: [
                        {
                            text: 'hi',
                            receivedTime: new Date(),
                            channelId: 1,
                            id: 1,
                        },
                        {
                            text: 'hello',
                            receivedTime: new Date(),
                            channelId: 2,
                            id: 2,
                        },
                        {
                            text: "something smells like updog",
                            receivedTime: new Date(),
                            channelId: 3,
                            id: 3,
                        },
                        {
                            text: 'sup',
                            receivedTime: new Date(),
                            channelId: 1,
                            id: 4,
                        },
                    ]})
                },
                500
            )
        },
    )
}