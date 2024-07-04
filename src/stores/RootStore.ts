import * as React from 'react'
import { imagesStore } from './images'

class RootStore {
    imagesStore: imagesStore
    constructor(){
        this.imagesStore = new imagesStore()
    }
    sync = async ()=>{
        await Promise.all(
            Object.values(this).map((store)=>{
                return store?.sync ? store?.sync(): Promise.resolve()
             })
        )
    }
}
const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore)