import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

const newsData: NewsArticle[] = [
  {
    id: 1,
    title: "Революция в искусственном интеллекте: новые прорывы в машинном обучении",
    excerpt: "Ведущие технологические компании представили инновационные решения в области ИИ, которые изменят будущее.",
    category: "Технологии",
    image: "https://cdn.poehali.dev/projects/121a0d12-03a2-4620-8623-07bed8943dc6/files/80356cdd-3761-4aa7-a834-fb9aa76809d7.jpg",
    date: "24 октября 2025",
    readTime: "5 мин"
  },
  {
    id: 2,
    title: "Международный саммит по климату: достигнуты новые соглашения",
    excerpt: "Лидеры мировых держав договорились о конкретных шагах по борьбе с изменением климата.",
    category: "Политика",
    image: "https://cdn.poehali.dev/projects/121a0d12-03a2-4620-8623-07bed8943dc6/files/c7f7a986-c27b-4d5b-8010-a14e39dd5bc2.jpg",
    date: "24 октября 2025",
    readTime: "7 мин"
  },
  {
    id: 3,
    title: "Сборная России победила в чемпионате: исторический успех",
    excerpt: "Российская команда одержала уверенную победу в финальном матче международного турнира.",
    category: "Спорт",
    image: "https://cdn.poehali.dev/projects/121a0d12-03a2-4620-8623-07bed8943dc6/files/cfdc01fc-6783-4d49-ae09-a8058209e333.jpg",
    date: "23 октября 2025",
    readTime: "4 мин"
  },
  {
    id: 4,
    title: "Мировые рынки показывают рекордный рост",
    excerpt: "Фондовые индексы достигли исторических максимумов на фоне позитивных экономических данных.",
    category: "Экономика",
    image: "https://cdn.poehali.dev/projects/121a0d12-03a2-4620-8623-07bed8943dc6/files/80356cdd-3761-4aa7-a834-fb9aa76809d7.jpg",
    date: "23 октября 2025",
    readTime: "6 мин"
  },
  {
    id: 5,
    title: "Новая выставка современного искусства открылась в Москве",
    excerpt: "Галерея представила коллекцию работ молодых художников, исследующих цифровое искусство.",
    category: "Культура",
    image: "https://cdn.poehali.dev/projects/121a0d12-03a2-4620-8623-07bed8943dc6/files/c7f7a986-c27b-4d5b-8010-a14e39dd5bc2.jpg",
    date: "22 октября 2025",
    readTime: "5 мин"
  },
  {
    id: 6,
    title: "Квантовые компьютеры становятся реальностью для бизнеса",
    excerpt: "Первые коммерческие квантовые системы начинают решать практические задачи компаний.",
    category: "Технологии",
    image: "https://cdn.poehali.dev/projects/121a0d12-03a2-4620-8623-07bed8943dc6/files/80356cdd-3761-4aa7-a834-fb9aa76809d7.jpg",
    date: "22 октября 2025",
    readTime: "8 мин"
  }
];

const categories = ["Все", "Технологии", "Политика", "Экономика", "Спорт", "Культура"];

const breakingNews = [
  "СРОЧНО: Новый прорыв в квантовых вычислениях",
  "Мировые лидеры подписали климатическое соглашение",
  "Российская команда установила новый рекорд",
  "Биржевые индексы достигли исторических максимумов"
];

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [currentBreakingNews, setCurrentBreakingNews] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBreakingNews((prev) => (prev + 1) % breakingNews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const popularNews = newsData.slice(0, 4);

  const filteredNews = newsData.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Все" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-white/20 text-white font-bold px-3 py-1 uppercase text-xs">
              Срочно
            </Badge>
            <div className="flex-1 relative h-6 overflow-hidden">
              <div 
                className="absolute transition-transform duration-500 ease-in-out whitespace-nowrap"
                style={{ transform: `translateY(-${currentBreakingNews * 24}px)` }}
              >
                {breakingNews.map((news, index) => (
                  <div key={index} className="h-6 flex items-center font-medium text-sm">
                    {news}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Newspaper" className="text-primary-foreground" size={24} />
              </div>
              <h1 className="text-3xl font-bold text-foreground">NEWS PORTAL</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
          
          <div className="relative max-w-xl">
            <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Поиск новостей..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
              <Icon name="TrendingUp" size={32} className="text-primary" />
              Популярное
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularNews.map((article) => (
              <Card 
                key={article.id}
                className="overflow-hidden hover-scale cursor-pointer group border-border"
                onClick={() => navigate(`/article?id=${article.id}`)}
              >
                <div className="relative overflow-hidden h-32">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <Icon name="Eye" size={14} />
                    <span>{Math.floor(Math.random() * 5000 + 1000)} просмотров</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {filteredNews.length === 0 ? (
          <div className="text-center py-20">
            <Icon name="FileSearch" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">Новости не найдены</h2>
            <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((article, index) => (
              <Card 
                key={article.id} 
                className="overflow-hidden hover-scale cursor-pointer border-border group"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate(`/article?id=${article.id}`)}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground font-semibold">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/article?id=${article.id}`);
                    }}
                  >
                    Читать далее
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Newspaper" className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-bold">NEWS PORTAL</h3>
              </div>
              <p className="text-sm opacity-80">
                Ваш источник актуальных новостей из мира технологий, политики, экономики, спорта и культуры.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-primary transition-colors">Технологии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Экономика</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Спорт</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">О нас</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-primary transition-colors">О проекте</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Редакция</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Реклама</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2025 NEWS PORTAL. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;