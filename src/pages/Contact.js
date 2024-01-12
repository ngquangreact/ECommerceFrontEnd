import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { 
    IoHomeOutline,
    IoCallOutline,
    IoMailOutline,
    IoInformationCircleOutline
} from "react-icons/io5";
const Contact = () => {
    return (
        <>
            <Meta title="Contact Us"/>
            <BreadCrumb title="Contact Us"/>
            <div className="contact-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14894.281079557233!2d105.75509181380848!3d21.049873865539414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c4a7c60651%3A0xbec6bd3e12f90b7!2zUGjDuiBEaeG7hW4sIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1705046100418!5m2!1svi!2s" width="600" height="450" className="border-0 w-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="contac-form d-flex justify-content-between">
                                <div>
                                    <h3 className="contact-title mb-4">Contact</h3>
                                    <form action="" className="d-flex flex-column gap-15">
                                        <div>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div>
                                            <input 
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div>
                                            <input 
                                                type="tel"
                                                className="form-control"
                                                placeholder="Mobile Number"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                name=""
                                                id=""
                                                className="form-control w-100"
                                                cols="30"
                                                rows="4"
                                                placeholder="Comments"
                                            >
                                            </textarea>
                                        </div>
                                        <div>
                                            <button className="button border-0">Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <h3 className="contact-title mb-4">Get in touch with us</h3>
                                    <ul className="ps-0">
                                        <li className="mb-3 d-flex align-items-center gap-15">
                                            <IoHomeOutline />
                                            <address className="mb-0">
                                                99/99 Duong Khue,Cau Giay,Ha Noi
                                            </address>
                                        </li>
                                        <li className="mb-3 d-flex align-items-center gap-15">
                                            <IoCallOutline />
                                            <a href="tel: +84 904282103">+84 904282103</a>
                                        </li>
                                        <li className="mb-3 d-flex align-items-center gap-15">
                                            <IoMailOutline />
                                            <a href="mailto: ng.quang.coder@gmail.com">
                                                ng.quang.coder@gmail.com
                                            </a>
                                        </li>
                                        <li className="mb-3 d-flex align-items-center gap-15">
                                            <IoInformationCircleOutline />
                                            <p className="mb-0">Monday - Friday 10 AM - 8PM</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact;