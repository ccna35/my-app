import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <section>
      <div className="container">
        <LoginForm
          onLogin={(username, password) => {
            console.log(username, password);
          }}
          firstName="Shawky"
          lastName="Khalil"
          age={26}
        />
      </div>
    </section>
  );
};

export default Login;
