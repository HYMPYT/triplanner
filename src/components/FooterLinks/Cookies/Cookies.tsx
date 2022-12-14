import { Header } from "../../Header/Header"
import css from "./Cookies.module.css"
import { Link, useLocation } from 'react-router-dom'

export function Cookies() {
    const location = useLocation();
    return (
        <>
            <section className={css.hero}>
                <Header />
                <div>
                    <div className={css.cookies_policy}>
                        <div className={css.policy_ebilet}>
                            Політика E-Bilet.com.ua щодо використання Cookie-файлів
                        </div>
                        <div className={css.cookie}>

                        </div>
                        <div className={css.policy_content_top}>
                            Як і Умови надання послуг, і Політика конфіденційності, ця політика містить інформацію про файли cookie та інші подібні технології, які використовуються на всіх наших сайтах, у мобільних додатках та інших службах. Час від часу ми переглядатимемо цю політику, щоб переконатися, що вона актуальна. Якщо ми внесемо зміни, ми опублікуємо останню версію політики тут. Якщо ми внесемо суттєві зміни, ми повідомимо вас про це, коли ви наступного разу будете користуватися нашими службами, або в інший спосіб.<br /><br />

                            Ми використовуємо файли cookie та подібні технології, коли ви користуєтеся нашими службами. Ці файли cookie та подібні технології контролюємо безпосередньо ми або треті сторони, що діють від нашого імені чи незалежно.
                        </div>
                        <div className={css.policy_content_center}>
                            Коли ви вперше отримуєте доступ до наших послуг на своєму пристрої, ми просимо вас дозволити нам використовувати файли cookie та подібні технології відповідно до цієї політики. Якщо ви не дозволяєте нам використовувати ці технології або якщо ви передумаєте пізніше, ви можете відкликати свою згоду, використовуючи методи, наведені в цій політиці, або ви можете припинити користуватися нашими послугами.
                        </div>
                        <div className={css.policy_content_bottom}>
                            Якщо у вас є запитання щодо цієї політики або ви хотіли б дізнатися більше про файли cookie, які використовуються на наших веб-сайтах
                        </div>
                        <Link
                                to={`/`}
                                state={{ from: location }}
                            >
                                <a href="/#">
                                    <div className={css.buttonlink}>

                                    </div>
                                </a>
                            </Link>
                    </div>
                </div>
            </section>
        </>
    )
}