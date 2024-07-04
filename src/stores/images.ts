import { makeAutoObservable, runInAction } from "mobx";
import AxiosInstance from "../api";

export class imagesStore {
    q:null|string=null
    loading :boolean = false
    images :any[] = []
    page:number=1
    constructor(){
        makeAutoObservable(this)
    }
    fetchImages = async (q:string, ni: boolean)=>{
        this.q=q
        await AxiosInstance.get(`/search/photos/?client_id=nIVqtTtgQNo-JFIeCunucDuXZl-Pjw3CZM8Eyo1_z9k&query=${this.q}&page=${ni?this.page:1}`)
        .then((res)=>{
            let arr = res.data.results.map((el:any)=>el.urls.small)
            runInAction(()=>{
                
                this.images = ni?[...this.images,...arr]:arr
                this.page+=1
            })
            })
        .catch((error)=>{console.log(error)})
        
    }
    clearSearch =  ()=>{
            runInAction(()=>{
                this.q=null
                this.images = []
                this.page=1
            })
    }
}