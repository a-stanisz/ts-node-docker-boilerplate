import { createServer, IncomingMessage, ServerResponse } from 'http'

const PORT = process.env.PORT || 3000

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
  console.log(req)
  res.writeHead(200)
  res.end('Hello!')
}

const server = createServer(requestListener)

server.listen(PORT)

console.log(`server listens at port ${PORT}`)
