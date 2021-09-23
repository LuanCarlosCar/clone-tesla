import { motion } from 'framer-motion';
import  styled from 'styled-components';



export const Container = styled(motion.div)`
position: sticky;
display: flex;
top:0;
margin-top:-100vh;
height: 100vh;
flex-direction: column;
align-items: center;
`;