import { IToastProps } from "@/Types"

type CallbackType = (toast: IToastProps[]) => void


type EventType = {
  [propName: string]: CallbackType
}

interface SubscriptionsType  {
  [propName: string]: EventType
}

function getIdGenerator() {
  let lastId = 0
  
  return function getNextUniqueId() {
      lastId += 1
      return lastId
  }
}

class ToastStore {
  private static instance: ToastStore
  public toastList = [] as Array<IToastProps>
  private toastQueue = [] as Array<IToastProps>
  private timer: NodeJS.Timer | null
  private delay: number
  private subscriptions: SubscriptionsType
  private getNextUniqueId = getIdGenerator()

  constructor() {
    this.toastList = []
    this.toastQueue = []
    this.timer = null
    this.delay = 3000
    this.subscriptions = {}
  }

  static getInstance(): ToastStore {
    if (!this.instance) {
      this.instance = new this()
    }

    return this.instance
  }

  public addToast(el: IToastProps, timer?: number) {
    this.toastList.length > 3 ? this.toastQueue.push(el) : this.toastList.push(el)
    this.publish('TOAST')
    clearInterval(this.timer as NodeJS.Timer)

    this.timer = setInterval(() => {
      this.removeToast()
    }, timer || this.delay)
  }

  public removeToast(id = 0) {
    this.toastList.splice(id, 1)
    this.toastQueue.length && this.toastList.push(this.toastQueue.shift() as IToastProps)
    this.publish('TOAST')
  }
  

  subscribe(eventType: string, callback: CallbackType) {
    const id = this.getNextUniqueId()

    if(!this.subscriptions[eventType]) {
      this.subscriptions[eventType] = { }
    }

    this.subscriptions[eventType][id] = callback

    return { 
        unsubscribe: () => {
            delete this.subscriptions[eventType][id]
            if(Object.keys(this.subscriptions[eventType]).length === 0) delete this.subscriptions[eventType]
        }
    }
}

publish(eventType: string) {
  if(!this.subscriptions[eventType])  {
      return
    }

  Object.keys(this.subscriptions[eventType]).forEach(key => this.subscriptions[eventType][key])
}
}

export const toastStore = new ToastStore()

