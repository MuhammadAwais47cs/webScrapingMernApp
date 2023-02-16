import React from 'react'
import Footer from '../layout/footer/Footer'
import Header from '../layout/header/header'

function ContactUs() {
    return (
        <>
        <section className='bg-light '>
        <Header/>
         <div className='bg-danger-subtle py-4 mt-5'>
         <h1 className='text-center pt-5 mt-2 text-danger'>Got any Questions? We’d love to hear.

         </h1>
         <p className='text-center pb-3 pt-2'>
         Whether you’re curious about our service, your order status, or returns – we’re ready to answer any and all questions
         </p>   
         </div>   
        <div className="d-flex flex-row justify-content-center py-2 ">
        <div className="col-md-4 mt-5">
        <div className='px-5'>
            <h2 className='py-5'>Contact Details</h2>
            <p>
            pakistan —
            </p>
            <p>
            5535 balboa blvd Encino CA
            </p>
            
            <h4 className=' mt-5 mb-4'>
            +92 020 0780090
            </h4>
            <p >
            info@shoppingmall.com
            </p>
        </div>
        </div>
        <div className="col-md-8">
        <form className="row g-3 pt-5 ">
        <h2 className='py-5' >Contact Form</h2>
        <div className="col-md-6">
         <label for="inputEmail4" className="form-label">First name</label>

        <input type="text" className="form-control" placeholder="" aria-label="First name"/>
      </div>
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label">Last name</label>

        <input type="text" className="form-control" placeholder="" aria-label="Last name"/>
      </div>
    <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-md-12">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <div className="col-12">
    <button type="submit" className="btn btn-outline-danger rounded-pill">Get In Touch</button>
  </div>
</form>
        </div>
        
        </div>
        <Footer/>
        </section>
        </>
    )
}

export default ContactUs
