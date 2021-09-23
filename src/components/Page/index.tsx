import React from 'react'
import DefaultOverlayContent from '../DefaultOverlayContent/index';
import { Container, Charme } from './styled';

import { ModelSection, ModelsWrapper } from '../Model/index';
import UniqueOverlay from '../UniqueOverlay';



const Page: React.FC = () =>{
    return(
        <Container>
            <ModelsWrapper> {/* Envolvendo todas as fotos */}
            <div>
                {[
                    "Valorant",
                    "Assassin's Creed Origins",
                   " World Of Warcraft",
                    
                   "Assassin's Creed Unity ",
                   "Call of Duty: Warzone",
                    "Model 7",

                ].map(modelName=>(
                    <ModelSection
                    key={modelName}
                className="colored"
                 modelName={modelName}
                 overlayNode={ <DefaultOverlayContent
                    label={modelName}
                    description={'Order Online for Delivery'}
                 />
                 } />
    ))}
                {/* Representando Carro */}

                
            </div>
            <Charme />
            <UniqueOverlay /> 

            </ModelsWrapper>
        </Container>
    )
}
export default Page;