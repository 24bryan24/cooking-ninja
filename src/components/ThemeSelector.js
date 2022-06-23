import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/mode-icon.svg'
import fontIcon from '../assets/font-icon.svg'


// styles
import './ThemeSelector.css'

const themeColors = ['#58249c', '#249c6b', '#b70233', '#EFC050', '#34568B', '#DD4124']; 

export default function ThemeSelector() {

    const { darkMode, changeColor, changeMode, changeFont } = useTheme()
    console.log('24', darkMode)

  return (
    <div className='theme-selector'>
      <div className='mode-toggle'>
        <img 
          src={modeIcon} 
          alt='dark/light toggle icon'
          onClick={changeMode}
          style={ darkMode ? { filter: 'invert(100%)' } : {} }
          />
      </div>
      <div className='font-toggle'>
        <img 
          src={fontIcon}
          alt='font-icon'
          onClick={changeFont}
          style={ darkMode ? { filter: 'invert(100%)' } : {} }
        />
      </div>
        <div className='theme-buttons'>
            {themeColors.map(color => (
                <div 
                  key={color}
                  onClick={() => changeColor(color)}
                  style={{ background: color }}
                />
            ))}
        </div>
    </div>
  )
}
