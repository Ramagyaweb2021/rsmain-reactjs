const books = {
 'Toddlers': 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/pdf/noida-book-list/Toddler.pdf',
  'Nursery': 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/pdf/noida-book-list/nursery.pdf',
  'K1': 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/pdf/noida-book-list/k1.pdf',
  'K2': 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/pdf/noida-book-list/k2.pdf',
  'I': 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/pdf/noida-book-list/grade1.pdf',
  'II': 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/pdf/noida-book-list/grade2.pdf',
  'III': 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/pdf/noida-book-list/class-lll.pdf',
  'IV': 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/pdf/noida-book-list/class-lV.pdf',
  'V': 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/pdf/noida-book-list/Class-V.pdf',
  'VI': 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/pdf/noida-book-list/Class-VI.pdf',
  'VII': 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/pdf/noida-book-list/Class-VII.pdf',
  'VIII': 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/pdf/noida-book-list/Class-VIII.pdf',
  'IX': 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/pdf/noida-book-list/Class-IX.pdf',
  'X': 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/pdf/noida-book-list/Class-X.pdf',
  'XI': 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/pdf/noida-book-list/Class-XI.pdf',
  'XII': 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/pdf/noida-book-list/Class-XII.pdf',
};

const BookList = () => {
  return (
    <div className="container mt-1">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card shadow-lg border-0 rounded-4 p-4">
            <h4 className="text-center text-black mb-4">Download the class-wise book list.</h4>
            <ul className="list-group">
              {Object.entries(books).map(([cls, pdfUrl], index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center bg-light border-0 shadow-sm mb-2 rounded-3 p-3">
                  <span className="fw-bold text-dark">{cls}</span>
                  <div>
                    {/* <a href={pdfUrl} className="me-3 text-primary fs-5" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-eye"></i>
                    </a> */}
                    <a href={pdfUrl} className="text-danger fs-5" target="_blank" rel="noopener noreferrer" download>
                      <i className="bi bi-download"></i>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
