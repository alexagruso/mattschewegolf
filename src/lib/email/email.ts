import axios from "axios";

interface MessageCore {
    name: string;
    content: string;
}

interface MessageWithEmail extends MessageCore {
    email: string;
}

interface MessageWithPhone extends MessageCore {
    phone: string;
}

export type Message = MessageWithEmail | MessageWithPhone;

export const sendEmail = async (message: Message) => {
    return await axios.post("/api/email", message);
};
