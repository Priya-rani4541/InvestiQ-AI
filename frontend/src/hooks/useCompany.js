import { useContext } from "react";

import { CompanyContext } from "../context/CompanyContext";

const useCompany = () => {

    return useContext(CompanyContext);

};

export default useCompany;