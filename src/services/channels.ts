import { Channel } from "../slices/channels"

export const getChannels = async () => {
    return new Promise<{data: Channel[]}>((resolve) => {
        setTimeout(() => {
            resolve({data: [
                {
                    id: 3,
                    name: 'Jim',
                    about: '- _ -',
                    profileUrl: "/maleAvatar.jpg",
                },
                {
                    id: 1,
                    name: 'Michael',
                    about: "You miss 100% of the shots you don't take",
                    profileUrl: "/maleAvatar.jpg",
                },
                {
                    id: 2,
                    name: 'Dwight Schrute',
                    about: 'Beets, Bears, Battlestar Galactica',
                    profileUrl: "/maleAvatar.jpg",
                },
            ]})
        }, 500)
    })
} 