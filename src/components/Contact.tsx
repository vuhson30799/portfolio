import {createElement, useCallback, useContext, useEffect, useRef} from "react";
import emailjs from "@emailjs/browser";
import toast, {Toaster} from "react-hot-toast";
import {GrMail} from "react-icons/gr";
import {MdCall} from "react-icons/md";
import {useElementOnScreen} from "../hooks/use-element-on-screen.ts";
import {NavbarContext} from "../context/navbar-context.ts";
import {FaFacebook} from "react-icons/all";

declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        render: (elementId: string, key: {
          sitekey: string
        }) => void
        getResponse: () => string
        reset: () => void
      }
    };
  }
}

const contact = {
  title: "Contact Me",
  subtitle: "GET IN TOUCH",
  social_media: [
    {
      text: "shvu.dev@gmail.com",
      icon: GrMail,
      link: "mailto:shvu.dev@gmail.com",
    },
    {
      text: "+84 935 803 935",
      icon: MdCall,
      link: "tel:+84935803935",
    },
    {
      text: "Hoàng Sơn",
      icon: FaFacebook,
      link: "https://www.facebook.com/shvuSSS",
    },
  ],
}
const serviceId = import.meta.env.VITE_SERVICE_ID
const templateId = import.meta.env.VITE_TEMPLATE_ID
const siteKey = import.meta.env.VITE_SITE_KEY
const publicKey = import.meta.env.VITE_PUBLIC_KEY
export const ContactLink = '#contact'

const Contact = () => {
  const [ref, isVisible] = useElementOnScreen()
  const context = useContext(NavbarContext)
  useEffect(() => {
    context.setItem({
      ...context.item,
      [ContactLink]: isVisible
    })
  }, [isVisible]);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (document.getElementById('captchaElt')?.innerHTML == '') {
      window.grecaptcha.enterprise.render('captchaElt', {sitekey: siteKey});
    }
  }, []);
  const reCAPTCHA = useCallback(async () => {
    try {
      return window.grecaptcha.enterprise.getResponse()
    } catch (err: any) {
      console.log(err)
      toast.error(err.text);
    }
  }, [])
  const sendEmail = async (e: any) => {
    e.preventDefault();
    const token = await reCAPTCHA()
    if (!form.current) {
      toast.error('Unexpected error! Please try again later.');
      return;
    }
    if (!token) {
      toast.error('Failed to verify CAPTCHA!')
      return;
    }
    const contactData = new FormData(form.current)
    contactData.append('g-recaptcha-response', token)
    emailjs
      .send(
        // @ts-ignore
        serviceId, templateId, {
          name: contactData.get('name'),
          user_email: contactData.get('user_email'),
          message: contactData.get('message'),
          'g-recaptcha-response': token
        }, publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          // @ts-ignore
          form.current.reset();
          window.grecaptcha.enterprise.reset()
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-dark_primary text-white" id="contact" ref={ref}>
      <Toaster/>
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {contact.subtitle}
        </h4>
        <br/>
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5 g-recaptcha"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <div id="captchaElt" className="g-recaptcha"></div>
            <button
              className="btn self-start
            bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
