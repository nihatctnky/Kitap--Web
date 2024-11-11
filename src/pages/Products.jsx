import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { useSearchParams } from "react-router-dom";




const Products = () => {


    const [books, setBooks] = useState([]);

    // URL arama parametrelerine eriş
    const [searchParams] = useSearchParams();
    // parametreler degiştiginde  api istegi at
    useEffect(() => {
        const params = {

            //  apin gönderilcek parametreyi url eşitle
            q: searchParams.get("search"),
            _sort: "title",
            _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
        }
        axios
            .get("http://localhost:3000/books", { params })
            .then((res) => setBooks(res.data))
    }, [searchParams]);

    return (
        <div className="container my-5">
            <h3>{books.length} Kitap Bulundu</h3>

            <Filter />

            <div className="cards-container">
                {books.map((book) => (
                    <Card key={book.id} book={book} />
                ))}
            </div>

        </div>
    )
}

export default Products;