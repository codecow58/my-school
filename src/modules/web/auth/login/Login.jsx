import { Form, Field } from "react-final-form";
import {useAuthSignInWithEmailAndPassword } from '@react-query-firebase/auth'
import backgroundImage from '../../../../assets/images/bg-image.svg'
import { auth } from "../../../../firebase";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const mutation = useAuthSignInWithEmailAndPassword(auth, {
    onError(error) {
    console.log("Could not sign you in!");
    },
  });


  const onSubmit = ({email,password}) =>{
    debugger;
    mutation.mutate({ email, password });
  };



  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-1/2 flex flex-col sm:flex-row h-2/3  sm:w-3/4">
        <div
          className="hidden lg:h-full lg:flex lg:w-1/2 bg-no-repeat object-cover"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className=" flex flex-col justify-center items-center ">
          <h3 className="text-xl font-semibold text-purple-500 text-center">
            Login
          </h3>
          <Form
            onSubmit={onSubmit}
            className="bg-gray-200"
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="space-y-2 w-64">
                <Field name="email">
                  {({ input, meta }) => (
                    <div>
                      <label className="block mb-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="text"
                        className=" w-full"
                        {...input}
                        placeholder="Email"
                        id="email"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 relative -top-8 float-right  text-purple-600 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      ;{meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <Field name="password">
                  {({ input, meta }) => (
                    <div>
                      <label className="block mb-2" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        {...input}
                        className="w-full"
                        placeholder="Password"
                        id="password"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 relative -top-8 float-right text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>

                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="remember_me">
                  {({ input, meta }) => (
                    <div className="space-x-1 space-y-2">
                      <input
                        type="checkbox"
                        {...input}
                        className=""
                        id="remember_me"
                      />
                      <label className="" htmlFor="remember_me">
                        Remember me
                      </label>

                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <button
                  className="w-full
                    text-purple-600 p-3 mt-10 border-2 border-purple-600 hover:text-gray-50 hover:bg-purple-600"
                  type="submit"
                >
                  Login
                </button>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
};



