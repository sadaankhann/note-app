import { SunMoon } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './Notes';

const ThemeMode = () => {


  const { Block, setBlock, elementsColor, setElementsColor } = useContext(ThemeContext);

  console.log("!!", Block);


  const [iconTheme, setIconTheme] = useState('white');

  useEffect(() => {
    const themeData = JSON.parse(localStorage.getItem("Previous_Theme"));
    if (themeData) {
      setBlock(themeData.blockk);
      setElementsColor(themeData.elemColor);
      setIconTheme(Block == "white" ? "black" : "white")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('Previous_Theme', JSON.stringify({ blockk: Block, elemColor: elementsColor }));
  }, [Block, elementsColor])

  useEffect(() => {

    if (Block == 'white'){

      setElementsColor('black');
      setIconTheme('black')
    }
    else {
      setElementsColor('white');
      setIconTheme('white');
    }

  }, [Block])

  return (
    <div className='relative text-white font-bold text-3xl transition-colors duration-300 delay-[600ms] ease-in '>
      <SunMoon size={32} className='absolute transition-colors duration-300 delay-[600ms] ease-in' color={iconTheme} onClick={() => {
        (Block == 'black') ? setBlock('white') : setBlock('black');
      }} />
    </div>
  )
}

export default ThemeMode
