export class Blueprint {
  type: string
  constructor(public name: string, public content: string) { 
    this.type = 'blueprint'
  }
}