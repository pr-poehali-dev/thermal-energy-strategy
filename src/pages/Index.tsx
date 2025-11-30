import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 0, title: 'История развития кафедры', icon: 'History' },
    { id: 1, title: 'Конкуренты, партнеры', icon: 'Handshake' },
    { id: 2, title: 'Стейкхолдеры', icon: 'Users' },
    { id: 3, title: 'Основная проблема кафедры', icon: 'AlertCircle' },
    { id: 4, title: 'SWOT-анализ кафедры', icon: 'Target' },
    { id: 5, title: 'Компетенции кафедры', icon: 'Award' },
    { id: 6, title: 'Анализ ситуации на кафедре', icon: 'BarChart3' },
    { id: 7, title: 'Существующая концепция кафедры', icon: 'FileText' },
    { id: 8, title: 'Идеальная концепция кафедры', icon: 'Sparkles' },
    { id: 9, title: 'План развития НИР кафедры', icon: 'Rocket' },
    { id: 10, title: 'Календарный план развития кафедры', icon: 'Calendar' },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-primary/5">
      <div className="container mx-auto px-4 py-8 h-screen flex flex-col">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Flame" size={28} className="text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-secondary">Стратегия развития кафедры</h1>
              <p className="text-sm text-muted-foreground">Промышленная теплоэнергетика</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Слайд {currentSlide + 1} из {slides.length}</span>
            <Progress value={((currentSlide + 1) / slides.length) * 100} className="w-24" />
          </div>
        </header>

        <div className="flex-1 relative overflow-hidden">
          {currentSlide === 0 && <Slide1 />}
          {currentSlide === 1 && <Slide2 />}
          {currentSlide === 2 && <Slide3 />}
          {currentSlide === 3 && <Slide4 />}
          {currentSlide === 4 && <Slide5 />}
          {currentSlide === 5 && <Slide6 />}
          {currentSlide === 6 && <Slide7 />}
          {currentSlide === 7 && <Slide8 />}
          {currentSlide === 8 && <Slide9 />}
          {currentSlide === 9 && <Slide10 />}
          {currentSlide === 10 && <Slide11 />}
        </div>

        <footer className="flex items-center justify-between mt-8 pt-6 border-t">
          <div className="flex gap-2 flex-wrap">
            {slides.map((slide) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(slide.id)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === slide.id ? 'bg-primary w-8' : 'bg-muted hover:bg-muted-foreground/50'
                }`}
                title={slide.title}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={prevSlide} disabled={currentSlide === 0}>
              <Icon name="ChevronLeft" size={20} />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

const Slide1 = () => {
  const timeline = [
    { year: '1963', event: 'Основание кафедры', description: 'Создана как кафедра Промышленной теплоэнергетики', color: 'bg-blue-500' },
    { year: '1975', event: 'Первая лаборатория', description: 'Открыта лаборатория теплотехнических измерений', color: 'bg-cyan-500' },
    { year: '1989', event: 'Расширение программ', description: 'Запущены программы магистратуры и аспирантуры', color: 'bg-indigo-500' },
    { year: '2005', event: 'Модернизация', description: 'Обновление материально-технической базы', color: 'bg-purple-500' },
    { year: '2015', event: 'Международное признание', description: 'Сотрудничество с ведущими зарубежными вузами', color: 'bg-violet-500' },
    { year: '2024', event: 'Цифровая трансформация', description: 'Внедрение современных технологий обучения и исследований', color: 'bg-primary' },
  ];

  return (
    <div className="h-full animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-secondary mb-2">История развития кафедры</h2>
        <p className="text-muted-foreground">60 лет непрерывного развития и совершенствования</p>
      </div>

      <div className="relative mt-12">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-primary" />
        
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <Card className="hover-scale inline-block">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.event}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                  {item.year}
                </div>
              </div>
              
              <div className="flex-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Slide2 = () => {
  const competitors = [
    { name: 'МГТУ им. Баумана', strength: 85, type: 'Конкурент' },
    { name: 'СПбПУ', strength: 82, type: 'Конкурент' },
    { name: 'МИФИ', strength: 78, type: 'Конкурент' },
  ];

  const partners = [
    { name: 'Башкирская генерирующая компания', type: 'Партнер', projects: 12 },
    { name: 'Газпром трансгаз Уфа', type: 'Партнер', projects: 8 },
    { name: 'БашРТС', type: 'Партнер', projects: 6 },
    { name: 'ОАО "Башкирэнерго"', type: 'Партнер', projects: 5 },
  ];

  return (
    <div className="h-full animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-secondary mb-2">Конкуренты и партнеры</h2>
        <p className="text-muted-foreground">Конкурентная среда и стратегические альянсы</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="TrendingUp" className="text-destructive" />
              Конкуренты
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {competitors.map((comp, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{comp.name}</span>
                  <Badge variant="destructive">{comp.strength}%</Badge>
                </div>
                <Progress value={comp.strength} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Handshake" className="text-primary" />
              Партнеры
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg hover-scale">
                <div>
                  <p className="font-medium">{partner.name}</p>
                  <p className="text-sm text-muted-foreground">{partner.projects} совместных проектов</p>
                </div>
                <Icon name="Building2" className="text-primary" size={24} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardContent className="py-6">
          <div className="flex items-center justify-around text-center">
            <div>
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Ключевых партнера</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">31</div>
              <div className="text-sm text-muted-foreground">Совместный проект</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Лет сотрудничества</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Slide3 = () => {
  const stakeholders = [
    {
      name: 'Башкирская генерирующая компания',
      abbr: 'БГК',
      interest: 'Подготовка кадров, НИР',
      influence: 95,
      icon: 'Factory',
      color: 'bg-orange-500',
    },
    {
      name: 'Газпром трансгаз Уфа',
      abbr: 'Газпром',
      interest: 'Целевое обучение, исследования',
      influence: 90,
      icon: 'Flame',
      color: 'bg-blue-500',
    },
    {
      name: 'БашРТС',
      abbr: 'БашРТС',
      interest: 'Инновационные решения, стажировки',
      influence: 85,
      icon: 'Zap',
      color: 'bg-yellow-500',
    },
    {
      name: 'Абитуриенты',
      abbr: 'Студенты',
      interest: 'Качественное образование, трудоустройство',
      influence: 80,
      icon: 'GraduationCap',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="h-full animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-secondary mb-2">Стейкхолдеры</h2>
        <p className="text-muted-foreground">Заинтересованные стороны и их влияние на развитие кафедры</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {stakeholders.map((stakeholder, index) => (
          <Card key={index} className="hover-scale">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-full ${stakeholder.color} flex items-center justify-center text-white`}>
                  <Icon name={stakeholder.icon} size={28} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-1">{stakeholder.name}</CardTitle>
                  <Badge variant="secondary">{stakeholder.abbr}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{stakeholder.interest}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Влияние на кафедру</span>
                  <span className="font-medium">{stakeholder.influence}%</span>
                </div>
                <Progress value={stakeholder.influence} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <CardContent className="py-6">
          <p className="text-center text-lg font-medium">
            <Icon name="Users" className="inline mr-2 text-primary" size={24} />
            Тесное взаимодействие со всеми стейкхолдерами — ключ к успешному развитию кафедры
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

const Slide4 = () => {
  return (
    <div className="h-full animate-fade-in flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-2">Основная проблема кафедры</h2>
        </div>

        <Card className="border-destructive/50 shadow-lg">
          <CardHeader className="bg-destructive/5">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Icon name="AlertCircle" size={32} className="text-destructive" />
              Отток квалифицированных кадров
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-muted">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-destructive mb-2">35%</div>
                  <p className="text-sm text-muted-foreground">Выпускников уходят в другие отрасли</p>
                </CardContent>
              </Card>
              <Card className="bg-muted">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-destructive mb-2">20%</div>
                  <p className="text-sm text-muted-foreground">Преподавателей старше 60 лет</p>
                </CardContent>
              </Card>
              <Card className="bg-muted">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-destructive mb-2">-15%</div>
                  <p className="text-sm text-muted-foreground">Снижение набора за 3 года</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                <Icon name="TrendingDown" className="text-destructive mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Низкая привлекательность для молодых специалистов</h4>
                  <p className="text-sm text-muted-foreground">Зарплаты в промышленности выше на 40-60%</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                <Icon name="Users" className="text-destructive mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Старение преподавательского состава</h4>
                  <p className="text-sm text-muted-foreground">Средний возраст профессорско-преподавательского состава 58 лет</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                <Icon name="BookOpen" className="text-destructive mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Снижение интереса абитуриентов</h4>
                  <p className="text-sm text-muted-foreground">Конкуренция с IT-специальностями и новыми направлениями</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Slide5 = () => {
  const swotData = {
    strengths: [
      '60-летний опыт подготовки специалистов',
      'Современная материально-техническая база',
      'Сильный профессорско-преподавательский состав',
      'Связи с ведущими энергетическими компаниями',
    ],
    weaknesses: [
      'Старение кадров (средний возраст 58 лет)',
      'Недостаточная цифровизация процессов',
      'Низкая зарплата молодых преподавателей',
      'Отток выпускников в другие отрасли',
    ],
    opportunities: [
      'Рост спроса на энергоэффективные технологии',
      'Программы поддержки науки и образования',
      'Развитие возобновляемой энергетики',
      'Международное сотрудничество',
    ],
    threats: [
      'Конкуренция с IT-специальностями',
      'Демографический спад',
      'Снижение престижа инженерных профессий',
      'Экономическая нестабильность',
    ],
  };

  return (
    <div className="h-full animate-fade-in overflow-y-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-secondary mb-2">SWOT-анализ кафедры</h2>
        <p className="text-muted-foreground">Комплексная оценка внутренних и внешних факторов</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <Card className="border-primary/50 hover-scale">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2 text-primary">
              <Icon name="ThumbsUp" size={24} />
              Сильные стороны (S)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-2">
              {swotData.strengths.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Icon name="CheckCircle" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-destructive/50 hover-scale">
          <CardHeader className="bg-destructive/5">
            <CardTitle className="flex items-center gap-2 text-destructive">
              <Icon name="ThumbsDown" size={24} />
              Слабые стороны (W)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-2">
              {swotData.weaknesses.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Icon name="AlertCircle" size={16} className="text-destructive mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-accent/50 hover-scale">
          <CardHeader className="bg-accent/5">
            <CardTitle className="flex items-center gap-2 text-accent">
              <Icon name="TrendingUp" size={24} />
              Возможности (O)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-2">
              {swotData.opportunities.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Icon name="Star" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-orange-500/50 hover-scale">
          <CardHeader className="bg-orange-500/5">
            <CardTitle className="flex items-center gap-2 text-orange-600">
              <Icon name="AlertTriangle" size={24} />
              Угрозы (T)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-2">
              {swotData.threats.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Icon name="XCircle" size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Slide6 = () => {
  const competencies = [
    { name: 'Энергоэффективность', level: 92, icon: 'Lightbulb', color: 'bg-yellow-500' },
    { name: 'Теплотехника', level: 88, icon: 'Flame', color: 'bg-orange-500' },
    { name: 'Возобновляемая энергетика', level: 75, icon: 'Sun', color: 'bg-blue-500' },
    { name: 'Промышленные системы', level: 85, icon: 'Factory', color: 'bg-gray-500' },
    { name: 'Энергоаудит', level: 90, icon: 'Search', color: 'bg-green-500' },
    { name: 'Моделирование процессов', level: 70, icon: 'Cpu', color: 'bg-purple-500' },
  ];

  return (
    <div className="h-full animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-secondary mb-2">Компетенции кафедры</h2>
        <p className="text-muted-foreground">Ключевые области экспертизы и их развитие</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {competencies.map((comp, index) => (
          <Card key={index} className="hover-scale">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg ${comp.color} flex items-center justify-center text-white`}>
                    <Icon name={comp.icon} size={24} />
                  </div>
                  <CardTitle className="text-lg">{comp.name}</CardTitle>
                </div>
                <Badge variant={comp.level >= 85 ? 'default' : 'secondary'}>{comp.level}%</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={comp.level} className="h-3" />
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <CardContent className="py-6">
          <div className="flex items-center justify-around text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">85%</div>
              <div className="text-sm text-muted-foreground">Средний уровень компетенций</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary mb-1">6</div>
              <div className="text-sm text-muted-foreground">Ключевых направлений</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary mb-1">+12%</div>
              <div className="text-sm text-muted-foreground">Рост за последние 3 года</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Slide7 = () => {
  const metrics = [
    { label: 'Количество студентов', value: 450, target: 600, unit: 'чел', icon: 'Users' },
    { label: 'Научные публикации', value: 85, target: 150, unit: 'в год', icon: 'BookOpen' },
    { label: 'Защиты диссертаций', value: 3, target: 8, unit: 'в год', icon: 'GraduationCap' },
    { label: 'Внебюджетные средства', value: 12, target: 25, unit: 'млн ₽', icon: 'TrendingUp' },
  ];

  return (
    <div className="h-full animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-secondary mb-2">Анализ ситуации на кафедре</h2>
        <p className="text-muted-foreground">Текущие показатели и целевые значения</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {metrics.map((metric, index) => {
          const percentage = (metric.value / metric.target) * 100;
          return (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={metric.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{metric.label}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-end gap-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">Текущее</div>
                  </div>
                  <Icon name="ArrowRight" className="text-muted-foreground mb-2" />
                  <div>
                    <div className="text-3xl font-bold text-accent">{metric.target}</div>
                    <div className="text-xs text-muted-foreground">Целевое</div>
                  </div>
                  <div className="ml-auto">
                    <Badge variant={percentage >= 70 ? 'default' : 'secondary'}>
                      {metric.unit}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-1">
                  <Progress value={percentage} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Прогресс: {percentage.toFixed(0)}%</span>
                    <span>Осталось: {metric.target - metric.value} {metric.unit}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="mt-6 border-destructive/50">
        <CardContent className="py-6">
          <div className="flex items-center gap-4">
            <Icon name="AlertTriangle" size={32} className="text-destructive" />
            <div>
              <h3 className="font-medium mb-1">Критическая ситуация</h3>
              <p className="text-sm text-muted-foreground">
                Текущие показатели не соответствуют целевым значениям. Необходимы срочные меры по улучшению ситуации.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Slide8 = () => {
  return (
    <div className="h-full animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-secondary mb-2">Существующая концепция кафедры</h2>
        <p className="text-muted-foreground">Традиционная модель образования</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="hover-scale">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="BookOpen" className="text-primary" />
              Образовательная деятельность
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                <span>Классические лекции и практические занятия</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                <span>Фокус на фундаментальной подготовке</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                <span>Ограниченное использование современных технологий</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover-scale">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="FlaskConical" className="text-primary" />
              Научная деятельность
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                <span>Исследования по традиционным направлениям теплоэнергетики</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                <span>Ограниченное финансирование научных проектов</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                <span>Недостаточное взаимодействие с промышленностью</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover-scale">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Users" className="text-primary" />
              Кадровая политика
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                <span>Опора на опытных преподавателей старшего поколения</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                <span>Сложности с привлечением молодых специалистов</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                <span>Ограниченные возможности карьерного роста</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted">
          <CardContent className="py-6">
            <div className="flex items-center gap-3">
              <Icon name="Info" className="text-primary" size={24} />
              <p className="text-sm">
                Существующая концепция обеспечивает базовую подготовку специалистов, но не отвечает современным требованиям рынка труда и тенденциям развития энергетики.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Slide9 = () => {
  return (
    <div className="h-full animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-secondary mb-2">Идеальная концепция кафедры</h2>
        <p className="text-muted-foreground">Инновационная модель будущего</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="hover-scale border-primary">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2 text-primary">
              <Icon name="Sparkles" size={24} />
              Образование нового поколения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} className="text-primary mt-1 flex-shrink-0" />
                <span>Интеграция онлайн-платформ и цифровых технологий в учебный процесс</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} className="text-primary mt-1 flex-shrink-0" />
                <span>Проектное обучение на реальных задачах промышленности</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} className="text-primary mt-1 flex-shrink-0" />
                <span>Индивидуальные образовательные траектории для каждого студента</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover-scale border-accent">
          <CardHeader className="bg-accent/5">
            <CardTitle className="flex items-center gap-2 text-accent">
              <Icon name="Rocket" size={24} />
              Прорывные исследования
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} className="text-accent mt-1 flex-shrink-0" />
                <span>Создание центра компетенций по энергоэффективности и ВИЭ</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} className="text-accent mt-1 flex-shrink-0" />
                <span>Коммерциализация результатов научных исследований</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} className="text-accent mt-1 flex-shrink-0" />
                <span>Международные гранты и публикации в топовых журналах</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover-scale border-purple-500">
          <CardHeader className="bg-purple-500/5">
            <CardTitle className="flex items-center gap-2 text-purple-600">
              <Icon name="TrendingUp" size={24} />
              Привлекательный работодатель
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                <span>Конкурентная оплата труда и система мотивации</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                <span>Программы развития и карьерного роста для молодых преподавателей</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                <span>Баланс науки, преподавания и практической деятельности</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-primary to-accent text-white">
          <CardContent className="py-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Видение 2030</h3>
              <p className="text-sm opacity-90">
                Кафедра — признанный лидер в области промышленной теплоэнергетики, центр инноваций и подготовки элитных специалистов
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Slide10 = () => {
  const nirPlan = [
    {
      direction: 'Энергоэффективность',
      projects: [
        'Разработка систем рекуперации тепла нового поколения',
        'Оптимизация работы котельных установок с ИИ',
        'Энергоаудит промышленных предприятий',
      ],
      funding: '15 млн ₽',
      icon: 'Zap',
    },
    {
      direction: 'Возобновляемая энергетика',
      projects: [
        'Гибридные энергосистемы на базе ВИЭ',
        'Биогазовые установки для АПК',
        'Солнечные коллекторы для промышленности',
      ],
      funding: '12 млн ₽',
      icon: 'Sun',
    },
    {
      direction: 'Цифровизация энергетики',
      projects: [
        'Цифровые двойники энергетических систем',
        'IoT-мониторинг энергопотребления',
        'Предиктивная аналитика для энергообъектов',
      ],
      funding: '10 млн ₽',
      icon: 'Cpu',
    },
  ];

  return (
    <div className="h-full animate-fade-in overflow-y-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-secondary mb-2">План развития НИР кафедры</h2>
        <p className="text-muted-foreground">Приоритетные направления научных исследований на 2025-2027 гг.</p>
      </div>

      <div className="space-y-6">
        {nirPlan.map((direction, index) => (
          <Card key={index} className="hover-scale">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={direction.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{direction.direction}</CardTitle>
                </div>
                <Badge className="text-base px-4 py-2">{direction.funding}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {direction.projects.map((project, pIndex) => (
                  <li key={pIndex} className="flex items-start gap-2 text-sm">
                    <Icon name="CheckCircle" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <CardContent className="py-6">
          <div className="flex items-center justify-around text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">37 млн ₽</div>
              <div className="text-sm text-muted-foreground">Общее финансирование</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary mb-1">9</div>
              <div className="text-sm text-muted-foreground">Научных проектов</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary mb-1">3</div>
              <div className="text-sm text-muted-foreground">Приоритетных направления</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Slide11 = () => {
  const timeline = [
    {
      quarter: 'Q1 2025',
      tasks: [
        'Запуск программы привлечения молодых преподавателей',
        'Модернизация лабораторной базы',
        'Подписание новых договоров с БГК и Газпром',
      ],
      status: 'Критично',
      color: 'bg-destructive',
    },
    {
      quarter: 'Q2 2025',
      tasks: [
        'Внедрение цифровых образовательных платформ',
        'Запуск первых проектов по энергоэффективности',
        'Проведение международной конференции',
      ],
      status: 'Высокий приоритет',
      color: 'bg-orange-500',
    },
    {
      quarter: 'Q3-Q4 2025',
      tasks: [
        'Создание центра компетенций по ВИЭ',
        'Разработка и защита 2-3 диссертаций',
        'Увеличение набора студентов на 20%',
      ],
      status: 'Важно',
      color: 'bg-primary',
    },
    {
      quarter: '2026',
      tasks: [
        'Выход на самоокупаемость по научным проектам',
        'Международная аккредитация программ',
        'Создание spin-off компаний на базе НИР',
      ],
      status: 'Стратегически важно',
      color: 'bg-accent',
    },
    {
      quarter: '2027',
      tasks: [
        'Достижение целевых показателей по всем направлениям',
        'Признание лидером в отрасли',
        'Масштабирование успешных практик',
      ],
      status: 'Долгосрочная цель',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="h-full animate-fade-in overflow-y-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-secondary mb-2">Календарный план развития кафедры</h2>
        <p className="text-muted-foreground">Дорожная карта 2025-2027</p>
      </div>

      <div className="space-y-6">
        {timeline.map((period, index) => (
          <Card key={index} className="hover-scale">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">{period.quarter}</CardTitle>
                <Badge className={`${period.color} text-white`}>{period.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {period.tasks.map((task, tIndex) => (
                  <li key={tIndex} className="flex items-start gap-2 text-sm">
                    <Icon name="Target" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6 bg-gradient-to-r from-primary to-accent text-white">
        <CardContent className="py-8">
          <div className="text-center space-y-2">
            <Icon name="Rocket" size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold">Путь к успеху начинается сегодня</h3>
            <p className="text-sm opacity-90 max-w-2xl mx-auto">
              Реализация стратегии развития позволит кафедре стать ведущим центром подготовки специалистов и проведения научных исследований в области промышленной теплоэнергетики
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
