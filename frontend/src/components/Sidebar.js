import React, { useState } from 'react';
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
    <Nav vertical>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1"><i class="bi bi-house-door-fill"></i> Dashboard</AccordionHeader>
          <AccordionBody accordionId="1">
          <NavItem>
            <NavLink href="/">
              Dashboard
            </NavLink>
          </NavItem>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2"><i class="bi bi-lightning-fill"></i> Project</AccordionHeader>
          <AccordionBody accordionId="2">
          <NavLink href="/project">
              Project
            </NavLink>
            <NavLink href="/project-details">
              Project Details
            </NavLink>
            <NavLink href="/new-project">
              New Project
            </NavLink>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3"><i class="bi bi-person-fill"></i> Client</AccordionHeader>
          <AccordionBody accordionId="3">
          <NavItem>
            <NavLink href="/mc">
              Manager Client
            </NavLink>
            <NavLink href="/clnt">
              Client Details
            </NavLink>
          </NavItem>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </Nav>
  );
}

export default Sidebar;