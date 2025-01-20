import React from "react";
import { useParams } from "react-router-dom";
export default function Profile() {
  const params = useParams();
  const uid = params.id
  return <div>Profile of user {uid}</div>;
}
