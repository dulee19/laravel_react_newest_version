import React from 'react'
import { MdCorporateFare } from 'react-icons/md'
import { BiSolidLocationPlus, BiSolidCity } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import Iframe from 'react-iframe'

const Contact = () => {
  return (
    <div className='contact my-4'>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-6 col-xs-12">
            <h4>Adresa</h4>
            <ul className='list-inline gap-2 d-flex flex-column shadow-sm p-3'>
              <li className='d-flex gap-2 align-items-center'>
                <MdCorporateFare />
                Tico Computers
              </li>
              <li className='d-flex gap-2 align-items-center'>
                <BiSolidLocationPlus />
                Šumadijska 1,
                18000 Niš,
                Srbija
              </li>
              <li className='d-flex gap-2 align-items-center'>
                <BiSolidCity />
                Niš
              </li>
              <li className='d-flex gap-2 align-items-center'>
                <BsFillTelephoneFill />
                <a href="tel:+381 18 514 446">+381 18 514 446</a> , <br />
                <a href="tel:+381 63 308800">+381 63 308800</a>
              </li>

              <li className='d-flex gap-2 align-items-center'>
                <AiOutlineMail />
                <a href="mailto:info@selltico.com">
                  info@selltico.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-7 col-sm-6 col-xs-12">
            <h4>Kontakt</h4>
            <div className="shadow-sm p-3">
              <form>
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <input type="text" name="name" placeholder='Ime i prezime' className='form-control' />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <input type="email" name="email" placeholder='E-mail' className='form-control' />
                    </div>
                  </div>
                  <div className="col-xs-12 my-4">
                    <textarea name="message" id="" placeholder="Unesite Vašu poruku" className='form-control' cols="10" rows="5"></textarea>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12">
                    <Iframe 
                      url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.8006655759837!2d21.875726776594213!3d43.31843207401768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b1bd9adbbfb3%3A0x132fb011a5463ccd!2sSelltico!5e0!3m2!1sen!2srs!4v1697537763200!5m2!1sen!2srs'
                      width='100%'
                      height='320px'
                      display='block'
                    />
                  </div>
                </div>

                <input type="submit" className='btn btn-block btn-danger mt-3 w-100' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact