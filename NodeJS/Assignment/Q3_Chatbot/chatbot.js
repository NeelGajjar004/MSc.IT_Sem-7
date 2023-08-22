module.exports.chatbot = function(message){
    this.chatbot_age = 18;
    this.chatbot_name = "Haxor";
    this.chatbot_country = "India";
    this.chatbot_university = "VNSGU";

    message = message.toLowerCase()

    if(message.indexOf("hi")> -1 || message.indexOf("hello") > -1 || message.indexOf("hello") > -1)
    {
        return "To Kese ho aap Log..!";
    }
    else if(message.indexOf("age") > -1 && message.indexOf("your"))
	{
		return "I'm " + this.chatbot_age;
	}
	else if (message.indexOf("how") > -1 && message.indexOf("are") && message.indexOf("you"))
	{
		return "I'm fine ^_^"
	}
	else if(message.indexOf("where") > -1 && message.indexOf("live") && message.indexOf("you"))
	{
		return "I live in " + this.chatbot_country;
	}
	return "Sorry, I didn't get it :( ";
}