import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: {},
    companies: [],
    searchCompanyByText: "",
    allCompanies: [],
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    searchCompanyByText: (state, action) => {
      state.searchCompanyByText = action.payload;
    },
    setAllCompanies: (state, action) => {
      state.allCompanies = action.payload;
    },
  },
});

export const { setSingleCompany, setCompanies, searchCompanyByText, setAllCompanies } = companySlice.actions;

export default companySlice.reducer;

export { companySlice };
