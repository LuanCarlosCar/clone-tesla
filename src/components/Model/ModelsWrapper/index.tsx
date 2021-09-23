import React, { useCallback, useRef, useState } from 'react'
import modelsContext, { CarModel } from '../modelsContext'
import {Container, OverlaysRoot} from './styled'
import ModelOverlay from '../../ModelOverlay/index'





const ModelsWrapper: React.FC = ({children}) =>{ //estou somente pegando o dado e mantendo dentro de um container
    const wrapperRef = useRef<HTMLDivElement>(null)
    const [registeredModels,setRegisterModels] = useState<CarModel[]>([])
    const registerModel = useCallback((model: CarModel) => {
      setRegisterModels(state => [...state, { ...model }])
    }, [])
  
    const unregisterModels =  useCallback((modelName: string) => {
      setRegisterModels(state =>
        state.filter(model => model.modelName !== modelName)
      )
    }, [])
    const getModelByName = useCallback(
      (modelName: string) => {
        return registeredModels.find(item => item.modelName === modelName) || null
      },
      [registeredModels]
    )
    return(
      <modelsContext.Provider value={{

        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModels,
        getModelByName
      }}>
            <Container ref={wrapperRef}>
            <OverlaysRoot> {/* Aqui vai ficar os titulos */}
            {registeredModels.map(item=>(
                <ModelOverlay key={ item.modelName } model={item}>{item.overlayNode}</ModelOverlay>
            ))}

             </OverlaysRoot>
            {children}
        </Container>
      </modelsContext.Provider>
    )
}
export default ModelsWrapper