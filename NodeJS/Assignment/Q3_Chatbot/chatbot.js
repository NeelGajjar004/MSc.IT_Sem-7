module.exports.chatbot = function(message){
    this.chatbot_age = 69;
    this.chatbot_name = "Haxor";
    this.chatbot_country = "India";
    this.chatbot_university = "VNSGU";

    message = message.toLowerCase()

    if(message.indexOf("hi")> -1 || message.indexOf("hello") > -1 || message.indexOf("hello") > -1)
    {
        return " To Kese ho aap Log..!";
    }
    else if(message.indexOf("name") > -1 && message.indexOf("your") && message.indexOf("what") )
	{
		return " My Self " + this.chatbot_name;
	}
	else if (message.indexOf("how") > -1 && message.indexOf("are") && message.indexOf("you"))
	{
		return " I'm fine ^_^"
	}
	else if(message.indexOf("where") > -1 && message.indexOf("live") && message.indexOf("you"))
	{
		return " I live in " + this.chatbot_country;
	}
	else if(message.indexOf("old") > -1  && message.indexOf("are") && message.indexOf("you"))
	{
		return  this.chatbot_age + "<sup>th</sup> Year Old..";
	}
	return " Sorry, I didn't get it :( ";
}