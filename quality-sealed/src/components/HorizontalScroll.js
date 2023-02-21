import styles from '@/styles/Qualification.module.css'
import Image from 'next/image'

export default function HorizontalScroll(props) {
    const { imageArray } = props;

    return (
        <>
            <section className = {styles.container}>
                {imageArray.map((image) => (
                    <Image
                        src = {image}
                        alt = {String(image)}
                        width = {200}
                        height = {200}
                        className = {styles.certificate}
                    />
                ))}
            </section>
        </>
    )

}