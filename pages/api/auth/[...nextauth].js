import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Providers.Twitter({
            clientId: process.env.TWITTER_ID,
            clientSecret: process.env.TWITTER_SECRET,
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        Providers.Facebook({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),
        Providers.Email({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASS,
                },
            },
            from: process.env.EMAIL_FROM,
        }),


    ],
    // pages: {
    //     signIn: "/login",
    // },
    jwt : {
        signingKey: process.env.JWT_SECRET
},

    database: process.env. MONGO_URI,
})