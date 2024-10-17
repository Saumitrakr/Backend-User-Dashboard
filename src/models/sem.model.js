import mongoose, {Schema} from "mongoose";

const semSchema = new Schema(
    {
        sgpa:{
            type: Schema.Types.Decimal128,
            required: true,
        },
        courses:{
            type: Map,
            of: String,
            required: true
        },
        cgpa:{
            type: Schema.Types.Decimal128,
            required: true
        },
        backlog:{
            type: Number,
            required: true
        }
    },{timestamps: true}
)

export const Sem = mongoose.model('Sem',semSchema)