import  mongoose,{Schema ,type Document}  from "mongoose";

export interface IChat extends Document {
  participants: mongoose.Types.ObjectId[];
  lastMessage?: mongoose.Types.ObjectId | null;
  lastMessageAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const ChatSchema = new Schema<IChat>({
  participants: {
    type: [{ type: Schema.Types.ObjectId, ref: "User" }],
    required: true,
    validate: {
      validator: (value: mongoose.Types.ObjectId[]) => value.length > 0,
      message: "A chat must include at least one participant",
    },
  },
  lastMessage: { type: Schema.Types.ObjectId, ref: "Message", default: null },
  lastMessageAt: { type: Date, default: Date.now },
}, { timestamps: true });