import mongoose, {Schema} from "mongoose";
// import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const lmsSchema = new Schema(
    {
        canvasid:{
            type: Number,
            required: true,
            unique: true,
            index: true,
            trim: true
        },
        enrollmentno:{
            type: String,
            required: true,
            unique: true,
            uppercase: true,
            index: true,
            trim: true
        },
        semester:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sem'
        }
    }
)

// lmsSchema.plugin(mongooseAggregatePaginate)

export const Lms = mongoose.model("Lms", lmsSchema)