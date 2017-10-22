import {Message, Thread} from "../store/state";

const data = require('./mock-data')
const LATENCY = 16


export function getAllMessages(): Promise<Message[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, LATENCY)
  })
}

export interface CreateMessageRequest {
  text: string
  thread: Thread
}

export function createMessage({text, thread}: CreateMessageRequest): Promise<Message> {
  const timestamp = Date.now()
  const id = `m_${timestamp}`
  const message = {
    id,
    threadID: thread.id,
    threadName: thread.name,
    authorName: 'Evan',
    text,
    timestamp
  } as Message
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message)
    }, LATENCY)
  })
}
