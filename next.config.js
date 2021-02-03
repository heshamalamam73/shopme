module.exports={
    env: {
        MONGO_URI : "mongodb+srv://mido_2021:mido2014@cluster0.n2u08.mongodb.net/shopme?retryWrites=true&w=majority",
        JWT_SECRET_KEY:"shopme",
        GITHUB_ID :"d26c8295653288b31a46",
        GITHUB_SECRET :"447fd653397351f8eb84956f27621d21898ab12b",
        TWITTER_ID :"JCRwMqcC6VbKFsMkkveVvoojm",
        TWITTER_SECRET :"6aX8m1Y5pXPU1b1qHEoQHKDAKAkg9hhDiLOvRkcjQadDc9Dbnz",
        TWITTER_TOKEN:"AAAAAAAAAAAAAAAAAAAAAHRpMQEAAAAA9q2fEKNhTeLCmC1DAwb70al0tzg%3DWBw5DgMAId6cTRZKX5n4Gtje9QppaHzqAAIPFzGND6YaaZDLrC",
        JWT_SECRET :"ksjgbkrbgewbn gwel/r lwe/b ",
        AUTH0_CLIENT_ID:'',
        AUTH0_CLIENT_SECRET:"",
        AUTH0_DOMIAN: "",
        EMAIL_SERVER_USER :"apikey",
        EMAIL_SERVER_PASS : "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",
        EMAIL_SERVER_HOST :"smtp.sendgrid.net",
        EMAIL_SERVER_PORT :"587",
        EMAIL_FROM:"heshamalamam73@gmail.com",
        NEXTAUTH_URL :"http://localhost:3000",
        GOOGLE_ID : "888432905338-7b6tbtqrl5tioh2c8v4dh0gjkprpbqpi.apps.googleusercontent.com",
        GOOGLE_SECRET : "mqxu2jm5Htz5fPI4JBKTb4Ac",
        FACEBOOK_ID : "912487079589666",
        FACEBOOK_SECRET : "6787dc075b569b29edf7d0c8e5efcf5a",

    },
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/auth/login', method: 'post', propertyName: 'token' },
                    logout: { url: '/auth/logout', method: 'post' },
                    user: { url: '/user/me', method: 'get', propertyName: 'user' }
                },
                tokenRequired: true,
                tokenType: 'bearer'
            }
        }
    }
}