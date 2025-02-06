import React, { useState } from 'react';
import { useGlobalState } from '../../Context/Context';
import { Spin } from 'antd';
import Swal from 'sweetalert2';
import { physicalForm } from '../../Services/physical.services';
import { useNavigate } from 'react-router-dom';

function PhysFormBttn() {
    const { phyFormData } = useGlobalState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Check if all fields are filled
    const isFormValid = () => {
        return (
            phyFormData.name &&
            phyFormData.email &&
            phyFormData.phone &&
            phyFormData.address &&
            phyFormData.course &&
            phyFormData.dob &&
            phyFormData.qualification &&
            phyFormData.country &&
            phyFormData.city
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation check
        if (!isFormValid()) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please fill out all fields",
                showConfirmButton: true,
            });
            return;
        }

        setLoading(true);

        const obj = {
            name: phyFormData.name,
            email: phyFormData.email,
            phone: phyFormData.phone,
            address: phyFormData.address,
            course: phyFormData.course,
            dateofbirdth: phyFormData.dob,
            lastqualification: phyFormData.qualification,
            computerProficiency: phyFormData.proficiency,
            doyouhavelaptop: phyFormData.laptop,
            country: phyFormData.country,
            city: phyFormData.city,
        };

        try {
            const response = await physicalForm(obj);
            if (response.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Account Created!",
                    showConfirmButton: false,
                    timer: 1500
                }).then((result) => {
                    if (result) {
                        navigate("/t");
                    }
                });
            }
        } catch (error) {
            console.error("Signup Error: ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="row mt-4">
            <button
                type="submit"
                className="bttn fw-semibold"
                id="createAccount"
                onClick={handleSubmit}
                disabled={!isFormValid() || loading}
            >
                {loading ? <Spin /> : "Submit Physical Form"}
            </button>
        </div>
    );
}

export default PhysFormBttn;
