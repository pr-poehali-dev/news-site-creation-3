import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const ContactsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время"
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contacts = [
    {
      title: "Адрес редакции",
      icon: "MapPin",
      lines: ["Москва, ул. Пушкина, д. 10", "Офис 501, 5 этаж"]
    },
    {
      title: "Телефон",
      icon: "Phone",
      lines: ["+7 (495) 123-45-67", "+7 (495) 123-45-68"]
    },
    {
      title: "Email",
      icon: "Mail",
      lines: ["info@newsportal.ru", "editor@newsportal.ru"]
    },
    {
      title: "Режим работы",
      icon: "Clock",
      lines: ["Пн-Пт: 9:00 - 18:00", "Сб-Вс: Выходной"]
    }
  ];

  const departments = [
    {
      title: "Редакция",
      email: "editor@newsportal.ru",
      description: "Для предложений новостей и материалов"
    },
    {
      title: "Реклама",
      email: "ads@newsportal.ru",
      description: "По вопросам размещения рекламы"
    },
    {
      title: "Техподдержка",
      email: "support@newsportal.ru",
      description: "Технические вопросы и проблемы с сайтом"
    },
    {
      title: "PR и партнерства",
      email: "pr@newsportal.ru",
      description: "Сотрудничество и партнерские программы"
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
              <a onClick={() => navigate("/about")} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">О нас</a>
              <a onClick={() => navigate("/contacts")} className="text-sm font-medium text-primary cursor-pointer">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Контакты</h1>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contacts.map((contact, index) => (
              <Card key={index} className="text-center p-6 hover-scale">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact.icon as any} className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-3">{contact.title}</h3>
                {contact.lines.map((line, i) => (
                  <p key={i} className="text-muted-foreground text-sm">{line}</p>
                ))}
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Отправить сообщение</h2>
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Ваше имя</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ivan@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Тема</label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Тема сообщения"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Сообщение</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ваше сообщение..."
                      className="min-h-32"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Отделы</h2>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <Card key={index} className="p-5 hover-scale">
                    <h3 className="font-bold text-lg text-foreground mb-2">{dept.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{dept.description}</p>
                    <a 
                      href={`mailto:${dept.email}`}
                      className="text-primary font-medium text-sm hover:underline flex items-center gap-2"
                    >
                      <Icon name="Mail" size={16} />
                      {dept.email}
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Мы в социальных сетях</h2>
              <p className="text-muted-foreground mb-6">Следите за новостями в наших социальных сетях</p>
              <div className="flex gap-4 justify-center">
                <a href="#" className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover-scale">
                  <Icon name="Facebook" size={24} className="text-primary-foreground" />
                </a>
                <a href="#" className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover-scale">
                  <Icon name="Twitter" size={24} className="text-primary-foreground" />
                </a>
                <a href="#" className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover-scale">
                  <Icon name="Instagram" size={24} className="text-primary-foreground" />
                </a>
                <a href="#" className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover-scale">
                  <Icon name="Youtube" size={24} className="text-primary-foreground" />
                </a>
              </div>
            </div>
          </Card>
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

export default ContactsPage;
