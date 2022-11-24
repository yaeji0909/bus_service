import { Toaster } from "react-hot-toast";
const Toast = () => {
  return (
    <>
      <Toaster
        position='bottom-center'
        reverseOrder={false}
        gutter={8}
        containerClassName=''
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 1000,
          style: {
            borderRadius: "1.5rem",
            background: "#3F4150",
            color: "#fff",
            fontSize: "1rem",
            padding: "0.5rem",
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </>
  );
};

export default Toast;
