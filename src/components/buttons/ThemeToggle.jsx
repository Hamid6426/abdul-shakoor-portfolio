import { useTheme } from 'next-themes'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? <MdDarkMode className='w-6 h-6'/> : <MdLightMode className='w-6 h-6' />}
    </button>
  )
}