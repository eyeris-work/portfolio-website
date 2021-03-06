﻿(function ($) {
    'use strict';
    var i18n = {
        'en-GB': {
            'home': 'Home',
            'about': 'About me',
            'downloadCV': 'Download CV',
            'visitWebsite':'Online',
            'toggleNav': 'Toggle navigation',
            'myInfo': 'Hi! I am Irina, a highly experienced designer both for print and digital media.',
            'showAll': 'All projects',
            'webDesign': 'Web',
            'printDesign': 'Print',
            'photography': 'Photo&retouch',
            'web-design':'Website design',
            'function': 'My role',
            'logo-design': 'logo design',
            'layout': 'layout design',
            'graphdesign': 'graphic design',
            'prepress': 'prepress',
            'retouch': 'photo-retouch',
            'art-direction': 'art-direction',
            'illustration':'illustration',
            'editing':'photo-editing',
            'perform': 'as freelance-designer',
            'perform1': 'as web designer at www.mnogoland.ru',
            'perform2': 'as art-director at AQUARELLE',
            'perform3': 'as web designer at EKH Grafisk',
            'under-development': "Under development.",
            'no-longer-online': "No longer available.",
            'portfolio1': 'Web banners',
            'portfolio2': 'Radio show, poster',
            'portfolio3': 'Magazine',
            'portfolio4': 'Portrait retouch',
            'portfolio5': 'Invitation card',
            'portfolio6': 'Background replacement',
            'portfolio7': 'Desk calendar',
            'portfolio8': 'Product photography',
            'portfolio9': 'Desk calendar',
            'portfolio10': 'Photo illustration',
            'portfolio11': 'Valentine\s day, poster',
            'portfolio12': 'Product retouching',
            'portfolio13': 'Real estate, website',
            'portfolio14': 'Copywriting services, website',
            'portfolio15': 'Taxi services, landing',
            'portfolio16': 'Legal services, landing',
            'portfolio17': 'Real estate, landing',
            'portfolio18': 'Shutterstock photo portfolio',
            'portfolio19': 'Building materials, website',
            'portfolio20': 'Fiscal data operator, landing',
            'portfolio21': 'Cleaning services, landing',
            'portfolio22': 'Cosmetic products, landing',
            'portfolio23': 'Digital marketing, logo',
            'portfolio24': 'Art therapy, logo',
            'portfolio25': 'Midthaug Strekkmetall, website',
            'portfolio26': 'Molde Renseri, website',
            'portfolio27': 'Rakvaag Glass, website',
            'portfolio28': 'Axelstories, website',
            'portfolio1Desc': 'Designed for Christmas sale of an online book retailer.',
            'portfolio2Desc': 'This poster was developed during the advertising campaign of the morning music show on the radio AQUARELLE 90.7 FM. The idea of the show was to wake up with energetic music and fun DJs.',
            'bigudiTeaser': 'This is a backstage picture of me, in role of shooting test model :)',
            'portfolio3Desc': 'AQUARELLE is a glossy monthly printed magazine for women. It is about health, beauty, fashion and personal life. During the 5 years I worked at the magazine\'s creative department, I designed around 1.5 thousand pages, 30 magazine covers and retouched countless pictures. It was a multitasking job that consisted of visual concept development, management of the design department, collaboration with photographers and printing houses.',
            'portfolio4Desc': 'For portrait retouching I mainly use frequency separation technique mixed with dodge&burn if needed. Pictures were taken while studying at photo school.',
            'portfolio5Desc': 'This card was designed to be printed and sent as an invitation to a beauty contest. It is fan shaped due to the Spanish theme of the event.',
            'portfolio8Desc': 'I took these pictures while being a student of a photography school.',
            'portfolio9Desc': 'The annual corporate calendar for Aquarelle magazine was designed as a gift to subscribers. Here are calendars from 2014 with the concept of "Cover Girls", as well as from 2015 with the idea of "Female beauty around the world." Editorial staff acted as models, including me :)',
            'portfolio10Desc': 'In addition to retouching, working on photo-illustrations for a magazine often involves such manipulations as combining several photos into one, replacing background, adding objects, and so on. I especially loved this part of my job and took part in all stages: from sketching ideas and planning a photo shoot to preparing for printing.',
            'portfolio11Desc': 'This poster was designed in the context of Valentine\'s Day campaign, conducted by KIA MOTORS MOLDOVA to be published in AQUARELLE magazine.',
            'portfolio12Desc': 'Pictures were taken for a clothing store annual calendar. Due to the limited budget, the photo shooting took place in domestic conditions. Lighting imperfections required many hours of photo retouching.',
            'portfolio13Desc': 'Bizon Imobil is a real estate company based in Moldova. The task was to create a clear interface for quick property search and display.',
            'portfolio13Desc1': '01. Homepage shows top rental objects.',
            'portfolio13Desc2': '02. List page and advanced search form.',
            'portfolio13Desc3': '03. Detailed object description page.',
            'portfolio14Desc': 'Copywriting agency with a funny name Copymonster. The task was to create a funny catchy character who can easily explain the services provided with a sense of creative and informal atmosphere.',
            'portfolio14Desc2': 'Homepage.',
            'portfolio14Desc3': 'Additional services page.',
            'portfolio15Desc1': 'Two landing pages for a taxi service, available in Moscow, Russia. The first page has online taxi order form and company information. The second page is aimed at drivers willing to get a taxi job.',
            'portfolio15Desc2': 'Price-list as a dropdown menu.',
            'portfolio16Desc1': 'Landing page with information about a company that offers legal assistance with waste management licence.',
            'portfolio17Desc1': 'The elite real estate agency in Thailand needed a promotional page to attract Russian-speaking tourists. For design I used large quality images of exotic landscapes and attributes of island life.',
            'portfolio18Desc': 'Photography is one of my favorite things to do. This is my way to save and share with others the beautiful things that surround me. Recently I joined the community of shutterstock contributors, where you can view and download my work.',
            'portfolio19Desc': 'Simple website design for a building materials retailer based in Russia.',
            'portfolio20Desc': 'A very simple landing page promoting fiscal data operator services in the context of recent tax legislation changes in Russia.',
            'portfolio21Desc': 'A promotional page for a young creative team that provides various services in the field of cleaning. In addition to general information, there is a calculator on the page that calculates the cost of services.',
            'portfolio22Desc': 'Organic cosmetics for skin and hair care. It is made from a special substance based on Altai mountain herbs. The packaging design elements and the page are inspired by ancient rock paintings found in this area.',
            'portfolio23Desc': 'This logo was designed for a digital marketing company that provides various internet promotion services, such as video and text content creation, social media marketing, etc.',
            'portfolio24Desc': 'ArtGame is a creative therapy center that provides psychological assistance through art classes and games.',
            'portfolio25Desc': 'During the rebranding process for a local manufacturer Midthaug, a separate website was designed for one of their main products - strekkmetal. The website offers a large amount of different content, including product catalog, therefore needed a clearly intuitive structure. The website is designed with a modern, minimalist look, but at the same time has a bold color palette to attract the attention of creative architects, who are the main target group for the product.',
            'portfolio26Desc': 'This customer is running a local cleaning business and needed a simple solution to display the list of services, popular Q&A and contact information. We designed a single-page website that is easy to navigate and is smoothly guiding users towards needed information.',
            'portfolio27Desc': 'A nice and content-rich website for Rakvaag Glass',
            'portfolio28Desc': 'This colorful and fun web page features a series of children\'s books with fantastic illustrations that reflect the beautiful local landscapes. The main task was to develop a platform that supports 13 languages and provides the ability to download an application for reading. The application was designed in 2 versions - for phone and tablet, with a focus on quality user experience.',
            'actualAddress': 'Chisinau, Moldova',
            'irinaVoscoboinic': 'Irina Voscoboinic',
            'graphicDesigner': 'Digital designer',
            'education': 'Studied',
            'fotoMax': 'FotoMax Photography School',
            'beginner': 'Photography fundamentals',
            'usm': 'Moldova State University',
            'compScience': 'Computer Science',
            'lyceum': 'Theoretical lyceum',
            'bachelor': 'Liberal Studies',
            'software': 'Use',
            'languages': 'Speak',
            'russian': 'Russian',
            'english': 'English',
            'romanian': 'Romanian',
            'norwegian': 'Norwegian',
            'native': 'mother tongue',
            'professional': 'intermediate high(B2)',
            'limited': 'intermediate low(B1)',
            'interests': 'Love',
            'interest1': 'to walk and hike',
            'interest2': 'everything about photography',
            'interest3': 'to read science fiction',
            'skills': 'Can',
            'web': 'Web',
            'webSkills1': 'grid-based responsive web design',
            'webSkills2': 'HTML5, CSS3, Bootstrap fundamentals',
            'webSkills3': 'Ui, UX fundamentals',
            'print': 'Print',
            'printSkills1': 'commercial outdoor advertising design',
            'photo': 'Photo',
            'photoSkills1': 'high-end photo retouching',
            'photoSkills2': 'studio lightening and shooting fundamentals',
            'workExpirience': 'Work experience',
            'WebdesignerEKH':'Web/graphic designer',
            'EKH':'EKH Grafisk',
            'WebdesignerEKHResp1':'Prototyping and design of websites',
            'WebdesignerEKHResp2':'Design for web and social media marketing',
            'WebdesignerEKHResp3':'Design of logo and brand identity',
            'WebdesignerEKHResp4':'Design of various printed items (brochures, magazines, annual reports, etc)',
            'freelanceWeb': 'Freelance web designer',
            'freelanceWebResp1': 'design of websites and landing pages',
            'artDirectorAquarelle': 'Art-director',
            'AQUARELLE':'in AQUARELLE magazine',
            'aquarelleResp1': 'art department management',
            'aquarelleResp2': 'main responsibility for the magazine\’s overall visual appearance',
            'aquarelleResp3': 'organizing of photosessions and photo-editing',
            'aquarelleResp4': 'design/prepress of editorial concepts and layout',
            'aquarelleResp5': 'design/prepress of marketing materials for web, print, outdoor media and exhibition materials',
            'chekhov': 'Part-time graphic designer',
            'CHEKHOV': 'in National Theatre named after Chekhov',
            'chekhovResp1': 'design/prepress of posters and brochures',
            'chekhovResp2': 'corporate website’s content administration',
            'seradPlus': 'Junior graphic designer',
            'SERADPLUS': 'in SERAD advertising agency',
            'seradPlusResp1': 'design/prepress of magazine layout',
            'seradPlusResp2': 'design/prepress of marketing materials for web, print and outdoor media',
            'seradPlusResp3': 'photo-editing',
            'benefis': 'Marketing manager',
            'BENEFIS': 'in BENEFIS ballet atelier',
            'benefisResp1': 'customer order processing ',
            'benefisResp2': 'English/Russian translations',
            'benefisResp3': 'corporate website’s content administration',
            'previous':'<',
            'next': '>',
            'scrollToTop': 'to top',
            'resumeURL': 'Irina_Voscoboinic_CV_en.pdf'
        },
        'ru-RU': {
            'home': 'Главная',
            'about': 'Обо мне',
            'downloadCV': 'Скачать CV',
            'visitWebsite':'Онлайн',
            'toggleNav': 'Переключить навигацию',
            'myInfo': 'Привет! Я Ирина, дизайнер с многолетним опытом работы как для печатных, так и для цифровых медиа.',
            'showAll': 'Все работы',
            'webDesign': 'Веб',
            'printDesign': 'Принт',
            'photography': 'Фото',
            'web-design':'дизайн сайта',
            'function': 'Моя роль',
            'logo-design': 'разработка логотипа',
            'layout': 'верстка',
            'graphdesign': 'графический дизайн',
            'prepress': 'подготовка к печати',
            'art-direction': 'арт дирекшн',
            'retouch': 'фото ретушь',
            'illustration':'иллюстрации',
            'under-development': "в процессе разработки.",
            'no-longer-online': "более недоступны.",
            'perform': 'в качестве фриланс-дизайнера',
            'perform1': 'в качестве веб-дизайнера www.mnogoland.ru',
            'perform2': 'в качестве арт-директора AQUARELLE',
            'perform3': 'в качестве веб-дизайнера EKH Grafisk',
            'portfolio1': 'Веб-баннеры',
            'portfolio2': 'Радио-шоу, постер',
            'portfolio3': 'Журнал Aquarelle',
            'portfolio4': 'Портретная ретушь',
            'portfolio5': 'Приглашение',
            'portfolio6': 'Замена фона',
            'portfolio7': 'Корпоративный календарь',
            'portfolio8': 'Предметная фотография',
            'portfolio9': 'Настольный календарь',
            'portfolio10': 'Фото иллюстрация',
            'portfolio11': 'Рекламный постер',
            'portfolio12': 'Предметная ретушь',
            'portfolio13': 'Недвижимость, веб-сайт',
            'portfolio14': 'Услуги копирайтинга, веб-сайт ',
            'portfolio15': 'Услуги такси, промо-сайт',
            'portfolio16': 'Услуги юриста, промо-сайт',
            'portfolio17': 'Недвижимость, промо-сайт',
            'portfolio18': 'Shutterstock фото портфолио',
            'portfolio19': 'Стройматериалы, веб-сайт',
            'portfolio20': 'ОФД, промо-сайт',
            'portfolio21': 'Услуги клининга, промо-сайт',
            'portfolio22': 'Косметика, промо-сайт',
            'portfolio23': 'Цифровой маркетинг, лого',
            'portfolio24': 'Арт-терапия, лого',
            'portfolio25': 'Midthaug Strekkmetall, веб-сайт',
            'portfolio26': 'Molde Renseri, веб-сайт',
            'portfolio27': 'Rakvaag Glass, веб-сайт',
            'portfolio28': 'Axelstories, веб-сайт',
            'portfolio1Desc': 'Разработаны для рождественских распродаж в книжном онлайн-магазине.',
            'portfolio2Desc': 'Этот постер был разработан в процессе рекламной кампании утреннего музыкального шоу на радио AQUARELLE 90.7 FM. Идея шоу состояла в том, чтобы проснуться с энергичной музыкой и веселыми диджеями.',
            'bigudiTeaser': 'На фото я в роли модели :)',
            'portfolio3Desc': 'AQUARELLE - это ежемесячное глянцевое издание для женщин. Основные темы: здоровье, красота, мода и личная жизнь. За 5 лет работы в креативном отделе журнала я разработала дизайн около 1,5 тысяч страниц, 30 обложек и отретушировала бесчисленное множество фотографий. Это была многозадачная работа, которая включала в себя разработку визуальной концепции, руководство отделом дизайна, сотрудничество с фотографами и типографиями.',
            'portfolio4Desc': 'Для портретной ретуши я в основном использую технику частотного разложения в комбинации с dodge&burn, при необходимости. Фотографии были сделаны во время учебы в фотошколе.',
            'portfolio5Desc': 'Разработано для печати и отправки по почте в качестве приглашения на конкурс красоты. Выполнен в форме испанского веера, чтоб соответствовать тематике мероприятия.',
            'portfolio7Desc': 'Корпоративный календарь на 2015 год. В качестве моделей - сотрудницы журнала. Идея: женщины мира. Каждая страница календаря передает атмосферу, ассоциируемую со страной: Францией, США, Индией и т.д.. Фотосессия проводилась в студии, фон заменялся на стадии ретуширования.',
            'portfolio8Desc': 'Фото сделаны во время учебы на курсе фотографии.',
            'portfolio9Desc': 'Ежегодный корпоративный календарь для журнала Aquarelle разрабатывался как подарок подписчикам. Здесь представлены календари за 2014 год с дизайн концепцией «Девушки с обложки журнала», а также за 2015 год с идеей "Красота женщин из разных стран". Редакционный состав выступал в качестве моделей, в том числе и я :) ',
            'portfolio10Desc': 'Помимо ретуширования, работа с фото-иллюстрациями для журнала часто включает в себя такие манипуляции, как комбинация нескольких снимков в один, замена фона, добавление объектов и так далее. Мне особенно нравилась эта часть моей работы, и я участвовала во всех этапах: от набросков идей и планирования фотосессии до подготовки к печати.',
            'portfolio11Desc': 'Этот постер разработан в контексте рекламной кампании ко дню всех влюбленных, проводимой KIA MOTORS MOLDOVA для публикации в журнале AQUARELLE.',
            'portfolio12Desc': 'Фото были сделаны для ежегодного календаря магазина швейных принадлежностей. В связи с ограниченным бюджетом, фотосессия проходила в домашних условиях. Из-за отсутствия профессионального освещения потребовалось значительное количество ретуши.',
            'portfolio13Desc': 'Bizon Imobil - агентство недвижимости, расположенное на территории Молдовы. Целью проекта было создание понятного интерфейса для быстрого поиска и просмотра объектов недвижимости.',
            'portfolio13Desc1': '01. Главная страница демонстирует наиболее популярные объекты недвижимости.',
            'portfolio13Desc2': '02. Страница со списком объектов и форма детального поиска.',
            'portfolio13Desc3': '03. Страница с подробным описанием объекта.',
            'portfolio14Desc': 'Копирайтинговая компания с забавным названием Copymonster. Задача состояла в том, чтобы создать смешного запоминающегося персонажа, который расскажет о сервисе в креативной и неформальной атмосфере.',
            'portfolio14Desc2': 'Главная страница.',
            'portfolio14Desc3': 'Страница дополнительных услуг.',
            'portfolio15Desc1': 'Две промо-страницы для службы такси, действующей в городе Москва, Россия. Первая предоставляет форму для онлайн заказа такси, а также полезную информацию о компании, предоставляющей сервис. Вторая страница нацелена на желающих работать в качестве водителя такси.',
            'portfolio15Desc2': 'Выпадающая вкладка с прайс-листом.',
            'portfolio16Desc1': 'Промо страница услуги получения лицензии по обращению с отходами.',
            'portfolio17Desc1': 'Агентству элитной недвижимости в Тайланде требовалась промо страница для привлечения русскоговорящих туристов . В дизайне использовались большие качественные изображения экзотических пейзажей и атрибуты островной жизни. ',
            'portfolio18Desc': 'Фотография - одно из моих самых любимых занятий. Это мой способ сохранить и делиться с другими тем прекрасным, что меня окружает. Не так давно я присоединилась к сообществу авторов Shutterstock, где можно просмотреть и скачать мои работы.',
            'portfolio19Desc': 'Простой дизайн сайта для магазина стройматериалов в России.',
            'portfolio20Desc': 'Простой дизайн сайта для магазина стройматериалов в России.',
            'portfolio21Desc': 'Промо-страница для молодой креативной команды, предоставляющей различные услуги в сфере уборки. Помимо общей информации на странице есть калькулятор, расчитывающий стоимость услуг.',
            'portfolio22Desc': 'Органическая косметика для ухода за кожей и волосами. Ее изготовляют из специального вещества на основе горных алтайских трав. Элементы дизайна упаковки и соответственно страницы вдохновлен древними наскальными рисунками, найденными в этой области.',
            'portfolio23Desc': 'Этот логотип был разработан для цифровой маркетинговой компании, которая предоставляет различные услуги интернет продвижения, такие как создание видео и текстового контента, маркетинг в социальных сетях и т.д.',
            'portfolio24Desc': 'ArtGame - это центр креативной терапии, который оказывает психологическую помощь с помощью художественных занятий и игр.',
            'portfolio25Desc': 'В процессе ребрендинга местного производителя стали Midthaug был разработан отдельный веб-сайт для одного из их основных продуктов - strekkmetal. Сайт предлагает большое количество различного контента, включая каталог продукции, поэтому необходима четко интуитивно понятная структура. Веб-сайт выполнен в современном минималистичном стиле, но в то же время имеет смелую цветовую палитру, чтобы привлечь внимание творческих архитекторов, которые являются основной целевой группой продукта.',
            'portfolio26Desc': 'У этого клиента есть местная клининговая компания, и ему требовалось простое решение для отображения списка услуг, популярных вопросов и ответов и контактной информации. Мы разработали одностраничный веб-сайт, по которому легко ориентироваться и который плавно направляет пользователей к необходимой информации.',
            'portfolio27Desc': 'A delicate and content rich website for glass manufacturers.',
            'portfolio28Desc': 'На этой красочной и веселой веб-странице представлена серия книг для детей с фантастическими иллюстрациями, отражающими пркрасные местные пейзажи. Основная задача заключалась в разработке платформы, поддерживающей 13 языков и предоставляюзей возможность загрузки приложения для чтения. Приложение было разработано в 2 версиях - для телефона и планшета, с фокусом на качественный пользовательсвкого опыта.',
            'actualAddress': 'Молдова, г. Кишинёв',
            'irinaVoscoboinic': 'Ирина Воскобойник',
            'graphicDesigner': 'Цифровой дизайнер',
            'education': 'Изучила',
            'fotoMax': 'Школа фотографии FotoMax',
            'beginner': 'Основы фотосъемки',
            'usm': 'Государственный Университет Молдовы',
            'compScience': 'Информационные технологии',
            'lyceum': 'Теоретический лицей',
            'bachelor': 'Гуманитарные науки',
            'software': 'Software',
            'languages': 'Говорю',
            'russian': 'Русский',
            'english': 'Английский',
            'romanian': 'Румынский',
            'norwegian': 'Норвежский',
            'native': 'родной',
            'professional': 'выше среднего(B2)',
            'limited': 'средний(B1)',
            'interests': 'Люблю',
            'interest1': 'Хайкинг',
            'interest2': 'Фотография',
            'interest3': 'Научная фантастика',
            'skills': 'Могу',
            'web': 'Веб',
            'webSkills1': 'адаптивный веб-дизайн с использованием модульной сетки',
            'webSkills2': 'базовые знания HTML5, CSS3, Bootstrap',
            'webSkills3': 'основы UX',
            'print': 'Фото',
            'printSkills1': 'дизайн печатной и наружной рекламы',
            'photo': 'Фото',
            'photoSkills1': 'фото-ретушь',
            'photoSkills2': 'основы студийного освещения и фотосъемки',
            'workExpirience': 'Опыт работы',
            'WebdesignerEKH':'Веб/графический дизайнер',
            'EKH':'EKH Grafisk',
            'WebdesignerEKHResp1':'Создание прототипов и дизайн сайтов',
            'WebdesignerEKHResp2':'Дизайн рекламных материалов для веб и соцсетей',
            'WebdesignerEKHResp3':'Дизайн лого/айдентики',
            'WebdesignerEKHResp4':'Дизайн различных печатных материалов (брошюры, журналы, годовые отчеты и т.д.)',
            'freelanceWeb': 'Фриланс веб-дизайнер',
            'freelanceWebResp1': 'дизайн вебсайтов и лендингов',
            'artDirectorAquarelle': 'Арт-директор',
            'AQUARELLE': 'журнал AQUARELLE',
            'aquarelleResp1': 'контроль и организация работы дизайн-отдела',
            'aquarelleResp2': 'ответственность за основную дизайн-концепцию и визуальное исполнение',
            'aquarelleResp3': 'организация фотосессий, фото-ретушь',
            'aquarelleResp4': 'дизайн/препресс журнальных макетов и маркетинговых материалов для web, печатной и наружной рекламы',
            'aquarelleResp5': 'дизайн/препресс выставочных рекламных материалов',
            'chekhov': 'Внештатный графический дизайнер',
            'CHEKHOV': 'Драмматический Театр им.Чехова',
            'chekhovResp1': 'дизайн/препресс афиш и брошюр',
            'chekhovResp2': 'управление контентом вебсайта компании',
            'seradPlus': 'Младший графический дизайнер',
            'SERADPLUS': 'рекламное агентство Serad',
            'seradPlusResp1': 'дизайн/препресс журнальных макетов',
            'seradPlusResp2': 'фото-ретушь',
            'seradPlusResp3': 'дизайн/препресс маркетинговых материалов для web, печатной и наружной рекламы',
            'benefis': 'Маркетинг-менеджер',
            'BENEFIS': 'швейное ателье Benefis',
            'benefisResp1': 'прием/обработка заказов',
            'benefisResp2': 'перевод корреспонденции с англ. на рус. языки',
            'benefisResp3': 'управление контентом вебсайта компании',
            'previous': 'Предыдущий',
            'next': 'Следующий',
            'scrollToTop': 'наверх',
            'resumeURL': 'Irina_Voscoboinic_CV_ru.pdf'
    },
    'no-NO': {
        'home': 'Hjem',
        'about': 'Om meg',
        'downloadCV': 'Laste ned CV',
        'visitWebsite':'På nett',
        'toggleNav': 'Bytt navigasjon',
        'myInfo': 'Hei! Jeg heter Irina og har lang erfaring innenfor design - både for trykte og digitale medier.',
        'showAll': 'Alle prosjekter',
        'webDesign': 'Digitalt',
        'printDesign': 'Trykk',
        'photography': 'Foto',
        'web-design':'nettsidedesign',
        'function': 'Min rolle',
        'logo-design': 'logo design',
        'layout': 'layout design',
        'graphdesign': 'grafisk design',
        'prepress': 'produksjon',
        'retouch': 'retusjering av bilder',
        'illustration':'illustrasjoner',
        'art-direction': 'art-direction',
        'editing':'retusjering av bilder',
        'perform': 'som frilans designer',
        'perform1': 'som digital designer hos www.mnogoland.ru',
        'perform2': 'som art-direktør hos AQUARELLE',
        'perform3': 'som web designer hos EKH Grafisk',
        'under-development': "under utvikling.",
        'no-longer-online': "ikke tilgjengelig lenger.",
        'portfolio1': 'Web bannere',
        'portfolio2': 'Radio program, plakat',
        'portfolio3': 'Magasin',
        'portfolio4': 'portrett retusjering',
        'portfolio5': 'Invitasjonskort',
        'portfolio6': 'Bakgrunnsbytte',
        'portfolio7': 'Desk calendar',
        'portfolio8': 'Product photography',
        'portfolio9': 'Skrivebordskalender',
        'portfolio10': 'Foto illustrasjon',
        'portfolio11': 'Valentinsdag, plakat',
        'portfolio13': 'Eiendomsmegler, landingsside',
        'portfolio14': 'Copywriting tjenester, nettside',
        'portfolio15': 'Drosjetjenester, landingsside',
        'portfolio16': 'Juridiske tjenester, landingsside',
        'portfolio17': 'Eiendomsmegler, nettside',
        'portfolio18': 'Min Shutterstock foto portefølje',
        'portfolio19': 'Byggematerialer, nettside',
        'portfolio20': 'Fiscal dataoperatør, landingsside',
        'portfolio21': 'Vaskehjelp, landingsside',
        'portfolio22': 'Kosmetikk, landingsside',
        'portfolio23': 'Digital markedsføring, logo',
        'portfolio24': 'Kunstterapi senter, logo',
        'portfolio25': 'Midthaug Strekkmetall, nettside',
        'portfolio26': 'Molde Renseri, nettside',
        'portfolio27': 'Rakvaag Glass, nettside',
        'portfolio28': 'Axelstories, nettside',
        'portfolio1Desc': 'Designet for julesalg i en nettbokhandel.',
        'portfolio2Desc': 'Denne plakaten ble utviklet for reklamekampanjen på morgenmusikkprogrammet på radioen AQUARELLE 90.7 FM. Ideen er å våkne opp med energisk musikk og morsomme programledere.',
        'portfolio3Desc': 'AQUARELLE er et månedlig trykt glanset magasin for kvinner. Det handler om helse, skjønnhet, mote og personlig liv. I løpet av de 5 årene jeg jobbet på magasinets kreative avdeling, designet jeg rundt 1,5 tusen sider, 30 forsider og retusjerte utallige bilder. Det var en jobb med mye multitasking, som besto av visuell konseptutvikling, ledelse av designavdelingen, samarbeid med fotografer og trykkerier.',
        'portfolio4Desc': 'Til retusjering av et portrett bruker jeg hovedsakelig «frequency separation» blandet nødvendigvis med «dodge & burn». Bilder ble tatt i studietiden på fotografskole.',
        'portfolio5Desc': 'Dette kortet er designet for utskrift og utsending i post som en invitasjon til en skjønnhetskonkurranse. Kortet er formet som en Spansk håndvifte for å matche temaet til arrangementet.',
        'portfolio7Desc': 'Corporate calendar 2015. The company\'s employees as models. Idea: women of the world. Each month respresents its own country. Photo shooting took place in studio. Background added later on retouching.',
        'portfolio8Desc': 'I took these pictures while being a student of a photography school.',
        'portfolio9Desc': 'Den årlige bedriftskalenderen for Aquarelle Magasin ble designet som en gave til abonnenter. Her er kalendere fra 2014 med designkonseptet "Cover Girls" og fra 2015 med ideen "Female beauty around the world." Magasinets ansatte fungerte som modeller, inkludert meg :)',
        'portfolio10Desc': 'Jobben med fotoillustrasjoner for et magasin krever ofte i tillegg til retusjering; manipulering som å kombinere flere bilder til ett, erstatte bakgrunn, legge til objekter, osv. Jeg elsket spesielt denne delen av jobben min og deltok i alle faser, fra å skissere_ideer, planlegge en fotografering, og til trykk.',
        'portfolio11Desc': 'Denne plakaten ble designet i sammenheng med en Valentinsdagkampanje, utført av KIA MOTORS MOLDOVA og ble publisert i AQUARELLE magasin.',
        'portfolio13Desc': '«Bizon Imobil» er et eiendomsfirma lokalisert i Moldova. Oppgaven var å skape et tydelig grensesnitt for raskt eiendomssøk og visning.',
        'portfolio13Desc1': '01. Hjemmeside viser toppobjekter.',
        'portfolio13Desc2': '02. Listeside og avansert søkeskjema.',
        'portfolio13Desc3': '03. Side med detaljert objektbeskrivelse.',
        'portfolio14Desc': 'Copywriting byrå med et morsomt navn. Oppgaven var å skape en fengende karakter som lett kan forklare tjenestene som tilbys med en følelse av en kreativ og uformell atmosfære.',
        'portfolio14Desc2': 'Hjemmeside.',
        'portfolio14Desc3': 'Tilleggstjenester side.',
        'portfolio15Desc1': 'To landingssider for en drosjetjeneste, tilgjengelig i Moskva, Russland. Den første siden har online taxi bestillingsskjema og bedriftsinformasjon. Den andre siden er for sjåfører som trenger jobb.',
        'portfolio15Desc2': 'Price-list.',
        'portfolio16Desc1': 'Landingsside med informasjon om et selskap som tilbyr juridisk bistand med avfallshåndteringslisens.',
        'portfolio17Desc1': 'Eliten eiendomsmegler i Thailand trengte en salgsfremmende side for å tiltrekke seg russiskspråklige turister. I designet brukte jeg store kvalitetsbilder av eksotiske landskap og attributter av øylivet.',
        'portfolio18Desc': 'Fotografering er en av favoritthobbyer. Dette er min måte å lagre og dele med andre de vakre tingene som omgir meg. Nylig ble jeg med i samfunnet av Shutterstock bidragsytere, hvor du kan se og laste ned bildene mine.',
        'portfolio19Desc': 'Enkel nettside design for en byggematerialeforhandler lokalisert i Russland.',
        'portfolio20Desc': 'En enkel og tydelig landingsside som annonserer en finansiell dataoperatørtjeneste i sammenheng med de siste skattelovgivningsendringene i Russland.',
        'portfolio21Desc': 'En landingsside for et firma som tilbyr ulike tjenester innen rengjøring. I tillegg til generell informasjon er det en kalkulator på siden som beregner kostnadene for tjenestene.',
        'portfolio22Desc': 'Økologisk kosmetikk for hud og hårpleie. Produktene er laget av en spesiell substans basert på Altai fjell urter. Emballasjens designelementer og nettsiden er inspirert av gamle steinmalerier som finnes i dette området.',
        'portfolio23Desc': 'Denne logoen ble designet for et digitalt markedsføringsfirma som tilbyr ulike nettjenester, for eksempel video- og tekstinnholdsopprettelse, markedsføring av sosiale medier, etc.',
        'portfolio24Desc': 'ArtGame er et kreativt terapisenter som gir psykologisk hjelp gjennom kunstklasser og spill.',
        'portfolio25Desc': 'Under rebranding-prosessen for en lokal produsent Midthaug ble det designet et eget nettsted for et av hovedproduktene deres - strekkmetal. Nettstedet tilbyr en stor mengde forskjellig innhold, inkludert produktkatalog, og trengte derfor en tydelig intuitiv struktur. Nettstedet er designet med et moderne, minimalistisk utseende, men har samtidig en dristig fargepalett for å tiltrekke seg oppmerksomheten til kreative arkitekter, som er hovedmålgruppen for produktet.',
        'portfolio26Desc': 'Denne kunden driver en lokal rengjøringsvirksomhet og trengte en enkel løsning for å vise listen over tjenester, populært spørsmål og kontaktinformasjon. Vi har designet en enkeltsides webside som er enkel å navigere og som lett leder brukerne mot nødvendig informasjon.',
        'portfolio27Desc': 'Et delikat og innholdsrikt nettsted for glassprodusenter.',
        'portfolio28Desc': 'Denne fargerike og morsomme nettsiden markedsfører til en serie barnebøker med fantastiske illustrasjoner som gjenspeiler det vakre lokale landskapet. Hovedoppgaven var å utvikle en plattform som støtter 13 språk og gir muligheten til å laste ned en APP for lesing. APPen ble designet i to versjoner - for telefon og nettbrett, med fokus på kvalitet brukeropplevelse.',
        'address': 'Address:',
        'email': 'E-mail:',
        'phone': 'Phone:',
        'actualAddress': 'Chisinau, Moldova',
        'irinaVoscoboinic': 'Irina Voscoboinic',
        'graphicDesigner': 'Digital designer',
        'education': 'Studerte',
        'fotoMax': 'FotoMax Fotograferingskole',
        'beginner': 'Foto grunnleggende',
        'usm': 'Moldova State University',
        'compScience': 'Datavitenskap',
        'lyceum': 'Teoretisk Lyceum',
        'bachelor': 'Liberale studier',
        'software': 'Bruker',
        'languages': 'Snakker',
        'russian': 'russisk',
        'english': 'engelsk',
        'romanian': 'rumensk',
        'norwegian': 'norsk',
        'native': 'morsmål',
        'professional': 'selvstendig nivå(B2)',
        'limited': 'selvstendig nivå(B1)',
        'interests': 'Elsker',
        'interest1': 'å gå topptur',
        'interest2': 'alt om fotografi',
        'interest3': 'å lese science fiction',
        'skills': 'Kan',
        'web': 'Digitalt',
        'webSkills1': 'responsivt webdesign med modulært rutenett ',
        'webSkills2': 'grunnleggende HTML5, CSS3, Bootstrap',
        'webSkills3': 'UX grunnleggende',
        'print': 'Grafisk',
        'printSkills1': 'commercial outdoor advertising design',
        'photo': 'Foto',
        'photoSkills1': 'retusjering av bilder',
        'photoSkills2': 'grunnleggende lyssetting i studio',
        'workExpirience': 'Arbeidserfaring',
        'WebdesignerEKH':'Web/grafisk designer',
        'EKH':'EKH Grafisk',
        'WebdesignerEKHResp1':'Prototyping og design av nettsider',
        'WebdesignerEKHResp2':'Design av markedsmateriell til nett og SoMe',
        'WebdesignerEKHResp3':'Design av logo og profil',
        'WebdesignerEKHResp4':'Design of diverse trykksaker (brosjyrer, kataloger, årsrapport, kundemagasin osv)',
        'freelanceWeb': 'Frilans digital designer',
        'freelanceWebResp1': 'design av nettsider og landingsider',
        'artDirectorAquarelle': 'Art-direktør',
        'AQUARELLE':'i AQUARELLE magasin',
        'aquarelleResp1': 'ledelse av designavdelingen',
        'aquarelleResp2': 'hovedansvar for idé og visuell utforming',
        'aquarelleResp3': 'organisering av fotoshoot og retusjering av bilder',
        'aquarelleResp4': 'design/produksjon av konsepter og layout',
        'aquarelleResp5': 'design/produksjon av markedsmateriale for web, trykk, utendørs media og messemateriell',
        'chekhov': 'Deltid grafisk designer',
        'CHEKHOV': 'i Chekhov Nasjonal Teater',
        'chekhovResp1': 'design/produksjon av plakater og brosjyrer',
        'chekhovResp2': 'administrering av innhold på bedriftens nettside',
        'seradPlus': 'Junior grafisk designer',
        'SERADPLUS': 'i SERAD reklamebyrå',
        'seradPlusResp1': 'design/produksjon av layout for magasin',
        'seradPlusResp2': 'design/produksjon av markedsmateriale for web, trykk og  utendørs media',
        'seradPlusResp3': 'retusjering av bilder',
        'benefis': 'Markedsføringsassistent',
        'BENEFIS': 'i Benefis atelier',
        'benefisResp1': 'behandling av kundeordrer',
        'benefisResp2': 'oversettelse engelsk/russisk ',
        'benefisResp3': 'administrering av innhold på bedriftens nettside',
        'previous':'<',
        'next': '>',
        'scrollToTop': 'til topp',
        'resumeURL': 'Irina_Voscoboinic_CV_no.pdf'
    }
    };

    var $projectInfoContainer, $projectInfoButtons, $portfolioListContainer, $progressBar, $navBarMenuItems, $allProjects, $downloadResume, $hireMeContainer;
    var projectsMap = null;

    function saveToLocalStorage(key, value) {
        if (key && ('localStorage' in window) && window['localStorage'] !== null) {
            window.localStorage.setItem(key, value);
        }
    };

    function getFromLocalStorage(key) {
        return ('localStorage' in window) && window['localStorage'] !== null ? window.localStorage.getItem(key) : null;
    };

    function localize(language, $container) {
        if (typeof ($container) === 'undefined') {
            $container = $(document);
        }

        var labels = i18n[language];
        if (typeof (labels) !== 'undefined') {
            $container.find('[data-i18n-key]').each(function () {
                var $label = $(this);
                var i18Key = $label.data('i18n-key');
                if (i18Key && typeof (labels[i18Key]) !== 'undefined') {
                    $label.text(labels[i18Key]);
                }
            });
        }

        // Change resume link
        $downloadResume.attr('href', 'docs/' + labels['resumeURL']);
    }

    function onLanguageChanged(newLanguage) {
        saveToLocalStorage('lang', newLanguage);
        $('.change-language').each(function () {
            var $this = $(this);
            $this.toggleClass('active', $this.data('lang') === newLanguage);
        });
    }

    function showProjectInfo(project) {
        $progressBar.show();
        $.ajax({
                method: 'GET',
                url: project,
                cache: false,
                dataType: 'html'
            })
            .done(function(projectHtml) {
                var $projectFragment = $(projectHtml);

                var selectedLanguage = getFromLocalStorage('lang');
                localize(selectedLanguage, $projectFragment);

                $projectFragment.find('.twentytwenty-container').each(function() {
                    var $this = $(this);
                    $this.find('img:first').one('load', function() { $this.twentytwenty(); });
                });

                var $newProjectContainer = $('<div class="container-fluid project-container"></div>');
                var $prevProjectContainer = $projectInfoContainer.find('.project-container');

                $newProjectContainer.append($projectFragment);
                $projectInfoContainer.append($newProjectContainer);
                $prevProjectContainer.remove();

                $portfolioListContainer.hide();
                $hireMeContainer.hide();
                $projectInfoButtons.show();
                $projectInfoContainer.show('drop', 700, function() {
                    $projectFragment.find('.fancybox').fancybox();
                });

                updateHistoryState(project);

                var category = getProjectCategory(project);
                setActiveCategory(category);
            })
            .fail(function() {
                $projectInfoContainer.empty();
                $projectInfoContainer.append('<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Error:</span>Project not found</div>');
            })
            .always(function() {
                $progressBar.hide();
            });
    }

    function showProjectList(category) {
        category = category || 'all';
        if ($portfolioListContainer.is(':hidden')) {
            $projectInfoContainer.hide().empty();
            $projectInfoButtons.hide();
            $hireMeContainer.show();
            $portfolioListContainer.show('drop', 700);
        }

        var $areasToHide = $(), $areasToShow = $();
        if (category === 'all') {
            $areasToShow = $allProjects;
        } else {
            $allProjects.each(function() {
                var $this = $(this);
                if ($this.data('category') !== category) {
                    $areasToHide = $areasToHide.add($this);
                } else {
                    $areasToShow = $areasToShow.add($this);
                }
            });
        }

        if ($areasToHide.length > 0) {
            $areasToHide.hide();
            $areasToShow.show('drop', 700);
        } else {
            $areasToShow.show('drop', 700);
        }

        updateHistoryState();
    }

    function setActiveCategory(category) {
        $navBarMenuItems.each(function () {
            var $this = $(this);
            if ($this.data('category') === category) {
                $this.addClass('active');
            } else {
                $this.removeClass('active');
            }
        });
    }

    function updateHistoryState(currentProject) {
        if (window.history && typeof (window.history.pushState) !== 'undefined') {
            var urlParts = location.href.split('#');
            var newUrl = urlParts[0];

            if (currentProject) {
                newUrl = newUrl + '#' + currentProject;
            }

            if (newUrl !== location.href) {
                window.history.pushState(currentProject, '', newUrl);
            }
        }
    };

    function onHistoryPopState(evt) {
        var project = evt.originalEvent.state;
        var category;
        if (project) {
            category = getProjectCategory(project);
            setActiveCategory(category);

            showProjectInfo(project);
        } else {
            category = getActiveCategory();
            showProjectList(category);
        }
    }

    function getProjectCategory(project) {
        var $project = (project instanceof $ ? project : $('a[href="' + project + '"]'));
        return $project.closest('.eyeris-project').data('category');
    }
    function getActiveCategory() {
        return $navBarMenuItems.filter('.active').data('category');
    }

    $(function () {
        $('body').materialScrollTop();

        $portfolioListContainer = $('.portfolio-list');
        $projectInfoContainer = $('.project-info');
        $projectInfoButtons = $('.project-info-buttons');
        $progressBar = $('progress');
        $navBarMenuItems = $('.nav.portfolio li');
        $allProjects = $('.eyeris-project');
        $downloadResume = $('a.download-cv');
        $hireMeContainer = $('.hireme-info-container');

        // Setup localization
        var selectedLanguage = getFromLocalStorage('lang') || 'en-GB';
        if (selectedLanguage) {
            localize(selectedLanguage);
            onLanguageChanged(selectedLanguage);
        }

        $('.change-language').click(function (evt) {
            evt.preventDefault();

            var selectedLanguage = $(this).data('lang') || 'en-GB';
            localize(selectedLanguage);
            onLanguageChanged(selectedLanguage);
        });

        $allProjects.click(function(evt) {
            evt.preventDefault();

            var $this = $(this);
            var project = $this.find('.project-link').attr('href');

            if (project) {
                showProjectInfo(project);
            }
        });

        projectsMap = { 'all': [] };
        $allProjects.find('a.project-link').each(function() {
            var $project = $(this);
            var projectCategory = getProjectCategory($project);
            var projectUrl = $project.attr('href');

            // Add to all categories
            projectsMap['all'].push(projectUrl);
            // Add top specific category
            if (projectCategory) {
                if (typeof projectsMap[projectCategory] === 'undefined'){
                    projectsMap[projectCategory] = [];
                }

                projectsMap[projectCategory].push(projectUrl);
            }
        });

        $navBarMenuItems.click(function (evt) {
            evt.preventDefault();

            var category = $(this).data('category');
            setActiveCategory(category);

            showProjectList(category);
        });

        var project = location.href.split('#')[1];
        if (project) {
            showProjectInfo(project);
        }

        $projectInfoButtons.find('button').click(function (evt) {
            evt.preventDefault();

            var $targetButton = $(this);
            var currentProject = location.href.split('#')[1];
            var currentCategory = getActiveCategory();
            var allCurrentCategoryProjects = projectsMap[currentCategory];

            var allProjectsCount = allCurrentCategoryProjects.length;
            for (var projectPosition = 0; projectPosition < allProjectsCount; projectPosition++) {
                if (allCurrentCategoryProjects[projectPosition].toLowerCase() === currentProject.toLowerCase()) {
                    var targetProject;

                    if ($targetButton.hasClass('previous')) {
                        targetProject = allCurrentCategoryProjects[(projectPosition > 0 ? projectPosition : allProjectsCount) - 1];
                    } else if ($targetButton.hasClass('next')) {
                        targetProject = allCurrentCategoryProjects[(projectPosition + 1 < allProjectsCount ? projectPosition + 1 : 0)];
                    } else {
                        console.error('Uknown project info button');
                    }

                    if (targetProject) {
                        showProjectInfo(targetProject);
                    }

                    break;
                }
            }
        });

        $('.scroll-to-top').click(function (evt) {
            evt.preventDefault();

            $('html, body').animate({ scrollTop: 0 }, 'fast');
        });

        window.history.replaceState(project, '', null);

        // Subscribe to popstate event
        $(window).on('popstate', onHistoryPopState);

        // Finally, show the content
        $('.page-content').show('fade', 800);
    });
})(jQuery);
