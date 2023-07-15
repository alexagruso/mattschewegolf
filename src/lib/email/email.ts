import axios from "axios";

interface MessageCore {
    name: string;
    content: string;
}

interface MessageWithPhone extends MessageCore {
    phone: string;
}

interface MessageWithEmail extends MessageCore {
    email: string;
}

export type Message = MessageWithPhone | MessageWithEmail;

export const sendEmail = async (message: Message) => {
    await axios.post("/api/email", message).catch((error) => {
        console.error(error);
    });
};
