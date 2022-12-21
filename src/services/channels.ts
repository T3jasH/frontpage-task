import { Channel } from "../slices/channels"

export const getChannels = async () => {
    return new Promise<{data: Channel[]}>((resolve) => {
        setTimeout(() => {
            resolve({data: [
                {
                    id: 3,
                    name: 'Jim',
                    about: '- _ -',
                    profileUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRevlIy2ea6fUDOzn-T3Wr2Yg1k8ZHaxUYIUmTDhegtBg17H7pPy2P3skXZRLuxLNIJMyQ&usqp=CAU",
                },
                {
                    id: 1,
                    name: 'Michael',
                    about: "You miss 100% of the shots you don't take",
                    profileUrl: "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png",
                },
                {
                    id: 2,
                    name: 'Dwight Schrute',
                    about: 'Beets, Bears, Battlestar Galactica',
                    profileUrl: "https://img.nbc.com/sites/nbcunbc/files/metaverse_assets/1/0/6/3/3/2/dwight-500x500.jpg",
                },
            ]})
        }, 500)
    })
} 