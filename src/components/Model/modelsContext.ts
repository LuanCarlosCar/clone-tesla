import React,{ReactNode} from 'react'


export interface CarModel{
    modelName: string;
    overlayNode: ReactNode;
    sectionRef: React.RefObject<HTMLElement>

}
interface ModelsContext{
    wrapperRef: React.RefObject<HTMLElement>
    registeredModels: CarModel [] //informçoes capsuladas
    registerModel: (model: CarModel)=> void //registrar a nova model(titulo)
    unregisterModels: (modelName: string) => void    //destruir a model anterior
    getModelByName: (modelName : string) => CarModel | null // criando um crud para pegar os nomes
}
export default React.createContext<ModelsContext>({}as ModelsContext)