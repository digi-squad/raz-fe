
const Description = (props) => {
    return (
        <div className={`${props.isShow === 1 ? 'flex' : 'hidden'} flex justify-center items-center flex-col sm:flex-row gap-10`}>
            <img src={props.images ? props.images[0] : ''} alt="product" className="w-full sm:w-2/5 "/>
            <div className="flex justify-center items-center flex-col gap-8">
                <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu..</p>
                <ol className="pl-5">
                    <li className="list-decimal">Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper</li>
                    <li className="list-decimal">Aliquam est et tempus. Eaecenas libero ante, tincidunt vel</li>
                </ol>
                <p>Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper. Phasellus accum</p>
            </div>
        </div>
    )
}

export default Description;