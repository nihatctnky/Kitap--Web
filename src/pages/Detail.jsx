import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";



const Detail = () => {

    const [book, setBook] = useState(null);
    // link elementinin görevini yapan yani yönlendirme yapan fonksiyondur
    const navigate = useNavigate();

    // url id parametresi al
    const { id } = useParams();

    // apiden kitabın bilgilerinial
    useEffect(() => {
        // Api istegi at
        axios
            .get(`http://localhost:3000/books/${id}`)
            // Başarılı olursa

            .then((res) => setBook(res.data))
            // Hata olursa
            // undefined syfasına yönlendir
            // hata kodu verisini yönlendirirken aktar
            .catch((err) => navigate("/undefined", { state: err.status }));

    }, []);
    return !book ? (
        <p>Yükleniyor..</p>
    ) : (<div className="row my-5 p-5 mx-auto container">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={book.image} className="rounded img-fluid shadow" />
        </div>


        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-4">
            <h1>{book.title}</h1>

            <div className="my-4">
                <Info title="Yazar" value={book.author} />
                <Info title="Yıl" value={book.year} />
                <Info title="Sayfa Sayısı" value={book.page} />
                <Info title="Ücret" value={book.price} />
                <Info title="Açıklama" value={book.description} />
            </div>
        </div>

    </div>)
}

export default Detail

// aynı dosyadaki 2 componet 


const Info = ({ title, value }) => {
    return (
        <p>
            <span className="badge bg-danger me-3">{title}</span>
            <span>{value}</span>
        </p>
    )
}

