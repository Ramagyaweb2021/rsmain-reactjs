import { Tab, Tabs } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import PartnershipInfoWithDetail from './PartnershipInfoWithDetail';

const PartnershipTabination = () => {
  return (
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <Tabs defaultActiveKey="Overseas Educational Partnership" id="class-tabs" className="mb-3" fill>
        <Tab eventKey="Overseas Educational Partnership" title="Partnership">
          <div className="p-3">
              <p>Education is not an isolated experience but an interactive endeavor that takes place over the course of a person’s life. When the community, schools, and families work together, they can provide the best possible resources and expertise to enhance the education of all children. Therefore, it is a collective responsibility of many groups to educate children. So, Ramagya has joined hands with globally acclaimed and famed universities and organizations, who share the common goal of enhancing student learning. The collaborations have been made with a commitment to enriching educational experiences for the students. Ramagya aims at providing the best education possible for the students and hence has included partners for enhancing public relations. Ramagya understands that partnerships are essential when working with students with special needs and their families. Teachers, service providers, and families need to work together to support the child’s home and school environment and create an individual education plan that outlines instructional and behavioral strategies to promote optimum learning and achievement.</p>
              <PartnershipInfoWithDetail/>
          </div>
        </Tab>
        {/* <Tab eventKey="Sports Partnership" title="Sports Partnership">
          <div className="p-3">
          Sports Partnership
          </div>
        </Tab>
        <Tab eventKey="Health Partnership" title="Health Partnership">
          <div className="p-3">
        
          Health Partnership
          </div>
        </Tab>
        <Tab eventKey="Global Collaborations Early Years" title="Global Collaborations Early Years">
          <div className="p-3">
         
          Global Collaborations Early Years
          </div>
        </Tab>
        <Tab eventKey="Music Partnership" title="Music Partnership">
          <div className="p-3">
          Music Partnership

          </div>
        </Tab>
        <Tab eventKey="Technology Partners" title="Technology Partners">
          <div className="p-3">
          Technology Partners

          </div>
        </Tab>
       */}
      
      </Tabs>
    </div>
  );
};

export default PartnershipTabination;
