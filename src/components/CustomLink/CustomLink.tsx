import React from 'react';
import { Link } from "react-router-dom";

export const CustomLink = (props: any) => <Link to={`/users/${props.id}`} {...props}/>
