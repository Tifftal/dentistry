import "./KidsPage.css";


const KidsPage = () => {
    // ✅ сюда подставишь свои медиа
    const heroImg = "../../IMG/1766737202583.webp";
    const aboutImg = "../../IMG/IMG_0542 (1).webp";

    const benefits = [
        { title: "Адаптация без давления", text: "Первый визит — знакомство: покажем кабинет, инструменты и мультики, чтобы снять напряжение." },
        { title: "Понятно ребёнку", text: "Объясняем простыми словами: «расскажем → покажем → сделаем» (Tell-Show-Do)." },
        { title: "Бережно и быстро", text: "Работаем аккуратно, даём паузы, отмечаем успех ребёнка — формируем позитивный опыт." },
        { title: "Родителям спокойно", text: "Перед началом рассказываем план и стоимость, после — рекомендации по уходу и профилактике." },
    ];

    const services = [
        { title: "Профосмотр и профилактика", text: "Осмотр, рекомендации, профилактические процедуры — чтобы лечить меньше." },
        { title: "Лечение кариеса и пульпита", text: "Детские материалы и подход: мягко, спокойно, с объяснениями." },
        { title: "Герметизация фиссур", text: "Защита жевательных зубов у детей — один из самых эффективных шагов профилактики." },
        { title: "Удаление молочных зубов", text: "Только по показаниям, делаем максимально комфортно." },
    ];

    const steps = [
        { n: "01", title: "Знакомство", text: "Ребёнок привыкает к обстановке: кресло, воздух, вода, «пылесос» — без лечения, если нужно." },
        { n: "02", title: "План лечения", text: "Объясняем родителям и ребёнку, что будем делать и почему. Договариваемся о сигналах «стоп»." },
        { n: "03", title: "Лечение без стресса", text: "Поэтапно и спокойно: отвлекаем, хвалим, делаем паузы. Наша цель — хороший опыт." },
        { n: "04", title: "Закрепление результата", text: "Памятка по уходу, профилактика, запись на контроль. Чтобы следующий визит был ещё легче." },
    ];

    const faq = [
        { q: "С какого возраста можно приводить ребёнка?", a: "Обычно первый визит делают ранним и коротким: познакомиться, получить рекомендации и профилактику. Так формируется привычка без страха." },
        { q: "Ребёнок боится врача — что вы делаете?", a: "Используем мягкие техники адаптации: объясняем-показываем-делаем, отвлекаем, хвалим за смелость. Лечим по готовности ребёнка." },
        { q: "Можно ли родителям присутствовать?", a: "Обычно да — так ребёнку спокойнее. В некоторых ситуациях врач может предложить другой формат, если это поможет ребёнку лучше сотрудничать." },
        { q: "Как подготовиться к приёму?", a: "Без «страшилок». Дома можно поиграть в стоматолога, посмотреть добрый ролик/книжку, пообещать не подарки, а совместное приятное время после." },
    ];

    return (
        <div className="kidsPage">
            {/* HERO */}
            <section className="kidsHero">
                <div className="kidsWrap">
                    <div className="kidsHeroGrid">
                        <div className="kidsHeroInfo">
                            <span className="kidsTag">ДЕТСКАЯ СТОМАТОЛОГИЯ</span>
                            <h1>Чтобы ребёнок не боялся стоматолога — ни сегодня, ни завтра</h1>
                            <p>
                                Наша задача — не просто вылечить зуб, а сделать так, чтобы ребёнок вышел
                                спокойным и уверенным. Бережная адаптация, понятные объяснения и забота.
                            </p>

                            <div className="kidsTrustRow">
                                <div className="kidsTrustItem">
                                    <div className="kidsTrustNum">Индивидуально</div>
                                    <div className="kidsTrustText">под каждого ребёнка и возраст</div>
                                </div>
                                <div className="kidsTrustItem">
                                    <div className="kidsTrustNum">Без спешки</div>
                                    <div className="kidsTrustText">работаем в темпе ребёнка</div>
                                </div>
                                <div className="kidsTrustItem">
                                    <div className="kidsTrustNum">На будущее</div>
                                    <div className="kidsTrustText">формируем доверие к врачам</div>
                                </div>
                            </div>
                        </div>

                        <div className="kidsHeroMedia">
                            <div className="kidsHeroImg">
                                <img src={heroImg} alt="Детская стоматология" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="kidsSection">
                <div className="kidsWrap">
                    <div className="kidsSectionTitle">
                        <span className="kidsTag">ПОЧЕМУ РОДИТЕЛИ ВЫБИРАЮТ НАС</span>
                        <h2>Сначала доверие — потом лечение</h2>
                    </div>

                    <div className="kidsCards">
                        {benefits.map((b, i) => (
                            <div className="kidsCard" key={i}>
                                <h3>{b.title}</h3>
                                <p>{b.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VIDEO + ABOUT */}
            <section className="kidsSection kidsAlt">
                <div className="kidsWrap">
                    <div className="kidsTwoCol kidsTwoColSingle">
                        <div className="kidsAbout">
                            <span className="kidsTag">КАК МЫ РАБОТАЕМ С ДЕТЬМИ</span>
                            <div className="kidsMiniImg">
                                <img src={aboutImg} alt="Атмосфера для детей" loading="lazy" />
                            </div>
                            <br />
                            <h2>Покажем, объясним, договоримся</h2>
                            <p>
                                Детям важно понимать, что происходит. Мы используем подход
                                «расскажем → покажем → сделаем» и позитивное подкрепление —
                                так снижается тревога и повышается сотрудничество.
                            </p>
                            <p className="kidsNote">
                                Если ребёнку нужен “адаптационный” визит без лечения — это нормально.
                                Лучше сохранить доверие, чем добиться результата через стресс.
                            </p>


                        </div>
                    </div>
                </div>
            </section>


            {/* SERVICES */}
            <section className="kidsSection">
                <div className="kidsWrap">
                    <div className="kidsSectionTitle">
                        <span className="kidsTag">ЧТО МЫ ДЕЛАЕМ</span>
                        <h2>Основные направления</h2>
                    </div>

                    <div className="kidsCards kidsCards2">
                        {services.map((s, i) => (
                            <div className="kidsCard" key={i}>
                                <h3>{s.title}</h3>
                                <p>{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STEPS */}
            <section className="kidsSection kidsAlt">
                <div className="kidsWrap">
                    <div className="kidsSectionTitle">
                        <span className="kidsTag">КАК ПРОХОДИТ ПРИЁМ</span>
                        <h2>4 шага к спокойной улыбке</h2>
                    </div>

                    <div className="kidsSteps">
                        {steps.map((st) => (
                            <div className="kidsStep" key={st.n}>
                                <div className="kidsStepNum">{st.n}</div>
                                <div className="kidsStepBody">
                                    <h3>{st.title}</h3>
                                    <p>{st.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="kidsSection">
                <div className="kidsWrap">
                    <div className="kidsSectionTitle">
                        <span className="kidsTag">ВОПРОСЫ РОДИТЕЛЕЙ</span>
                        <h2>Частые вопросы</h2>
                    </div>

                    <div className="kidsFaq">
                        {faq.map((item, i) => (
                            <details className="kidsFaqItem" key={i}>
                                <summary>{item.q}</summary>
                                <p>{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default KidsPage;
