import { useLocation } from "react-router-dom";


function SingleBlog() {
    const location = useLocation();
    const {title, desc, id} = location.state;

    console.log(title);
    return (
        <div>SingleBlog
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <figure className=' my-5'><img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt="" />

                        </figure>
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                                    <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                                    <div>
                                        <a href="#" rel="author" className="text-xl font-bold text-gray-900">title</a>
                                        <p className="text-base text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                                        {/* <p className="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p> */}
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">{title}</h1>
                        </header>
                        <p className="lead">Flowbite is an open-source library of UI components built with the utility-first
                            classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals,
                            datepickers.</p>
                        <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                            you can think things through before committing to an actual design project.</p>
                        <p>But then I found a <a href="https://flowbite.com">component library based on Tailwind CSS called
                            Flowbite</a>. It comes with the most commonly used UI components, such as buttons, navigation
                            bars, cards, form elements, and more which are conveniently built with the utility classes from
                            Tailwind CSS.</p>


                    </article>
                </div>
            </main>
        </div>

    )
}

export default SingleBlog