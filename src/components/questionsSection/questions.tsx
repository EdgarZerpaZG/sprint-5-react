import styles from '../../_App.module.scss'
import stylesQuestions from './questions.module.scss'
import ImgQuestion from './imgQuestion/imgQuestion'
import ArrowIcon from '/icon-arrow.svg'

export default function Questions() {
    return (
        <>
        <section className={`${styles["container"]} ${styles["position-relative"]} ${styles["my-4"]} ${styles["py-4"]}`}>
            <div className={styles["text-center"]}>
                <h5 className={`${styles["mb-3"]}`}>Frequently Asked Questions</h5>
                <p className={`${styles["mb-3"]} ${styles["text-light"]}`}>Here are some of or FAQs. if you have any other questions <br className={`${styles["d-block"]} ${styles["d-md-none"]}`} />you'd like answered please feel free to email us.</p>
            </div>
            <div className={`${styles["d-flex"]} ${styles["justify-content-center"]} ${styles["my-3"]}`}> 
                <div className={`${stylesQuestions["accordion-content"]}`}>
                    <div className={`${stylesQuestions["accordion-list"]}`}>
                        <details className={`${stylesQuestions["accordion-item"]}`}>
                            <summary className={`${styles["text-left"]}`}>What is Bookmark? <ImgQuestion src={ArrowIcon} style={`${styles["img-fluid"]}`} alt="Bookmark" /></summary>
                            <p className={`${styles["my-3"]}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis temporibus voluptatibus sapiente? Voluptatibus eum accusamus quo quam quod nam nostrum esse at aperiam! Eveniet natus atque dicta voluptatum earum.</p>
                            </details>
                            <details className={`${stylesQuestions["accordion-item"]}`}>
                            <summary className={`${styles["text-left"]}`}>How can I request a new browser? <ImgQuestion src={ArrowIcon} style={`${styles["img-fluid"]}`} alt="Bookmark" /></summary>
                            <p className={`${styles["my-3"]}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis temporibus voluptatibus sapiente? Voluptatibus eum accusamus quo quam quod nam nostrum esse at aperiam! Eveniet natus atque dicta voluptatum earum.</p>
                            </details>
                            <details className={`${stylesQuestions["accordion-item"]}`}>
                            <summary className={`${styles["text-left"]}`}>Is there a mobile app? <ImgQuestion src={ArrowIcon} style={`${styles["img-fluid"]}`} alt="Bookmark" /></summary>
                            <p className={`${styles["my-3"]}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis temporibus voluptatibus sapiente? Voluptatibus eum accusamus quo quam quod nam nostrum esse at aperiam! Eveniet natus atque dicta voluptatum earum.</p>
                            </details>
                            <details className={`${stylesQuestions["accordion-item"]}`}>
                            <summary className={`${styles["text-left"]}`}>What about other Chromium browsers? <ImgQuestion src={ArrowIcon} style={`${styles["img-fluid"]}`} alt="Bookmark" /></summary>
                            <p className={`${styles["my-3"]}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis temporibus voluptatibus sapiente? Voluptatibus eum accusamus quo quam quod nam nostrum esse at aperiam! Eveniet natus atque dicta voluptatum earum.</p>
                        </details>
                    </div>
                    <div className={`${styles["mt-5"]}`}>
                        <button type="button" className={`${styles["btn-blue"]} d-block mx-auto`}>More info</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}