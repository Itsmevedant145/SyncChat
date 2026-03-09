import  mongoose,{Schema ,type Document}  from "mongoose";

export interface Iuser extends Document{
    clerkId: string;
    name: string;
    email: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
}
const UserSchema = new Schema<Iuser>({
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true ,lowercase: true,trim: true},
    avatar: { type: String },
}, { timestamps: true });

export const User = mongoose.model("User", UserSchema)

