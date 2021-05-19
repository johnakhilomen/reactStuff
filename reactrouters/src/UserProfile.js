import React, {useState} from "react";
import { useParams } from "react-router-dom";

export default function UserProfile() {
    const employees = [
        {
        "userId":"rirani",
        "jobTitleName":"Developer",
        "firstName":"Romin",
        "lastName":"Irani",
        "preferredFullName":"Romin Irani",
        "employeeCode":"E1",
        "region":"CA",
        "phoneNumber":"408-1234567",
        "emailAddress":"romin.k.irani@gmail.com"
        },
        {
        "userId":"nirani",
        "jobTitleName":"Developer",
        "firstName":"Neil",
        "lastName":"Irani",
        "preferredFullName":"Neil Irani",
        "employeeCode":"E2",
        "region":"CA",
        "phoneNumber":"408-1111111",
        "emailAddress":"neilrirani@gmail.com"
        },
        {
        "userId":"thanks",
        "jobTitleName":"Program Directory",
        "firstName":"Tom",
        "lastName":"Hanks",
        "preferredFullName":"Tom Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"408-2222222",
        "emailAddress":"tomhanks@gmail.com"
        }
        ];

    const [data, setData] = useState(employees);
    const {id} = useParams(); 
    const currentUser = data.find((user) => user.userId === id);
    const {jobTitleName, 
        firstName, 
        lastName, 
        phoneNumber, 
        emailAddress
    } = currentUser;
    return (
        <div>
            {id}
            {
                <div>
                <p>Firstname: {firstName}</p>
                <p>Lastname: {lastName}</p>
                <p>PhoneNumber: {phoneNumber}</p>
                <p>emailAddress: {emailAddress}</p>
                </div>
            }
        </div>
    );
}
