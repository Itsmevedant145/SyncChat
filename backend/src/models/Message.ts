import mongoose, { Schema, type Document } from "mongoose";

export interface IMessage extends Document {
  chat: mongoose.Types.ObjectId;   // Reference to Chat
  sender: mongoose.Types.ObjectId; // Reference to User
  text: string;                    // Message content
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema = new Schema<IMessage>(
  {
    chat: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

MessageSchema.index({ chat: 1, createdAt: 1 }); // Index for efficient retrieval of messages by chat and timestamp

export const Message =
  mongoose.models.Message || mongoose.model<IMessage>("Message", MessageSchema);