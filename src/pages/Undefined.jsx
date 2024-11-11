import { Link, useLocation } from "react-router-dom"


const Undefined = () => {

    const loc = useLocation();
    const status = loc.state ? loc.state : 404;

    return (
        <div className="text-center">
            <h1 className="text-warning fw-bold">{status}</h1>

            <img className="w-95 rounded" src="404 gif.jpg" style={{ maxHeight: "300px", objectfit: "cover" }} />

            <p className="fs-1">Aradığınız sayfa bulunamadı</p>
            <p>
                <Link to="/">Anasayfa</Link> ' ya bir göz atabilirsiniz
            </p>
        </div>
    )
}

export default Undefined