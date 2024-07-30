import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Icon } from 'components/Icon';
import { Input } from 'components/Input';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { tokens } from 'components/ThemeProvider/theme';
import { Transition } from 'components/Transition';
import { useFormInput } from 'hooks';
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from 'utils/style';
import styles from './Contact.module.css';

import { ProjectBackgroundContact, ProjectContainer } from 'layouts/Project';

import GalleryLarge3 from 'assets/sarvath/GalleryLarge3.jpg';
import GalleryLarge3placeholder from 'assets/volkihar-enderal-placeholder.jpg';

import { CustomAboutHeader } from 'pages/about/header/customHeader';
import { Fragment } from 'react';
const validatePhoneNumber = phoneNumber => {
  if (!phoneNumber) {
    return 'Phone number is required.';
  }
  const phoneRegex = /^\+[1-9]\d{1,14}$/;
  if (phoneNumber.length < 8) {
    return 'Invalid Phone Number';
  }
  if (!phoneRegex.test(phoneNumber)) {
    return 'Please enter a valid phone number with country code.'; // Return error message
  }

  return false; // Return empty string if no error
};
export const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const phone = useFormInput('');
  const name = useFormInput('');

  const message = useFormInput('');
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);
  const [statusError, setStatusError] = useState('');
  const initDelay = tokens.base.durationS;

  const onSubmit = async event => {
    event.preventDefault();
    setStatusError('');
    setSending(true);

    if (sending) return;
    try {
      let validate = validatePhoneNumber(phone.value);
      if (validate) {
        alert(validate);
        setSending(false);

        return false;
      }
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.value,
          message: message.value,
          phone: phone.value,
          name: name.value,
        }),
      });

      if (response.ok) {
        setComplete(true);
        setSending(false);
      } else {
        alert('Something went wrong!');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <Fragment>
      <Meta
        title="Contact"
        description="Send me a message if you’re interested in discussing a project or if you just want to say hi"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --rgbPrimary: 240 211 150;
              --rgbAccent: 240 211 150;
            }
            [data-theme='light'] {
              --rgbPrimary: 134 99 23;
              --rgbAccent: 134 99 23;
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackgroundContact
          srcSet={[GalleryLarge3, GalleryLarge3]}
          placeholder={GalleryLarge3placeholder}
          opacity={0.4}
        />

        <Section className={styles.contact}>
          <Transition unmount in={!complete} timeout={1000}>
            {(visible, status) => (
              <form className={styles.form} method="post" onSubmit={onSubmit}>
                <Heading
                  className={styles.title}
                  data-status={status}
                  level={3}
                  as="h1"
                  style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
                >
                  <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
                </Heading>

                <Divider
                  className={styles.divider}
                  data-status={status}
                  style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
                />
                <Input
                  required
                  className={styles.input}
                  data-status={status}
                  style={getDelay(tokens.base.durationS, initDelay)}
                  autoComplete="off"
                  label="Name"
                  maxLength={13}
                  {...name}
                />
                <Input
                  required
                  className={styles.input}
                  data-status={status}
                  style={getDelay(tokens.base.durationXS, initDelay)}
                  autoComplete="email"
                  label="Your Email"
                  type="email"
                  maxLength={512}
                  {...email}
                />
                <Input
                  required
                  className={styles.input}
                  data-status={status}
                  style={getDelay(tokens.base.durationS, initDelay)}
                  autoComplete="off"
                  label="Contact No"
                  type={'tel'}
                  maxLength={13}
                  {...phone}
                />
                <Input
                  required
                  multiline
                  className={styles.input}
                  data-status={status}
                  style={getDelay(tokens.base.durationS, initDelay)}
                  autoComplete="off"
                  label="Message"
                  maxLength={4096}
                  {...message}
                />
                <Transition in={statusError} timeout={msToNum(tokens.base.durationM)}>
                  {errorStatus => (
                    <div
                      className={styles.formError}
                      data-status={errorStatus}
                      style={cssProps({
                        height: errorStatus ? errorRef.current?.offsetHeight : 0,
                      })}
                    >
                      <div className={styles.formErrorContent} ref={errorRef}>
                        <div className={styles.formErrorMessage}>
                          <Icon className={styles.formErrorIcon} icon="error" />
                          {statusError}
                        </div>
                      </div>
                    </div>
                  )}
                </Transition>
                <Button
                  className={styles.button}
                  data-status={status}
                  data-sending={sending}
                  style={getDelay(tokens.base.durationM, initDelay)}
                  disabled={sending}
                  loading={sending}
                  loadingText="Sending..."
                  icon="send"
                  type="submit"
                >
                  Send message
                </Button>
              </form>
            )}
          </Transition>
          {complete && (
            <CustomAboutHeader
              title={'Message Sent Successfully'}
              description={'I’ll get back to you within a couple days'}
              linkLabel2="Back to homepage"
              url2={'/'}
            />
          )}
          <Footer className={styles.footer} />
        </Section>
      </ProjectContainer>
    </Fragment>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
