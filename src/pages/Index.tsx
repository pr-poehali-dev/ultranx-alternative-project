import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 font-open-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-montserrat font-bold text-gray-900">Analytics Platform</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'faq', label: 'Вопросы и ответы', icon: 'HelpCircle' },
                { id: 'dashboard', label: 'Личный кабинет', icon: 'User' },
                { id: 'donate', label: 'Донат', icon: 'Heart' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="py-20 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-montserrat font-bold text-gray-900 mb-6 leading-tight">
              Мощная платформа для
              <span className="text-primary block mt-2">аналитики и данных</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Современное решение для отслеживания метрик, анализа пользовательского поведения 
              и принятия решений на основе данных. Минималистичный дизайн, максимальная функциональность.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200">
                <Icon name="BarChart3" className="mr-2" size={20} />
                Начать анализ
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200">
                <Icon name="PlayCircle" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                { title: 'Пользователей', value: '24,512', change: '+12%', icon: 'Users' },
                { title: 'Сессий сегодня', value: '1,847', change: '+8%', icon: 'Activity' },
                { title: 'Конверсия', value: '3.2%', change: '+0.5%', icon: 'TrendingUp' }
              ].map((stat, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-200 animate-scale-in border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Icon name={stat.icon as any} className="h-8 w-8 text-primary" />
                      <Badge variant="secondary" className="text-green-600 bg-green-50">
                        {stat.change}
                      </Badge>
                    </div>
                    <div className="text-2xl font-montserrat font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.title}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {activeSection === 'faq' && (
        <section className="py-20 animate-fade-in">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
                Часто задаваемые вопросы
              </h2>
              <p className="text-xl text-gray-600">
                Ответы на самые популярные вопросы о нашей платформе
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Как начать работу с платформой?",
                  answer: "Зарегистрируйтесь, добавьте код отслеживания на свой сайт и начните получать данные в режиме реального времени. Процесс занимает менее 5 минут."
                },
                {
                  question: "Какие метрики можно отслеживать?",
                  answer: "Мы отслеживаем более 50 различных метрик: посещения, конверсии, время на сайте, источники трафика, пользовательские события и многое другое."
                },
                {
                  question: "Есть ли API для интеграции?",
                  answer: "Да, у нас есть полнофункциональный REST API с подробной документацией. Также доступны SDK для популярных языков программирования."
                },
                {
                  question: "Как обеспечивается безопасность данных?",
                  answer: "Мы используем шифрование AES-256, соблюдаем GDPR и храним данные в защищенных дата-центрах с сертификацией SOC 2."
                },
                {
                  question: "Можно ли экспортировать данные?",
                  answer: "Конечно! Данные можно экспортировать в CSV, JSON, PDF форматах или подключиться через API для автоматической синхронизации."
                }
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg shadow-sm bg-white">
                  <AccordionTrigger className="px-6 py-4 text-left font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Dashboard Section */}
      {activeSection === 'dashboard' && (
        <section className="py-20 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
                Личный кабинет
              </h2>
              <p className="text-xl text-gray-600">
                Ваша персональная панель управления и аналитики
              </p>
            </div>

            <Tabs defaultValue="analytics" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3 mx-auto">
                <TabsTrigger value="analytics" className="flex items-center space-x-2">
                  <Icon name="BarChart3" size={16} />
                  <span>Аналитика</span>
                </TabsTrigger>
                <TabsTrigger value="reports" className="flex items-center space-x-2">
                  <Icon name="FileText" size={16} />
                  <span>Отчеты</span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center space-x-2">
                  <Icon name="Settings" size={16} />
                  <span>Настройки</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="analytics" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: 'Активные пользователи', value: '1,247', icon: 'Users', color: 'bg-blue-500' },
                    { title: 'Продажи за месяц', value: '₽284,590', icon: 'DollarSign', color: 'bg-green-500' },
                    { title: 'Средний чек', value: '₽2,340', icon: 'CreditCard', color: 'bg-purple-500' },
                    { title: 'Конверсия', value: '4.2%', icon: 'TrendingUp', color: 'bg-orange-500' }
                  ].map((metric, index) => (
                    <Card key={index} className="shadow-lg border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600 mb-2">{metric.title}</p>
                            <p className="text-2xl font-montserrat font-bold text-gray-900">
                              {metric.value}
                            </p>
                          </div>
                          <div className={`${metric.color} p-3 rounded-lg`}>
                            <Icon name={metric.icon as any} className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="shadow-lg border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon name="Activity" className="h-5 w-5 text-primary" />
                        <span>Активность пользователей</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { period: 'Сегодня', users: 847, progress: 85 },
                        { period: 'Вчера', users: 1203, progress: 100 },
                        { period: 'На прошлой неделе', users: 924, progress: 78 },
                        { period: 'В прошлом месяце', users: 1156, progress: 92 }
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">{item.period}</span>
                            <span className="font-medium">{item.users} пользователей</span>
                          </div>
                          <Progress value={item.progress} className="h-2" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon name="Globe" className="h-5 w-5 text-primary" />
                        <span>Источники трафика</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { source: 'Органический поиск', percentage: 45, color: 'bg-green-500' },
                        { source: 'Прямой трафик', percentage: 28, color: 'bg-blue-500' },
                        { source: 'Социальные сети', percentage: 18, color: 'bg-purple-500' },
                        { source: 'Реклама', percentage: 9, color: 'bg-orange-500' }
                      ].map((source, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${source.color}`}></div>
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-700">{source.source}</span>
                              <span className="font-medium">{source.percentage}%</span>
                            </div>
                            <Progress value={source.percentage} className="h-2" />
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="reports">
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle>Отчеты</CardTitle>
                    <CardDescription>
                      Создавайте и экспортируйте детальные отчеты по вашим данным
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: 'Ежемесячный отчет', date: '1 сентября 2025', status: 'Готов' },
                      { name: 'Анализ конверсий', date: '28 августа 2025', status: 'В процессе' },
                      { name: 'Отчет по трафику', date: '25 августа 2025', status: 'Готов' }
                    ].map((report, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{report.name}</h4>
                          <p className="text-sm text-gray-600">{report.date}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant={report.status === 'Готов' ? 'default' : 'secondary'}>
                            {report.status}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Icon name="Download" size={16} className="mr-1" />
                            Скачать
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle>Настройки</CardTitle>
                    <CardDescription>
                      Управляйте своим профилем и настройками платформы
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900">Уведомления</h4>
                      {[
                        'Еженедельные отчеты по email',
                        'Push-уведомления о важных событиях',
                        'SMS при критических изменениях метрик'
                      ].map((setting, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-700">{setting}</span>
                          <Button size="sm" variant="outline">
                            Включено
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

      {/* Donate Section */}
      {activeSection === 'donate' && (
        <section className="py-20 animate-fade-in">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
                Поддержать проект
              </h2>
              <p className="text-xl text-gray-600">
                Помогите нам развивать платформу и делать её ещё лучше
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: 'Базовая',
                  amount: '500',
                  description: 'Спасибо за поддержку!',
                  features: ['Благодарность в рассылке', 'Приоритетная поддержка'],
                  popular: false
                },
                {
                  title: 'Стандартная',
                  amount: '1,500',
                  description: 'Отличный выбор!',
                  features: ['Все из Базовой', 'Ранний доступ к новым функциям', 'Персональная консультация'],
                  popular: true
                },
                {
                  title: 'Премиум',
                  amount: '5,000',
                  description: 'Максимальная поддержка',
                  features: ['Все из Стандартной', 'Индивидуальная настройка', 'Прямая связь с командой'],
                  popular: false
                }
              ].map((plan, index) => (
                <Card key={index} className={`shadow-lg border-0 relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-white px-3 py-1">Популярно</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-montserrat">{plan.title}</CardTitle>
                    <div className="text-4xl font-bold text-primary">₽{plan.amount}</div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <Icon name="Check" className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                      <Icon name="Heart" className="mr-2" size={16} />
                      Поддержать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="shadow-lg border-0 bg-gradient-to-r from-primary/10 to-blue-50">
              <CardContent className="p-8 text-center">
                <Icon name="Heart" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
                  Спасибо за вашу поддержку!
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Ваш вклад помогает нам создавать лучшие инструменты для аналитики 
                  и развивать открытые технологии. Каждое пожертвование имеет значение.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    <Icon name="CreditCard" className="mr-2" size={20} />
                    Другая сумма
                  </Button>
                  <Button variant="outline" size="lg">
                    <Icon name="Gift" className="mr-2" size={20} />
                    Подарочный сертификат
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Zap" className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-montserrat font-bold">Analytics Platform</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Мощная платформа для аналитики и принятия решений на основе данных
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { icon: 'Mail', label: 'Контакты' },
                { icon: 'Github', label: 'GitHub' },
                { icon: 'Twitter', label: 'Twitter' },
                { icon: 'Linkedin', label: 'LinkedIn' }
              ].map((social, index) => (
                <button key={index} className="text-gray-400 hover:text-primary transition-colors duration-200">
                  <Icon name={social.icon as any} size={24} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;