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
        <form class="row g-3 pt-5 ">
        <h2 className='py-5' >Contact Form</h2>
        <div class="col-md-6">
         <label for="inputEmail4" class="form-label">First name</label>

        <input type="text" class="form-control" placeholder="" aria-label="First name"/>
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Last name</label>

        <input type="text" class="form-control" placeholder="" aria-label="Last name"/>
      </div>
    <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-12">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <div class="col-12">
    <button type="submit" class="btn btn-outline-danger rounded-pill">Get In Touch</button>
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
