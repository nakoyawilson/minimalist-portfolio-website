import SocialIcons from "../components/SocialIcons";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <main className="contact container">
      <section className="get-in-touch">
        <h1 className="section-heading">Get in Touch</h1>
        <div>
          <p className="paragraph">
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <SocialIcons fillColor="#33323D" />
        </div>
      </section>
      <section className="contact-me">
        <h2 className="section-heading">Contact Me</h2>
        <form className="contact-form">
          <label htmlFor="full-name" className="input-label">
            Name
          </label>
          <input
            type="text"
            id="full-name"
            placeholder="Jane Appleseed"
            className="form-input"
          />
          <label htmlFor="email-address" className="input-label">
            Email Address
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            className="form-input"
          />
          <label htmlFor="message" className="input-label">
            Message
          </label>
          <textarea
            id="message"
            placeholder="How can I help?"
            className="form-input message-input"
          ></textarea>
          <button className="send-btn">Send Message</button>
        </form>
      </section>
    </main>
  );
};

export default ContactMe;
