import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ArticleData {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  content: string;
  author: string;
}

const articlesData: Record<number, ArticleData> = {
  1: {
    id: 1,
    title: "Революция в искусственном интеллекте: новые прорывы в машинном обучении",
    excerpt: "Ведущие технологические компании представили инновационные решения в области ИИ, которые изменят будущее.",
    category: "Технологии",
    image: "https://cdn.poehali.dev/projects/121a0d12-03a2-4620-8623-07bed8943dc6/files/80356cdd-3761-4aa7-a834-fb9aa76809d7.jpg",
    date: "24 октября 2025",
    readTime: "5 мин",
    author: "Александр Петров",
    content: `Мир искусственного интеллекта переживает новую эру инноваций. Ведущие технологические компании представили революционные решения в области машинного обучения, которые обещают изменить наше будущее.

Новые алгоритмы глубокого обучения демонстрируют беспрецедентную точность в решении сложных задач. Системы компьютерного зрения теперь способны распознавать объекты с точностью, превышающей человеческие возможности.

Особое внимание уделяется этическим аспектам развития ИИ. Эксперты подчеркивают важность прозрачности алгоритмов и защиты данных пользователей. Разрабатываются новые стандарты безопасности и регулирования искусственного интеллекта.

Применение ИИ в медицине показывает впечатляющие результаты. Системы диагностики на основе машинного обучения помогают врачам выявлять заболевания на ранних стадиях, спасая тысячи жизней.

В образовании искусственный интеллект открывает новые возможности персонализированного обучения. Адаптивные системы подбирают материал под индивидуальные потребности каждого студента.`
  },
  2: {
    id: 2,
    title: "Международный саммит по климату: достигнуты новые соглашения",
    excerpt: "Лидеры мировых держав договорились о конкретных шагах по борьбе с изменением климата.",
    category: "Политика",
    image: "https://cdn.poehali.dev/projects/121a0d12-03a2-4620-8623-07bed8943dc6/files/c7f7a986-c27b-4d5b-8010-a14e39dd5bc2.jpg",
    date: "24 октября 2025",
    readTime: "7 мин",
    author: "Мария Соколова",
    content: `На международном саммите по климату в Женеве представители более 150 стран достигли исторического соглашения о борьбе с глобальным потеплением.

Главным достижением встречи стало обязательство развитых стран увеличить финансирование климатических программ в развивающихся странах до 500 миллиардов долларов ежегодно к 2030 году.

Лидеры государств согласились ускорить переход на возобновляемые источники энергии. Планируется полное прекращение использования угля в энергетике к 2035 году в развитых странах.

Особое внимание уделено защите лесов и океанов. Принята программа восстановления 1 миллиарда гектаров лесов в течение следующего десятилетия.

Эксперты называют эти соглашения прорывом в международном сотрудничестве, подчеркивая важность совместных усилий всех стран в борьбе с климатическим кризисом.`
  },
  3: {
    id: 3,
    title: "Сборная России победила в чемпионате: исторический успех",
    excerpt: "Российская команда одержала уверенную победу в финальном матче международного турнира.",
    category: "Спорт",
    image: "https://cdn.poehali.dev/projects/121a0d12-03a2-4620-8623-07bed8943dc6/files/cfdc01fc-6783-4d49-ae09-a8058209e333.jpg",
    date: "23 октября 2025",
    readTime: "4 мин",
    author: "Дмитрий Волков",
    content: `Российская сборная одержала триумфальную победу в финале международного чемпионата, завершив турнир со счетом 3:1 в решающем матче против действующих чемпионов.

Игра началась с агрессивной атаки соперников, но российская команда показала невероятную выдержку и тактическую зрелость. Первый гол был забит на 23-й минуте после блестящей комбинации.

Капитан команды отметился дублем, став лучшим бомбардиром турнира с 8 голами. Его игра на протяжении всего чемпионата была образцом профессионализма и лидерства.

Тренерский штаб получил заслуженные похвалы за подготовку команды и правильную стратегию. Молодые игроки показали отличную физическую форму и техническое мастерство.

Эта победа стала историческим достижением для российского спорта и вдохновит новое поколение спортсменов на великие свершения.`
  },
  4: {
    id: 4,
    title: "Мировые рынки показывают рекордный рост",
    excerpt: "Фондовые индексы достигли исторических максимумов на фоне позитивных экономических данных.",
    category: "Экономика",
    image: "https://cdn.poehali.dev/projects/121a0d12-03a2-4620-8623-07bed8943dc6/files/d22966a4-c099-4f16-a5b8-9540ce11ae91.jpg",
    date: "23 октября 2025",
    readTime: "6 мин",
    author: "Елена Морозова",
    content: `Мировые фондовые рынки демонстрируют впечатляющий рост, достигая исторических максимумов на фоне позитивных экономических показателей и уверенности инвесторов.

Индекс S&P 500 вырос на 2.5% за последнюю неделю, обновив исторический максимум. Европейские рынки также показывают стабильный рост, поддерживаемый сильными корпоративными отчетами.

Аналитики отмечают, что ключевыми драйверами роста стали снижение инфляции и улучшение экономических прогнозов. Центральные банки сигнализируют о возможном смягчении денежно-кредитной политики.

Технологический сектор возглавляет ралли, с акциями крупнейших компаний, растущими на 15-20% с начала квартала. Инвесторы делают ставку на инновации в области искусственного интеллекта.

Эксперты рекомендуют осторожность и диверсификацию портфелей, несмотря на позитивные тренды, призывая не забывать о потенциальных рисках.`
  },
  5: {
    id: 5,
    title: "Новая выставка современного искусства открылась в Москве",
    excerpt: "Галерея представила коллекцию работ молодых художников, исследующих цифровое искусство.",
    category: "Культура",
    image: "https://cdn.poehali.dev/projects/121a0d12-03a2-4620-8623-07bed8943dc6/files/becc4ec3-e9c8-4b35-b810-052f1cde2c0b.jpg",
    date: "22 октября 2025",
    readTime: "5 мин",
    author: "Ольга Белова",
    content: `В центре Москвы открылась грандиозная выставка современного искусства, представляющая работы талантливых молодых художников, экспериментирующих с цифровыми технологиями.

Экспозиция включает более 200 произведений в различных жанрах: от интерактивных инсталляций до NFT-арта. Посетители могут погрузиться в виртуальную реальность и стать частью художественного произведения.

Кураторы выставки подчеркивают важность диалога между традиционным и цифровым искусством. Многие работы объединяют классические техники живописи с современными технологиями дополненной реальности.

Особое внимание привлекает зал с генеративным искусством, где алгоритмы искусственного интеллекта создают уникальные произведения в режиме реального времени.

Выставка продлится до конца года и уже привлекла тысячи посетителей, став одним из главных культурных событий сезона.`
  },
  6: {
    id: 6,
    title: "Квантовые компьютеры становятся реальностью для бизнеса",
    excerpt: "Первые коммерческие квантовые системы начинают решать практические задачи компаний.",
    category: "Технологии",
    image: "https://cdn.poehali.dev/projects/121a0d12-03a2-4620-8623-07bed8943dc6/files/80356cdd-3761-4aa7-a834-fb9aa76809d7.jpg",
    date: "22 октября 2025",
    readTime: "8 мин",
    author: "Игорь Сидоров",
    content: `Квантовые вычисления переходят из лабораторий в реальный бизнес. Первые коммерческие квантовые компьютеры начинают решать практические задачи крупных корпораций.

Ведущие компании в области финансов используют квантовые алгоритмы для оптимизации портфелей и анализа рисков. Скорость вычислений превышает возможности классических суперкомпьютеров в тысячи раз.

В фармацевтической индустрии квантовые системы помогают моделировать молекулярные структуры, ускоряя разработку новых лекарств. Процесс, который раньше занимал годы, теперь может быть выполнен за недели.

Логистические компании применяют квантовые алгоритмы для оптимизации маршрутов доставки, экономя миллионы на топливе и сокращая выбросы углекислого газа.

Эксперты прогнозируют, что к 2030 году квантовые технологии станут стандартом для решения сложных вычислительных задач в различных отраслях экономики.`
  }
};

const ArticlePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const articleId = parseInt(searchParams.get("id") || "1");
  const article = articlesData[articleId];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Статья не найдена</h1>
          <Button onClick={() => navigate("/")}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  const relatedArticles = Object.values(articlesData)
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center cursor-pointer" onClick={() => navigate("/")}>
                <Icon name="Newspaper" className="text-primary-foreground" size={24} />
              </div>
              <h1 className="text-3xl font-bold text-foreground cursor-pointer" onClick={() => navigate("/")}>NEWS PORTAL</h1>
            </div>
            <Button variant="outline" onClick={() => navigate("/")} className="gap-2">
              <Icon name="ArrowLeft" size={18} />
              На главную
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Badge className="bg-primary text-primary-foreground font-semibold mb-4">
            {article.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Icon name="User" size={18} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={18} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={18} />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg text-foreground mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex gap-3 mt-12 mb-12">
          <Button variant="outline" className="gap-2">
            <Icon name="Share2" size={18} />
            Поделиться
          </Button>
          <Button variant="outline" className="gap-2">
            <Icon name="Bookmark" size={18} />
            Сохранить
          </Button>
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-16 border-t border-border pt-12">
            <h2 className="text-3xl font-bold mb-6">Похожие статьи</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Card 
                  key={relatedArticle.id}
                  className="overflow-hidden hover-scale cursor-pointer"
                  onClick={() => navigate(`/article?id=${relatedArticle.id}`)}
                >
                  <img 
                    src={relatedArticle.image} 
                    alt={relatedArticle.title}
                    className="w-full h-40 object-cover"
                  />
                  <CardContent className="p-4">
                    <Badge className="bg-primary text-primary-foreground text-xs mb-2">
                      {relatedArticle.category}
                    </Badge>
                    <h3 className="font-bold text-foreground line-clamp-2 mb-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ArticlePage;
