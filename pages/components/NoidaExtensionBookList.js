import { Tab, Tabs, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

const NoidaBookList = () => {
  return (
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <Tabs defaultActiveKey="Nursery" id="class-tabs" className="mb-3" fill>
        <Tab eventKey="Nursery" title="Nursery">
          <div className="p-3">
            <Button 
              variant="btn custom-btn" 
              href="/images/noida-extension/books/nursery.pdf" 
              target="_blank" 
              rel="noopener noreferrer">
              View Nursery Booklist
            </Button>
          </div>
        </Tab>
        <Tab eventKey="K1" title="K1">
          <div className="p-3">
            <Button 
              variant="btn custom-btn" 
              href="/images/noida-extension/books/KG-1.pdf" 
              target="_blank" 
              rel="noopener noreferrer">
              View K1 Booklist
            </Button>
          </div>
        </Tab>
        <Tab eventKey="K2" title="K2">
          <div className="p-3">
            <Button 
              variant="btn custom-btn" 
              href="/images/noida-extension/books/KG-2.pdf" 
              target="_blank" 
              rel="noopener noreferrer">
              View K2 Booklist
            </Button>
          </div>
        </Tab>
        <Tab eventKey="1st" title="1st">
          <div className="p-3">
            <Button 
              variant="btn custom-btn" 
              href="/images/noida-extension/books/Grade-1.pdf" 
              target="_blank" 
              rel="noopener noreferrer">
              View 1st Grade Booklist
            </Button>
          </div>
        </Tab>
        <Tab eventKey="2nd" title="2nd">
          <div className="p-3">
            <Button 
              variant="btn custom-btn" 
              href="/images/noida-extension/books/Grade-2.pdf" 
              target="_blank" 
              rel="noopener noreferrer">
              View 2nd Grade Booklist
            </Button>
          </div>
        </Tab>
        <Tab eventKey="3rd" title="3rd">
          <div className="p-3">
            <Button 
              variant="btn custom-btn" 
              href="/images/noida-extension/books/Grade-3.pdf" 
              target="_blank" 
              rel="noopener noreferrer">
              View 3rd Grade Booklist
            </Button>
          </div>
        </Tab>
        <Tab eventKey="4th" title="4th">
          <div className="p-3">
            <Button 
              variant="btn custom-btn" 
              href="/images/noida-extension/books/Grade-4.pdf" 
              target="_blank" 
              rel="noopener noreferrer">
              View 4th Grade Booklist
            </Button>
          </div>
        </Tab>
        <Tab eventKey="5th" title="5th">
          <div className="p-3">
            <Button 
              variant="btn custom-btn" 
              href="/images/noida-extension/books/Grade-5.pdf" 
              target="_blank" 
              rel="noopener noreferrer">
              View 5th Grade Booklist
            </Button>
          </div>
        </Tab>
        <Tab eventKey="6th" title="6th">
          <div className="p-3">
            <Button 
              variant="btn custom-btn" 
              href="/images/noida-extension/books/Grade-6.pdf" 
              target="_blank" 
              rel="noopener noreferrer">
              View 6th Grade Booklist
            </Button>
          </div>
        </Tab>
        <Tab eventKey="7th" title="7th">
          <div className="p-3">
            <Button 
              variant="btn custom-btn" 
              href="/images/noida-extension/books/Grade-7.pdf" 
              target="_blank" 
              rel="noopener noreferrer">
              View 7th Grade Booklist
            </Button>
          </div>
        </Tab>
        <Tab eventKey="8th" title="8th">
          <div className="p-3">
            <Button 
              variant="btn custom-btn" 
              href="/images/noida-extension/books/Grade-8.pdf" 
              target="_blank" 
              rel="noopener noreferrer">
              View 8th Grade Booklist
            </Button>
          </div>
        </Tab>
        <Tab eventKey="9th" title="9th">
          <div className="p-3">
            <Button 
              variant="btn custom-btn" 
              href="/images/noida-extension/books/Grade-9.pdf" 
              target="_blank" 
              rel="noopener noreferrer">
              View 9th Grade Booklist
            </Button>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default NoidaBookList;
