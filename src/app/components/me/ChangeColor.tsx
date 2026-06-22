import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

interface ChangeColorProps {
    colorMoon: string
}
export function ChangeColor({ colorMoon }: ChangeColorProps) {

    const { theme, setTheme } = useTheme()

    return(
        <>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="cursor-pointer">
                {theme === "dark" ? <Sun size={20} color="#FFB300"/> : <Moon size={20} color={colorMoon}/>}
            </button>
        </>
    )
}
