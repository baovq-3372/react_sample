export const categoriesSelector = (state) => state.tourReducer.categoryData;
export const toursSelector = (state) => state.tourReducer.tourData;
export const tourPaginationSelector = (state) => state.tourReducer.paginationData;
export const detailTourSelector = (state) => state.tourReducer.detailTourData;
export const jwtTokenSelector = (state) => state.authReducer.jwtToken;
export const currentUserSelector = (state) => state.authReducer.currentUser;
