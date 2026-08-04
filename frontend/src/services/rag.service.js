import api from "./api";

export const uploadPDF = async (file) => {

    const formData = new FormData();

    formData.append("pdf", file);

    const response = await api.post(

        "/rag/upload",

        formData,

        {

            headers: {

                "Content-Type": "multipart/form-data",

            },

        }

    );

    return response.data.data;

};

export const getIndexStatus = async (documentId) => {

    const response = await api.get(

        `/rag/status/${documentId}`

    );

    return response.data.data;

};