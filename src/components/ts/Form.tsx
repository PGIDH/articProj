function Form() {
    return (
        <form className="m-aside-newsletter m-aside-newsletter--wide" action="/subscribe" data-behavior="newsletter" >
            <fieldset>
                <legend><h2 className="title f-list-3">Sign up for our enewsletter to receive updates.</h2></legend>
                <div className="m-aside-newsletter__field__wrapper">
                    <span className="m-aside-newsletter__field">
                        <label htmlFor="email161" className="f-secondary">Email address</label>
                        <input type="hidden" name="_token" value="wpqV1zn9tIFHT0wZCQFUlpr0vuvOB4euWCXmWl1m" />
                        <input type="email" name="email" id="email161" className="f-secondary" placeholder="your@email.com" autoComplete="email" />
                        <button type="submit" className="f-buttons m-aside-newsletter__btn--submit" data-gtm-event-category="subscribe" data-gtm-event="email">Subscribe</button>
                    </span>

                    <div className="m-aside-newsletter__btn--list__wrapper">
                        <button type="button" className="f-buttons m-aside-newsletter__btn--list">
                            See all newsletters
                            <svg className="icon--arrow">
                                <use xlinkHref="#icon--arrow"></use>
                            </svg>
                        </button>
                    </div>

                    <div className="m-aside-newsletter__list-wrapper" aria-hidden="true">
                        <div className="m-aside-newsletter__list">
                            <div className="m-aside-newsletter__list__left">
                                <ol className="m-fieldset__fields">
                                    <li className="m-fieldset__field o-blocks m-fieldset__field--group">
                                        <span className="checkbox s-disabled">
                                            <input type="checkbox" value="OptMuseum" id="subscriptions-OptMuseum" name="subscriptions[0]" />
                                            <span className="f-secondary">
                                                <label htmlFor="subscriptions-OptMuseum" className="label  ">
                                                    News and Exhibitions
                                                </label>
                                            </span>
                                        </span>
                                        <span className="checkbox">
                                            <input type="checkbox" value="OptHumanResources" id="subscriptions-OptHumanResources" name="subscriptions[1]" />
                                            <span className="f-secondary">
                                                <label htmlFor="subscriptions-OptHumanResources" className="label  ">
                                                    Career Opportunities
                                                </label>
                                            </span>
                                        </span>
                                        <span className="checkbox">
                                            <input type="checkbox" value="OptFamilyPrograms" id="subscriptions-OptFamilyPrograms" name="subscriptions[2]" />
                                            <span className="f-secondary">
                                                <label htmlFor="subscriptions-OptFamilyPrograms" className="label  ">
                                                    Families
                                                </label>
                                            </span>
                                        </span>
                                        <span className="checkbox">
                                            <input type="checkbox" value="OptEvents" id="subscriptions-OptEvents" name="subscriptions[3]" />
                                            <span className="f-secondary">
                                                <label htmlFor="subscriptions-OptEvents" className="label  ">
                                                    Public Programs
                                                </label>
                                            </span>
                                        </span>
                                    </li>
                                </ol>
                            </div>
                            <div className="m-aside-newsletter__list__right">
                                <ol className="m-fieldset__fields">
                                    <li className="m-fieldset__field o-blocks m-fieldset__field--group">
                                        <span className="checkbox">
                                            <input type="checkbox" value="OptStudentTeacherPrograms" id="subscriptions-OptStudentTeacherPrograms" name="subscriptions[4]" />
                                            <span className="f-secondary">
                                                <label htmlFor="subscriptions-OptStudentTeacherPrograms" className="label  ">
                                                    K-12 Educator Resources
                                                </label>
                                            </span>
                                        </span>
                                        <span className="checkbox">
                                            <input type="checkbox" value="OptTeenPrograms" id="subscriptions-OptTeenPrograms" name="subscriptions[5]" />
                                            <span className="f-secondary">
                                                <label htmlFor="subscriptions-OptTeenPrograms" className="label  ">
                                                    Teen Opportunities
                                                </label>
                                            </span>
                                        </span>
                                        <span className="checkbox">
                                            <input type="checkbox" value="OptAcademicEngagement" id="subscriptions-OptAcademicEngagement" name="subscriptions[6]" />
                                            <span className="f-secondary">
                                                <label htmlFor="subscriptions-OptAcademicEngagement" className="label  ">
                                                    Research, Publishing, and Conservation
                                                </label>
                                            </span>
                                        </span>
                                        <span className="checkbox">
                                            <input type="checkbox" value="OptShop" id="subscriptions-OptShop" name="subscriptions[7]" />
                                            <span className="f-secondary">
                                                <label htmlFor="subscriptions-OptShop" className="label  ">
                                                    Museum Shop
                                                </label>
                                            </span>
                                        </span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>
    )
}

export default Form;