import { useLocation } from "react-router-dom";


function SingleBlog() {
    const location = useLocation();
    const {title, content, id, } = location.state;

    console.log(title);
    return (
        <div className=" min-h-[80vh]">
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                       
                        <header className="mb-4 lg:mb-6 not-format">
                            
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">{title}</h1>
                        </header>
                        <p className="lead"> {content}</p>

                        
                        


                    </article>
                </div>
            </main>
        </div>

    )
}

export default SingleBlog