import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MedicalButton } from "./MedicalButton"
import { MapPin, ExternalLink, Navigation } from "lucide-react"

interface Branch {
  id: string
  name: string
  address: string
  phone: string
  hours: string
  yandexMaps: string
  googleMaps: string
  twoGis: string
}

interface BranchModalProps {
  branch: Branch | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BranchModal({ branch, open, onOpenChange }: BranchModalProps) {
  if (!branch) return null

  const handleLocationClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-sm border-border/50">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            {branch.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Адрес:</p>
            <p className="text-foreground">{branch.address}</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Телефон:</p>
            <a 
              href={`tel:${branch.phone}`}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              {branch.phone}
            </a>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Часы работы:</p>
            <p className="text-foreground">{branch.hours}</p>
          </div>
          
          <div className="space-y-3 pt-4 border-t border-border/30">
            <p className="text-sm font-medium text-foreground mb-3">Построить маршрут:</p>
            
            <MedicalButton
              variant="location"
              size="wide"
              onClick={() => handleLocationClick(branch.yandexMaps)}
              className="branch-button animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Navigation className="w-4 h-4" />
              Яндекс.Карты
              <ExternalLink className="w-3 h-3 ml-auto" />
            </MedicalButton>
            
            <MedicalButton
              variant="maps"
              size="wide"
              onClick={() => handleLocationClick(branch.googleMaps)}
              className="branch-button animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <MapPin className="w-4 h-4" />
              Google Maps
              <ExternalLink className="w-3 h-3 ml-auto" />
            </MedicalButton>
            
            <MedicalButton
              variant="gis"
              size="wide"
              onClick={() => handleLocationClick(branch.twoGis)}
              className="branch-button animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Navigation className="w-4 h-4" />
              2ГИС
              <ExternalLink className="w-3 h-3 ml-auto" />
            </MedicalButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}