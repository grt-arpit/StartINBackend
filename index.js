const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const port = 5000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: ["http://localhost:3000"] }, 
}); 
 // recieving the event
io.on("connection", (socket) => {
  console.log("client connected");

  socket.on("sendmsg", (data) => {
    console.log(data);
    data.sent = false;
    socket.broadcast.emit('recmsg', data);

  });
});


const startupRouter = require("./routers/startupRouter"); //importing
const investorRouter = require("./routers/investorRouter"); //importing
const adminRouter = require("./routers/adminRouter"); //importing
const contactRouter = require("./routers/contactRouter"); //importing
const utilRouter = require("./routers/util");//importing
const productRouter = require("./routers/productRouter");//importing


const cors = require("cors");  

// middleware to convert client json data to javascript
app.use(express.json());
//cors is used to allow request from outside server
app.use(cors({ origin: ["http://localhost:3000"] }));

//middleware
app.use("/startup", startupRouter);
app.use("/investor", investorRouter);
app.use("/admin", adminRouter);
app.use("/contact", contactRouter);
app.use("/util", utilRouter);
app.use("/product", productRouter);

app.use(express.static('./static/uploads'))

//starting the server
httpServer.listen(port, () => {
  console.log("server started");
});