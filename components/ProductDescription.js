import styles from '@/styles/Home.module.css'
import productStyle from '@/styles/Product.module.css'

export default function ProductDescription(props) {
    const { productName, productDescription, price } = props;
    return (
        <>
            <div className = {productStyle.align_left}>
                <div className = {productStyle.column}>
                    <div className = {productStyle.row}>
                        <h1 className = {productStyle.h2}>{productName}</h1>
                        <h3 className = {productStyle.h3}>{price}</h3>
                    </div>
                    
                    <p className = {productStyle.p}>{productDescription}</p>
                </div>
            </div>

            <div className = {productStyle.align_right}>
                <div className = {productStyle.column}>
                    <div className = {productStyle.row}>
                        <h1 className = {productStyle.h2}>{productName}</h1>
                        <h3 className = {productStyle.h3}>{price}</h3>
                    </div>
                    
                    <p className = {productStyle.p}>{productDescription}</p>
                </div>
            </div>
        </>
    )
}