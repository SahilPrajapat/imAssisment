import mongoose from 'mongoose'
const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
    enroll: Number,
})

export default mongoose.model('cards', cardSchema)