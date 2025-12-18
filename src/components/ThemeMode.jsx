import { SunMoon } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './Notes';

const ThemeMode = () => {


  const { Block, setBlock, elementsColor, setElementsColor } = useContext(ThemeContext);


  const [iconTheme, setIconTheme] = useState('white');

  useEffect(()=>{
    
    (Block =='white') ? setElementsColor ('black') || setIconTheme('black') : setElementsColor('white') || setIconTheme('white');

  }, [Block])

  return (
    <div className='relative text-white font-bold text-3xl transition-colors duration-300 delay-[600ms] ease-in '>
      <SunMoon size={32} className='absolute transition-colors duration-300 delay-[600ms] ease-in' color={iconTheme} onClick={()=>{
        (Block == 'black') ? setBlock('white') : setBlock('black');
      }}/>
    </div>
  )
}

export default ThemeMode
