import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <center>
            <div className="filter_menu">
                <div className="row">
                    <span>Filtrele: </span>
                    <select name="category" value={category} onChange={handleCategory} >
                        <option value=''>Markalar</option>
                        {
                            categories.map(category => (
                                <option value={"category=" + category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <input type="text" value={search} placeholder="Ürün, kategori veya marka ara"
                    onChange={e => setSearch(e.target.value.toLowerCase())} />

                <div className="row sort">
                    <span>Sırala: </span>
                    <select value={sort} onChange={e => setSort(e.target.value)} >
                        <option value=''>En Yeniler</option>
                        <option value='sort=oldest'>Eskiden</option>
                        <option value='sort=-sold'>En Çok Satanlar</option>
                        <option value='sort=-price'>Azalan Fiyat</option>
                        <option value='sort=price'>Artan Fiyat</option>
                    </select>
                </div>
            </div>
        </center>
    )
}

export default Filters
