import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutPage = () => {
  const navigate = useNavigate();

  const team = [
    {
      name: "Александр Петров",
      role: "Главный редактор",
      description: "15 лет опыта в журналистике, специализация на технологиях",
      icon: "User"
    },
    {
      name: "Мария Соколова",
      role: "Политический обозреватель",
      description: "Эксперт по международным отношениям и геополитике",
      icon: "User"
    },
    {
      name: "Дмитрий Волков",
      role: "Спортивный журналист",
      description: "Освещение главных спортивных событий мира",
      icon: "User"
    },
    {
      name: "Елена Морозова",
      role: "Экономический аналитик",
      description: "Анализ финансовых рынков и экономических трендов",
      icon: "User"
    },
    {
      name: "Ольга Белова",
      role: "Культурный критик",
      description: "Эксперт по современному искусству и культуре",
      icon: "User"
    },
    {
      name: "Игорь Сидоров",
      role: "Технический директор",
      description: "Развитие цифровых платформ и инноваций",
      icon: "User"
    }
  ];

  const values = [
    {
      title: "Достоверность",
      description: "Мы проверяем каждый факт и публикуем только проверенную информацию",
      icon: "CheckCircle"
    },
    {
      title: "Объективность",
      description: "Представляем разные точки зрения и даем читателям право на собственное мнение",
      icon: "Scale"
    },
    {
      title: "Оперативность",
      description: "Первыми сообщаем о важных событиях и держим вас в курсе происходящего",
      icon: "Zap"
    },
    {
      title: "Качество",
      description: "Профессиональная журналистика от опытных экспертов в своих областях",
      icon: "Award"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Newspaper" className="text-primary-foreground" size={24} />
              </div>
              <h1 className="text-3xl font-bold text-foreground">NEWS PORTAL</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a onClick={() => navigate("/")} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Главная</a>
              <a onClick={() => navigate("/about")} className="text-sm font-medium text-primary cursor-pointer">О нас</a>
              <a onClick={() => navigate("/contacts")} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">О нас</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              NEWS PORTAL — это современный новостной портал, предоставляющий актуальную и достоверную информацию 
              из мира технологий, политики, экономики, спорта и культуры.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Наша миссия</h2>
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <p className="text-lg text-foreground leading-relaxed text-center">
                Мы стремимся предоставлять нашим читателям качественную журналистику, которая помогает понимать 
                современный мир. Наша команда профессионалов работает круглосуточно, чтобы вы всегда были в курсе 
                важнейших событий и могли принимать обоснованные решения на основе проверенных фактов.
              </p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Наши ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 hover-scale">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={value.icon as any} className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Наша команда</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="p-6 text-center hover-scale">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={member.icon as any} className="text-primary-foreground" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к нам</h2>
            <p className="text-lg mb-6 opacity-90">
              Следите за нашими новостями и будьте в курсе всех важных событий
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                variant="secondary" 
                className="gap-2"
                onClick={() => navigate("/contacts")}
              >
                <Icon name="Mail" size={18} />
                Связаться с нами
              </Button>
              <Button 
                variant="outline" 
                className="gap-2 bg-white/10 hover:bg-white/20 border-white/30 text-white"
                onClick={() => navigate("/")}
              >
                <Icon name="ArrowLeft" size={18} />
                На главную
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-20 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm opacity-80">
            <p>&copy; 2025 NEWS PORTAL. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
