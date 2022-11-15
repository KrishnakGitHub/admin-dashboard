import React, { useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavLink,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Sidebar(props) {
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
        <AccordionItem>
          <AccordionHeader targetId="1"><i class="bi bi-house-door-fill"></i> Dashboard</AccordionHeader>
          <AccordionBody accordionId="1">
          <NavItem>
            <NavLink href="/">Dashboard</NavLink>
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
      </Accordion>
    </Nav>
    </Router>
  );
}

export default Sidebar;