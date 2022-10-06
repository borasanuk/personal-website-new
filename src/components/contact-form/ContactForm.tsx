import { Loader, Textarea, TextInput, UnstyledButton } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconCheck, IconSend } from "@tabler/icons";
import { CSSProperties, useState } from "react";
import {
  colorValues,
  Colorway,
  getColorwayClasses,
} from "../../common/colorway";
import { sendMessage } from "../../services/DatabaseService";
import "./contactForm.scss";

interface ContactFormProps {
  size?: "sm" | "md" | "lg" | "responsive";
  className?: string;
  style?: CSSProperties;
  colorway?: Colorway;
}

type ContactFormInput = {
  email: string;
  message: string;
};

const ContactForm = (props: ContactFormProps) => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [colorway] = useState<Colorway>(
    props.colorway || {
      background: "snow",
      border: "snow",
      text: "snow",
    }
  );

  const form = useForm<ContactFormInput>({
    initialValues: {
      email: "",
      message: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = (values: ContactFormInput) => {
    setLoading(true);
    sendMessage(values.email, values.message).then(() => {
      setLoading(false);
      setSent(true);
    });
  };

  return (
    <form
      onSubmit={form.onSubmit((values) => handleSubmit(values))}
      className="d-flex flex-column flex-sm-row"
      style={props.style}
    >
      <div
        className={
          "b-contact-form " +
          props.className +
          getColorwayClasses({
            background: colorway.text,
            border: colorway.border,
          })
        }
      >
        <div
          className={
            "b-contact-form-title " +
            props.size +
            getColorwayClasses({ text: colorway.text })
          }
        >
          Send a message
        </div>
        <hr
          style={{
            color:
              colorValues[
                (colorway.border + "Darker") as keyof typeof colorValues
              ],
          }}
        />

        <TextInput
          className={getColorwayClasses({ text: colorway.text }) + "mb-3"}
          style={{
            // borderRadius: 30,
            padding: 10,
            border:
              "1.2px solid " +
              colorValues[
                (colorway.text + "Darker") as keyof typeof colorValues
              ] +
              "30",
          }}
          variant="unstyled"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <Textarea
          className={getColorwayClasses({ text: colorway.text })}
          style={{
            // borderRadius: 30,
            height: 100,
            padding: 10,
            border:
              "1.2px solid " +
              colorValues[
                (colorway.text + "Darker") as keyof typeof colorValues
              ] +
              "30",
          }}
          variant="unstyled"
          placeholder="Message"
          {...form.getInputProps("message")}
        />
      </div>
      <UnstyledButton
        disabled={sent || loading}
        className={
          getColorwayClasses({
            background: colorway.background,
            border: colorway.border,
            hoverShadow: sent || loading ? undefined : colorway.border,
          }) + "d-flex p-3 b-contact-form-send"
        }
        type="submit"
        style={{ cursor: sent ? "not-allowed" : loading ? "progress" : "pointer" }}
      >
        <div className="m-auto" style={{ height: 24, width: 24 }}>
          {sent && !loading ? (
            <IconCheck
              color={
                colorValues[
                  (colorway.text + "Darker") as keyof typeof colorValues
                ]
              }
            />
          ) : loading ? (
            <Loader
              size={24}
              color={
                colorValues[
                  (colorway.text + "Darker") as keyof typeof colorValues
                ]
              }
            />
          ) : (
            <IconSend
              style={{ transform: "rotate(45deg) translate(-3px, 3px)"}}
              color={
                colorValues[
                  (colorway.text + "Darker") as keyof typeof colorValues
                ]
              }
            />
          )}
        </div>
      </UnstyledButton>
    </form>
  );
};

export default ContactForm;
