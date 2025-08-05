import { DynamicForm } from "react-forminate";
import type { FormDataCollectionType } from "react-forminate";

const feedbackForm: FormDataCollectionType = {
  formId: "productFeedback",
  title: "Product Feedback",
  fields: [
    {
      fieldId: "rating",
      type: "radio",
      label: "How would you rate our product?",
      options: [
        {
          value: "1",
          label: "1 - Poor",
        },
        {
          value: "2",
          label: "2 - Fair",
        },
        {
          value: "3",
          label: "3 - Good",
        },
        {
          value: "4",
          label: "4 - Very Good",
        },
        {
          value: "5",
          label: "5 - Excellent",
        },
      ],
      required: true,
    },
    {
      fieldId: "feedback",
      type: "textarea",
      label: "Your feedback",
      placeholder: "What did you like or dislike?",
      validation: [{ minLength: 10, message: "Please provide more detail" }],
      className: "border border-gray-400 rounded p-2 w-full", //TailwindCSS classes
      labelClassName: "block mb-1 font-medium", //TailwindCSS classes
    },
    {
      fieldId: "contactMe",
      type: "checkbox",
      label: "Can we contact you about this feedback?",
      visibility: {
        dependsOn: "rating",
        condition: "equals", //"greater_than",
        value: "3", // Only show if rating > 3
      },
      options: [
        {
          value: "yes",
          label: "I confirm that I have parental consent to use this service",
        },
      ],
      description: "Please check this field to be able to submit the form",
    },
    {
      fieldId: "email",
      type: "email",
      label: "Your email",
      required: {
        fn: ({ values }) => values.contactMe === "yes",
        dependsOn: ["contactMe"],
      },
      validation: [
        {
          type: "email",
        },
      ],
      visibility: {
        dependsOn: ["contactMe"],
        condition: "equals", //contains
        value: "yes",
      },
      className: "border border-gray-400 rounded p-2 w-full", //TailwindCSS classes
      labelClassName: "block mb-1 font-medium", //TailwindCSS classes
    },
  ],
};

export default function ProductFeedback() {
  return (
    <DynamicForm
      formData={feedbackForm}
      onSubmit={(values, isValid) => console.log(values, isValid)}
    />
  );
}
