import { nanoid } from "@reduxjs/toolkit"
import { Channel } from "../slices/channels"

export const getChannels = async () => {
    return new Promise<{data: Channel[]}>((resolve) => {
        setTimeout(() => {
            resolve({data: [
                {
                    id: nanoid(),
                    name: 'Michael',
                    about: "You miss 100% of the shots you don't take",
                },
                {
                    id: nanoid(),
                    name: 'Dwight Schrute',
                    about: 'Beets, Bears, Battlestar Galactica'
                },
                {
                    id: nanoid(),
                    name: 'Jim',
                    about: '- _ -',
                },
            ]})
        }, 500)
    })
} 