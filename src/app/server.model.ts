export class Server {
  type: string
  constructor(public name: string, public content: string) { 
    this.type = 'server'
  }
}