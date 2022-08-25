
class ToastStore {
  private static instance: ToastStore
  public toastList = [] as []
  private toastQueue = [] as []
  private timer = null as number | null
  private delay = null as number | null

  constructor() {
  this.toastList = []
    this.toastQueue = []
    this.timer = null
  }

  static getInstance(): ToastStore {
    if (!this.instance) {
      this.instance = new this()
    }

    return this.instance
  }
}

const toastStore = new ToastStore()

export default toastStore
