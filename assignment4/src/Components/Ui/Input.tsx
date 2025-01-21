import { ErrorMessage, Field } from "formik";

type InputProps = {
  name: string;
  id: string;
  lable: string;
  type: string;
};

export function Input(props: InputProps) {
  return (
    <div className="mb-4 flex flex-col">
      <label
        htmlFor={props.name}
        className="block text-sm font-medium text-gray-700 self-start"
      >
        Enter {props.lable}
      </label>
      <Field
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.lable}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ErrorMessage
        name={props.name}
        component="span"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
}
