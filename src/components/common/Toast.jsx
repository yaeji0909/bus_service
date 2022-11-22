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
          duration: 5000,
          style: {
            borderRadius: "1rem",
            background: "#363636",
            color: "#fff",
            fontSize: "1rem",
            padding: "0.2rem",
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
