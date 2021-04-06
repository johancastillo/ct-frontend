import React from 'react'

const SearchBar = () => {
  return (
    <div className="col d-none d-xl-block">
      <form className="js-focus-state">
        <label className="sr-only" htmlFor="searchproduct">Buscar</label>
        <div className="input-group">
          <input type="text" className="form-control py-2 pl-5 font-size-15 border-right-0 height-40 border-width-2 rounded-left-pill border-primary" placeholder="Buscar..." required />
          <div className="input-group-append">
            {/* Select */}
            <select className="js-select selectpicker dropdown-select custom-search-categories-select" data-style="btn height-40 text-gray-60 font-weight-normal border-top border-bottom border-left-0 rounded-0 border-primary border-width-2 pl-0 pr-5 py-2">
              <option value="one" selected>Todas las categorías</option>
              <option value="two">Alimentos</option>
              <option value="three">Tecnología </option>
              <option value="four">Hogar</option>
            </select>
            {/* End Select */}
            <button className="btn btn-primary height-40 py-2 px-3 rounded-right-pill" type="button" id="searchProduct1">
              <span className="icon-search font-size-24" />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar

