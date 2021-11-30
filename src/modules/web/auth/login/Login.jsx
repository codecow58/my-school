import { Form, Field } from "react-final-form";
import backgroundImage from '../../../../assets/images/bg-image.svg'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const onSubmit = () => console.log('hi');
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-1/2 flex flex-col sm:flex-row h-2/3  sm:w-3/4">
        <div
          className="hidden sm:h-full md:flex md:w-1/2 bg-no-repeat"
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
                <Field name="Email">
                  {({ input, meta }) => (
                    <div>
                      <label className="block mb-2">Email</label>
                      <input
                        type="text"
                        className=" w-full"
                        {...input}
                        placeholder="Email"
                      />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <Field name="Password">
                  {({ input, meta }) => (
                    <div>
                      <label className="block mb-2">Password</label>
                      <input
                        type="password"
                        {...input}
                        className="w-full"
                        placeholder="Password"
                      />

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
