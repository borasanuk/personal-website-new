import "./contactInfo.scss";
import { CSSProperties } from "react";
import {
  IconAt,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons";

interface ContactInfoProps {
  style?: CSSProperties;
}

const ContactInfo = (props: ContactInfoProps) => {
  return (
    <section
      className="b-contact border-olive text-olive p-4"
      style={props.style}
    >
      <IconAt className="mb-auto me-auto" />
      <a href="mailto:borasanuk@gmail.com" className="nostyle-anchor">
        <IconMail />
      </a>
      <IconBrandGithub
        onClick={() => window.open("https://github.com/borasanuk", "_blank")}
        style={{ cursor: "pointer" }}
      />
      <IconBrandLinkedin
        onClick={() =>
          window.open("https://linkedin.com/in/borasanuk", "_blank")
        }
        style={{ cursor: "pointer" }}
      />
    </section>
  );
};

export default ContactInfo;
