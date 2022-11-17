import React, { useState, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

import {
  Nav,
  NavItem,
  NavLink,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
const Sidebar = () => {
  let {user, logoutUser} = useContext(AuthContext)
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Router>
    <Nav vertical>
      <Accordion open={open} toggle={toggle}>
        <NavItem>
          {user &&   <p>Hello {user.username}</p>}
        </NavItem>
        <AccordionItem>
          <AccordionHeader targetId="1"><i class="bi bi-house-door-fill"></i> Dashboard</AccordionHeader>
          <AccordionBody accordionId="1">
          <NavItem>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </NavItem>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2"><i class="bi bi-lightning-fill"></i> Project</AccordionHeader>
          <AccordionBody accordionId="2">
          <NavItem>
            <NavLink href="/project">Project</NavLink>
          </NavItem>
          <NavItem><NavLink href="/project-details">Project Details</NavLink></NavItem>
          <NavItem><NavLink href="/new-project">New Project</NavLink></NavItem>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3"><i class="bi bi-person-fill"></i> Client</AccordionHeader>
          <AccordionBody accordionId="3">
          <NavItem>
            <NavLink href="/mc">Manager Client</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/clnt">Client Details</NavLink>
          </NavItem>
          </AccordionBody>
        </AccordionItem>
        <NavItem>
        {user ? (
          <button className='btn btn-primary mt-2' onClick={logoutUser}>Logout</button>
          ): (
            <NavLink href="/login" >Login</NavLink>
        )}
        </NavItem>
      </Accordion>
    </Nav>
    </Router>
  );
}

export default Sidebar;