import { addDoc } from 'firebase/firestore/lite';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useRef } from 'react';
import { auth, storage, db } from '../../firebase';
import { collection } from 'firebase/firestore/lite';


import './index.scss';

const Home = () => {
    const form = useRef();

    const submitPortifolio = (e) => {
        e.preventDefault();

        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const link = form.current[2]?.value;
        const skills = form.current[3]?.value;
        const image = form.current[4]?.files[0];


        const storageRef = ref(storage, `portfolio/${image.name}`);

        uploadBytes(storageRef, image).then(
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    savePortfolio({
                        name,
                        description,
                        url,
                        image: downloadUrl
                    })
                }, (error) => {
                    console.log(error);
                    savePortfolio({
                        name,
                        description,
                        url,
                        image: null
                    })
                })
            }, (error) => {
                console.log(error);
                savePortfolio({
                    name,
                    description,
                    url,
                    image: null
                })
            }
        )


    }


    const savePortifolio = async (portifolio) => {
        console.log(portifolio);
        try {
            addDoc(collection(db, 'portifolio'), portifolio);
        }
        catch (error) {
            alert(error);
        }
    }






    return (
        <div className="dashboard">
            <form ref={form} onSubmit={submitPortifolio}>

                <p>
                    <input type="text" placeholder="Name" />
                </p>
                <p>
                    <textarea placeholder="Description" />
                </p>
                <p>
                    <input type="text" placeholder="Url" />
                </p>
                <p>
                    <select>
                        <option value="React">React</option>
                        <option value="Typescript">Typescript</option>
                        <option value="Js">Vanilla</option>
                        <option value="Node">Node</option>
                    </select>
                </p>

                <p>
                    <input type="file" placeholder="Image" />
                </p>
                <button type="submit">Submit</button>
                <button onClick={() => auth.signOut()}>SignOut</button>
            </form>

        </div>
    );
}


export default Home;
