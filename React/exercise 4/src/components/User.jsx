import React, { useRef, useEffect } from "react";
import useFetch from "use-http";

const User = () => {
  const myUsername = useRef(null);
  const myEmail = useRef(null);
  const myWebsite = useRef(null);
  const myAddress = useRef(null);
  const myPhone = useRef(null);
  const myCompany = useRef(null);

  useEffect(() => {
    alert("Hello! Are you ready to see my exercise?🦄");
  }, []);

  const {
    loading,
    error,
    data = [],
  } = useFetch("https://jsonplaceholder.typicode.com/users", []);

  const aboutUser = (username, email, address, phone, website, company) => {
    myUsername.current.textContent = `Username: ${username}`;
    myEmail.current.textContent = `Email: ${email}`;
    myAddress.current.textContent = `Address: ${address}`;
    myPhone.current.textContent = `Phone: ${phone}`;
    myWebsite.current.textContent = `Website: ${website}`;
    myCompany.current.textContent = `Company: ${company}`;
  };

  return (
    <>
      <div className="left">
        <div className="title left-title">Users</div>
        <ul className="users">
          {error && "Error! :("}
          {loading && "Loading..."}
          {data.map((user) => (
            <li
              className="user"
              key={user.id}
              onClick={() =>
                aboutUser(
                  user.username,
                  user.email,
                  `${user.address.city}, ${user.address.street}`,
                  user.phone,
                  user.website,
                  user.company.name
                )
              }
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        <div className="title right-title">Information</div>
        <ul className="users right-users">
          <li ref={myUsername} className="user user-information">
            Username:
          </li>
          <li ref={myEmail} className="user user-information">
            Email:
          </li>
          <li ref={myAddress} className="user user-information">
            Address:
          </li>
          <li ref={myWebsite} className="user user-information">
            Website:
          </li>
          <li ref={myCompany} className="user user-information">
            Company:
          </li>
          <li ref={myPhone} className="user user-information">
            Phone:
          </li>
        </ul>
      </div>
    </>
  );
};

export default User;
