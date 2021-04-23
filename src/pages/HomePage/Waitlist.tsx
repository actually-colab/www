import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Button, Form, FormControl, Schema, Tooltip, Whisper } from "rsuite";
import { FormInstance } from "rsuite/lib/Form";

import { spacing } from "../../constants/theme";
import { MediaQueryContext } from "../../contexts";

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
    paddingRight: spacing.DEFAULT,
  },
  waitlistInput: {
    width: "100%",
  },
});

type WaitlistFormValue = {
  email: string;
};

const waitlistModel = Schema.Model({
  email: Schema.Types.StringType().isEmail("Please enter a valid email"),
});

/**
 * The waitlist form
 */
const Waitlist: React.FC = () => {
  const waitlistFormRef = React.useRef<FormInstance>();

  const { isMobile } = React.useContext(MediaQueryContext);

  const [waitlistFormValue, setWaitlistFormValue] = React.useState<WaitlistFormValue>({
    email: "",
  });

  const handleWaitlistFormSubmit = React.useCallback(
    (_?: any, event?: React.FormEvent<HTMLFormElement>) => {
      event?.preventDefault();

      if (!waitlistFormRef.current?.check()) {
        return;
      }

      console.log(waitlistFormValue);
    },
    [waitlistFormValue]
  );

  return (
    <Form
      ref={waitlistFormRef}
      checkTrigger="none"
      model={waitlistModel}
      formValue={waitlistFormValue}
      onChange={(formValue) => setWaitlistFormValue(formValue as WaitlistFormValue)}
      onSubmit={handleWaitlistFormSubmit}
    >
      <div className={css(styles.waitlistContainer, isMobile && styles.waitlistContainerMobile)}>
        <div className={css(styles.waitlistInputContainer)}>
          <Whisper trigger="hover" placement="bottom" delay={500} speaker={<Tooltip>Coming soon</Tooltip>}>
            <FormControl
              className={css(styles.waitlistInput)}
              name="email"
              placeholder="your@email.com"
              size="lg"
              disabled
            />
          </Whisper>
        </div>

        <div>
          <Button size="lg" disabled onClick={handleWaitlistFormSubmit}>
            Join the waitlist
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default Waitlist;
