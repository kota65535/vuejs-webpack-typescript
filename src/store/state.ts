export interface State {
  currentThreadID: string | null
  threads: Threads
  messages: Messages
}

export interface Threads {
  [id: string]: Thread
}

export interface Thread {
  id: string;
  name: string;
  messages: Array<string>
  lastMessage: Message | null;
}

export interface Messages {
  [id: string]: Message
}

export interface Message {
  id: string;
  threadID: string;
  threadName: string;
  authorName: string;
  text: string;
  timestamp: number;
  isRead: boolean
}

