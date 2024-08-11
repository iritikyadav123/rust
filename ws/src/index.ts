import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

    let socket1 : WebSocket| null = null;
    let socket2: WebSocket | null = null;

  ws.on('message', function message(data) {
     const message = JSON.parse(data.toString());
     if(message.type == 'init_message') {
        if(socket1 == null) {
            socket1 = ws
        }else {
            socket2 = ws
        }
        ws.send("You are log in")
     }else if(message.type == 'message') {
          if(ws == socket1) {
            socket2?.send(JSON.stringify(message.msg))
          }else if (ws == socket2) {
            socket1?.send(JSON.parse(message.msg))
          }
     }
  });

  ws.send('something');
});
