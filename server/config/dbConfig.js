import mongoose from 'mongoose';

export const dbConnection = (dbUrl) => {
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('Database connection established')
    }).catch(err => {
        console.error(err.message)
    })
    mongoose.set('useFindAndModify', false)
}