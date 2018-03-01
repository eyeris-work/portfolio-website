(function ($) {
    'use strict';

    var i18n = {
        'en-GB': {
            'home': 'Home',
            'about': 'About me',
            'downloadCV': 'Download resume',
            'visitWebsite':'Visit online',
            'toggleNav': 'Toggle navigation',
            'myInfo': 'My name is Irine, and this is my online portfolio.',
            'showAll': 'Show all',
            'webDesign': 'Web',
            'printDesign': 'Print',
            'photography': 'Photo retouch',
            'web-design':'Website design',
            'function': 'Involved',
            'logo-design': 'Logo design',
            'illustration': 'Illustration',
            'layout': 'Layout design',
            'graphdesign': 'Graphic design',
            'prepress': 'Prepress',
            'art-direction': 'Art-direction',
            'perform': '(as freelance-designer)',
            'perform1': '(as web designer at MNOGOLAND)',
            'perform2': '(as art-director at AQUARELLE)',
            'under-development': "Under development.",
            'no-longer-online': "No longer online.",
            'portfolio1': 'Web banners',
            'portfolio2': 'Advertising poster',
            'portfolio3': 'Aquarelle magazine',
            'portfolio4': 'Photo manipulation',
            'portfolio5': 'Invitation card',
            'portfolio6': 'Background replacement',
            'portfolio7': 'Calendar 2015',
            'portfolio8': 'Product photography',
            'portfolio9': 'Desk calendar',
            'portfolio10': 'Portrait retouch',
            'portfolio11': 'Advertising poster',
            'portfolio12': 'Product retouching',
            'portfolio13': 'Bizon Imobil, website',
            'portfolio14': 'CopyMonster, website',
            'portfolio15': 'FLOW TAXI, landing pages',
            'portfolio16': 'Olimp, landing page',
            'portfolio17': 'Phuket Buy House, landing page',
            'portfolio1Desc': 'Designed for VDM Publishing Group, Christmas sale 2014.',
            'portfolio2Desc': 'Designed for AQUARELLE 90.7 FM radio station and it\'s morning "Bigudi Show". The idea of the show is to wake up with joyful music and  DJs.',
            'bigudiTeaser': 'This is a backstage picture of me, in role of shooting test model :)',
            'portfolio3Desc': 'Full-color glossy monthly printed magazine for women. It is about health, beauty, fashion and personal life. During the 5 years working at the magazine’s creative department I designed about 1.5 thousand pages, 30 covers and retouched countless amount of photos. It was a multitasking job that involved visual concept development, designers\' team and deadline management, dealing with photographers and printing houses.',
            'portfolio5Desc': 'This card was designed to be printed and sent as an invitation to a beauty contest. It is fan shaped due to the Spanish theme of the event.',
            'portfolio7Desc': 'Corporate calendar 2015. The company\'s employees as models. Idea: women of the world. Each month respresents its own country. Photo shooting took place in studio. Background added later on retouching.',
            'portfolio8Desc': 'I took these pictures while being a student of a photography school.',
            'portfolio9Desc': 'The annual corporate calendar for Aquarelle magazine designed as a gift for magazine subscribers. The editorial staff posed as models. Each year we developed a new design concept. Here is presented the calendar of the year 2014 with the idea of “Magazine Cover Girls”. For the year 2015 we intended to show female beauty of different countries.',
            'portfolio11Desc': 'Designed for Valentine\'s Day. The advertising campaign also included a special photo project published in Aquarelle Magazine.',
            'portfolio12Desc': 'Pictures were taken for a clothing store annual calendar. Due to the limited budget, the photo shooting took place in domestic conditions. Lighting imperfections required many hours of photo retouching.',
            'portfolio13Desc': 'Bizon Imobil is a real estate company based in Moldova. The task was to create a clear interface for quick property search and display.',
            'portfolio13Desc1': '01. Homepage shows top rental objects.',
            'portfolio13Desc2': '02. List page and advanced search form.',
            'portfolio13Desc3': '03. Detailed object description page.',
            'portfolio14Desc': 'Copywriting agency with a funny name Copymonster. The task was to create a funny catchy character who can easily explain the services provided with a sense of creative and informal atmosphere.',
            'portfolio14Desc2': 'Homepage.',
            'portfolio14Desc3': 'Additional services page.',
            'portfolio15Desc1': 'Two landing pages a taxi service, available in Moscow, Russia. The first page has online taxi order form and company information. The second page is aimed at drivers willing to get a taxi job.',
            'portfolio15Desc2': 'Price-list as a dropdown menu.',
            'portfolio16Desc1': 'Olimp is a licensing support center. I designed the page which is promoting their waste management authorization support.',
            'portfolio17Desc1': 'The is elite real estate company, based in Phuket, Thailand. The attractive page design was created with the purpose to get more russian-speaking clients.',
            'address': 'Address:',
            'email': 'E-mail:',
            'phone': 'Phone:',
            'actualAddress': 'Chisinau, Moldova',
            'irinaVoscoboinic': 'Irina Voscoboinic',
            'graphicDesigner': 'Graphic&web designer',
            'education': 'Education',
            'fotoMax': 'FotoMax Photography School',
            'beginner': 'Beginner Level',
            'usm': 'Moldova State University',
            'compScience': 'Computer Science and Modern Languages',
            'lyceum': 'Theoretical lyceum',
            'bachelor': 'Bachelor’s Degree, Liberal Studies',
            'software': 'Software',
            'languages': 'Languages',
            'russian': 'Russian',
            'english': 'English',
            'romanian': 'Romanian',
            'ukrainian': 'Ukrainian',
            'native': 'native speaker',
            'professional': 'fluent',
            'limited': 'conversant',
            'interests': 'Interests',
            'interest1': 'Watercolor painting',
            'interest2': 'Latin american dances',
            'interest3': 'Science fiction',
            'skills': 'Skills and knowledge',
            'web': 'WEB',
            'webSkills1': 'Grid-based responsive web design',
            'webSkills2': 'HTML5, CSS3, Bootstrap, jQuery basics',
            'webSkills3': 'Landing pages',
            'print': 'PRINT',
            'printSkills1': 'Commercial outdoor advertising design',
            'printSkills2': 'Magazine art-direction and print production',
            'photo': 'PHOTO',
            'photoSkills1': 'High-end photo editing and retouching',
            'photoSkills2': 'Studio lightening and shooting basics',
            'workExpirience': 'Work experience',
            'artDirectorAquarelle': 'Art Director, Aquarelle Magazine',
            'responsibilities': 'Responsibilities:',
            'aquarelleResp1': 'Creative department coordination',
            'aquarelleResp2': 'Magazine layout and cover concept design',
            'aquarelleResp3': 'Website and social media advertising design',
            'aquarelleResp4': 'Photo art-direction and photo retouching',
            'aquarelleResp5': 'Print production and print management',
            'aquarelleResp6': 'Deadline-driven time management',
            'chekhov': 'Freelance Graphic Designer, National Theatre named after Chekhov',
            'chekhovResp1': 'Poster and brochure design',
            'chekhovResp2': 'Website content administration',
            'seradPlus': 'Junior Graphic Designer, “Serad Plus” Advertising agency & Sanatate Magazine',
            'seradPlusResp1': 'Magazine layout design',
            'seradPlusResp2': 'Photo-retouching',
            'seradPlusResp3': 'Logo and identity design',
            'seradPlusResp4': 'Outdoor advertising design',
            'benefis': 'Marketing Manager, "Benefis" Ballet costume company',
            'benefisResp1': 'Russian to English correspondence translation',
            'benefisResp2': 'Website content administration',
            'benefisResp3': 'Product photo editing for web and print',
            'previous':'<',
            'next': '>',
            'scrollToTop': 'to top',
            'resumeURL': 'Irina_Gorobcenco_eng.pdf'
        },
        'ru-RU': {
            'home': 'Главная',
            'about': 'Обо мне',
            'downloadCV': 'Скачать резюме',
            'visitWebsite':'Посетить онлайн',
            'toggleNav': 'Переключить навигацию',
            'myInfo': 'Привет! Меня зовут Ира, я граф&веб дизайнер, а это мое онлайн-портфолио.',
            'showAll': 'Показать все',
            'webDesign': 'Веб',
            'printDesign': 'Принт',
            'photography': 'Фото-ретушь',
            'web-design':'Дизайн сайта',
            'function': 'Разработано',
            'logo-design': 'Дизайн логотипа',
            'illustration': 'Иллюстрация',
            'layout': 'Верстка',
            'graphdesign': 'Графический дизайн',
            'prepress': 'Подготовка к печати',
            'art-direction': 'Арт-дирекшн',
            'under-development': "В процессе разработки.",
            'no-longer-online': "Более недоступны онлайн.",
            'perform': '(в качестве фриланс-дизайнера)',
            'perform1': '(в качестве веб-дизайнера MNOGOLAND)',
            'perform2': '(в качестве арт-директора AQUARELLE)',
            'portfolio1': 'Веб-баннеры',
            'portfolio2': 'Рекламный плакат',
            'portfolio3': 'Журнал Aquarelle',
            'portfolio4': 'Фото коллаж',
            'portfolio5': 'Приглашение',
            'portfolio6': 'Замена фона',
            'portfolio7': 'Календарь 2015',
            'portfolio8': 'Предметная фотография',
            'portfolio9': 'Настольный календарь',
            'portfolio10': 'Портретная ретушь',
            'portfolio11': 'Рекламный плакат',
            'portfolio12': 'Предметная ретушь',
            'portfolio13': 'Bizon Imobil, веб-сайт',
            'portfolio14': 'CopyMonster, веб-сайт ',
            'portfolio15': 'FLOW TAXI, промо-сайт',
            'portfolio16': 'Olimp, промо-сайт',
            'portfolio17': 'Phuket Buy House, промо-сайт',
            'portfolio1Desc': 'Разработаны для VDM Publishing Group к Рождественской распродаже 2014 года.',
            'portfolio2Desc': 'Разработан для радиостанции AQUARELLE 90.7 FM, утренней передачи "Bigudi Show". Задорные диджеи и заводная музыка утреннего шоу помогают слушателям проснуться ранним утром.',
            'bigudiTeaser': 'На фото я в роли модели :)',
            'portfolio3Desc': 'Полноцветное глянцевое ежемесячное печатное издание для женщин. Основные темы: здоровье, красота, мода и личная жизнь. За пять лет работы в художественном отделе журнала я занималась диайном более полутора тысяч страниц, 30 обложек, обработала огромное количество фото. Мои обязанности включали разработку визуальной концепции, управление командой дизайнеров и соблюдение дедлайнов, сотрудничество с фоторгафами и типографиями.',
            'portfolio5Desc': 'Разработано для печати и отправки по почте в качестве приглашения на конкурс красоты. Выполнен в форме испанского веера, чтоб соответствовать тематике мероприятия.',
            'portfolio7Desc': 'Корпоративный календарь на 2015 год. В качестве моделей - сотрудницы журнала. Идея: женщины мира. Каждая страница календаря передает атмосферу, ассоциируемую со страной: Францией, США, Индией и т.д.. Фотосессия проводилась в студии, фон заменялся на стадии ретуширования.',
            'portfolio8Desc': 'Фото сделаны во время учебы на курсе фотографии.',
            'portfolio9Desc': 'Ежегодный корпоративный календарь для журнала Aquarelle разрабатывался как подарок подписчикам. Редакционный состав выступал в качестве моделей. Дизайн-концепция каждый год выбирались новая. Здесь представлен календарь за 2014 год с идеей «Девушки с обложки журнала». В календаре за 2015 год мы продемонстрировали женскую красоту разных стран.',
            'portfolio11Desc': 'Разработан ко дню Св.Валентина. В ходе рекламной кампании в журнале Aquarelle был также опубликован специальный фотопроект.',
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
            'portfolio16Desc1': 'Для центра поддержки лицензирования Olimp я занималась разработкой дизайна страницы, рекламирующей услугу получения лицензии по обращению с отходами.',
            'portfolio17Desc1': 'Компания занимается элитной недвижимостью в Пхукете, Тайланд. Для привлечения большего количества покупателей был разработан красочный промо-сайт, нацеленный на русскоговорящую аудиторию.',
            'address': 'Адрес:',
            'email': 'E-mail:',
            'phone': 'Телефон:',
            'actualAddress': 'Молдова, г. Кишинёв',
            'irinaVoscoboinic': 'Ирина Воскобойник',
            'graphicDesigner': 'Графический&веб дизайнер',
            'education': 'Образование',
            'fotoMax': 'Школа фотографии FotoMax',
            'beginner': 'начинающий уровень',
            'usm': 'Молдавский Государственный Университет',
            'compScience': 'факультет информатики',
            'lyceum': 'Теоретический лицей',
            'bachelor': 'диплом бакалавра, гуманитарный профиль',
            'software': 'Владение ПО',
            'languages': 'Языки',
            'russian': 'Русский',
            'english': 'Английский',
            'romanian': 'Румынский',
            'ukrainian': 'Украинский',
            'native': 'родной',
            'professional': 'свободно',
            'limited': 'базовый',
            'interests': 'Хобби',
            'interest1': 'Акварельный рисунок',
            'interest2': 'Латино-американские танцы',
            'interest3': 'Научная фантастика',
            'skills': 'Навыки и опыт',
            'web': 'ВЕБ',
            'webSkills1': 'Адаптивный дизайн с использованием сеток',
            'webSkills2': 'Основы HTML5, CSS3, Bootstrap, jQuery',
            'webSkills3': 'Landing pages',
            'print': 'ПОЛИГРАФИЯ',
            'printSkills1': 'Дизайн наружной рекламы',
            'printSkills2': 'Арт-дирекшин и препресс подготовка полноцветного издания',
            'photo': 'ФОТО',
            'photoSkills1': 'Высококачественная ретушь и обработка',
            'photoSkills2': 'Основы студийной съёмки',
            'workExpirience': 'Опыт работы',
            'artDirectorAquarelle': 'Арт-директор, журнал Aquarelle',
            'responsibilities': 'Обязанности:',
            'aquarelleResp1': 'Координация работы отдела дизайна',
            'aquarelleResp2': 'Разработка дизайн-концепции рубрик и обложки',
            'aquarelleResp3': 'Разработка дизайна интернет-публикаций',
            'aquarelleResp4': 'Разработка концепции фотосъемки и ретушь',
            'aquarelleResp5': 'Подготовка к печати и работа с типографией',
            'aquarelleResp6': 'Тайм-менеджмент',
            'chekhov': 'Удаленный графический дизайнер, Государственный Театр им.Чехова',
            'chekhovResp1': 'Дизайн афиш и рекламных материалов театра',
            'chekhovResp2': 'Контент-менеджмент веб-сайта',
            'seradPlus': 'Младший графический дизайнер, рекламное агенство "Serad Plus" и журнал Sanatate',
            'seradPlusResp1': 'Журнальная верстка',
            'seradPlusResp2': 'Ретушь фото',
            'seradPlusResp3': 'Дизайн рекламных материалов',
            'seradPlusResp4': 'Дизайн наружной рекламы',
            'benefis': 'Маркетинг-менеджер, компания "Benefis"',
            'benefisResp1': 'Перевод корреспонденции с русского на английский',
            'benefisResp2': 'Контент-менеджмент веб-сайта',
            'benefisResp3': 'Ретушь фото для интернет и печатных материалов',
            'previous': 'Предыдущий',
            'next': 'Следующий',
            'scrollToTop': 'наверх',
            'resumeURL': 'Irina_Gorobcenco_rus.pdf'
        }
    };

    var $projectInfoContainer, $projectInfoButtons, $portfolioListContainer, $progressBar, $navBarMenuItems, $allProjects, $downloadResume, $hireMeContainer;
    var allProjectsMap = null;

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
        return $('a[href="' + project + '"]').closest('.eyeris-project').data('category');
    }
    function getActiveCategory() {
        return $navBarMenuItems.filter('.active').data('category');
    }

    $(function () {
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

        allProjectsMap = $allProjects.find('a.project-link').map(function() {
            return $(this).attr('href');
        }).get();

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

        $projectInfoButtons.click(function (evt) {
            evt.preventDefault();

            var $targetButton = $(this);
            var currentProject = location.href.split('#')[1];
            var allProjectsCount = allProjectsMap.length;
            for (var projectPosition = 0; projectPosition < allProjectsCount; projectPosition++) {
                if (allProjectsMap[projectPosition].toLowerCase() === currentProject.toLowerCase()) {
                    var targetProject;
                    if ($targetButton.hasClass('previous')) {
                        targetProject = allProjectsMap[(projectPosition > 0 ? projectPosition : allProjectsCount) - 1];
                    } else {
                        targetProject = allProjectsMap[(projectPosition + 1 < allProjectsCount ? projectPosition + 1 : 0)];
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
