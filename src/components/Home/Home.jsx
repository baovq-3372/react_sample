import { Fragment, useState, useEffect } from "react";
import TourList from "./TourList";
import { useDispatch, useSelector } from "react-redux";
import { getTour, setToken } from "../../redux/actions";
import {
  toursSelector,
  categoriesSelector,
  tourPaginationSelector,
  jwtTokenSelector,
} from "../../redux/selector";
import Cookies from "js-cookie";
import { Slider, Select, MenuItem, Pagination } from "@mui/material";

const minPriceDistance = 10000;

function valuetext(value) {
  return `${value} VND`;
}

function Home() {
  const [searchText, setSearchText] = useState("");
  const [categorySearch, setCategorySearch] = useState();
  const [priceRange, setPriceRange] = useState([100000, 1000000]);
  const [sortOption, setSortOption] = useState("");
  const [perPage, setPerPage] = useState(12);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);
  const tours = useSelector(toursSelector);
  const tourPagination = useSelector(tourPaginationSelector);
  const accessToken = useSelector(jwtTokenSelector);

  const dispatchGetTour = () => {
    dispatch(
      getTour({
        page: page,
        per_page: perPage,
        search_text: searchText,
        category_id_eq: categorySearch,
        cost_gteq: priceRange[0],
        cost_lteq: priceRange[1],
        sort_option: sortOption,
      })
    );
  };

  useEffect(() => {
    if (accessToken === null && Cookies.get("token") !== null)
      dispatch(setToken(Cookies.get("token")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("search", searchText, priceRange, categorySearch);
    const delaySearch = setTimeout(() => {
      dispatchGetTour();
    }, 800);
    return () => clearTimeout(delaySearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, priceRange]);

  useEffect(() => {
    dispatchGetTour();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySearch, sortOption, perPage, page]);

  const handlePriceRange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minPriceDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 1000000 - minPriceDistance);
        setPriceRange([clamped, clamped + minPriceDistance]);
      } else {
        const clamped = Math.max(newValue[1], minPriceDistance);
        setPriceRange([clamped - minPriceDistance, clamped]);
      }
    } else {
      setPriceRange(newValue);
    }
  };

  const clearFilter = () => {
    setPage(1);
    setPerPage(12);
    setSearchText("");
    setCategorySearch();
    setSortOption("");
    setPriceRange([100000, 1000000]);
  };

  return (
    <Fragment>
      <header className="header">
        <p className="header-logo"></p>
        <p className="header-title">Stop looking for an adventure - find it.</p>
        <div className="ais-SearchBox">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="ais-SearchBox-input"
            placeholder="Tour, category,..."
            maxLength="512"
            type="search"
          />
        </div>
      </header>
      <div className="aisScrollTo">
        <main className="container">
          <div className="container-wrapper">
            <section className="container-filters">
              <div className="container-header">
                <h2>Filters</h2>
                <div className="clear-filters">
                  <div className="ais-ClearRefinements" onClick={clearFilter}>Clear filters</div>
                </div>
              </div>
              <div className="container-body">
                <div className="ais-Panel">
                  <div className="ais-Panel-header">Category</div>
                  <div className="ais-Panel-body">
                    <div className="ais-HierarchicalMenu">
                      <ul className="ais-HierarchicalMenu-list">
                        {categories.map((category) => (
                          <li
                            className="ais-HierarchicalMenu-item"
                            key={category.id}
                            onClick={() => setCategorySearch(category.id)}
                          >
                            <div className="ais-HierarchicalMenu-link">
                              <span className="ais-HierarchicalMenu-label">
                                {" "}
                                - {category.name}{" "}
                              </span>
                              <span className="ais-HierarchicalMenu-count">
                                {category.quantity > 0
                                  ? category.quantity
                                  : null}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="ais-Panel">
                  <div className="ais-Panel-header">Price</div>
                  <div className="ais-Panel-body">
                    <div className="ais-HierarchicalMenu">
                      <Slider
                        getAriaLabel={() => "Minimum distance shift"}
                        value={priceRange}
                        onChange={handlePriceRange}
                        getAriaValueText={valuetext}
                        min={minPriceDistance}
                        max={1000000}
                        valueLabelDisplay="auto"
                        disableSwap
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section className="container-results">
            <header className="container-header container-options">
              <div className="ais-SortBy container-option">
                <Select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  variant="standard"
                  displayEmpty
                >
                  <MenuItem value="">Sort by featured</MenuItem>
                  <MenuItem value={1}>Price ascending</MenuItem>
                  <MenuItem value={2}>Price descending</MenuItem>
                </Select>
              </div>
              <div className="ais-HitsPerPage container-option">
                <Select
                  value={perPage}
                  onChange={(e) => setPerPage(e.target.value)}
                  variant="standard"
                  displayEmpty
                >
                  <MenuItem value={12}>12 hits per page</MenuItem>
                  <MenuItem value={24}>24 hits per page</MenuItem>
                  <MenuItem value={48}>48 hits per page</MenuItem>
                </Select>
              </div>
            </header>
            <TourList tours={tours} />
            <footer className="container-footer">
              {tourPagination.total_pages > 1 ? (
                <Pagination
                  count={tourPagination.total_pages}
                  color="secondary"
                  variant="outlined"
                  shape="rounded"
                  page={page}
                  onChange={(e, page) => setPage(page)}
                />
              ) : (
                <div></div>
              )}
            </footer>
          </section>
        </main>
      </div>
    </Fragment>
  );
}

export default Home;
