import { ReactNode } from "react"
import { ExternalLink } from "lucide-react"
import { MedicalButton } from "./MedicalButton"

interface LinkCardProps {
  icon: ReactNode
  title: string
  description?: string
  href?: string
  onClick?: () => void
  variant?: "default" | "primary" | "accent"
}

export function LinkCard({ 
  icon, 
  title, 
  description, 
  href, 
  onClick,
  variant = "default" 
}: LinkCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (href) {
      window.open(href, "_blank", "noopener,noreferrer")
    }
  }

  const getButtonVariant = () => {
    switch (variant) {
      case "primary":
        return "medical"
      case "accent":
        return "accent"
      default:
        return "outline"
    }
  }

  return (
    <MedicalButton
      variant={getButtonVariant()}
      size="wide"
      onClick={handleClick}
      className="medical-link text-left h-auto min-h-[4rem] justify-start animate-slide-up"
    >
      <div className="flex items-center gap-3 w-full">
        <div className="text-primary flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-medium text-foreground truncate">
            {title}
          </div>
          {description && (
            <div className="text-sm text-muted-foreground truncate">
              {description}
            </div>
          )}
        </div>
        {href && (
          <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        )}
      </div>
    </MedicalButton>
  )
}