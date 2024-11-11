import { useSearchParams } from "react-router-dom";







const Filter = () => {

    // Url arama parametreleri erişim yönetim için
    //  1. degişkeni parametreler erişim ve güncellemek için
    // 2.degişkeni url güncellemek için

    const [searchParams, setSearchParams] = useSearchParams();




    // aratılan terim state tutuldugunda sayfayı yenileyince arama sıfırlandıgında veya başkalarıyla bulunan sonuçları paylaşmıcacagımızdan dolayı aratılan terimi arama parametresi olarak tutmalıyız
    const handleSubmit = (e) => {
        e.preventDefault();

        const text = e.target[0].value;

        // eklenicek parametreyi belirleme
        searchParams.set("search", text);

        // parametrede yapılan güncellemeyi url aktar

        setSearchParams(searchParams);
    }

    const handleChange = (e) => {
        const text = e.target.value;

        //  mevcut parametrelere  arasına  sort param ekle

        searchParams.set("sort", text);

        // Url yeni parametreleri güncelle
        setSearchParams(searchParams)

    };


    return (
        <div className="d-flex justify-content-between align-items-center my-4 gap-3">
            <div>
                <select onChange={handleChange} className="form-select" defaultValue={searchParams.get("sort")}>
                    <option value="">sırala</option>
                    <option value="a-z">a-z</option>
                    <option value="z-a">z-a</option>

                </select>
            </div>

            <form onSubmit={handleSubmit} className="d-flex gap-2">
                <input

                    type="text" placeholder="kitap ismi giriniz" className="form-control" defaultValue={searchParams.get("search")} />

                <button className="btn btn-primary">Ara</button>
            </form>
        </div>
    )
}

export default Filter