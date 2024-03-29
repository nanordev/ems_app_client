import React from "react";
import { useNavigate } from "react-router-dom";
import AvatarGroup from "../AvatarGroup/AvatarGroup";

import "./DepartmentCard.css";
const DepartmentCard = ({ department }) => {
  const navigate = useNavigate();

  const colorsArray = [
    "primary",
    "purple",
    "pink",
    "orange",
    "green",
    "yellow",
    "red",
  ];

  const generateRandomColor = (colors) => {
    return colors[Math.floor(Math.random() * 7)];
  };
  return (
    <div className="DepartmentCard" key={department._id + "departmentcard"}>
      <div className="left">
        <div
          className={"cp circle " + generateRandomColor(colorsArray)}
          onClick={() => navigate(`${department._id}`)}
        >
          <h1>{department.name ? department.name.substr(0, 1) : "U"}</h1>
        </div>
      </div>

      <div className="right">
        <div className="detail">
          <h2 className="cp" onClick={() => navigate(`${department._id}`)}>
            <b>{department.name ? department.name : "Unknown"}</b>
          </h2>
        </div>
        <div className="detail">
          <p>Head of Department:</p>
          <p>
            <b>{department.hod ? department.hod : "Unknown"}</b>
          </p>
        </div>
        <div className="detail">
          <p>Status:</p>
          {department._id ? (
            <p>
              <b className="success">Active</b>
            </p>
          ) : (
            <p>
              <b className="danger">Inactive</b>
            </p>
          )}
        </div>
        <div className="detail">
          <p>Members:</p>
          <p>
            <b>{department.members.length}</b>
          </p>
        </div>

        <AvatarGroup members={department.members} />
      </div>
    </div>
  );
};

export default DepartmentCard;
