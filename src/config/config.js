import dotenv from 'dotenv'

dotenv.config()

const config = {
    port: process.env.PORT || 8080,
    mongodb: {
        uri: process.env.MONGO_URI,
        dbName: process.env.MONGODB_NAME
    },
}

export default config;