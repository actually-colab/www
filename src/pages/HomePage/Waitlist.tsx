import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Animation, Button, ControlLabel, Form, FormControl, FormGroup, Message, Schema } from "rsuite";
import { FormInstance } from "rsuite/lib/Form";

import { palette, spacing } from "../../constants/theme";
import { MediaQueryContext } from "../../contexts";
import { addToWaitlist } from "../../api/waitlist";

const styles = StyleSheet.create({
  waitlistContainer: {
    width: 400,
    marginTop: spacing.DEFAULT * 3,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  waitlistContainerMobile: {
    width: "100%",
  },
  waitlistInputContainer: {
    flex: 1,
  },
  waitlistInput: {
    width: "100%",
  },
  waitlistInlineButton: {
    marginLeft: spacing.DEFAULT,
    minWidth: 144,
  },
  required: {
    marginLeft: spacing.DEFAULT / 2,
    color: palette.ERROR,
  },
  fullFormContainer: {
    width: 400,
    marginTop: spacing.DEFAULT,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  fullFormContainerMobile: {
    width: "100%",
  },
  message: {
    width: 400,
    marginTop: spacing.DEFAULT * 2,
    marginLeft: "auto",
    marginRight: "auto",
  },
  messageMobile: {
    width: "100%",
  },
});

type WaitlistShortFormValue = {
  email: string;
};

type WaitlistFullFormValue = WaitlistShortFormValue & {
  job: string;
  reason: string;
};

const waitlistShortModel = Schema.Model({
  email: Schema.Types.StringType().isRequired("Please enter a valid email").isEmail("Please enter a valid email"),
});

const waitlistFullModel = Schema.Model({
  email: Schema.Types.StringType().isEmail("Please enter a valid email"),
  job: Schema.Types.StringType()
    .maxLength(144, "Please use at most 144 characters")
    .isRequired("This field is required"),
  reason: Schema.Types.StringType()
    .maxLength(144, "Please use at most 144 characters")
    .isRequired("This field is required"),
});

/**
 * The waitlist form
 */
const Waitlist: React.FC = () => {
  const waitlistShortFormRef = React.useRef<FormInstance>();
  const waitlistFullFormRef = React.useRef<FormInstance>();

  const { isMobile } = React.useContext(MediaQueryContext);

  const [waitlistFormValue, setWaitlistFormValue] = React.useState<WaitlistFullFormValue>({
    email: "",
    job: "",
    reason: "",
  });

  const [showFullForm, setShowFullForm] = React.useState<boolean>(false);
  const [visibleMessage, setVisibleMessage] = React.useState<"success" | "error" | "">("");

  const handleWaitlistFormSubmit = React.useCallback(
    async (_?: any, event?: React.FormEvent<HTMLFormElement>) => {
      event?.preventDefault();

      if (showFullForm) {
        if (!waitlistFullFormRef.current?.check()) {
          return;
        }

        // Handle joining the wailist
        const success = await addToWaitlist(waitlistFormValue);

        if (success) {
          setShowFullForm(false);

          setVisibleMessage("success");
        } else {
          setVisibleMessage("error");
        }
      } else {
        if (!waitlistShortFormRef.current?.check()) {
          return;
        }

        // Show the rest of the form
        setShowFullForm(true);
        return;
      }
    },
    [showFullForm, waitlistFormValue]
  );

  const handleWaitlistCancel = React.useCallback(() => {
    setShowFullForm(false);
  }, []);

  return (
    <React.Fragment>
      <Form
        ref={waitlistShortFormRef}
        checkTrigger="none"
        model={waitlistShortModel}
        formValue={waitlistFormValue}
        onChange={(formValue) =>
          setWaitlistFormValue((prevFormValue) => ({
            ...prevFormValue,
            ...(formValue as WaitlistShortFormValue),
          }))
        }
        onSubmit={handleWaitlistFormSubmit}
      >
        <div className={css(styles.waitlistContainer, isMobile && styles.waitlistContainerMobile)}>
          <div className={css(styles.waitlistInputContainer)}>
            <FormControl className={css(styles.waitlistInput)} name="email" placeholder="your@email.com" size="lg" />
          </div>

          <div className={css(styles.waitlistInlineButton)}>
            <Button block size="lg" onClick={showFullForm ? handleWaitlistCancel : handleWaitlistFormSubmit}>
              {showFullForm ? "Cancel" : "Join the waitlist"}
            </Button>
          </div>
        </div>
      </Form>

      <Animation.Collapse in={showFullForm}>
        <Form
          ref={waitlistFullFormRef}
          checkTrigger="none"
          fluid
          model={waitlistFullModel}
          formValue={waitlistFormValue}
          onChange={(formValue) =>
            setWaitlistFormValue((prevFormValue) => ({
              ...prevFormValue,
              ...(formValue as WaitlistFullFormValue),
            }))
          }
        >
          <div className={css(styles.fullFormContainer, isMobile && styles.fullFormContainerMobile)}>
            <FormGroup className={css(styles.waitlistInput)}>
              <ControlLabel>Job title</ControlLabel>
              <FormControl
                className={css(styles.waitlistInput)}
                name="job"
                placeholder="student, professor, software engineer, etc"
                size="lg"
              />
            </FormGroup>
            <FormGroup className={css(styles.waitlistInput)}>
              <ControlLabel>What will you use it for?</ControlLabel>
              <FormControl
                className={css(styles.waitlistInput)}
                name="reason"
                placeholder="teach remote data science workshops"
                size="lg"
              />
            </FormGroup>

            <Button type="submit" block appearance="primary" size="lg" onClick={handleWaitlistFormSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </Animation.Collapse>

      {visibleMessage === "success" && (
        <Message
          className={css(styles.message, isMobile && styles.messageMobile)}
          type="success"
          title="Congrats, we added you to the waitlist!"
          description="We'll email you when a spot becomes available"
          closable
          onClose={() => setVisibleMessage("")}
        />
      )}
      {visibleMessage === "error" && (
        <Message
          className={css(styles.message, isMobile && styles.messageMobile)}
          type="error"
          title="Uh oh!"
          description="We ran into an issue trying to add you to the waitlist, try again later!"
          closable
          onClose={() => setVisibleMessage("")}
        />
      )}
    </React.Fragment>
  );
};

export default Waitlist;
