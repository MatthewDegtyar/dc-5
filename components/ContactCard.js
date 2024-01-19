import { Input, Textarea, Button, SelectItem, Select } from '@nextui-org/react'
import { useState } from 'react';
import React from 'react'

const ContactCard = ({ hideTags }) => {
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSubmit = () => {
      // Perform form submission logic
  
      // Show the thank you message
      setShowThankYou(true);

      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);
    };

    const styles = {
      label: "mb-2 mt-3 ml-2 text-default-500 text-[13px]",
    input:[
      "h-16",
      "mt-3",
      "h-[60px]",
      "p-2",
    ],
    inputWrapper: [
        "backdrop-blur-xl",
        "h-[60px]",
        "rounded-[2px]",
        "backdrop-saturate-200",
        "bg-white"
    ],
    }
    
  return (
    <div className='flex text-white flex-col relative' alt='contact card'>

        {!hideTags && 
            <div className='text-center flex flex-col items-center'>
                    <p className='text-center mb-2 mt-6 text-title'>Let's Get Started</p>
                    <p className='mb-6 max-w-[800px] text-sub self-center text-center'>Degtyar Consulting: Premier Digital Solutions</p>
            </div>
        }
        {hideTags && 
          <div className='h-8'></div>
        }
        <div className='flex flex-col items-center lg:px-[5vw]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 w-full'>
            <Input isRequired type="name" label="Name" placeholder="Ex. John Doe" />
            <Input isRequired type="email" label="Email" placeholder="Ex. John.Doe@mymail.com" />
            <Input type="phone" label="Phone" placeholder="Ex. 000-000-0000" />
            <Input type="email" label="Make/Model" placeholder="Ex. Ford/Mustang" />
            <Input isRequired type="email" label="Trim" placeholder="Ex. GT350" />
            <Select
                label="Transmission Type"
                placeholder="Manual Or Automatic"
            >
                <SelectItem>
                   Automatic
                </SelectItem>
                <SelectItem>
                   Manual
                </SelectItem>

            </Select>
            <Input isRequired type="number" label="Year" placeholder="Ex. 2019" />
            <Input isRequired type="number" label="Approximate Mileage" placeholder="Ex. 21900" />
            <Input type="email" label="State or Country of Residnce" placeholder="Ex. Florida, USA" />

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
            <Textarea
                label="Modifications & Condition"
                placeholder="Modifications Currently Installed & Current Condition & Current Condition of Vehicle"
            />
            <Textarea
                isRequired
                label="Comments/Inquery"
                placeholder="How can we help you?"
            />
        </div>

        <button onClick={() => handleSubmit()} href=''alt='' className='py-2 px-8 bg-none rounded-[1px] border-2 outline-white group hover:bg-white mt-8'>
          <p className='text-white group-hover:text-black underline-animation'>Submit</p>
        </button>

        </div>
        {showThankYou &&
          <div className='absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/30 backdrop-blur-md' alt='popup'>
            <div className='flex flex-col items-center justify-center p-8 rounded-md' alt='final'>
              <p className='text-title'>Thank you!</p>
              <p className='text-h2 mt-2'>We'll be in touch shortly</p>

              <button onClick={() => setShowThankYou(false)} href=''alt='' className='py-2 px-8 bg-none rounded-[1px] border-2 outline-white group hover:bg-white mt-8'>
                <p className='text-white group-hover:text-black underline-animation'>Close</p>
              </button>
            </div>
          </div>

        }
<div className='h-6' alt='spacer'></div>
    </div>
  )
}

export default ContactCard


/**

const styles = {
  label: "text-black/50 dark:text-white/90",
  input: [
    "bg-transparent",
    "text-black/90 dark:text-white/90",
    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
  ],
  innerWrapper: "bg-transparent",
  inputWrapper: [
    "shadow-xl",
    "bg-default-200/50",
    "dark:bg-default/60",
    "backdrop-blur-xl",
    "backdrop-saturate-200",
    "hover:bg-default-200/70",
    "focus-within:!bg-default-200/50",
    "dark:hover:bg-default/70",
    "dark:focus-within:!bg-default/60",
    "!cursor-text",
  ],
};

const MyInput = forwardRef((props, ref) => {
  const {
    Component,
    label,
    domRef,
    description,
    isClearable,
    startContent,
    endContent,
    shouldLabelBeOutside,
    shouldLabelBeInside,
    errorMessage,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getInnerWrapperProps,
    getInputWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps,
  } = useInput({
    ...props,
    ref,
    // this is just for the example, the props bellow should be passed by the parent component
    label: "Search",
    type: "search",
    placeholder: "Type to search...",
    startContent: (
      <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
    ),
    // custom styles
    classNames: {
      ...styles,
    },
  });

  const labelContent = <label {...getLabelProps()}>{label}</label>;

  const end = React.useMemo(() => {
    if (isClearable) {
      return <span {...getClearButtonProps()}>{endContent || <CloseFilledIcon />}</span>;
    }

    return endContent;
  }, [isClearable, getClearButtonProps]);

  const innerWrapper = React.useMemo(() => {
    if (startContent || end) {
      return (
        <div {...getInnerWrapperProps()}>
          {startContent}
          <input {...getInputProps()} />
          {end}
        </div>
      );
    }

    return <input {...getInputProps()} />;
  }, [startContent, end, getInputProps, getInnerWrapperProps]);

  return (
    <div className="w-[340px] h-[300px] px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      <Component {...getBaseProps()}>
        {shouldLabelBeOutside ? labelContent : null}
        <div
          {...getInputWrapperProps()}
          role="button"
          onClick={() => {
            domRef.current?.focus();
          }}
        >
          {shouldLabelBeInside ? labelContent : null}
          {innerWrapper}
        </div>
        {description && <div {...getDescriptionProps()}>{description}</div>}
        {errorMessage && <div {...getErrorMessageProps()}>{errorMessage}</div>}
      </Component>
    </div>
  );
});

MyInput.displayName = "MyInput";

 */