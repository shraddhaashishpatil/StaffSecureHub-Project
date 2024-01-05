import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { Emp } from "../api/emp";

function TableViewer() {

    // Navigate to empRegister Page
    const history = useNavigate();

    // save the (result) in empData 
    const [empData, setEmpData] = useState([]);

    // call api for get method
    const fetchData = async (data) => {
        const response = await Emp.getall(data);
        console.log(data);

        // check if the API call was successfull
        if (response.result) {

            //update the state with the fetched data 
            setEmpData(response.result.data);
        } else {
            // Handle the error, you can log it or show message to the user
            console.log("Error fetching data: ", response.result);
        }
    }

    useEffect(() => {
        // Call the api when the component mount
        fetchData();
    }, []);

    // Navigate to EmpRegister Page
    const handleAddEmp = () => {
        history("/empRegister");
    }

    // Navigate to employee Update Form Page
    const handleEditEmp = (employee) => {
        // check data is coming or not 
        console.log(employee);
        history("/updateEmp", { state: employee });
    };

    // for delete data 
    const handleDeleteEmp = async (employee) => {
        //check data is coming or not
        console.log(employee);

        // Call the delete API
        const response = await Emp.delete(employee.empId);

        if(response.result){
            //Id deletion is successfull, fetch update data
            console.log("deleted successfully");
            fetchData(); 
        } else {
            console.log("Error deleting employee: ", response.result)
        } 
    }
 
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <p className="empDetails">Employee Details</p>
                    </div>
                    <div className="col-md-4"></div>
                    <div className=" col-md-3 input-container">
                        <input type="text" placeholder="Search..." className="search-input" />
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary addNew-mt" onClick={handleAddEmp}>
                            <i className="fa fa-plus" aria-hidden="true"></i>&nbsp;
                            Add New
                        </button>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div>
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">EmpId</th>
                                    <th scope="col">EmpFirstName</th>
                                    <th scope="col">EmpLastName</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">BirthDate</th>
                                    <th scope="col">IsEmpActive</th>
                                    <th scope="col">HireDate</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">CountryCode</th>
                                    <th scope="col">PhoneNumber</th>
                                    <th scope="col">OfficeLocation</th>
                                    <th scope="col">BankAccountNo</th>
                                    <th scope="col">IfscCode</th>
                                    <th scope="col">AadharCardNo</th>
                                    <th scope="col">PanCardNo</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Map through the empData to render rows*/}
                                {empData.map((employee) => (

                                    <tr key={employee.empId}>
                                        <th scope="row">{employee.empId}</th>
                                        <td>{employee.empFirstName}</td>
                                        <td>{employee.empLastName}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.city}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.password}</td>
                                        <td>{employee.birthDate}</td>
                                        <td>{employee.empActive ? 1 : 0}</td>
                                        <td>{employee.hireDate}</td>
                                        <td>{employee.country}</td>
                                        <td>{employee.countryCode}</td>
                                        <td>{employee.phoneNumber}</td>
                                        <td>{employee.officeLocation}</td>
                                        <td>{employee.bankAccountNo}</td>
                                        <td>{employee.ifscCode}</td>
                                        <td>{employee.aadharCardNo}</td>
                                        <td>{employee.panCardNo}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-success"
                                                onClick={() => handleEditEmp(employee)}
                                            >Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => handleDeleteEmp(employee)}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
export default TableViewer
