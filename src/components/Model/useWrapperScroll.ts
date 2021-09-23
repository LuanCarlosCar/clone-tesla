import { useMotionValue } from "framer-motion";
import { useContext, useEffect } from "react";
import modelsContext from "./modelsContext";

export default function useWrapperScroll(){
    const { wrapperRef}= useContext(modelsContext)
    const scrollY = useMotionValue(0)
    const scrollYProgress = useMotionValue(0)
  
    useEffect(() => {
        const element = wrapperRef.current
      if (element) {
        const updateScrollValue = () => {
          if (wrapperRef.current) {
            const { scrollTop, scrollHeight, offsetHeight } = element
  
            const fullScroll = scrollHeight - offsetHeight
  
            scrollY.set(scrollTop)
            scrollYProgress.set(scrollTop / fullScroll)
          }
        }
  
        element?.addEventListener('scroll', updateScrollValue)
  
        return () =>
        element?.removeEventListener('scroll', updateScrollValue)
      }
    }, [wrapperRef, scrollY, scrollYProgress])
  
    return { scrollY, scrollYProgress }


  
}