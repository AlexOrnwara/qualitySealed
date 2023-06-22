import styles from '@/styles/Qualification.module.scss'

export default function HorizontalScroll(props) {
    const { imageArray } = props;

    return (
        <>
            <section className = {styles.container}>
                {imageArray.map((image) => (
                    <img
                        src = {image}
                        alt = {String(image)}
                        className = {styles.test_certificate}
                    />
                ))}
            </section>
        </>
    )

}