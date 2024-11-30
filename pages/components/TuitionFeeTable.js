import React from 'react';

const TuitionFeeTable = () => {
  const competitions = [
    {
      title: 'Any International Competition recognized by the federations or recognized and funded by Ministry of Youth Affairs and Sports.',
      type: 'INTERNATIONAL INDIVIDUAL / TEAM',
      levels: [
        { medal: 'Gold', fee: '100%' },
        { medal: 'Silver', fee: '100%' },
        { medal: 'Bronze', fee: '100%' },
        { medal: 'Participated', fee: '100%' },
      ],
    },
    {
      title: 'Any National Level Competition recognized by the federations or recognized and funded by Ministry of Youth Affairs and Sports.',
      type: 'NATIONAL INDIVIDUAL / TEAM',
      levels: [
        { medal: 'Gold', fee: '100%' },
        { medal: 'Silver', fee: '90%' },
        { medal: 'Bronze', fee: '80%' },
        { medal: 'Participated', fee: '50%' },
      ],
    },
    {
      title: 'Any State Level Competition recognized by the federations or recognized and funded by Ministry of Youth Affairs and Sports.',
      type: 'STATE INDIVIDUAL / TEAM',
      levels: [
        { medal: 'Gold', fee: '80%' },
        { medal: 'Silver', fee: '70%' },
        { medal: 'Bronze', fee: '60%' },
        { medal: 'Participated', fee: '20%' },
      ],
    },
    {
      title: 'Any CBSE Cluster Competition in recognized game.',
      type: 'INTERNATIONAL INDIVIDUAL / TEAM',
      levels: [
        { medal: 'Gold', fee: '100%' },
        { medal: 'Silver', fee: '100%' },
        { medal: 'Bronze', fee: '100%' },
        { medal: 'Participated', fee: '100%' },
      ],
    },
  ];

  return (
    <section className="container-fluid fee-procedure-section my-5">
      <div className="container my-5">
        <div className="row">
          {competitions.map((comp, index) => (
            <div key={index} className="col-md-6 mb-4">
              <h6 className="card-title-fee-table text-center">{comp.title}</h6>
              <div className="card shadow-sm">
                <div className="card-body-fee-table">
                  {/* <h5 className="text-center font-weight-bold mt-3 mb-4">{comp.type}</h5> */}
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                      <h6 className="text-center font-weight-bold mt-3 mb-4">INTERNATIONAL <br/> INDIVIDUAL / TEAM</h6>
                      <h6 className="text-center font-weight-bold mt-3 mb-4">TUITION <br/> FEE</h6>
                    </li>
                    {comp.levels.map((level, idx) => (
                      <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{level.medal}</span>
                        <span>{level.fee}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TuitionFeeTable;
