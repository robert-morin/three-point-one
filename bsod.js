const codes = [
    {id: 400, name: "Bad Request", description: "The server did not understand the request."},

    {id: 401, name: "Unauthorized", description: "The requested page needs a username and a password."},
    {id: 402, name: "Payment Required", description: "You can not use this code yet."},
    {id: 403, name: "Forbidden", description: "Access is forbidden to the requested page."},
    {id: 404, name: "Not Found", description: "The server can not find the requested page."},
    {id: 405, name: "Method Not Allowed", description: "The method specified in the request is not allowed."},
    {id: 406, name: "Not Acceptable", description: "The server can only generate a response that is not accepted by the client."},
    {id: 407, name: "Proxy Authentication Required", description: "You must authenticate with a proxy server before this request can be served."},
    {id: 408, name: "Request Timeout", description: "The request took longer than the server was prepared to wait."},
    {id: 409, name: "Conflict", description: "The request could not be completed because of a conflict."},
    {id: 410, name: "Gone", description: "The requested page is no longer available ."},
    {id: 411, name: "Length Required ", description: "The \"Content-Length\" is not defined. The server will not accept the request without it ."},
    {id: 412, name: "Precondition Failed", description: "The pre condition given in the request evaluated to false by the server."},
    {id: 413, name: "Request Entity Too Large", description: "The server will not accept the request, because the request entity is too large."},
    {id: 414, name: "Request-url Too Long", description: "The server will not accept the request, because the url is too long. Occurs when you convert a \"post\" request to a \"get\" request with a long query information ."},
    {id: 415, name: "Unsupported Media Type", description: "The server will not accept the request, because the mediatype is not supported ."},
    {id: 416, name: "Requested Range Not Satisfiable", description: "The requested byte range is not available and is out of bounds."},
    {id: 417, name: "Expectation Failed", description: "The expectation given in an Expect request-header field could not be met by this server."},

    {id: 500, name: "Internal Server Error", description: "The request was not completed. The server met an unexpected condition."},
    {id: 501, name: "Not Implemented", description: "The request was not completed. The server did not support the functionality required."},
    {id: 502, name: "Bad Gateway", description: "The request was not completed. The server received an invalid response from the upstream server."},
    {id: 503, name: "Service Unavailable", description: "The request was not completed. The server is temporarily overloading or down."},
    {id: 504, name: "Gateway Timeout", description: "The gateway has timed out."},
    {id: 505, name: "HTTP Version Not Supported", description: "The server does not support the \"http protocol\" version."}
];

const idId = "author";
const nameId = "text";
const timeId = "time";

const newId = "new-quote";
const shareId = "tweet-quote";

let idElement = document.getElementById(idId);
let nameElement = document.getElementById(nameId);
let timeElement = document.getElementById(timeId);

let newElement = document.getElementById(newId);
let shareElement = document.getElementById(shareId);

function random(number)
{
    return Math.floor(Math.random() * number);
}

function setError()
{
    const value = random(codes.length);
    if (value < codes.length)
    {
        idElement.textContent = codes[value].id;
        nameElement.textContent = codes[value].name;

        const now = new Date();
        timeElement.textContent = now.toISOString();
        shareElement.setAttribute('href', "https://twitter.com/intent/tweet?text="
            + encodeURIComponent("I need help with HTTP response status code " + codes[value].id + ": " + codes[value].name));
    }
}

newElement.addEventListener('click', setError);
setError();
