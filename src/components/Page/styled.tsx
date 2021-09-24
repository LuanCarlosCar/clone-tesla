import styled from "styled-components";  
import over from '../../imagens/1.jpg'
import over2 from '../../imagens/mobile/1.jpg'
import genji from '../../imagens/2.jpg'
import genji2 from '../../imagens/mobile/2.jpg'
import rap from '../../imagens/4.jpg'
import rap2 from '../../imagens/mobile/4.jpg'
import bomba from '../../imagens/5.jpg'

import bomba2 from '../../imagens/mobile/5.jpg'
import dva2 from '../../imagens/6.jpg'
import dvva2 from '../../imagens/mobile/6.jpg'
import oi from '../../imagens/7.jpg'
import dva1 from '../../imagens/3.jpg'
import dvva1 from '../../imagens/mobile/3.jpg'
import gta2 from '../../imagens/mobile/7.jpg'

export const Container = styled.div`

.colored:nth-child(1) {
background-image: url("${over}");
background-repeat:round;


}
.colored:nth-child(2) {
    background-image: url("${genji}");
background-repeat:round;
}
.colored:nth-child(3) {
    background-image: url("${dva1}");
background-repeat:round;
}

.colored:nth-child(4) {
    background-image: url("${bomba}");
background-repeat:round;
}
.colored:nth-child(5) {
    background-image: url("${dva2}");
background-repeat:round;
}
.colored:nth-child(6) {
    background-image: url("${oi}");
background-repeat:round;
}


@media(max-width: 600px){
    .colored:nth-child(1) {
background-image: url("${over2}");
background-repeat:round;

}
.colored:nth-child(2) {
    background-image: url("${genji2}");
background-repeat:round;
}
.colored:nth-child(3) {
    background-image: url("${dvva1}");
background-repeat:round;
}

.colored:nth-child(4) {
    background-image: url("${bomba2}");
}
.colored:nth-child(5) {
    background-image: url("${dvva2}");
background-repeat:round;
}
.colored:nth-child(6) {
    background-image: url("${gta2}");
background-repeat:round;
}
 
}
`
export const Charme = styled.div`
height: 15vh;
`
    
