import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";

const notify = () =>
  toast("즐겨찾기가 수정되었습니다.", {
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },
    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

const Toast = ({ checked }) => {
  if (checked) {
    notify();
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
  }

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: tomato;
`;

export default Toast;
