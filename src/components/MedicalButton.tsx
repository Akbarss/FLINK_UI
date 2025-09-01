import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const medicalButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-medical hover:bg-primary/90 hover:scale-105",
        medical: "bg-gradient-medical text-primary-foreground shadow-medical hover:shadow-lg hover:scale-105",
        accent: "bg-gradient-accent text-accent-foreground shadow-accent hover:shadow-lg hover:scale-105",
        outline: "border border-primary/20 bg-card/80 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/40",
        ghost: "hover:bg-primary/10 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        location: "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:from-blue-600 hover:to-blue-700 hover:scale-105",
        maps: "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:from-green-600 hover:to-green-700 hover:scale-105",
        gis: "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg hover:from-purple-600 hover:to-purple-700 hover:scale-105"
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-3 text-base",
        icon: "h-11 w-11",
        wide: "h-12 px-8 py-3 w-full"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface MedicalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof medicalButtonVariants> {
  asChild?: boolean
}

const MedicalButton = React.forwardRef<HTMLButtonElement, MedicalButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(medicalButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
MedicalButton.displayName = "MedicalButton"

export { MedicalButton, medicalButtonVariants }