const dummyData = [
    {
        username: "philzcoffee",
        thumbnailUrl: 'data:image/png;base64,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',
        imageUrl: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80',
        likes: 400,
        timestamp: "July 17th 2017, 12:42:40 pm",
        comments: [
            {
                username: "philzcoffee",
                text: "We've got more than just coffees!"
            },
            {
                username: "biancasaurus",
                text: "Looks delicious!"
            },
            {
                username: "martinseludo",
                text: "Can't wait to try it!"
            }
        ]
    },
    {
        username: "twitch",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80',
        likes: 4307,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                username: "twitch",
                text: "Epic Street Fighter action here in Vegas!"
            },
            {
                username: "michaelmarzetta",
                text: "Omg that match was crazy"
            },
            {
                username: "themexican_leprechaun",
                text: "What a setup"
            },
            {
                username: "dennis_futbol",
                text: "It that injustice"
            }
        ]
    }
];

export default dummyData;
