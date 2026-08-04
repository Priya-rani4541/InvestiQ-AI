import "./UploadCard.css";

import { useRef, useState } from "react";

import {
    uploadPDF,
    getIndexStatus,
} from "../../services/rag.service";

const UploadCard = () => {

    const inputRef = useRef(null);

    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState("");

    const [fileName, setFileName] = useState("");

    const handleSelect = () => {

        inputRef.current.click();

    };

    const pollStatus = async (documentId) => {

        const interval = setInterval(async () => {

            try {

                const response = await getIndexStatus(documentId);

                const currentStatus = response.status;

                setStatus(currentStatus);

                if (
                    currentStatus === "COMPLETED" ||
                    currentStatus === "FAILED"
                ) {

                    clearInterval(interval);

                    setLoading(false);

                }

            }

            catch (error) {

                console.error(error);

                clearInterval(interval);

                setLoading(false);

            }

        }, 3000);

    };

    const handleUpload = async (event) => {

        const file = event.target.files[0];

        if (!file) return;

        setFileName(file.name);

        try {

            setLoading(true);

            setStatus("UPLOADING");

            const result = await uploadPDF(file);

            const documentId = result.document._id;

            setStatus("PROCESSING");

            pollStatus(documentId);

        }

        catch (error) {

            console.error(error);

            setLoading(false);

            setStatus("FAILED");

            alert(

                error.response?.data?.message ||

                "Upload Failed"

            );

        }

    };

    return (

        <section className="upload-card">

            <h3>

                Upload Annual Report

            </h3>

            <p>

                {

                    fileName ||

                    "Choose Annual Report PDF"

                }

            </p>

            <button

                onClick={handleSelect}

                disabled={loading}

            >

                {

                    loading

                        ? "Please Wait..."

                        : "Choose PDF"

                }

            </button>

            <input

                ref={inputRef}

                type="file"

                hidden

                accept=".pdf"

                onChange={handleUpload}

            />

            {

                status && (

                    <div className="upload-status">

                        <strong>Status :</strong> {status}

                    </div>

                )

            }

        </section>

    );

};

export default UploadCard;