import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';

type FormControl = HTMLInputElement | HTMLTextAreaElement;

export function useFormInput(initialValue: string = '') {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<string>();
  const [isDirty, setIsDirty] = useState(false);

  const handleChange = (event: ChangeEvent<FormControl>) => {
    setValue(event.target.value);
    setIsDirty(true);

    // Resolve errors as soon as input becomes valid
    if (error && event.target.checkValidity()) {
      setError(undefined);
    }
  };

  // Typed against `Element` (rather than `FormControl`) so the handler stays
  // assignable to the generic `onInvalid` prop expected by consumers; the
  // event target is narrowed to the concrete form control at runtime.
  const handleInvalid = (event: FormEvent<Element>) => {
    // Prevent native errors appearing
    event.preventDefault();
    setError((event.target as FormControl).validationMessage);
  };

  const handleBlur = (event: FocusEvent<FormControl>) => {
    // Only validate when the user has made a change
    if (isDirty) {
      event.target.checkValidity();
    }
  };

  return {
    value,
    error,
    onChange: handleChange,
    onBlur: handleBlur,
    onInvalid: handleInvalid,
  };
}
