import react from "react"
import { FilePicker } from "../FilePicker/FilePicker"

export const Home = () => {
    return (
        <main id="main-section" className="main">
            <section className="main-description">
                <h1>
                    File Roulette
                </h1>
                <article>
                    <p>
                        Bored?
                    </p>
                    <p>
                        Test your luck!
                    </p>
                </article>
                <article>
                    <h2 className="h3">
                        Upload a file
                    </h2>
                    <h2 className="h3">
                        Recieve a random file
                    </h2>
                </article>
                <article>
                    <div>
                        Please use <span className="red-text-color">caution</span>!
                    </div>
                    <div>
                        Files are <span className="red-text-color">not</span> tested for <span className="red-text-color">malware</span>.
                    </div>
                </article>
            </section>
            <FilePicker/>
        </main>
    ) 
}