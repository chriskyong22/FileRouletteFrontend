import react, { useState } from "react"

export const FilePicker = () => {

    const [checkedTOS, setCheckedTOS] = useState(true);
    const [toggleDownload, setToggleDownload] = useState(false);
    const test = (event: any) => {
        event.stopPropagation();
        console.log("test");
        setToggleDownload(!toggleDownload);
    }
    const renderOption = () => {
        if (toggleDownload) {
            return (
                <div className="file">
                    <h2>
                        You got FILE_NAME!
                    </h2>
                    <h3 aria-labelledby="rate-section">
                        Rate it!
                    </h3>
                    <section id="rate-section">
                        <button aria-label="Rate Positively" className="h3 positive">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg> 
                        </button>
                        <button aria-label="Rate Negatively" className="h3 negative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-thumbs-down"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>
                        </button>
                    </section>
                    <button onClick={test}>
                        Go again!
                    </button>
                </div>
            )
        } else {
            return (
                <>
                    <button aria-description={"You must agree to the terms of service before uploading and downloading files."} 
                        aria-disabled={checkedTOS} 
                        disabled={checkedTOS} 
                        className="file-icon-background"
                        onClick={uploadAndDownloadFile}
                    >
                        <svg version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Download Icon created by Victor Akio Zukeran 
                                from the Noun Project
                            </desc>
                            <g>
                                <path className="download-icon" d="m260.4 394.8h198.61v23.812h-198.61z"/>
                                <path className="download-icon" d="m432.69 310.76-16.836-16.836-44.25 44.254v-178.8h-23.812v178.8l-44.238-44.254-16.84 16.836 72.973 72.973z"/>
                            </g>
                            <g>
                                <text x="50%" y="80%" dominantBaseline="middle" textAnchor="middle">1 MB LIMIT</text>
                            </g>
                        </svg>
                    </button>
                    <div className="tos-container">
                        <input 
                            id="tos-checkbox"
                            type="checkbox"
                            defaultChecked={!checkedTOS}
                            onClick={() => {setCheckedTOS((oldTOS) => !oldTOS)}}
                        />
                        <label htmlFor="tos-checkbox">
                            I agree to the <a href="/TOS/">terms of service</a>
                        </label>
                    </div>
                </>
            )
        }
    }

    const uploadAndDownloadFile = (event: react.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setToggleDownload((toggleDownload) => !toggleDownload);
        console.log("Running upload");
    }

    return (
        <section className="file-container">
            {renderOption()}
        </section>
    )
}