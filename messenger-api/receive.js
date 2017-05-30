import sendAPI from "./send"
import messages from "../messages/messages"

const receivedPostback = (event) => {
    const senderID = event.sender.id;
    const type = event.postback.payload;

    console.log("Postback data: ", event.postback);

    if (type) {
        switch (type) {
            case 'exams':
                sendAPI.sendAttachmentMessage(senderID, messages.examMessage);
                break; 
        }
    }
}

const receivedMessage = (event) => {
    var senderID = event.sender.id;
    var message = event.message;


    var messageText = message.text.toLowerCase();
    var messageAttachments = message.attachments;

    console.log("Message data: ", event.message);

    sendAPI.sendReadReceipt(senderID);
    sendAPI.sendTypingOn(senderID);

    if (messageText) {
        switch (messageText) {
            case 'get started':
                sendAPI.sendAttachmentMessage(senderID, messages.welcomeMessage);
                break;
            case 'help':
                break;

            case 'laundryview':
                //sendGenericMessage(senderID, "Here is the Laundry View website.");
                //sendGenericMessage(senderID, "http://www.laundryview.com/lvs.php");
                break;
            case 'quizlet':
                //sendGenericMessage(senderID, 'Here is a link to Quizlet!');
                //sendGenericMessage(senderID, 'TO JOIN, PLEASE LOG IN HERE: https://inf1.hgs.club/quizlet.html (username: quizlet, password: "name of where the drill hall is currently located, lowercase, no spaces")');
                //sendGenericMessage(senderID, "https://quizlet.com/class/3543715/");
                break;
            default:
                //sendAPI.sendTextMessage(senderID, 'Unrecognized command. Type "help" for a list of available commands.');
        }
    }
}

export default {
    receivedMessage,
    receivedPostback
}
