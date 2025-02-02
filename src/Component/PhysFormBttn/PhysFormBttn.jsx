import React, { useState } from 'react'
import Cookies from 'js-cookie';
import { useGlobalState } from '../../Context/Context';
import { signup } from '../../Services/auth';
import { Spin } from 'antd';
function PhysFormBttn() {
    const { phyFormData, userToken, userId } = useGlobalState();
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        let name = phyFormData.firstName + " " + phyFormData.lastName;
        const obj = {
            name,
            email: phyFormData.email,
            password: phyFormData.password,
            classType: "physical",
            phone: phyFormData.phone
        }
        try {
            const response = await signup(obj)
            if (response.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Create acocunt!",
                    showConfirmButton: false,
                    timer: 1500
                }).then((result) => {
                    if (result) {
                        if (!userToken && !userId) {
                            Cookies.set("authToken", response.data.token.token, { expires: 365 });
                            Cookies.set("userId", response.data.id, { expires: 365 });
                            navigate('/')
                            window.location.reload()
                        } else {
                            navigate('/')
                            window.location.reload()
                        }
                    }
                })
            }
        } catch (error) {
            setLoading(false)
        } finally {
            setLoading(faalse)
        }

    };
    return (
        <div className="row mt-4">
            <button type="submit" className="bttn fw-semibold" id="createAccount" onClick={handleSubmit}>
               {loading? <Spin/>:"Submit Physical Form"} 
            </button>
        </div>
    )
}

export default PhysFormBttn