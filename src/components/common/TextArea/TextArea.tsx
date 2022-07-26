import React, { ChangeEventHandler, ForwardedRef } from "react";
import { has } from "lodash";
import classnames from "classnames";
import Button from "../Button/Button";

import s from "./TextArea.module.scss";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface TextAreaProps {
  value: string;
  label?: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  error?: any;
  invalid?: boolean;
  isDirty?: boolean;
  isTouched?: boolean;
}

const TextArea = React.forwardRef(
  (props: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const { value, label, onChange, placeholder, error, invalid } = props;

    return (
      <div className={s.TextArea__Wrapper}>
        <textarea
          className={classnames(s.TextArea, {
            [s.TextArea__errorTextArea]: invalid,
          })}
          value={value}
          onChange={onChange}
          placeholder={placeholder || "Add new post"}
          ref={ref}
        />
        {error && (
          <ErrorMessage
            message={has(error, "message") ? error.message : error}
          />
        )}
        <Button
          type="submit"
          className={s.TextArea__Button}
          label={label || "Add post"}
        />
      </div>
    );
  }
);

export default TextArea;
