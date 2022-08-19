import Loader from 'react-loaders';
import './index.scss';


const Portifolio = () => {

    return (
        <>
            <div className="container portifolio-page">
                <div className="text-zone">
                    <h1>Portifolio</h1>
                </div>
            </div>

            <Loader type="ball-clip-rotate-multiple" active={true} />
        </>
    )
}

export default Portifolio;