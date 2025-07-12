import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Строительство домов",
      description: "Полный цикл строительства от фундамента до крыши",
      icon: "Home",
    },
    {
      title: "Ремонт квартир",
      description: "Капитальный и косметический ремонт любой сложности",
      icon: "Wrench",
    },
    {
      title: "Кровельные работы",
      description: "Монтаж и ремонт крыш, водосточных систем",
      icon: "Triangle",
    },
    {
      title: "Фасадные работы",
      description: "Утепление, отделка и покраска фасадов зданий",
      icon: "Building",
    },
  ];

  const reviews = [
    {
      name: "Михаил Петров",
      text: "Отличная бригада! Построили дом быстро и качественно. Рекомендую!",
      rating: 5,
    },
    {
      name: "Анна Смирнова",
      text: "Делали ремонт в квартире. Работы выполнены на высшем уровне.",
      rating: 5,
    },
    {
      name: "Сергей Иванов",
      text: "Профессиональный подход к делу. Соблюдали все сроки.",
      rating: 5,
    },
  ];

  const beforeAfterProjects = [
    {
      title: "Ремонт квартиры в ЖК Солнечный",
      beforeImage: "/img/3878a39d-3946-41a5-a2a4-88dc6a60e880.jpg",
      afterImage: "/img/02b3b551-1e00-4948-95c2-7895c71b5949.jpg",
      description: "Полный ремонт 3-комнатной квартиры",
    },
    {
      title: "Строительство загородного дома",
      beforeImage: "/img/3878a39d-3946-41a5-a2a4-88dc6a60e880.jpg",
      afterImage: "/img/02b3b551-1e00-4948-95c2-7895c71b5949.jpg",
      description: "Дом 150 кв.м с мансардой",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Hammer" size={32} className="text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">
              СтройБригада
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600">
              Услуги
            </a>
            <a href="#works" className="text-gray-700 hover:text-blue-600">
              Наши работы
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-600">
              Отзывы
            </a>
            <a href="#contacts" className="text-gray-700 hover:text-blue-600">
              Контакты
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Строительная бригада <br />
            <span className="text-orange-400">полного цикла</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Качественное строительство и ремонт с гарантией. Опыт работы более
            10 лет, сотни довольных клиентов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Icon name="Camera" size={20} className="mr-2" />
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Полный спектр строительных и ремонтных работ
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Icon
                    name={service.icon}
                    size={48}
                    className="text-blue-600 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section id="works" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-gray-600">
              Фото До и После наших проектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfterProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img
                        src={project.beforeImage}
                        alt="До"
                        className="w-full h-64 object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-red-500">
                        ДО
                      </Badge>
                    </div>
                    <div className="relative">
                      <img
                        src={project.afterImage}
                        alt="После"
                        className="w-full h-64 object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-green-500">
                        ПОСЛЕ
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{review.text}"</p>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" size={24} className="mr-4" />
                  <span className="text-xl">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={24} className="mr-4" />
                  <span className="text-xl">info@stroybrigada.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={24} className="mr-4" />
                  <span className="text-xl">Москва, ул. Строительная, 15</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={24} className="mr-4" />
                  <span className="text-xl">Пн-Сб: 8:00 - 20:00</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">
                    Оставить заявку
                  </h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                    <textarea
                      placeholder="Описание работ"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Hammer" size={24} className="text-orange-400" />
            <span className="text-xl font-bold">СтройБригада</span>
          </div>
          <p className="text-gray-400">
            © 2024 СтройБригада. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
