declare class ToastStore {
    private static instance;
    toastList: [];
    private toastQueue;
    private timer;
    private delay;
    constructor();
    static getInstance(): ToastStore;
}
declare const toastStore: ToastStore;
export default toastStore;
