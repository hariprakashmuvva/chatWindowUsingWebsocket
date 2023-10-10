var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http, {
    cors: {
      origin: '*',
    },
	methods: ["GET", "POST"]
});
var PORT = 8080;

// Start Server 🚀
http.listen(PORT, () => {
	console.log(`Node Server running on port : ${PORT}`);
});

// Connect to Socket 🔗
io.on("connection", (socket) => {
	console.log("Connection established");
	socket.on("editor-data", (data) => {
		socket.broadcast.emit("editor-data", data);
	});
});
