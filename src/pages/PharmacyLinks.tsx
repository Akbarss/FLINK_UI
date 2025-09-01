import { useState } from "react"
import { 
  Pill, 
  Phone, 
  MapPin, 
  Clock, 
  ShoppingCart, 
  Heart, 
  Shield, 
  Users, 
  Gift,
  MessageSquare,
  Star,
  Truck,
  CreditCard,
  UserCheck,
  Stethoscope,
  Activity,
  Plus
} from "lucide-react"
import { LinkCard } from "@/components/LinkCard"
import { BranchModal } from "@/components/BranchModal"
import { MedicalButton } from "@/components/MedicalButton"
import pharmacyHero from "@/assets/pharmacy-hero.jpg"

const branches = [
  {
    id: "1",
    name: "Филиал «Центральный»",
    address: "ул. Ленина, 45, Москва",
    phone: "+7 (495) 123-45-67",
    hours: "24/7",
    yandexMaps: "https://yandex.ru/maps/213/moscow/?text=аптека%20центральная",
    googleMaps: "https://maps.google.com/?q=pharmacy+moscow+central",
    twoGis: "https://2gis.ru/moscow/search/аптека"
  },
  {
    id: "2", 
    name: "Филиал «Северный»",
    address: "пр. Мира, 128, Москва",
    phone: "+7 (495) 123-45-68",
    hours: "08:00 - 22:00",
    yandexMaps: "https://yandex.ru/maps/213/moscow/?text=аптека%20северная",
    googleMaps: "https://maps.google.com/?q=pharmacy+moscow+north",
    twoGis: "https://2gis.ru/moscow/search/аптека%20северная"
  },
  {
    id: "3",
    name: "Филиал «Южный»",
    address: "ул. Профсоюзная, 67, Москва", 
    phone: "+7 (495) 123-45-69",
    hours: "09:00 - 21:00",
    yandexMaps: "https://yandex.ru/maps/213/moscow/?text=аптека%20южная",
    googleMaps: "https://maps.google.com/?q=pharmacy+moscow+south",
    twoGis: "https://2gis.ru/moscow/search/аптека%20южная"
  }
]

export default function PharmacyLinks() {
  const [selectedBranch, setSelectedBranch] = useState<typeof branches[0] | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleBranchClick = (branch: typeof branches[0]) => {
    setSelectedBranch(branch)
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="h-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${pharmacyHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative -mt-20 px-6">
          <div className="max-w-md mx-auto">
            <div className="medical-card text-center animate-float">
              <div className="w-20 h-20 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-4 shadow-medical animate-pulse-soft">
                <Plus className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Аптека «ВитаМед»
              </h1>
              <p className="text-muted-foreground text-sm">
                Ваше здоровье — наша забота
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8 max-w-md mx-auto space-y-8">
        
        {/* Quick Actions */}
        <div className="space-y-4">
          <h2 className="category-header">
            <Stethoscope className="w-5 h-5 text-primary" />
            Быстрые действия
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <LinkCard
              icon={<Phone className="w-5 h-5" />}
              title="Вызов врача"
              variant="primary"
              href="tel:+74951234567"
            />
            <LinkCard
              icon={<Truck className="w-5 h-5" />}
              title="Доставка"
              variant="accent"
              href="https://delivery.example.com"
            />
          </div>
        </div>

        {/* Main Services */}
        <div className="space-y-4">
          <h2 className="category-header">
            <Pill className="w-5 h-5 text-primary" />
            Основные услуги
          </h2>
          <div className="space-y-3">
            <LinkCard
              icon={<ShoppingCart className="w-6 h-6" />}
              title="Онлайн каталог лекарств"
              description="Поиск и заказ препаратов"
              href="https://catalog.example.com"
            />
            <LinkCard
              icon={<UserCheck className="w-6 h-6" />}
              title="Консультация фармацевта"
              description="Получите профессиональную помощь"
              href="https://consultation.example.com"
            />
            <LinkCard
              icon={<Activity className="w-6 h-6" />}
              title="Проверка давления"
              description="Бесплатное измерение в аптеке"
              variant="primary"
            />
            <LinkCard
              icon={<Shield className="w-6 h-6" />}
              title="Программа лояльности"
              description="Скидки и бонусы для постоянных клиентов"
              href="https://loyalty.example.com"
            />
          </div>
        </div>

        {/* Branches */}
        <div className="space-y-4">
          <h2 className="category-header">
            <MapPin className="w-5 h-5 text-primary" />
            Наши филиалы
          </h2>
          <div className="space-y-3">
            {branches.map((branch) => (
              <LinkCard
                key={branch.id}
                icon={<MapPin className="w-6 h-6" />}
                title={branch.name}
                description={branch.address}
                onClick={() => handleBranchClick(branch)}
              />
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="space-y-4">
          <h2 className="category-header">
            <Heart className="w-5 h-5 text-primary" />
            Дополнительные услуги
          </h2>
          <div className="space-y-3">
            <LinkCard
              icon={<Gift className="w-6 h-6" />}
              title="Подарочные сертификаты"
              description="Забота о близких"
              href="https://gifts.example.com"
            />
            <LinkCard
              icon={<CreditCard className="w-6 h-6" />}
              title="Оплата онлайн"
              description="Удобные способы оплаты"
              href="https://payment.example.com"
            />
            <LinkCard
              icon={<Clock className="w-6 h-6" />}
              title="Режим работы"
              description="Информация о часах работы"
            />
          </div>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h2 className="category-header">
            <Users className="w-5 h-5 text-primary" />
            Связь с нами
          </h2>
          <div className="space-y-3">
            <LinkCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="Чат-поддержка"
              description="Онлайн помощь 24/7"
              href="https://chat.example.com"
              variant="primary"
            />
            <LinkCard
              icon={<Star className="w-6 h-6" />}
              title="Отзывы"
              description="Поделитесь своим мнением"
              href="https://reviews.example.com"
            />
            <LinkCard
              icon={<Phone className="w-6 h-6" />}
              title="Горячая линия"
              description="+7 (495) 123-45-67"
              href="tel:+74951234567"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-6">
          <p className="text-xs text-muted-foreground">
            © 2024 Аптека «ВитаМед». Лицензия № 123456
          </p>
        </div>
      </div>

      <BranchModal
        branch={selectedBranch}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  )
}