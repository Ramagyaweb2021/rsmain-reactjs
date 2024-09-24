import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SchoolCard = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center wow animate__animated animate__bounce" style={{ animationDelay: '0.3s' }}>OUR CAMPUSES</h2>
      <div className="row g-3 mt-3">
        {/* Noida */}
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card school-card h-100">
            <Image src="/images/rs-noida-branch.png" className="card-img-top img-fluid" alt="Ramagya School Noida" width={522} height={255} />
            <div className="card-body">
              {/* <h5 className="card-title">Noida</h5> */}
              {/* <p className="card-text">
                Ramagya School, Noida takes immense pleasure to announce that the school has been
                recently honoured with the #3 position in Noida.
              </p> */}
              <div className="d-flex justify-content-between">
                <Link href="https://ramagyaschool.com/" target='_blank' className="btn btn-warning">Noida Website</Link>
                <Link href="https://vtour.ramagyaschool.com/" target='_blank' className="btn btn-warning wow animate__animated animate__fadeIn">360 Tour</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Noida Extension */}
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card school-card h-100">
            <Image src="/images/rs-noida-ext-branch.png" className="card-img-top img-fluid" alt="ramagya school noida extension" width={522} height={255} />
            <div className="card-body">
              {/* <h5 className="card-title">Noida Extension</h5> */}
              {/* <p className="card-text">
                Ramagya School, Noida takes immense pleasure to announce that the school has been
                recently honoured with the #3 position in Noida.
              </p> */}
              <div className="d-flex justify-content-between">
                <Link href="https://ramagyaschool.com/noida-extension" target='_blank' className="btn btn-warning">Noida Ext Website</Link>
                <Link href="https://vtourext.ramagyaschool.com/" target='_blank' className="btn btn-warning wow animate__animated animate__fadeIn">360 Tour</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Greater Noida */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card school-card h-100 wow animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}>
            <Image src="/images/rs-gnoida-branch.png" className="card-img-top img-fluid" alt="ramagya school greater noida" width={550} height={285} />
            <div className="card-body">
              {/* <h5 className="card-title">Greater Noida</h5> */}
              {/* <p className="card-text">
                Ramagya School, Noida takes immense pleasure to announce that the school has been
                recently honoured with the #3 position in Noida.
              </p> */}
              <div className="d-flex justify-content-between">
                <Link href="https://ramagyaschool.com/gnoida" target='_blank' className="btn btn-warning">Greater Noida Website</Link>
                <Link href="https://vtourgnoida.ramagyaschool.com/" target='_blank' className="btn btn-warning wow animate__animated animate__fadeIn">360 Tour</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Dadri */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card school-card h-100 wow animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}>
            <Image src="/images/rs-dadri-branch.png" className="card-img-top img-fluid" alt="ramagya school noida dadri" width={550} height={336} />
            <div className="card-body">
              {/* <h5 className="card-title">Dadri</h5> */}
              {/* <p className="card-text">
                Ramagya School, Noida takes immense pleasure to announce that the school has been
                recently honoured with the #3 position in Noida.
              </p> */}
              <div className="d-flex justify-content-between">
                <Link href="https://ramagyaschool.com/dadri" target='_blank' className="btn btn-warning">Dadri Website</Link>
                <Link href="https://tourdadri.ramagyaschool.com/" target='_blank' className="btn btn-warning wow animate__animated animate__fadeIn">360 Tour</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Ramagya Roots */}
        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
          <div className="card school-card h-100 wow animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}>
            <Image src="/images/rs-roots-branch.png" className="card-img-top img-fluid" alt="ramagya school roots" width={550} height={285} />
            <div className="card-body">
              {/* <h5 className="card-title">Ramagya Roots</h5> */}
              {/* <p className="card-text">
                Ramagya School, Noida takes immense pleasure to announce that the school has been
                recently honoured with the #3 position in Noida.
              </p> */}
              <div className="d-flex justify-content-between">
                <Link href="https://ramagyaroots.com/" target='_blank' className="btn btn-warning">Ramagya Roots Website</Link>
                <Link href="https://vtour.ramagyaroots.com/" target='_blank' className="btn btn-warning wow animate__animated animate__fadeIn">360 Tour</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SchoolCard;