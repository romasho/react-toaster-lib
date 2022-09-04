import { IToastProps } from "@/types"

type CallbackType = (toast: Array<IToastProps & Id>) => void

export type Id = {
  id: number
}

class ToastStore {
  private static instance: ToastStore
  public toastList = [] as Array<IToastProps & Id>
  private toastQueue = [] as Array<IToastProps & Id>
  private timer: NodeJS.Timer | null
  private delay: number
  private subscriptions: {[propName: string]: Set<CallbackType>}

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
    if (this.toastList.length >= 3) {
      this.toastQueue.push({...el, id: Date.now()})
    } else {
      this.toastList.push({...el, id: Date.now()})
      this.publish('TOAST')
      clearInterval(this.timer as NodeJS.Timer)

    this.timer = setInterval(() => {
      this.removeToast()
    }, timer || this.delay)
    }
  }

  public removeToast(id = 0) {
    this.toastList.splice(id, 1)
    this.toastQueue.length && this.toastList.push(this.toastQueue.shift() as IToastProps & Id)

    this.publish("TOAST")

    if (this.toastList.length === 0) {
      clearInterval(this.timer as NodeJS.Timer)
    }
  }
  

  subscribe(eventType: string, callback: CallbackType) {
    if(!this.subscriptions[eventType]) {
      this.subscriptions[eventType] = new Set()
    }

    const callbacks = this.subscriptions[eventType]
    callbacks.add(callback)

    return () => { 
      callbacks.delete(callback)

      if (callbacks.size === 0) {
        delete this.subscriptions[eventType]
      }
    }
}

publish(eventType: string) {
  if(!this.subscriptions[eventType])  {
      return console.warn(eventType + " not found!");
    }
  const callbacks = this.subscriptions[eventType]

  callbacks.forEach((callback) => {
    // eslint-disable-next-line standard/no-callback-literal
    callback([...this.toastList])
  })
}
}

export const toastStore = new ToastStore()

