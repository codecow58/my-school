import { Form, Field } from "react-final-form";
import backgroundImage from "../../../../assets/images/bg-image.svg";
import { useState } from "react";
import { useAuthSignInWithEmailAndPassword } from "@react-query-firebase/auth";
import {auth} from '../../../../firebase'
import { useNavigate } from "react-location";
// 3730a3

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [err, setError] = useState(false);

    const navigate = useNavigate();
  const mutation = useAuthSignInWithEmailAndPassword(auth, {
    onError(error) {
      debugger;
      setError(error)
    },
    onSuccess(data){
      console.log(data);
      navigate({ to: "./about", replace: true });
    }
  });

  const onSubmit = ({email,password}) => {
    mutation.mutate({ email, password });
  };

  return (
    <div className="flex h-screen w-screen bg-indigo-100  justify-center items-center">
      <div className=" flex flex-col w-full h-full sm:flex-row md:w-3/4 md:h-3/4 bg-white">
        <div className="flex  flex-row flex-none w-full h-full sm:w-1/2">
          <div
            className="w-full h-full bg-no-repeat bg-center bg-indigo-800"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
        </div>
        <div className="flex flex-col flex-auto  w-full h-ful items-center justify-center p-10 space-y-3">
          <h3 className="text-xl font-bold font-mono text-indigo-800">Login</h3>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Field name="email">
                  {({ input, meta }) => (
                    <div className="flex flex-col">
                      <label htmlFor="email">Email: *</label>
                      <input
                        type="email"
                        {...input}
                        placeholder="test@test.com"
                        className="rounded-full"
                        id="email"
                        required
                      />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <div className="flex flex-col">
                      <label htmlFor="password">password: *</label>
                      <input
                        type="password"
                        {...input}
                        placeholder="password"
                        className="rounded-full"
                        id="password"
                        required
                      />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <button
                  type="submit"
                  className="w-full 
                border-2 rounded-full border-indigo-800 hover:bg-indigo-800 hover:text-gray-50 p-2"
                >
                  Submit
                </button>
                <br />
                <a href={"https://storyset.com/nature"}>
                  Nature illustrations by Storyset
                </a>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
};
