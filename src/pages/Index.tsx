import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const navigationItems = [
    { id: 'about', label: 'О кафедре', icon: 'Building2' },
    { id: 'research', label: 'Исследования', icon: 'FlaskConical' },
    { id: 'programs', label: 'Программы', icon: 'GraduationCap' },
    { id: 'staff', label: 'Сотрудники', icon: 'Users' },
    { id: 'portfolio', label: 'Портфолио', icon: 'Briefcase' },
  ];

  const researchAreas = [
    {
      title: 'Энергоэффективность',
      description: 'Разработка технологий повышения энергетической эффективности промышленных предприятий',
      icon: 'Lightbulb',
    },
    {
      title: 'Возобновляемая энергетика',
      description: 'Исследования в области солнечной, ветровой и геотермальной энергии',
      icon: 'Sun',
    },
    {
      title: 'Теплотехника',
      description: 'Оптимизация процессов теплообмена и теплопередачи в промышленных системах',
      icon: 'Flame',
    },
  ];

  const programs = [
    {
      level: 'Бакалавриат',
      name: 'Промышленная теплоэнергетика',
      duration: '4 года',
      description: 'Подготовка специалистов по проектированию и эксплуатации энергетических систем',
    },
    {
      level: 'Магистратура',
      name: 'Энергетические системы и комплексы',
      duration: '2 года',
      description: 'Углубленная подготовка по современным энергетическим технологиям',
    },
    {
      level: 'Аспирантура',
      name: 'Промышленная теплоэнергетика',
      duration: '3 года',
      description: 'Научно-исследовательская деятельность и подготовка кадров высшей квалификации',
    },
  ];

  const staff = [
    {
      name: 'Иванов Сергей Петрович',
      position: 'Заведующий кафедрой',
      degree: 'д.т.н., профессор',
      image: '👨‍🏫',
    },
    {
      name: 'Петрова Елена Александровна',
      position: 'Профессор',
      degree: 'д.т.н., профессор',
      image: '👩‍🏫',
    },
    {
      name: 'Смирнов Андрей Владимирович',
      position: 'Доцент',
      degree: 'к.т.н., доцент',
      image: '👨‍💼',
    },
    {
      name: 'Козлова Мария Игоревна',
      position: 'Доцент',
      degree: 'к.т.н., доцент',
      image: '👩‍💼',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Система рекуперации тепла для промышленных предприятий',
      category: 'energy',
      year: '2023',
      description: 'Разработка и внедрение системы утилизации отходящего тепла с эффективностью до 85%',
      status: 'Завершен',
      impact: 'Снижение энергопотребления на 30%',
    },
    {
      id: 2,
      title: 'Гибридная энергетическая установка на базе ВИЭ',
      category: 'renewable',
      year: '2024',
      description: 'Интеграция солнечных панелей и ветрогенераторов с системой накопления энергии',
      status: 'В процессе',
      impact: 'Автономное энергоснабжение объектов',
    },
    {
      id: 3,
      title: 'Оптимизация котельных установок методами ИИ',
      category: 'optimization',
      year: '2023',
      description: 'Система мониторинга и управления котельным оборудованием с использованием машинного обучения',
      status: 'Завершен',
      impact: 'Увеличение КПД на 12%',
    },
    {
      id: 4,
      title: 'Биогазовая установка для переработки отходов',
      category: 'renewable',
      year: '2024',
      description: 'Комплекс по производству биогаза из органических отходов сельского хозяйства',
      status: 'В процессе',
      impact: 'Выработка 500 кВт электроэнергии',
    },
    {
      id: 5,
      title: 'Система мониторинга теплопотерь зданий',
      category: 'energy',
      year: '2022',
      description: 'Тепловизионное обследование и анализ энергоэффективности промышленных объектов',
      status: 'Завершен',
      impact: 'Обследовано 50+ объектов',
    },
    {
      id: 6,
      title: 'Когенерационная установка малой мощности',
      category: 'optimization',
      year: '2024',
      description: 'Разработка компактной системы для одновременной выработки тепла и электроэнергии',
      status: 'В процессе',
      impact: 'КПД установки 92%',
    },
  ];

  const categories = [
    { id: 'all', label: 'Все проекты', icon: 'Briefcase' },
    { id: 'energy', label: 'Энергоэффективность', icon: 'Zap' },
    { id: 'renewable', label: 'ВИЭ', icon: 'Leaf' },
    { id: 'optimization', label: 'Оптимизация', icon: 'Settings' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Flame" size={32} className="text-primary" />
            <div>
              <h1 className="text-xl font-bold text-secondary">Промышленная теплоэнергетика</h1>
              <p className="text-xs text-muted-foreground">Кафедра энергетического факультета</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <Icon name={item.icon} size={18} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container py-12">
        {activeSection === 'about' && (
          <section className="space-y-8 animate-fade-in">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl font-bold text-secondary">О кафедре</h2>
              <p className="text-lg text-muted-foreground">
                Кафедра Промышленной теплоэнергетики — ведущий научно-образовательный центр по подготовке
                специалистов в области энергетики и теплотехники
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="text-center hover-scale">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Award" size={32} className="text-primary" />
                  </div>
                  <CardTitle>60+ лет</CardTitle>
                  <CardDescription>История кафедры</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover-scale">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Users" size={32} className="text-primary" />
                  </div>
                  <CardTitle>500+</CardTitle>
                  <CardDescription>Выпускников ежегодно</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover-scale">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="BookOpen" size={32} className="text-primary" />
                  </div>
                  <CardTitle>150+</CardTitle>
                  <CardDescription>Научных публикаций в год</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Миссия кафедры</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Наша миссия — подготовка высококвалифицированных специалистов и проведение передовых научных
                  исследований в области промышленной теплоэнергетики, способствующих устойчивому развитию
                  энергетического сектора России.
                </p>
                <p>
                  Мы стремимся к интеграции образовательного процесса с практической деятельностью ведущих
                  энергетических предприятий, обеспечивая выпускникам конкурентные преимущества на рынке труда.
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        {activeSection === 'research' && (
          <section className="space-y-8 animate-fade-in">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl font-bold text-secondary">Научные исследования</h2>
              <p className="text-lg text-muted-foreground">
                Приоритетные направления научной деятельности кафедры
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {researchAreas.map((area, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon name={area.icon} size={24} className="text-accent" />
                    </div>
                    <CardTitle>{area.title}</CardTitle>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-secondary text-primary-foreground">
              <CardHeader>
                <CardTitle>Лаборатории кафедры</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-accent mt-0.5" />
                    <span>Лаборатория теплотехнических измерений и энергоаудита</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-accent mt-0.5" />
                    <span>Лаборатория возобновляемых источников энергии</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-accent mt-0.5" />
                    <span>Лаборатория компьютерного моделирования энергетических процессов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-accent mt-0.5" />
                    <span>Лаборатория котельного и турбинного оборудования</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        )}

        {activeSection === 'programs' && (
          <section className="space-y-8 animate-fade-in">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl font-bold text-secondary">Программы обучения</h2>
              <p className="text-lg text-muted-foreground">
                Многоуровневая система подготовки специалистов
              </p>
            </div>

            <div className="grid gap-6 mt-12">
              {programs.map((program, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <Badge variant="outline" className="mb-2">
                          {program.level}
                        </Badge>
                        <CardTitle className="text-2xl">{program.name}</CardTitle>
                        <CardDescription className="text-base">{program.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <Icon name="Clock" size={20} className="text-muted-foreground inline mr-2" />
                        <span className="text-sm font-medium">{program.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Преимущества обучения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Target" size={20} className="text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Практическая направленность</h4>
                      <p className="text-sm text-muted-foreground">
                        Стажировки на ведущих энергетических предприятиях
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Globe" size={20} className="text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Международное сотрудничество</h4>
                      <p className="text-sm text-muted-foreground">Программы обмена с зарубежными вузами</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Laptop" size={20} className="text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Современное оборудование</h4>
                      <p className="text-sm text-muted-foreground">
                        Доступ к новейшим лабораториям и программному обеспечению
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="TrendingUp" size={20} className="text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Карьерные перспективы</h4>
                      <p className="text-sm text-muted-foreground">Трудоустройство в крупнейших энергокомпаниях</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {activeSection === 'staff' && (
          <section className="space-y-8 animate-fade-in">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl font-bold text-secondary">Сотрудники кафедры</h2>
              <p className="text-lg text-muted-foreground">Профессорско-преподавательский состав</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {staff.map((person, index) => (
                <Card key={index} className="text-center hover-scale">
                  <CardHeader>
                    <div className="mx-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-5xl">
                      {person.image}
                    </div>
                    <CardTitle className="text-lg">{person.name}</CardTitle>
                    <CardDescription className="space-y-1">
                      <p className="font-medium text-primary">{person.position}</p>
                      <p className="text-xs">{person.degree}</p>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Состав кафедры</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">8</div>
                    <div className="text-sm text-muted-foreground">Докторов наук</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">15</div>
                    <div className="text-sm text-muted-foreground">Кандидатов наук</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">6</div>
                    <div className="text-sm text-muted-foreground">Профессоров</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">12</div>
                    <div className="text-sm text-muted-foreground">Доцентов</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {activeSection === 'portfolio' && (
          <section className="space-y-8 animate-fade-in">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl font-bold text-secondary">Портфолио научных проектов</h2>
              <p className="text-lg text-muted-foreground">Наши разработки и внедрения</p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center mt-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className="gap-2"
                >
                  <Icon name={category.icon} size={18} />
                  {category.label}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="hover-scale flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant={project.status === 'Завершен' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center gap-2 text-sm font-medium text-accent">
                      <Icon name="TrendingUp" size={16} />
                      {project.impact}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="border-t mt-16">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Flame" size={24} className="text-primary" />
              <span className="font-medium">Кафедра Промышленной теплоэнергетики</span>
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Контакты
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Email: dept@university.edu
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Тел: +7 (495) 123-45-67
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
