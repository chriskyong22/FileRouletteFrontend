import react, { useState } from "react"

export const FilePicker = () => {

    const [checkedTOS, setCheckedTOS] = useState(true);

    return (
        <section className="file-container">
            <button aria-description={"You must agree to the terms of service before uploading and downloading files."} 
                    aria-disable={checkedTOS} 
                    disabled={checkedTOS} 
                    className="file-icon-background"
            >
                <svg width="" height="" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <desc>
                        Download Icon created by Victor Akio Zukeran 
                        from the Noun Project
                    </desc>
                    <g>
                        <path className="download-icon" d="m260.4 394.8h198.61v23.812h-198.61z"/>
                        <path className="download-icon" d="m432.69 310.76-16.836-16.836-44.25 44.254v-178.8h-23.812v178.8l-44.238-44.254-16.84 16.836 72.973 72.973z"/>
                    </g>
                </svg>
            </button>
            <div className="tos-container">
                <input 
                    id="tos-checkbox"
                    type="checkbox"
                    checked={!checkedTOS}
                    onClick={() => {setCheckedTOS((oldTOS) => !oldTOS)}}
                />
                <label htmlFor="tos-checkbox">
                    I agree to the <a href="/TOS/">terms of service</a>
                </label>
            </div>
        </section>
    )
}