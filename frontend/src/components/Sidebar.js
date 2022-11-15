import React, { useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import ProjectPage from '../pages/ProjectPage';
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
            {/* <Link to="/">Dashboard</Link> */}
          </NavItem>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2"><i class="bi bi-lightning-fill"></i> Project</AccordionHeader>
          <AccordionBody accordionId="2">
          <NavItem>
            {/* <Link to="/project">Project</Link> */}
          </NavItem>
          {/* <NavItem><Link to="/project-details">Project Details</Link></NavItem> */}
          {/* <NavItem><Link to="/new-project">New Project</Link></NavItem> */}
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3"><i class="bi bi-person-fill"></i> Client</AccordionHeader>
          <AccordionBody accordionId="3">
          <NavItem>
            {/* <Link to="/mc">Manager Client</Link> */}
          </NavItem>
          <NavItem>
            {/* <Link to="/clnt">Client Details</Link> */}
          </NavItem>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </Nav>
    </Router>
  );
}

export default Sidebar;