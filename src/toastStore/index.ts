import { IToastProps } from "@/Types"

class ToastStore {
  private static instance: ToastStore
  public toastList = [] as Array<IToastProps>
  private toastQueue = [] as Array<IToastProps>
  private timer: NodeJS.Timer | null
  private delay: number

  constructor() {
    this.toastList = []
    this.toastQueue = []
    this.timer = null
    this.delay = 3000
  }

  static getInstance(): ToastStore {
    if (!this.instance) {
      this.instance = new this()
    }

    return this.instance
  }

  public addToast(el: IToastProps, timer?: number) {
    this.toastList.length > 3 ? this.toastQueue.push(el) : this.toastList.push(el)

    clearInterval(this.timer as NodeJS.Timer)

    this.timer = setInterval(() => {
      this.removeToast()
    }, timer || this.delay)
  }

  public removeToast(id = 0) {
    this.toastList.splice(id, 1)
    this.toastQueue.length && this.toastList.push(this.toastQueue.shift() as IToastProps)
  }
  
}

const toastStore = new ToastStore()

export default toastStore
