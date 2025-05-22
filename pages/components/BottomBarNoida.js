import React from 'react'
import Image from 'next/image';
const BottomBarNoida = () => {
  return (
    <>
  <section className="fixed-btns-appbar d-block d-sm-none">
  <div className="col-lg-5 col-xl-4">
    <ul className="d-flex justify-content-center list-unstyled mb-0">
      <li className="ps-3 border-end border-white-50">
        <a href="#" className="enqBtn">
        <Image
            src="https://resources.edunexttechnologies.com/web-data/edunext-demo/images/admission-final-newer.svg"
            alt="Admission"
            height={100} // ✅ numeric only
            width={100}  // ✅ you should also set width
          />

        </a>
      </li>
      <li className="border-end border-white-50">
        <a
          href="https://ramagyanoida.edunexttechnologies.com/DirectStudentOnlineFee"
          target="_blank"
        >
          <Image
            src="https://resources.edunexttechnologies.com/web-data/edunext-demo/images/pay-final-newer.svg"
            alt=""
             height={100} // ✅ numeric only
            width={100}  // ✅ you should also set width
          />
        </a>
      </li>
      <li className="pe-3">
        <a href="https://ramagyanoida.edunexttechnologies.com/Index" target="_blank">
          <Image
            src="https://resources.edunexttechnologies.com/web-data/edunext-demo/images/edunext-login-newer.svg"
            alt=""
            height={100} // ✅ numeric only
            width={100}  // ✅ you should also set width
          />
        </a>
      </li>
    </ul>
  </div>
</section>

    </>
  )
}

export default BottomBarNoida