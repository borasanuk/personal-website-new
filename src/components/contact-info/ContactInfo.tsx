import "./contactInfo.scss";
import { CSSProperties } from "react";
import { IconAt, IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons";

interface ContactInfoProps {
  style?: CSSProperties;
}

const ContactInfo = (props: ContactInfoProps) => {
  return (
    <section className="b-contact border-olive text-olive p-4" style={props.style}>
      
      <IconAt className="mb-auto me-auto" />
      <IconMail />
      <IconBrandGithub />
      <IconBrandLinkedin />
    </section>
  );
};

export default ContactInfo;
