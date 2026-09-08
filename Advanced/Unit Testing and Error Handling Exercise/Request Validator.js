function requestValidator(inputObj) {
    const method = inputObj["method"];
    const uri = inputObj["uri"];
    const version = inputObj["version"];
    const message = inputObj["message"];
    const uriRegex = /^([a-zA-Z0-9\.]+)$/g;
   
    if (method === "GET" || method === "POST" || method === "DELETE" || method === "CONNECT") {
        if (uri === undefined) {
            throw new Error("Invalid request header: Invalid URI");
        }
        if (uri.match(uriRegex) && uri !== "" || uri === "*") {
            if (version === "HTTP/0.9" || version === "HTTP/1.0" || version === "HTTP/1.1" || version === "HTTP/2.0") {
                if (message === undefined) {
                    throw new Error("Invalid request header: Invalid Message");
                }
                if (!message.includes("<") && !message.includes(">") && !message.includes("\\") && !message.includes("&") && !message.includes("'") && !message.includes(`"`)) {
                    return inputObj;
                } else {
                    throw new Error("Invalid request header: Invalid Message");
                }
            } else {
                throw new Error("Invalid request header: Invalid Version");
            }
        } else {
            throw new Error("Invalid request header: Invalid URI");
        }
    } else {
        throw new Error("Invalid request header: Invalid Method");
    }
}
