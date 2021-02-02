module.exports={
    env: {
        MONGO_URI : "mongodb+srv://mido_2021:mido2014@cluster0.n2u08.mongodb.net/shopme?retryWrites=true&w=majority",
        JWT_SECRET_KEY:"shopme",
        GITHUB_ID :"d26c8295653288b31a46",
        GITHUB_SECRET :"447fd653397351f8eb84956f27621d21898ab12b",
        TWITTER_ID :"1ER5fskEc0o9DRs9fos8jRq6D",
        TWITTER_SECRET :"jtcSpiHH9mAp51WsqTWBaTlnxxruHCrxDQKGoAJnAQJ6HHCXXg",
        TWITTER_TOKEN:"AAAAAAAAAAAAAAAAAAAAAHRpMQEAAAAA9q2fEKNhTeLCmC1DAwb70al0tzg%3DWBw5DgMAId6cTRZKX5n4Gtje9QppaHzqAAIPFzGND6YaaZDLrC",

        AUTH0_CLIENT_ID:'',
        AUTH0_CLIENT_SECRET:"",
        AUTH0_DOMIAN: "",
        EMAIL_SERVER_USER :"",
        EMAIL_SERVER_HOST :"",
        EMAIL_SERVER_PORT :"",
        EMAIL_FROM:"",
        NEXTAUTH_URL :"http://localhost:3000"

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